<template>
    <div class="flex w-full transition-all duration-1000 cursor-pointer">
        <EventDetail v-if="isDetailOpen " :event="event"/>
        <EventThin v-else :event="event"/>
    </div>
</template>

<script setup lang="ts">
import { EventModel } from '~/models/EventModel';
defineProps({
    event: {
        type: Object as PropType<EventModel>,
        required: true
    },
    isDetailOpen: Boolean
})
</script>
