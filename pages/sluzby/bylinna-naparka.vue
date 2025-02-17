<template>
    <HeaderContainer title="Bylinná napářka" bg-image="/img/9480_transparent_darker.png" />
    <SectionsContainer >
        <template #content>
            <div class="section-1">
                <div class="left">

                    <InfoWrapper>
                        <p>
                            Ženská <span>vaginální napářka</span> je skvělý způsob <span>péče o tělo</span> a podpůrná metoda <span>řešení ženských zdravotních potíží</span> Nejčastěji ji využívám a vřele doporučuji ke <span>konci těhotenství</span> pro <span>přípravu porodních cest</span> na porod. Slouží jako <span>prevence poranění</span> a urychluje následné <span>hojení</span> 
                        </p>
                    </InfoWrapper>
                </div>
                <div class="right">

                    <GalleryTwoPhotos :images="images1"/>
                </div>
            </div>
        </template>
    </SectionsContainer>
    <SectionsContainer  background-color="black-dr">
        <template #content>
            <div class="section-2">
                
                <GallerySinglePhoto :photo="'/img/18_org.jpeg'" :position="'horizontal'" rotate="right"/>
                <InfoWrapper :text-align="'center'">
                    <p>
                        Pro napářku využívám <span>směsi bylin</span> které sama připravuji. 
                    </p>
                </InfoWrapper>
            </div>
        </template>
    </SectionsContainer>
    <SectionsContainer :justify-header="'center'" title="MOŽNOSTI">
        <template #content>
            <CardsPanel :data="cardsContent" />
        </template>
    </SectionsContainer>
    <SplitedSection>
        <template #left>
            <SectionGallery :media="images" />
        </template>
    </SplitedSection>
    <SectionsContainer>
        <template #content>
            <RecipeBlock :img="recipe.img" :steps="recipe.steps" :title="recipe.title"/>

        </template>
    </SectionsContainer>
    <SectionsContainer background-color="gray-lt">
        <template #content>
            <div class="section-5">

                <GallerySinglePhoto photo="/img/14_org.jpeg" position="horizontal" rotate="right"/>
                <div class="next-info">
                    <h2>MIMO TĚHOTENSTVÍ</h2>
                    <p>
                        Vaginální napářku je možné si připravovat kdykoliv i mimo těhotenství, jelikož je prospěšná v mnoha směrech a pomáhá řešit mnohé obtíže, mezi které patří: 
                    </p>
                    <ul>
                        <li>silné PMS</li>
                        <li>nepravidelná menstruace</li>
                        <li>ztráta ovulace</li>
                        <li>časté vaginální záněty</li>
                        <li>nepříjemné projevy během menopauzy</li>
                    </ul>
                   <p>
                    A tak dále…
                   </p> 
                </div>
            </div>
        </template>
    </SectionsContainer>
</template>

<script setup>



const cardsContent = ref([
    {title: "PŘÍPRAVA NA POROD",
     description: [
        "připravím pro Tebe napářku jako součást předporodního rituálu",
        "uvolnění porodních cest",
        "prevence porodního poranění",
        "od ukončeného 38tt i na začátku I. doby porodní"
    ]},
    {title: "PO PORODU",
     description: [
        "po skončení očistků na dokončení hojení a regenerace těla",
        "kdykoliv před menstruací na zmírnění PMS",
        "celková harmonizace cyklu",
        "pomoc při ženských zdravotních potížích"
    ]},
    {title: "ZAPŮJČENÍ STOLIČKY A NABÍDKA BYLINEK",
     description: [
        "můžeš si u mě pronajmout stoličku za 150,-/týden", // TODO: cena by měla být někde centralizovana
        "nabízím bylinné směsi: 60kč/1 dávka - 30g",    //TODO :cena by měla být někde centralizovana
        "více ZDE (link na půjčování)", //TODO : dodělat link
    ]}
])

const recipe = ref({
    title: "JAK NAPÁŘKU PŘIPRAVIT",
    steps: [
        "Směs bylin se nechá povařit alespoň 10 - 15 minut pod pokličkou. Mezitím si připrav stoličku, deku a teplé ponožky. Bylinky lze užívat i vnitřně - můžeš je popíjet jako čaj během svého napařovacího rituálku a prohřívat tak tělo i zevnitř.",
        "Hrnec s povařenými bylinami postav pod stoličku a nejprve rukou otestuj teplotu stoupající páry, aby ses neopařila. Nasaď si teplé ponožky a posaď se na stoličku. Zabal se do deky nebo peřiny tak, aby Tě zakrývala celou od pasu až dolů na zem. Teplo nesmí nikde unikat. ",
        "Pusť si příjemnou hudbu a relaxuj nad voňavou párou alespoň 15 minut. ",
        "Po skončení napářky je důležité teplo v těle udržet a nechat působit. Ideální je si rituálek načasovat těsně před spaním. Po napářce se zabal do peřin, zůstaň v teple a jdi spát. Napářka tělo krásně uvolní a relaxace ti pomůže zklidnit hlavu, takže se ti bude hezky usínat, což se zvlášť před porodem velmi hodí.",
        "Napářku doporučuji provádět od ukončeného 38. týdne těhotenství klidně každý den nebo aspoň obden. ",
        "Je možné ji udělat i na začátku I. doby porodní pro lepší start porodu."
    ],
    img: "/img/9103_org.jpg"
})

const images = ref([
    {src: '/img/9480_org.jpg'},
    {src: '/img/9483_org.jpg'},
    {src: '/img/9103_org.jpg'},
    {src: '/img/19_org.jpeg'},
    {src: '/img/18_org.jpeg'},
    {src: '/img/17_org.jpeg'},
    {src: '/img/16_org.jpeg'},
    {src: '/img/14_org.jpeg'},
])
const images1 =ref([
    {src: '/img/9480_org.jpg', position:"vertical"},
    {src: '/img/9483_org.jpg', position:"horizontal"},
])
</script>
<style lang="scss" scoped>
    
.section-1 {
    display: flex;
    align-items: center;
    .left, .right {
        max-width: 50%;
    }
    @media (max-width: $large-screen) {
        flex-direction: column;
        gap: 5rem;
        .left,.right {
            width: 100%;
            max-width: none;
        }
    }
}

.section-2 {
    display: flex;
    @media (max-width: $medium-screen) {
        flex-direction: column;
        gap: 5rem;
    }
}

.section-5 {
    display: flex;
    gap:2rem;
    @media (max-width: $large-screen) {
        flex-direction: column;
        gap: 8rem;
    }
    .next-info {
        display: flex;
        flex-direction: column;
        justify-content: center;
        gap:1rem;
        font-size: 1.8rem;
        font-weight: 200;
        max-width: 600px;
        @media (max-width: $large-screen) {
        text-align: center;
        
    }
        h2 {
            text-align: center;
            font-size: 2.2rem;
            font-weight: 600;
            color: $pink-dr
        }
        p {
            border-radius: 10px;
            line-height: 2.2rem;
            font-style: italic;
            span {
                font-weight: bold;
            }
        } 
        ul {
            list-style-type: disc;
            padding: 2rem 4rem;
            li {
                font-weight: bold;
                font-style: italic;
            }
        }
    }
}
</style>