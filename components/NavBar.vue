<template>
    <nav>
        <NuxtLink to="/" class="logo">
                <img src="/img/logo.svg" alt="">
                <div class="logo-title">Od počátku</div>
        </NuxtLink>
        <ul>
            <li v-for="link in links">
                <NuxtLink :to="link.link">{{link.lable}}</NuxtLink>
            </li>
        </ul>
    </nav>
</template>

<script setup lang="ts">

    interface Link {
        lable: string,
        link: string
    }
    defineProps <{
        links: Link[]
    }>()



</script>

<style lang="scss" scoped>
nav {
    margin: 0 auto;
    padding: 0 2rem;
    display: flex;
    justify-content: space-between;
    align-items: center;
    background: transparent;

    height: 80px;
    max-width: $large-screen;
    .logo {
        display: flex;
        align-items: center;
        gap: 1rem;
        height: 80px;
        img {
            width: auto;
            height: 80%;
            filter: $logo-img-color;
        }
        .logo-title {
            font-family: $logo-font;
            font-size: $logo-size;
            color: $logo-title-color;
        }
    }
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
                background: $purple;
              }
              &::after {
                transition: width .2s cubic-bezier(0.29, 0.18, 0.26, 0.83);
                background: $purple;
              }
            } 
        }
    }
}




</style>