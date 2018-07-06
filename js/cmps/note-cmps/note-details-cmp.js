'use strict';

import noteService from '../../services/note-service.js';
import txtNote from './note-type-cmps/txt-note-cmp.js';
import photoNote from './note-type-cmps/photo-note-cmp.js';
import listNote from './note-type-cmps/list-note-cmp.js';
import eventbusService from '../../services/eventbus-service.js';

export default {
    template: `
        <section class="note-details" v-if="noteCmp">
            <button @click="$router.push('/missNotes')">X</button>
            <component :is="noteCmp.cmpType" :data="noteCmp"></component>
            <button @click="deleteNote">Delete</button>
        </section>
    `,

    data() {
        return {
            noteCmp: null
        }
    },

    created() {
        noteService.getNoteById(this.$route.params.noteId)
            .then((note) => {
                this.noteCmp = note;
            })
    },

    methods: {
        deleteNote() {
            eventbusService.eventBus.$emit(eventbusService.DELETE_NOTE, this.noteCmp.id);
            this.noteCmp = null;
            this.$router.push('/missNotes');
        }
    },

    components: {
        txtNote,
        photoNote,
        listNote
    }
}