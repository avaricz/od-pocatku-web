<template>
    <div class="flex gap-16 flex-wrap justify-evenly">
        <InfoCard
            v-for="card in data"
            :key="card.title"
            :content="card"
        />
    </div>
</template>

<script setup>
defineProps ({
    data: {
        type: Array,
        required: true,
        default: []
    }
})
</script>