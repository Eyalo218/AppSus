'use strict';

import emailApp from '../cmps/app-cmps/email-app-cmp.js';
import notesApp from '../cmps/app-cmps/notes-app-cmp.js';

export default {
    template: `
        <section class="home-page">
            <h1>Home Sweet Home</h1>
            <router-link to="/misterEmail">
                <button>Mister Email</button>
            </router-link>
            <router-link to="/missNotes">
                <button>Miss Notes</button>
            </router-link>
        </section>
    `,

    components: {
        emailApp,
        notesApp
    }
}