"use strict";
console.log('hello ts');
var txt = document.querySelector('#txt');
var btn = document.querySelector('#btn');
btn.onclick = function () {
    var values = txt.value;
    console.log(txt.value);
};
