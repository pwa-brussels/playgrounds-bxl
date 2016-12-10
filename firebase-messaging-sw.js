importScripts("https://www.gstatic.com/firebasejs/3.6.1/firebase-app.js");
importScripts("https://www.gstatic.com/firebasejs/3.6.1/firebase-messaging.js");


var config = {
    messagingSenderId: "906351442297"
};

firebase.initializeApp(config);

const messaging = firebase.messaging();

