'use strict';

import noteService from '../../services/note-service.js';
import noteList from './note-list-cmp.js';
import noteAdd from './note-add-cmp.js';
import eventbusService from '../../services/eventbus-service.js';

export default {
    template: `
        <section class="note-app" @click="closeDropdown">
            <button class="back" @click="$router.push('/')">Back to AppSus</button>
            <h1>Miss Notes</h1>
            <noteAdd></noteAdd>
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

        eventbusService.eventBus.$on(eventbusService.CROSS_ITEM, ([noteId, listItemIdx]) => {
            noteService.crossListItem([noteId, listItemIdx])
        }),
        
        eventbusService.eventBus.$on(eventbusService.NEW_NOTE, newNote => {
            noteService.addNote(newNote);
        })
    },

    methods: {
        closeDropdown() {
            var elDropDown = document.querySelector('.dropdown-content');
            if (elDropDown.classList.contains('show')) elDropDown.classList.toggle('show');
        }
    },

    components: {
        noteList,
        noteAdd
    },

    watch: {
        '$route'(to, from) {
            this.noteCmps = null;
            noteService.query()
                .then((noteCmps => {
                    this.noteCmps = noteCmps;
                }))
        }
    }

}