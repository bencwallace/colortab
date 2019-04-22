chrome.runtime.onInstalled.addListener(function() {
	chrome.storage.sync.set({color: '#2F3D44'}, function() {
		console.log('Default color set.');
	});
});
