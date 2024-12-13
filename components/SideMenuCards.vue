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
            <h2>{{ content[activeIndex].title }}</h2>
            <p>

                {{ content[activeIndex].description }}
            </p>
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

let interval

onMounted(() => {
    interval = setInterval(() => {
        activeIndex.value = (activeIndex.value + 1) % props.content.length;
    }, 5000);
});

onUnmounted(() => {
    clearInterval(interval);
});

</script>

<style lang="scss" scoped>
.info-container {
    display: flex;
    align-items: center;
    justify-content: center;
    .info-titles {
        border: .5px solid lightgray;
        width: 40%;
        background: $white;
        padding:  1rem 2rem ;
        ul{
            li {
                text-align: center;
                font-size: 1rem;
                font-weight: 700;
                text-wrap:wrap;
                padding:1.6rem 0;
                cursor: pointer;
                transition: all 0.3 linear;
                &.active {
                    color: $white;
                    background-color: $pink-dr;
                }
            }
            li:not(:last-child){
                border-bottom: 1px solid $black;

            }

        }
    }

    .info-description {
        border: .5px solid $black;
        border-radius: 10px;
        padding: 2rem 4rem;
        width: 60%;
        background: $white;
        min-height: 140%;

        -webkit-box-shadow: 0px 0px 10px 0px rgba(0,0,0,0.25);
        -moz-box-shadow: 0px 0px 10px 0px rgba(0,0,0,0.25);
        box-shadow: 0px 0px 10px 0px rgba(0, 0, 0, 0.15);
        h2 {
            border-bottom: .5px solid $black;
            padding: 1rem 0 2rem;
            text-align: center;
            font-size: 2rem;
            font-weight: 300;

        }
        p {
            padding: 3rem 0 0 ;
            font-size: 1.1rem
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
        }

    }
}

</style>