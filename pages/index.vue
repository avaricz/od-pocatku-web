<template>
    <SectionsContainer :backgroundUrl="'bg.png'">
        <div class="welcome">
            <div class="welcome-title-area">
                <h2>Protože na počátku záleží...</h2>
                <p>Hledáš průvodkyni pro své těhotenství – porod – šestinedělí – kojení – rané mateřství – ženství? Veškerá péče a informace na jednom místě. Buď v tom už od počátku s dulou Lucií.</p>
                <TheButton label="Poznej mě"/>
            </div>
            <div class="welcome-flower-area">
                <img src="/flower.svg" alt="">
            </div>
        </div>
    </SectionsContainer>

    <SectionsContainer  >
        <div class="column">
            <div class="section-title">
                <h2>Nech o sebe pečovat</h2>
                <p>„Pokud budeš spokojená ty, budou spokojeni i tví nejbližší.“</p>
            </div>
            <SideMenuCards 
            :content="cardsContent"
            />
        </div>
    </SectionsContainer>

</template>

<script setup lang="ts">
import TheButton from '~/components/TheButton.vue';
import { infoCards } from '@/content/infoCards';
import SectionsContainer from '@/components/SectionsContainer.vue';

const cardsContent = ref(infoCards)

</script>

<style lang="scss" scoped>
@import '@/assets/scss/base.scss';
// WELCOME AREA
.welcome {
    display: flex;
    align-items: center;
    justify-content: space-evenly;
    min-height: 30vh;
    .welcome-title-area{
        display: flex;
        flex-direction: column;
        gap: 4rem;
        max-width: 50%;
        h2 {
            font-size: 5.4rem;
            font-weight: 100;
            font-family: $logo-font;
            line-height: 4.5rem;
        }
        p {
            font-size: 1.4rem;
            font-weight: 600;
        }
    }
    .welcome-flower-area {
        img {
            margin-bottom: 100px;
            width: 360px;
            height: auto;
        }
    }
}
@media screen and (max-width: $small-screen) {
    .welcome {
        .welcome-title-area {
            max-width: 100%;
        }
        .welcome-flower-area {
            display: none;
        }

    }
}


.column {
    display: flex;
    flex-direction: column;
    gap: 5rem;
    width: 100%;
    .section-title {
        h2 {
            font-size: 3rem;
        }
        p {
            color: $gray-dr;
            font-weight: 500;
        }
    }
}

</style>