<template>
    <div class="relative">
        <component :is="componentType" v-bind="componentAttrs" class="
                flex items-center justify-center 
                px-8 py-2
                gap-2
                rounded-xl
                transition-all duration-300 linear
                cursor-pointer
                border-2 border-pink-700
                bg-pink-700
                text-gray-50 text-md font-semibold
            " :class="{
                'neon-pulse': pulse,
                'bg-transparent text-pink-700': bordered
            }">
            <Icon v-if="icon" :name="icon" size="15px" />
            <span>{{ label }}</span>
        </component>
    </div>
</template>

<script setup lang="ts">
import { Icon, NuxtLink } from '#components';

type BaseProps = {
    label: string
    icon?: string
    pulse?: boolean
    bordered?: boolean
}

type NuxtLinkProps = BaseProps & {
    to: string
    href?: never
}

type AnchorProps = BaseProps & {
    href: string
    subject?: string
    to?: never
}

type ButtonProps = BaseProps & {
    to?: never
    href?: never
}

const props = defineProps<NuxtLinkProps | AnchorProps | ButtonProps>()

const componentType = computed<'a' | 'button' | typeof NuxtLink>(() => {
    if (props.to) return NuxtLink
    if (props.href) return 'a'
    return 'button'
})

const componentAttrs = computed(() => {
    if (props.to) return { to: props.to }
    if (props.href) return { href: props.href, target: '_blank', rel: 'noopener noreferrer' }
    return { type: 'button' }
})

</script>

<style lang="scss" scoped>
.neon-pulse {
    box-shadow: 0 0 5px 5px $pink-dr-30;

    &:hover {
        overflow: visible;

        &::before,
        ::after {
            content: "";
            position: absolute;
            inset: -4px;
            border: 2px solid var(--color-pink-700);
            border-radius: 12px;
            animation: pulse 2s ease-out infinite;
            opacity: 0;
        }

        &,
        ::after {
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