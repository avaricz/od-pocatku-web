<template>
    <SectionsContainer background-color="gray-lt">
        <div class="flex flex-1 gap-8 px-2 w-full">
            <EventDetail v-if="events.length" :event="events[0]"/>
            <NoEvents v-else/>

        </div>
    </SectionsContainer>
    <SectionsContainer 
        v-if="events.length" 
        background-color="white"
    >
        <div class="flex flex-1 flex-col gap-8 px-2 w-full">
            <EventViewSwitcher 
            v-for="(event, index) in events.slice(1)"
            :key="event.id"
            :event
            :is-detail-open="eventsViewType[index+1]"
            @click="toggleEventDetail(index +1)"
            :id="`event-${event.id}`"
            />
        </div>
    </SectionsContainer>
</template>

<script setup lang="ts">
import type { Event } from '~/types/types';
import { EventModel } from '~/models/EventModel';
import { useRoute } from 'vue-router';
import rawEvents from '@/data/events.json'

const route = useRoute();

const events = computed(() => {
    const filteredEvents = rawEvents.filter(event => {
        const now = new Date()
        const eventEnd = new Date(event.date_end )
        return eventEnd > now
        
    }).map(event => new EventModel(event))

    return filteredEvents
})

// const data = ref<Event[]>([]);
// const events = computed(() => (data || []).value.map(event => new EventModel(event)) || [])
const eventsViewType = ref<boolean[]>([])
const toggleEventDetail = (index: number) => {
    eventsViewType.value[index] = !eventsViewType.value[index];
};


const openEventById = (eventId: string | null) => {
    if (!eventId) return;

    const eventIndex = events.value.findIndex(event => event.id === Number(eventId));
    if (eventIndex !== -1) {
        eventsViewType.value[eventIndex] = true;

        nextTick(() => {
            const element = document.getElementById(`event-${eventId}`);
            if (element) {
                element.scrollIntoView({ behavior: "smooth", block: "center" });
            }
        });
    }
};

// const fetchEvents = async () => {
//     try {
//         const response = await $fetch<Event[]>('/api/futureEvents');
//         data.value = response || [];
//         eventsViewType.value = new Array(data.value.length).fill(false);
//         openEventById(route.query.eventId as string);
//     } catch (error) {
//         console.error("Chyba při načítání událostí:", error);
//     }
// };

onMounted(async()=>{
//   await fetchEvents()
    openEventById(route.query.eventId as string);
})
</script>
