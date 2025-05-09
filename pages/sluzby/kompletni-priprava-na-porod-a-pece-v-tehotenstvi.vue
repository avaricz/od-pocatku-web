<template>
    <HeaderContainerRounded :bg-image="'/img/9400_org_transparent.png'"
        title="Kompletní příprava na porod a péče v těhotenství"
        description="Kompletní příprava na porod, která zahrnuje vše, co potřebuješ k tomu, abys byla na porod připravená nejen fyzicky, ale i psychicky.">
        <template #button>
            <MailButton :subject="'Kompletní příprava na porod a péče v těhotenství'" />
        </template>
    </HeaderContainerRounded>

    <SectionsContainer bg-color="bg-gray-50">
        <div class="flex flex-col items-center gap-24 p-4 xl:p-0">
            <div class="flex flex-col items-center">
                <h2>Individuální setkávání</h2>
                <p class="highlighted-text text-center max-w-[800px]">
                    "Během <span>individuálních setkávání</span> Ti pomůžu připravit se na porod po všech stránkách tak,
                    abys k němu šla <span>klidná a sebevědomá</span>. Díky kombinaci <span>praktických cvičení</span>,
                    <span>dechových technik</span> a <span>mentální přípravy</span> budeš připravena na každou fázi
                    porodu s
                    <span>důvěrou ve své tělo i sebe samu</span>."
                </p>
            </div>

            <div class="flex flex-col lg:flex-row gap-8">
                <div class="flex rounded-xl overflow-hidden">
                    <NuxtImg src="/img/9357_org.jpg" class="w-full object-cover object-center" alt="" densities="1x"
                        sizes="sm:100vw " format="webp" quality="90" />
                </div>
                <div class="flex rounded-xl overflow-hidden">
                    <NuxtImg src="/img/9364_org.jpg" class="w-full object-cover object-center" alt="" densities="1x"
                        sizes="sm:100vw" format="webp" quality="90" />
                </div>
            </div>
        </div>
    </SectionsContainer>

    <SectionsContainer bg-color="bg-pink-100">
        <div class="flex w-full flex-col items-center justify-center gap-16">
            <div class="flex flex-col items-center">
                <h2>Co získáš</h2>
                <p class="max-w-[800px] text-center">Výhoda individuálních konzultací je, že sestavíme jejich náplň
                    přesně
                    podle toho, co právě potřebuješ a co s Tebou rezonuje.</p>
            </div>
            <CardsPanel :data="cardsContent" />
        </div>
    </SectionsContainer>
    <SectionsContainer bg-color="bg-gray-100">
        <div class="flex flex-col-reverse items-center lg:flex-row gap-8 p-4 xl:p-0">
            <div class="flex flex-1 rounded-xl overflow-hidden">
                <NuxtImg src="/img/9175_org.jpg" class="w-full object-cover object-center" alt="" densities="1x"
                    sizes="sm:100vw md:100vw" format="webp" quality="100" />
            </div>
            <div class="flex flex-1 max-w-[600px] flex-col items-center justify-center md:p-4 gap-12">
                <InfoList title="Dále nabízím" :content="infoList" :icon="'flower'" />
                <MailButton :subject="'Kompletní příprava na porod a péče v těhotenství'" />
            </div>
        </div>

    </SectionsContainer>
    <SectionsContainer bg-color="bg-gray-50">
        <PricePanel :title="price.title" :subtitle="price.subtitle" :price="price.price" :priceLabel="price.priceLabel"
            :content="price.content" :show-flower="price.showFlower" :btn-filled="price.btnFilled" />
    </SectionsContainer>
</template>

<script setup>
import { socialLinks } from '#imports'
import MailButton from '~/components/buttons/MailButton.vue'

const cardsContent = ref([
    {
        title: "FYZICKÁ PŘÍPRAVA NA POROD",
        description: [
            "práce s pánevním dnem",
            "dechové techniky pro všechny porodní fáze",
            "cviky pro zdravé fit těhotenství a bezproblémový porod",
            "relaxační i rebozo masáže"
        ]
    },
    {
        title: "PRÁCE S MYSLÍ",
        description: [
            "uvědomění si vnitřní síly",
            "návod na zvládání bolesti",
            "vnímání porodu jako zážitku",
            "vizualizace, afirmace, vedené meditace"
        ]
    },
    {
        title: "INFORMACE",
        description: [
            "vše, co potřebuješ vědět k porodu",
            "příprava na šestinedělí a kojení",
            "zapojení partnera",
            "prevence a řešení potíží"
        ]
    }
])

const infoList = ref([
    { description: "rozvolňující masáže před porodem" },
    { description: "práci s rebozem, spinning babies" },
    { description: "celotělovou práci na protažení svalů a kompletní přípravu těla pro porod" },
    { description: "rituál s bylinnou vaginální napářkou" }
])

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

/* const images1 = ref([
    {src: '/img/9357_org.jpg', position: 'horizontal'},
    {src: '/img/9364_org.jpg', position: 'vertical'},
])

const images2 = ref([ // TODO: zakomponovat tyto foto?
    {src: '/img/9175_org.jpg'},
    {src: '/img/9391_org.jpg'},
])

const images3 = ref([ // TODO: zakomponovat tyto foto?
    {src: '/img/9400_org.jpg'},
    {src: '/img/9412_org.jpg'},
]) */

</script>