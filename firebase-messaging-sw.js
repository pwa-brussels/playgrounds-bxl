importScripts("https://www.gstatic.com/firebasejs/3.6.1/firebase-app.js");
importScripts("https://www.gstatic.com/firebasejs/3.6.1/firebase-messaging.js");


var config = {
    messagingSenderId: "906351442297"
};

firebase.initializeApp(config);

const messaging = firebase.messaging();


messaging.setBackgroundMessageHandler(function (payload) {
    console.log('[firebase-messaging-sw.js] Received background message ', payload);
    const title = 'Playgrounds BXL';
    const options = {
        body: payload.notification.body,
        icon: 'src/assets/favicons/android-chrome-192x192.png',
        badge: 'src/assets/favicons/android-chrome-192x192.png'
    };

    event.waitUntil(self.registration.showNotification(title, options));

});
