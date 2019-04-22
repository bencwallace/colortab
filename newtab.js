function setBackgroundColor(value) {
	document.getElementById('default').style.backgroundColor = value;
}

// show selected color without storing it
chrome.runtime.onMessage.addListener(function(request, sender) {
	setBackgroundColor(request.color);
})

// log color change
chrome.storage.sync.get('color', function(data) {
	setBackgroundColor(data.color);
	console.log('Color set to ' + data.color);
})
