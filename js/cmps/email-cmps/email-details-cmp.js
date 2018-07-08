import emailService from '../../services/email-service.js';
import eventBusService from '../../services/eventbus-service.js';

export default {
    template: `
    <section class="email-details flex column">
        <h4>{{email.subject}}</h4>
        <p>{{email.body}}</p>
        <div class="flex">
            <button @click="goBack">Close  <img src='../../../img/return.png'/></button>
            <button @click="deleteEmail()">delete <img src='../../../img/delete.png'/> </button>
            <button @click="changeReadStatus(false,this)">unread <img src='../../../img/unread.png'/></button>
        </div>
    </section>
    `,
    created() {
        this.loadEmail();
        this.changeReadStatus(true);
    },
    data() {
        return {
            email:''
        }
    },
    methods: {
        loadEmail() {
            emailService.getEmailById(this.$route.params.emailId)
                .then(email => {this.email = email});
        },
        deleteEmail(){
            eventBusService.eventBus.$emit(eventBusService.TOGGLE_EMAIL);
            emailService.deleteEmailById(this.$route.params.emailId)
            .then(data => {
                if(data === true) console.log('email has been removed successfully')
            })
            this.$router.push('/misterEmail/');
        },
        changeReadStatus(status){// bug here - cant render it back to unread
            emailService.setReadStatus(this.$route.params.emailId,status);
            eventBusService.eventBus.$emit(eventBusService.STATUS_CHANGED);
        },
        goBack(){
            this.$router.push('/misterEmail/')
            eventBusService.eventBus.$emit(eventBusService.TOGGLE_EMAIL);
        },
    }, 
    watch: {
        '$route' (to, from) {
            emailService.getEmailById(this.$route.params.emailId)
            .then(email => {this.email = email});
            this.changeReadStatus(true);
        }
    }
}