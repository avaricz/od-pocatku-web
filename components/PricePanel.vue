<template>
    <div class="panel-container">
        <div class="title">{{ title}}</div>
        <div class="content">{{content}}</div>
        <div class="price">{{ price}}</div>
    </div>
</template>

<script setup>
defineProps({
    price: String,
    title: String,
    content: String
})
</script>

<style lang="scss" scoped>
.panel-container {
    display: flex;
    background-color: $gray-lt;
    flex-direction: column;
    border: 0px solid $gray;
    border-radius: 10px;
    width: 300px;
    box-shadow: 0 4px 10px rgba(0, 0, 0, 0.5);
    overflow: hidden;
    .title {
        position: relative;
        display: flex;
        align-items: center;
        justify-content: center;
        background-color: transparent;
        color: $pink-dr;
        height: 80px;
        font-size: 2.2rem;
        font-weight: 600;
    
        &::before {
            content: "";
            position: absolute;
            top: -20px;
            left: -20px;
            width: 120px;
            height: 100px;
            background-image: url('/flower.svg');
            background-repeat: no-repeat;
            background-position: left;
            background-size: cover;
            opacity: 0.3; /* Pouze pozadí bude průhledné */
            z-index: 0; /* Posune pozadí pod text */
        }
    }
    .content {
        display: flex;
        margin: 0 2rem;
        padding: 2rem 0;
        border-top: 1px solid $gray;
        border-bottom: 1px solid $gray;
    }
    .price {
        display: flex;
        align-items: center;
        justify-content: center;
        padding: 2rem;
        font-weight: 600;
    }
}
</style>