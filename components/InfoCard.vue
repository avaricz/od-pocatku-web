<template>
    <div class="card">
        <div class="flower">
            <NuxtImg 
                src="/flower.svg" 
                alt=""
                densities="1x"
                sizes="100px"
                format="webp"
                quality="100"
            />
        </div>
        <div class="card-header">
            <div class="card-title">{{ content.title }}</div>
        </div>
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
    gap: 1rem;
    width: 340px;
    max-width: 340px;
    border-radius: 10px;
    background: transparent;
    -webkit-box-shadow: 0px 0px 15px 0px $gray;
    -moz-box-shadow: 0px 0px 15px 0px $gray;
    box-shadow: 0px 0px 15px 0px $gray;
    transition: transform 0.3s ease, box-shadow 0.3s ease;
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
    .card-header {
        background-image: url('/img/9103_small_darker.jpg');
        background-repeat: no-repeat;
        background-size: cover;
        background-color: $black-dr;
        border-radius: 10px 10px 0 0;
        .card-title{
            height: 180px;
            display: flex;
            align-items: center;
            justify-content: center;
            letter-spacing: 1px;
            font-size: 1.5rem;
            text-align: center;
            font-weight: 500;
            color: $white;
            text-transform: uppercase;
            padding: 1rem;
        }
    }
    ul {
        display: flex;
        flex-direction: column;
        height: 100%;
        list-style: none;
        padding: 0 1.5rem 2rem 1.5rem;
        margin: 0;
        list-style-type:disc;
        padding-left: 3rem;
        li {
            font-size: 1.1rem;
            font-weight: 400;
            font-style: italic;
            color: $gray-dr;
            line-height: 1.5;
        }

    }
}
</style>
