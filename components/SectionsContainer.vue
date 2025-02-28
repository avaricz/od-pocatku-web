
<template>
    <section 
        :class="[
            { 'shadow': shadow },
            'background-' + backgroundColor,
        ]"
    >
        <div 
        class="container"
        :class="fullWidth ? 'full-width' : 'large-screen'"
         >
            <div v-if="title || subtitle" class="section-header">
                <h2 v-if="title"> {{ title }}</h2>
                <p v-if="subtitle">{{ subtitle }}</p>
                <slot name="header" />
            </div>
            <div class="section-content">
                <slot name="content" />
            </div>
        </div>

    </section>
</template>

<script setup lang="ts">
 const props = defineProps ({
    backgroundColor: {
        type: String,
        required: false,
        default: "white",
        validator: (value: string) => ["gray", "white", "black", "gray-lt", "gray-dr", "black-dr"].includes(value),
    },
    justifyHeader: {
        type: String,
        required: false,
        default: "center",
        validator: (value: string) => ["start", "center", "end"].includes(value)
    },
    justifyContent: {
        type: String,
        required: false,
        default: "center",
        validator: (value: string) => ["start", "center", "end"].includes(value)
    },
    title: {
        type: String,
        required: false,
        default: null
    },
    subtitle: {
        type: String,
        required: false,
        default: null
    },
    shadow: {
        type: Boolean
    },
    fullWidth: Boolean
 })

 
    
</script>

<style lang="scss" scoped>
section {
    background-repeat: no-repeat;
    background-size: cover;
    background-position: 50%;
    padding-bottom: 3rem;
    overflow: hidden;
    &.background-gray {
        background-color: $gray;
    }
    &.background-white{
        background-color: $white;
    }
    &.background-black {
        background-color: $black;
    }
    &.background-black-dr {
        background-color: $black-dr;
        color: $white;
    }
    &.background-gray-lt {
        background-color: $gray-lt;
    }
    &.background-gray-dr {
        background-color: $gray-dr;
    }
    

}
.container {
    display: flex;
    flex-direction: column;
    gap: 5rem;
    margin: 0 auto;
    padding: 6rem 2rem ;
}
.section-header {
    display: flex;
    flex-direction: column;
    gap: 1rem;
    margin-bottom: 1rem;
    align-items: v-bind(justifyHeader);
    h2 {
        text-transform: uppercase;
        font-size: 3rem;
        color: $pink-dr;
        font-weight: 400;
        letter-spacing: 1px;
    }
    p {
        color: $gray-dr;
        font-size: 1.2rem;
        font-weight: 500;
        font-style: italic;
        font-weight: 200;
    }
}
.section-content {
    display: flex;
    justify-content: v-bind(justifyContent);
}
.shadow {
    margin: 3rem 0;
    box-shadow: 0 0px 20px 0px rgba(0, 0, 0, 0.5);
}

.large-screen {
    max-width: $large-screen;
    padding: 6rem .5rem;
}

.full-width {
    max-width: none;
    padding: 6rem 0;
}

@media screen and (max-width: $small-screen) {    
    .large-screen {
    
    padding: 6rem .5rem;
}

.full-width {
    padding: 6rem 0;
}
    
}



</style>