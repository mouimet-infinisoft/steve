const enableNavigationPreload = async () => {
  if (self.registration.navigationPreload) {
    // Enable navigation preloads!
    await self.registration.navigationPreload.enable();
  }
};

self.addEventListener("activate", (event) => {
//   event.waitUntil(enableNavigationPreload());

  self.dispatchEvent(new CustomEvent("dog"))
});

self.addEventListener("install", (event) => {
  

});


self.addEventListener('push', (event) => {
    console.log('Received a push event', event)
})