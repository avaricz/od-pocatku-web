<template>
    <header
        class="
          flex z-50 bg-pink-700
          fixed top-0 left-0 right-0
          lg:static
          h-[60px] lg:h-20
          shadow-[0_0_10px_5px_black]
          lg:shadow-none
          overflow-visible
        "
    >
      <div class="relative flex grow items-center justify-between max-w-7xl mx-auto px-6">
        <TheLogo />
        <NavDesktop class="hidden lg:flex"/>
          <NavToggle
             class="lg:hidden"
             @on-click="$emit('onClickToggle')"
          />
      </div>
    </header>
</template>

<script setup lang="ts">
import NavToggle from "~/layout_components/navigation/NavToggle.vue";
import NavDesktop from "~/layout_components/navigation/NavDesktop.vue";
import TheLogo from "~/layout_components/navigation/TheLogo.vue";

defineProps<{
  onClickToggle?: () => void;
}>()
</script>
