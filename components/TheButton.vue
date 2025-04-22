<template>
    <div class="relative">
        <a v-if="link" :href="link"
            class="
                flex items-center justify-center 
                px-8 py-2
                gap-2
                rounded-xl
                transition-all duration-300 linear
                cursor-pointer
                border-2 border-pink-700
                bg-pink-700
                text-gray-50 text-md font-semibold
                "
            :class="{
                'neon-pulse': pulse,
                'bg-transparent text-pink-700': bordered
                }" 
            @click.stop=""
        >
                <Icon v-if="icon" :name="icon" size="15px"/>
                <span >{{ label }}</span>
        </a>
        <button v-else
            class="
                flex items-center justify-center 
                px-8 py-2
                gap-2
                rounded-xl
                transition-all duration-300 linear
                cursor-pointer
                border-2 border-pink-700
                bg-pink-700
                text-gray-50 text-md font-semibold
                "
            :class="{
                'neon-pulse': pulse,
                'bg-transparent text-pink-700': bordered
                }" 
            @click.stop=""
        >
                <Icon v-if="icon" :name="icon" size="15px"/>
                <span >{{ label }}</span>
        </button>
    </div>
</template>

<script setup>
import { Icon } from '#components';

defineProps ({
    icon: {
        type: String,
        required: false,
        default: null
    },
    label: String,
    pulse: Boolean,
    bordered: Boolean,
    link: String,
})
</script>

<style lang="scss" scoped>

.neon-pulse {
    box-shadow: 0 0 5px 5px $pink-dr-30;
    &:hover {
        overflow: visible;
        &::before,::after{
            content: "";
            position: absolute;
            inset: -4px;
            border: 2px solid var(--color-pink-700);
            border-radius: 12px;
            animation: pulse 2s ease-out infinite;
            opacity: 0;
        }
        &,::after{
            animation-delay: 1s;
        }
    }
    &:active {
        box-shadow: none;
    }
}

@keyframes pulse {
  0% {
    transform: scale(1);
    opacity: 1;
  }
  100% {
    transform: scale(1.3);
    opacity: 0;
  }
}
</style>