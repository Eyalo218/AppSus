
import emailPreview from './email-preview-cmp.js'


export default {
    template: `
    <section class="flex">
        <ul class="clean-list flex email-list column">
            <li v-for="email in emails">
                <router-link :to="'/misterEmail/email/'+email.id">
                    <email-preview :email="email">
                    </email-preview>
                </router-link>
            </li>
        </ul>
        <router-view class="emailDetail"></router-view>

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