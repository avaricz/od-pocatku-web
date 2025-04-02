<template>
    <div class="flex flex-wrap justify-center gap-8">
        
        <ul class="flex flex-col gap-2 text-gray-700">
            <li 
                v-for="item in content"
                class="flex items-start gap-4"
            >
                <div class="flex pt-1">
                    <Icon  name="ic:twotone-check-circle" class="text-pink-500" size="18px"/>
                </div>
                <div class="flex "> 
                    {{ item }}
                </div>
            </li>
        </ul>

    </div>
</template>

<script setup>
defineProps({
    content: {
        type: Object,
        required: true
    }
})
</script>