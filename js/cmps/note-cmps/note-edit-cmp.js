'use strict';

import noteService from '../../services/note-service.js'

export default {
    props: ['noteCmp'],

    template: `
        <section class="note-edit flex column">
            <input placeholder="Title" v-model="noteToEdit.title" />

            <div v-if="noteCmp.cmpType === 'txt-note'">
                <textarea placeholder="Your note" v-model="noteToEdit.content"></textarea>
            </div>

            <div v-else-if="noteCmp.cmpType === 'photo-note'">
                <input placeholder="Image source" v-model="noteToEdit.imgSrc" />
            </div>

            <div v-else>
                <ul>
                    <li v-for="(item, idx) in noteToEdit.listItems">
                        <input placeholder="New list item" v-model="noteToEdit.listItems[idx].itemName"
                            :ref="'note' + idx" />
                        <button @click="deleteItem(idx)">X</button>
                    </li>
                    <li>
                        <input placeholder="Add" @click="changeListLength" v-model="noteToEdit.listItems[--listNewLength]" />
                        <!-- Error in v-model, but functionality works -->
                    </li>
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
            this.noteToEdit.listItems.push(this.newListItem);
        }
    },

    methods: {
        saveNote() {
            noteService.addNote(this.noteToEdit);
            this.$router.push('/missNotes');
        },

        changeListLength() {
            this.listNewLength = this.noteToEdit.listItems.push({itemName: '', crossed: false});
            setTimeout(() => {
                var listItem = this.$refs['note' + (this.noteToEdit.listItems.length - 1)][0];
                listItem.focus();
            }, 0)

        },

        deleteItem(itemIdx) {
            this.noteToEdit.listItems.splice(itemIdx, 1);
        }
    }
}