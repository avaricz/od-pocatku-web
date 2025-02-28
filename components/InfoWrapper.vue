<template>
    <div class="info-wrapper">
        <div class="inner-container">
            <slot />
        </div>
    </div>
</template>

<script setup>
defineProps({
    maxWidth: String,
    textAlign: {
        type:String,
        required: false,
        default: 'center',
        validator: (value) => ['left', 'center', 'right'].includes(value)

    },
})
</script>

<style lang="scss">
.info-wrapper {
    display: flex;
    flex-direction: column;
    height: 100%;
    max-width: v-bind(maxWidth);
    background-color: transparent;
    align-items: center;
    justify-content: center;
    font-size: 1.8rem;
    font-weight: 200;
    text-align: v-bind(textAlign);
    .inner-container {
        @media (max-width: $medium-screen) {
            padding: 4rem 1rem;
        }
        @media (max-width: $small-screen) {
            padding: 4rem 0rem;
        }
        
        p {
            padding: 1rem;
            border-radius: 10px;
            line-height: 2.2rem;
            font-weight: 200;
            font-style: italic;
            span {
                font-weight: bold;
            }
        }       
    }
}
</style>