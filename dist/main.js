/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/scripts/app.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./src/scripts/Data.js":
/*!*****************************!*\
  !*** ./src/scripts/Data.js ***!
  \*****************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nObject.defineProperty(exports, \"__esModule\", {\n    value: true\n});\nexports.getData = getData;\nvar API_URL = 'https://opendata.brussels.be/api/records/1.0/search/?dataset=playgrounds&refine.code_postal=1000';\n\nfunction getData() {\n    return fetch(API_URL).then(function (response) {\n        return response.json();\n    });\n}\n\n//# sourceURL=webpack:///./src/scripts/Data.js?");

/***/ }),

/***/ "./src/scripts/app.js":
/*!****************************!*\
  !*** ./src/scripts/app.js ***!
  \****************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nvar _Data = __webpack_require__(/*! ./Data */ \"./src/scripts/Data.js\");\n\nvar _ui = __webpack_require__(/*! ./ui.js */ \"./src/scripts/ui.js\");\n\nvar _notifications = __webpack_require__(/*! ./notifications.js */ \"./src/scripts/notifications.js\");\n\nvar swRegistration = void 0; // Copyright 2016 Google Inc.\n//\n// Licensed under the Apache License, Version 2.0 (the \"License\");\n// you may not use this file except in compliance with the License.\n// You may obtain a copy of the License at\n//\n//      http://www.apache.org/licenses/LICENSE-2.0\n//\n// Unless required by applicable law or agreed to in writing, software\n// distributed under the License is distributed on an \"AS IS\" BASIS,\n// WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.\n// See the License for the specific language governing permissions and\n// limitations under the License.\n\n\n(function () {\n  'use strict';\n\n  var app = {\n    isLoading: true,\n    visibleCards: {},\n    selectedCities: [],\n    spinner: document.querySelector('.loader'),\n    cardTemplate: document.querySelector('.cardTemplate'),\n    container: document.querySelector('.main'),\n    addDialog: document.querySelector('.dialog-container'),\n    daysOfWeek: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun']\n  };\n\n  /*****************************************************************************\n   *\n   * Event listeners for UI elements\n   *\n   ****************************************************************************/\n\n  document.getElementById('butRefresh').addEventListener('click', function () {\n    // Refresh all of the forecasts\n    console.log('butRefresh');\n    // app.updateForecasts();\n  });\n\n  // document.getElementById('butAdd').addEventListener('click', function() {\n  //   // Open/show the add new city dialog\n  //   app.toggleAddDialog(true);\n  // });\n\n  // document.getElementById('butAddCity').addEventListener('click', function() {\n  //   // Add the newly selected city\n  //   var select = document.getElementById('selectCityToAdd');\n  //   var selected = select.options[select.selectedIndex];\n  //   var key = selected.value;\n  //   var label = selected.textContent;\n  //   if (!app.selectedCities) {\n  //     app.selectedCities = [];\n  //   }\n  //   app.getForecast(key, label);\n  //   app.selectedCities.push({key: key, label: label});\n  //   app.saveSelectedCities();\n  //   app.toggleAddDialog(false);\n  // });\n\n  // document.getElementById('butAddCancel').addEventListener('click', function() {\n  //   // Close the add new city dialog\n  //   app.toggleAddDialog(false);\n  // });\n\n\n  /*****************************************************************************\n   *\n   * Methods to update/refresh the UI\n   *\n   ****************************************************************************/\n\n  // Toggles the visibility of the add new city dialog.\n  app.toggleAddDialog = function (visible) {\n    if (visible) {\n      app.addDialog.classList.add('dialog-container--visible');\n    } else {\n      app.addDialog.classList.remove('dialog-container--visible');\n    }\n  };\n\n  // Updates a weather card with the latest weather forecast. If the card\n  // doesn't already exist, it's cloned from the template.\n  app.updateForecastCard = function (data) {\n    var dataLastUpdated = new Date(data.created);\n    var sunrise = data.channel.astronomy.sunrise;\n    var sunset = data.channel.astronomy.sunset;\n    var current = data.channel.item.condition;\n    var humidity = data.channel.atmosphere.humidity;\n    var wind = data.channel.wind;\n\n    var card = app.visibleCards[data.key];\n    if (!card) {\n      card = app.cardTemplate.cloneNode(true);\n      card.classList.remove('cardTemplate');\n      card.querySelector('.location').textContent = data.label;\n      card.removeAttribute('hidden');\n      app.container.appendChild(card);\n      app.visibleCards[data.key] = card;\n    }\n\n    // Verifies the data provide is newer than what's already visible\n    // on the card, if it's not bail, if it is, continue and update the\n    // time saved in the card\n    var cardLastUpdatedElem = card.querySelector('.card-last-updated');\n    var cardLastUpdated = cardLastUpdatedElem.textContent;\n    if (cardLastUpdated) {\n      cardLastUpdated = new Date(cardLastUpdated);\n      // Bail if the card has more recent data then the data\n      if (dataLastUpdated.getTime() < cardLastUpdated.getTime()) {\n        return;\n      }\n    }\n    cardLastUpdatedElem.textContent = data.created;\n\n    card.querySelector('.description').textContent = current.text;\n    card.querySelector('.date').textContent = current.date;\n    card.querySelector('.current .icon').classList.add(app.getIconClass(current.code));\n    card.querySelector('.current .temperature .value').textContent = Math.round(current.temp);\n    card.querySelector('.current .sunrise').textContent = sunrise;\n    card.querySelector('.current .sunset').textContent = sunset;\n    card.querySelector('.current .humidity').textContent = Math.round(humidity) + '%';\n    card.querySelector('.current .wind .value').textContent = Math.round(wind.speed);\n    card.querySelector('.current .wind .direction').textContent = wind.direction;\n    var nextDays = card.querySelectorAll('.future .oneday');\n    var today = new Date();\n    today = today.getDay();\n    for (var i = 0; i < 7; i++) {\n      var nextDay = nextDays[i];\n      var daily = data.channel.item.forecast[i];\n      if (daily && nextDay) {\n        nextDay.querySelector('.date').textContent = app.daysOfWeek[(i + today) % 7];\n        nextDay.querySelector('.icon').classList.add(app.getIconClass(daily.code));\n        nextDay.querySelector('.temp-high .value').textContent = Math.round(daily.high);\n        nextDay.querySelector('.temp-low .value').textContent = Math.round(daily.low);\n      }\n    }\n    if (app.isLoading) {\n      app.spinner.setAttribute('hidden', true);\n      app.container.removeAttribute('hidden');\n      app.isLoading = false;\n    }\n  };\n\n  /*****************************************************************************\n   *\n   * Methods for dealing with the model\n   *\n   ****************************************************************************/\n\n  /*\n   * Gets a forecast for a specific city and updates the card with the data.\n   * getForecast() first checks if the weather data is in the cache. If so,\n   * then it gets that data and populates the card with the cached data.\n   * Then, getForecast() goes to the network for fresh data. If the network\n   * request goes through, then the card gets updated a second time with the\n   * freshest data.\n   */\n  app.getForecast = function (recordid, label) {\n    (0, _Data.getData)().then(function (data) {\n      data.records.map(function (record) {\n        return (0, _ui.updateCard)(record, app.visibleCards, app.cardTemplate, app.container, 'fr');\n      });\n      app.isLoading = false;\n      app.spinner.setAttribute('hidden', true);\n    });\n  };\n\n  // Iterate all of the cards and attempt to get the latest forecast data\n  app.updateForecasts = function () {\n    var keys = Object.keys(app.visibleCards);\n    keys.forEach(function (key) {\n      app.getForecast(key);\n    });\n  };\n\n  app.saveSelectedCities = function () {\n    var selectedCities = JSON.stringify(app.selectedCities);\n    localStorage.selectedCities = selectedCities;\n  };\n\n  /*\n   * Fake weather data that is presented when the user first uses the app,\n   * or when the user has not saved any cities. See startup code for more\n   * discussion.\n   */\n  var initialPlayground = {\n    \"datasetid\": \"playgrounds\",\n    \"recordid\": \"359be7807d0108e540717123b3ca3920caa451c0\",\n    \"fields\": {\n      \"nom\": \"Jardins de la vallée du Maalbeek\",\n      \"code_postal\": \"1000\",\n      \"description\": \"3 Jeux sur ressort 1 bascule 1 mur d’escalade 2 combinaisons de grimpe et de glisse\",\n      \"adres\": \"Jozef II-straat ingang tegenover nr 108\",\n      \"naam\": \"Maalbeekdalhof\",\n      \"adresse\": \"Rue Jozef II - entrée face au n°108\",\n      \"tranche_d_age\": \"3>12\",\n      \"beschrijving\": \"3 veertoestellen 1 wip 1 klimmuur 2 glij-klim-combinatie\"\n    },\n    \"record_timestamp\": \"2015-06-22T12:11:25+00:00\"\n  };\n\n  (0, _ui.updateCard)(initialPlayground, app.visibleCards, app.cardTemplate, app.container, 'fr');\n\n  app.selectedCities = localStorage.selectedCities;\n  if (app.selectedCities) {\n    app.selectedCities = JSON.parse(app.selectedCities);\n    app.selectedCities.forEach(function (city) {\n      app.getForecast(city.recordid, city.label);\n    });\n  } else {\n    (0, _ui.updateCard)(initialPlayground, app.visibleCards, app.cardTemplate, app.container, 'fr');\n    app.selectedCities = [{ key: initialPlayground.recordid, label: initialPlayground.label }];\n    app.saveSelectedCities();\n  }\n\n  // S E R V I C E   W O R K E R\n\n  if ('serviceWorker' in navigator && 'PushManager' in window) {\n    navigator.serviceWorker.register('./service-worker.js').then(function (swReg) {\n      swRegistration = swReg;\n      console.log('Service Worker Registered', swReg);\n\n      // Next setup push notifications\n      (0, _notifications.initialiseSubs)(swRegistration);\n    });\n  }\n})();\n\n//# sourceURL=webpack:///./src/scripts/app.js?");

