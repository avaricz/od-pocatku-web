<template>
    <div>
        <HeaderContainer bg-image="/img/img_9400-edit.jpg">
            <div class="header">
                <h2>
                    Kompletní příprava na porod a péče v těhotenství
                </h2>
            </div>
        </HeaderContainer>
        
        <SectionsContainer :justify="'start'">
            <template #header >
                <h2>
                    Náplní setkávání je:
                </h2>
            </template>
            <template #content>
                <div class="cards-container">
                    <InfoCard
                        v-for="card in cardsContent"
                        :key="card.title"
                        :content="card"
                    />
                </div>
            </template>
        </SectionsContainer>
        <SplitedSection>
            <template #left >
                <SectionGallery :media="images" />
            </template>
            <template #right>
                <div class="info-wrapper">
                    <p>"Během <span>individuálních setkávání</span> Ti pomůžu připravit se na porod po všech stránkách tak, abys k němu šla <span>klidná a sebevědomá</span>. Díky kombinaci <span>praktických cvičení</span>, <span>dechových technik</span> a <span>mentální přípravy</span> budeš připravena na každou fázi porodu s <span>důvěrou ve své tělo i sebe samu</span>."</p>
                </div>
            </template>

        </SplitedSection>
           

        <SectionsContainer background-color="white" :justify="'center'">
            <template #header>
                <div>
                    <h2>DÁLE TI V TĚHOTENSTVÍ NABÍZÍM:</h2>
                </div>
            </template>
            <template #content>
                <div class="next-info">
                    <ul>
                        <li>
                            rozvolňující masáže před porodem
                        </li>
                        <li>
                            práci s rebozem, spinning babies
                        </li>
                        <li>
                            celotělovou práci na protažení svalů a kompletní přípravu těla pro porod
                        </li>
                        <li>
                            rituál s bylinnou vaginální napářkou
                        </li>
                    </ul>
                </div>
            </template>
        </SectionsContainer>



**CENA:**

600,- / 60min
    </div>
</template>

<script setup>
import HeaderContainer from '~/components/HeaderContainer.vue';
import SectionGallery from '~/components/SectionGallery.vue';
import SectionsContainer from '~/components/SectionsContainer.vue';
import SplitedSection from '~/components/SplitedSection.vue';

const cardsContent = ref([
    {title: "FYZICKÁ PŘÍPRAVA NA POROD",
     description: [
        "práce s pánevním dnem",
        "dechové techniky pro všechny porodní fáze",
        "cviky pro zdravé fit těhotenství a bezproblémový porod",
        "relaxační i rebozo masáže"
    ]},
    {title: "PRÁCE S MYSLÍ",
     description: [
        "uvědomění si vnitřní síly",
        "návod na zvládání bolesti",
        "vnímání porodu jako zážitku",
        "vizualizace, afirmace, vedené meditace"
    ]},
    {title: "INFORMACE",
     description: [
        "vše, co potřebuješ vědět k porodu",
        "příprava na šestinedělí a kojení",
        "zapojení partnera",
        "prevence a řešení potíží"
    ]}
])

const images = ref([
    {src: '/img/img_9357.jpg'},
    {src: '/img/img_9364.jpg'},
    {src: '/img/img_9175-edit.jpg'},
    {src: '/img/img_9391-edit.jpg'},
    {src: '/img/img_9400-edit.jpg'},
    {src: '/img/img_9412-edit.jpg'},
])

</script>

<style lang="scss" scoped>
.header {
    display: flex;
    flex-direction: column;
    gap: 5rem;
    h2 {
        text-align: center;
        font-size: 3.8rem;
        font-weight: 400;
        line-height: 4.5rem;
        color: $pink-dr;
    }
       
}

// SECTIONS
h2 {
    font-size: 3rem;
}
.cards-container {
    display: flex ;
    gap: 4rem;
    justify-content: space-between;
}
.info-wrapper {
    display: flex;
    height: 100%;
    background-color: transparent;
    max-width: 800px;
    align-items: center;
    justify-content: start;
    font-size: 1.8rem;
    font-weight: 200;
    padding: 4rem;
    p {
        padding: 1rem;
        border-radius: 10px;
        line-height: 2.2rem;
        font-style: italic;
        span {
                font-weight: bold;
        }
    }       
}
.next-info {
    position: relative;
    display: flex;
    flex-direction: column;
    align-items: center;
    ul {
        display: flex;
        flex-direction: column;
        gap: 1.5rem;
        align-items: center;
        li {
            font-size: 1.8rem;
            font-weight: 200;
            font-style: italic;
        }
    }
}
.next-info::before {
    content: '';
    position: absolute;
    bottom: 0;
    right: 0;
    width: 200%;
    height: 200%;
    background-image: url('../flower.svg');
    background-position: center;
    background-repeat: no-repeat;
    background-size: contain;
    opacity: 0.15; 
    z-index: 0; 
    pointer-events: none; 
}

@media screen and (max-width: $small-screen) {
    .cards-container {
        flex-direction: column;
        align-items: center;
    }
}
</style>