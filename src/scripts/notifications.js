let isSubscribed;

// From https://web-push-codelab.appspot.com/
const applicationServerPublicKey = "BBMukMVSpAWcxwbNlNk9rktQwILUgEcsWD0tSNUIzOJSG7amLAKKwkDgqxrjuwiixbSCRRadNH0wpAXZP_1WUzw";

export function initialiseSubs(swRegistration) {
  // Set the initial subscription value
  // Check whether the pushManager, which is part of the Service Worker, already has a subscription.
  return swRegistration.pushManager.getSubscription()
    .then(function(subscription) {
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
  const applicationServerKey = urlB64ToUint8Array(applicationServerPublicKey);

  return swRegistration.pushManager.subscribe({
      userVisibleOnly: true,
      applicationServerKey: applicationServerKey
    })
    .then(function(subscription) {
      // User has accepted notifications
      // Browser has connected to push server
      console.log('User is subscribed:', subscription);

      updateSubscriptionOnServer(subscription);

      isSubscribed = true;

      // updateBtn();
      return subscription;
    })
    .catch(function(err) {
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
    console.log("No existing subscription")
  }
}

function urlB64ToUint8Array(base64String) {
  const padding = '='.repeat((4 - base64String.length % 4) % 4);
  const base64 = (base64String + padding)
    .replace(/\-/g, '+')
    .replace(/_/g, '/');

  const rawData = window.atob(base64);
  const outputArray = new Uint8Array(rawData.length);

  for (let i = 0; i < rawData.length; ++i) {
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

