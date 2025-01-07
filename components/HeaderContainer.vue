<template>
    <section :style="{ backgroundImage: `url('${bgImage}')` }">
        <div class="container"
        
         >
            <slot></slot>
        </div>

    </section>
</template>

<script setup lang="ts">
   defineProps({
    bgImage: String
   })
</script>

<style lang="scss" scoped>
section {
    background-color: $black;
    height: 600px;
    background-repeat: no-repeat;
    background-size: cover;
    background-position: right;
}
.container {
    margin: 0 auto;
    padding: 6rem 2rem;
    max-width: $large-screen;
    height: 100%;
    display: flex;
    color: $pink-dr;
}

</style>
