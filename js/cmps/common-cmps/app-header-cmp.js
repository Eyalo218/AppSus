'use strict';

import navbar from './navbar-cmp.js';

export default {
    template: `
        <section class="app-header flex column horizontal-center">
            <div class="logo flex column horizontal-center">
                <h1>AppSus</h1>
                <div class="logo-img"></div>
                <h3>Your apps stable</h3>
            </div>
            <navbar></navbar>
        </section>
    
    `,

    components: {
        navbar
    }
}