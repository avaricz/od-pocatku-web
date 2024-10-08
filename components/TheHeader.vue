<template>
    <header>

        <NavBar 
        :logo="logo"
        :links="navigation"
        :socials="socials"
        />

    </header>
</template>

<script setup lang="ts">

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
    {icon: './icon/instagram-colored-filled.png', url: 'https://www.instagram.com/od_pocatku_s_dulou_lucii/'},
    {icon: './icon/facebook-colored-filled.png', url: 'https://www.facebook.com/profile.php?id=100087763303156'}
])

</script>

<style lang="scss" scoped>
header {
    border-bottom: $section-border;
    background: transparent;
} 


</style>