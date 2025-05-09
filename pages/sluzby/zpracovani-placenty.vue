<template>
    <HeaderContainerRounded title="Zpracování placenty"
        description="Placentu ve formě kapslí či tinktury lze využít pro podporu regenerace, hormonální rovnováhy a zdroj energie po porodu."
        bg-image="/img/36_org_transparent.png">
        <template #button>
            <MailButton subject="Zpracování placenty" />
        </template>
    </HeaderContainerRounded>

    <SectionsContainer>
        <div class="flex flex-col gap-8 lg:flex-row-reverse items-center p-4">
            <div class="flex flex-1 flex-col items-center gap-12">

                <div class="flex flex-col items-center">
                    <h2 class="text-center">Dar života a regenerace</h2>
                    <p class="highlighted-text text-center max-w-[800px]">
                        Je čím dál běžnější, že si rodiče odnášejí z porodnice domů placentu pro další
                        <span>zpracování</span> či <span>rituální zakopání</span> do země. Placenta pro nás už dávno
                        není
                        pouhý biologický materiál. Nahlížíme na ni s velkým <span>respektem</span>, jelikož je to orgán,
                        který celých 9 měsíců <span>vyživuje</span> dítě v děloze, a který <span>obsahuje spoustu
                            výživných
                            látek pro hojení matky po porodu</span>.
                    </p>
                </div>
                <MailButton subject="Zpracování placenty" />
            </div>
            <div class="flex flex-1 items-center justify-center">

                <div class="flex rounded-full aspect-square overflow-hidden max-w-[500px]">
                    <NuxtImg src="/img/38_org.jpeg" class="w-full object-cover object-center" alt="" densities="1x"
                        sizes="sm:100vw " format="webp" quality="90" />
                </div>
            </div>
        </div>
    </SectionsContainer>
    <SectionsContainer bg-color="bg-gray-200">
        <div class="flex flex-col-reverse gap-8 lg:flex-row-reverse items-center">

            <div class="flex flex-1 items-center justify-center">
                <div class="flex rounded-full aspect-square overflow-hidden max-w-[500px]">
                    <NuxtImg src="/img/37_org.jpeg" class="w-full object-cover object-center" alt="" densities="1x"
                        sizes="sm:100vw " format="webp" quality="90" />
                </div>
            </div>
            <div class="flex flex-1 flex-col items-center gap-12 p-4">

                <div class="flex flex-col items-center">
                    <h2 class="text-center">Placenta jako přírodní životabudič</h2>
                    <p class="highlighted-text text-center max-w-[800px]">
                        Placenta tak působí jako <span>životabudič</span>, který dodá po porodu do těla ztracenou
                        <span>energii</span>, vyváží <span>hormonální hladiny</span> a pomáhá <span>regeneraci</span>.
                        Zpracovává se a užívá v pohodlné formě <span>kapslí</span> nebo <span>tinktury</span>.
                    </p>
                </div>
                <MailButton subject="Zpracování placenty" />
            </div>
        </div>
    </SectionsContainer>
    <SectionsContainer bg-color="bg-pink-100">
        <CardsPanel :data="cardsContent" />
    </SectionsContainer>

    <SectionsContainer bg-color="bg-gray-100">
        <div class="flex flex-col-reverse lg:flex-row gap-12 p-4">
            <div class="flex flex-1 justify-center">

                <div class="flex rounded-full overflow-hidden max-w-[500px]">
                    <NuxtImg src="/img/36_org.jpeg" class="w-full object-cover object-center" alt="" densities="1x"
                        sizes="sm:100vw" format="webp" quality="90" />
                </div>
            </div>
            <div class="flex flex-1 flex-col items-center gap-12">
                <div class="flex flex-col max-w-[500px]">
                    <h2 class="text-center">Jak to probíhá</h2>
                    <InfoList :content="recipe" />
                </div>
                <MailButton subject="Zpracování placenty" />
            </div>
        </div>
    </SectionsContainer>
    <SectionsContainer>
        <PricesContainer :panels="pricePanels" />
    </SectionsContainer>
</template>

<script setup>
import MailButton from '~/components/buttons/MailButton.vue';


const pricePanels = ref([
    {
        title: "Kapsle",
        subtitle: "",
        price: 1800,
        priceLabel: "",
        content: [
        ],
        showFlower: true,
        btnFilled: true,
        link: socialLinks.mail.link
    },
    {
        title: "Tinktura",
        subtitle: "",
        price: 1500,
        priceLabel: "",
        content: [
        ],
        showFlower: true,
        btnFilled: true,
        highlight: false,
        link: socialLinks.mail.link
    }
])

const cardsContent = ref([
    {
        title: "Placenta obsahuje",
        description: [
            "železo",
            "ženské hormony",
            "kmenové buňky",
            "minerální látky a vitamíny",
            "další významné látky"
        ]
    },
    {
        title: "Můžeš si objednat",
        description: [
            "kapsle - 140 - 180ks dle velikosti placenty",
            "tinkturu - připravovaná v 1l alkoholu"
        ]
    },
    {
        title: "S čím placenta pomáhá",
        description: [
            "nástup laktace",
            "návrat energie do těla",
            "srovnání hormonálních hladin",
            "rychlejší hojení a zavinování dělohy",
            "zmírnění krvácení",
            "prevence poporodního blues",
            "bojovat s únavou",
            "celkově se cítit dobře"
        ]
    }
])

const recipe = ref([
    { description: "<span>Objednáš</span> si u mě zpracování placenty a domluvíme si podrobnosti." },
    { description: "<span>Při porodu</span> odevzdáš krabičku s víčkem o objemu alespoň 1,5l se svým jménem s <span>žádostí o vydání placenty</span>." },
    { description: "<span>Po porodu mi placentu předáte</span> (většinou se o to stará partner), nebo si ji vezmu přímo z porodnice." },
    { description: "<span>Kapsle</span> zpracovávám do 3 dnů, <span>tinkturu</span> do 6 týdnů." },
    { description: "Spolu s kapslemi ode mě <span>dostaneš doporučení</span> na užívání a skladování, i jak změnit <span>dávkování</span> při možných potížích." }
])
</script>