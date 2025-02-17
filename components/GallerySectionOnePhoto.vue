<template>
<div class="gallery-container">
    <div 
        class="img-wrapper"
    >
        <NuxtImg :src="photo" :width="720"/>
    </div>
</div>
</template>

<script setup>
defineProps({
photo: {
    type: String,
    required: true
}
});
</script>

<style lang="scss" scoped>
.gallery-container {
    display: flex;
    justify-content: end;
    background: $black-dr;
    width: 100%;
    height: 480px;
    border-top-right-radius: 10px;
    border-bottom-right-radius: 10px;
    overflow: hidden;
    margin: 2rem 2rem 2rem 0;
    box-shadow: 0 4px 10px rgba(0, 0, 0, 0.5);
    @media (max-width: $medium-screen) {
        margin: 0;
        border-radius: 0
    }
}

.img-wrapper {
    display: flex;
    justify-content: center;
    align-items: center;
    height: 100%;
    img {
        width: auto;
        height: 100%;
        object-fit: contain;
    }
}
</style>
  