'use strict';

import utilsService from './utils-service.js';

const NOTES_KEY = 'NOTES'
var notes;

function query() {
    notes = utilsService.loadFromStorage(NOTES_KEY);
    if (!notes) {
        notes = fakeData;
        utilsService.saveToStorage(NOTES_KEY, notes);
    } 
    return Promise.resolve(notes);
}

function getNoteById(id) {
    return Promise.resolve(notes.find(note => note.id === id));
}

function deleteNote(noteId) {
    var noteIdx = notes.findIndex(note => note.id === noteId)
    notes.splice(noteIdx, 1);
    utilsService.saveToStorage(NOTES_KEY, notes);
}

function emptyNote(cmpType) {
    let noteContent = {};
    if (cmpType === 'txt-note') noteContent = {content: ''};
    else if (cmpType === 'photo-note') noteContent = {imgSrc: ''};
    else noteContent = {listItems: [ { itemName: '', crossed: false } ]};
    
    return {
        id: utilsService.makeId(),
        cmpType: cmpType,
        bgColor: 'lightgoldenrodyellow',
        title: '',
        ...noteContent
    }
}

function addNote(newNote) {
    var noteIdx = notes.findIndex(note => note.id === newNote.id)
    if (noteIdx === -1) notes.unshift(newNote);
    else notes.splice(noteIdx, 1, newNote);
    utilsService.saveToStorage(NOTES_KEY, notes);
}

function crossListItem([noteId, itemIdx]) {
    getNoteById(noteId)
        .then((note) => {
            if (note.listItems[itemIdx].crossed) note.listItems[itemIdx].crossed = false;
            else note.listItems[itemIdx].crossed = true;
            utilsService.saveToStorage(NOTES_KEY, notes);
        })
}

function changeNoteColor(noteId, color) {
    getNoteById(noteId)
        .then((note) => {
            note.bgColor = color;
            utilsService.saveToStorage(NOTES_KEY, notes);
        })
}

export default {
    query,
    getNoteById,
    deleteNote,
    emptyNote,
    addNote,
    crossListItem,
    changeNoteColor
}

var fakeData = [
    { id: utilsService.makeId(), cmpType: 'txt-note', bgColor: 'lightgoldenrodyellow', title: 'cake recipe', content: '2 eggs, 1 chocolate bar' },
    { id: utilsService.makeId(), cmpType: 'txt-note', bgColor: 'lightgoldenrodyellow', title: 'remember', content: 'call mom' },
    { id: utilsService.makeId(), cmpType: 'photo-note', bgColor: 'lightgoldenrodyellow', title: 'google', imgSrc: 'https://www.google.co.il/images/branding/googlelogo/2x/googlelogo_color_272x92dp.png' },
    { id: utilsService.makeId(), cmpType: 'list-note', bgColor: 'lightgreen', title: 'groceries', listItems: [
        { itemName: 'milk', crossed: false }, { itemName: 'bread', crossed: false }, { itemName: 'yogurt', crossed: true }
    ] }
];