
import emailPreview from './email-preview-cmp.js'


export default {
    template: `
    <section>
        <ul class="clean-list flex email-list">
            <li v-for="email in emails">
                <router-link :to="'/email/'+email.id">
                    <email-preview :email="email">
                    </email-preview>
                </router-link>
            </li>
        </ul>
        <!-- <book-add></book-add> -->
    </section>
    `,
    props: ['emails'],
    created() {

    },
    methods: {
    },
    components:{
        emailPreview,
    }
}  