'use strict';

import noteService from '../../services/note-service.js';
import txtNote from './note-type-cmps/txt-note-cmp.js';
import photoNote from './note-type-cmps/photo-note-cmp.js';
import listNote from './note-type-cmps/list-note-cmp.js';
import noteEdit from './note-edit-cmp.js';

export default {
    template: `
        <section class="note-details" v-if="noteCmp">
            <button @click="$router.push('/missNotes')">X</button>
            <component :is="noteCmp.cmpType" :data="noteCmp"></component>
            <div ref="noteEditor" class="hidden">
                <noteEdit :noteCmp="noteCmp" ></noteEdit>
            </div>
            <button @click="openEditor">Edit</button>
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
            noteService.deleteNote(this.noteCmp.id);
            this.noteCmp = null;
            this.$router.push('/missNotes');
        },

        openEditor() {
            this.$refs.noteEditor.classList.remove('hidden');
        }
    },

    components: {
        txtNote,
        photoNote,
        listNote,
        noteEdit
    }
}