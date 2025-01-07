<template>
    <div class="card">
        <div class="flower"><NuxtImg src="/flower.svg" alt="" /></div>
        <div class="card-title">{{ content.title }}</div>
        <ul>
            <li v-for="item in content.description">
                {{item}}
            </li>
        </ul>
    </div>
</template>

<script setup>

defineProps({
    content: {
        type: Object,
        required: true,
    }
})

</script>

<style lang="scss" scoped>
.card {
    position: relative;
    display: flex;
    flex-direction: column;
    gap: 1.5rem;

    width: 340px;
    max-width: 340px;
   
    padding: 2rem;

    border: 1px solid $pink-dr;
    border-radius: 10px;
   
    background: $white;
    -webkit-box-shadow: 0px 0px 15px 0px $pink-dr;
    -moz-box-shadow: 0px 0px 15px 0px $pink-dr;
    box-shadow: 0px 0px 15px 0px $pink-dr;

    transition: transform 0.3s ease, box-shadow 0.3s ease;
    &:hover {
        transform: translateY(-5px);
        box-shadow: 0px 8px 30px $pink-dr;
    }
    .flower {
        position: absolute;
        top:-20px;
        left: -20px;
        width: 60px;
        height: auto;
        img {
            width: 100%;
            height: auto;
            filter: drop-shadow(2px 4px 6px $pink-dr);
        }
    }
    .card-title{
        height: 80px;
        display: flex;
        align-items: center;
        justify-content: center;
        letter-spacing: 1px;
        font-size: 1.5rem;
        text-align: center;
        font-weight: 700;
        color: $pink-dr;
        text-transform: uppercase;
        border-bottom: 2px solid $pink-dr;
        padding-bottom: 0.5rem;
    }
    ul {
        display: flex;
        flex-direction: column;
        height: 100%;
        gap: .8rem;
        list-style: none;
        padding: 0;
        margin: 0;
        li {
            font-size: 1.1rem;
            font-weight: 400;
            font-style: italic;
            color: $gray-dr;
            line-height: 1.5;
            position: relative;
            padding-left: 1.5rem;
            &:before {
                content: '•';
                color: $pink-dr;
                position: absolute;
                left: 0;
                font-size: 1.5rem;
                line-height: 1.2;
            }
        }

    }
}
</style>
