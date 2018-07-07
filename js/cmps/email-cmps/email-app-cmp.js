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
                <!-- <component :is="componentId"></component> -->
            <!-- <section></section> -->
                <email-filter @filtered="setFilter"></email-filter>
                <email-list :emails="emailsToShow"></email-list>
            <!-- </section> -->

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
                   return a.subject < b.subject
                })
            }
            else {
                emails.sort(function (a, b) {
                    return a.sentAt < b.sentAt
                })
            }
            return emails;
        }
    },
    computed: {
        emailsToShow() {
            if (this.filter === null) return this.emails;
            return this.sortEmails(this.emails.filter(
                (email) => {
                    return email;
                }
            ))
        },
    },
    components: {
        emailFilter,
        emailList,
    }
}
