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
        sortEmails(emails) {
            console.log('sorting', emails)
            if (this.filter.sort === "byName") {
                emails.sort(function (a, b) {
                   return a.title < b.title
                })
            }
            else {
                emails.sort(function (a, b) {
                    return a.date < b.date
                })
            }
            return emails;
        }
    },
    computed: {
        emailsToShow() {
            console.log("monkey", this.filter)
            if (this.filter === null) return this.emails;
            var x = this.sortEmails(this.emails.filter(
                (email) => {
                    return email;
                }
            ))
            console.log(x);
            return x;
        },
    },
    components: {
        emailFilter,
        emailList,
    }
}
