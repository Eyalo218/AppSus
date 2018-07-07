'use strict';

import emailService from '../../services/email-service.js';
import eventBusService from '../../services/eventbus-service.js';
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
                <p>unread Emails {{unreadEmails}}</p>
                <email-filter @filtered="setFilter"></email-filter>
                <email-list :emails="emailsToShow"></email-list>
            <!-- </section> -->

        </section>
    `,
    data() {
        return {
            emails: null,
            selectedEmails: null,
            filter: null,
            unreadEmails: null
        }
    },
    created() {
        emailService.getEmails()
            .then(data => {
                this.emails = data;
            })
        this.countUnreadEmails()
        eventBusService.eventBus.$on(eventBusService.STATUS_CHANGED,this.countUnreadEmails )
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
        },
        countUnreadEmails(){// need to do it with bus =D 'magic bus'
            console.log(emailService.unreadAmount())
            this.unreadEmails = emailService.unreadAmount();
        }
    },
    computed: {
        emailsToShow() { // need to add magic bus to it
            if (this.filter === null) return this.emails;
            return this.sortEmails(this.emails.filter(
                (email) => {
                    if (this.filter.filter ==='All') return email;
                    else if(this.filter.filter === 'Read') return (email.isRead===true)
                    else if(this.filter.filter === 'Unread') return (email.isRead===false)
                   
                }
            ))
        }
    },watch: {
        '$route' (to, from) {
            this.countUnreadEmails()
        }
    },
    components: {
        emailFilter,
        emailList,
    }
}
