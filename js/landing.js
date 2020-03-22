window.onscroll = function () {
    makeNavTransparent()
};

function makeNavTransparent() {
    let nav = document.getElementById("navbar");
    if (document.body.scrollTop > 0 || document.documentElement.scrollTop > 0) {
        nav.style.background = "#121212";
        nav.style.transition = "all 0.5s";

    } else {
        nav.style.backgroundColor = "transparent";
        nav.style.border = "0";
    }
}