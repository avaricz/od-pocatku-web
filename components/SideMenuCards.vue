<template>
    <div class="info-container">
        <div class="info-titles">
            <ul>
                <li v-for="card in content">
                    {{card.title}}
                </li>
                
            </ul>
        </div>
        <div class="info-description">
            <h2>{{content[0].title}}</h2>
            <p>

                {{ content[0].description }}
            </p>
        </div>
    </div>
</template>

<script setup lang="ts">

interface InfoCard {
    title: string
    description: string
}

defineProps<{
    content: InfoCard[]
}>()

</script>

<style lang="scss" scoped>
.info-container {
    display: flex;
    align-items: center;
    justify-content: center;
    .info-titles {
        border: .5px solid lightgray;
        width: 40%;
        background: $gray-lt;
        padding:  1rem 2rem ;
        ul{
            li {
                text-align: center;
                font-size: 1rem;
                font-weight: 700;
                text-wrap:wrap;
                padding:1.6rem 0;
            }
            li:not(:last-child){
                border-bottom: 1px solid lightgray;

            }

        }
    }

    .info-description {
        border: .5px solid lightgray;
        border-radius: 10px;
        padding: 2rem 4rem;
        width: 60%;
        background: white;
        min-height: 140%;

        -webkit-box-shadow: 0px 0px 10px 0px rgba(0,0,0,0.25);
        -moz-box-shadow: 0px 0px 10px 0px rgba(0,0,0,0.25);
        box-shadow: 0px 0px 10px 0px rgba(0, 0, 0, 0.15);
        h2 {
            border-bottom: .5px solid lightgray;
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