/* exported randomWord */
/* eslint no-console: "off" */
'use strict';

function randomWord() {
    var index = Math.floor(Math.random() * words.length);
    console.log("Selected index", index);
}