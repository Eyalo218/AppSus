'use strict';

import noteService from '../../services/note-service.js';
import txtNote from './note-type-cmps/txt-note-cmp.js';
import photoNote from './note-type-cmps/photo-note-cmp.js';
import listNote from './note-type-cmps/list-note-cmp.js';
import noteEdit from './note-edit-cmp.js';

export default {
    template: `
    <div class="note-details-wrapper flex center horizontal-center">
        <section class="note-details flex column horizontal-center" v-if="noteCmp">
            <button class="close-note" @click="$router.push('/missNotes')">X</button>
            <component :is="noteCmp.cmpType" :data="noteCmp" :ref="noteCmp.id" :style="{backgroundColor: noteCmp.bgColor}"></component>
            <div ref="noteEditor" class="hidden">
                <noteEdit :noteCmp="noteCmp"></noteEdit>
            </div>
            <div class="note-btns flex space-between">
                <button @click="openEditor">Edit</button>
                <input type="color" @change="changeNoteColor()" ref="colorPicker" />
                <button @click="deleteNote">Delete</button>
            </div>
        </section>
    </div>
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
        },

        changeNoteColor() {
            let chosenNoteColor = this.$refs.colorPicker.value;
            noteService.changeNoteColor(this.noteCmp.id, chosenNoteColor);
        }
    },

    components: {
        txtNote,
        photoNote,
        listNote,
        noteEdit
    }
}