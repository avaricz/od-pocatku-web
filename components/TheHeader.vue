<template>
    <header>

            <NavBar 
            :links="navigation"
            />

    </header>
</template>

<script setup lang="ts">


const navigation = ref([
    { lable: 'Home', link: '/' },
    { lable: 'O mně', link: '/about' },
    { lable: 'Události', link: '/events' },

])

</script>

<style lang="scss" scoped>
 header {
    border-bottom: $section-border;
    background: transparent;
} 


</style>