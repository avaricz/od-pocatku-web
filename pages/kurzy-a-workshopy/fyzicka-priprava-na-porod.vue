<template>
  <HeaderContainerRounded bg-image="/img/9320_org.jpg" title="Fyzická příprava na porod"
    description="Workshop pro ženy ve II. trimestru, který dokonale připraví na porod po fyzické stránce." overlay>
    <template #button>
      <CoursesButton />
    </template>
  </HeaderContainerRounded>
  <SectionsContainer bg-color="bg-gray-50">
    <div class="flex flex-1 flex-col lg:flex-row gap-4 md:gap-0 w-full h-full">
      <div class="flex flex-1  items-center justify-center p-4">
        <NuxtImg src="img/9312_org.jpg" width="400px" height="400px" class="rounded-full" densities="1x" sizes="400px"
          format="webp" quality="100" />
      </div>
      <div class="
              flex flex-col flex-1 
              items-center md:items-start justify-center 
              p-4 md:p-8 
              text-center lg:text-left">
        <h2>Fyzická příprava</h2>
        <p class="highlighted-text">
          Workshop vhodný pro těhotné ženy ideálně na <span>začátku II. trimestru</span>. Kromě <span>teoretických
            informací</span> Tě čekají série několika <span>praktických cvičení</span> pro udržení <span>fyzické
            kondice</span> během těhotenství. Porod tak bude snadnější a i Tvá regenerace po něm bude rychlejší.
        </p>
      </div>
    </div>
  </SectionsContainer>
  <SectionsContainer bg-color="bg-gray-100">
    <div class="flex flex-col items-center p-4">
      <h2 class="text-center">Příprava těla na porod a další měsíce</h2>
      <p class="text-center mb-24 max-w-[800px] highlighted-text">
        Objev důležité <span>principy</span> péče o své tělo <span>v těhotenství</span> i <span>po porodu</span>. Nauč
        se, jak správně pracovat s <span>hlubokým stabilizačním systémem</span>, <span>pánevním dnem</span> a
        <span>dechem</span>, jak <span>připravit</span> své tělo na porod a podpořit své <span>zotavení</span> v
        šestinedělí. Díky cíleným cvičením a technikám <span>předejdeš</span> bolestem, <span>získáš</span> kondici a
        <span>vytvoříš</span> pevný základ pro své mateřství.
      </p>
      <CardsPanelSimple :content="cards" />
    </div>
  </SectionsContainer>
  <SectionsContainer>
    <div class="flex flex-col items-center p-4 gap-12">
      <h2 class="text-center">Aktuální workshopy jsou vypsány v událostech.</h2>

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


const images = ref([
  { src: "img/9309_org.jpg" },
  { src: "img/9297_org.jpg" },
  { src: "img/9291_org.jpg" },
  { src: "img/9320_org.jpg" },
  { src: "img/9287_org.jpg" },
])


const cards = [
  {
    title: "Co zjistíš",
    description: [
      "informace o tom, jak funguje hluboký stabilizační systém a proč je v těhotenství důležitý",
      "jak funguje Tvé pánevní dno a k čemu ho potřebuješ",
      "co je břišní lis, nitrobřišní tlak a jak ho využít u porodu",
      "proč se Ti vyplatí si v těhotenství držet kondici",
      "jak své tělo relaxovat a uvolňovat ve III. trimestru",
      "jak se svým tělem zacházet během šestinedělí",
      "jak a kdy začít cvičit po porodu"
    ]
  },
  {
    title: "Co Tě čeká",
    description: [
      "sada cviků na zpevnění středu těla",
      "cviky na posílení i relaxaci pánevního dna",
      "aktivace svalového řetězení pro stabilizaci těla",
      "nalezení správného těžiště s rostoucím bříškem",
      "nácvik dechových technik pro aktivaci bránice",
      "dechové techniky pro jednotlivé fáze porodu",
      "techniky na rozvolnění pánve před porodem"
    ]
  },
  {
    title: "Čemu cvičením předejdeš",
    description: [
      "bolavým zádům",
      "povolenému pánevnímu dnu",
      "diastáze",
      "přepadávání bříška",
      "nepřirozenému těžišti těla",
      "nepřiměřenému zatěžování kloubů",
      "povolování či přetěžování určitých svalových skupin"
    ]
  }
];

</script>