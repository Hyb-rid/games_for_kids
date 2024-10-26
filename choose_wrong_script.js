'use strict'




var a=0;
var win=false;
var win_notification= document.getElementsByClassName("win-notification");
var image_1= document.getElementById("1");
var image_2= document.getElementById("2");
var image_3= document.getElementById("3");
var image_4= document.getElementById("4");
var cancel_image = document.getElementById("cancel");
var seconds = 0;
var minutes = 0;
var seconds_as_text = "";
var minutes_as_text = "";
var countdown = 0;




var on_image_1_click = function()
{
    if (win == true)
    {
        return;
    }
    var a=0;
    image_1.classList.toggle("wrong");
}
var on_image_2_click = function ()
{
    if (win == true)
    {
        return;
    }
    var a=0;
    image_2.classList.toggle("wrong");
}
var on_image_3_click = function ()
{
    if (win == true)
    {
        return;
    }
    var a=0;
    image_3.classList.toggle("wrong")
}
var on_image_4_click = function(){
    var a = 0;
    if (win == true)
    {
        return;
    }
    image_4.classList.toggle("right");
    image_1.classList.remove("wrong");
    image_2.classList.remove("wrong");
    image_3.classList.remove("wrong");
    win=true;
    win_notification[0].classList.remove("hidden");
    clearInterval(countdown);
}
var on_cancel_click=function(){
    var a=0;
    window.location.href = "index.html";
}





image_1.addEventListener("click",on_image_1_click);
image_2.addEventListener("click",on_image_2_click);
image_3.addEventListener("click",on_image_3_click);
image_4.addEventListener("click", on_image_4_click);
cancel_image.addEventListener("click", on_cancel_click);
window.addEventListener("load",() => {
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
        
        var time =minutes_as_text+":"+ seconds_as_text;
        document.getElementById("time").innerHTML = time;
    }, 1000); 
}); 




var class_list=image_4.classList;
var class_list_length=class_list.length;
