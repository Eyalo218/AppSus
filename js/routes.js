'use strict';

import homePage from './pages/home-page.js';
import aboutPage from './pages/about-page.js';
import emailApp from './cmps/email-cmps/email-app-cmp.js';
import noteApp from './cmps/notes-cmps/note-app-cmp.js';

const routes = [
    {path: '/', component: homePage},
    {path: '/about', component: aboutPage},
    {path: '/misterEmail', component: emailApp},
    {path: '/missNotes', component: noteApp}
];

Vue.use(VueRouter);
var appsusRouter = new VueRouter({routes});

export default appsusRouter;