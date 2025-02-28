<template>
    <HeaderContainer 
        title="Individuální funkční cvičební plán"
        bg-image="/img/9297_org_thin_transparent.png"
    />
    <SectionsContainer   :background-color="'gray-lt'">
        <template #content>
            <div class="section-1">
                <GallerySinglePhoto photo="/img/34_org.png" :position="'horizontal'" rotate="right"/>
                <InfoWrapper>
                    <p>
                        Jako <span>funkční trenérka</span> se zabývám posilováním <span>pánevního dna</span> a <span>středu těla</span> s komplexním zaměřením na celý <span>hluboký stabilizační systém</span>.  
                    </p>
                </InfoWrapper>
            </div>
        </template>
    </SectionsContainer>

    <SectionsContainer   :background-color="'white'">
    <template #content>
        <div class="section-2">
        <InfoWrapper :text-align="'center'">
            <p>
                Kromě pravidelných <span>skupinových kurzů</span> poskytuji i <span>individuální přístup</span> kdy je prostor na konkrétní <span>diagnostiku</span> a <span>zacílení</span> na základě Tvých <span>preferencí a potřeb</span>. Jsi ve II. trimestru <span>těhotenství</span> máš <span>po porodu</span> či už delší dobu víš, že chceš se sebou <span>začít něco dělat</span> - jsi u mě správně!
            </p>
        </InfoWrapper>
        <GalleryTwoPhotos :images="images2"/>
        </div>
    </template>
    </SectionsContainer>

    <SectionsContainer   :background-color="'black-dr'">
    <template #content>
        <InfoWrapper :text-align="'center'">
            <p>
                Pracuji se ženami <span>všech věkových kategorií</span>. Pomáhám <span>poznat</span> a <span>pochopit</span> svoje <span>tělo</span> udělat ho <span>funkční</span> a <span>cítíš se</span> v něm <span>dobře</span>.
            </p>
        </InfoWrapper>
    </template>
    </SectionsContainer>

    <SectionsContainer :justify-header="'center'" title="Získáš" >
        <template #content>
            <CardsPanel :data="cardsContent" />
        </template>
    </SectionsContainer>
    <SectionsContainer>
        <template #content>
            <div class="section-5">
            <GalleryTwoPhotos :images="images5"/>
            <InfoWrapper :text-align="'center'">
                <p>Důležitá je <span>návaznost a kontinuální podpora</span>, proto spolu budeme sledovat <span>výsledky</span> a pozorovat Tvůj <span>progres</span>, na základě kterého budeme postupně upravovat <span>cvičební plán</span> přesně na míru, aby pro Tebe mělo cvičení co nejlepší <span>dlouhodobý efekt</span>.</p>
            </InfoWrapper>
            </div>
        </template>
    </SectionsContainer>
    <SectionsContainer>
        <template #content>
            <PricePanel :title="'CENA'" :price="'600,- / 1 hodina'"/>
        </template>
    </SectionsContainer>

</template>

<script setup>
import SectionsContainer from '~/components/SectionsContainer.vue';

const cardsContent = ref([
    {title: "Znalosti",
     description: [
        "poznáš svaly svého pánevního dna",
        "pochopíš funkci bránice a všechny souvislosti",
        "zjistíš, jak se sebou zacházet při běžných činnostech",
        "vše Ti začne dávat smysl!"
    ]},
    {title: "Cvičební plán na míru",
     description: [
        "vstupní konzultace a diagnostika",
        "stabilizační a dechové techniky",
        "postupné zvyšování úrovně a zátěže",
        "cviky odpovídající Tvým potřebám"
    ]},
    {title: "Výsledky",
     description: [
        "funkční tělo",
        "dobrý pocit ze sebe",
        "radost z pohybu",
        "motivace"
    ]}
])


const images2 = ref([
    {src: '/img/9437_org.jpg', position:'vertical'},
    {src: '/img/33_org.jpeg', position:'horizontal'},
])

const images5 = ref([
    {src: '/img/9309_org.jpg', position: 'horizontal'},
    {src: '/img/9312_org.jpg', position: 'vertical'},
])
</script>

<style lang="scss" scoped>
.section-1 {
    display: flex;
    @media (max-width: $large-screen) {
        flex-direction: column-reverse;
        gap: 5rem;
    }
    :last-child {
        text-align: center;
    }
}
.section-2  {
    display:flex;
    :last-child {
           max-width: 600px;
        }
    @media (max-width: $large-screen) {
        flex-direction: column;
        gap:5rem;
        :last-child {
           max-width: none;
        }
    }
    
    
}

.section-5  {
    display:flex;
    :last-child {
           max-width: 1000px;
        }
    @media (max-width: $large-screen) {
        flex-direction: column;
        gap:5rem;
        :last-child {
           max-width: none;
        }
    }
    
    
}

</style>
