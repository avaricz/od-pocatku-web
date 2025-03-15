<template>
    <HeaderContainerRounded
        title="Těhotenské a rebozo masáže" 
        description="Pro nastávající maminky, které přinášejí úlevu, relaxaci a příjemné propojení s miminkem. Dopřej si zaslouženou péči a harmonii těla i mysli."
        bg-image="/img/9400_org_transparent.png" 
    >
        <template #button>
            <NuxtLink :to="socialLinks.mail.link">
             <TheButton label="Napiš mi" icon="fa:envelope-o" pulse/>
            </NuxtLink >
        </template>
    </HeaderContainerRounded>

    <SectionsContainer >
        <div class="flex flex-col gap-12 items-center p-4">
            <div class="flex flex-col items-center">
                <h2>Vyber si svou masáž</h2>
                <p class="highlighted-text text-center max-w-[800px]">
                    V <span>příjemné atmosféře</span> Ti dopřeju <span>relax</span> pro Tvé unavené a namáhané tělo a to i v <span>pohodlí Tvého domova</span>. Masáže Ti pomohou se <span>zrelaxovat</span>, na chvíli vypnout hlavu, <span>uvolnit</span> zatuhlé svaly a lépe <span>připravit</span> celé tělo <span>na porod</span>. 
                </p>
            </div>
            <div class="flex rounded-full w-[300px] h-[300px] sm:w-[400px] sm:h-[400px] overflow-hidden">
                <NuxtImg src="/img/9175_org.jpg" 
                    class="w-full object-cover object-center"
                    alt=""
                    densities="1x"
                    sizes="sm:100vw "
                    format="webp"
                    quality="90"
                />
            </div>
        </div>
    </SectionsContainer>

    <SectionsContainer >
        <CardsPanel :data="cardsContent" />
    </SectionsContainer>

    <SectionsContainer  bg-color="bg-gray-100">
        <div class="flex flex-col items-center gap-12 p-4">
            <div class="flex flex-col items-center">
                <h2>V pohodlí</h2>
                <p class="highlighted-text text-center max-w-[800px]"> 
                    <span>Masáž</span> si můžeš dopřát v <span>pohodlí svého domova</span> nebo přijet za mnou do <span>Kroměříže</span>.
                </p>
    
            </div>
            <NuxtLink :to="socialLinks.mail.link">
                <TheButton label="Napiš mi" icon="fa:envelope-o" pulse/>
            </NuxtLink >
            <div class="flex flex-col lg:flex-row gap-8 ">
                <div class="flex rounded-xl overflow-hidden max-h-[400px] max-w-[400px] lg:max-w-none">
                    <NuxtImg src="/img/29_org.jpeg" 
                        class="w-full object-cover object-center"
                        alt=""
                        densities="1x"
                        sizes="sm:100vw "
                        format="webp"
                        quality="90"
                    />
                </div>
                <div class="flex rounded-xl overflow-hidden max-h-[400px] max-w-[400px] lg:max-w-none">
                    <NuxtImg src="/img/28_org.jpeg" 
                        class="w-full object-cover object-center"
                        alt=""
                        densities="1x"
                        sizes="sm:100vw md:100vw "
                        format="webp"
                        quality="90"
                    />
                </div>
            </div>
        </div>
    </SectionsContainer>
    <SectionsContainer full-width>
            <div class="flex flex-col gap-12 items-center">
                <h2>Měj představu toho co tě čeká</h2>
                <GalleryFullWidth :images="fourImages" />
            </div>
    </SectionsContainer>
    <SectionsContainer >
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

const cardsContent = ref([
    {
        title: "Relaxační masáž",
        description: [
            "voňavá masáž celého těla",
            "od chodidel až po šíji",
            "uvolnění pánve a beder",
            "kdykoliv během těhotenství"
        ]
    },
    {
        title: "Rebozo masáž",
        description: [
            "za pomoci šátku rebozo",
            "uvolnění svalů a kloubů",
            "příprava pánve na porod",
            "vhodná pří bolestech kyčlí a beder"
        ]
    },
    {
        title: "Celotělová příprava na porod",
        description: [
            "harmonizace svalového řetězení",
            "pasivní protažení těla",
            "baňkování",
            "od 36. tt"
        ]
    }
])
const fourImages = ref([
    { src: '/img/9412_org.jpg' },
    { src: '/img/9409_org.jpg' },
    { src: '/img/9400_org.jpg' },
    { src: '/img/9391_org.jpg' },
    { src: '/img/9166_org.jpg' },
    { src: '/img/9175_org.jpg' },
    { src: '/img/9149_org.jpg' },
    { src: '/img/9128_org.jpg' },
    { src: '/img/9134_org.jpg' },
])
</script>