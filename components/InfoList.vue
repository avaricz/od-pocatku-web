<template>
    <div class="flex flex-col items-center lg:items-start gap-2">
        <h2 class="text-center">{{ title }}</h2>

        <ul class="flex flex-col gap-8">

            <li 
                v-for="(topic, index) in content"
                class="flex gap-8"
            >
                <div v-if="icon && icon !== 'flower'" class="flex pt-1.5">
                    <Icon  :name="icon" class="text-pink-500" size="24px"/>
                </div>
                <div v-else-if="icon && icon === 'flower'" class="flex shrink-0 w-8 h-8">
                    <IconFlower class="w-8 h-8" />
                </div>
                <div v-else class="
                    flex flex-none items-center justify-
                    center 
                    w-8 h-8 rounded-full border-2 border-pink-500
                    bg-pink-200 text-lg font-bold text-pink-700
                    ">{{ index + 1 }}
                </div> 

                <div class="flex flex-col items-start gap-4">
                    <h3 v-if="topic.header">{{ topic.header }}</h3>
                    <p 
                        v-if="topic.description" 
                        v-html="topic.description" 
                        class="highlighted-text" 
                    />
                </div>
            </li>
        </ul>
    </div>
</template>

<script setup>
defineProps({
    title: {
        type: String,
        required: false,
        default: null
    },
    content: {
        type: Array,
        required: true
    },
    icon: {
        type: String,
        required: false,
        default:null
    }
})
</script>