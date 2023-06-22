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

var nowHref = location.href

console.log('!!!!!!', nowHref.split('#').length);
if (nowHref.split('#').length == 2) {
   setTimeout(() => {
    let moveItem = nowHref.split('#')[1];
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
    element.onclick = function () {
        let moveItem = element.getAttribute("name");
        if (nowHref.indexOf("news.html") !== -1) {
            console.log('!!!', moveItem);
            location.href = './index.html#' + moveItem
        } else {
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