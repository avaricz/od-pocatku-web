<template>
    <div class="container" >
        <div class="titles-wrapper">
            <ul>
                <li 
                    v-for="(card, index) in content"
                    :key="index"
                    :class="{ active: index === activeIndex }"
                    @click="changeActiveIndex(index)"
                >
                    <div class="flower-wrapper">
                        <NuxtImg src="/flower.svg" alt="flower" format="webp" sizes="60px" densities="1x" />
                    </div>
                    <div class="title">
                        {{card.title}}
                    </div>
                </li>
            
            </ul>
        </div>

        <Transition :name="'fade'" mode="out-in" >
            <div class="content-wrapper" :key="activeIndex">

                <div class="smallscreen-header" >
                    <ul class="switches">
                        <li @click="previousActiveIndex"><i class="pi pi-arrow-circle-left" /></li>
                        
                        <li 
                            v-for="(card, index) in content"
                            :key="index"
                            :class="{ active: index === activeIndex }"
                            @click="changeActiveIndex(index)"
                        >
                            <span>{{  index + 1 }}</span>
                        </li>
        
                        <li  @click="nextActiveIndex"><i class="pi pi-arrow-circle-right" /></li>
                    </ul>
                </div>

                <div class="descriptions-wrapper" >
                    <div class="image-wrapper" >
                        <NuxtImg 
                            :src="content[activeIndex].img" 
                            alt="" 
                            sizes="sm:100vw md:100vw"
                            format="webp"
                            quality="90"
                            densities="1x"
                        />
                        <div class="overlay"></div>
                    </div>
                    <div class="description-inner-wrapper">

                            <div class="title-header" >
                                <h3>{{ content[activeIndex].title }}</h3>
                            </div>
                            <div class="list-wrapper">

                                <ul >
                                    <li v-for="item in content[activeIndex].description">{{ item }}</li>
                                </ul>
                            </div>
                    </div>
                    </div>   


                <div class="flower">
                    <NuxtImg src="/flower.svg" alt="flower" format="webp" sizes="100px" densities="1x" />
                </div> 
            </div> 
        </Transition>
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

//onMounted(() => {
  //  interval = setInterval(() => {
 //       activeIndex.value = (activeIndex.value + 1) % props.content.length;
 //   }, 7000);
//});

//onUnmounted(() => {
//    clearInterval(interval);
//});

</script>

<style lang="scss" scoped>

