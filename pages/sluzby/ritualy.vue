<template>
    <HeaderContainerRounded title="Rituály"
        description="Přechodové rituály pro přijetí a prožití důležitých životních momentů s respektem a péčí."
        bg-image="/img/9483_org_transparent.png">
        <template #button>
            <MailButton subject="Rituály" />
        </template>
    </HeaderContainerRounded>

    <SectionsContainer>
        <div class="flex flex-col-reverse lg:flex-row gap-12 p-4">
            <div class="flex flex-1 items-center justify-center">
                <div class="flex rounded-xl overflow-hidden max-w-[600px]">
                    <NuxtImg src="/img/9425_org.jpg" class="w-full object-cover object-center" alt="" densities="1x"
                        sizes="sm:100vw " format="webp" quality="90" />
                </div>
            </div>
            <div class="flex flex-col items-center justify-center flex-1 gap-12">
                <div class="flex flex-col items-center">
                    <h2 class="text-center">Přechodové rituály</h2>
                    <p class="highlighted-text text-center">
                        Slouží k <span>přijetí</span> a plnému <span>prožití</span> důležitých <span>životních
                            momentů</span> Často jsou spojovány s oslavou, dají se však provádět i zcela o samotě a
                        pomáhají
                        <span>překonat</span> i těžké životní situace. Jsem tu pro ženy <span>ve všech ohledech</span>,
                        proto připravuji nejen předporodní rituály, ale i soukromý rituál pro pomoc při ztrátě.
                    </p>
                </div>
                <MailButton subject="Rituály" />

            </div>
        </div>
    </SectionsContainer>

    <SectionsContainer bg-color="bg-pink-100">
        <div class="flex flex-col items-center gap-24 p-4">

            <div class="flex flex-col items-center">
                <h2 class="text-center">Pro důležité životní okamžiky</h2>
                <p class="highlighted-text text-center max-w-[800px]">
                    <span>Každý přechod</span> v životě si zaslouží pozornost, <span>péči a podporu</span>. Nabízím
                    rituály,
                    které pomáhají oslavit <span>příchod nového života</span>, uzavřít jednu etapu a vstoupit do další,
                    nebo
                    <span>najít klid</span> a přijetí v náročných chvílích.
                </p>
            </div>
            <CardsPanel :data="cardsContent" />
        </div>
    </SectionsContainer>

    <SectionsContainer bg-color="bg-pink-200">
        <div class="flex flex-col items-center gap-12 p-4">
            <div class="flex flex-col items-center gap-12">
                <div class="flex flex-col items-center">
                    <h2 class="text-center">S respektem</h2>
                    <p class="highlighted-text text-center max-w-[800px]">S <span>respektem</span> k životu ve všech
                        jeho
                        <span>aspektech</span> a ke všemu, co nás v něm <span>potkává</span>.
                    </p>
                </div>
                <MailButton subject="Rituály" />

            </div>


            <div class="flex flex-col lg:flex-row gap-8">
                <div class="flex rounded-xl overflow-hidden max-w-[400px]">
                    <NuxtImg src="/img/9101_org.jpg" class="w-full object-cover object-center" alt="" densities="1x"
                        sizes="sm:100vw " format="webp" quality="90" />
                </div>
                <div class="flex rounded-xl overflow-hidden max-w-[400px]">
                    <NuxtImg src="/img/9134_org.jpg" class="w-full object-cover object-center" alt="" densities="1x"
                        sizes="sm:100vw" format="webp" quality="90" />
                </div>
            </div>
        </div>
    </SectionsContainer>

    <SectionsContainer bg-color="bg-gray-100">
        <div class="flex flex-col-reverse items-center lg:flex-row gap-12 p-4">
            <div class="flex flex-1 items-center justify-center">
                <div class="flex rounded-full aspect-square overflow-hidden max-w-[500px]">
                    <NuxtImg src="/img/9070_org.jpg" class="w-full object-cover object-center" alt="" densities="1x"
                        sizes="sm:100vw" format="webp" quality="90" />
                </div>
            </div>
            <div class="flex flex-1 flex-col gap-12 items-center">
                <div class="flex flex-1 flex-col items-center">

                    <h2 class="text-center">Pro koho jsou</h2>
                    <p class="highlighted-text text-center max-w-[800px]">
                        Rituály jsou vytvářeny <span>na míru</span>, po konzultaci, <span>individuálně</span> či pro
                        <span>skupinu</span> lidí, je možno je <span>darovat</span> blízké osobě.
                    </p>
                </div>
                <MailButton subject="Rituály" />
            </div>
        </div>
    </SectionsContainer>

    <SectionsContainer>
        <PricePanel :title="price.title" :subtitle="price.subtitle" :price="price.price" :priceLabel="price.priceLabel"
            :content="price.content" :show-flower="price.showFlower" :btn-filled="price.btnFilled"
            :additional-price="price.additionalPrice" :additional-priceLabel="price.additionalpriceLabel" />
    </SectionsContainer>
</template>

<script setup>
import MailButton from '~/components/buttons/MailButton.vue';

const price = ref({
    title: "Rituál",
    subtitle: "",
    price: 2000,
    additionalPrice: 1000,
    priceLabel: "1. hodina",
    additionalpriceLabel: "každá další hodina",
    content: [
        "Cena se může navýšit podle obsahu a materiální náročnosti"
    ],
    showFlower: true,
    btnFilled: true
})

const cardsContent = ref([
    {
        title: "Předporodní rituál",
        description: [
            "individuální či v kruhu blízkých žen",
            "sdílení pro podporu k porodu a mateřství",
            "péče o těhotnou ženu dle přání",
            "občerstvení, výroba šperku, dárky…"
        ]
    },
    {
        title: "Rituál zavírání kostí",
        description: [
            "individuální rituál na konci šestinedělí",
            "k uzavření jedné životní etapy a přechodu do další",
            "rekapitulace prožitých zážitků",
            "probuzení ženy - matky"
        ]
    },
    {
        title: "Rituál při ztrátě",
        description: [
            "sdílení a podpora",
            "přijetí a odpuštění",
            "péče o tělo masáží, bylinnou napářkou, …",
            "mentální očista"
        ]
    }
])

const images = ref([
    { src: '/img/9483_org.jpg' },
    { src: '/img/9480_org.jpg' },
    { src: '/img/9473_org.jpg' },
    { src: '/img/9425_org.jpg' },
    { src: '/img/9218_org.jpg' },
    { src: '/img/9128_org.jpg' },
    { src: '/img/9101_org.jpg' },
    { src: '/img/9070_org.jpg' },
    { src: '/img/9134_org.jpg' },
    { src: '/img/26_org.jpeg' },
    { src: '/img/14_org.jpeg' },
])

</script>