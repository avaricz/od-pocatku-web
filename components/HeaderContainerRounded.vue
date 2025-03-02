<template>
    <section>
        <div class="container">
            <div class="img-wrapper">
                <NuxtImg 
                    :src="bgImage" 
                    alt=""
                    densities="1x"
                    sizes="sm:100vw md:100vw lg:100vw"
                    format="webp"
                    quality="100"
                />
                <div class="overlay"></div>
            </div>

            <div class="header">
                <h1> {{ title }}</h1>
                <p>
                    {{ description }}
                </p>
                <NuxtLink :to="btnLink">

                    <TheButton :label="btnLabel" filled pulse/>

                </NuxtLink :to="btnLink">
            </div>
        </div>
    </section>
</template>

<script setup>
defineProps({
    bgImage: {
        type: String,
        required: false
    },
    title: {
        type: String,
        required: true
    },
    description: {
        type: String,
        required: false,
        default: ""
    },
    btnLabel: {
        type: String,
        required: false,
        default: null
    },
    btnLink: {
        type: String,
        required: false,
        default: null
    },

})

</script>

<style lang="scss" scoped>
section {
    padding: 0 .5rem;
    @media (min-width: $large-screen) {
        padding: 0;
    }
}
.container {
    position: relative;
    background: $black-dr;
    max-width: $large-screen;
    margin: 0 auto;
    border-radius: 0 0 15px 15px;
    height: 400px;
    overflow: hidden;
    padding: 5%;
    
    transition: all .3s linear;

    .img-wrapper {
        position: absolute;
        top: 0;
        left: 30%;
        right: 0;
        bottom: 0;
        display: flex;
        justify-items: end;
        img {
            width: 100%;
            object-fit: cover;
            object-position: center center;
        }
        .overlay {
            position: absolute;
            top: 0;
            left: 0;
            right: 0;
            bottom: 0;
            background: linear-gradient(to left, rgba(0, 0, 0, .1) 0%, $black-dr 90%);
        }
    }
    .header{
        display: flex;
        flex-direction: column;
        align-items: start;
        justify-content: center;
        gap: 1rem;
        position: relative;
        color: $white;
        height: 100%;
        max-width: 400px;
        margin-top: 1rem;
        transition: all .3s linear;
        @media (min-width: $medium-screen) {
            margin-top: 0rem;
        }
        h1 {
            font-size: 2.4rem;
        }
        p {
            font-size: 1.2rem;
        }
        *:last-child {
            margin-top: 1rem;
        }
    }
}

</style>