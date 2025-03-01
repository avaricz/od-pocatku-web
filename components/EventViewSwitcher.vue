<template>
    <div class="container">
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

<style lang="scss" scoped>
.container {
    display: flex;
    width: 100%;
    transition: all 1s linear;
    cursor: pointer;
}
</style>