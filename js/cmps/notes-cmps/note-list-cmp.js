'use strict';

import txtNote from './note-type-cmps/txt-note-cmp.js';
import photoNote from './note-type-cmps/photo-note-cmp.js';
import listNote from './note-type-cmps/list-note-cmp.js';

export default {
    props: ['noteCmps'],

    template: `
        <section class="note-list flex space-between flex-wrap">
            <component :is="cmp.cmpType" :data="cmp" v-for="cmp in noteCmps" :key="cmp.id"></component>
        </section>
    `,

    components: {
        txtNote,
        photoNote,
        listNote
    }
}