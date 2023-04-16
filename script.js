//your JS code here. If required.
let timer = document.getElementById("timer");

function updateTime(params) {
	const date = new Date();
	timer.innerHTML = date;
}
setInterval(updateTime , 1000);