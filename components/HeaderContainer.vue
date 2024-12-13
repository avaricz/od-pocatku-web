<template>
    <section>
        <div class="container"
         >
            <slot></slot>
        </div>

    </section>
</template>

<script setup lang="ts">
   
</script>

<style lang="scss" scoped>
section {
    border-bottom: 1px solid $black;
    background-repeat: no-repeat;
    background-size: cover;
    background-position: 50%;
    background-color: $black;
    background-image: url('bg1.png');
}
.container {
    margin: 0 auto;
    padding: 6rem 2rem;
    max-width: $large-screen;

    display: flex;
    justify-content: space-evenly;
}

</style>
