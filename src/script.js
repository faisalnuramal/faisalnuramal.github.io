(() => {
	if ('serviceWorker' in navigator) 
	{
		window.addEventListener('load', () => {
			navigator.serviceWorker.register('./src/service_worker.js').then((reg) => {
				console.log(reg);
			}, function(err) {
				console.log(err);
			});
		});
	}
	else
	{
		alert('no service worker support!');
	}
})();