<template>
    <SectionsContainer 
    :backgroundUrl="'bg.png'">

        <div class="welcome">
    
            <h2>Protože na počátku záleží...</h2>
            <p>Hledáš průvodkyni pro své těhotenství – porod – šestinedělí – kojení – rané mateřství – ženství? Veškerá péče a informace na jednom místě. Buď v tom už od počátku s dulou Lucií.</p>
            <button>Kdo jsem</button>
        </div>
    
    
        <div class="info">
            <h3>nevim</h3>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Alias, labore? Quo, id porro voluptatum eveniet iure inventore consequuntur ratione sequi, eius aliquam deserunt odit officiis autem, laudantium ducimus maiores molestiae!</p>
        </div>

    </SectionsContainer>

</template>

<script setup lang="ts">
import SectionsContainer from '@/components/SectionsContainer.vue';


</script>

<style lang="scss" scoped>

    .welcome{
        border: .5px solid lightgray;
        max-width: 400px;
        h2 {
            font-size: 3.4rem;
            font-weight: 100;
            font-family: $logo-font;
        }
    }
    .info {
        border: $section-border;
        border-radius: 10px;
        max-width: 400px;

        background: rgba(255, 255, 255, 0.4);
        padding: 2rem;
    }


</style>