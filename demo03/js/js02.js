/*
数字转换成星期
*/
function number2Week(n) {
	return ((n - 1) % 7 + 7) % 7 + 1;
}