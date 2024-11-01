﻿'use strict'




var win=false;
var answer_react= document.getElementById("answer-react");
var image_1= document.getElementById("image-1");
var image_2= document.getElementById("image-2");
var image_3= document.getElementById("image-3");
var cancel_image = document.getElementById("exit");
var language_tag=document.getElementById("language-toggle");
var seconds = 0;
var minutes = 0;
var seconds_as_text = "";
var minutes_as_text = "";
var countdown = 0;
var h1_list = ["Сары сан дегеніміз не"];
var h1_list_2 = ["Какая цифра желтого цвета?"];
var h1_tags = document.getElementsByTagName("h1");
var correct_answer = new Audio("correct_answer.mp3");
var wrong_answer = new Audio("wrong_answer.mp3");




var on_language_click = function () {
    var a = 0;
    if (language_tag.innerText == "KZ") {
        language_tag.innerText = "RU";
        challenge.innerText = h1_list_2[0];
    }
    else {
        language_tag.innerText = "KZ";
        challenge.innerText = h1_list[0];

    }
}
var on_image_1_click = function () {
    var class_list = answer_react.classList;
    if (win == true || class_list.length == 0) {
        return;
    }
    var a = 0;
    wrong_answer.play();
    image_1.id = "image-1-wrong";
    var language = document.getElementById("language-toggle");
    if (language.innerText == "RU") {
        answer_react.innerText = "Неправильно";
        answer_react.classList.toggle("hidden");
    }
    else {
        answer_react.innerText = "Сөзсіз";
        answer_react.classList.toggle("hidden");
    }
    setTimeout(() => { answer_react.classList.toggle("hidden") }, 2000);

}
var on_image_2_click = function () {
    var class_list = answer_react.classList;
    if (win == true || class_list.length == 0) {
        return;
    }
    var a = 0;
    wrong_answer.play();
    image_2.id = "image-2-wrong";
    var language = document.getElementById("language-toggle");
    if (language.textContent == "RU") {
        answer_react.innerText = "Неправильно";
        answer_react.classList.toggle("hidden");
    }
    else {
        answer_react.innerText = "Сөзсіз";
        answer_react.classList.toggle("hidden");
    }
    setTimeout(() => { answer_react.classList.toggle("hidden") }, 2000);
}
var on_image_3_click = function () {
    var a = 0;
    var class_list = answer_react.classList;
    if (win == true || class_list.length == 0) {
        return;
    }
    correct_answer.play();
    image_3.id = "image-3-right";
    image_1.id="image-1";
    image_2.id="image-2";
    win = true;
    clearInterval(countdown);
    var language = document.getElementById("language-toggle");
    if (language.textContent == "RU") {
        answer_react.innerText = "Правильно";
        answer_react.classList.toggle("hidden");
    }
    else {
        answer_react.innerText = "Иә дұрыс";
        answer_react.classList.toggle("hidden");
    }
}
var on_cancel_click = function () {
    var a = 0;
    window.location.href = "index.html";
}




image_1.addEventListener("click", on_image_1_click);
image_2.addEventListener("click", on_image_2_click);
image_3.addEventListener("click", on_image_3_click);
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
        var time_tag = document.getElementById("time-text").innerText = time;

    }, 1000);
});
language_tag.addEventListener("click", on_language_click);
