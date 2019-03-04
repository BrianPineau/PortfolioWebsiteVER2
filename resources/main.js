window.onscroll = function() {scrollFunction()};

function scrollFunction () {
    if (document.body.scrollTop > 50 || document.documentElement.scrollTop > 50) {
        document.getElementById("top-menu-title").style.fontSize = "16px";
    } else {
        document.getElementById("top-menu-title").style.fontSize = "64px";
    }
}