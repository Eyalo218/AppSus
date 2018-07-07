'use stict';

import eventbusService from '../../services/eventbus-service.js';

export default {
    props: ['noteCmp'],

    template: `
        <section class="note-edit">
            <input v-model="noteToEdit.title" />
            <div v-if="noteCmp.cmpType === 'txt-note'">
                <textarea v-model="noteToEdit.content"></textarea>
            </div>
            <div v-else-if="noteCmp.cmpType === 'photo-note'">
                <input v-model="noteToEdit.imgSrc" />
            </div>
            <div v-else>
                <ul>
                    <li v-for="(item, idx) in noteToEdit.listItems">
                        <input v-model="noteToEdit.listItems[idx]" />
                    </li>
                    <li>
                        <input placeholder="Add" />
                    </li>
                </ul>
            </div>
            <button @click="saveNote">Save</button>
        </section>
    `,

    data() {
        return {
            noteToEdit: JSON.parse(JSON.stringify(this.noteCmp))
        }
    },

    methods: {
        saveNote() {
            eventbusService.eventBus.$emit(eventbusService.SAVE_NOTE, this.noteToEdit);
            this.$router.push('/missNotes');
        }
    }
}