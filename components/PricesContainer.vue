<template>
    <div class="panels-container">
        <div 
            v-for="panel in panels"
            class="panel-wrapper"
            :class="{'highlight': panel.highlight}"
        >
            <span >{{panel.highlight ? "Nejvýhodnější" : ""}}</span>
           

                <PricePanel 
                
                :title="panel.title"
                :subtitle="panel.subtitle" 
                :price="panel.price"
                :slash="panel.slash"
                :content="panel.content"
                :show-flower="panel.showFlower"
                :btn-filled="panel.btnFilled"
                />
        </div>
    </div>
</template>

<script setup>
defineProps({
    panels: Array
})
</script>

<style lang="scss" scoped>
.panels-container {
    display: flex;
    flex-direction: column;
    align-items: stretch;
    gap:1rem;
    @media (min-width: $small-screen) {
        flex-direction: row;
    }

    .panel-wrapper {
        
        display: flex;
        flex-direction: column;
        border-radius: 10px;
        flex: 1;
        span {
            display: flex;
            align-items: center;
            justify-content: center;
            height: 40px;
            text-transform: uppercase;
            font-weight: 600;
            font-size: .9rem;
            color: $white;
        }
    }
}

.highlight {
    box-shadow: 0 4px 10px rgba(0, 0, 0, 0.5);

    background-color: $pink-dr;

}


</style>