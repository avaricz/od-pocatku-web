
<template>
    <section :class="['background-' + backgroundColor]">
        <div 
        class="container"
        
         >
            <div class="section-header" :class="headerAlignment">
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
        validator: (value: string) => ["gray", "white", "black", "gray-lt", "gray-dr"].includes(value),
    },
    justify: {
        type: String,
        required: false,
        default: "left",
        validator: (value: string) => ["start", "center", "end"].includes(value)
    }
 })

 const headerAlignment = computed(() => {
    return {
        "justify-start": props.justify === "start",
        "justify-center": props.justify === "center",
        "justify-end": props.justify === "end",
    }
})
    
</script>

<style lang="scss" scoped>
section {
    //border-bottom: .5px solid $gray;
    background-repeat: no-repeat;
    background-size: cover;
    background-position: 50%;
    padding-bottom: 3rem;
    &.background-gray {
        background-color: $gray;
    }
    &.background-white{
        background-color: $white;
    }
    &.background-black {
        background-color: $black;
    }
    &.background-gray-lt {
        background-color: $gray-lt;
    }
    &.background-gray-dr {
        background-color: $gray-dr;
    }
}
.container {
    margin: 0 auto;
    padding: 6rem 2rem ;
    max-width: $large-screen;

    display: flex;
    flex-direction: column;
    gap: 5rem
}
.section-header {
    display:flex;
}
.justify-start{
    justify-content: start;
}
.justify-center{
    justify-content: center;
}
.justify-end{
    justify-content: end;
}

@media screen and (max-width: $small-screen) {    
    .container {
        padding: 6rem .5rem;
    }
}

</style>