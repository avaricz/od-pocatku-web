<template>
  <HeaderContainerRounded bg-image="/img/9101_org.jpg" title="Tajemství pánevního dna"
    description="Workshop cvičení pánevního dna metodou 3x3 podle Renaty Sahani - propojení přístupu západu a východu."
    overlay>
    <template #button>
      <CoursesButton />
    </template>
  </HeaderContainerRounded>
  <SectionsContainer bg-color="bg-gray-50">
    <div class="flex flex-col">
      <div class="flex flex-1 flex-col lg:flex-row gap-4 md:gap-0 w-full h-full">
        <div class="flex flex-1  items-center justify-center p-4">
          <NuxtImg src="img/9103_org.jpg" width="400px" height="400px" class="rounded-full" densities="1x" sizes="400px"
            format="webp" quality="100" />
        </div>
        <div class="
              flex flex-col flex-1 gap-2
              items-center lg:items-start justify-center 
              p-4 md:p-8 
              text-center lg:text-left">
          <p class="highlighted-text">
            S pánevním dnem jsem <span>začala</span> pracovat <span>po třetím porodu</span>, kdy jsem trpěla velkými
            <span>bolestmi</span> stydké spony a <span>prolapsem</span> močového měchýře. Moje porodní asistentka mě
            tedy
            <span>navedla metodou 3x3</span> na to, jak mám <span>se svým tělem</span> <span>pracovat</span>, což mi
            otevřelo úplně <span>nové obzory</span> a <span>vnímání</span> svého vlastního těla…
          </p>
          <p class="highlighted-text">
            Nejen, že jsem si dokázala <span>vyřešit</span> velký zdravotní problém, ale <span>obohatila</span> jsem se
            o
            nové <span>znalosti</span>. Můžu s klidem říct, že od té doby své <span>ženské tělo</span>,
            <span>sexualitu</span> a <span>přístup k pohybu</span> vnímám <span>úplně jinak</span> a život si
            <span>užívám</span> tak nějak víc…
          </p>
          <p class="highlighted-text">
            Věděla jsem, že jednou chci i já <span>tímto způsobem</span> <span>pomáhat</span> druhým ženám a především
            dbát
            na zdravotní <span>prevenci</span>.
            Dnes jsem jako <span>lektorka Školy pánevního dna</span> předala metodu 3x3 už <span>stovkám žen</span> a to
            na
            <span>workshopech</span>, pravidelných <span>kurzech</span> i <span>individuální</span> práci – především s
            <span>těhotnými</span> ženami.
          </p>
          <p class="highlighted-text">
            Nikdy není pozdě na to začít.
          </p>
          <p class="highlighted-text mt-4">
            Domluv si soukromou lekci:
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
  { src: "img/9_org.jpeg" },
  { src: "img/12_org.jpeg" },
  { src: "img/32_org.jpeg" },
  { src: "img/46_org.jpeg" },
  { src: "img/47_org.jpeg" },
  { src: "img/48_org.jpeg" },
  { src: "img/49_org.jpeg" },
  { src: "img/52_org.jpeg" },
  { src: "img/53_org.jpeg" },
  { src: "img/57_org.jpeg" },
  { src: "img/59_org.jpeg" },
  { src: "img/60_org.jpg" },
  { src: "img/66_org.jpg" },
  { src: "img/68_org.png" },
])


const cards = [
  {
    title: "O co jde",
    description: [
      "pánevní dno nejsou jen svaly - je to náš emoční barometr úzce propojen s psychikou, ženským zdravím a sexualitou",
      "mnoho žen vnímá, že by v této oblasti chtěly začít se sebou pracovat, ale vlastně neví jak...",
      "ukážu Ti, jak vnímat i ty nejhlubší zákoutí svého těla, propojit se se svou ženskou podstatou a oživit své prožívání",
      "naučíš se aktivovat a posilovat své pánevní dno zdravým způsobem",
      "přijetí ženské stránky a všeho, co k tomu patří",
    ]
  },
  {
    title: "Co je náplní workshopu",
    description: [
      "cvičení",
      "návod, jak zacházet se svým pánevním dnem během dne při běžných činnostech",
      "vedená meditace na propojení se svým pánevním dnem",
      "bioenergetické techniky",
      "dechové techniky",
      "relaxace",
    ]
  },
  {
    title: "Workshop je vhodný pro ženy",
    description: [
      "ve II. trimestru těhotenství",
      "ty, co plánují otěhotnět",
      "po porodu",
      "trpící inkontinencí",
      "s diastázou",
      "které řeší neplodnost",
      "v období před menopauzou či v menopauze",
      "před/po gynekologickém zákroku"
    ]
  }
];

</script>