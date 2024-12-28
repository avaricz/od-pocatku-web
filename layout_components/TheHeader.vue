<template>
    <header>
        <nav>
        <NuxtLink :to="logo.link" class="logo-wrapper">
                <img :src="logo.logo" alt="">
                <div class="logo-title">{{ logo.title}}</div>
        </NuxtLink>

        <div class="navigation-wrapper" :class="{'visible': isMenuOpen}">
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
    background: $pink-dr;
    z-index: 10;
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
        
    }
    .logo-title {
        text-wrap: nowrap;
        font-family: Italianno;
        font-size: 3.6rem;
        color: $black;
    }
}

.navigation-wrapper {
    display: flex;
    align-items: center;
    justify-content: space-between;
    gap: 2rem;
    ul {
        display: flex;
        gap: 1.5rem;
        li {
            display: flex;
            a {
                padding: .3rem .5rem;
                border-radius: 10px;
                font-weight: 700;
                color: $white;
                transition: all .3s linear;
                &:hover {
                    background-color: darken($pink-dr, 10%);
                }
                &:active {
                    color:$white;
                    background-color: darken($pink-dr, 20%);
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
    header {
        position: fixed;
        top: 0;
        left: 0;
        right: 0;
        box-shadow: 0 0 10px 5px $black;
        
    }
    nav{
        height: 60px;
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
        background: $white;
        position: fixed;
        right: 0;
        top: 60px;
        width: 100%;
        padding: 1rem 0;
        max-height: calc(100vh - 60px);
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
                        background: $pink-dr;
                    }
                }
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
    background-color: $white;
}
</style>