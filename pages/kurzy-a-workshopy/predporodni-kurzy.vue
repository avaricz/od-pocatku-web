<template>
    <HeaderContainerRounded 
        bg-image="/img/9071_org.jpg" 
        title="Předporodní kurzy"
        description="Nabízím několik typů předporodních kurzů, ze kterých si můžeš vybrat. Aktuální termíny kurzů najdeš v událostech."
        overlay
    >
      <template #button>
            <NuxtLink to="/events">
              <TheButton label="Kurzy" icon="fa:calendar" pulse/>
            </NuxtLink >
      </template>
    </HeaderContainerRounded>
    <SectionsContainer bg-color="bg-gray-50">
          <div class="flex flex-1 flex-col lg:flex-row gap-4 md:gap-0 w-full h-full">
            <div class="flex flex-1  items-center justify-center p-4">
              <NuxtImg 
                src="img/9249_org.jpg"  
                width="400px" 
                height="400px" 
                class="rounded-full"
                densities="1x"
                sizes="400px"
                format="webp"
                quality="100"
              />
            </div>
            <div class="
              flex flex-col flex-1 
              items-center md:items-start justify-center 
              p-4 md:p-8 
              text-center lg:text-left"
            >
              <h2>Kompletní příprava na porod</h2>
              <p>
                Na mých předporodních kurzech si projdeš kompletní přípravou na porod ve všech jeho aspektech. Připravíš se po stránce fyzické i mentální tak, že půjdeš k porodu sebevědomá, budeš správně motivovaná a budeš porod vnímat jako zážitek, který v sobě nese obrovský potenciál pro další osobnostní růst. 
              </p>
            </div>
          </div>
    </SectionsContainer>
    <SectionsContainer  bg-color="bg-pink-50">
          <div class="flex flex-col items-center p-4">
            <h2 class="text-center">Témata, která společně probereme</h2>
            <p class="text-center mb-24 max-w-[800px]">
              Získejte ucelený přehled o fyzické i psychické přípravě na porod. Od dechových technik po práci s emocemi – vše, co potřebujete k hladkému průběhu porodu i šestinedělí.
            </p>
            <CardsPanelSimple :content="cards"/>
          </div>
    </SectionsContainer>
    <SectionsContainer bg-color="bg-pink-100">
            <div class="flex flex-col items-stratch lg:flex-row p-4 gap-8">
                <div class="flex flex-1 rounded-xl overflow-hidden">
                    <NuxtImg 
                        src="/img/31_org.jpeg"
                        class="w-full object-cover"
                        alt=""
                        format="webp"
                        densities="1x"
                        sizes="sm:100vw md:100vw lg:100vw"
                    />
                </div>
                <div class="flex flex-col flex-1 items-center justify-center md:p-4 gap-12">
                  <InfoList 
                  title="Druhy předporodních kurzů"
                  :content="topics"
                  >
                  </InfoList>
                  <NuxtLink to="/events">
                      <TheButton label="Kurzy" icon="fa:calendar" filled pulse/>
                  </NuxtLink>
                </div>
        </div>
    </SectionsContainer>
</template>

<script setup>
const topics = [
  {
    header: "Tematicky zaměřené kurzy",
    description: "pouze pro těhotné ženy v rodinném centru v Kroměříži - opakovaně pořádaný cyklus 3 na sebe navazujících 3h workshopů na témata: Fyzická příprava na porod, Porod a vše kolem něj a Šestinedělí, kojení a rané mateřství"
  },
  {
    header: "Zážitkový předporodní kurz",
    description: "víkendový kurz, jeho součástí jsou pohybové lekce, muzikoterapie, rebozo masáž, bylinkový workshop, přednáška o znakování s miminky, vedené meditace k porodu, a mnoho dalšího" // TODO PROKLIK na stránku
  },
  {
    header: "Předporodní kurz pro páry ",
    description: "svižný, praktický a za mě v tomto směru jedinečný předporodní kurz zaměřený na muže - trénink úlevových technik, masáží a poloh v páru pro snadnější porod"
  }
];

const cards = [
  {
    title: "Fyzická příprava na porod",
    description: [
      "dechové techniky",
      "práce s pánevním dnem",
      "prevence poranění",
      "polohování pro různé situace"
    ]
  },
  {
    title: "Práce s psychikou",
    description: [
      "překonání strachu",
      "zvládání bolesti",
      "objevení vnitřní síly",
      "práce s vizualizacemi a afirmacemi"
    ]
  },
  {
    title: "Průběh porodu",
    description: [
      "co dělat v jeho začátku a během I. doby porodní",
      "jak pracovat s tělem a dechem během II. doby porodní",
      "porodu placenty",
      "bonding = zlatá hodinka"
    ]
  },
  {
    title: "Kojení a šestinedělí",
    description: [
      "jak dobře nastartovat kojení",
      "jak podpořit samopřisátí miminka",
      "vše o technice kojení",
      "jak o sebe pečovat v šestinedělí"
    ]
  },
  {
    title: "O porodu a jeho potenciálu",
    description: [
      "porod jako přechodový rituál",
      "role dítěte během porodu",
      "nerodí se jen matka, ale i nová žena",
      "jak z porodu vytěžit maximum pro svůj rozvoj"
    ]
  }
];

</script>