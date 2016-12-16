// Copyright 2016 Google Inc.
//
// Licensed under the Apache License, Version 2.0 (the "License");
// you may not use this file except in compliance with the License.
// You may obtain a copy of the License at
//
//      http://www.apache.org/licenses/LICENSE-2.0
//
// Unless required by applicable law or agreed to in writing, software
// distributed under the License is distributed on an "AS IS" BASIS,
// WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
// See the License for the specific language governing permissions and
// limitations under the License.
import { getData } from './Data';
import { updateCard } from './ui.js';
import { initialiseSubs, subscribeUser } from './notifications.js';
import * as fcm from './fcm-notifications.js';


let swRegistration;

(function () {
  'use strict';

  var app = {
    isLoading: true,
    visibleCards: {},
    selectedCities: [],
    spinner: document.querySelector('.loader'),
    cardTemplate: document.querySelector('.cardTemplate'),
    container: document.querySelector('.main'),
    debug: document.querySelector('.debug'),
    addDialog: document.querySelector('.dialog-container'),
    daysOfWeek: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun']
  };


  /*****************************************************************************
   *
   * Event listeners for UI elements
   *
   ****************************************************************************/

  document.getElementById('butRefresh').addEventListener('click', function () {
    // Refresh all of the forecasts
    console.log('butRefresh');
    // app.updateForecasts();
  });

  // document.getElementById('butAdd').addEventListener('click', function() {
  //   // Open/show the add new city dialog
  //   app.toggleAddDialog(true);
  // });

  // document.getElementById('butAddCity').addEventListener('click', function() {
  //   // Add the newly selected city
  //   var select = document.getElementById('selectCityToAdd');
  //   var selected = select.options[select.selectedIndex];
  //   var key = selected.value;
  //   var label = selected.textContent;
  //   if (!app.selectedCities) {
  //     app.selectedCities = [];
  //   }
  //   app.getForecast(key, label);
  //   app.selectedCities.push({key: key, label: label});
  //   app.saveSelectedCities();
  //   app.toggleAddDialog(false);
  // });

  // document.getElementById('butAddCancel').addEventListener('click', function() {
  //   // Close the add new city dialog
  //   app.toggleAddDialog(false);
  // });


  /*****************************************************************************
   *
   * Methods to update/refresh the UI
   *
   ****************************************************************************/

  // Toggles the visibility of the add new city dialog.
  app.toggleAddDialog = function (visible) {
    if (visible) {
      app.addDialog.classList.add('dialog-container--visible');
    } else {
      app.addDialog.classList.remove('dialog-container--visible');
    }
  };

  // Updates a weather card with the latest weather forecast. If the card
  // doesn't already exist, it's cloned from the template.
  app.updateForecastCard = function (data) {
    var dataLastUpdated = new Date(data.created);
    var sunrise = data.channel.astronomy.sunrise;
    var sunset = data.channel.astronomy.sunset;
    var current = data.channel.item.condition;
    var humidity = data.channel.atmosphere.humidity;
    var wind = data.channel.wind;

    var card = app.visibleCards[data.key];
    if (!card) {
      card = app.cardTemplate.cloneNode(true);
      card.classList.remove('cardTemplate');
      card.querySelector('.location').textContent = data.label;
      card.removeAttribute('hidden');
      app.container.appendChild(card);
      app.visibleCards[data.key] = card;
    }

    // Verifies the data provide is newer than what's already visible
    // on the card, if it's not bail, if it is, continue and update the
    // time saved in the card
    var cardLastUpdatedElem = card.querySelector('.card-last-updated');
    var cardLastUpdated = cardLastUpdatedElem.textContent;
    if (cardLastUpdated) {
      cardLastUpdated = new Date(cardLastUpdated);
      // Bail if the card has more recent data then the data
      if (dataLastUpdated.getTime() < cardLastUpdated.getTime()) {
        return;
      }
    }
    cardLastUpdatedElem.textContent = data.created;

    card.querySelector('.description').textContent = current.text;
    card.querySelector('.date').textContent = current.date;
    card.querySelector('.current .icon').classList.add(app.getIconClass(current.code));
    card.querySelector('.current .temperature .value').textContent =
      Math.round(current.temp);
    card.querySelector('.current .sunrise').textContent = sunrise;
    card.querySelector('.current .sunset').textContent = sunset;
    card.querySelector('.current .humidity').textContent =
      Math.round(humidity) + '%';
    card.querySelector('.current .wind .value').textContent =
      Math.round(wind.speed);
    card.querySelector('.current .wind .direction').textContent = wind.direction;
    var nextDays = card.querySelectorAll('.future .oneday');
    var today = new Date();
    today = today.getDay();
    for (var i = 0; i < 7; i++) {
      var nextDay = nextDays[i];
      var daily = data.channel.item.forecast[i];
      if (daily && nextDay) {
        nextDay.querySelector('.date').textContent =
          app.daysOfWeek[(i + today) % 7];
        nextDay.querySelector('.icon').classList.add(app.getIconClass(daily.code));
        nextDay.querySelector('.temp-high .value').textContent =
          Math.round(daily.high);
        nextDay.querySelector('.temp-low .value').textContent =
          Math.round(daily.low);
      }
    }
    if (app.isLoading) {
      app.spinner.setAttribute('hidden', true);
      app.container.removeAttribute('hidden');
      app.isLoading = false;
    }
  };


  /*****************************************************************************
   *
   * Methods for dealing with the model
   *
   ****************************************************************************/

  /*
   * Gets a forecast for a specific city and updates the card with the data.
   * getForecast() first checks if the weather data is in the cache. If so,
   * then it gets that data and populates the card with the cached data.
   * Then, getForecast() goes to the network for fresh data. If the network
   * request goes through, then the card gets updated a second time with the
   * freshest data.
   */
  app.getForecast = function (recordid, label) {
    getData().then(data => {
      data.records
        .map(record => updateCard(record, app.visibleCards, app.cardTemplate, app.container, 'fr'));
      app.isLoading = false;
      app.spinner.setAttribute('hidden', true);
    });

  };

  // Iterate all of the cards and attempt to get the latest forecast data
  app.updateForecasts = function () {
    var keys = Object.keys(app.visibleCards);
    keys.forEach(function (key) {
      app.getForecast(key);
    });
  };

  app.saveSelectedCities = function () {
    var selectedCities = JSON.stringify(app.selectedCities);
    localStorage.selectedCities = selectedCities;
  };

  /*
   * Fake weather data that is presented when the user first uses the app,
   * or when the user has not saved any cities. See startup code for more
   * discussion.
   */
  var initialPlayground = {
    "datasetid": "playgrounds",
    "recordid": "359be7807d0108e540717123b3ca3920caa451c0",
    "fields": {
      "nom": "Jardins de la vallée du Maalbeek",
      "code_postal": "1000",
      "description": "3 Jeux sur ressort 1 bascule 1 mur d’escalade 2 combinaisons de grimpe et de glisse",
      "adres": "Jozef II-straat ingang tegenover nr 108",
      "naam": "Maalbeekdalhof",
      "adresse": "Rue Jozef II - entrée face au n°108",
      "tranche_d_age": "3>12",
      "beschrijving": "3 veertoestellen 1 wip 1 klimmuur 2 glij-klim-combinatie"
    },
    "record_timestamp": "2015-06-22T12:11:25+00:00"
  };

  updateCard(initialPlayground, app.visibleCards, app.cardTemplate, app.container, 'fr');

  app.selectedCities = localStorage.selectedCities;

  if (app.selectedCities) {
    app.selectedCities = JSON.parse(app.selectedCities);
    app.selectedCities.forEach(function (city) {
      app.getForecast(city.recordid, city.label);
    });
  } else {
    updateCard(initialPlayground, app.visibleCards, app.cardTemplate, app.container, 'fr');
    app.selectedCities = [
      { key: initialPlayground.recordid, label: initialPlayground.label }
    ];
    app.saveSelectedCities();
  }


  // S E R V I C E   W O R K E R

  // if ('serviceWorker' in navigator && 'PushManager' in window) {
  //   navigator.serviceWorker
  //     .register('./service-worker.js')
  //     .then((swReg) => {
  //       swRegistration = swReg;
  //       console.log('Service Worker Registered', swReg);

  //       // Setup push notifications
  //       initialiseSubs(swRegistration)
  //         .then(sub => {
  //           app.debug.textContent = JSON.stringify(sub);
  //         });
  //     });
  // }

  fcm.connect()
})();
