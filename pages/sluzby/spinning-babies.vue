<template>
    <HeaderContainerRounded 
        title="Spinning babies" 
        description="Pomohu Ti jemnými technikami usnadnit správné otočení miminka a připravit se na hladší porod."
        bg-image="/img/9175_org_transparent.png" 
    >
        <template #button>
            <NuxtLink :to="socialLinks.mail.link">
                <TheButton label="Napiš mi" icon="fa:envelope-o" pulse/>
            </NuxtLink >
        </template>
    </HeaderContainerRounded>
    <SectionsContainer>
        <div class="flex flex-col items-center gap-24 p-4 xl:p-0">

            <div class="flex flex-col items-center gap-12">
                <div class="flex flex-col items-center">
                    <h2 class="text-center">O co jde</h2>
                    <p class="highlighted-text text-center max-w-[800px]">
                        Máš miminko <span>koncem pánevním</span> nebo v <span>zadním postavení</span>? Není třeba zoufat. Spinning babies je soubor metod, které pomáhají <span>upravit polohu dítěte</span> v děloze vůči pánvi a usnadnit tak porod. Jde o sestavu <span>cviků</span>, <span>polohování</span> a <span>rebozo technik</span>, které pomohou vytvořit dítěti v děloze prostor a navést ho k aktivitě tak, aby <span>zaujalo v děloze správné postavení</span>.
                    </p>
                </div>
                <NuxtLink :to="socialLinks.mail.link">
                    <TheButton label="Napiš mi" icon="fa:envelope-o" pulse/>
                </NuxtLink >
            </div>
            
            <div class="flex flex-col lg:flex-row gap-8 ">
                <div class="flex rounded-xl overflow-hidden max-w-[500px]">
                    <NuxtImg src="/img/9412_org.jpg" 
                    class="w-full object-cover object-center"
                    alt=""
                    densities="1x"
                    sizes="sm:100vw "
                    format="webp"
                    quality="90"
                    />
                </div>
                <div class="flex rounded-xl overflow-hidden max-w-[500px]">
                    <NuxtImg src="/img/24_org.jpg" 
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
    <SectionsContainer bg-color="bg-pink-100">
        <CardsPanel :data="cardsContent" />
    </SectionsContainer>

    <SectionsContainer bg-color="bg-pink-200">
        <div class="flex flex-col lg:flex-row-reverse items-center gap-16 p-4">
            <div class="flex flex-1 flex-col items-center gap-12">

                <div class="flex  flex-col items-center">
                    <h2 class="text-center">Úspěšnost</h2>
                    <p class="highlighted-text text-center  max-w-[800px]">
                        I přes velké procento úspěšnosti je potřeba zmínit, že záleží na mnoha faktorech, jako je Tvá celková tělesná konstituce, velikost dítěte a jak blízko máš před porodem. Proto nikdy nelze zaručit 100% úspěšnost, ale <span>vždy dělám maximum. :)</span>
                    </p>
                </div>
                <NuxtLink :to="socialLinks.mail.link">
                    <TheButton label="Napiš mi" icon="fa:envelope-o" pulse/>
                </NuxtLink >
            </div>
            <div class="flex flex-1 items-center justify-center">

                <div class="flex  rounded-full aspect-square overflow-hidden max-w-[500px]">
                    <NuxtImg src="/img/9364_org.jpg" 
                    class="w-full object-cover object-center"
                    alt=""
                    densities="1x"
                    sizes="sm:100vw "
                    format="webp"
                    quality="90"
                    />
                </div>
            </div>
        </div>
    </SectionsContainer>
    <SectionsContainer bg-color="bg-gray-200">
        <div class="flex flex-wrap justify-center gap-8">
                    <div v-for="img in images" class="flex rounded-xl overflow-hidden max-w-[280px]">
                        <NuxtImg 
                            
                            :src="img.src" 
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
    {src: '/img/9166_org.jpg'},
    {src: '/img/2812_org.jpeg'},
    {src: '/img/30_org.jpeg'},
    {src: '/img/24_org.jpg'},

])


</script>
