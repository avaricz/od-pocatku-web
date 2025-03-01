<template>
    <HeaderContainer title="Spinning babies" bg-image="/img/9175_org_transparent.png" />
    <SectionsContainer>
        <template #content>
            <InfoWrapper :text-align="'center'">
                <p>
                    Máš miminko <span>koncem pánevním</span> nebo v <span>zadním postavení</span>? Není třeba zoufat. Spinning babies je soubor metod, které pomáhají <span>upravit polohu dítěte</span> v děloze vůči pánvi a usnadnit tak porod. Jde o sestavu <span>cviků</span>, <span>polohování</span> a <span>rebozo technik</span>, které pomohou vytvořit dítěti v děloze prostor a navést ho k aktivitě tak, aby <span>zaujalo v děloze správné postavení</span>.
                </p>
    
            </InfoWrapper>
        </template>
    </SectionsContainer>
    <SectionsContainer :justify-header="'center'" title="Náplň setkávání" :justify-content="'center'">
        <template #content>
            <CardsPanel :data="cardsContent" />
        </template>
    </SectionsContainer>
    <SectionsContainer :background-color="'black-dr'">
        <template #content>
            <InfoWrapper :text-align="'center'">
                    <p>
                        
                        I přes velké procento úspěšnosti je potřeba zmínit, že záleží na mnoha faktorech, jako je Tvá celková tělesná konstituce, velikost dítěte a jak blízko máš před porodem. Proto nikdy nelze zaručit 100% úspěšnost, ale <span>vždy dělám maximum. :)</span></p>

            </InfoWrapper>
        </template>
    </SectionsContainer>
    <SectionsContainer :background-color="'black-dr'">
        <template #content>
            <GalleryFullWidth :images="images"/>
        </template>
    </SectionsContainer>
    <SectionsContainer 
        background-color="white" 
        :justify-header="'center'" 
        
    >
        <template #content>
            <PricePanel 
                :title="price.title"
                :subtitle="price.subtitle" 
                :price="price.price"
                :slash="price.slash"
                :content="price.content"
                :show-flower="price.showFlower"
                :btn-filled="price.btnFilled"
            />
        </template>
    </SectionsContainer>
</template>

<script setup>
const price = ref({
    title: "Standard",
    subtitle: "",
    price: 600,
    slash: "hodina",
    content: [
        // "<b>ULTIMÁTNÍ</b> masáž",
        // "voný oleje",
        // "rebozo šátek",
        // "jak si namíchat <b>rumba koule</b>",
        // "voný oleje",
        // "rebozo šátek",
        // "jak si namíchat rumba koule"
    ],
    showFlower:true,
    btnFilled: true
})

const cardsContent = ref([
    {title: "Využijeme",
     description: [
        "rebozo šátek",
        "moxování/stimulaci akupresurních bodů",
        "sestavu cviků"
    ]},
    {title: "Dostaneš ode mě doporučení",
     description: [
        "jaké dále zaujímat polohy",
        "jak se pohybovat během dne",
        "čím umožnit dítěti přetočit se"
    ]}
])

const images = ref([
    {src: '/img/9412_org.jpg'},
    {src: '/img/9364_org.jpg'},
    {src: '/img/9175_org.jpg'},
    {src: '/img/9166_org.jpg'},
    {src: '/img/2812_org.jpeg'},
    {src: '/img/30_org.jpeg'},
    {src: '/img/24_org.jpg'},

])

</script>
