'use strict';

import navbar from './navbar-cmp.js';

export default {
    template: `
        <section class="appHeader">
            <h1>AppSus</h1>
            <h3>Your apps stable</h3>
            <navbar></navbar>
        </section>
    
    `,

    components: {
        navbar
    }
}