<template>
    <header>
        <nav>
        <NuxtLink to="/" class="logo-wrapper">
                <NuxtImg src="./logo.svg" alt="" />
                <div class="logo-title">Od počátku</div>
        </NuxtLink>

        <div class="navigation-wrapper" :class="{'visible': isMenuOpen}">
            <ul>
                <li 
                    v-for="link in navigationLinks" 
                    :key="link.label"
                    class="nav-item" 
                    @click="isMenuOpen=false"
                >
                    <NuxtLink :to="link.link" class="links">{{link.label}}</NuxtLink>
                    <div v-if="link.innerLinks" class="dropdown">
                        <ul>
                            <li v-for="innerLink in link.innerLinks" :key="innerLink.label">
                            <NuxtLink :to="innerLink.link" class="inner-links">{{ innerLink.label }}</NuxtLink>
                            </li>
                        </ul>
                    </div>
                </li>
            </ul>

            <div class="socials">
                <NuxtLink 
                :to="socialLinks.instagram.link"
                >
                    <NuxtImg :src="socialLinks.instagram.icon" height="32px"/>
                </NuxtLink>
                <NuxtLink 
                :to="socialLinks.facebook.link"
                >
                    <NuxtImg :src="socialLinks.facebook.icon" height="32px"/>
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
import { navigationLinks, socialLinks } from '@/utils/navigation'
const isMenuOpen = ref(false)

function openMenu () {
    isMenuOpen.value = !isMenuOpen.value
}


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
        .nav-item {
            display: flex;
            position: relative;
            .links {
                padding: .3rem .5rem;
                border-radius: 10px;
                font-weight: 700;
                color: $white;
                transition: all .3s linear;
                &:hover {
                    color:$black;

                }
            } 
            .dropdown {
                display: none;
                position: absolute;
                width: 360px;
                max-width: 360px;
                top: 100%;
                right: -160%;
                background: $white;
                box-shadow: 0 4px 6px $gray;
                border-radius: 10px;
                padding: 2rem;
                z-index: 2;

                ul {
                    list-style: none;
                    margin: 0;
                    padding: 0;
                    display: flex;
                    flex-direction: column;
                    li {
                        margin: 0;
                        padding: 0;
                        .inner-links {
                            color: $black;
                            text-decoration: none;
                            transition: color 0.3s;
                            text-wrap: wrap;
                            font-weight: 500;
                            &:hover {
                                color: $pink-dr;
                            }
                        }
                    }
                }
            }
            &:hover .dropdown {
                display: block;
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
    
@media screen and  (max-width: $medium-screen) {
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
        position: fixed;
        right: 0;
        top: 60px;
        width: 100%;
        padding: 1rem 0;
        background: $pink-dr;
        border-top: 1px solid $black;

        max-height: calc(100vh - 60px);
        ul {
            flex-direction: column;
            align-items: center;
            gap: 0;
            width: 90%;
            .nav-item {
                width: 100%;
                display: flex;
                flex-direction: column;
                .links {
                    font-size: 1.1rem;
                    padding: .5rem;
                    color: $white;
                    width: 100%;
                    &:hover {
                      color: $black;
                    }
                }
                .dropdown {
                    display: flex;
                    position: static;
                    background: transparent;
                    box-shadow: none;
                    padding: 0;
                    max-width: 100%;
                    width: 100%;
                    ul {
                        display: flex;
                        gap:.5rem;
                        width: 100%;
                        align-items: start;
                        padding-left: 2rem;
                        li {
                            .inner-links {
                                color: $white;
                                &:hover {
                                color: $black;
                            }
                            }
                        }
                        li::marker {
                            color: $white;
                        }
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
}
</style>