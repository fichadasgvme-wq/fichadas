// GVME Fichadas · service worker mínimo: permite instalar la app en la pantalla de inicio.
// No guarda nada en caché: las fichadas siempre van directo al sistema.
self.addEventListener('install', () => self.skipWaiting());
self.addEventListener('activate', e => e.waitUntil(self.clients.claim()));
self.addEventListener('fetch', () => {});
