<template>
    <HeaderContainerRounded
        title="Bylinná napářka" 
        description="Uvolnění, hojení, regenerace – síla bylin v péči o ženské tělo."
        bg-image="/img/9480_org_transparent.png" 
    >
        <template #button>
            <NuxtLink :to="socialLinks.mail.link">
                <TheButton label="Napiš mi" icon="fa:envelope-o" pulse/>
            </NuxtLink >
        </template>
    </HeaderContainerRounded>

    <SectionsContainer >
            <div class="flex flex-col items-center gap-12 p-4">
                <div class="flex flex-col items-center">
                    <h2 class="text-center">Ženská vaginální napářka</h2>
                    <p class="highlighted-text text-center max-w-[800px]">
                        Skvělý způsob <span>péče o tělo</span> a podpůrná metoda <span>řešení ženských zdravotních potíží</span> Nejčastěji ji využívám a vřele doporučuji ke <span>konci těhotenství</span> pro <span>přípravu porodních cest</span> na porod. Slouží jako <span>prevence poranění</span> a urychluje následné <span>hojení</span> 
                    </p>
                </div>
                <NuxtLink :to="socialLinks.mail.link">
                    <TheButton label="Napiš mi" icon="fa:envelope-o" pulse/>
                </NuxtLink >
                <div class="flex flex-col md:flex-row gap-8">
                    <div class="flex rounded-xl overflow-hidden">
                        <NuxtImg src="/img/9480_org.jpg" 
                            class="w-full object-cover object-center"
                            alt=""
                            densities="1x"
                            sizes="sm:100vw "
                            format="webp"
                            quality="90"
                        />
                    </div>
                    <div class="flex rounded-xl overflow-hidden">
                        <NuxtImg src="/img/9483_org.jpg" 
                            class="w-full object-cover object-center"
                            alt=""
                            densities="1x"
                            sizes="sm:100vw"
                            format="webp"
                            quality="90"
                        />
                    </div>
                </div>
            </div>
    </SectionsContainer>
    <SectionsContainer  bg-color="bg-gray-200">
            <div class="flex flex-col-reverse md:flex-row items-center gap-12 p-4">
                <div class="flex flex-1 items-center justify-center">
                    <div class="flex  rounded-xl max-w-[400px]  overflow-hidden">
                        <NuxtImg src="/img/18_org.jpeg" 
                        class="w-full object-cover object-center"
                        alt=""
                        densities="1x"
                        sizes="sm:100vw "
                        format="webp"
                        quality="90"
                        />
                    </div>
                </div>
                <div class="flex flex-1 flex-col items-center gap-12">
                    <div class="flex flex-1 flex-col items-center">
                        <h2 class="text-center">Byliny</h2>
                        <p class="highlighted-text text-center">
                            Pro napářku využívám <span>směsi bylin</span> které sama připravuji. 
                        </p>
                    </div>
                    <NuxtLink :to="socialLinks.mail.link">
                        <TheButton label="Napiš mi" icon="fa:envelope-o" pulse/>
                    </NuxtLink >
                </div>
            </div>
    </SectionsContainer>
    <SectionsContainer bg-color="bg-gray-300">
        <div class="flex flex-col items-center gap-16 p-4">

            <div class="flex flex-col items-center max-w-[800px]">
                <h2 class="text-center">  Napářka v každé fázi života</h2>
                <p class="text-center">Přirozená péče pro ženy v těhotenství, po porodu i během cyklu. Uvolnění, regenerace a harmonizace díky síle bylin.</p>
            </div>
            <CardsPanel :data="cardsContent" />
        </div>
    </SectionsContainer>
    <SectionsContainer bg-color="bg-pink-50">
        <div class="flex flex-col lg:flex-row gap-8 p-4">

            <div class="flex rounded-xl overflow-hidden">
                <NuxtImg src="/img/9103_org.jpg" 
                class="w-full object-cover object-center"
                alt=""
                densities="1x"
                sizes="sm:100vw "
                format="webp"
                quality="90"
                />
            </div>
            <InfoList :content="recipe.steps" :title="recipe.title"/>
        </div>
    </SectionsContainer>
    <SectionsContainer bg-color="bg-pink-100">
            <div class="flex flex-col-reverse lg:flex-row items-center justify-center gap-8 p-4">
                <div class="flex flex-col flex-1 items-center">
                    <h2>Mimo těhotenství</h2>
                    <p class="text-center">
                        Vaginální napářku je možné si připravovat kdykoliv i mimo těhotenství, jelikož je prospěšná v mnoha směrech a pomáhá řešit mnohé obtíže, mezi které patří: 
                    </p>
                    <InfoList :content="issues" icon="ic:twotone-check-circle"/>
                    <p class="mt-12">A tak dále…</p>
                </div>
                <div class="flex flex-1 justify-center items-center">

                    <div class="flex rounded-full aspect-square overflow-hidden max-w-[500px]">
                        <NuxtImg src="/img/14_org.jpeg" 
                        class="w-full object-cover object-center"
                        alt=""
                        densities="1x"
                        sizes="sm:100vw"
                        format="webp"
                        quality="90"
                        />
                    </div>
                </div>

            </div>
    </SectionsContainer>
    <SectionsContainer 
        background-color="white" 
        :justify-header="'center'" 
        
    >
        <PricePanel 
            :title="price.title"
            :subtitle="price.subtitle" 
            :price="price.price"
            :slash="price.slash"
            :content="price.content"
            :show-flower="price.showFlower"
            :btn-filled="price.btnFilled"
        />
    </SectionsContainer>
</template>

<script setup>

const price = ref({
    title: "Standard",
    subtitle: "",
    price: 600,
    slash: "hodina",
    content: [
    ],
    showFlower:true,
    btnFilled: true
})

const issues = ref([
    { description: "silné PMS" },
    { description: "nepravidelná menstruace" },
    { description: "ztráta ovulace" },
    { description: "časté vaginální záněty" },
    { description: "nepříjemné projevy během menopauzy" }
]);

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
    title: "Jak napářku připravit",
    steps: [
        { description: "Směs bylin se nechá povařit alespoň 10 - 15 minut pod pokličkou. Mezitím si připrav stoličku, deku a teplé ponožky. Bylinky lze užívat i vnitřně - můžeš je popíjet jako čaj během svého napařovacího rituálku a prohřívat tak tělo i zevnitř." },
        { description: "Hrnec s povařenými bylinami postav pod stoličku a nejprve rukou otestuj teplotu stoupající páry, aby ses neopařila. Nasaď si teplé ponožky a posaď se na stoličku. Zabal se do deky nebo peřiny tak, aby Tě zakrývala celou od pasu až dolů na zem. Teplo nesmí nikde unikat." },
        { description: "Pusť si příjemnou hudbu a relaxuj nad voňavou párou alespoň 15 minut." },
        { description: "Po skončení napářky je důležité teplo v těle udržet a nechat působit. Ideální je si rituálek načasovat těsně před spaním. Po napářce se zabal do peřin, zůstaň v teple a jdi spát. Napářka tělo krásně uvolní a relaxace ti pomůže zklidnit hlavu, takže se ti bude hezky usínat, což se zvlášť před porodem velmi hodí." },
        { description: "Napářku doporučuji provádět od ukončeného 38. týdne těhotenství klidně každý den nebo aspoň obden." },
        { description: "Je možné ji udělat i na začátku I. doby porodní pro lepší start porodu." }
    ]
})


</script>
