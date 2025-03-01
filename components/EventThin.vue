<template>
    <div class="event-container">
        <div class="header">

            <div class="date">
                <span class="month">{{ event?.date_start_month }}</span>
                <span class="day">{{ event?.date_start_day}}</span>
            </div>
            <div class="title">
                <span>{{ event?.title}}</span>
            </div>
            <div class="content-largescreen">
                <div class="time">
                    <span>Čas</span><span>{{ event?.time_start }} - {{ event?.time_end }}</span>
                </div> 
                <div class="place">
                    <span>Místo</span><span>{{ event?.adress }}</span>
                </div>
            </div>
        </div>
        <div class="content-smallscreen">
            <div class="time">
                <span>Čas</span><span>{{event?.time_start }} - {{ event?.time_end }}</span>
            </div> 
            <div class="place">
                <span>Místo</span><span>{{ event?.adress }}</span>
            </div>
                
        </div>
    </div>
</template>

<script setup lang="ts">
import { EventModel } from '~/models/EventModel';
import type { PropType } from 'vue';

defineProps({
    event: {
        type: Object as PropType<EventModel> 
    }
})

</script>

<style lang="scss" scoped>
.event-container {
    display: flex;
    flex-direction: column;
    width: 100%;
    height: 100%;

    border-radius: 10px;
    box-shadow: 0 4px 10px rgba(0, 0, 0, 0.5);


    overflow: hidden;
    .header {
        display: flex;
        .date {
            display: flex;
            flex-direction: column;
        
            background-color: $pink-dr;
            flex-shrink: 0;
            width: 100px;
            color: $white;
            .day {
                display: flex;
                align-items: center;
                justify-content: center;

                flex-grow: 1;
                
                font-size: 3rem;
                font-weight: bold;
                line-height: 1;
            }
            .month {
                display: flex;
                align-items: center;
                justify-content: center;
                background-color: $black-dr;
                font-weight: bold;
                height: 26px;
                min-height: 26px;
                max-height: 26px;


            }
            
        }
        .title {
            padding: 0 1.5rem;
            display: flex;
            align-items: center;
            justify-content: center;
            text-align: center;
           
            font-size: 1.2rem;
            font-weight: 600;
            background: linear-gradient(120deg, $gray, $gray-lt); 
            @media (min-width: $small-screen) {
                width: 40%;
            }
        }
        .content-largescreen {
            display: none;
            @media (min-width: $small-screen) {
                display: flex;
                background-color: $gray-lt;
                width: 60%;
                padding: .3rem 0;
                div:first-of-type {
                    border-right: 1px solid $gray;
                }
                div {
                    display: flex;
                    flex-direction: column;
                    align-items: center;
                    justify-content: start;
                    text-align: center;
                    width: 50%;
                    padding: 0 2rem;
                    font-size: .9rem;
                    :first-child {
                        font-weight: bold;
                        color: $gray;
                        width: 100%;
                        padding: .3rem 0;
                        border-bottom: 2px dotted $gray;
                    }
                    :last-child {
                        padding-top: 0.3rem ;
                    }
                }
            }
        }
    }
    .content-smallscreen {
        display: flex;
        flex-direction: column;
        justify-content: center;
        min-height: 80px;

        background-color: $gray-lt;
        padding: 0 1rem;
        @media (min-width: $small-screen) {
            display: none;
        }
        .time,.place {
            display: flex;
            padding-bottom: .5rem;
            padding-top: .5rem;
            :first-child {
                        color: $gray;
                        font-weight: bold;
                        flex-basis: 60px;
                        flex-shrink: 0;
                    }
            
        }
        .time {
            border-bottom: .5px dotted gray;
        }
    }
}
</style>