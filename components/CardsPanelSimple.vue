<template>
    <div class="container">
        <div v-for="card in content" class="card">
            <div class="top">
                <div class="img-wrapper">
                    <NuxtImg 
                        src="flower.svg" 
                        alt=""
                        format="webp"
                        densities="1x"
                        sizes="80px"
                    />
                </div>
            </div>
            <div class="title">{{ card.title }}</div>
            <ul class="list">
                <li v-for="item in card.description"> {{  item }}</li>
            </ul>
        </div>
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

<style lang="scss" scoped>
.container{
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    gap: 1rem;
    .card{
        display: flex;
        flex-direction: column;
        border-radius: 10px;
        overflow: hidden;
        // background: $black-dr;
        box-shadow: rgba(98, 98, 98, 0.1) 0px 48px 100px 0px;
        // box-shadow: rgba(149, 157, 165, 0.2) 0px 8px 24px;
        transition: all .3s linear;
        padding: 2rem;
        width: 400px;
        &:hover {
            background: #AB3B6390;
            box-shadow: #AB3B6340 0px 48px 100px 0px;

        }
        .top {
            display: flex;
            justify-content: end;            
            .img-wrapper{
                opacity: .3;
            }
        }
        .title {
            display: flex;
            align-items: center;
            height: 80px;
            font-size: 1.5rem;
            font-weight: 600;
        }
        .list {
            li {
                letter-spacing: .5px;
            }
        }
    }
}
</style>