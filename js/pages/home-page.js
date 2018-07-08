'use strict';

import appHeader from '../cmps/common-cmps/app-header-cmp.js';
import emailApp from '../cmps/email-cmps/email-app-cmp.js';
import noteApp from '../cmps/note-cmps/note-app-cmp.js';

export default {
    template: `
        <section class="home-page">
            <app-header></app-header>
            <main>
                <h1>Choose App</h1>
                <div class="app-btns">
                    <router-link to="/misterEmail">
                        <button>Mister Email</button>
                    </router-link>
                    <router-link to="/missNotes">
                        <button>Miss Notes</button>
                    </router-link>
                </div>
            </main>
        </section>
    `,

    components: {
        appHeader,
        emailApp,
        noteApp
    }
}