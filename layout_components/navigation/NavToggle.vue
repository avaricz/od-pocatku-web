<template>
  <div
      class="flex items-center justify-center p-[.3rem] text-[2rem] cursor-pointer"
      @click="$emit('onClick')"
  >
    <i class="pi pi-bars"></i>
  </div>
</template>

<script setup lang="ts">
defineEmits<{
  onClick: () => void;
}>()
</script>
