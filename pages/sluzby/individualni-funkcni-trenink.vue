<template>
    <HeaderContainerRounded title="Individuální funkční trénink"
        description="Každá žena by měla znát své tělo a umět s ním pracovat. Naučím Tě, jak ho posílit, stabilizovat a vnímat, aby ses v něm cítila skvěle každý den."
        bg-image="/img/9297_org_thin_transparent.png" overlay>
        <template #button>
            <MailButton :subject="'Individuální funkční trénink'" />
        </template>
    </HeaderContainerRounded>
    <SectionsContainer>
        <div class="flex flex-col lg:flex-row items-center gap-12 p-4">
            <div class="flex flex-1 flex-col items-center gap-12">
                <div class="flex flex-col items-center">
                    <h2>Zaměření</h2>
                    <p class="highlighted-text text-center max-w-[800px]">
                        Jako <span>funkční trenérka</span> se zabývám posilováním <span>pánevního dna</span> a
                        <span>středu
                            těla</span> s komplexním zaměřením na celý <span>hluboký stabilizační systém</span>.
                    </p>
                </div>
                <MailButton :subject="'Individuální funkční trénink'" />


            </div>
            <div class="flex flex-1 items-center justify-center">
                <div class="flex rounded-full aspect-square max-w-[480px] overflow-hidden">
                    <NuxtImg src="/img/34_org.png" class="w-full object-cover object-center" alt="" densities="1x"
                        sizes="sm:100vw " format="webp" quality="90" />
                </div>
            </div>
        </div>
    </SectionsContainer>

    <SectionsContainer bg-color="bg-gray-100">
        <div class="flex flex-col-reverse lg:flex-row items-center gap-12 p-4">
            <div class="flex flex-1 items-center justify-center max-w-[400px]">

                <div class="flex rounded-xl overflow-hidden  ">
                    <NuxtImg src="/img/9437_org.jpg" class="w-full object-cover object-center" alt="" densities="1x"
                        sizes="sm:100vw " format="webp" quality="90" />
                </div>

            </div>
            <div class="flex flex-1 flex-col items-center gap-8">
                <div class="flex flex-1 flex-col items-center">
                    <h2 class="text-center">Individuální přístup přesně pro Tebe</h2>
                    <p class="highlighted-text text-center ">
                        Kromě pravidelných <span>skupinových kurzů</span> poskytuji i <span>individuální přístup</span>,
                        kdy
                        je prostor na konkrétní <span>diagnostiku</span> a <span>zacílení</span> na základě Tvých
                        <span>preferencí a potřeb</span>. Jsi ve II. trimestru <span>těhotenství</span>, máš <span>po
                            porodu</span>, či už delší dobu víš, že chceš se sebou <span>začít něco dělat</span> - jsi u
                        mě
                        správně!
                    </p>
                </div>
                <div class="flex gap-8">
                    <MailButton :subject="'Individuální funkční trénink'" />
                    <DefaultButton to="/events" label="Kurzy" icon="fa:calendar" pulse bordered />
                </div>

            </div>
        </div>
    </SectionsContainer>

    <SectionsContainer>
        <div class="flex flex-col items-center gap-12 p-4">
            <div class="flex flex-col items-center">
                <h2>Poznej své tělo</h2>
                <p class="highlighted-text text-center max-w-[800px]">
                    Pracuji se ženami <span>všech věkových kategorií</span>. Pomáhám <span>poznat</span> a
                    <span>pochopit</span> svoje <span>tělo</span>, udělat ho <span>funkční</span> a <span>cítit
                        se</span> v
                    něm <span>dobře</span>.
                </p>
            </div>
            <MailButton :subject="'Individuální funkční trénink'" />

            <div class="flex flex-col md:flex-row gap-8 items-center">
                <div
                    class="flex rounded-full overflow-hidden max-h-[320px] lg:max-h-[380px] max-w-[400px] lg:max-w-none">
                    <NuxtImg src="/img/33_org.jpeg" class="w-full object-cover object-[25%_75%] " alt="" densities="1x"
                        sizes="sm:100vw " format="webp" quality="90" />
                </div>
                <div
                    class="flex rounded-full overflow-hidden max-h-[320px] lg:max-h-[380px] max-w-[400px] lg:max-w-none">
                    <NuxtImg src="/img/35_org.png" class="w-full object-cover object-center" alt="" densities="1x"
                        sizes="sm:100vw " format="webp" quality="90" />
                </div>
            </div>
        </div>
    </SectionsContainer>

    <SectionsContainer bg-color="bg-pink-100">
        <div class="flex flex-col gap-20 items-center p-4">

            <div class="flex flex-col items-center max-w-[800px]">
                <h2 class="text-center">Znalosti, plán, výsledky – cesta ke změně</h2>
                <p class="highlighted-text text-center"><span>Porozumíš</span> svému tělu, získáš <span>cvičební
                        plán</span>
                    na míru a postupně dosáhneš <span>viditelných výsledků</span>. Funkční trénink Ti pomůže nejen
                    <span>cítit se lépe</span>, ale i pochopit, jak správně pracovat se svým tělem <span>v každodenním
                        životě</span>.
                </p>
            </div>
            <CardsPanel :data="cardsContent" />
        </div>

    </SectionsContainer>

    <SectionsContainer bg-color="bg-pink-200">
        <div class="flex flex-col lg:flex-row-reverse items-center gap-16 p-4">
            <div class="flex flex-col items-center gap-8">
                <div class="flex flex-col items-center">
                    <h2 class="text-center">Cvičební plán, který roste s Tebou</h2>
                    <p class="highlighted-text text-center">Důležitá je <span>návaznost a kontinuální podpora</span>,
                        proto
                        spolu budeme sledovat <span>výsledky</span> a pozorovat Tvůj <span>progres</span>, na základě
                        kterého budeme postupně upravovat <span>cvičební plán</span> přesně na míru, aby pro Tebe mělo
                        cvičení co nejlepší <span>dlouhodobý efekt</span>.</p>
                </div>
                <MailButton :subject="'Individuální funkční trénink'" />

            </div>
            <div class="flex flex-row gap-8">
                <div class="flex rounded-xl overflow-hidden max-h-[400px]">
                    <NuxtImg src="/img/9309_org.jpg" class="w-full object-cover object-center" alt="" densities="1x"
                        sizes="sm:100vw " format="webp" quality="90" />
                </div>
                <div class="flex rounded-xl overflow-hidden max-h-[400px]">
                    <NuxtImg src="/img/9312_org.jpg" class="w-full object-cover object-center" alt="" densities="1x"
                        sizes="sm:100vw" format="webp" quality="90" />
                </div>
            </div>
        </div>
    </SectionsContainer>
    <SectionsContainer>
        <PricesContainer :panels="prices" />
    </SectionsContainer>
