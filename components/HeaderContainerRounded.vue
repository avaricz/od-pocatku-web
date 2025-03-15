<template>
    <section class="bg-gray-50">
        <div class="relative max-w-[1280px] bg-gray-950 mx-auto xl:rounded-b-[15px] h-[500px] overflow-hidden p-[5%] transition-all duration-300 ease-linear">
            <div class="absolute flex top-0 left-0 md:left-[30%] right-0 bottom-0 justify-end">
                <NuxtImg 
                    :src="bgImage" 
                    class="w-full object-cover object-center"
                    alt=""
                    densities="1x"
                    sizes="sm:100vw md:100vw lg:100vw"
                    format="webp"
                    quality="90"
                />
                <div :class="{'absolute top-0 bottom-0 left-0 right-0 overlay-left-gradient': overlay}"></div>
            </div>

            <div class="flex flex-col items-start justify-center gap-8 relative text-gray-50 h-full max-w-[550px] mt-4 transition-all duration-300 ease-linear md:mt-0 ">
                <h1> {{ title }}</h1>
                <p class="text-gray-200">
                    {{ description }}
                </p>
                <slot name="button"/>
            </div>
        </div>
    </section>
</template>

<script setup>
defineProps({
    bgImage: {
        type: String,
        required: false
    },
    title: {
        type: String,
        required: true
    },
    description: {
        type: String,
        required: false,
        default: ""
    },
    overlay: Boolean,
})

</script>
