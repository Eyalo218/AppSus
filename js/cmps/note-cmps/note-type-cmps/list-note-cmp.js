'use strict';

export default {
    props: ['data'],

    template: `
        <section class="list-note">
            <h3>{{data.title}}</h3>
            <ul>
                <li v-for="item in data.listItems">
                    {{item}}
                </li>
            </ul>
        </section>
    `
}