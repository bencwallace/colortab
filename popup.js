// change button color
chrome.storage.sync.get('color', function(data) {
	document.getElementById('changeColor').setAttribute('value', data.color);
});

let button = document.getElementById('changeColor');

button.addEventListener('input', function() {
	let choice = button.value;
	chrome.runtime.sendMessage({color: choice});
});

// store selected color
button.addEventListener('change', function() {
	let choice = button.value;
	chrome.storage.sync.set({color: choice});
});
