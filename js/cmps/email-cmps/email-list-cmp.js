
import emailPreview from './email-preview-cmp.js'
import newEmail from './new-email-cmp.js'


export default {
    template: `
    <section class="flex column">
        <div class="flex">
            <ul class="clean-list flex email-list column">
                <li v-for="email in emails">
                    <router-link :to="'/misterEmail/email/'+email.id">
                        <email-preview :email="email">
                        </email-preview>
                    </router-link>
                </li>
            </ul>
            <router-view class="emailDetail" v-if="emailToggle"></router-view>
            <router-view class="newEmail" v-else="!emailToggle"></router-view>
        </div>
        <button @click="$router.push('/misterEmail/newEmail')">lalala</button>
            <!-- <router-link :to="'/misterEmail/newEmail'"></router-link> -->
        </button>
    </section>
    `,
    props: ['emails'],
    created() {

    },
    data(){
        return {
            emailToggle : false
        }
    },
    methods: {
    },
    components:{
        emailPreview,
        newEmail
    }
}  