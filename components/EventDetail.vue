<template>
    <div class="event-container flex-1">
        <div class="flex flex-col bg-pink-700 p-4 md:items-start md:min-w-[260px] md:w-[260px] md:max-w-[260px]">
            <div class="flex items-end justify-start pr-4 text-white">
                <span class="leading-none font-medium text-[7rem]">{{ event?.date_start_day }}</span>
                <span class="leading-none font-medium text-[1.6rem] pb-4 whitespace-nowrap">.
                    {{ event?.date_start_month }}</span>
            </div>
            <h3 class="text-[1.4rem] font-bold flex-1">{{ event?.title }} </h3>
        </div>
        <div class="content">
            <div class="wrapper">
                <div class="inner-wrapper">
                    <div class="info">
                        <span>Čas</span><span>{{ event?.time_start }} - {{ event?.time_end }}</span>
                    </div>
                    <div class="info">
                        <span>Místo</span><span>{{ event?.adress }}</span>
                    </div>
                    <div class="info">
                        <span>Cena</span><span>{{ event?.price }}</span>
                    </div>
                </div>
                <div class="buttons-container-largescreen">
                    <DefaultButton :href="event?.reservation_link" label="Rezervovat" pulse />
                </div>
            </div>
            <div class="flex flex-col md:flex-row gap-2 py-[.7rem] px-4 md:px-8 md:pb-6">

                <span class="text-gray-400 font-bold md:basis-[80px] shrink-0">Popis</span>
                <div class="pl-[.3rem]" v-html="event?.description" />

            </div>
            <div class="buttons-container-smallscreen">
                <DefaultButton :href="event?.reservation_link" label="Rezervovat" pulse />
            </div>

            <div class="flex justify-center items-center w-full h-[180px] overflow-hidden">
                <NuxtLink :to="event.map_url" target="_blank">
                    <NuxtImg :src="'/maps/map_klubicko.png'" class="w-full h-full object-cover object-center transition-all duration-300 ease-in-out 
                                hover:cursor-pointer md:grayscale hover:grayscale-0" densities="1x"
                        sizes="sm:100vw md:100vw lg:100vw xl:100vw" format="webp" quality="100" />
                </NuxtLink>
            </div>
        </div>
    </div>
</template>

<script setup lang="ts">
import { EventModel } from '~/models/EventModel';
import type { PropType } from 'vue';
import DefaultButton from './buttons/DefaultButton.vue';

defineProps({
    event: {
        type: Object as PropType<EventModel>,
        required: true
    }
})
</script>

<style lang="scss" scoped>
.event-container {
    display: flex;
    flex-direction: column;
    width: 90%;
    border-radius: 10px;
    box-shadow: 0 4px 10px rgba(0, 0, 0, 0.5);
    overflow: hidden;

    @media (min-width: $small-screen) {
        flex-direction: row;
    }

    .content {
        display: flex;
        flex-direction: column;
        height: 100%;
        width: 100%;
        background: $white;

        .wrapper {
            display: flex;
            flex-direction: column;
            align-items: start;

            .buttons-container-largescreen {
                display: none;
            }

            @media (min-width: $small-screen) {
                padding: 1rem 1rem 0;
                flex-direction: row;

                .buttons-container-largescreen {
                    display: flex;
                    padding: 1rem;
                    flex-direction: column;
                    gap: 1rem;
                    height: 100%;
                    justify-content: center;
                }
            }

            .inner-wrapper {
                display: flex;
                flex-direction: column;
                width: 100%;
                padding: 1rem 1rem 0;

                .info {
                    display: flex;
                    flex-wrap: wrap;
                    gap: 1rem;
                    width: 100%;
                    border-bottom: 2px dotted $gray;
                    padding: .7rem 0;

                    :first-child {
                        color: $gray;
                        font-weight: bold;
                        flex-basis: 80px;
                    }

                }
            }
        }



        .buttons-container-smallscreen {
            display: flex;

            flex-direction: column;
            padding: 2rem;
            gap: 1rem;
            align-self: center;
            max-width: 400px;

            a,
            button {
                width: 100%;
            }

            @media (min-width: $small-screen) {
                display: none;
            }
        }



    }

}
</style>