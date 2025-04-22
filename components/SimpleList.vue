<template>
    <div class="flex flex-wrap justify-center gap-8">
        
        <ul class="flex flex-col gap-2 text-gray-700">
            <li 
                v-for="item in content"
                class="flex items-start gap-4"
            >
                <div class="flex pt-1">
                    <Icon  name="material-symbols:circle" class="text-pink-700" size="12px"/>
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