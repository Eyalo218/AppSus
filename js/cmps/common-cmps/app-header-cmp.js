'use strict';

import navbar from './navbar-cmp.js';

export default {
    template: `
        <section class="appHeader flex">
            <div>
                <img src="../../img/logo.png">
            </div>
            <div>
                <h1>AppSus</h1>
                <h3>Your apps stable</h3>
                <navbar></navbar>
            </div>
        </section>
    
    `,

    components: {
        navbar
    }
}