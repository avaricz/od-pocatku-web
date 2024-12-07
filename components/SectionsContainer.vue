<template>
    <section :style="{ backgroundImage: background }">
        <div class="container"
         >
            <slot></slot>
        </div>

    </section>
</template>

<script setup lang="ts">
    const props = defineProps<{
        backgroundUrl?: string
    }>()
    
    const background = ref(props.backgroundUrl ? `url(${props.backgroundUrl})`  : "transparent")
</script>

<style lang="scss" scoped>
section {
    border-bottom: $section-border;
    background-repeat: no-repeat;
    background-size: cover;
    background-position: 50%;
}
.container {
    margin: 0 auto;
    padding: 6rem 2rem;
    max-width: $large-screen;

    display: flex;
    justify-content: space-evenly;
}

</style>