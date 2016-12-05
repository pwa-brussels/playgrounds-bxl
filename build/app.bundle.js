System.registerDynamic("npm:core-js@1.2.7/library/modules/$.defined.js", [], true, function ($__require, exports, module) {
  var define,
      global = this || self,
      GLOBAL = global;
  // 7.2.1 RequireObjectCoercible(argument)
  module.exports = function (it) {
    if (it == undefined) throw TypeError("Can't call method on  " + it);
    return it;
  };
  return module.exports;
});
System.registerDynamic('npm:core-js@1.2.7/library/modules/$.to-object.js', ['npm:core-js@1.2.7/library/modules/$.defined.js'], true, function ($__require, exports, module) {
  var define,
      global = this || self,
      GLOBAL = global;
  /* */
  var defined = $__require('npm:core-js@1.2.7/library/modules/$.defined.js');
  module.exports = function (it) {
    return Object(defined(it));
  };
  return module.exports;
});
System.registerDynamic('npm:core-js@1.2.7/library/modules/$.global.js', [], true, function ($__require, exports, module) {
  var define,
      global = this || self,
      GLOBAL = global;
  // https://github.com/zloirock/core-js/issues/86#issuecomment-115759028
  var global = module.exports = typeof window != 'undefined' && window.Math == Math ? window : typeof self != 'undefined' && self.Math == Math ? self : Function('return this')();
  if (typeof __g == 'number') __g = global; // eslint-disable-line no-undef

  return module.exports;
});
System.registerDynamic('npm:core-js@1.2.7/library/modules/$.a-function.js', [], true, function ($__require, exports, module) {
  var define,
      global = this || self,
      GLOBAL = global;
  /* */
  module.exports = function (it) {
    if (typeof it != 'function') throw TypeError(it + ' is not a function!');
    return it;
  };
  return module.exports;
});
System.registerDynamic('npm:core-js@1.2.7/library/modules/$.ctx.js', ['npm:core-js@1.2.7/library/modules/$.a-function.js'], true, function ($__require, exports, module) {
  var define,
      global = this || self,
      GLOBAL = global;
  /* */
  var aFunction = $__require('npm:core-js@1.2.7/library/modules/$.a-function.js');
  module.exports = function (fn, that, length) {
    aFunction(fn);
    if (that === undefined) return fn;
    switch (length) {
      case 1:
        return function (a) {
          return fn.call(that, a);
        };
      case 2:
        return function (a, b) {
          return fn.call(that, a, b);
        };
      case 3:
        return function (a, b, c) {
          return fn.call(that, a, b, c);
        };
    }
    return function () {
      return fn.apply(that, arguments);
    };
  };
  return module.exports;
});
System.registerDynamic('npm:core-js@1.2.7/library/modules/$.export.js', ['npm:core-js@1.2.7/library/modules/$.global.js', 'npm:core-js@1.2.7/library/modules/$.core.js', 'npm:core-js@1.2.7/library/modules/$.ctx.js'], true, function ($__require, exports, module) {
  var define,
      global = this || self,
      GLOBAL = global;
  /* */
  var global = $__require('npm:core-js@1.2.7/library/modules/$.global.js'),
      core = $__require('npm:core-js@1.2.7/library/modules/$.core.js'),
      ctx = $__require('npm:core-js@1.2.7/library/modules/$.ctx.js'),
      PROTOTYPE = 'prototype';
  var $export = function (type, name, source) {
    var IS_FORCED = type & $export.F,
        IS_GLOBAL = type & $export.G,
        IS_STATIC = type & $export.S,
        IS_PROTO = type & $export.P,
        IS_BIND = type & $export.B,
        IS_WRAP = type & $export.W,
        exports = IS_GLOBAL ? core : core[name] || (core[name] = {}),
        target = IS_GLOBAL ? global : IS_STATIC ? global[name] : (global[name] || {})[PROTOTYPE],
        key,
        own,
        out;
    if (IS_GLOBAL) source = name;
    for (key in source) {
      own = !IS_FORCED && target && key in target;
      if (own && key in exports) continue;
      out = own ? target[key] : source[key];
      exports[key] = IS_GLOBAL && typeof target[key] != 'function' ? source[key] : IS_BIND && own ? ctx(out, global) : IS_WRAP && target[key] == out ? function (C) {
        var F = function (param) {
          return this instanceof C ? new C(param) : C(param);
        };
        F[PROTOTYPE] = C[PROTOTYPE];
        return F;
      }(out) : IS_PROTO && typeof out == 'function' ? ctx(Function.call, out) : out;
      if (IS_PROTO) (exports[PROTOTYPE] || (exports[PROTOTYPE] = {}))[key] = out;
    }
  };
  $export.F = 1;
  $export.G = 2;
  $export.S = 4;
  $export.P = 8;
  $export.B = 16;
  $export.W = 32;
  module.exports = $export;
  return module.exports;
});
System.registerDynamic("npm:core-js@1.2.7/library/modules/$.fails.js", [], true, function ($__require, exports, module) {
  var define,
      global = this || self,
      GLOBAL = global;
  /* */
  module.exports = function (exec) {
    try {
      return !!exec();
    } catch (e) {
      return true;
    }
  };
  return module.exports;
});
System.registerDynamic('npm:core-js@1.2.7/library/modules/$.object-sap.js', ['npm:core-js@1.2.7/library/modules/$.export.js', 'npm:core-js@1.2.7/library/modules/$.core.js', 'npm:core-js@1.2.7/library/modules/$.fails.js'], true, function ($__require, exports, module) {
    var define,
        global = this || self,
        GLOBAL = global;
    /* */
    var $export = $__require('npm:core-js@1.2.7/library/modules/$.export.js'),
        core = $__require('npm:core-js@1.2.7/library/modules/$.core.js'),
        fails = $__require('npm:core-js@1.2.7/library/modules/$.fails.js');
    module.exports = function (KEY, exec) {
        var fn = (core.Object || {})[KEY] || Object[KEY],
            exp = {};
        exp[KEY] = exec(fn);
        $export($export.S + $export.F * fails(function () {
            fn(1);
        }), 'Object', exp);
    };
    return module.exports;
});
System.registerDynamic('npm:core-js@1.2.7/library/modules/es6.object.keys.js', ['npm:core-js@1.2.7/library/modules/$.to-object.js', 'npm:core-js@1.2.7/library/modules/$.object-sap.js'], true, function ($__require, exports, module) {
  var define,
      global = this || self,
      GLOBAL = global;
  /* */
  var toObject = $__require('npm:core-js@1.2.7/library/modules/$.to-object.js');
  $__require('npm:core-js@1.2.7/library/modules/$.object-sap.js')('keys', function ($keys) {
    return function keys(it) {
      return $keys(toObject(it));
    };
  });
  return module.exports;
});
System.registerDynamic('npm:core-js@1.2.7/library/modules/$.core.js', [], true, function ($__require, exports, module) {
  var define,
      global = this || self,
      GLOBAL = global;
  /* */
  var core = module.exports = { version: '1.2.6' };
  if (typeof __e == 'number') __e = core; // eslint-disable-line no-undef

  return module.exports;
});
System.registerDynamic('npm:core-js@1.2.7/library/fn/object/keys.js', ['npm:core-js@1.2.7/library/modules/es6.object.keys.js', 'npm:core-js@1.2.7/library/modules/$.core.js'], true, function ($__require, exports, module) {
  var define,
      global = this || self,
      GLOBAL = global;
  /* */
  $__require('npm:core-js@1.2.7/library/modules/es6.object.keys.js');
  module.exports = $__require('npm:core-js@1.2.7/library/modules/$.core.js').Object.keys;
  return module.exports;
});
System.registerDynamic("npm:babel-runtime@5.8.38/core-js/object/keys.js", ["npm:core-js@1.2.7/library/fn/object/keys.js"], true, function ($__require, exports, module) {
  var define,
      global = this || self,
      GLOBAL = global;
  /* */
  module.exports = { "default": $__require("npm:core-js@1.2.7/library/fn/object/keys.js"), __esModule: true };
  return module.exports;
});
System.register('src/scripts/Data.js', [], function (_export) {
    'use strict';

    var API_URL;

    _export('getData', getData);

    function getData() {
        return fetch(API_URL).then(function (response) {
            return response.json();
        });
    }

    return {
        setters: [],
        execute: function () {
            API_URL = 'http://opendata.brussels.be/api/records/1.0/search/?dataset=playgrounds&refine.code_postal=1000';
        }
    };
});

