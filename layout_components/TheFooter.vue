<template>
    <footer>
        <div class="footer-container">
            <div class="links">

                <div v-for="area in footerLinks" class="area-wrapper">
                    <div class="title">
                        <span>{{ area.label }}</span>
                    </div>
                    <ul class="list">
                        <li v-for="link in area.innerLinks">
                            <NuxtLink :to="link.link">
                                {{ link.label }}

                            </NuxtLink>
                        </li>
                    </ul>
                </div>
            </div>

            <div class="contacts-wrapper">

                <div class="area-wrapper">
                    <div class="title">
                        <span>Kontakt</span>
                    </div>

                    <div class="contact">
                        <h3 class="text-gray-50">Lucie Machalová</h3>
                        <h5>Dula pro Kroměříž a okolí</h5>
                        <NuxtLink :to="socialLinks.mail.link" class="mail">
                            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24">
                                <path fill="currentColor"
                                    d="M4 20q-.825 0-1.412-.587T2 18V6q0-.825.588-1.412T4 4h16q.825 0 1.413.588T22 6v12q0 .825-.587 1.413T20 20zm8-7l8-5V6l-8 5l-8-5v2z" />
                            </svg>
                            {{ socialLinks.mail.label}}
                        </NuxtLink>
                    </div>
                </div>

                <div class="area-wrapper">
                    <div class="title">
                        <span>Sleduj na</span>
                    </div>

                    <div class="follow">
                        <NuxtLink :to="socialLinks.facebook.link" target="_blank">
                            <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 512 512">
                                <path fill="currentColor"
                                    d="M512 256C512 114.6 397.4 0 256 0S0 114.6 0 256c0 120 82.7 220.8 194.2 248.5V334.2h-52.8V256h52.8v-33.7c0-87.1 39.4-127.5 125-127.5c16.2 0 44.2 3.2 55.7 6.4V172c-6-.6-16.5-1-29.6-1c-42 0-58.2 15.9-58.2 57.2V256h83.6l-14.4 78.2H287v175.9C413.8 494.8 512 386.9 512 256" />
                            </svg>
                        </NuxtLink>
                        <NuxtLink :to="socialLinks.instagram.link" target="_blank">
                            <svg xmlns="http://www.w3.org/2000/svg" width="28" height="32" viewBox="0 0 448 512">
                                <path fill="currentColor"
                                    d="M224.1 141c-63.6 0-114.9 51.3-114.9 114.9s51.3 114.9 114.9 114.9S339 319.5 339 255.9S287.7 141 224.1 141m0 189.6c-41.1 0-74.7-33.5-74.7-74.7s33.5-74.7 74.7-74.7s74.7 33.5 74.7 74.7s-33.6 74.7-74.7 74.7m146.4-194.3c0 14.9-12 26.8-26.8 26.8c-14.9 0-26.8-12-26.8-26.8s12-26.8 26.8-26.8s26.8 12 26.8 26.8m76.1 27.2c-1.7-35.9-9.9-67.7-36.2-93.9c-26.2-26.2-58-34.4-93.9-36.2c-37-2.1-147.9-2.1-184.9 0c-35.8 1.7-67.6 9.9-93.9 36.1s-34.4 58-36.2 93.9c-2.1 37-2.1 147.9 0 184.9c1.7 35.9 9.9 67.7 36.2 93.9s58 34.4 93.9 36.2c37 2.1 147.9 2.1 184.9 0c35.9-1.7 67.7-9.9 93.9-36.2c26.2-26.2 34.4-58 36.2-93.9c2.1-37 2.1-147.8 0-184.8M398.8 388c-7.8 19.6-22.9 34.7-42.6 42.6c-29.5 11.7-99.5 9-132.1 9s-102.7 2.6-132.1-9c-19.6-7.8-34.7-22.9-42.6-42.6c-11.7-29.5-9-99.5-9-132.1s-2.6-102.7 9-132.1c7.8-19.6 22.9-34.7 42.6-42.6c29.5-11.7 99.5-9 132.1-9s102.7-2.6 132.1 9c19.6 7.8 34.7 22.9 42.6 42.6c11.7 29.5 9 99.5 9 132.1s2.7 102.7-9 132.1" />
                            </svg>
                        </NuxtLink>
                    </div>
                </div>
            </div>
        </div>
    </footer>
</template>

<script setup>
import { footerLinks, socialLinks } from '#imports';

</script>

<style lang="scss" scoped>
footer {
    display: flex;
    align-items: center;
    justify-content: center;
    background: $black-dr;
    color: $white;
    margin-top: auto;
}

.footer-container {
    display: flex;
    flex-direction: column;
    gap: 5rem;
    margin: 0 auto;
    padding: 6rem 2rem;
    max-width: $large-screen;
    justify-content: space-evenly;
    @media (min-width:$small-screen) {
        flex-direction: row;
    }

    .links {
        display: flex;
        flex-direction: column;
        gap: 5rem;
        @media (min-width: $small-screen) {
            flex-direction: row;
        }
    }

    .contacts-wrapper {
        display: flex;
        flex-direction: column;
        gap: 3rem;
        .contact {
            display: flex;
            flex-direction: column;
            align-items: start;
            gap: .5rem;
            
            
            h3 {
                font-size: 1.4rem;
                white-space: nowrap;
            }
            
            h5 {
                font-size: 1.0rem;
                font-weight: 500;
                white-space: nowrap;
            }
            
            .mail {
                display: flex;
                align-items: center;
                justify-content: center;
                gap: 1rem;
                color: $white;
                margin-top: 1rem;
            }
        }
        .follow {
            display: flex;
            gap: 1rem;
            svg {
                color: $white;
                height: 32px;
                width: 32px;
                cursor: pointer;
            }
        }
    }
}

.area-wrapper {
    display: flex;
    flex-direction: column;
    gap: 2rem;

    .title {
        padding: 0rem 0rem .5rem;
        border-bottom: 2px solid;
        border-image: linear-gradient(to right, $pink-dr, $black-dr);
        border-image-slice: 1;

        font-size: 1.1rem;
        font-weight: 600;
    }

    .list {
        display: flex;
        flex-direction: column;
        gap: 1rem;
        font-size: .9rem;

        a {
            color: $gray;
            &:hover {
                color: $white;
            }
        }
    }

}
</style>