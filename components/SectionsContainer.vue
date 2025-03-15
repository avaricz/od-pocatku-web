
<template>
    <section 
        class=" "
        :class="[bgColor]"
    >
        <div 
            class="flex w-full py-24 mx-auto justify-center"
            :class="fullWidth ? 'max-w-none' : 'max-w-[1280px]'"
         >
            
            <div class="flex justify-center">
                <slot />
            </div>
        </div>

    </section>
</template>

<script setup lang="ts">
 const props = defineProps ({
    bgColor: {
        type: String,
        required: false,
        default: "bg-gray-50",
    },
    fullWidth: Boolean,

 })
</script>