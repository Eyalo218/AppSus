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
                <div class="app-btns flex space-evenly">
                    <router-link to="/missNotes">
                        <div class="flex column center horizontal-center">
                            <img src="./img/missNotes.png" />
                            <h4>Miss Notes</h4>
                        </div>
                    </router-link>
                    <router-link to="/misterEmail">
                        <div class="flex column center horizontal-center">
                            <img src="./img/misterEmail.png" />
                            <h4>Mister Email</h4>
                        </div>
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