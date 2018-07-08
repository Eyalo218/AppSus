import emailService from '../../services/email-service.js';

export default {
    template: `
    <section class="flex column">
        <h4>New Email</h4>
        <div>
            Subject:
            <input ref="subject" id="subject">
        </div>
        <div>
            Message:
            <textarea ref="body" cols="30" rows="10"></textarea>
        </div>
        <button @click="composeEmail()">Send</button>
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
        }
    },
    components: {
        emailService,
    }
}  