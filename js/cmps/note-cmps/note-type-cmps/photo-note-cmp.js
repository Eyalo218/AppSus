'use strict';

export default {
    props: ['data'],

    template: `
        <section class="photo-note">
            <h3>{{data.title}}</h3>
            <img :src="data.imgSrc" />
        </section>
    `
}