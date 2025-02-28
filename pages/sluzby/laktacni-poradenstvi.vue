<template>
    <HeaderContainer title="Laktační poradenství" :bg-image="'/img/20_org_transparent.png'"/>
    <SectionsContainer :justify-header="'center'" title="V čem ti poradenství pomůže">
        <template #content>
            <CardsPanel :data="cardsContent" />
        </template>
    </SectionsContainer>
    <SectionsContainer
        :justify-header="'center'" 
        :background-color="'gray-lt'"
    >
        <template #content>
            <div class="section-1">
                <InfoWrapper>
                    <p>I když je kojení <span>přirozený způsob výživy</span>, jeho počátky můžou být náročné. Kromě <span>pečlivé přípravy</span> ještě v těhotenství Ti pomůžu se <span>správnou technikou</span> hned v<span>prvních dnech</span> po porodu, aby pro Tebe bylo kojení příjemné a miminko prospívalo. A samozřejmě Ti pomůžu <span>vyřešit nastalé potíže</span> a to v kterékoli fázi kojení a věku dítěte. </p>
                </InfoWrapper>
                <GalleryTwoPhotos :images="images1" />
                </div>
        </template>
    </SectionsContainer>
    <SectionsContainer  background-color="black-dr">
        <template #content>
            <InfoWrapper :max-width="'680px'" :text-align="'center'" :color="'$pink-dr'">
                <p>
                    Nenechám Tě v tom. Základem je <span>kontinuální podpora</span>, takže se na mě můžeš kdykoliv obrátit!
                </p>
            </InfoWrapper>
        </template>
    </SectionsContainer>
    <SectionsContainer  >
        <template #content>
           <PricePanel :price="'600,- / 1 hodina'" title="CENA" />
        </template>
    </SectionsContainer>


</template>

<script setup>
const cardsContent = ref([
    {title: "SPRÁVNÁ TECHNIKA KOJENÍ",
     description: [
        "přikládání dítěte k prsu",
        "polohování dítěte",
        "tvoje pohodlí",
        "prevence potíží"
    ]},
    {title: "ŘEŠENÍ PROBLÉMŮ",
     description: [
        "bolavé bradavky",
        "dítě se nechce přisát",
        "pocit nedostatečné laktace",
        "dítě je u kojení neklidné"
    ]},
    {title: "CELKOVÁ PODPORA",
     description: [
        "kontinuální péče",
        "poskytnutí veškerých informací",
        "zapůjčení kojících pomůcek",
        "na prvním místě Ty!"
    ]}
])


const images1 = ref([
    { src: '/img/67_org.jpg', position: 'horizontal'},
    { src: '/img/21_org.jpeg', position: 'vertical'},
])

</script>

<style lang="scss" scoped>
.section-1 {
    display: flex;
    align-items: center;
    @media (max-width: $large-screen) {
        flex-direction: column-reverse;
        gap: 5rem;
    }
    :first-child, :last-child {
        flex: 1;
    }
    :first-child {
        align-content: center;
    }
}
</style>