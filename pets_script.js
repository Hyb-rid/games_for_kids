'use strict'




var a=0;
var win=false;
var win_notification= document.getElementById("win-notification");
var image_1= document.getElementById("1");
var image_2= document.getElementById("2");
var image_3= document.getElementById("3");
var cancel_image = document.getElementById("cancel");
var seconds = 0;
var minutes = 0;
var seconds_as_text = "";
var minutes_as_text = "";
var countdown = 0;




var on_image_3_click = function(){
    var a = 0;
    if (win == true) {
        return;
    }
    image_3.classList.toggle("wrong");
}
var on_image_2_click = function(){
    var a = 0;
    if (win == true) {
        return;
    }
    image_2.classList.toggle("wrong")
}
var on_image_1_click = function(){
    var a = 0;
    if (win == true) {
        return;
    }
    image_1.classList.toggle("right");
    image_2.classList.remove("wrong");
    image_3.classList.remove("wrong");
    win=true;
    win_notification.classList.remove("hidden");
    clearInterval(countdown);
}
var on_cancel_click=function(){
    var a=0;
    window.location.href = "file:///C:/Programming/webDev/games_website/index.html";
}




image_1.addEventListener("click",on_image_1_click);
image_2.addEventListener("click",on_image_2_click);
image_3.addEventListener("click",on_image_3_click);
cancel_image.addEventListener("click", on_cancel_click);
window.addEventListener("load", () => {
    seconds = 0;
    minutes = 0;
    clearInterval(countdown);
    countdown = setInterval(() => {
        var a = 0;
        seconds += 1;
        if (seconds > 59) {
            minutes++;
            seconds = 0;
        }
        if (seconds < 10) {
            seconds_as_text = "0" + seconds;
        }
        else {
            seconds_as_text = seconds.toString();
        }
        if (minutes < 10) {
            minutes_as_text = "0" + minutes;
        }
        else {
            minutes_as_text = minutes;
        }

        var time = minutes_as_text + ":" + seconds_as_text;
        document.getElementById("time").innerHTML = time;
    }, 1000);
});