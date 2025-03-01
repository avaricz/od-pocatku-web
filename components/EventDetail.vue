<template>
    <div class="event-container">
        <div class="header">
            <div class="date">
                <span>{{ event?.date_start_day}}</span>
                <span>. {{event?.date_start_month}}</span>
            </div>
            <h3 class="title">{{ event?.title}} </h3>
        </div>
        <div class="content">
            <div class="wrapper">
                <div class="inner-wrapper">
                    <div class="info">
                        <span>Čas</span><span>{{ event?.time_start}} - {{ event?.time_end}}</span>
                    </div>
                    <div class="info">
                        <span>Místo</span><span>{{ event?.adress}}</span>
                    </div>
                    <div class="info">
                        <span>Cena</span><span>{{ event?.price}}</span>
                    </div>
                </div>
                <div class="buttons-container-largescreen">
                    <NuxtLink :to="event?.reservation_link" target="_blank">
                        <TheButton label="Rezervovat" filled />
                    </NuxtLink>
                </div>
            </div>
            <div class="description">

                <span>Popis</span>
                <div v-html="event?.description" />
                
                </div>
            <div class="buttons-container-smallscreen">
                <NuxtLink :to="event?.reservation_link" target="_blank">

                    <TheButton label="Rezervovat" filled />
                </NuxtLink>
            </div>

            <div class="map-wrapper">
                <NuxtLink :to="event.map_url" target="_blank">
                    <NuxtImg 
                        :src="'/maps/map_klubicko.png'" 
                        densities="1x"
                        sizes="sm:100vw md:100vw lg:100vw xl:100vw"
                        format="webp"
                        quality="100"
                    />
                </NuxtLink>
            </div>
        </div>
    </div>
</template>

<script setup lang="ts">
import { EventModel } from '~/models/EventModel';
import type { PropType } from 'vue';

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
    width: 100%;
    border-radius: 10px;
    box-shadow: 0 4px 10px rgba(0, 0, 0, 0.5);
    overflow: hidden;


    @media (min-width: $small-screen) {
        flex-direction: row;
    }

    .header {
        display: flex;
        flex-direction: column;
        background: $pink-dr;
        padding: 1rem;
        @media (min-width: $small-screen) {
            align-items: start;
            min-width: 260px;
            width: 260px;
            max-width: 260px;
        }

        .date {
            display: flex;
            align-items: end;
            justify-content: start;
            padding-right: 1rem;
            color: $white;
          
            :first-child {
                line-height: 1;
                font-weight:  500;
                font-size: 7rem;
            }
            :last-child {
                white-space: nowrap;
                padding-bottom: 1rem;
                line-height: 1;
                font-weight:  500;
                font-size: 1.6rem;
            }
        }
        .title {
            font-size: 1.4rem;
            font-weight: bold;
            flex:1;    
        }
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
                padding: 1rem 1rem 0 ;
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
                padding: 1rem 1rem 0 ;
                .info {
                    display: flex;
                    flex-wrap: wrap;
                    gap: 1rem;
                    width: 100%;
                    border-bottom: 2px dotted $gray;
                    padding: .7rem 0 ;
                    :first-child {
                        color: $gray;
                        font-weight: bold;
                        flex-basis: 80px;
                    }
                    
                }
            }
        }
        
        .description {
            display: flex;
            gap: .5rem;
            padding: .7rem 1rem;
            span {
                color: $gray;
                font-weight: bold;
                flex-basis: 80px;
                flex-shrink: 0; /* Zabrání zmenšování */
            }
            div {
                padding-left: .3rem;
            }

            
            @media (min-width: $small-screen) {
                padding-left: 2rem;
                padding-right: 2rem;
                padding-bottom: 1.5rem;
            }

        }
        
        .buttons-container-smallscreen {
            display: flex; 

            flex-direction: column;
            padding: 2rem;
            gap: 1rem;
            align-self: center;
            max-width: 400px;
            min-width: 400px;
            width: 400px;
            a, button{
               width: 100%;
            }
            @media (min-width: $small-screen) {
                    display:none;
                }
            }
        

        .map-wrapper {
            display: flex;
            justify-content: center;  /* Vycentrování horizontálně */
            align-items: center;      /* Vycentrování vertikálně */
            width: 100%;              /* Aby zůstala flexibilní šířka */
            height: 180px;            /* Maximální výška */
            overflow: hidden;         
            img {
                width: 100%;          /* Obrázek se roztáhne přes celou šířku */
                height: 100%; 
                object-fit: cover;
                object-position: center;
                transition: all .3s ease;
                &:hover {
                    cursor: pointer;
                    filter: none;
                }  
                @media (min-width: $small-screen) {
                    filter: grayscale(1);
                }
            }
        }
    }

}
</style>