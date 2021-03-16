function getHour() {
	var today = new Date();
	return today.getHours() - (today.getHours() < 13 ? 0 : 12)
};

function getMin() {
	var today = new Date();
	return(today.getMinutes() < 10 ? `0${today.getMinutes()}` : today.getMinutes());
};

function getSec() {
	var today = new Date();
	return (today.getSeconds() < 10 ? `0${today.getSeconds()}` : today.getSeconds());
};

function getM() {
	var today = new Date();
	return(getHour() <= 12 ? "A" : "P");
};

function getTime() {
	var APM = `${getM()}M`
	var Hour = getHour()
	var min = getMin()
	var sec = getSec()
	if (Hour == 00) {
		Hour = 0
	}
	return (`${Hour}:${min}:${sec} ${APM}`)
}

function getMessage() {
	var date = new Date()
	var hour = date.getHours() - (date.getHours() < 13 ? 0 : 24)
	if (date.getMinutes() <= 30 && hour == 0 ) { 
		return ("You made it to midnight, nice job") 
	}else if (date.getMinutes() >= 30 && hour == 23) {
		return ("Almost midnight...")
	}else if (date.getMinutes() < 10 && hour <= 2 ) { 
		return ("You might wanna head to bed") 
	}else if (date.getMinutes() >= 30 && hour == 11) {
		return ("Almost afternoon...")
	}else if (hour == 12 && date.getMinutes() <= 30) {
		return ("Nice.. You have survived to the afternoon")
	}
	return ""
}

function updateText() {
	var time = getTime()
	var message = getMessage()
	document.getElementById("CTime").innerHTML = time;
	document.getElementById("Message").innerHTML = message;
	setTimeout(updateText, 1000)
}

function start() {
	updateText()
}
