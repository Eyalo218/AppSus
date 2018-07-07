import emailService from '../../services/email-service.js';

export default {
    template: `
    <section class="email-preview flex column">
        {{email}}
    </section>
    `,
    created() {
        this.loadEmail()

    },
    data() {
        return {
            email:null
        }
    },
    methods: {
        loadEmail() {
            emailService.getEmailById(this.$route.params.emailId)
                .then(email => (this.email = email));
        },
    }
}