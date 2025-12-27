<template>
  <HeaderContainerRounded bg-image="/img/9103_org.jpg" title="Beseda pro dívky o dospívání a začínající cykličnosti"
    bg-color="bg-gray-100"
    description="Na základních školách a v rodinných centrem pořádám besedy s dívkami ve věku 9 - 12 let. Přednášku lze objednat i do Vaší školy či centra. "
    overlay>
  </HeaderContainerRounded>

  <SectionsContainer bg-color="bg-gray-100">
    <div class="flex flex-col items-center p-4">

      <CardsPanelSimple :content="cards" />
    </div>
  </SectionsContainer>



  <SectionsContainer>
    <div class="flex flex-col items-center p-4 gap-12">
      <div class="flex flex-col items-center p-4 gap-4">
        <div class="flex flex-col justify-center items-center gap-8 max-w-[700px]  rounded-xl p-4">
          <p class="text-center">
            Délku besedy i její náplň lze přizpůsobit dle Vašich požadavků.
          </p>
          <p>
            Možno obohatit o praktická cvičení, tanec, tvorbu, sdílení…
          </p>
        </div>
      </div>
      <PricePanel title="Standard" price="1.800" price-label="90 min" show-flower
        subtitle="Beseda pro dívky o dospívání a začínající cykličnosti" />
    </div>

  </SectionsContainer>
  <SectionsContainer>
    <div class="flex flex-col items-center p-4 gap-12">
      <div class="flex flex-col lg:flex-row max-w-[400px] lg:max-w-none lg:max-h-[400px] gap-4">
        <div class="flex rounded-xl overflow-hidden " v-for="img in images">
          <NuxtImg :src="img.src" class="w-full object-cover object-center" alt="" densities="1x" sizes="sm:100vw "
            format="webp" quality="90" />
        </div>
      </div>
    </div>

  </SectionsContainer>
</template>

<script setup>
import DefaultButton from '~/components/buttons/DefaultButton.vue';

const cards = [
  {
    title: "Temata",
    description: [
      "jaké to je být na prahu dospívání",
      "co se děje s mým tělem a co můžu očekávat",
      "o ženské cykličnosti - co můžu v těle cítit a jak s tím naložit",
      "když přichází měsíčky - jaké to je, jak o sebe pečovat",
      "anatomie ženské pánve, pánevního dna a ženských pohlavních orgánů",
      "přijetí mé ženské stránky a všeho, co k tomu patří",
      "jak zdravě vnímat svou sebehodnotu",
    ]
  },
];

const images = ref([
  { src: "img/9473_org.jpg" },
  { src: "img/9458_org.jpg" },
  { src: "img/9101_org.jpg" },
  { src: "img/63_org.jpeg" },
  { src: "img/59_org.jpeg" },
])
</script>