<template>
    <button>
        {{ label }}
    </button>
</template>

<script setup>
defineProps ({
    label: String
})
</script>

<style lang="scss" scoped>
button {
    display: flex;
    align-items: center;
    justify-content: center;
    padding: .4rem 1rem;
    align-self: flex-start;
    border: 0;
    border-radius: 50px;
    font-size: 1.2rem;
    font-weight: 600;
    cursor: pointer;
    background-color: $purple;
    color: $gray-lt;
    transition: all .3s linear;
    &:hover {
        background-color: $gray-dr;
    }
}
</style>