'use strict';

import homePage from './pages/home-page.js';
import aboutPage from './pages/about-page.js';
import emailApp from './cmps/email-cmps/email-app-cmp.js';
import noteApp from './cmps/note-cmps/note-app-cmp.js';
// import noteDetails from './cmps/note-cmps/note-details-cmp.js';

const routes = [
    { path: '/', component: homePage },
    { path: '/about', component: aboutPage },
    { path: '/misterEmail', component: emailApp },
    { path: '/missNotes', component: noteApp,
    //   children: [ { path: 'note/:noteId', component: noteDetails } ] 
    }
];

Vue.use(VueRouter);
var appsusRouter = new VueRouter({routes});

export default appsusRouter;