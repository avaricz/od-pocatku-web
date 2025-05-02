<template>
  <HeaderContainerRounded bg-image="/img/9071_org.jpg" title="Zážitkový předporodní kurz"
    description="Kurz, kdy pro Tebe příprava na porod bude skutečným zážitkem."
    overlay>
    <template #button>
      <NuxtLink to="/events">
        <TheButton label="Kurzy" icon="fa:calendar" pulse />
      </NuxtLink>
    </template>
  </HeaderContainerRounded>
  <SectionsContainer bg-color="bg-gray-50">
    <div class="flex flex-1 flex-col lg:flex-row gap-4 md:gap-0 w-full h-full">
      <div class="flex flex-1  items-center justify-center p-4">
        <NuxtImg src="img/9241_org.jpg" width="400px" height="400px" class="rounded-full" densities="1x" sizes="400px"
          format="webp" quality="100" />
      </div>
      <div class="
              flex flex-col flex-1 
              items-center md:items-start justify-center 
              p-4 md:p-8 
              text-center lg:text-left">
        <h2>Víkendový kurz</h2>
        <p class="highlighted-text max-w-[800px]">
          Víkendový kurz v <span>malém kruhu</span> maximálně 6 těhotných žen, který si opravdu užiješ. Během dvou dní získáš <span>veškeré informace</span>, které k porodu i k ranému mateřství potřebuješ. To vše obohaceno o <span>praktické pohybové lekce</span> a další workshopy. V příjemné <span>voňavé atmosféře</span> a intimním prostředí, kde je dostatečný prostor pro sdílení a řešení právě Tvých otázek.
        </p>
      </div>
    </div>
  </SectionsContainer>
  <SectionsContainer bg-color="bg-gray-100">
    <div class="flex flex-col items-center p-4 gap-20">
      <div class="flex flex-col items-center">

        <h2 class="text-center">Co Tě čeká</h2>
        <p class="text-center mb-12 max-w-[800px]">
          Po tomto kurzu budeš odcházet <span>vyklidněná</span>, <span>motivovaná</span> a <span>natěšená na porod</span>, protože budeš skvěle <span>připravená</span> a budeš vědět, že pro Tebe může být skutečným <span>zážitkem</span>.
      </p>
      <NuxtLink to="/events">
          <TheButton label="Kurzy" icon="fa:calendar" filled pulse />
        </NuxtLink>
    </div>

    <div class="flex flex-col lg:flex-row gap-8">
        <div class="flex  rounded-xl overflow-hidden">
            <NuxtImg src="/img/9218_org.jpg" 
                class="w-full object-cover object-center"
                alt=""
                densities="1x"
                sizes="sm:100vw "
                format="webp"
                quality="90"
            />
        </div>
        <div class="flex  rounded-xl overflow-hidden">
            <NuxtImg src="/img/9101_org.jpg" 
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
  <SectionsContainer>
    <div class="flex flex-1 flex-col-reverse lg:flex-row items-center gap-20 p-4">
        <div class="flex flex-1  items-center justify-center ">
            <div class="flex  max-w-[400px] rounded-xl overflow-hidden">
                <NuxtImg src="/img/9148_org.jpg" 
                class="w-full object-cover object-center"
                alt=""
                densities="1x"
                sizes="sm:100vw "
                format="webp"
                quality="90"
                />
            </div>
        </div>
        <div class="flex flex-1 items-center flex-col gap-12">
            <div class="flex flex-col max-w-[800px] items-center">
                <h2>Dále tě čeká</h2>
                
                <SimpleList :content="list" />
              </div>
              <NuxtLink to="/events">
                  <TheButton label="Kurzy" icon="fa:calendar" filled pulse/>
              </NuxtLink>
        </div>
    </div>
  </SectionsContainer>
  <SectionsContainer >
    <PricePanel 
      title="Standard"
      price="4.900" 
      show-flower
      subtitle="Zážitkový předporodní kurz"
      list-title="Odneseš si"
      :content="content"
    />
  </SectionsContainer>
</template>

<script setup>
/* const images = ref([
  { src: './img/9483_org.jpg' },
  { src: './img/9241_org.jpg' },
  { src: './img/9218_org.jpg' },
  { src: './img/9148_org.jpg' },
  { src: './img/9101_org.jpg' },
  { src: './img/9070_org.jpg' }
]); */

const list = ref([

  "vše o porodu a jeho potenciálu",
  "kompletní fyzická i psychická příprava na porod",
  "praktický nácvik dechových technik",
  "lekce aktivace a relaxace pánevního dna",
  "vedená meditace s vizualizací pro porod",
  "hodina muzikoterapie",
  "bylinkový workshop",
  "vše o kojení a šestinedělí",
  "přednáška o znakování s miminky",
  "lekce těhotenských cviků, které tě připraví na porod",
  "rebozo masáž",
  "míchání bachových esencí",
]);

const content = ref([
  "těhotenskou bylinnou směs",
  "osobní bachovu esenci vytvořenou na míru",
  "skripta se všemi informacemi",
  "sadu funkčních cviků k porodu",
])

</script>