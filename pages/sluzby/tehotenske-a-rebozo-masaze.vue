<template>
    <HeaderContainer title="Těhotenské a rebozo masáže" bg-image="/img/9400_transparent_darker.png" />
    <SectionsContainer :justify-header="'center'" title="Vyber si svou masáž">
        <template #content>
            <CardsPanel :data="cardsContent" />
        </template>
    </SectionsContainer>
    <SectionsContainer background-color="gray-lt">
        <template #content>
            <div class="section-1">
                <InfoWrapper>
                    <p>
                        V <span>příjemné atmosféře</span> Ti dopřeju <span>relax</span> pro Tvé unavené a namáhané tělo a to i v <span>pohodlí Tvého domova</span>. Masáže Ti pomohou se <span>zrelaxovat</span>, na chvíli vypnout hlavu, <span>uvolnit</span> zatuhlé svaly a lépe <span>připravit</span> celé tělo <span>na porod</span>. 
                    </p>
                </InfoWrapper>
                 <GallerySinglePhoto :photo="'/img/9175_org.jpg'" position="horizontal" rotate="left"/>
            </div>
        </template>
    </SectionsContainer>

    <SectionsContainer  background-color="black-dr">
        <template #content>
            <div class="section-2">
                <GalleryTwoPhotos :images="images1" />
                <InfoWrapper text-align="center">
                    <p> <span>Masáž</span> si můžeš dopřát v <span>pohodlí svého domova</span> nebo přijet za mnou do <span>Kroměříže</span>.</p>
                </InfoWrapper>
            </div>
        </template>
    </SectionsContainer>
    <SectionsContainer full-width>
        <template #content>
            <GalleryFullWidth :images="fourImages" />
        </template>
    </SectionsContainer>
    <SectionsContainer >
        <template #content>
            <PricePanel />
        </template>
    </SectionsContainer>
</template>

<script setup>

const cardsContent = ref([
    {
        title: "Relaxační masáž",
        description: [
            "voňavá masáž celého těla",
            "od chodidel až po šíji",
            "uvolnění pánve a beder",
            "kdykoliv během těhotenství"
        ]
    },
    {
        title: "Rebozo masáž",
        description: [
            "za pomoci šátku rebozo",
            "uvolnění svalů a kloubů",
            "příprava pánve na porod",
            "vhodná pří bolestech kyčlí a beder"
        ]
    },
    {
        title: "Celotělová příprava na porod",
        description: [
            "harmonizace svalového řetězení",
            "pasivní protažení těla",
            "baňkování",
            "od 36. tt"
        ]
    }
])
const images1 = ref([
    { src: '/img/29_org.jpeg', position: "horizontal"},
    { src: '/img/28_org.jpeg', position: "horizontal"},

])

const fourImages = ref([
    { src: '/img/9412_org.jpg' },
    { src: '/img/9409_org.jpg' },
    { src: '/img/9400_org.jpg' },
    { src: '/img/9391_org.jpg' },
    { src: '/img/9166_org.jpg' },
    { src: '/img/9175_org.jpg' },
    { src: '/img/9149_org.jpg' },
    { src: '/img/9128_org.jpg' },
    { src: '/img/9134_org.jpg' },


])

</script>

<style lang="scss">
    .section-1,.section-2 {
        display: flex;
        @media (max-width: $large-screen) {
            flex-direction: column;
            gap:5rem
        }
        :last-child {
           max-width: 600px;
        }
    }
    .section-1 {
        display: flex;
        @media (max-width: $large-screen) {
            flex-direction: column-reverse;
            gap:5rem
        }
    }
</style>