/***/ }),

/***/ "./src/scripts/notifications.js":
/*!**************************************!*\
  !*** ./src/scripts/notifications.js ***!
  \**************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nObject.defineProperty(exports, \"__esModule\", {\n  value: true\n});\nexports.initialiseSubs = initialiseSubs;\nvar isSubscribed = void 0;\n\n// From https://web-push-codelab.appspot.com/\nvar applicationServerPublicKey = \"BPQyQxDT0qp4Ph8xaZSQvCmJKVHH5K2cX8VlXMHK9u5M-AddMoRM9ukaXwVOULABbBfE2AP6VfgpErdrW3o1ge4\";\n\nfunction initialiseSubs(swRegistration) {\n  // Set the initial subscription value\n  // Check whether the pushManager, which is part of the Service Worker, already has a subscription.\n  swRegistration.pushManager.getSubscription().then(function (subscription) {\n    isSubscribed = !(subscription === null);\n\n    if (isSubscribed) {\n      console.log('User IS already subscribed.');\n    } else {\n      console.log('User is NOT subscribed.');\n    }\n\n    // Commenting out next function call as it currently does nothing\n    // updateSubscriptionOnServer(subscription);\n\n    // (Re-)subscribe user\n    subscribeUser(swRegistration);\n  });\n}\n\nfunction subscribeUser(swRegistration) {\n  var applicationServerKey = urlB64ToUint8Array(applicationServerPublicKey);\n  swRegistration.pushManager.subscribe({\n    userVisibleOnly: true,\n    applicationServerKey: applicationServerKey\n  }).then(function (subscription) {\n    // User has accepted notifications\n    // Browser has connected to push server\n    console.log('User is subscribed:', subscription);\n\n    updateSubscriptionOnServer(subscription);\n\n    isSubscribed = true;\n\n    // updateBtn();\n  }).catch(function (err) {\n    console.error('Failed to subscribe the user: ', err);\n    // updateBtn();\n  });\n}\n\nfunction updateSubscriptionOnServer(subscription) {\n  // TODO: Send subscription to our App's server\n  if (subscription) {\n    // console.log(\"Existing subscription\")\n    console.log(JSON.stringify(subscription));\n  } else {\n    console.log(\"No existing subscription\");\n  }\n}\n\nfunction urlB64ToUint8Array(base64String) {\n  var padding = '='.repeat((4 - base64String.length % 4) % 4);\n  var base64 = (base64String + padding).replace(/\\-/g, '+').replace(/_/g, '/');\n\n  var rawData = window.atob(base64);\n  var outputArray = new Uint8Array(rawData.length);\n\n  for (var i = 0; i < rawData.length; ++i) {\n    outputArray[i] = rawData.charCodeAt(i);\n  }\n  return outputArray;\n}\n\n// export function updateBtn() {\n//   if (isSubscribed) {\n//     pushButton.textContent = 'Disable Push Messaging';\n//   } else {\n//     pushButton.textContent = 'Enable Push Messaging';\n//   }\n\n//   pushButton.disabled = false;\n// }\n\n//# sourceURL=webpack:///./src/scripts/notifications.js?");

/***/ }),

