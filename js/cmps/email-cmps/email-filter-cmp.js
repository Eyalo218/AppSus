
export default {
    template: `
    <section class="email-filter flex space-between">
        <div class="filter-options flex column">
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
        </div>
        <input type="text" class="searchByText" v-model="displayEmailsBy.searchStr" @input="onChange()" placeholder="search email here">
    </section>
    `,
    created() {
    },
    data (){
        return {
            displayEmailsBy: {filter: 'All' , sort:'ByDate' ,searchStr:''}
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