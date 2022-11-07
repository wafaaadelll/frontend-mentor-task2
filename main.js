jQuery(document).ready(function ($) {

    var slideWidth = $('#slider ul li').width();

    $('#slider ul').css({  marginLeft: - slideWidth });

    function moveLeft() {
        $('#slider ul').animate({
        }, 1000, function () {
            $('#slider ul li:last-child').prependTo('#slider ul');
        });
    };
    function do_slide(){
    interval = setInterval(function(){
    moveLeft();
    }, 1500);
    }
    do_slide();
});
///////////////////////////////////////////////////
function openForm() {
    document.getElementById("myForm").style.display = "block";
    }
function closeForm() {
    document.getElementById("myForm").style.display = "none";
    }
////////////////////////////////
// var countDownDate = new Date("july 15, 2022 15:37:25").getTime();
// var x = setInterval(function() {
// var now = new Date().getTime();
// var timing = countDownDate - now;
// var days = Math.floor(timing / (1000 * 60 * 60 * 24));
// var hours = Math.floor((timing % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
// var minutes = Math.floor((timing % (1000 * 60 * 60)) / (1000 * 60));
// var seconds = Math.floor((timing % (1000 * 60)) / 1000);
// document.getElementById("day").innerHTML = days + "D " ;
// document.getElementById("hours").innerHTML = hours + "H ";
// document.getElementById("minutes").innerHTML = minutes + "M ";
// document.getElementById("seconds").innerHTML = seconds + "S ";
// if (timing < 0) {
//     clearInterval(x);
//     document.getElementById("demo").innerHTML = "EXPIRED";
// }
// }, 1000);
/////////////////////////////////////////////////////////
