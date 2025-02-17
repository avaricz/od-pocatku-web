<template>
    <div 
        class="images-container "
        :class="{
                    'right': rotate === 'right',
                    'left': rotate === 'left',
                }"
    >
         <div 
            class="img-wrapper  "
            :class="{
                'horizontal': position === 'horizontal',
                'vertical': position === 'vertical',
            }"
         >
             <NuxtImg :src="photo" alt=""/>
         </div>
     </div>
 </template>
 
 <script setup>
 defineProps({
     photo: {
         type: String,
         required: true
     },
     position: {
        type: String,
        required: true,
     },
     rotate: {
        type: String,
        required: false,
        default: null
     }
 })
 </script>
 
 <style lang="scss" scoped> 
.images-container {
    display: flex;
    justify-content: center;
    width: 100%;
    height: 100%;
}

.img-wrapper {
    border-radius: 10px;
    overflow: hidden;
    transition: all 0.3s ease;
    box-shadow: 0 4px 10px rgba(0, 0, 0, 0.5);
    -webkit-box-reflect: below 4px linear-gradient(transparent 70%, rgba(0, 0, 0, 0.35));

    img {
        height: 100%;
        width: 100%;
        object-fit: cover;
    }
}

.horizontal {
    width: 480px;
    height: 360px;
    @media (max-width: $small-screen) {
        width: 300px;
        height: 240px;
    }
    aspect-ratio: 4/3;
    max-width: 480px;
    max-height: 360px;
}
.vertical {
    width: 360px;
    height: 480px;
    @media (max-width: $small-screen) {
        width: 240px;
        height: 300px;
    }
}
.right {
    transform: perspective( 800px ) rotateY( 25deg ) translateX(25px);
    @media (max-width: $medium-screen) {
       // transform: none;
    }
}
.left {
    transform: perspective( 800px ) rotateY( -25deg ) translateX(-25px);
    @media (max-width: $medium-screen) {
       // transform: none;
    }
}

 </style>