<template>
    <div class="card-container">
        <div class="wrapper">
            <div class="img-wrapper">
                <NuxtImg 
                    src="/img/9103_org.jpg" 
                    alt="" 
                    densities="1x"
                    sizes="sm:400px"
                    format="webp"
                    quality="100"
                 />
                <div class="date">
                    <span class="day">{{ event?.date_start_day}}</span>
                    <span class="month">{{ event?.date_start_month}}</span>
                </div>
            </div>
            <div class="header">
                <h4>{{ event.title }}</h4>
            </div>
            <div class="content">
                <div class="content-wrapper">

                    <div class="time">
                        <span>Čas</span><span>{{event?.time_start}} - {{ event?.time_end}}</span>
                    </div>
                    <div class="place">
                        <span>Místo</span><span>{{ event.adress }}</span>
                    </div>
                </div>
                    <NuxtLink :to="`/events?eventId=${event.id}`">
                        <TheButton label="Info" filled pulse/>
                    </NuxtLink>
            </div>
        </div>
    </div>
</template>

<script setup lang="ts">
import type { PropType } from 'vue';
import { EventModel } from '~/models/EventModel';

defineProps({
    event: {
        type: Object as PropType<EventModel>,
        required: true
    }
})

</script>

<style lang="scss" scoped>
.card-container {
    position: relative;
    display: flex;
    flex-direction: column;
    height: 400px;
    width: 300px;
    
    border-radius: 10px;
    box-shadow: 0 4px 10px rgba(0, 0, 0, 0.5);

    overflow:hidden;

    .wrapper {
        position: relative;
        display: flex;
        flex-direction: column;
        transition: all 0.5s ease-in-out;
    }

    .img-wrapper {
        background-color: $pink-dr;
        
        height: 300px;
        transition: all .5s ease-in-out;
        img {
            width: 100%;
            height: 100%;
            object-fit: cover;
        }
        .date {
            display: flex;
            flex-direction: column;
            transition: all .5s ease-in-out;
            box-shadow: 0 4px 10px rgba(0, 0, 0, 0.5);
            position: absolute;
            top: 0px;
            right: 20px;
            height: 80px;
            width: 80px;
            background-color: $pink-dr;
            color: $white;
            border-bottom-right-radius: 10px;
            border-bottom-left-radius: 10px;
            overflow: hidden;
            .day {
                text-align: center;
                font-size: 3rem;
                line-height: 1;
            }
            .month {
                text-align: center;
                background-color: $black-dr;
                font-weight: bold;
            }

        }
    }
    
    .header {
        height: 100px;
        background: $black-dr;
        display: flex;
        align-items: center;
        justify-content: center;
        padding: 0 1rem;
        transition: transform 0.5s ease-in-out, opacity 0.3s ease-in-out;
        transform: translateY(0); 

        h4 {
            text-align: center;
            color: $white;
        }
    }

    .content {
        display: flex;
        flex-direction: column;
        align-items: center;
        width: 100%;
        background: $gray-lt;
        transform: translateY(0); 
        padding: 1rem;
        height: 300px;
        transition: transform 0.5s ease-in-out, opacity 0.3s ease-in-out;
        justify-content: space-between;
        .content-wrapper {
            div {
                display: flex;
                flex-direction: column;
                align-items: center;
                text-align: center;
                padding: 1rem;
                gap: .5rem;
                :first-child {
                    font-weight: bold;
                }
            }
            div:first-child {
                border-bottom: 2px dotted $gray;
            }
        }
            .button {
            display: flex;
            align-items: center;
            justify-content: center;
            width: 90%;
            height: 60px;
            background: $pink-dr;
            font-weight: bold;
        }
    }

    &:hover,:active{
        .img-wrapper{
            transform: translateY(-300px);
        }
        .header {
            transform: translateY(-300px);
        }
        .date {
            transform: translateY(-100%);
        }
        .content {
            transform: translateY(-300px);
        }
    }
}
</style>