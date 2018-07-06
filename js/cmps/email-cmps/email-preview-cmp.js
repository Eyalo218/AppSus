


export default {
    template: `
    <section class="email-preview flex column">
        <div class="flex space-between flex-wrap">
            <h4>{{email.subject}}</h4>
            <h5>{{email.sentAt}}</h5>
        </div>
        <p>{{email.body}}</p>
    </section>
    `,
    props: ['email'],
    created() {
    },
    data() {
        return {
        }
    },

}