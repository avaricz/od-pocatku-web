<template>
    <SectionsContainer :title="'Nejbližší událost'" background-color="gray-lt">
        <template #content>
            <EventDetail v-if="events.length" :event="events[0]"/>

        </template>
    </SectionsContainer>
    <SectionsContainer v-if="events.length" background-color="white">
        <template #content>
            <div class="next-events">
                <EventViewSwitcher 
                    v-for="(event, index) in events"
                    :key="event.id"
                    :event
                    :is-detail-open="eventsViewType[index]"
                    @click="toggleEventDetail(index)"
                />
            </div>
        </template>
    </SectionsContainer>
</template>

<script setup lang="ts">
import type { Event } from '~/types/types';
import { EventModel } from '~/models/EventModel';

const data = ref<Event[]>([]);
const events = computed(() => (data || []).value.map(event => new EventModel(event)) || [])
const eventsViewType = ref<boolean[]>([])
const toggleEventDetail = (index: number) => {
    eventsViewType.value[index] = !eventsViewType.value[index];
};

const fetchEvents = async () => {
    try {
        const response = await $fetch<Event[]>('/api/futureEvents');
        data.value = response || [];
        eventsViewType.value = new Array(data.value.length).fill(false);
    } catch (error) {
        console.error("Chyba při načítání událostí:", error);
    }
};

onMounted(async()=>{
    await fetchEvents()
})
</script>

<style lang="scss" scoped>
.next-events {
    display: flex;
    flex: 1;
    flex-direction: column;
    gap: 2rem;
}
</style>