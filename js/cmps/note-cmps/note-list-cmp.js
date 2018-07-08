'use strict';

import txtNote from './note-type-cmps/txt-note-cmp.js';
import photoNote from './note-type-cmps/photo-note-cmp.js';
import listNote from './note-type-cmps/list-note-cmp.js';

export default {
    props: ['noteCmps'],

    template: `
        <section class="note-list flex center">
            <ul class="clean-list flex flex-wrap center">
                <li v-for="cmp in noteCmps">
                    <router-link :to="'/missNotes/note/'+cmp.id">
                        <component :is="cmp.cmpType" :data="cmp" :key="cmp.id"></component>
                    </router-link>
                </li>
            </ul>
            <router-view></router-view>
        </section>
    `,

    components: {
        txtNote,
        photoNote,
        listNote
    }
}