<template>
    <div class="info-container">
        <div class="info-titles">
            <ul>
                <li 
                v-for="(card, index) in content"
                :key="index"
                :class="{ active: index === activeIndex }"
                @click="changeActiveIndex(index)"
                >
                    {{card.title}}
                </li>
                
            </ul>
        </div>
        <div class="info-description">
            <div class="flower"></div>
            <ul class="circle">
                <li @click="previousActiveIndex"><i class="pi pi-arrow-circle-left" /></li>
                <li 
                v-for="(card, index) in content"
                :key="index"
                :class="{ active: index === activeIndex }"
                @click="changeActiveIndex(index)"
                >
                </li>
                <li  @click="nextActiveIndex"><i class="pi pi-arrow-circle-right" /></li>
            </ul>
            <h2>{{ content[activeIndex].title }}</h2>
            <div class="description-wrapper">
                <ul>
                    <li v-for="item in content[activeIndex].description">{{ item }}</li>
                </ul>
                <div class="img-wrapper">
                    <img :src="content[activeIndex].thumbnail" alt="">
                </div>
            </div>

        </div>
    </div>
</template>

<script setup >
const props = defineProps({
    content: {
        type: Array,
        required: true,
        default: () => {}
    }
})

const activeIndex = ref(0);

function changeActiveIndex(index) {
    activeIndex.value = index;
}

function nextActiveIndex () {
    activeIndex.value = (activeIndex.value + 1) % props.content.length;
}

function previousActiveIndex () {
    activeIndex.value = (activeIndex.value - 1 + props.content.length) % props.content.length;
}


let interval

/* onMounted(() => {
    interval = setInterval(() => {
        activeIndex.value = (activeIndex.value + 1) % props.content.length;
    }, 5000);
}); */

onUnmounted(() => {
    clearInterval(interval);
});

</script>

<style lang="scss" scoped>
.info-container {
    display: flex;
    align-items: center;
    justify-content: center;
    height: 500px;
    .info-titles {
        border: 0px solid $gray;
        border-top-left-radius: 10px;
        border-bottom-left-radius: 10px;

        width: 40%;
        background: $white;
        ul{
            li {
                text-align: center;
                font-size: 1rem;
                font-weight: 700;
                text-wrap: wrap;
                padding:1.6rem 0;
                cursor: pointer;
                transition: all .3s ease-in-out;
                border-top-left-radius: 10px;
                border-bottom-left-radius: 10px;
                border-bottom: 0.5px solid $gray;
                border-left: 0.5px solid $gray;
                &.active {
                    color: $white;
                    background-color: $pink-dr;
                    border-top-left-radius: 10px;
                    border-bottom-left-radius: 10px;
                }
            }
            li:first-child {
                border-top: 0.5px solid $gray;
            }

        }
    }

    .info-description {
        position: relative;
        border: 1px solid $pink-dr;
        border-radius: 10px;
        padding: 2rem 4rem;
        width: 60%;
        background: $white;
        min-height: 115%;
        display: flex;
        flex-direction: column;
        flex-grow: 1;

        -webkit-box-shadow: 0px 0px 10px 0px $pink-dr;
        -moz-box-shadow: 0px 0px 10px 0px $pink-dr;
        box-shadow: 0px 0px 15px 0px $pink-dr;
        .flower {
            position: absolute;
            top: -30px;
            left: -30px;
            background-image: url(flower.svg);
            background-position: center;
            background-repeat: no-repeat;
            background-size: contain;
            width: 100px;
            height: 100px;
        }
        .circle {
            display: none;
        }
        h2 {
            padding: 1rem 0 2rem;
            text-align: center;
            font-size: 2rem;
            font-weight: 300;
        }
        .description-wrapper {
            display: flex;
            gap: 2rem;
            flex-direction: column;
            align-items: center;
            border-radius: 10px;
            border-top: 3px solid $black;
            border-bottom: 3px solid $black;
            border-color: $pink-dr;
            height: 100%;
            padding: 2rem 1rem  ;
            font-size: 1.1rem; 
            ul {
                z-index: 1;
                display: flex;
                flex-wrap: wrap;
                list-style: disc;
                li {
                    margin-left: 1.5rem;
                    padding-left: 0rem;
                    font-weight: bold;
                    text-wrap: wrap;
                }
            }
            .img-wrapper {
                display: flex;
                justify-content: center;
                align-items: center;
                width: 100%;
                height: 100%;
                max-height: 320px;
                border-radius: 10px;
                overflow: hidden;
                img {
                    width: 100%;
                    height: 100%;
                    object-fit: cover;
                    object-position: center;
                }
            }
        }
    }
}

@media screen and (max-width: $small-screen) {
    .info-container {
        .info-titles {
            display: none;
        }
        .info-description {
            width: 100%;
            min-height: 100%;
            padding:  2rem;
            .flower {
                position: absolute;
                top: -20px;
                left: -20px;
                background-image: url(flower.svg);
                background-position: center;
                background-repeat: no-repeat;
                background-size: contain;

                width: 60px;
                height: 60px;
            }
            .circle {
            align-items: center;
            justify-content: center;
            display: flex;
            gap:.5rem;
            padding: 1rem 0;
            li {
                display: flex;
                align-items: center;
                &:hover {
                    cursor: pointer;
                }
            }
            li:first-child,
            li:last-child {
                font-size: 1.6rem;
                .pi {
                    color: $gray-dr;
                }

            }
            li:not(:first-child):not(:last-child){
                background-color: $gray-lt;
                border-radius: 100%;
                width: 1rem;
                height: 1rem;
                &.active {
                    background-color: $pink-dr;
                }
            }
        }
        .description-wrapper {
            .img-wrapper {
                max-height: 260px;
            }
        }
        }

    }
}

</style>