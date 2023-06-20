window.addEventListener("scroll", scrollListener);
function scrollListener() {
	if (window.pageYOffset == 0) {
		document.body.classList.remove("scroll");
	} else {
		document.body.classList.add("scroll");
	}
}

// nav滑動
window.addEventListener("scroll", scrollListener);
var nav = document.querySelectorAll("#nav > a");
var scrollState = "down";
var oldScroll = 0;
for (let i = 0; i < nav.length; i++) {
	const element = nav[i];
	element.onclick = function() {
		let moveItem = element.getAttribute("name");
		var item = document.querySelector("#" + moveItem);
		var goScroll = item.offsetTop - 71;
		var nowScroll = window.scrollY;
		nowScroll >= oldScroll ? (scrollState = "down") : (scrollState = "up");
		oldScroll = nowScroll;

		if (goScroll > nowScroll) {
			goDown(nowScroll, goScroll);
			scrollState = "down";
		} else {
			goTop(nowScroll, goScroll);
			scrollState = "up";
		}
	};
}

function goTop(from, to) {
	scrollState = "up";
	let scrollTime = setInterval(() => {
		if (from <= to) {
			from = to;
			clearInterval(scrollTime);
		} else {
			window.scrollTo(0, from);
			from = from - 50;
		}
	}, 0);
}
function goDown(from, to) {
	let scrollTime = setInterval(() => {
		if (from >= to) {
			from = to;
			clearInterval(scrollTime);
		} else {
			window.scrollTo(0, from);
			from = from + 50;
		}
	}, 0);
}
// nav滑動
// 聯絡我們輸入
var contact_inp = document.querySelectorAll("[name='contact_inp']");
var sendBtn = document.querySelector("#sendBtn");

var contact_name = document.querySelector("#contact_name");
var contact_emailBox = document.querySelector("#contact_emailBox");
var contact_email = document.querySelector("#contact_email");
var contact_text = document.querySelector("#contact_text");

function checkAllValue() {
	console.log("???");

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
