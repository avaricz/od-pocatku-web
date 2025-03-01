<template>
    <section>
        <div class="container">
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

<script setup>
defineProps({

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
})
</script>

<style lang="scss" scoped>

.container {
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 5rem;
    margin: 0 auto;
    padding: 6rem 0 ;
    .section-header {
        display: flex;
        flex-direction: column;
        gap: 1rem;
        margin-bottom: 1rem;
        h2 {
            text-transform: uppercase;
            font-size: 3rem;
            color: $pink-dr;
            font-weight: 400;
            letter-spacing: 1px;
            text-align: center;
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
        max-width: 100%;
        flex-wrap: nowrap; 
        overflow-x: auto; 
        scroll-snap-type: x mandatory;
        gap: 2rem;
        padding: 1rem;
    }
    .section-content::-webkit-scrollbar {
        height: 8px;
    }
    .section-content::-webkit-scrollbar-thumb {
        background: rgba(0, 0, 0, 0.3);
        border-radius: 4px;
    }
    .section-content::-webkit-scrollbar-track {
        background: rgba(0, 0, 0, 0.1);
        
    }
}


    

    

    

    
</style>