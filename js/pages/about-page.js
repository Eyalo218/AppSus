'use strict';

import appHeader from '../cmps/site-cmps/app-header-cmp.js';

export default {
    template: `
        <section class="about-page">
            <app-header></app-header>
            <h1>About Us</h1>
        </section>
    `,

    components: {
        appHeader
    }
}