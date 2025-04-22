<template>
    <div 
        ref="cardRef"
        class="
            flex
            group 
            rounded-md
            aspect-square w-[340px]  
            perspective-distant
        "  
        :class="{'rotate-y-180 transform-3d transition-transform duration-500': isActive}"
        @click.stop="toggleActive"
    >
    <div 
        class="
            relative 
            w-full h-full 
            transition-transform duration-500 transform-3d 
            group-hover:rotate-y-180
        "
    >
      
      <!-- Přední strana -->
        <div 
            class="
                absolute inset-0
                flex items-center justify-center 
                p-4
                bg-gray-100 rounded-md shadow-lg backface-hidden
                cursor-pointer
            "
            
        >
            <div class="absolute inset-0 flex rounded-md overflow-hidden">
                <NuxtImg :src="image" 
                    class="w-full object-cover object-center"
                    alt=""
                    densities="1x"
                    sizes="400px "
                    format="webp"
                    quality="90"
                />
            </div>
            <div 
                class="absolute inset-0  opacity-70 rounded-md "
                :class="overlayColor"
            ></div>
            <h3 class="text-center z-10"
                :class="textColor,
                {'text-transparent' : isActive && isMobile}"
            >{{ title, isMobile }}</h3>
        </div>
        
        <!-- Zadní strana -->
        <div 
            class="
                absolute inset-0 
                flex flex-col items-center justify-center 
                p-4
                bg-gray-50 text-white rounded-md shadow-lg transform rotate-y-180 backface-hidden
                overflow-hidden
            "
        >   
            <div class="absolute w-[260px] h-[260px] bg-[url('/flower.svg')] bg-no-repeat bg-left bg-cover opacity-[0.3] z-0 top-[-60px] right-[-80px]"></div>
            <div class="flex flex-1 items-center justify-center">

                <ul class="flex flex-col gap-2 px-4 ">
                    <li 
                        v-for="item in description"
                        class="flex items-start gap-2"
                    >
                    <div class="">
                        <Icon  name="ic:twotone-check-circle" class="text-pink-500" size="24px"/>
                        </div>
                        <p class="text-base font-semibold text-gray-800">{{ item }}</p>
                    </li>
                </ul>
            </div>
            <div class="flex items-center justify-center mt-auto">
                <slot name="button" />
            </div>
        </div>
      
    </div>
  </div>


</template>

<script setup lang="ts">
defineProps({
    title: {
        type: String,
        required: true
    },
    description: {
        type: Array,
        required: true
    },
    image: {
        type: String,
        required: false,
        default: null
    },
    overlayColor: {
        type: String,
        required: true
    },
    textColor: {
        type: String,
        required: false,
        default: null
    }
})

import { ref } from 'vue';

const cardRef = ref<HTMLElement | null>(null);

const isActive = ref(false);
const isMobile = ref(false);

const checkIsMobile = () => {
  isMobile.value = window.matchMedia("(max-width: 768px)").matches;
};
console.log(isMobile)

const toggleActive = () => {
    isActive.value = !isActive.value;
};

const handleClickOutside = (event: MouseEvent) => {
    if (cardRef.value && !cardRef.value.contains(event.target as Node)) {
        isActive.value = false;
    }
};

onMounted(() => {
    window.addEventListener("click", handleClickOutside);
    window.addEventListener("resize", checkIsMobile);
});

onUnmounted(() => {
    window.removeEventListener("click", handleClickOutside);
    window.removeEventListener("resize", checkIsMobile);
});
</script>