</template>

<script setup>
import DefaultButton from '~/components/buttons/DefaultButton.vue';
import MailButton from '~/components/buttons/MailButton.vue';

const prices = ref([
    {
        title: "1 Lekce",
        subtitle: "Standard",
        price: 600,
        priceLabel: "",
        listTitle: "Získáš",
        content: [
            "Vstupní diagnostika",
            "1 hodina společného cvičení"
        ],
        showFlower: true,
        btnFilled: true
    },
    {
        title: "5 Lekcí",
        subtitle: "15% sleva",
        price: 2550,
        priceLabel: "",
        listTitle: "Získáš",
        content: [
            "Vstupní diagnostika",
            "5 hodin cvičení",
            "Sestavení tréninkového plánu",
            "Průběžné konzultace a motivace"
        ],
        showFlower: true,
        btnFilled: true,
        highlight: true,
    },
    {
        title: "3 Lekce",
        subtitle: "10% sleva",
        price: 1620,
        priceLabel: "",
        listTitle: "Získáš",
        content: [
            "Vstupní diagnostika",
            "3 hodiny společného cvičení",
            "Sestavení tréninkového plánu",
        ],
        showFlower: true,
        btnFilled: true
    },
])

const cardsContent = ref([
    {
        title: "Znalosti",
        description: [
            "poznáš svaly svého pánevního dna",
            "pochopíš funkci bránice a všechny souvislosti",
            "zjistíš, jak se sebou zacházet při běžných činnostech",
            "vše Ti začne dávat smysl!"
        ]
    },
    {
        title: "Cvičební plán na míru",
        description: [
            "vstupní konzultace a diagnostika",
            "stabilizační a dechové techniky",
            "postupné zvyšování úrovně a zátěže",
            "cviky odpovídající Tvým potřebám"
        ]
    },
    {
        title: "Výsledky",
        description: [
            "funkční tělo",
            "dobrý pocit ze sebe",
            "radost z pohybu",
            "motivace"
        ]
    }
])
</script>