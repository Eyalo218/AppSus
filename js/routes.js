'use strict';

import homePage from './pages/home-page.js';
import aboutPage from './pages/about-page.js';
import emailApp from './cmps/email-cmps/email-app-cmp.js';
import notesApp from './cmps/notes-cmps/notes-app-cmp.js';

const routes = [
    {path: '/', component: homePage},
    {path: '/about', component: aboutPage},
    {path: '/misterEmail', component: emailApp},
    {path: '/missNotes', component: notesApp}
];

Vue.use(VueRouter);
var appsusRouter = new VueRouter({routes});

export default appsusRouter;