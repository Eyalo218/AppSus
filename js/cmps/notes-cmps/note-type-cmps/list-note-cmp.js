'use strict';

export default {
    props: ['data'],

    template: `
        <section class="list-note">
            <div>
                <ul>
                    <li v-for="item in data.listItems">
                        {{item}}
                    </li>
                </ul>
            </div>
        </section>
    `
}