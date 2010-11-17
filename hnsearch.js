// node.js stuff
require.paths.unshift('.');
var sys = require('util');
var alert = sys.puts;
var XMLHttpRequest = require("XMLHttpRequest").XMLHttpRequest;

javascript: (function () {
	url = 'http://api.ihackernews.com/getid?url=' + encodeURIComponent(window.location.href);
	http = new XMLHttpRequest();
	http.open("GET", url, true);
	
	http.onreadystatechange = (function () {
		alert('response: '+this.responseText);
		if (this.readyState == 4) {
			if (this.responseText) {
				//alert('foo');
				var ids = eval('(' + this.responseText + ')');
				if (ids.length > 0) {
					ids.reverse();
					//window.href = ids[0];
					alert(ids[0]);
				} else {
					alert('No stories found.');
				}
			}
		}
	});
	
	http.send();
})();
