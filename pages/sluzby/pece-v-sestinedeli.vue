<template>
    <HeaderContainerRounded title="Péče v šestinedělí"
        description="Jsem ti oporou bezprostředně po porodu, ať už v porodnici nebo u Tebe doma."
        bg-image="/img/7_org_transparent.png" btn-label="Napiš mi" :btn-link="socialLinks.mail.link">
        <template #button>
            <NuxtLink :to="socialLinks.mail.link">
                <TheButton label="Napiš mi" icon="fa:envelope-o" pulse />
            </NuxtLink>
        </template>
    </HeaderContainerRounded>

    <SectionsContainer>
        <div class="flex flex-col items-center gap-16">
            <div class="flex flex-col items-center">
                <h2>Podpora v šestinedělí</h2>
                <p class="max-w-[800px] text-center">Fyzická regenerace, kojení, péče o miminko i psychická pohoda po
                    porodu.</p>
            </div>
            <CardsPanel :data="cardsContent" />
        </div>
    </SectionsContainer>

    <SectionsContainer bg-color="bg-gray-100">
        <div class="flex flex-1 items-center gap-8 p-4">
            <div class="flex flex-1  items-center justify-center ">
                <div class="flex  max-w-[400px] rounded-xl overflow-hidden">
                    <NuxtImg src="/img/9134_org.jpg" class="w-full object-cover object-center" alt="" densities="1x"
                        sizes="sm:100vw " format="webp" quality="90" />
                </div>
            </div>
            <div class="flex flex-1 items-center flex-col gap-12">
                <div class="flex flex-col max-w-[800px] items-center">
                    <h2>Pořád jsi na prvním místě</h2>
                    <p class="text-center highlighted-text">
                        Je důležité, abys
                        měla <span>zajištěnou péči</span> nejen o své miminko, ale také <span>o sebe</span>. Postarám se
                        o
                        Tvé <span>pohodlí</span>, společně nastartujeme <span>bezproblémové kojení</span>, ukážu Ti, jak
                        o
                        sebe <span>pečovat</span>.
                    </p>
                </div>
                <NuxtLink :to="socialLinks.mail.link">
                    <TheButton label="Napiš mi" icon="fa:envelope-o" filled pulse />
                </NuxtLink>
            </div>
        </div>
    </SectionsContainer>

    <SectionsContainer bg-color="bg-gray-200">
        <div class="flex flex-col items-center p-4 gap-12">
            <div class="flex flex-col max-w-[800px] items-center">
                <h2>Šestinedělí</h2>
                <p class="text-center highlighted-text">
                    <span>Posvátná doba</span>, ve které si zasloužíš pozornost, aby začátek Tvého
                    <span>mateřství</span> proběhl co nejlépe!
                </p>
            </div>
            <div class="flex flex-col lg:flex-row max-w-[400px] lg:max-w-none lg:max-h-[400px] gap-4">
                <div class="flex rounded-xl overflow-hidden " v-for="img in images">
                    <NuxtImg :src="img.src" class="w-full object-cover object-center" alt="" densities="1x"
                        sizes="sm:100vw " format="webp" quality="90" />
                </div>
            </div>
        </div>
    </SectionsContainer>
    <SectionsContainer bg-color="bg-gray-100">
        <div class="flex flex-col items-center p-4 gap-12">
            <div class="flex flex-col max-w-[800px] items-center">
                <h2>Nenechám Tě v tom!</h2>
                <p class="text-center highlighted-text">
                    Sama jsem tím vším prošla 3x. Proto jsem ti po celou dobu šestinedělí oporou a někým, na koho se
                    můžeš
                    kdykoliv obrátit.
                </p>
            </div>
            <NuxtLink :to="socialLinks.mail.link">
                <TheButton label="Napiš mi" icon="fa:envelope-o" filled pulse />
            </NuxtLink>
            <div class="flex flex-col lg:flex-row max-w-[400px] lg:max-w-none lg:max-h-[400px] gap-4">
                <div class="flex rounded-xl overflow-hidden " v-for="img in images2">
                    <NuxtImg :src="img.src" class="w-full object-cover object-center" alt="" densities="1x"
                        sizes="sm:100vw " format="webp" quality="90" />
                </div>
            </div>

        </div>
    </SectionsContainer>
    <SectionsContainer>
        <PricePanel :title="price.title" :subtitle="price.subtitle" :price="price.price" :priceLabel="price.priceLabel"
            :content="price.content" :show-flower="price.showFlower" :btn-filled="price.btnFilled" />
    </SectionsContainer>
</template>

<script setup>

const price = ref({
    title: "Standard",
    subtitle: "",
    price: 800,
    priceLabel: "hodina",
    content: [
    ],
    showFlower: true,
    btnFilled: true
})

const cardsContent = ref([
    {
        title: "Péče o tělo",
        description: [
            "péče o porodní poranění - bylinky, hojivé balzámy",
            "péče o jizvu po císařském řezu",
            "masáže a zavinování bříška pro podporu zavinování dělohy",
            "aktivace bránice a pánevního dna pro rychlejší regeneraci"
        ]
    },
    {
        title: "Laktační poradenství",
        description: [
            "pomoc s prvním samopřisátím po porodu",
            "úprava techniky kojení",
            "řešení potíží s kojením",
            "pomoc s péčí o miminko",
        ]
    },
    {
        title: "Na konci šestinedělí",
        description: [
            "masáž bříška bylinnými koulemi",
            "bylinná pročišťující napářka",
            "rebozo rituál zavírání kostí",
            "kontrola diastázy a vytvoření cvičebního plánu pro další měsíce",
        ]
    }
])

const images2 = ref([
    /*     { src: '/img/9480_org.jpg' },
        { src: '/img/9103_org.jpg' },
        { src: '/img/24_org.jpg' },
        { src: '/img/9134_org.jpg' }, */
    { src: '/img/25_org.jpeg' },
    /*     { src: '/img/7_org.png' },
        { src: '/img/26_org.jpeg' },
        { src: '/img/32_org.jpeg' }, */
    { src: '/img/50_org.jpg' },
    { src: '/img/51_org.jpg' },
    /*     { src: '/img/64_org.jpg' },
        { src: '/img/65_org.jpg' }, */
])
const images = ref([
    { src: '/img/24_org.jpg' },
    /*      { src: '/img/25_org.jpeg' },
        { src: '/img/50_org.jpg' },
        { src: '/img/51_org.jpg' },  */
    { src: '/img/64_org.jpg' },
    { src: '/img/65_org.jpg' },
])

/* const images1 = ref([
    { src: '/img/9134_org.jpg', position: 'vertical' },
    { src: '/img/24_org.jpg', position: 'horizontal' },
])

const images2 = ref([
    { src: '/img/7_org.png', position: 'horizontal' },
    { src: '/img/51_org.jpg', position: 'vertical' },
]) */
</script>