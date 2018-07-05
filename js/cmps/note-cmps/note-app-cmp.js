'use strict';

import noteService from '../../services/note-service.js';
import noteList from './note-list-cmp.js';

export default {
    template: `
        <section class="note-app">
            <button @click="$router.push('/')">Back to AppSus</button>
            <h1>Miss Notes</h1>
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
            }))
    },

    components: {
        noteList
    }
}