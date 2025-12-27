<template>
  <HeaderContainerRounded bg-image="/img/9101_org.jpg" title="Bioenergetika - práce s tělem a emocemi"
    description="Zážitkový workshop o vzájemném provázání a ovlivňování našeho těla a psychiky." overlay>
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
            Možná jsi už slyšela o tom, jak dlouhodobé <span>špatné držení těla</span> (např. časté sezení s kulatými
            zády) podněcuje mozek k produkování <span>hormonů</span>, které v těle vytvářejí <span>špatnou
              náladu</span>.

          </p>
          <p class="highlighted-text">
            A už sis jistě zažila, že v pocitu <span>skleslosti a deprese</span> je velmi těžké <span>držet se
              zpříma</span> a mít sebejistý krok.
          </p>
          <p>

            Není to ezoterika. Není to nehmotná energie. Je to naše tělo. Je to náš základ. Je to něco, co dává smysl a
            co
            Ti může velmi ovlivnit život.
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
  { src: "img/47_org.jpeg" },
  { src: "img/48_org.jpeg" },
  { src: "img/49_org.jpeg" },
  { src: "img/54_org.jpeg" },
  { src: "img/55_org.jpeg" },
  { src: "img/56_org.jpeg" },
])


const cards = [
  {
    title: "Co Tě čeká",
    description: [
      "Dozvíš se, jak je důležité umět se svým tělem zacházet tak, aby v něm neustále proudila energie, nevytvářely se blokády a náš mozek tak nebyl podněcován k vytváření hormonů, které negativně ovlivňují naši emoční rovnováhu.",
      "Řada bioenergetických cviků na oblast pánve, krku a chodidel, sloužícíh k očistě i jako prevence. Mohou být pro Tebe součástí důležité psychohygieny.",
    ]
  },
  {
    title: "Segment pánve",
    description: [
      "Procítění oblasti pánevního dna.",
      "Co s Tebou Tvé pánevní dno už všechno prožilo?",
      "Pánevní dno jako náš emoční barometr. Jaké emoce jsou v něm uloženy? Jak pánev zase oživit, rozproudit, probrat a začít si užívat.",
    ]
  },
  {
    title: "Segment krku",
    description: [
      "Oblast komunikace se světem i se sebou. Téma upřímnosti a hodné holky.",
      "Co zůstalo nevyřčeno, spolknuto? Kdy jsme drželi jazyk za zuby? Co chceme vykřičet do světa?",
      "Zaťaté čelisti, bruxismus, časté anginy, ztráty hlasu, nemoci štítné žlázy… Zkrátka psychosomatika jako vyšitá.",
    ]
  },
  {
    title: "Segment chodidel",
    description: [
      "Jaký je Tvůj životní postoj? Stojíš nohama pevně na zemi nebo létáš v oblacích?",
      "Kam Tě nohy nesou a můžeš se na sebe spolehnout?",
      "Cítíš se bezpečně tam, kde jsi? Vnímáš svoje kořeny? Máš odkud čerpat energii?",
    ]
  }
];

</script>