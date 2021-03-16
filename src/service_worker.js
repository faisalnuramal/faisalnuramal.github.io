self.addEventListener('install', (ev) => {
	console.log('service worker installed', ev);
});
self.addEventListener('activate', (ev) => {
	console.log('service worker activate', ev);
});