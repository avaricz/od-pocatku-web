<template>
    <div 
        class="image-container"
        ref="sectionRef" 
        :class="{
            'right': rotate === 'right',
            'left': rotate === 'left',
            'fade-in': isVisible
        }"
    >
         <div 
            class="img-wrapper"
            :class="{
                'horizontal': position === 'horizontal',
                'vertical': position === 'vertical',
            }"
         >
             <NuxtImg 
                :src="photo" 
                alt=""
                format="webp"
                densities="1x"
                sizes="sm:100vw md:100vw lg:100vw"
             />
         </div>
     </div>
</template>
 
 <script setup>
 import { useIntersectionObserver } from '~/composables/useIntersectionObserver'

 defineProps({
     photo: {
         type: String,
         required: true
     },
     position: {
        type: String,
        required: false,
     },
     rotate: {
        type: String,
        required: false,
        default: null
     }
 })

 const sectionRef = ref(null);
const { isVisible, observe } = useIntersectionObserver();

onMounted(() => {
  if (sectionRef.value) {
    observe(sectionRef.value);
  }
});

 </script>
 
<style lang="scss" scoped> 
.image-container {
    display: flex;
    justify-content: center;
    width: 100%;
    align-items: center;
    opacity: 0; // Počáteční stav pro animaci
    will-change: transform, opacity;
    @media (max-width: $small-screen) {
        max-width: 90%;
    }
}

.img-wrapper {
    display: flex;
    flex: 1;
    max-width: 480px;
    border-radius: 10px;
    overflow: hidden;
    transition: all 0.3s ease;
    box-shadow: 0 4px 10px rgba(0, 0, 0, 0.5);
    -webkit-box-reflect: below 4px linear-gradient(transparent 70%, rgba(0, 0, 0, 0.35));
    
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
    aspect-ratio: 3/4;
}

.right {
    transform: perspective(800px) rotateY(25deg) translateX(25px);
    @media (max-width: $medium-screen) {
        transform: none;
    }
}

.left {
    transform: perspective(800px) rotateY(-25deg) translateX(-25px);
    @media (max-width: $medium-screen) {
        transform: none;
    }
}

.fade-in {
    animation: fadeIn 1s ease-out forwards;
}

@keyframes fadeIn {
    from {
        opacity: 0;
        transform: translateY(150px) perspective(800px) 
            rotateY(var(--rotation, 90deg)) 
            translateX(var(--translation, 0));
    }
    to {
        opacity: 1;
        transform: translateY(0) perspective(800px) 
            rotateY(var(--rotation, 0deg)) 
            translateX(var(--translation, 0));
    }
}

.right.fade-in {
    --rotation: 25deg;
    --translation: 25px;
}

.left.fade-in {
    --rotation: -25deg;
    --translation: -25px;
}

@media (max-width: $medium-screen) {
    .right.fade-in,
    .left.fade-in {
        --rotation: 0deg;
        --translation: 0;
    }
}


 </style>