<template>
    <DefaultButton :href="makeMailLink()" :label="'Napiš mi'" icon="fa:envelope-o" pulse />
</template>

<script setup lang="ts">
import DefaultButton from './DefaultButton.vue';
const props = defineProps<{
    subject: string
}>();

const makeMailLink = () => {
    if (!props.subject) return socialLinks.mail.link
    return `${socialLinks.mail.link}?subject=${props.subject}`
}

</script>