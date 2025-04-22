<template>
    <section>
        <div class=" flex flex-col items-center gap-20 mx-auto py-24">
            <slot name="header" />
            <div class="flex max-w-full flex-nowrap gap-8 p-4 overflow-x-auto scroll-snap-x mandatory
">
                <slot name="content" />
            </div>
        </div>
    </section>
</template>

<script setup>
</script>
