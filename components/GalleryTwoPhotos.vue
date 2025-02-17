<template>
    <div class="images-container">
        <div 
            v-for="img in images"
            class="img-frame"
            :class="{'horizontal': img.position === 'horizontal','vertical': img.position === 'vertical'}"
        >
            <NuxtImg :src="img.src" alt=""/>
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
    align-items: end;
    justify-content: center;
    width: 100%;
    height: 100%;
}
.img-frame {
    border-radius: 10px;
    overflow: hidden;
    transition: transform 0.3s ease, box-shadow 0.3s ease, z-index 0.3s;
    box-shadow: 0 4px 10px rgba(0, 0, 0, 0.5);
    -webkit-box-reflect: below 4px linear-gradient(transparent 70%, rgba(0, 0, 0, 0.35));

    &:first-child {
        transform: perspective( 800px ) rotateY( 25deg ) translateX(25px);
    }

    &:last-child {
        transform: perspective( 800px ) rotateY( -25deg ) translateX(-25px);
    }

    img {
        width: 100%;
        height: 100%;
        object-fit: cover;
    }
}

.horizontal {
    aspect-ratio: 4/3;
    max-width: 420px;
    max-height: 300px;
}

.vertical {
    aspect-ratio: 3/4;
    max-width: 300px;
    max-height: 420px;
}

@media (max-width: 560px) {
    .img-frame {
        &:first-child {
            transform: perspective( 800px ) rotateY( 35deg ) translateX(25px);
        }

        &:last-child {
            transform: perspective( 800px ) rotateY( -35deg ) translateX(-25px);
        }
    }
}


</style>