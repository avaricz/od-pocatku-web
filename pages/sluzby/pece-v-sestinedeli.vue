<template>
    <HeaderContainer title="Péče v šestinedělí" bg-image="/img/7_transparent_darker.png" />

    <SectionsContainer :justify-header="'center'" title="Nabízím">
        <template #content>
            <CardsPanel :data="cardsContent" />
        </template>
    </SectionsContainer>

    <SectionsContainer background-color="gray-lt">
        <template #content>
            <div class="section-1">
                <div class="left">
                    <GalleryTwoPhotos :images="images1" />
                </div>
                <div class="right">
                    <InfoWrapper>
                        <p>
                            Jsem Ti <span>oporou hned po porodu</span>, ať už v porodnici nebo u Tebe doma. Je důležité, abys
                            měla <span>zajištěnou péči</span> nejen o své miminko, ale také <span>o sebe</span>. Postarám se o
                            Tvé <span>pohodlí</span>, společně nastartujeme <span>bezproblémové kojení</span>, ukážu Ti, jak o
                            sebe <span>pečovat</span>.
                        </p>
                    </InfoWrapper>
                </div>
            </div>
        </template>
    </SectionsContainer>
    
    <SectionsContainer background-color="black-dr">
        <template #content>
            
            <InfoWrapper :max-width="'800px'" :text-align="'center'">
                <p>
                    Šestinedělí je <span>posvátná doba</span>, ve které si zasloužíš pozornost, aby začátek Tvého
                    <span>mateřství</span> proběhl co nejlépe!
                </p>
            </InfoWrapper>
        </template>
    </SectionsContainer>

    <SectionsContainer>
        <template #content>
            <div class="section-3">
                <div class="left">
                    <InfoWrapper>
                        <p>
                            <span>Nenechám Tě v tom!</span> Po celou dobu <span>šestinedělí</span> jsem Ti oporou a někým, na koho se můžeš kdykoliv
                            obrátit.
                        </p>
                    </InfoWrapper>
                </div>
                <div class="right">
                    <GalleryTwoPhotos :images="images2" />
                </div>
            </div>
        </template>
    </SectionsContainer>
  <!--   <GalleryGrid :images="images" /> -->
    <SectionsContainer>
        <template #content>
            <PricePanel title="cena"  :price="'CENA: 600,- / 1 hod'"></PricePanel>
        </template>
    </SectionsContainer>
</template>

<script setup>

const cardsContent = ref([
    {
        title: "Péče o tělo",
        description: [
            "péče o porodní poranění - bylinky, hojivé balzámy",
            "péče o jizvu po císařském řezu",
            "masáže a zavinování bříška pro podporu zavinování dělohy",
            "aktivace bránice a pánevního dna pro rychlejší regeneraci"
        ]
    },
    {
        title: "Laktační poradenství",
        description: [
            "pomoc s prvním samopřisátím po porodu",
            "úprava techniky kojení",
            "řešení potíží s kojením",
            "pomoc s péčí o miminko",
        ]
    },
    {
        title: "Na konci šestinedělí",
        description: [
            "masáž bříška bylinnými koulemi",
            "bylinná pročišťující napářka",
            "rebozo rituál zavírání kostí",
            "kontrola diastázy a vytvoření cvičebního plánu pro další měsíce",
        ]
    }
])

const images = ref([
    { src: '/img/9480_org.jpg' },
    { src: '/img/9103_org.jpg' },
    { src: '/img/24_org.jpg' },
    { src: '/img/9134_org.jpg' },
    { src: '/img/25_org.jpeg' },
    { src: '/img/7_org.png' },
    { src: '/img/26_org.jpeg' },
    { src: '/img/32_org.jpeg' },
    { src: '/img/50_org.jpg' },
    { src: '/img/51_org.jpg' },
    { src: '/img/64_org.jpg' },
    { src: '/img/65_org.jpg' },
])

const images1 = ref([
    { src: '/img/9134_org.jpg', position: 'vertical' },
    { src: '/img/24_org.jpg', position: 'horizontal' },
])

const images2 = ref([
    { src: '/img/7_org.png', position: 'horizontal' },
    { src: '/img/51_org.jpg', position: 'vertical' },
])
</script>

<style lang="scss" scoped>
.section-1, .section-3 {
    display: flex;
    align-items: center;
    @media (max-width: $large-screen) {
        flex-direction: column;
        gap: 5rem;
    }
    .left, .right {
        display: flex;
        flex: 1;
    }
}
.section-3 {
    @media (max-width: $large-screen) {
        flex-direction: column-reverse;
        gap: 5rem;
    }
}
</style>