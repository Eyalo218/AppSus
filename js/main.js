'use strict';

import appsusRouter from './routes.js';
import navbar from './cmps/navbar-cmp.js';

new Vue({
    el: '#app',
    router: appsusRouter,
    components: {
        navbar
    }
})