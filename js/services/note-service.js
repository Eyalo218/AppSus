'use strict';

import utilsService from './utils-service.js';

function query() {
    return Promise.resolve(noteCmps);
}

function getNoteById(id) {
    return Promise.resolve(noteCmps.find(noteCmp => noteCmp.id === id))
}

export default {
    query,
    getNoteById
}

var noteCmps = [
    { id: utilsService.makeId(), cmpType: 'txt-note', title: 'remember', content: 'buy bread' },
    { id: utilsService.makeId(), cmpType: 'txt-note', title: 'remember', content: 'call eyal' },
    { id: utilsService.makeId(), cmpType: 'photo-note', title: 'google', imgSrc: 'https://www.google.co.il/images/branding/googlelogo/2x/googlelogo_color_272x92dp.png' },
    { id: utilsService.makeId(), cmpType: 'list-note', title: 'groceries', listItems: ['milk', 'break', 'yogurt', 'bamba'] }
];