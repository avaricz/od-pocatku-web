<template>
    <section>
        <div class="header-container"
            :style="{backgroundImage: `url('${bgImage}')`}"
        >
            <div class="header">
                <h1>{{ title }}</h1>
                <p>{{ subtitle }}</p>
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
    background-color: $black-dr;
    height: 600px;
    //height: 100vh;
    // -webkit-clip-path: polygon(0 0, 100% 0, 100% 92%, 0 100%);
    // clip-path: polygon(0 0, 100% 0, 100% 100%, 0 90%);
    
    .header-container {
        margin: 0 auto;
        padding: 6rem 2rem;
        max-width: $large-screen;
        height: 100%;
        display: flex;
        align-items: center;
        justify-content: center;

        background-repeat: no-repeat;
        background-size: cover;
        background-position: center;
        .header{
            display: flex;
            flex: 1;
            gap: 4rem;
            flex-direction: column;
            align-items: center;
            justify-content: start;
            height: 100%;
            max-width: 800px;
            h1 {
                display: flex;
                text-align: center;
                font-size: 3.8rem;
                font-weight: 500;
                line-height: 4.5rem;
                color: $white;
            }
            p {
                align-self: flex-start;
                color: $white;
                max-width: 500px
            }
        }
        }
    }



</style>
