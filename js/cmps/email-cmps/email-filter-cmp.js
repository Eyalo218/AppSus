
export default {
    template: `
    <section class="email-filter flex">
        <select v-model="displayEmailsBy.filter"  @change="onChange()">
            <option>All</option>
            <option>Read</option>
            <option>Unread</option>
        </select>
        <!-- maybe ill change it to drop down for ASC, need to consult with kareen -->
        <label>
            <input type="radio" value="byName" v-model="displayEmailsBy.sort" @click="onChange()">Sort by Name
        </label>
        <label>
            <input type="radio" value="ByDate" v-model="displayEmailsBy.sort" @click="onChange()">Sort by date          
        </label>
    </section>
    `,
    created() {
    },
    data (){
        return {
            displayEmailsBy: {filter: 'ALL' , sort:'ByDate'}
        }
    },
    methods: {
        onChange(){
            console.log(this.displayEmailsBy)
            this.$emit('filtered', this.displayEmailsBy)
            
        }
    },
    components:{
    }
} 