'use strict';

import noteService from '../../services/note-service.js';

export default {
    template: `
        <section class="note-details">
            <h2>{{note.title}}</h2>
        </section>
    `,

    data() {
        return {
            note: null
        }
    },

    created() {
        noteService.getNoteById(this.$route.params.noteId)
            .then((note) => {
                this.note = note;
            })
    }
}