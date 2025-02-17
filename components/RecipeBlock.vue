<template>
    <div class="container">
        <div class="content-wrapper">

            <div class="title">
                {{ title }}
            </div>
            <ul>
                <li v-for="(step, index) in steps">
                    <div class="numbers">{{index + 1}}.</div>
                    <p class="step-content" v-html="step" />
                </li>
            </ul>
        </div>
        <div class="img-wrapper">
            <NuxtImg :src="img" />
        </div>
    </div>
</template>

<script setup>
defineProps({
    title: String,
    img: String,
    steps: {
        type: Array,
        required: true
    }
})
</script>

<style lang="scss" scoped>
.container {
    display: flex;
    align-items: flex-start;
    overflow: hidden;
    box-shadow: 0px 0px 15px 0px $gray;
    border-radius: 10px;
    @media (max-width: $large-screen) {
        flex-direction: column-reverse;
    }

    .content-wrapper {
        display: flex;
        flex-direction: column;
        gap:3rem;
        padding: 5rem;
        width: 50%;
        height: auto;
        background-color: $gray-lt;
        @media (max-width: $large-screen) {
            width: 100%;
            padding: 2rem 2rem;

        }
        @media (max-width: $small-screen) {
            padding: 2rem 1rem;
        }
        .title {
            display: flex;
            align-items: center;
            justify-content: center;
            font-size: 2.4rem;
            color: $pink-dr;
            font-weight: 600;
            text-transform: uppercase;
        }
        ul {
            display: flex;
            flex-direction: column;
            gap: 2rem;
            li {

                display: flex;
                align-items: start;
                gap: 2rem;
                
                .numbers{
                    font-style: normal;
                    font-size: 2.2rem;
                    font-weight: 100;
                }
                .step-content{
                    font-size: 1.3rem;
                    font-style: italic;
                    width: 100%;
                    border-bottom: 1px dotted $gray;
                    padding-bottom: 2rem;
                    * {
                        font-weight: bold;
                    }
                }
            }
            li:last-child .step-content {
                border-bottom: none;
            }
        }
    }


    .img-wrapper {
        position: relative;
        height: 100%;
        width: 50%;
        @media (max-width: $large-screen) {
            position: static;
            width: 100%;
            max-height: 400px;
        }
        img {
            backdrop-filter: grayscale(100%);     
            position: absolute;
            top: 0;
            left: 0;
            width: 100%;
            height: 100%;
            object-fit: cover;
            @media (max-width: $large-screen) {
            position: static;
        }
        }
    }
}
</style>