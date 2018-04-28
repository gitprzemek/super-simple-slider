var images = [];
images.push("<img src ='img/slide1.jpg' class = 'opacImg'>");
images.push("<img src ='img/slide2.jpg' class = 'opacImg'>");
images.push("<img src ='img/slide3.jpg' class = 'opacImg'>");

var curIndex = 0 ;
var mainDiv = document.getElementById("my-image-slider");
var nextBtn = document.getElementById("next");
var prevBtn = document.getElementById("prev");

mainDiv.innerHTML = images[0];

function getElement() {
    mainDiv.innerHTML = images[curIndex];
};

function goNext() {
    var nextIndex = curIndex + 1;
    if (nextIndex === images.length) {
        return 0;
    } else {
        return nextIndex;
    }
};

nextBtn.addEventListener("click", function () {
    curIndex = goNext();
    getElement();
});

function goPrev() {
    var prevIndex = curIndex - 1;
    if (prevIndex === -1) {
        return images.length-1;
    } else {
        return prevIndex;
    }
};

prevBtn.addEventListener("click", function () {
    curIndex = goPrev();
    getElement();
});

/* ARTICLE TO SLIDER*/

var articles = [];
articles.push("<h3>Slide1 title</h3><br><p>About slide 1</p>");
articles.push("<h3>Slide2 title</h3><br><p>About slide 2</p>");
articles.push("<h3>Slide3 title</h3><br><p>About slide 3</p>");

var curIndexArt = 0 ;
var mainDivArt = document.getElementById("slider-article");
var nextBtnArt = document.getElementById("next");
var prevBtnArt = document.getElementById("prev");

mainDivArt.innerHTML = articles[0];

function getElementArt() {
    mainDivArt.innerHTML = articles[curIndexArt];
};

function goNextArt() {
    var nextIndexArt = curIndexArt + 1;
    if (nextIndexArt === articles.length) {
        return 0;
    } else {
        return nextIndexArt;
    }
};

nextBtnArt.addEventListener("click", function () {
    curIndexArt = goNextArt();
    getElementArt();
});

function goPrevArt() {
    var prevIndexArt = curIndexArt - 1;
    if (prevIndexArt === -1) {
        return articles.length-1;
    } else {
        return prevIndexArt;
    }
};

prevBtnArt.addEventListener("click", function () {
    curIndexArt = goPrevArt();
    getElementArt();
});