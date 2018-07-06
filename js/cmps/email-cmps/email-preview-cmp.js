


export default {
    template: `
    <section class="email-preview flex column">
        <h4>{{email.title}}</h4>
        <h6>{{email.sender}}</h6>
        <p>{{email.msg}}</p>
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