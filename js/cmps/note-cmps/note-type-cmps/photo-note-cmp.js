'use strict';

export default {
    props: ['data'],

    template: `
        <section class="photo-note">
            <img :src="data.imgSrc" />
        </section>
    `
}