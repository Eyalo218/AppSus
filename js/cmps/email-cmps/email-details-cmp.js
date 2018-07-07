import emailService from '../../services/email-service.js';

export default {
    template: `
    <section class="email-details flex column">
        <h4>{{email.subject}}</h4>
        <p>{{email.body}}</p>
        <button @click="deleteEmail()">delete</button>
        <button @click="changeReadStatus(false)">mark as unread</button>
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
            emailService.deleteEmailById(this.$route.params.emailId)
            .then(data => {
                if(data === true) console.log('email has been removed successfully')
            })
        },
        changeReadStatus(status){
            emailService.setReadStatus(this.$route.params.emailId,status);
            this.$emit('statusChanged')
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