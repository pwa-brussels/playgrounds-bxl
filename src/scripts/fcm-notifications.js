// Retrieve Firebase Messaging object.
const messaging = firebase.messaging();

export function connect() {
    messaging.requestPermission()
    .then(function() {
    console.log('Notification permission granted.');
    // Retrieve an Instance ID token for use with FCM.
    return messaging.getToken();
    })
    .then( token => {
        console.log('token', token);
    })
    .catch(function(err) {
    console.log('Unable to get permission to notify.', err);
    });


    // Callback fired if Instance ID token is updated.
    messaging.onTokenRefresh(function() {
        messaging.getToken()
        .then(function(refreshedToken) {
            console.log('Token refreshed.');
            // Indicate that the new Instance ID token has not yet been sent to the
            // app server.
            // setTokenSentToServer(false);
            // Send Instance ID token to app server.
            // sendTokenToServer(refreshedToken);
            // ...
        })
        .catch(function(err) {
            console.log('Unable to retrieve refreshed token ', err);
            // showToken('Unable to retrieve refreshed token ', err);
        });
    });
}

messaging.onMessage(payload => {
  console.log(payload);
});

// function checkToken() {
//   // Get Instance ID token. Initially this makes a network call, once retrieved
//   // subsequent calls to getToken will return from cache.
//   messaging.getToken()
//   .then(function(currentToken) {
//     if (currentToken) {
//       sendTokenToServer(currentToken);
//       updateUIForPushEnabled(currentToken);
//     } else {
//       // Show permission request.
//       console.log('No Instance ID token available. Request permission to generate one.');
//       // Show permission UI.
//       updateUIForPushPermissionRequired();
//       setTokenSentToServer(false);
//     }
//   })
//   .catch(function(err) {
//     console.log('An error occurred while retrieving token. ', err);
//     showToken('Error retrieving Instance ID token. ', err);
//     setTokenSentToServer(false);
//   });
// }
