import emailService from '../../services/email-service.js';
import eventBusService from '../../services/eventbus-service.js'

export default {
    template: `
    <section class="flex column horizontal-center new-email">
        <h4>New Email</h4>
        <div>
            Subject:
            <input ref="subject" id="subject">
        </div>
        <div>
            <p>Message:</p>
            <textarea ref="body" cols="30" rows="10"></textarea>
        </div>
        <div class="flex space-between">
            <button @click="composeEmail()">Send</button>
            <button @click="goBack">Go Back</button>
        </div>
    </section>
    `,
    created() {

    },
    methods: {
        composeEmail(){
            var newEmail = {subject:this.$refs.subject.value, sentAt:new Date(Date.now()), body:this.$refs.body.value, isRead:false}
            emailService.addEmail(newEmail)
            .then(res =>{
                if (res===true) console.log('Email has been sent successfully')
            })
            eventBusService.eventBus.$emit(eventBusService.TOGGLE_EMAIL);
            this.$router.push('/misterEmail/')
        },
        goBack(){
            eventBusService.eventBus.$emit(eventBusService.TOGGLE_EMAIL);
            this.$router.push('/misterEmail/');
        }
    },
    components: {
        emailService,
    }
}  