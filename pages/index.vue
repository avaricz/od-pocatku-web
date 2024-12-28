<template>
    <HeaderContainer>
        <div class="welcome">
            <div class="welcome-title-area">
                <h2>Protože na počátku záleží...</h2>
                <p>Hledáš průvodkyni pro své těhotenství – porod – šestinedělí – kojení – rané mateřství – ženství? Veškerá péče a informace na jednom místě. </p>
                <p class="pink">Buď v tom už od počátku s dulou Lucií.</p>
                <TheButton label="O mně"/>
            </div>
            <div class="welcome-flower-area">
                <img src="/header_lucie.png" alt="">
            </div>
        </div>
    </HeaderContainer>

    <SectionsContainer :justify="'start'" >
        <template #header>
                <div class="section-title">
                    <h2>Nech o sebe pečovat</h2>
                    <p>„Pokud budeš spokojená ty, budou spokojeni i tví nejbližší.“</p>
                </div>
            </template>
            <template #content>
                <SideMenuCards 
                :content="infoCards"
                />
            </template>
    </SectionsContainer>

    <SectionsContainer >
        <template #header>
                <div class="section-title">
                    <h2>Nová kniha - Od počátku</h2>
                     <p>„Pokud budeš spokojená ty, budou spokojeni i tví nejbližší.“</p>
                </div>
            </template>
            <template #content>
                
            </template>
    </SectionsContainer>

    <SectionsContainer :justify="'center'" >
        <template #header>
                <div class="section-title">
                    <h2>Události </h2>
                     <p>„..., kterých se můžeš zůčastnit i ty“</p>
                </div>
            </template>
            <template #content>
                
            </template>
    </SectionsContainer>

</template>

<script setup lang="ts">
import TheButton from '~/components/TheButton.vue';
import SectionsContainer from '@/components/SectionsContainer.vue';
import HeaderContainer from '~/components/HeaderContainer.vue';

const infoCards = [
    {
        title: "Předporodní kurzy a péče o těhotné",
        description: "Kromě individuální a párové přípravy k porodu pořádám i zážitkové předporodní kurzy, které Vás kompletně připraví na porod i to, co přijde po něm. Propojuji přípravu těla i mysli a učím ženy, jak z porodu vytěžit veškerý potenciál. Poskytuji masáže, individuální konzultace a lekce na přípravu pánevního dna k porod."
    },
    {
        title: "Laktační poradenství a péče v šestinedělí",
        description: "Navštěvuji vás v pohodlí Vašeho domova hned po návratu z porodnice. Kontroluji poporodní hojení, krvácení, zavinování dělohy, poskytuji laktační poradenství a pomoc s péčí o miminko. Dopřávám masáže břicha bylinnými koulemi a rituál zavírání kostí."
    },
    {
        title: "Zpracování placenty",
        description: "Placenta - strom života a poporodní životabudič. Může se zpracovat do formy kapslí nebo tinktury. Navrací do těla spoustu důležitých látek, které byly porodem ztraceny. Placenta obsahuje např. obrovské množství železa, kmenových buněk a vitamínů."
    },
    {
        title: "Kurzy zaměřené na zdravý pohyb",
        description: "Nabízím pravidelné navazující kurzy, workshopy i individuální lekce. Jako lektorka Školy pánevního dna se zaměřuji na pánevní dno a hluboký stabilizační systém nás žen a to v kterémkoliv věku. Chodit ke mně můžete také na hodiny břišního tance."
    }
]

</script>

<style lang="scss" scoped>
@import '@/assets/scss/base.scss';
// WELCOME AREA
.welcome {
    position: relative;
    display: flex;
    align-items: center;
    min-height: 30vh;
    .welcome-title-area{
        display: flex;
        flex-direction: column;
        gap: 4rem;
        max-width: 60%;
        color: $pink-dr;
        padding-left: 60px;
        h2 {
            font-size: 5.4rem;
            font-weight: 100;
            font-family: Italianno;
            line-height: 4.5rem;
        }
        p {
            color: $pink;
            font-size: 1.3rem;
            font-weight: 500;
            font-style: italic;
        }
        .pink {
            font-size: 1.4rem;
            color: $pink-dr;
            font-weight: 700;
        }
    }
    .welcome-flower-area {
        position: absolute;
        right: 0;
        bottom: -100px;
        img {
            width: 780px;
            height: auto;
            z-index: -1; 
            pointer-events: none;
        }
    }
}
.section-title {
    display: flex;
    flex-direction: column;
    gap: 1rem;
    h2 {
        font-size: 3rem;
    }
    p {
        color: $gray-dr;
        font-weight: 500;
    }
}

@media screen and (max-width: 1020px) {
    .welcome {
        .welcome-title-area {
            max-width: 70%;
            padding-left: 0;
        }
        .welcome-flower-area {
            img {
            width: 560px;
            height: auto;
        }
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



 


</style>