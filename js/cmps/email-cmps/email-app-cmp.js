'use strict';

import emailService from '../../services/email-service.js';
import emailFilter from './email-filter-cmp.js';
import emailList from './email-list-cmp.js';

export default {
    template: `
        <section class="email-app">
            <div class="header">
                <button @click="$router.push('/')">Back to AppSus</button>
                <h1>Hello Mister Email</h1> 
            </div>
            <email-filter @filtered="setFilter"></email-filter>
            <email-list :emails="emailsToShow"></email-list>
        </section>
    `,
    data() {
        return {
            emails: null,
            selectedEmails: null,
            filter: null
        }
    },
    created() {
        emailService.getEmails()
            .then(data => {
                this.emails = data;
            })
    },
    methods: {
        setFilter(filter) {
            return this.filter = filter;
        },
    },
    computed: {
        emailsToShow() {
            console.log(this.filter)
            if (this.filter === null) return this.emails;
            return this.emails.filter(
                (email) => {
                    return email;
                }
            )
        },
    },
    components: {
        emailFilter,
        emailList,
    }
}
