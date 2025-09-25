if ('serviceWorker' in navigator) {
  navigator.serviceWorker.register('/sw.js')
    .then(() => console.log('SW registrado'))
    .catch(err => console.log('Falha ao registrar SW', err));
}
