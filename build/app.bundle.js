!function(e){function r(e,r,o){return 4===arguments.length?t.apply(this,arguments):void n(e,{declarative:!0,deps:r,declare:o})}function t(e,r,t,o){n(e,{declarative:!1,deps:r,executingRequire:t,execute:o})}function n(e,r){r.name=e,e in v||(v[e]=r),r.normalizedDeps=r.deps}function o(e,r){if(r[e.groupIndex]=r[e.groupIndex]||[],-1==g.call(r[e.groupIndex],e)){r[e.groupIndex].push(e);for(var t=0,n=e.normalizedDeps.length;n>t;t++){var a=e.normalizedDeps[t],u=v[a];if(u&&!u.evaluated){var d=e.groupIndex+(u.declarative!=e.declarative);if(void 0===u.groupIndex||u.groupIndex<d){if(void 0!==u.groupIndex&&(r[u.groupIndex].splice(g.call(r[u.groupIndex],u),1),0==r[u.groupIndex].length))throw new TypeError("Mixed dependency cycle detected");u.groupIndex=d}o(u,r)}}}}function a(e){var r=v[e];r.groupIndex=0;var t=[];o(r,t);for(var n=!!r.declarative==t.length%2,a=t.length-1;a>=0;a--){for(var u=t[a],i=0;i<u.length;i++){var s=u[i];n?d(s):l(s)}n=!n}}function u(e){return y[e]||(y[e]={name:e,dependencies:[],exports:{},importers:[]})}function d(r){if(!r.module){var t=r.module=u(r.name),n=r.module.exports,o=r.declare.call(e,function(e,r){if(t.locked=!0,"object"==typeof e)for(var o in e)n[o]=e[o];else n[e]=r;for(var a=0,u=t.importers.length;u>a;a++){var d=t.importers[a];if(!d.locked)for(var i=0;i<d.dependencies.length;++i)d.dependencies[i]===t&&d.setters[i](n)}return t.locked=!1,r},{id:r.name});t.setters=o.setters,t.execute=o.execute;for(var a=0,i=r.normalizedDeps.length;i>a;a++){var l,s=r.normalizedDeps[a],c=v[s],f=y[s];f?l=f.exports:c&&!c.declarative?l=c.esModule:c?(d(c),f=c.module,l=f.exports):l=p(s),f&&f.importers?(f.importers.push(t),t.dependencies.push(f)):t.dependencies.push(null),t.setters[a]&&t.setters[a](l)}}}function i(e){var r,t=v[e];if(t)t.declarative?f(e,[]):t.evaluated||l(t),r=t.module.exports;else if(r=p(e),!r)throw new Error("Unable to load dependency "+e+".");return(!t||t.declarative)&&r&&r.__useDefault?r["default"]:r}function l(r){if(!r.module){var t={},n=r.module={exports:t,id:r.name};if(!r.executingRequire)for(var o=0,a=r.normalizedDeps.length;a>o;o++){var u=r.normalizedDeps[o],d=v[u];d&&l(d)}r.evaluated=!0;var c=r.execute.call(e,function(e){for(var t=0,n=r.deps.length;n>t;t++)if(r.deps[t]==e)return i(r.normalizedDeps[t]);throw new TypeError("Module "+e+" not declared as a dependency.")},t,n);void 0!==c&&(n.exports=c),t=n.exports,t&&t.__esModule?r.esModule=t:r.esModule=s(t)}}function s(r){var t={};if(("object"==typeof r||"function"==typeof r)&&r!==e)if(m)for(var n in r)"default"!==n&&c(t,r,n);else{var o=r&&r.hasOwnProperty;for(var n in r)"default"===n||o&&!r.hasOwnProperty(n)||(t[n]=r[n])}return t["default"]=r,x(t,"__useDefault",{value:!0}),t}function c(e,r,t){try{var n;(n=Object.getOwnPropertyDescriptor(r,t))&&x(e,t,n)}catch(o){return e[t]=r[t],!1}}function f(r,t){var n=v[r];if(n&&!n.evaluated&&n.declarative){t.push(r);for(var o=0,a=n.normalizedDeps.length;a>o;o++){var u=n.normalizedDeps[o];-1==g.call(t,u)&&(v[u]?f(u,t):p(u))}n.evaluated||(n.evaluated=!0,n.module.execute.call(e))}}function p(e){if(I[e])return I[e];if("@node/"==e.substr(0,6))return I[e]=s(D(e.substr(6)));var r=v[e];if(!r)throw"Module "+e+" not present.";return a(e),f(e,[]),v[e]=void 0,r.declarative&&x(r.module.exports,"__esModule",{value:!0}),I[e]=r.declarative?r.module.exports:r.esModule}var v={},g=Array.prototype.indexOf||function(e){for(var r=0,t=this.length;t>r;r++)if(this[r]===e)return r;return-1},m=!0;try{Object.getOwnPropertyDescriptor({a:0},"a")}catch(h){m=!1}var x;!function(){try{Object.defineProperty({},"a",{})&&(x=Object.defineProperty)}catch(e){x=function(e,r,t){try{e[r]=t.value||t.get.call(e)}catch(n){}}}}();var y={},D="undefined"!=typeof System&&System._nodeRequire||"undefined"!=typeof require&&"undefined"!=typeof require.resolve&&"undefined"!=typeof process&&process.platform&&require,I={"@empty":{}};return function(e,n,o,a){return function(u){u(function(u){for(var d={_nodeRequire:D,register:r,registerDynamic:t,get:p,set:function(e,r){I[e]=r},newModule:function(e){return e}},i=0;i<n.length;i++)(function(e,r){r&&r.__esModule?I[e]=r:I[e]=s(r)})(n[i],arguments[i]);a(d);var l=p(e[0]);if(e.length>1)for(var i=1;i<e.length;i++)p(e[i]);return o?l["default"]:l})}}}("undefined"!=typeof self?self:global)

