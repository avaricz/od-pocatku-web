<template>
    <div class="images-container">
        <div 
            v-for="img in images"
            class="img-wrapper"
            :class="{'horizontal': img.position === 'horizontal','vertical': img.position === 'vertical'}"
        >
            <NuxtImg 
                :src="img.src" 
                alt="" 
                format="webp"
                densities="1x"
                sizes="840px"
            />
        </div>
    </div>
</template>

<script setup>

defineProps({
    
    images: {
        type: Array,
        required: true,
    },
})
</script>

<style lang="scss" scoped>
.images-container {
    display: flex;
    justify-content: center;
    align-items: end;
    width: 100%;
}
.img-wrapper {
    flex: 1;
    max-width: 50%;
    border-radius: 10px;
    overflow: hidden;
    transition: all 0.3s ease;
    box-shadow: 0 4px 10px rgba(0, 0, 0, 0.5);
    -webkit-box-reflect: below 4px linear-gradient(transparent 70%, rgba(0, 0, 0, 0.35));

    &:first-child {
        transform: perspective( 800px ) rotateY( 25deg ) translateX(25px);
    }

    &:last-child {
        transform: perspective( 800px ) rotateY( -25deg ) translateX(-25px);
    } 
    @media (max-width: $small-screen) {
        &:first-child {
            transform: perspective( 800px ) rotateY( 25deg ) translateX(5px);
        }

        &:last-child {
            transform: perspective( 800px ) rotateY( -25deg ) translateX(-5px);
        }  
    }

    img {
        width: 100%;
        height: 100%;
        object-fit: cover;
}
}

.horizontal {
    aspect-ratio: 4/3;
}

.vertical {
    aspect-ratio: 5/6;
}




</style>