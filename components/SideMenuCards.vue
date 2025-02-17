<template>
    <div class="info-container" >
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
        <div class="info-description-wrapper">
            <div class="info-description">
                <div class="flower"><NuxtImg src="/flower.svg"/></div>

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


                <div class="description-wrapper">
                    <div class="content-description">
                        <div class="title-wrapper">

                            <h2>{{ content[activeIndex].title }}</h2>
                        </div>
                        <ul>
                            <li v-for="item in content[activeIndex].description">{{ item }}</li>
                        </ul>
                        
                    </div>
                    <div class="content-image">
                        <GallerySinglePhoto :photo="content[activeIndex].thumbnail" rotate="left"/>
                        
                    </div>
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
        border: 0px solid $gray;
        border-top-left-radius: 10px;
        border-bottom-left-radius: 10px;

        width: 40%;
        background: transparent;
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
    .info-description-wrapper {
        position: relative;
        width: 900px;

        .flower {
            position: absolute;
            top: -30px;
            left: -30px;
            width: 100px;
            height: 100px;
            img {
                width: 100%;
                height: auto;
                filter: drop-shadow(2px 4px 6px $pink-dr);
            }
        }
        .info-description {
            display: flex;
            flex-direction: column;
            
            background-color: $white;
            
            height: 600px;
            max-height: 600px;
            min-height: 600px;
            
            padding:  0  0 0 2rem;
            border-radius: 10px;
            overflow: hidden;

            -webkit-box-shadow: 0 4px 10px rgba(0, 0, 0, 0.5);
            -moz-box-shadow: 0 4px 10px rgba(0, 0, 0, 0.5);
            box-shadow: 0 4px 10px rgba(0, 0, 0, 0.5);
        
            .circle {
                display: none;
            }

            .description-wrapper {
                display: flex;
                align-items: center;
                gap: 1rem;
                height: 90%;
                padding: 2rem 1rem;
                .content-image {
                    height: 90%;
                    width: 100%;
                }
                .content-description {
                    width: 100%;
                    height: 90%;
                    display: flex;
                    flex-direction: column;
                    gap: 3rem;
                    .title-wrapper {
                        height: 100px;
                        min-height: 100px;
                        max-height: 100px;
                        h2 {
                            text-align: center;
                            font-size: 2rem;
                            font-weight: 600;
                        }
                    }
                    ul {
                        list-style: disc;
                        padding-left: 1.5rem;
                        line-height: 2rem;
                        li {
                            font-style: italic;
                            font-size: 1.4rem; 
                            font-weight: 200;
                            text-wrap: wrap;
                        }
                    }
                }
                
            }
        }
    }
}

@media screen and (max-width: $medium-screen) {
    .info-container {
        .info-titles {
            display: none;
        }
        .info-description-wrapper {
            width: 100%;
            padding: 0 2rem;
            .info-description {
                .flower {
                    top: -35px;
                    left: -5px;
                    
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
            }
        }
    }
}

@media screen and (max-width: $small-screen) {
    .info-container {
        width: 100%;
        padding: 0;
        .info-description-wrapper {
            width: 100%;
            padding: 0;
            .info-description {
                padding: 0 ;
                flex-grow: 1;
                width: 100%;
                .flower {
                    top: -20px;
                    left: 10px;
                    width: 60px;
                }
                .description-wrapper{
                    .content-image {
                        display: none;
                    }
                }
               
            }
        }
    }
}

</style>