.container {
    // position: relative;
    // perspective: 1000px;
    display: flex;
    align-items: center;
    justify-content: center; 
    width: 95%;
    .titles-wrapper {    
        display: none;
        @media screen and (min-width: $medium-screen) {
            display: flex;
            width: 400px;
        }
        ul{
            display: flex;
            flex-direction: column;
            gap: .2rem;
            li {
                display: flex;
                height: 80px;
                font-weight: 700;
                text-wrap: wrap;
                cursor: pointer;
                border-top-left-radius: 10px;
                border-bottom-left-radius: 10px;
                background: $black-dr;
                color: $white;
                
                overflow: hidden;
                transition: all .3s linear;

                .flower-wrapper {
                    display: flex;
                    align-items: center;
                    justify-content: center;
                    height: 100%;
                    width: 100px;
                    img {
                        width: 40px;
                        height: 40px;
                    }
                }

                .title {
                    display: flex;
                    align-items: center;
                    justify-content: center;
                    flex: 1;
                    text-align: center;
                }
                
                &.active {
                    background: linear-gradient(90deg, $black-dr, $pink-dr); 
                    color: $white;
                    border-top-left-radius: 10px;
                    border-bottom-left-radius: 10px;
                }
            }            
        }
    }

    .content-wrapper {
        
        transform-style: preserve-3d;
        
        position: relative;
        display: flex;
        flex-direction: column;
        width: 500px;
        max-width: 500px;
        height: 500px;
        max-height: 500px;
        min-height: 500px;
        border-radius: 10px;
        
        // position: absolute;
        // top: 0;
        // left: 0;
        // width: 100%;
        // height: 100%;

        -webkit-box-shadow: 0 4px 10px rgba(0, 0, 0, 0.5);
        -moz-box-shadow: 0 4px 10px rgba(0, 0, 0, 0.5);
        box-shadow: 0 4px 10px rgba(0, 0, 0, 0.5);
        @media (min-width: $medium-screen) {
                height: 600px;

                max-height: 600px;
                min-height: 600px;
            }
        .flower {
            position: absolute;
            display: none;
            top: -20px;
            left: -20px;
            width: 80px;
            z-index: 1;
            @media screen and (min-width: $small-screen) {
                top: -30px;
                left: -30px;
                width: 100px;
                height: 100px;
            }
            img {
                width: 100%;
                height: auto;
                filter: drop-shadow(2px 4px 6px $pink-dr);
            }
        }

        .smallscreen-header {
            position: absolute;
            top: -2px;
            left: 15px;
            right: 15px;
            z-index: 1;
            @media (min-width: $medium-screen) {
                display: none;
            }
            .switches {
                display: flex;
                justify-content: space-between;
                height: 60px;
                li {
                    display: flex;
                    align-items: center;
                    justify-content: center;

                    width: 50px;

                    border-bottom-right-radius: 10px;
                    border-bottom-left-radius: 10px;

                    background-color: $black-dr;
                    box-shadow: 0 4px 10px rgba(0, 0, 0, 0.5);
                    &:hover {
                        cursor: pointer;
                    }
                }
                li:first-child,
                li:last-child {
                    font-size: 1.6rem;
                    background-color: $gray;
                    .pi {
                        color: $gray-dr;
                    }
                }
                li:not(:first-child):not(:last-child){
                    span {
                        font-weight: bold;
                        color:$white;
                    }
                    &.active {
                    background-color: $pink-dr;
                }
                }
            }
        }

        .descriptions-wrapper {
            display: flex;
            flex-direction: column;
            flex: 1;
            overflow: hidden;
            .image-wrapper{
                position: relative;
                display: flex;
                width: 100%;
                height: 60%;
                border-top-right-radius: 10px;
                border-top-left-radius: 10px;
                overflow: hidden;
                .overlay {
                    position: absolute;
                    top: 0;
                    bottom: 0;
                    left: 0;
                    right: 0;
                    background: #00000050; 
                }
                
                img {
                    width: 100%;
                    height: 100%;
                    object-fit: cover;
                }
            }
            .description-inner-wrapper {
                display: flex;
                flex-direction: column;
                bottom: 0;
                height: 40%;
                width: 100%;
                border-bottom-right-radius: 10px;
                border-bottom-left-radius: 10px;

                background-color: $black-dr;
                color: $white;
                .title-header {
                    display: flex;   
                    align-items: center;
                    justify-content: center;
                    text-align: center;
                    
                    height: 60px;
                    min-height: 60px;
                    max-height: 60px;
                    
                    background: linear-gradient(90deg, $pink-dr, $black-dr); 
                    
                }
                .list-wrapper {
                    display: flex;
                    height: 100%;
                    width: 100%;
                    align-items: center;
                    justify-content: center;
                    ul {
                        display: flex;
                        list-style: disc;
                        flex-wrap: wrap;
                        column-gap: 1.5rem;
                        padding-left: 1.5rem;
                        align-items: center;
                        justify-content: center;
                        
                    }
                }
            }
        }
    }
}








.fade-leave-active{
    transition: all .6s ease-out;
    backface-visibility: hidden;
}

.fade-enter-active{
    transition: all .6s ease-in -.5s;
    backface-visibility: hidden;
}

.fade-enter-from {
    transform: rotateY(180deg);
}
.fade-leave-from {
    transform: rotateY(0deg);
}
.fade-leave-to {
    transform: rotateY(180deg);
}

 .fade-enter-to {
     transform: rotateY(360deg);
}
</style>