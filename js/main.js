$(document).ready(function () {

    $(window).scroll(function () {



        if ($(this).scrollTop() > 260) {

            $('#scrolltop').fadeIn();

        } else {
            $('#scrolltop').fadeOut();
        }
    });








});


function openNav(){

document.getElementById("myNav").style.width="100%";


}


function closeNav(){

document.getElementById("myNav").style.width="0%";


}
