'use strict';

import appHeader from '../cmps/common-cmps/app-header-cmp.js';

export default {
    template: `
        <section class="about-page">
            <app-header></app-header>
            <main>
                <h1>About Us</h1>
                <div class="team flex column">
                    <div class="team-member flex column horizontal-center">
                        <img src="./img/1.jpg" alt="Eyal Ohayon" />
                        <div>
                            <h2>Eyal Ohayon</h2>
                            <p>
                                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                                Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
                                Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.
                                Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
                            </p>
                        </div>
                    </div>
                    
                    <div class="team-member  flex column horizontal-center">
                        <img src="./img/kareen.jpg" alt="Kareen Ben Ari" />
                        <div>
                            <h2>Kareen Ben Ari</h2>
                            <p>
                                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                                Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
                                Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.
                                Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
                            </p>
                        </div>
                    </div>
                </div>
            </main>
        </section>
    `,

    components: {
        appHeader
    }
}