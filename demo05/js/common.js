function setCookie(name, value, day) {
	var oDate = new Date();
	oDate.setDate(oDate.getDate() + day);
	document.cookie = name + "=" + value + ";expires=" + oDate;
}

function getCookie(name) {
	var str = document.cookie;
	var arr = str.split("; ");
	for (var i = 0; i < arr.length; i++) {
		var keyAndValue = arr[i].split("=");
		if (keyAndValue[0] == name) {
			return keyAndValue[1];
		}
	}
	return null;
}

function removeCookie(name) {
	setCookie(name, 0, -1);
}