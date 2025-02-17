<template>
    <div ref="scroll" class="gallery-scroll-wrapper" @touchstart="startTouch" @touchmove="moveTouch">

        <div  class="gallery-container" >
            <div v-for="img in images" class="img-wrapper">
                <NuxtImg :src="img.src" alt=""/>
            </div>
        </div>
    </div>
    </template>

<script setup>
defineProps({
    images: {
        type: Array,
        required: true
    }
})

// Ukládání dotykové pozice
let startX = 0;
let scrollLeft = 0;

// Dotykový začátek
const startTouch = (event) => {
    startX = event.touches[0].pageX; // Počáteční pozice dotyku
    scrollLeft = scroll.value.scrollLeft; // Uložení aktuální pozice
};

// Pohyb prstem
const moveTouch = (event) => {
    if (!scroll.value) return;
    const x = event.touches[0].pageX;
    const walk = (startX - x) * 2; // Určení rychlosti posuvu
    scroll.value.scrollLeft = scrollLeft + walk;
};

const scroll = ref(null);

const handleWheelScroll = (event) => {
    if (scroll.value) {
        event.preventDefault()
        scroll.value.scrollLeft += event.deltaY * 1.5;
    }
}

onMounted (() => {
    if (scroll.value) {
        scroll.value.addEventListener('wheel', handleWheelScroll, {passive: false})
    }
})

onUnmounted(() => {
    if(scroll.value) {
        scroll.value.removeEventListener('wheel', handleWheelScroll)
    }
})
</script>

<style lang="scss" scoped>
.gallery-scroll-wrapper {
    display: flex;
    justify-content: start;
    padding: 0 0 10rem 0 ;
    
    overflow: hidden;
    scroll-snap-type: x mandatory;
    scrollbar-width: none; /* Firefoxu */
    -ms-overflow-style: none; /*  IE/Edge */
}
.gallery-container {
    display: flex;
    justify-content: initial;
    gap: 1rem;

    min-height: 320px;
    max-height: 480px;

    padding: 0 1rem;

    &::-webkit-scrollbar {
        display: none; /* Safary, Chrome */
    }
}

.img-wrapper {
    -webkit-box-reflect: below 4px linear-gradient(transparent 70%, rgba(0, 0, 0, 0.35));
    overflow: hidden;
    transition: all 0.3s ease;
    border-radius: 10px;
    max-width: 300px;
    aspect-ratio: 3 / 4;
    flex: 0 0 auto;
    box-shadow: 0 4px 10px rgba(0, 0, 0, 0.5);
    img {
        width: 100%;
        height: 100%;
        object-fit: cover;
    }
}

</style>