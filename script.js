'use strict';


function generator(){
    // Add your own words to the wordlist. Be carefull to obey the showed syntax
    var sentences = ["Спустя столетия, когда деньги станут пережитком, нашей валютой будет ______.","Шерлок Холмс всегда мог точно предсказать приближение _____.","Имидж - ничто, _____ - всё!","Давай уже веселись! Не будь как ______!","Высшая бейсбольная лига запретила _____ за предоставление игрокам явного преимущества.","_____ основной элемент новомодной диеты","Что точно оживит любую тусовку?","_____ + ______ = ______","______ лучшее средство от похмелья.","Да, всё верно. Я убил ______. Как? ______.","Когда я под ЛСД, _____ выглядит как ______.","У меня куча проблем, но _____ не одна из них.","Но прежде чем я убью Вас, Мистер Бонд, я должен показать Вам _____."];

    // Random numbers are made
    var randomNumber1 = parseInt(Math.random() * sentences.length);
    var name = sentences[randomNumber1];
    

    //If there's already a name it is removed
    if(document.getElementById("result")){
        document.getElementById("placeholder").removeChild(document.getElementById("result"));
    }
    // A div element is created to show the generated name.
    //The Name is added as a textnode. Textnode is added to the placeholder.
    var element = document.createElement("div");
    element.setAttribute("id", "result");
    element.appendChild(document.createTextNode(name));
    document.getElementById("placeholder").appendChild(element);
}



