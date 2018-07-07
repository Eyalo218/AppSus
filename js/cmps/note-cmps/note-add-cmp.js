'use strict';

import noteService from '../../services/note-service.js';

export default {
    template: `
        <section class="note-add">
            <div class="dropdown">
                <button @click="openDropdown" class="dropbtn">+</button>
                    <div ref="noteTypes" class="dropdown-content">
                        <option @click="addNote('txt-note')">Text</option>
                        <option value="photo-note">Image</option>
                        <option value="list-note">List</option>
                    </div>
            </div>
        </section>
    `,

    methods: {
        openDropdown() {
            this.$refs.noteTypes.classList.toggle('show');
        },

        addNote(noteType) {
            
        }
    }


}