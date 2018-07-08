'use strict';

import noteService from '../../services/note-service.js';
import eventbusService from '../../services/eventbus-service.js';

export default {
    template: `
        <section class="note-add">
            <div class="dropdown">
                <button @click.stop="toggleDropdown" class="dropbtn">+</button>
                    <div ref="noteTypes" class="dropdown-content">
                        <option @click="addNote('txt-note')">Text</option>
                        <option @click="addNote('photo-note')">Image</option>
                        <option @click="addNote('list-note')">List</option>
                    </div>
            </div>
        </section>
    `,

    data() {
        return {
            newNote: null
        }
    },

    methods: {
        toggleDropdown() {
            this.$refs.noteTypes.classList.toggle('show');
        },

        addNote(noteType) {
            this.newNote = noteService.emptyNote(noteType);
            eventbusService.eventBus.$emit(eventbusService.NEW_NOTE, this.newNote);
            this.toggleDropdown();
        }
    }
}