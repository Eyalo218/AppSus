'use strict';

function query() {
    return Promise.resolve(noteCmps);
}

function getNoteById(id) {
    return Promise.resolve(noteCmps.find(note => note.id === id))
}

export default {
    query,
    getNoteById
}

var noteCmps = [
    { id: 0, cmpType: 'txt-note', title: 'remember', content: 'buy bread' },
    { id: 1, cmpType: 'txt-note', title: 'remember', content: 'call eyal' },
    { id: 2, cmpType: 'photo-note', title: 'google', imgSrc: 'https://www.google.co.il/images/branding/googlelogo/2x/googlelogo_color_272x92dp.png' },
    { id: 3, cmpType: 'list-note', title: 'groceries', listItems: ['milk', 'break', 'yogurt', 'bamba'] }
];