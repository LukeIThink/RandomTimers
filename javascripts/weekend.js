var UpNComingSaterday
var UpNComingSaterday_1
function getSunday() {
	var dayOfWeek = 6;
	var date = new Date();
	var diff = date.getDay() - dayOfWeek;
	var isSunday
	var isSaturday
	if (diff == 0) {
		isSunday = true
	}else {
		var s_dayOfWeek = 0;
		var s_date = new Date();
		var s_diff = s_date.getDay() - s_dayOfWeek;
		if (s_diff == 0) {
			isSaturday = true
		}else {
			if (UpNComingSaterday == date.getDate() - diff) {
				date = UpNComingSaterday_1
			}else {
				UpNComingSaterday = date.getDate() - diff
				UpNComingSaterday_1 = new Date(date.setDate(date.getDate() - diff))
			}
		}
	}
	if (isSaturday == true || isSunday == true) {
		return "weekend"
	}else {
		return date.toString().split(" GMT")[0];
	}
}

function calculateHowLong(string) {
	var now = new Date().getTime()
	var countDownDate = new Date(string);
	countDownDate.setSeconds(0);
	countDownDate.setMinutes(0);
	countDownDate.setHours(0);
	countDownDate = countDownDate.getTime()

	var distance = countDownDate - now;

	var days = (`${Math.floor(distance / (1000 * 60 * 60 * 24))}d `);
	var hours = (`${Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60))}h `);
	var minutes = (`${Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60))}m `);
	var seconds = (`${Math.floor((distance % (1000 * 60)) / 1000)}s `);
	if (days == `0d `) { days = "" }
	if (hours == `0h `) { hours = "" }
	if (minutes == `0m `) { minutes = "" }

	return `${days} ${hours} ${minutes} ${seconds}`;
}
function updateText() {
	var get = getSunday()
	var time
	get == "weekend" ? time = "Its the weekend, Silly!" : time = calculateHowLong(get)
	document.getElementById("WeekendTimer").innerHTML = time;
	setTimeout(updateText, 1000)
}

function start() {
	updateText()
}
