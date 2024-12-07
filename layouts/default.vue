<template>
        <TheHeader />
        <TheMain>
            <slot></slot>
        </TheMain>
        <TheFooter />
</template>

<script setup lang="ts">
import TheHeader from '~/layout_components/TheHeader.vue';
import TheMain from '~/layout_components/TheMain.vue';
import TheFooter from '~/layout_components/TheFooter.vue';
</script>