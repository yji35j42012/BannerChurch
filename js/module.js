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
var nav = document.querySelectorAll("[name='nav']");
var scrollState = "down";
var oldScroll = 0;

var nowHref = location.href;

if (nowHref.split("#").length == 2) {
	setTimeout(() => {
		let moveItem = nowHref.split("#")[1];
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
	}, 50);
}

for (let i = 0; i < nav.length; i++) {
	const element = nav[i];
	element.onclick = function() {
		let moveItem = element.getAttribute("href").split("#")[1];
		if (
			nowHref.indexOf("news.html") !== -1 ||
			nowHref.indexOf("news_detail.html") !== -1
		) {
			location.href = "./index.html#" + moveItem;
		} else {
			var item = document.querySelector("#" + moveItem);
			var goScroll = item.offsetTop - 71;
			var nowScroll = window.scrollY;
			nowScroll >= oldScroll
				? (scrollState = "down")
				: (scrollState = "up");
			oldScroll = nowScroll;

			if (goScroll > nowScroll) {
				goDown(nowScroll, goScroll);
				scrollState = "down";
			} else {
				goTop(nowScroll, goScroll);
				scrollState = "up";
			}
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

var news_item = document.querySelectorAll("[name='news_item']");
if (news_item) {
	for (let i = 0; i < news_item.length; i++) {
		const element = news_item[i];
		element.onclick = function() {
			location.href = "news_detail.html";
		};
	}
}

var page_detail_all = document.querySelector("#page_detail_all");
if (page_detail_all) {
	page_detail_all.onclick = function() {
		location.href = "news.html";
	};
}

var nav_btn = document.querySelector("#nav_btn");
var head = document.querySelector("#head");
nav_btn.onclick = function() {
	head.classList.toggle("_showMenu");
};
