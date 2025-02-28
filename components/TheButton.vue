<template>
    <button :class="{'filled': filled}">
        {{ label }}
    </button>
</template>

<script setup>
defineProps ({
    label: String,
    fontWeight: {
        type: Number,
        required: false,
        default: 600,
        validator: (v) => v >= 100 || v <= 900
    },
    filled: Boolean
})
</script>

<style lang="scss" scoped>
button {
    display: flex;
    align-items: center;
    justify-content: center;
    padding: .4rem 3rem;
    border: 0;
    border-radius: 50px;
    font-size: 1.2rem;
    font-weight: v-bind(fontWeight);
    font-family: sans-serif;
    cursor: pointer;
    border: 2px solid $pink-dr;
    background: transparent;
    color: $pink-dr;
    transition: all .3s linear;
    &:hover {
        background-color: $pink-dr;
        color: $white
    }
    &:active {
        background-color: transparent;
        color: $pink-dr
    }

}

.filled {
    background-color: $pink-dr;
    color: $white;
    &:hover {
        background-color: transparent;
        color: $pink-dr
    }
    &:active {
        background-color: $pink-dr;
        color: $white
    }
}
</style>