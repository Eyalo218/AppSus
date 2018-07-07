


export default {
    template: `
    <section class="email-preview flex column" @click="readEmail()" >
        <div ref ="emaildiv" class="flex space-between flex-wrap">
            <h4>{{email.subject}}</h4>
            <h5>{{email.sentAt}}</h5>
        </div>
        <p>{{email.body}}</p>
    </section>
    `,
    props: ['email'],
    created() {
        this.markReadStatus
        
    },
    methods:{
        dosomething(){
            var elRead =  this.$refs.emaildiv;
            if (!this.email.isRead) elRead.classList.add('unread');
            else elRead.classList.remove('unread');
        },
        readEmail(){
            var elRead =  this.$refs.emaildiv;
            elRead.classList.remove('unread');
        }
    },
    computed: {
    },
    mounted(){
        this.$nextTick(function () {
           this.dosomething();
          })
        
    },
    data() {
        return {
            read:null,
        }
    },

}