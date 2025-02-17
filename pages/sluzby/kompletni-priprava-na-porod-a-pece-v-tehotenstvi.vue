<template>
    <HeaderContainer 
        :bg-image="'/img/9400_transparent_darker.png'"
        title=" Kompletní příprava na porod a péče v těhotenství"
    />
    
    <SectionsContainer :justify-header="'center'" title="Náplň setkávání" :justify-content="'center'">
        <template #content>
            <CardsPanel :data="cardsContent" />
        </template>
    </SectionsContainer>
    <SectionsContainer shadow background-color="black-dr">
        <template #content>
            <div class="section-1">
                <div class="left">
                    <InfoWrapper>
                        <p>"Během <span>individuálních setkávání</span> Ti pomůžu připravit se na porod po všech stránkách tak, abys k němu šla <span>klidná a sebevědomá</span>. Díky kombinaci <span>praktických cvičení</span>, <span>dechových technik</span> a <span>mentální přípravy</span> budeš připravena na každou fázi porodu s <span>důvěrou ve své tělo i sebe samu</span>."</p>
                    </InfoWrapper>
                </div>
                <div class="right">
                    <GalleryTwoPhotos :images="images1"/>
                </div>
            </div>
        </template>
    </SectionsContainer>
    <SectionsContainer 
        background-color="white" 
        :justify-header="'center'" 
        
    >
        <template #content>
            <div class="section-2">

                <GallerySinglePhoto :photo="'/img/9175_org.jpg'" :rotate="'right'"/>
                <div class="next-info">
                    <h2>Dále ti nabízím</h2>
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
            </div>
        </template>
    </SectionsContainer>
    <SectionsContainer 
        background-color="white" 
        :justify-header="'center'" 
        
    >
        <template #content>
            <PricePanel :title="'CENA'" :price="'600,- / 60min'"/>
        </template>
    </SectionsContainer>




</template>

<script setup>


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

const images1 = ref([
    {src: '/img/9357_org.jpg', position: 'horizontal'},
    {src: '/img/9364_org.jpg', position: 'vertical'},
])

const images2 = ref([ // TODO: zakomponovat tyto foto?
    {src: '/img/9175_org.jpg'},
    {src: '/img/9391_org.jpg'},
])

const images3 = ref([ // TODO: zakomponovat tyto foto?
    {src: '/img/9400_org.jpg'},
    {src: '/img/9412_org.jpg'},
])

</script>

<style lang="scss" scoped>
// SECTIONS
.section-1 {
    display: flex;
    align-items: center;
    @media (max-width: $large-screen) {
        flex-direction: column-reverse;
        gap: 5rem;
    }
    .left {
        flex: 1;
    }
}
.section-2 {
    display: flex;
    align-items: center;
    @media (max-width: $large-screen) {
        flex-direction: column-reverse;
        gap: 5rem;
    }
    .next-info {
        position: relative;
        padding: 0 1rem;
        display: flex;
        flex-direction: column;
        align-items: center;
        gap: 3rem;
        h2 {
            font-size: 2.2rem;
            color: $pink-dr;
            text-transform: uppercase;
        }
        ul {
            display: flex;
            flex-direction: column;
            gap: 0.5rem;
            align-items: left;
            list-style-type: disc;
            padding-left: 2rem;
            li {
                font-size: 1.8rem;
                font-weight: 200;
                font-style: italic;
            }
        }
    }
}

</style>