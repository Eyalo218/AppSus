'use strict';

import noteService from '../../services/note-service.js';
import noteList from './note-list-cmp.js';
import eventbusService from '../../services/eventbus-service.js';

export default {
    template: `
        <section class="note-app">
            <button @click="$router.push('/')">Back to AppSus</button>
            <h1>Miss Notes</h1>
            <!-- <button @click="">+</button> -->
            <note-list :noteCmps="noteCmps"></note-list>
        </section>
    `,

    data() {
        return {
            noteCmps: []
        }
    },

    created() {
        noteService.query()
            .then((noteCmps => {
                this.noteCmps = noteCmps;
            })),
        
        eventbusService.eventBus.$on(eventbusService.DELETE_NOTE, noteId => {
            this.deleteNote(noteId);
        }),

        eventbusService.eventBus.$on(eventbusService.SAVE_NOTE, editedNote => {
            noteService.addNote(editedNote)
        })
    },

    methods: {
        deleteNote(noteId) {
            noteService.deleteNote(noteId);
        },

        // addNote() {
        //     this.noteCmps.push(noteService.emptyNote());
        //     console.log(this.noteCmps)
        // }
    },

    components: {
        noteList
    }
}