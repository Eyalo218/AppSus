'use strict';

export default {
    props: ['data'],

    template: `
        <section class="txt-note">
            <p>
                {{data.content}}
            </p>
        </section>
    `
}