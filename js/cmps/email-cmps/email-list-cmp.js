
import emailPreview from './email-preview-cmp.js'
import newEmail from './new-email-cmp.js'
import eventBusService from '../../services/eventbus-service.js'

export default {
    template: `
    <section class="flex column email-list-cmp">
        <div class="flex center">
            <ul class="clean-list flex email-list column" ref="email-list">
                <li v-for="email in emails">
                    <router-link :to="'/misterEmail/email/'+email.id">
                        <email-preview :email="email">
                        </email-preview>
                    </router-link>
                </li>
            </ul>
            <div class="sub-routes hidden" ref="sub-routes">
                <router-view class="emailDetail" v-if="emailToggle"></router-view>
                <router-view class="newEmail" v-else="!emailToggle"></router-view>
            </div>
        </div>
        <div class="flex center new-email-button">
          <button @click="newEmail">Compose Email <img src='../../../img/compose.png'/></button>
          
        </div>
    </section>
    `,
    props: ['emails'],
    created() {
        eventBusService.eventBus.$on(eventBusService.TOGGLE_EMAIL, this.toggleList)
    },
    data(){
        return {
            emailToggle : false
        }
    },
    methods: {
        toggleList(){
            this.$refs['email-list'].classList.toggle('hidden');
            this.$refs['sub-routes'].classList.toggle('hidden');
            

        },
        newEmail(){
            if(this.$refs['sub-routes'].classList.contains('hidden'))this.toggleList();
            this.$router.push('/misterEmail/newEmail');
        },
        
    },
    components:{
        emailPreview,
        newEmail
    }
}  