<template>
    <HeaderContainerRounded title="Laktační poradenství"
        description="Pro pohodlné a úspěšné kojení. Správné přikládání, řešení problémů i podpora v každé situaci."
        :bg-image="'/img/20_org_transparent.png'">
        <template #button>
            <MailButton :subject="'Laktační poradenství'" />
        </template>
    </HeaderContainerRounded>

    <SectionsContainer>
        <div class="flex flex-col-reverse gap-16 max-w-[800px] p-4">
            <div class="flex flex-col md:flex-row gap-16 items-center">
                <div class="flex flex-1 rounded-full overflow-hidden max-h-[400px] w-[340px] aspect-square">
                    <NuxtImg src="/img/67_org.jpg" class="w-full object-cover object-center" alt="" densities="1x"
                        sizes="sm:100vw md:100vw " format="webp" quality="90" />
                </div>
                <div class="flex flex-1 rounded-full overflow-hidden max-h-[400px] w-[340px] aspect-square">
                    <NuxtImg src="/img/21_org.jpeg" class="w-full object-cover object-center" alt="" densities="1x"
                        sizes="sm:100vw md:100vw " format="webp" quality="90" />
                </div>
            </div>
            <div class="flex  flex-col items-center">
                <h2>Kojení</h2>
                <p class="highlighted-text max-w-[800px] text-center">I když je kojení <span>přirozený způsob
                        výživy</span>,
                    jeho počátky můžou být náročné. Kromě <span>pečlivé přípravy</span> ještě v těhotenství Ti pomůžu se
                    <span>správnou technikou</span> hned v <span>prvních dnech</span> po porodu, aby pro Tebe bylo
                    kojení
                    příjemné a miminko prospívalo. A samozřejmě Ti pomůžu <span>vyřešit nastalé potíže</span> a to v
                    kterékoli fázi kojení a věku dítěte.
                </p>
            </div>

        </div>
    </SectionsContainer>

    <SectionsContainer bg-color="bg-pink-50">
        <div class="flex flex-col items-center gap-16 p-4">
            <div class="flex flex-col items-center">
                <h2>Nenechám Tě v tom</h2>
                <p class="highlited-text text-center">
                    Základem je <span>kontinuální podpora</span>, takže se na mě můžeš kdykoliv obrátit!
                </p>

            </div>
            <MailButton :subject="'Laktační poradenství'" />
            <CardsPanel :data="cardsContent" />
        </div>
    </SectionsContainer>

    <SectionsContainer>
        <PricesContainer :panels="prices" />
    </SectionsContainer>


</template>

<script setup>
import MailButton from '~/components/buttons/MailButton.vue';

const prices = ref([
    {
        title: "Standard",
        subtitle: "",
        price: 800,
        priceLabel: "hodina",
        content: [
        ],
        showFlower: true,
        btnFilled: true
    },
    {
        title: "Zprávy",
        subtitle: "",
        price: 200,
        priceLabel: "konzultace",
        content: ['Jsem vám k dispozici i přes whatsapp či messenger.'
        ],
        showFlower: true,
        btnFilled: true
    }
])

const cardsContent = ref([
    {
        title: "SPRÁVNÁ TECHNIKA KOJENÍ",
        description: [
            "přikládání dítěte k prsu",
            "polohování dítěte",
            "tvoje pohodlí",
            "prevence potíží"
        ]
    },
    {
        title: "ŘEŠENÍ PROBLÉMŮ",
        description: [
            "bolavé bradavky",
            "dítě se nechce přisát",
            "pocit nedostatečné laktace",
            "dítě je u kojení neklidné"
        ]
    },
    {
        title: "CELKOVÁ PODPORA",
        description: [
            "kontinuální péče",
            "poskytnutí veškerých informací",
            "zapůjčení kojících pomůcek",
            "na prvním místě Ty!"
        ]
    }
])
</script>