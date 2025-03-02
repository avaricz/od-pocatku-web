<template>
    <div class="container">
        <h1>{{ title }}</h1>
        <ul class="topics">
            <li v-for="(topic, index) in content">
                <div class="header">
                    <div class="order">{{ index + 1 }}</div> <div class="title">{{ topic.header }}</div>
                </div>
                <p>{{ topic.description }}</p>
                <!-- <ul>
                    <li v-for="item in topic.items"> {{ item }}</li>
                </ul> -->
            </li>
        </ul>
        <div class="buttons-area">
            <slot name="buttons" />
            
        </div>
    </div>
</template>

<script setup>
defineProps({
    title: {
        type: String,
        required: false,
        default: null
    },
    content: {
        type: Array,
        required: true
    }
})

</script>

<style lang="scss" scoped>
.container {
    display: flex;
    flex-direction: column;
    align-items: start;
    gap:  2rem;
    h1 {
        font-size: 2.4rem;
    }
    .topics {
        display: flex;
        flex-direction: column;
        gap: 1rem;
        li {
            .header{
                display: flex;
                align-items: center;
                gap: .5rem;
                .order {
                    display: flex;
                    align-items: center;
                    justify-content: center;
                    width: 32px;
                    height: 32px;
                    background: $pink-dr;
                    border-radius: 50%;
                    color: $white;
                    font-weight: 600;
                }
                .title {
                    font-size: 1.4rem;
                    font-weight: 600;

                }
            }
            p{
                margin-left: 40px;
            }
        }
    }
    .buttons-area {
        display: flex;
    }
}
</style>