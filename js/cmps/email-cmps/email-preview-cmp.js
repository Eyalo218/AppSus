import eventBusService from '../../services/eventbus-service.js'


export default {
    template: `
    <section class="email-preview flex column" @click="readEmail()" >
        <div ref ="readStatus" class="flex space-between flex-wrap">
            <div class="envelope-img"></div>
            <h4>{{email.subject}}</h4>
            <h5>{{email.sentAt}}</h5>
        </div>
        <p>{{email.body}}</p>
    </section>
    `,
    props: ['email'],
    created() {
        eventBusService.eventBus.$on(eventBusService.TOGGLE_EMAIL,this.changeReadStatus)
        
    },
    methods:{
        changeReadStatus(){
            var elRead =  this.$refs.readStatus;
            if (elRead.length === 0) return
            if (!this.email.isRead){
                elRead.classList.add('unread');
            } 
            else elRead.classList.remove('unread');
        },
        readEmail(){
            eventBusService.eventBus.$emit(eventBusService.TOGGLE_EMAIL);
            var elRead =  this.$refs.readStatus;
            elRead.classList.remove('unread');
        }
    },
    computed: {
    },
    mounted(){
        this.$nextTick(function () {
           this.changeReadStatus();
          })
        
    },
    data() {
        return {
            read:null,
        }
    },

}