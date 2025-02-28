<template>
    <SectionsContainer :title="'Nejbližší událost'" :justify-header="'start'" background-color="gray-lt">
        <template #content>
            <EventDetail v-if="events.length" :event="events[0]"/>

        </template>
    </SectionsContainer>
    <SectionsContainer v-if="events.length" background-color="white">
        <template #content>
            <div class="next-events">
                <EventThin 
                    v-for="event in events"
                    :key="event.id"
                    :event="event"
                />
            </div>
        </template>
    </SectionsContainer>
</template>

<script setup lang="ts">
import type { Event } from '~/types/types';
import { EventModel } from '~/models/EventModel';

const data = await $fetch<Event[]>('/api/futureEvents')

const events = computed(() => (data || []).map(event => new EventModel(event)) || [])

</script>

<style lang="scss" scoped>
.next-events {
    display: flex;
    flex-direction: column;
    gap: 2rem;
}
</style>