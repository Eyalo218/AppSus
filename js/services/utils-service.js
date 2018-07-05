'use strict';

function saveToStorage(key, value) {
    localStorage.setItem(key, JSON.stringify(value));
}

function loadFromStorage(key) {
    return JSON.parse(localStorage.getItem(key));
}

function makeId(length = 5) {
    var text = '';
    var possibleChars = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';

    for (var i = 0; i < length; i++) {
        text += possibleChars.charAt(Math.floor(Math.random() * possibleChars.length));
    }
    return text;
}

export default {
    saveToStorage,
    loadFromStorage,
    makeId
}