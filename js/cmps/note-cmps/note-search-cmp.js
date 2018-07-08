'use strict';

export default {
    template: `
        <section class="note-search">
            <input placeholder="Search notes" @input="findNote" v-model="searchStr" />
        </section>
    `,

    data() {
        return {
            searchStr: ''
        }
    },

    methods: {
        findNote() {
            this.$emit('search', this.searchStr);
        }
    }
}