'use strict';

import eventbusService from '../../../services/eventbus-service.js';

export default {
    props: ['data'],

    template: `
        <section class="list-note">
            <h3>{{data.title}}</h3>
            <ul class="clean-list">
                <li v-for="(item, idx) in data.listItems" @click.prevent="crossItem([data.id, idx])" :ref="'item' + idx">
                    {{item.itemName}}
                </li>
            </ul> 
        </section>
    `,

    mounted() {
        this.data.listItems.forEach((item, idx) => {
            if (item.crossed) this.$refs['item' + idx][0].classList.add('crossed-item');
            else this.$refs['item' + idx][0].classList.remove('crossed-item');
        });
    },

    methods: {
        crossItem([dataId, itemIdx]) {
            eventbusService.eventBus.$emit(eventbusService.CROSS_ITEM, [dataId, itemIdx]);
            this.$refs['item' + itemIdx][0].classList.toggle('crossed-item');
        }
    }
}