<template>
    <div class="button-wrapper">

        <button :class="{'filled': filled, 'neon-pulse': pulse, 'bordered': bordered}" >
            {{ label }}
        </button>
    </div>
</template>

<script setup>
defineProps ({
    label: String,
    fontWeight: {
        type: Number,
        required: false,
        default: 600,
        validator: (v) => v >= 100 || v <= 900
    },
    filled: Boolean,
    pulse: Boolean,
    bordered: Boolean
})
</script>

<style lang="scss" scoped>
.button-wrapper {
    position: relative;
}
button {
    display: flex;
    align-items: center;
    justify-content: center;
    padding: .4rem 3rem;
    border: 0;
    border-radius: 50px;
    font-size: 1.2rem;
    font-weight: v-bind(fontWeight);
    font-family: sans-serif;
    cursor: pointer;
    border: 2px solid $pink-dr;
    
    transition: all .3s linear;
    
}

.bordered {
    background: transparent;
    color: $pink-dr;
    &:hover {
        background-color: $pink-dr;
        color: $white
    }
    &:active {
        background-color:transparent;
        color: $pink-dr
    }
}

.bordered.neon-pulse:hover {
    background-color:transparent;
    color: $pink-dr;
}

.filled {
    background-color: $pink-dr;
    color: $white;
    &:hover {
         background-color: transparent;
         color: $pink-dr
    }
    &:active {
        background-color: $pink-dr;
        box-shadow: none;
        color: $white
    }
}

.filled.neon-pulse:hover {
    background-color: $pink-dr !important;
    color: $white;
}

.neon-pulse {
    box-shadow: 0 0 5px 5px $pink-dr-30;
    &:hover {
        overflow: visible;
        &::before,::after{
            content: "";
            position: absolute;
            inset: -4px;
            border: 1.5px solid $pink-dr;
            border-radius: inherit;
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