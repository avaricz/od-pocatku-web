<template>
    <HeaderContainer title="Zpracování placenty" bg-image="/img/36_org_transparent.png" />
    <SectionsContainer background-color="gray-lt">
        <template #content>
            <div class="section-1">
                <GallerySinglePhoto photo="/img/38_org.jpeg" position="horizontal" rotate="right" />

                <InfoWrapper text-align="center">
                    <p>
                        Je čím dál běžnější, že si rodiče odnášejí z porodnice domů placentu pro další <span>zpracování</span> či <span>rituální zakopání</span> do země. Placenta pro nás už dávno není pouhý biologický materiál. Nahlížíme na ni s velkým <span>respektem</span>, jelikož je to orgán, který celých 9 měsíců <span>vyživuje</span> dítě v děloze, a který <span>obsahuje spoustu výživných látek pro hojení matky po porodu</span>. 
                    </p>
                </InfoWrapper>
            </div>
            </template>
    </SectionsContainer>
    <SectionsContainer background-color="black-dr">
        <template #content>
            <div class="section-2">
                <InfoWrapper text-align="center">
                    <p>
                        Placenta tak působí jako <span>životabudič</span>, který dodá po porodu do těla ztracenou <span>energii</span>, vyváží <span>hormonální hladiny</span> a pomáhá <span>regeneraci</span>. Zpracovává se a užívá v pohodlné formě <span>kapslí</span> nebo <span>tinktury</span>.
                    </p>
                </InfoWrapper>
                <GallerySinglePhoto photo="/img/37_org.jpeg" position="horizontal" rotate="left" />
            </div>
        </template>
    </SectionsContainer>
    <SectionsContainer :justify-content="'center'">
        <template #content>
            <CardsPanel :data="cardsContent" />
        </template>
    </SectionsContainer>
   
    <SectionsContainer :justify-content="'center'">
        <template #content>
            <RecipeBlock :title="recipe.title" :steps="recipe.steps" :img="'/img/36_org.jpeg'"/>
        </template>
    </SectionsContainer>
    <SectionsContainer >
        <template #content>
            <PricePanel :title="'Kapsle'"  :price="'1800,-'"/>
            <PricePanel :title="'Tinktura'" :price="'1500,-'"/>
        </template>
    </SectionsContainer>
</template>

<script setup>
const cardsContent = ref([
    {title: "Placenta obsahuje",
     description: [
        "železo",
        "ženské hormony",
        "kmenové buňky",
        "minerální látky a vitamíny",
        "další významné látky"
    ]},
    {title: "Můžeš si objednat",
     description: [
        "kapsle - 140 - 180ks dle velikosti placenty",
        "tinkturu - připravovaná v 1l alkoholu"
    ]},
    {title: "S čím placenta pomáhá",
     description: [
        "nástup laktace",
        "návrat energie do těla",
        "srovnání hormonálních hladin",
        "rychlejší hojení a zavinování dělohy",
        "zmírnění krvácení",
        "prevence poporodního blues",
        "bojovat s únavou",
        "celkově se cítit dobře"
    ]}
])

const recipe = ref({
    title:'Jak to probíhá',
    img: '/img/36_org.jpeg',
    steps: [
        "<span>Objednáš</span> si u mě zpracování placenty a domluvíme si podrobnosti.",
        "<span>Při porodu</span> odevzdáš krabičku s víčkem o objemu alespoň 1,5l se svým jménem s <span>žádostí o vydání placenty</span>.",
        "<span>Po porodu mi placentu předáte</span> (většinou se o to stará partner), nebo si ji vezmu přímo z porodnice. ",
        "<span>Kapsle</span> zpracovávám do 3 dnů, <span>tinkturu</span> do 6 týdnů.",
        "Spolu s kapslemi ode mě <span>dostaneš doporučení</span> na užívání a skladování, i jak změnit <span>dávkování</span> při možných potížích. ",
    ]
})

const images = ref([
    {src: '/img/36_org.jpeg'},
    {src: '/img/37_org.jpeg'},
    {src: '/img/38_org.jpeg'},
    {src: '/img/39_org.jpeg'},
    {src: '/img/40_org.jpeg'},
    {src: '/img/41_org.jpeg'},
    {src: '/img/42_org.jpeg'},
])
const images1 = ref([
    {src: '/img/37_org.jpeg'},
    {src: '/img/38_org.jpeg'},
])
</script>

<style lang="scss" scoped>
.section-1, .section-2 {
    display: flex;
    @media (max-width: $large-screen) {
        gap: 5rem;
    }
   
}
@media (max-width: $large-screen) {
    .section-1 {
        flex-direction: column-reverse;
    }
    .section-2 {
        flex-direction: column;
    }
}

</style>