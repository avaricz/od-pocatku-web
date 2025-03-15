<template>
    <section>
        <div class=" flex flex-col items-center gap-20 mx-auto py-6">
            <div class="flex max-w-full flex-nowrap gap-8 p-4 overflow-x-auto scroll-snap-x mandatory
">
                <slot />
            </div>
        </div>
    </section>
</template>

<script setup>
defineProps({
    title: {
        type: String,
        required: false,
        default: null
    },
    subtitle: {
        type: String,
        required: false,
        default: null
    },
})
</script>
