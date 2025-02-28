<template>
    <HeaderContainer title="Rituály" bg-image="/img/9483_org_transparent.png" />
    <SectionsContainer :background-color="'gray-lt'">
        <template #content>
            <div class="section-1">
                <GallerySinglePhoto :photo="'/img/9425_org.jpg'" :position="'horizontal'" :rotate="'right'" />
                <InfoWrapper>
                    <p>
                        <span>Přechodové rituály</span> slouží k <span>přijetí</span> a plnému <span>prožití</span> důležitých <span>životních momentů</span> Často jsou spojovány s oslavou, dají se však provádět i zcela o samotě a pomáhají <span>překonat</span> i těžké životní situace. Jsem tu pro ženy <span>ve všech ohledech</span> proto připravuji nejen předporodní rituály, ale i soukromý rituál pro pomoc při ztrátě. 
                    </p>
                </InfoWrapper>
            </div>
            </template>
    </SectionsContainer>
    <SectionsContainer :justify-header="'center'" title="Náplň setkávání" :justify-content="'center'">
        <template #content>
            <CardsPanel :data="cardsContent" />
        </template>
    </SectionsContainer>
    <SectionsContainer background-color="gray-lt">   
        <template #content>
            <div class="section-3">

                <InfoWrapper>
                    <p>S <span>respektem</span> k životu ve všech jeho <span>aspektech</span> a s respektem ke všemu, co nás v něm <span>potkává</span>.</p>
                </InfoWrapper>
                <GalleryTwoPhotos :images="images3" />
            </div>
        </template>
    </SectionsContainer>
    <SectionsContainer :background-color="'black-dr'">
        <template #content>
            <div class="section-4">

                <GallerySinglePhoto :photo="'/img/9070_org.jpg'" :position="'horizontal'" :rotate="'right'" />
                <InfoWrapper>
                    <p>
                        Rituály jsou vytvářeny <span>na míru</span>, po konzultaci, <span>individuálně</span> či pro <span>skupinu</span> lidí, je možno je <span>darovat</span> blízké osobě.
                    </p>
                </InfoWrapper>
            </div>
        </template>
    </SectionsContainer>
    <SectionsContainer>
        <template #content>
            <PricePanel :title="'CENA'" content="Cena rituálu se odvíjí od počtu osob a jeho časové i materiální náročnosti. " :price="'Základ: 2000,-'" />
        </template>
    </SectionsContainer>
</template>

<script setup>
const cardsContent = ref([
    {title: "Předporodní rituál",
     description: [
        "individuální či v kruhu blízkých žen",
        "sdílení pro podporu k porodu a mateřství",
        "péče o těhotnou ženu dle přání",
        "občerstvení, výroba šperku, dárky…"
    ]},
    {title: "Rituál zavírání kostí",
     description: [
        "individuální rituál na konci šestinedělí",
        "k uzavření jedné životní etapy a přechodu do další",
        "rekapitulace prožitých zážitků",
        "probuzení ženy - matky"
    ]},
    {title: "Rituál při ztrátě",
     description: [
        "sdílení a podpora",
        "přijetí a odpuštění",
        "péče o tělo masáží, balinnou napářkou, …",
        "mentální očista"
    ]}
])

const images = ref([
    {src: '/img/9483_org.jpg'},
    {src: '/img/9480_org.jpg'},
    {src: '/img/9473_org.jpg'},
    {src: '/img/9425_org.jpg'},
    {src: '/img/9218_org.jpg'},
    {src: '/img/9128_org.jpg'},
    {src: '/img/9101_org.jpg'},
    {src: '/img/9070_org.jpg'},
    {src: '/img/9134_org.jpg'},
    {src: '/img/26_org.jpeg'},
    {src: '/img/14_org.jpeg'},
])

const images3 = ref([
    {src: '/img/9101_org.jpg', position: "horizontal"},
    {src: '/img/9134_org.jpg', position: "vertical"},
])
</script>
<style lang="scss" scoped>
.section-1, .section-3, .section-4 {
    display: flex;
    @media(max-width:$large-screen){
        flex-direction: column-reverse;
        gap: 5rem
    }
}
.section-3 {
    @media(max-width:$large-screen){
        flex-direction: column;
    }
}
</style>