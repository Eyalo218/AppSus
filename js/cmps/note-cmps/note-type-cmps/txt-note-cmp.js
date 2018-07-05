'use strict';

export default {
    props: ['data'],

    template: `
        <section class="txt-note">
            <h3>{{data.title}}</h3>
            <p>
                {{data.content}}
            </p>
        </section>
    `
}