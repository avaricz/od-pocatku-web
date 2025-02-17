<template>
    <MainHeaderContainer>
        <div class="header-container">
            <div class="welcome">
                <div class="welcome-title-area">
                    <h1>Dula Lucie...</h1>
                    <p>Laktační poradkyně, lektorka Školy pánevního dna a funkční trenérka.</p>
                    <TheButton label="O mně" @click="$router.push('/about')"/>
                </div>
            </div>
        </div>
    </MainHeaderContainer>
    <SectionsContainer 
        :background-color="'gray-lt'" 
        :justify-header="'start'" 
        title="Jsem v tom s Tebou" 
        subtitle="„Protože na počátku záleží.“" 
    >
        <template #content>
            <SideMenuCards 
            :content="infoCards"
            />
        </template>
    </SectionsContainer>
    <SectionsContainer 
        :justify-header="'center'" 
        title="Události" 
        subtitle="„..., kterých se můžeš zůčastnit i ty“" 
    >
        <template #content>
            udalosti
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
        description: [
            "kompletní příprava na porod",
            "kontinuální podpora a péče",
            "masáže",
            "rebozo",
            "spinning babies",
            "předporodní rituál",
        ],
        thumbnail: "img/img_9071_thumbnail.jpg"
    },
    {
        title: "Laktační poradenství a péče v šestinedělí",
        description: [
            "podpora bezprostředně po porodu",
            "péče o jizvy a porodní poranění",
            "pomoc s kojením",
            "psychická opora",
            "masáž bříška bylinnými koulemi",
            "rituál zavírání kostí",
        ],
        thumbnail: "img/img_lp_thumbnail.jpg"
    },
    {
        title: "Zpracování placenty",
        description: [
            "placenta jako přirozený životabudič",
            "návrat energie a živin do těla",
            "kapsle",
            "tinktura",
        ],
        thumbnail: "img/img_5481_thumbnail.jpeg"
    },
    {
        title: "Kurzy zaměřené na zdravý pohyb",
        description: [
            "posilování pánevního dna",
            "posilování středu těla",
            "pochopení hlubokého stabilizačního systému",
            "individuální cvičební plány",
            "diagnostika",
        ],
        thumbnail: "img/img_9320_thumbnail.jpg"
    },
    {
        title: "Vzdělávání",
        description: [
            "besedy pro dívky o dospívání a začínající ženské cykličnosti",
            "workshopy Tajemství pánevního dna",
            "workshopy o práci s tělem - bioenergetika, dechové techniky",
            "předporodní kurzy",
            "e-booky",
        ],
        thumbnail: "img/img_9249_thumbnail.jpg"
    },
]

</script>

<style lang="scss" scoped>
@import '@/assets/scss/base.scss';
.header-container {
    margin: 0 auto;
    padding: 6rem 2rem;
    max-width: $large-screen;
    height: 100%;
    display: flex;
    color: $pink-dr;

    background-image: url('./img/9454_transparent.png');
    background-repeat: no-repeat;
    background-size: cover;
    background-position: 60% center ;

    @media (min-width: $small-screen) {
        background-size: contain; 
        background-position:  right; 
    }
}

// WELCOME AREA
.welcome {
    position: relative;
    display: flex;
    width: 100%;
    justify-content: start;
    min-height: 30vh;
    .welcome-title-area{
        display: flex;
        flex-direction: column;
        color: $pink-dr;
        padding-left: 60px;
        gap: 2rem;
        h1 {
            font-size: 6.4rem;
            font-weight: 100;
            font-family: Italianno;
            line-height: 4.5rem;
        }
        p {
            color: $white;
            font-size: 1.3rem;
            font-weight: 500;
            font-style: italic;
        }
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
    .section-title {
        margin-bottom: 3rem;
    }
}



 


</style>