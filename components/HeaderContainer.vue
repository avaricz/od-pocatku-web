<template>
    <section>
        <div class="overlay"></div>
        <div class="header-container"
        >
            <NuxtImg 
                :src="bgImage" 
                alt=""
                densities="1x"
                sizes="sm:100vw md:100vw lg:100vw"
                format="webp"
                quality="100"
            />
            <div class="header">
                <h1>{{ title }}</h1>
            </div>
        </div>
    </section>
</template>

<script setup>
defineProps({
    title: String,
    subtitle: String,
    bgImage:String,
})
</script>

<style lang="scss" scoped>
section {
    position: relative;
    background-color: $black-dr;
    height: 400px;
    overflow: hidden;
    .overlay {
        position: absolute;
        top: 0;
        left: 0;
        right: 0;
        bottom: 0;
        background: #00000090;
        z-index: 1;
    }
    .header-container {
        position: relative;

        display: flex;
        align-items: center;
        justify-content: center;

        margin: 0 auto;
        height: 100%;
        max-width: $large-screen;
        
        img {
            position: absolute;
            object-fit: cover;
            max-width: 100%;
            min-height: 100%;
        }
        .header{
            display: flex;
            align-items: center;
            justify-content: center;
            
            z-index: 2;
            h1 {
                font-size: 3.8rem;
                font-weight: 200;
                line-height: 4.5rem;

                text-align: center;
                max-width: 800px;

                color: $white;
            }
        }
        }
    }



</style>
