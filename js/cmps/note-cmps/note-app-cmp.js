'use strict';

import noteService from '../../services/note-service.js';
import noteList from './note-list-cmp.js';
import noteAdd from './note-add-cmp.js';
import noteSearch from './note-search-cmp.js';
import eventbusService from '../../services/eventbus-service.js';

export default {
    template: `
        <section class="note-app" @click="closeDropdown">
            <header>
                <button class="back" @click="$router.push('/')">Back to AppSus</button>
                <h1>Miss Notes</h1>
            </header>
            <div class="flex space-between">
                <noteAdd></noteAdd>
                <noteSearch @search="setNoteFilter"></noteSearch>
            </div>
            <note-list :noteCmps="notesToDisplay" ></note-list>
        </section>
    `,

    data() {
        return {
            notes: [],
            filter: ''
        }
    },

    computed: {
        notesToDisplay() {
            if (!this.filter) return this.notes;
            return this.notes.filter(note => {
                return note.title.indexOf(this.filter) !== -1
            });
        }
    },

    created() {
        noteService.query()
            .then((noteCmps => {
                this.notes = noteCmps;
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
            let elDropDown = document.querySelector('.dropdown-content');
            if (elDropDown.classList.contains('show')) elDropDown.classList.toggle('show');
        },

        setNoteFilter(filterTxt) {
            this.filter = filterTxt;
        }
    },

    components: {
        noteList,
        noteAdd,
        noteSearch
    },

    watch: {
        '$route'(to, from) {
            this.notes = null;
            noteService.query()
                .then((noteCmps => {
                    this.notes = noteCmps;
                }))
        }
    }

}