(["1"], [], false, function($__System) {
var require = this.require, exports = this.exports, module = this.module;
$__System.registerDynamic("2", [], true, function ($__require, exports, module) {
  var global = this || self,
      GLOBAL = global;
  // 7.2.1 RequireObjectCoercible(argument)
  module.exports = function (it) {
    if (it == undefined) throw TypeError("Can't call method on  " + it);
    return it;
  };
});
$__System.registerDynamic('3', ['2'], true, function ($__require, exports, module) {
  var global = this || self,
      GLOBAL = global;
  /* */
  var defined = $__require('2');
  module.exports = function (it) {
    return Object(defined(it));
  };
});
$__System.registerDynamic('4', [], true, function ($__require, exports, module) {
  var global = this || self,
      GLOBAL = global;
  // https://github.com/zloirock/core-js/issues/86#issuecomment-115759028
  var global = module.exports = typeof window != 'undefined' && window.Math == Math ? window : typeof self != 'undefined' && self.Math == Math ? self : Function('return this')();
  if (typeof __g == 'number') __g = global; // eslint-disable-line no-undef
});
$__System.registerDynamic('5', [], true, function ($__require, exports, module) {
  var global = this || self,
      GLOBAL = global;
  /* */
  module.exports = function (it) {
    if (typeof it != 'function') throw TypeError(it + ' is not a function!');
    return it;
  };
});
$__System.registerDynamic('6', ['5'], true, function ($__require, exports, module) {
  var global = this || self,
      GLOBAL = global;
  /* */
  var aFunction = $__require('5');
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
});
$__System.registerDynamic('7', ['4', '8', '6'], true, function ($__require, exports, module) {
  var global = this || self,
      GLOBAL = global;
  /* */
  var global = $__require('4'),
      core = $__require('8'),
      ctx = $__require('6'),
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
});
$__System.registerDynamic("9", [], true, function ($__require, exports, module) {
  var global = this || self,
      GLOBAL = global;
  /* */
  module.exports = function (exec) {
    try {
      return !!exec();
    } catch (e) {
      return true;
    }
  };
});
$__System.registerDynamic('a', ['7', '8', '9'], true, function ($__require, exports, module) {
    var global = this || self,
        GLOBAL = global;
    /* */
    var $export = $__require('7'),
        core = $__require('8'),
        fails = $__require('9');
    module.exports = function (KEY, exec) {
        var fn = (core.Object || {})[KEY] || Object[KEY],
            exp = {};
        exp[KEY] = exec(fn);
        $export($export.S + $export.F * fails(function () {
            fn(1);
        }), 'Object', exp);
    };
});
$__System.registerDynamic('b', ['3', 'a'], true, function ($__require, exports, module) {
  var global = this || self,
      GLOBAL = global;
  /* */
  var toObject = $__require('3');
  $__require('a')('keys', function ($keys) {
    return function keys(it) {
      return $keys(toObject(it));
    };
  });
});
$__System.registerDynamic('8', [], true, function ($__require, exports, module) {
  var global = this || self,
      GLOBAL = global;
  /* */
  var core = module.exports = { version: '1.2.6' };
  if (typeof __e == 'number') __e = core; // eslint-disable-line no-undef
});
$__System.registerDynamic('c', ['b', '8'], true, function ($__require, exports, module) {
  var global = this || self,
      GLOBAL = global;
  /* */
  $__require('b');
  module.exports = $__require('8').Object.keys;
});
$__System.registerDynamic("d", ["c"], true, function ($__require, exports, module) {
  var global = this || self,
      GLOBAL = global;
  /* */
  module.exports = { "default": $__require("c"), __esModule: true };
});
$__System.register('e', [], function (_export) {
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
            API_URL = 'https://opendata.brussels.be/api/records/1.0/search/?dataset=playgrounds&refine.code_postal=1000';
        }
    };
});

