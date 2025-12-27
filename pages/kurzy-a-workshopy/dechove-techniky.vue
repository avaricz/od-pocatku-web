<template>
  <HeaderContainerRounded bg-image="/img/9_org.jpeg" title="Dechové techniky"
    description="Využití dechu jako mocného nástroje k zvědomění i posílení těla, vnitřního rozproudění a oživení tělesného prožívání."
    overlay>
    <template #button>
      <CoursesButton />
    </template>
  </HeaderContainerRounded>
  <SectionsContainer bg-color="bg-gray-50">
    <div class="flex flex-col">
      <div class="flex flex-1 flex-col lg:flex-row gap-4 md:gap-0 w-full h-full">
        <div class="flex flex-1  items-center justify-center p-4">
          <NuxtImg src="img/9473_org.jpg" width="400px" height="400px" class="rounded-full" densities="1x" sizes="400px"
            format="webp" quality="100" />
        </div>
        <div class="
              flex flex-col flex-1 gap-2
              items-center lg:items-start justify-center 
              p-4 md:p-8 
              text-center lg:text-left">
          <p class="highlighted-text">
            Inspirováno <span>Školou pánevního dna</span>, <span>jógou</span> a <span>tantrickými</span> technikami.

            Velmi <span>prožitkový</span> workshop na jehož konci se budeš stoprocentně <span>cítit jinak</span>, než na
            začátku.


          </p>
          <MailButton class="mt-4" />
        </div>
      </div>
    </div>
  </SectionsContainer>
  <SectionsContainer bg-color="bg-gray-100">
    <div class="flex flex-col items-center p-4 gap-12">
      <CardsPanelSimple :content="cards" />
    </div>
  </SectionsContainer>
  <SectionsContainer>
    <div class="flex flex-col items-center p-4 gap-12">
      <h2 class="text-center">Aktuální termíny workshopů nalezneš v událostech.</h2>

      <CoursesButton />

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
import CoursesButton from '~/components/buttons/CoursesButton.vue';
import MailButton from '~/components/buttons/MailButton.vue';


const images = ref([
  { src: "img/9458_org.jpg" },
  { src: "img/68_org.png" },
  { src: "img/49_org.jpeg" },
  { src: "img/12_org.jpeg" },
])


const cards = [
  {
    title: "Co Tě čeká",
    description: [
      "aktivace bránice - uvědomění si její funkce",
      "využití dechu k posílení hlubokého stabilizačního systému",
      "řízení dechu a využití jeho potenciálu",
      "aktivace pánevního dna za pomocí dechu - oživení sexuálního prožitku",
      "rozproudění vnitřní energie - harmonizace mužsko-ženského principu v nás",

    ]
  },
];

</script>