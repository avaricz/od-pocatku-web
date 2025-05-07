<template>
        <TheHeader @on-click-toggle="openMenu"/>
  <Transition name="slide-down">
        <NavMobile
            v-if="isMenuOpen"
            :is-open="isMenuOpen"
            @on-click-link="isMenuOpen = false"
        />
  </Transition>
        <TheMain>
            <slot></slot>
        </TheMain>
        <TheFooter />
</template>

<script setup lang="ts">
import TheHeader from '~/layout_components/TheHeader.vue';
import TheMain from '~/layout_components/TheMain.vue';
import TheFooter from '~/layout_components/TheFooter.vue';
import NavMobile from "~/layout_components/navigation/NavMobile.vue";

const isMenuOpen = ref(false)

function openMenu () {
  isMenuOpen.value = !isMenuOpen.value
}
</script>

<style scoped>
.slide-down-enter-active,
.slide-down-leave-active {
  transition: all 0.3s ease;
}

.slide-down-enter-from {
  opacity: 1;
  transform: translateY(-100%);
}

.slide-down-enter-to {
  opacity: 1;
  transform: translateY(0);
}

.slide-down-leave-from {
  opacity: 1;
  transform: translateY(0);
}

.slide-down-leave-to {
  opacity: 1;
  transform: translateY(-100%);
}
</style>