$__System.register('f', [], function (_export) {
    // Appends a card to the container

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
        card.querySelector('.pay-button').addEventListener('click', function (evt) {
            getPaymentDetails(name);
        });
    }

    function getPaymentDetails(name) {
        console.log("new build 2", name);

        var methodData = [{
            supportedMethods: ["basic-card"],
            data: {
                supportedNetworks: ["visa", "mastercard"]
            }
        }];

        var details = {
            displayItems: [{
                label: "Original amount",
                amount: { currency: "EUR", value: "0.01" }
            }],
            total: {
                label: "Total",
                amount: { currency: "EUR", value: "0.01" }
            }
        };

        var options = {};

        var request = new PaymentRequest(methodData, // required payment method data
        details, // required information about transaction
        options // optional parameter for things like shipping, etc.
        );

        request.show().then(function (paymentResponse) {
            // Process paymentResponse here

            // console.log(JSON.stringify(paymentResponse));
            console.log(paymentResponse);
            paymentResponse.complete("success");
        })['catch'](function (err) {
            console.error("Uh oh, something bad happened", err);
            // alert("Uh oh, something bad happened", err.message);
        });
    }
    return {
        setters: [],
        execute: function () {}
    };
});

$__System.register('10', [], function (_export) {
  'use strict';

  var isSubscribed, applicationServerPublicKey;

  _export('initialiseSubs', initialiseSubs);

  function initialiseSubs(swRegistration) {
    // Set the initial subscription value
    // Check whether the pushManager, which is part of the Service Worker, already has a subscription.
    return swRegistration.pushManager.getSubscription().then(function (subscription) {
      isSubscribed = !(subscription === null);

      if (isSubscribed) {
        console.log('User IS already subscribed.');
      } else {
        console.log('User is NOT subscribed.');
      }

      // Commenting out next function call as it currently does nothing
      // updateSubscriptionOnServer(subscription);

      // (Re-)subscribe user
      return subscribeUser(swRegistration);
    });
  }

  function subscribeUser(swRegistration) {
    var applicationServerKey = urlB64ToUint8Array(applicationServerPublicKey);

    return swRegistration.pushManager.subscribe({
      userVisibleOnly: true,
      applicationServerKey: applicationServerKey
    }).then(function (subscription) {
      // User has accepted notifications
      // Browser has connected to push server
      console.log('User is subscribed:', subscription);

      updateSubscriptionOnServer(subscription);

      isSubscribed = true;

      // updateBtn();
      return subscription;
    })['catch'](function (err) {
      console.error('Failed to subscribe the user: ', err);
      // updateBtn();
    });
  }

  function updateSubscriptionOnServer(subscription) {
    // TODO: Send subscription to our App's server
    if (subscription) {
      // console.log("Existing subscription")
      console.log(JSON.stringify(subscription));
    } else {
      console.log("No existing subscription");
    }
  }

  function urlB64ToUint8Array(base64String) {
    var padding = '='.repeat((4 - base64String.length % 4) % 4);
    var base64 = (base64String + padding).replace(/\-/g, '+').replace(/_/g, '/');

    var rawData = window.atob(base64);
    var outputArray = new Uint8Array(rawData.length);

    for (var i = 0; i < rawData.length; ++i) {
      outputArray[i] = rawData.charCodeAt(i);
    }
    return outputArray;
  }

  // export function updateBtn() {
  //   if (isSubscribed) {
  //     pushButton.textContent = 'Disable Push Messaging';
  //   } else {
  //     pushButton.textContent = 'Enable Push Messaging';
  //   }

  //   pushButton.disabled = false;
  // }
  return {
    setters: [],
    execute: function () {
      isSubscribed = undefined;

      // From https://web-push-codelab.appspot.com/
      applicationServerPublicKey = "BBMukMVSpAWcxwbNlNk9rktQwILUgEcsWD0tSNUIzOJSG7amLAKKwkDgqxrjuwiixbSCRRadNH0wpAXZP_1WUzw";
    }
  };
});

$__System.register('1', ['10', 'd', 'e', 'f'], function (_export) {
  var initialiseSubs, subscribeUser, _Object$keys, getData, updateCard, swRegistration;

  return {
    setters: [function (_) {
      initialiseSubs = _.initialiseSubs;
      subscribeUser = _.subscribeUser;
    }, function (_d) {
      _Object$keys = _d['default'];
    }, function (_e) {
      getData = _e.getData;
    }, function (_f) {
      updateCard = _f.updateCard;
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

      swRegistration = undefined;

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
      })();
    }
  };
});

})
(function(factory) {
  factory();
});