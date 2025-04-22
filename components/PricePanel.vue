<template>
    <div class="panel-container" :class="{ 'flower-active': showFlower }">
        <div class="header">
            <div class="title">
                <h4>{{ title }} </h4>
                <p class="text-center">{{ subtitle }}</p>
            </div>

            <div class="flex flex-col items-center">
                <span v-if="priceLabel" class="text-[0.8rem] ">{{ priceLabel }}</span>
                <div>
                    <span class="text-[3rem] font-extrabold text-gray-800 leading-none">{{ price }}</span>
                    <span class="text-[0.8rem]">Kč</span>

                </div>
            </div>

            <div v-if="additionalPrice">
                <span v-if="additionalPrice && additionalPriceLabel"
                    class="text-[0.8rem]">{{ additionalPriceLabel }}</span>
                <div>
                    <span class="text-[2.5rem] font-extrabold text-gray-700 leading-none">{{ additionalPrice }}</span>
                    <span class="text-[0.8rem]">Kč</span>

                </div>
            </div>

            <TheButton :label="'Napiš mi'" pulse icon="fa:envelope-o" :link="link" />
        </div>

        <div>{{ listTitle }}</div>
        <ul class="content flex flex-col w-full gap=[.7rem] text-[.9rem] font-[300] p-0">
            <li v-for="(item, index) in content" :key="index" v-html="item">
            </li>
        </ul>
    </div>
</template>

<script setup>
defineProps({
    title: String,
    subtitle: String,
    listTitle: String,
    price: Number,
    additionalPrice: Number,
    priceLabel: String,
    additionalPriceLabel: String,
    content: Array,
    showFlower: Boolean,
    btnFilled: Boolean,
    link: String
})

</script>

<style lang="scss" scoped>
.panel-container {
    position: relative;
    display: flex;
    flex-direction: column;
    align-items: center;
    height: 100%;
    width: 240px;
    border-radius: 10px;
    padding: 2rem 1rem;
    gap: 2rem;

    background: $white;
    box-shadow: 0 4px 10px rgba(0, 0, 0, 0.5);
    overflow: hidden;


    .header {
        display: flex;
        flex-direction: column;
        align-items: center;
        gap: 2rem;
        width: 100%;
        padding: 1rem 0 3rem 0;
        border-bottom: .5px solid $gray;


        .title {
            display: flex;
            flex-direction: column;
            align-items: center;
            gap: .5rem;

            h4 {
                font-size: 1.3rem;
            }

            p {
                font-weight: 200;
            }
        }

    }

    &.flower-active::before {
        content: "";
        position: absolute;
        top: -60px;
        right: -80px;
        width: 220px;
        height: 200px;
        background-image: url('/flower.svg');
        background-repeat: no-repeat;
        background-position: left;
        background-size: cover;
        opacity: 0.3;
        /* Pouze pozadí bude průhledné */
        z-index: 0;
        /* Posune pozadí pod text */
    }

}
</style>