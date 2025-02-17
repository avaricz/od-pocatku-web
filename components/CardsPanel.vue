<template>
    <div class="cards-container">
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

<style lang="scss" scoped>
.cards-container {
    display: flex ;
    gap: 4rem;
    flex-wrap: wrap;
    justify-content: space-evenly;
}
</style>