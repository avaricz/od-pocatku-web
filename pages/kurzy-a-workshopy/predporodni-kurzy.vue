<template>
    <HeaderContainerRounded 
        bg-image="/img/9071_org.jpg" 
        title="Předporodní kurzy"
        description="Nabízím několik typů předporodních kurzů, ze kterých si můžeš vybrat. Aktuální termíny kurzů najdeš v událostech."
        btn-label="Události"
        btn-link="/events"
    />
    <SectionsContainer>
        <template #content>
            <InfoWrapper>
                <p>
                    Na mých předporodních kurzech si projdeš kompletní přípravou na porod ve všech jeho aspektech. Připravíš se po stránce fyzické i mentální tak, že půjdeš k porodu sebevědomá, budeš správně motivovaná a budeš porod vnímat jako zážitek, který v sobě nese obrovský potenciál pro další osobnostní růst. 
                </p>
                    
                </InfoWrapper>
        </template>
    </SectionsContainer>
    <SectionsContainer :title="'Probíraná témata:'" background-color="gray-lt">
        <template #content>
            <CardsPanelSimple :content="cards"/>
        </template>
    </SectionsContainer>
    <SectionsContainer>
        <template #content>
            <div class="section3">
                <div class="img-wrapper">
                    <NuxtImg 
                        src="/img/31_org.jpeg"
                        alt=""
                        format="webp"
                        densities="1x"
                        sizes="sm:100vw md:100vw lg:100vw"
                    />
                </div>
                <InfoList 
                title="Druhy předporodních kurzů"
                :content="topics"
                >
                <template #buttons>
                    <NuxtLink to="/events">
                        <TheButton label="Události" filled pulse/>
                    </NuxtLink>
                </template>
            </InfoList>
        </div>
            
        </template>
    </SectionsContainer>
    <div>

FOTKY

9436

9425

9249

9071

9063

63

31

1

61

62

63

Předporodní kurz pro páry

15

45

44

43

31
    </div>
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

<style lang="scss" scoped>
.section3 {
    display: flex;
    flex-direction: column-reverse;
    gap: 3rem;
    padding: .5rem;
    @media (min-width:$medium-screen) {
        flex-direction: row;
        padding: 2rem;

    }
    &* {
        width: 50%;
    }
    .img-wrapper {
        display: flex;
        border-radius: 10px;
        overflow: hidden;
        img {
            width: 100%;
            object-fit: cover;
        }
    }
}
</style>