/***/ "./src/scripts/ui.js":
/*!***************************!*\
  !*** ./src/scripts/ui.js ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nObject.defineProperty(exports, \"__esModule\", {\n    value: true\n});\nexports.updateCard = updateCard;\nfunction updateCard(data, cards, cardTemplate, container, language) {\n    var dataLastUpdated = new Date(data.record_timestamp);\n    var postalCode = data.fields.code_postal;\n    var age = data.fields.tranche_d_age;\n\n    var name;\n    var description;\n    var address;\n\n    if (language == 'fr') {\n        name = data.fields.nom;\n        description = data.fields.description;\n        address = data.fields.addresse;\n    } else {\n        name = data.fieldsnaam;\n        description = data.fields.beschrijving;\n        address = data.fields.adres;\n    }\n\n    var card = cards[data.recordid];\n    if (!card) {\n        card = cardTemplate.cloneNode(true);\n        card.classList.remove('cardTemplate');\n        card.removeAttribute('hidden');\n        container.appendChild(card);\n        cards[data.recordid] = card;\n    }\n\n    // Verifies the data provide is newer than what's already visible\n    // on the card, if it's not bail, if it is, continue and update the\n    // time saved in the card\n    var cardLastUpdatedElem = card.querySelector('.card-last-updated');\n    var cardLastUpdated = cardLastUpdatedElem.textContent;\n    if (cardLastUpdated) {\n        cardLastUpdated = new Date(cardLastUpdated);\n        // Bail if the card has more recent data then the data\n        if (dataLastUpdated.getTime() < cardLastUpdated.getTime()) {\n            return;\n        }\n    }\n    cardLastUpdatedElem.textContent = data.record_timestamp;\n\n    card.querySelector('.name').textContent = name;\n    card.querySelector('.description').textContent = description;\n    card.querySelector('.address').textContent = address;\n    card.querySelector('.age').textContent = age;\n    card.querySelector('.postalCode').textContent = postalCode;\n}\n\n//# sourceURL=webpack:///./src/scripts/ui.js?");

/***/ })

/******/ });