System.register('src/scripts/ui.js', [], function (_export) {
    'use strict';

    _export('updateCard', updateCard);

    function updateCard(data, cards, cardTemplate, container, language) {
        var dataLastUpdated = new Date(data.record_timestamp);
        var postalCode = data.fields.code_postal;
        var age = data.fields.tranche_d_age;

        var name;
        var description;
        var address;

        if (language == 'fr') {
            name = data.fields.nom;
            description = data.fields.description;
            address = data.fields.addresse;
        } else {
            name = data.fieldsnaam;
            description = data.fields.beschrijving;
            address = data.fields.adres;
        }

        var card = cards[data.recordid];
        if (!card) {
            card = cardTemplate.cloneNode(true);
            card.classList.remove('cardTemplate');
            card.removeAttribute('hidden');
            container.appendChild(card);
            cards[data.recordid] = card;
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
        cardLastUpdatedElem.textContent = data.record_timestamp;

        card.querySelector('.name').textContent = name;
        card.querySelector('.description').textContent = description;
        card.querySelector('.address').textContent = address;
        card.querySelector('.age').textContent = age;
        card.querySelector('.postalCode').textContent = postalCode;
    }

    return {
        setters: [],
        execute: function () {}
    };
});

System.register('src/scripts/app.js', ['npm:babel-runtime@5.8.38/core-js/object/keys.js', 'src/scripts/Data.js', 'src/scripts/ui.js'], function (_export) {
  var _Object$keys, getData, updateCard;

  return {
    setters: [function (_npmBabelRuntime5838CoreJsObjectKeysJs) {
      _Object$keys = _npmBabelRuntime5838CoreJsObjectKeysJs['default'];
    }, function (_srcScriptsDataJs) {
      getData = _srcScriptsDataJs.getData;
    }, function (_srcScriptsUiJs) {
      updateCard = _srcScriptsUiJs.updateCard;
    }],
    execute: function () {
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
      'use strict';

      (function () {
        'use strict';

        var app = {
          isLoading: true,
          visibleCards: {},
          selectedCities: [],
          spinner: document.querySelector('.loader'),
          cardTemplate: document.querySelector('.cardTemplate'),
          container: document.querySelector('.main'),
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
          card.querySelector('.current .temperature .value').textContent = Math.round(current.temp);
          card.querySelector('.current .sunrise').textContent = sunrise;
          card.querySelector('.current .sunset').textContent = sunset;
          card.querySelector('.current .humidity').textContent = Math.round(humidity) + '%';
          card.querySelector('.current .wind .value').textContent = Math.round(wind.speed);
          card.querySelector('.current .wind .direction').textContent = wind.direction;
          var nextDays = card.querySelectorAll('.future .oneday');
          var today = new Date();
          today = today.getDay();
          for (var i = 0; i < 7; i++) {
            var nextDay = nextDays[i];
            var daily = data.channel.item.forecast[i];
            if (daily && nextDay) {
              nextDay.querySelector('.date').textContent = app.daysOfWeek[(i + today) % 7];
              nextDay.querySelector('.icon').classList.add(app.getIconClass(daily.code));
              nextDay.querySelector('.temp-high .value').textContent = Math.round(daily.high);
              nextDay.querySelector('.temp-low .value').textContent = Math.round(daily.low);
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
          getData().then(function (data) {
            data.records.map(function (record) {
              return updateCard(record, app.visibleCards, app.cardTemplate, app.container, 'fr');
            });
            app.isLoading = false;
            app.spinner.setAttribute('hidden', true);
          });
        };

        // Iterate all of the cards and attempt to get the latest forecast data
        app.updateForecasts = function () {
          var keys = _Object$keys(app.visibleCards);
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
          app.selectedCities = [{ key: initialPlayground.recordid, label: initialPlayground.label }];
          app.saveSelectedCities();
        }

        if ('serviceWorker' in navigator) {
          navigator.serviceWorker.register('./service-worker.js').then(function () {
            console.log('Service Worker Registered');
          });
        }
      })();
    }
  };
});
