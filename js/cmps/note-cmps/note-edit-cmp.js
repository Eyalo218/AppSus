'use stict';

import noteService from '../../services/note-service.js'

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
                        <input v-model="noteToEdit.listItems[idx].itemName" />
                        <button @click="deleteItem(idx)">X</button>
                    </li>
                    <!-- <li> -->
                        <!-- <input placeholder="Add" @click="changeListLength" v-model="noteToEdit.listItems[--listNewLength]" /> -->
                        <!-- Error in v-model, but functionality works -->
                    <!-- </li> -->
                </ul>
            </div>

            <button @click="saveNote">Save</button>
        </section>
    `,

    data() {
        return {
            noteToEdit: JSON.parse(JSON.stringify(this.noteCmp)),
            newListItem: null,
            listNewLength: null
        }
    },
    
    computed: {
        addListItem() {
            this.noteToEdit.listItems.push(this.newListItem)
        }
    },

    methods: {
        saveNote() {
            noteService.addNote(this.noteToEdit);
            this.$router.push('/missNotes');
        },

        changeListLength() {
            this.listNewLength = this.noteToEdit.listItems.length++
        },

        deleteItem(itemIdx) {
            this.noteToEdit.listItems.splice(itemIdx, 1);
        }
    }
}