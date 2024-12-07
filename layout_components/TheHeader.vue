<template>
    <header>
        <nav>
        <NuxtLink :to="logo.link" class="logo-wrapper">
                <img :src="logo.logo" alt="">
                <div class="logo-title">{{ logo.title}}</div>
        </NuxtLink>

        <div class="navigation-wrapper" :class="{visible: isMenuOpen}">
            <ul>
                <li v-for="link in navigation" @click="isMenuOpen=false">
                    <NuxtLink :to="link.link">{{link.lable}}</NuxtLink>
                </li>
            </ul>

            <div class="socials">
                <NuxtLink v-for="social in socials"
                :to="social.url"
                >
                    <NuxtImg :src="social.icon" height="32px"/>
                </NuxtLink>
            </div>
        </div>   
        
        <div class="hamburger-btn" @click="openMenu">
            <i class="pi pi-bars"></i>
        </div>
    </nav>
    </header>
</template>

<script setup lang="ts">

const isMenuOpen = ref(false)

function openMenu () {
    isMenuOpen.value = !isMenuOpen.value
}

const logo = ref({
    link: '/',
    logo: './img/logo.svg',
    title: 'Od počátku',
})

const navigation = ref([
    { lable: 'Home', link: '/' },
    { lable: 'O mně', link: '/about' },
    { lable: 'Události', link: '/events' },
])

const socials = ref([
    {icon: '/icon/instagram-colored-filled.png', url: 'https://www.instagram.com/od_pocatku_s_dulou_lucii/'},
    {icon: '/icon/facebook-colored-filled.png', url: 'https://www.facebook.com/profile.php?id=100087763303156'}
])

</script>

<style lang="scss" scoped>

header {
    border-bottom: $section-border;
    background: $pink-dr;
} 

nav {
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin: 0 auto;
    padding: 0 2rem;
    overflow: hidden;
    height: 80px;
    max-width: $large-screen;
}
    
.logo-wrapper {
    display: flex;
    align-items: center;
    gap: 1rem;
    height: 100%;
    img {
        width: auto;
        height: 80%;
        filter: $logo-img-color;
    }
    .logo-title {
        text-wrap: nowrap;
        font-family: $logo-font;
        font-size: $logo-size;
        color: $logo-title-color;
    }
}

.navigation-wrapper {
    display: flex;
    align-items: center;
    justify-content: space-between;
    gap: 2rem;
    ul {
        font-family: $nav-font;
        display: flex;
        gap: 2rem;
        li {
            display: flex;
            a {
                font-weight: 700;
                color: $link-color;

            // EXPERIMENT HOVER
                position: relative;
                display: inline-block;
                transition: color .2s ease;
                &:hover {
                    &::after,
                    &::before {
                    width: 100%;
                    left: 0;
                    }
                }
                &::after,
                &::before {
                    content: ''; 
                    position: absolute;
                    bottom: 0;
                    width: 0;
                    right: 0;
                    height: 2px;
                }
                &::before {
                    transition: width .4s cubic-bezier(0.51, 0.18, 0, 0.88) .1s;
                    background: $link-color;
                }
                &::after {
                    transition: width .2s cubic-bezier(0.29, 0.18, 0.26, 0.83);
                    background: $link-color;
                }
            } 
        }
    
    }
    .socials {
        display: flex;
        gap: 1rem;
        img {
            transition:all .3s; 
            &:hover {
                scale: 1.1;
            }

        }
    }
}

.hamburger-btn {
    display: none;
}
    
@media screen and  (max-width: $small-screen) {

    nav{
        height: $header-height-mobile;
        position: relative;
        overflow: visible;
    }

    .logo-wrapper {
        .logo-title {
            font-size: 2.6rem;
        }
    }

    .navigation-wrapper {
        display: none;
        flex-direction: column;
        background: $gray-lt;
        position: absolute;
        right: 0;
        top: $header-height-mobile;
        width: 100%;
        padding: 1rem 0;
        height: calc(100vh - $header-height-mobile);
        ul {
            flex-direction: column;
            align-items: center;
            gap: 0;
            width: 70%;
            li {
                width: 100%;
                a {
                    font-size: 1.2rem;
                    padding: .5rem;
                    color: $purple;
                    width: 100%;
                    &:hover {
                        &::after,
                        &::before {
                            width: 0;
                        }
                    }
                }
            }
            li:not(:last-child) {
                border-bottom: .5px solid $purple;
            }
        }
    }

    .socials {
        padding: 1rem;
    }

    .hamburger-btn {
        display: flex;
        align-items: center;
        justify-content: center;
        padding: .3rem;
        font-size: 2rem;
        cursor: pointer;
    }
}

.visible {
    display: flex;
}
</style>