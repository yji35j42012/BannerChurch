window.addEventListener("scroll", scrollListener);
function scrollListener() {
	if (window.pageYOffset == 0) {
		document.body.classList.remove("scroll");
	} else {
		document.body.classList.add("scroll");
	}
}

// 聯絡我們輸入
var contact_inp = document.querySelectorAll("[name='contact_inp']");
var sendBtn = document.querySelector("#sendBtn");

var contact_name = document.querySelector("#contact_name");
var contact_emailBox = document.querySelector("#contact_emailBox");
var contact_email = document.querySelector("#contact_email");
var contact_text = document.querySelector("#contact_text");

function checkAllValue() {
	if (
		contact_name.value !== "" &&
		contact_email.value !== "" &&
		contact_text.value !== ""
	) {
		sendBtn.classList.remove("_unClick");
	} else {
		sendBtn.classList.add("_unClick");
	}
}
contact_name.addEventListener("blur", checkAllValue, false);
contact_email.addEventListener(
	"blur",
	function() {
		if (!IsEmail(contact_email.value) && contact_email.value !== "") {
			contact_emailBox.classList.add("_err");
			return;
		} else {
			contact_emailBox.classList.remove("_err");
		}
		checkAllValue();
	},
	false
);
contact_text.addEventListener("blur", checkAllValue, false);

function IsEmail(email) {
	var regex = /^([a-zA-Z0-9_\.\-\+])+\@(([a-zA-Z0-9\-])+\.)+([a-zA-Z0-9]{2,4})+$/;
	if (!regex.test(email)) {
		return false;
	} else {
		return true;
	}
}

var music_item = document.querySelectorAll("#music_group > li:not(._full)");
var musicTitle = document.querySelector("#musicTitle");
var musicPic = document.querySelector("#musicPic");
var musicClose = document.querySelector("#musicClose");
var musicAlert = document.querySelector("#musicAlert");

var mailAlert = document.querySelector("#mailAlert");
for (let i = 0; i < music_item.length; i++) {
	const element = music_item[i];
	element.onclick = function() {
		var num = i + 1;
		var imgSrc = document
			.querySelector(`.music_item:nth-child(${num}) img`)
			.getAttribute("src");
		var musicName = document.querySelector(
			`.music_item:nth-child(${num}) .music_item_name`
		).innerHTML;
		var musicInfo = document.querySelector(
			`.music_item:nth-child(${num}) .music_item_info`
		).innerHTML;
		musicTitle.innerHTML = musicName;
		musicTitle.setAttribute("data-txt", musicInfo);
		musicPic.setAttribute("src", imgSrc);

		musicAlert.classList.add("_show");
		setTimeout(() => {
			musicAlert.classList.add("_active");
		}, 10);
	};
}

musicClose.onclick = function() {
	musicAlert.classList.remove("_active");
	setTimeout(() => {
		musicAlert.classList.remove("_show");
	}, 300);

	// musicAlert.style
};

sendBtn.onclick = function() {
	mailAlert.classList.add("_show");
	setTimeout(() => {
		mailAlert.classList.add("_active");
	}, 10);

	setTimeout(() => {
		mailAlert.classList.remove("_active");
	}, 1010);

	setTimeout(() => {
		mailAlert.classList.remove("_show");
	}, 1310);
};
mailAlert.onclick = function() {
	setTimeout(() => {
		mailAlert.classList.remove("_active");
	}, 1010);

	setTimeout(() => {
		mailAlert.classList.remove("_show");
	}, 1310);
};

var newsMore = document.querySelector("#newsMore");
newsMore.onclick = function() {
	location.href = "./news.html";
};

// 旌旗音樂
var music_group = document.querySelector("#music_group");
var music_prev = document.querySelector("#music_prev");
var music_next = document.querySelector("#music_next");
var music_count = 0;
var music_max = music_item.length;
var music_dot = document.querySelector("#music_dot");
var music_item;
for (let i = 0; i < music_max; i++) {
	console.log("music_dot");
	var setDot = document.createElement("li");
	setDot.setAttribute("class", "music_dot_item");
	music_dot.append(setDot);
}

music_item = document.querySelectorAll("#music_dot > .music_dot_item");

music_item[music_count].classList.add("_on");

music_prev.onclick = function() {
	console.log("music_prev");
	music_item[music_count].classList.remove("_on");
	if (music_next.classList.contains("_unclick")) {
		music_next.classList.remove("_unclick");
	}
	music_count--;
	var move = music_count * 100;
	music_group.style = `transform: translateX(-${move}%);`;
	if (music_count == 0) {
		music_prev.classList.add("_unclick");
	} else {
		music_prev.classList.remove("_unclick");
	}
	music_item[music_count].classList.add("_on");
};
music_next.onclick = function() {
	console.log("music_next");
	music_item[music_count].classList.remove("_on");
	music_count++;
	var move = music_count * 100;
	music_group.style = `transform: translateX(-${move}%);`;
	if (music_prev.classList.contains("_unclick")) {
		music_prev.classList.remove("_unclick");
	}
	if (music_count + 1 == music_max) {
		music_next.classList.add("_unclick");
	} else {
		music_next.classList.remove("_unclick");
	}
	music_item[music_count].classList.add("_on");
};
