const btnInstall = document.getElementById('buttonInstall');

// Logic for installing the PWA
// TODO: Add an event handler to the `beforeinstallprompt` event
window.addEventListener('beforeinstallprompt', (event) => {
  event.preventDefault();
  btnInstall.style.visibility = 'visible';
});


// TODO: Implement a click event handler on the `btnInstall` element
btnInstall.addEventListener('click', async () => {
  const btnEvent = window.deferredPrompt;
  if (!btnEvent) {
    return;
  }
  btnEvent.prompt();
  window.deferredPrompt = null;
  btnInstall.classList.toggle('hidden', true);
});

// TODO: Add an handler for the `appinstalled` event
// Hides the prompt once the app is installed
window.addEventListener('appinstalled', (e) => {
  window.deferredPrompt = null;
});

