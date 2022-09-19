const swRegister = async () => {
  if (!('serviceWorker' in navigator)) {
    console.log("Browser doesn't support Service Worker");
    return;
  }

  try {
    await navigator.serviceWorker.register('./sw.bundle.js');
    console.log('Service worker registered');
  } catch (error) {
    console.log('Failed to register Service Worker', error);
  }
};

export default swRegister;
