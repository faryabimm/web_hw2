
$(document).ready(function () {
    resizeDiv();
});

window.onresize = function (event) {
    resizeDiv();
};

function resizeDiv() {
    var viewport_height = $(window).height();

    $('#scrollable1').css({'height': (viewport_height - 153) + 'px'});
    $('#scrollable2').css({'height': (viewport_height - 92) + 'px'});
    $('#dashboard').css({'height': (viewport_height - 48) + 'px'});
    $('#scrollable3').css({'height': (viewport_height - 108) + 'px'});
}


function show_left_dropdown() {
    var x = document.getElementById("left_dropdown");
    if (x.className.indexOf("w3-show") === -1) {
        x.className += " w3-show";
    } else {
        x.className = x.className.replace(" w3-show", "");
    }
}

function show_right_dropdown() {
    var x = document.getElementById("right_dropdown");
    if (x.className.indexOf("w3-show") === -1) {
        x.className += " w3-show";
    } else {
        x.className = x.className.replace(" w3-show", "");
    }
}

function show_floating_navbar() {
    var x = document.getElementById("floating_navbar");
    var y = document.getElementById("navbar_overlay");
    if (x.style.display === "none") {
        x.style.display = "inline-flex";
        y.style.display = "inline-flex";
    } else {
        x.style.display = "none";
        y.style.display = "none"
    }
}

function click_small_collapse() {
    var x = document.getElementById("small_navbar");
    var y = document.getElementById("large_navbar");
    y.style.display = "inline";
    x.style.display = "none";
}

function click_large_collapse() {
    var x = document.getElementById("small_navbar");
    var y = document.getElementById("large_navbar");
    x.style.display = "inline";
    y.style.display = "none";
}