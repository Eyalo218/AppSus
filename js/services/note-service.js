'use strict';

function query() {
    return Promise.resolve(noteCmps);
}

export default {
    query
}

var noteCmps = [
    { id: 0, cmpType: 'txt-note', content: 'buy bread' },
    { id: 1, cmpType: 'txt-note', content: 'call eyal' },
    { id: 2, cmpType: 'photo-note', imgSrc: 'https://www.google.co.il/images/branding/googlelogo/2x/googlelogo_color_272x92dp.png' },
    { id: 3, cmpType: 'list-note', listItems: ['milk', 'break', 'yogurt', 'bamba'] }
];