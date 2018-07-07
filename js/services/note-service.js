'use strict';

import utilsService from './utils-service.js';

function query() {
    return Promise.resolve(noteCmps);
}

function getNoteById(id) {
    return Promise.resolve(noteCmps.find(noteCmp => noteCmp.id === id))
}

function deleteNote(noteId) {
    var noteIdx = noteCmps.findIndex(noteCmp => noteCmp.id === noteId)
    noteCmps.splice(noteIdx, 1);
}

function emptyNote(cmpType) {
    let noteContent = {};
    if (cmpType === 'txt-note') noteContent = {content: ''};
    else if (cmpType === 'photo-note') noteContent = {imgSrc: ''};
    else noteContent = {listItems: [ { itemName: '', crossed: false } ]};
    
    return {
        cmpType: cmpType,
        title: '',
        noteContent
    }
}

function addNote(note) {
    var noteIdx = noteCmps.findIndex(noteCmp => noteCmp.id === note.id)
    if (noteIdx === -1) noteCmps.push(note);
    else noteCmps.splice(noteIdx, 1, note);
}

function crossListItem([noteId, itemIdx]) {
    getNoteById(noteId)
        .then((note) => {
            if (note.listItems[itemIdx].crossed) note.listItems[itemIdx].crossed = false;
            else note.listItems[itemIdx].crossed = true;
        })
}

export default {
    query,
    getNoteById,
    deleteNote,
    emptyNote,
    addNote,
    crossListItem
}

var noteCmps = [
    { id: utilsService.makeId(), cmpType: 'txt-note', title: 'remember', content: 'buy bread' },
    { id: utilsService.makeId(), cmpType: 'txt-note', title: 'remember', content: 'call eyal' },
    { id: utilsService.makeId(), cmpType: 'photo-note', title: 'google', imgSrc: 'https://www.google.co.il/images/branding/googlelogo/2x/googlelogo_color_272x92dp.png' },
    { id: utilsService.makeId(), cmpType: 'list-note', title: 'groceries', listItems: [
        { itemName: 'milk', crossed: false }, { itemName: 'bread', crossed: false }, { itemName: 'yogurt', crossed: false }
    ] }
];