self.addEventListener('push', function(event) {
  console.log('[Service Worker] Push Received.');
  console.log(`[Service Worker] Push had this data: "${event.data.text()}"`);

  const title = 'Push Codelab';
  const options = {
    body: 'Yay it works.',
    icon: 'src/assets/favicons/android-chrome-192x192.png',
    badge: 'src/assets/favicons/android-chrome-192x192.png'
  };

  event.waitUntil(self.registration.showNotification(title, options));
});
