'use strict'




var on_language_click = function () {
    var a = 0;
    if (language_tag.innerText == "KZ") {
        var tag = language_tag.getElementsByTagName("h1");
        tag[0].innerText = "RU";
        for (var iterator = 0; iterator < h2_tags.length; iterator++) {
            var a = 0;
            var tag = h2_tags[iterator];
            tag.innerText = h2_list_2[iterator];
        }
        for (var iterator = 0; iterator < h3_tags.length; iterator++) {
            var a = 0;
            var tag = h3_tags[iterator];
            tag.innerText = h3_list_2[iterator];
        }
    }
    else {
        var tag=language_tag.getElementsByTagName("h1");
        tag[0].innerText = "KZ";
        for (var iterator = 0; iterator < h2_tags.length; iterator++) {
            var a = 0;
            var tag = h2_tags[iterator];
            tag.innerText = h2_list[iterator];
        }
        for (var iterator = 0; iterator < h3_tags.length; iterator++) {
            var a = 0;
            var tag = h3_tags[iterator];
            tag.innerText = h3_list[iterator];
        }
    }
}




var language_tag = document.getElementById("language-toggle");
var h2_list = ["Логика және ойлау", "Назар аудару және есте сақтау", "Математика", "Мектепке дайындық", "Ағылшынша"];
var h2_list_2 = ["Логика и мышление", "Внимание и память", "Математика", "Подготовка к школе", "Английский"];
var h3_list = ["Ненің үстеме мәні?", "Көлеңкені табу", "Санды табу", "Қосу және алу", "Менің үй жануарларым"];
var h3_list_2 = ["Что лишнее?", "Найди тень", "Найди цифру", "Складываем и вычитаем", "Мои питомцы"];
var h2_tags = document.getElementsByTagName("h2");
var h3_tags = document.getElementsByTagName("h3");





language_tag.addEventListener("click", on_language_click);