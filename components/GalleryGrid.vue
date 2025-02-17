<template>
    <div class="grid-gallery-container">

        <div
            v-for="img in images"
            class="img-wrapper"
        >
            <NuxtImg :src="img.src" alt="" />
        </div>
    </div>
</template>

<script setup>
defineProps({
    images: {
        type: Array,
        required: true,
    }
})
</script>

<style lang="scss" scoped>

$img-width: 200px;
$img-height: 150px;
$gap: 0.5rem;
$container-padding: 1rem;
$max-container-width: calc(3 * #{$img-width} + 2 * #{$gap} + 2 * #{$container-padding});

.grid-gallery-container {
    display: inline-grid;
    grid-template-columns: repeat(auto-fit, #{$img-width});
    
    justify-content: start; // Zarovnání podle obsahu
    max-width: $max-container-width;
    width: 100%;
    gap:.5rem;

    padding: $container-padding;
    background-color: $gray-lt;
    border-radius: 10px;
    box-shadow: 0 4px 10px rgba(0, 0, 0, 0.5);

}
.img-wrapper {
    width: $img-width;
  height: $img-height;
  border-radius: 10px;
  overflow: hidden;
  transition: all 0.3s ease;
    &:hover {
        box-shadow: 0 4px 10px rgba(0, 0, 0, 0.5);
        scale: 1.05;
    }
    img {
        height: 100%;
        width: 100%;
        object-fit: cover;
    }
}
</style>