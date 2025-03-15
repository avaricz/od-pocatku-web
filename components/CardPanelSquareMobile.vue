<template>
     <div class="">

            <div class="">
                <NuxtImg 
                    src="image" 
                    alt="" 
                    densities="1x"
                    sizes="sm:400px"
                    format="webp"
                    quality="100"
                 />

            </div>
        
            <div class="header">
                <h3>{{ title }}</h3>
            </div>

            <div class="">
                <div class="">
                    {{ description }}
                </div>
                <NuxtLink to="">
                    <TheButton label="" filled pulse/>
                </NuxtLink>
            </div>

    </div>
</template>

<script setup>


defineProps({
    title: {
        type: String,
        required: true
    },
    description: {
        type: Array ,
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

</script>