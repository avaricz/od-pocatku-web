<template>
    <HeaderContainerRounded 
        bg-image="/img/46_org.jpeg" 
        title="Kurz posilování středu těla a pánevního dna"
        description="Pravidelně probíhající kurz pro ženy, který je zaměřen na posílení hlubokého stabilizačního systému. Vhodný pro ženy všech věkových kategorií, pro ty, co se cvičením teprve začínají, i pro ty, co se chtějí udržet v kondici. "
        overlay
    >
      <template #button>
            <NuxtLink to="/events">
              <TheButton label="Kurzy" icon="fa:calendar" pulse/>
            </NuxtLink >
      </template>
    </HeaderContainerRounded>
    <SectionsContainer bg-color="bg-gray-50">
          <div class="flex flex-1 flex-col-reverse lg:flex-row gap-4 md:gap-0 w-full h-full">
            <div class="flex flex-1  items-center justify-center p-4">
              <NuxtImg 
                src="img/34_org.png"  
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
              <h2>Zdravý pohyb</h2>
              <p class="highlighted-text ">
                Při cvičení dbám na správnou <span>stabilizaci těla</span>, zpevňuji tělo <span>od základu</span>. Neprovádíme cviky, kterými se přetěžují záda či neposílené svalové partie! Jde mi o <span>dlouhodobý efekt</span>.
              </p>
            </div>
          </div>
    </SectionsContainer>
    <SectionsContainer  bg-color="bg-gray-100">
          <div class="flex flex-col items-center p-4">
            <h2 class="text-center">Péče o tělo</h2>
         
            <CardsPanelSimple :content="cards"/>
          </div>
    </SectionsContainer>

    <SectionsContainer bg-color="bg-gray-50">
      <div class="flex flex-1 flex-col lg:flex-row gap-4 md:gap-0 w-full h-full">
        <div class="
        flex flex-col flex-1 
        items-center md:items-center justify-center 
        p-4 md:p-8 
        text-center lg:text-left"
        >
          <h2 class="text-center">Co Tě čeká</h2>
          <div class="flex flex-col gap-4 mb-12 max-w-[800px]">

            <p class="highlighted-text text-center">
              Kromě posilky bříška zařazujeme i cviky na <span>posílení zádových svalů a hýždí</span>. 
              Nechybí <span>strečink</span> ani cviky na <span>mobilitu</span>.
            </p>
            <p class="highlighted-text text-center  ">
              Nechybí <span>strečink</span> ani cviky na <span>mobilitu</span>.
            </p>
            <p class="highlighted-text text-center">
              Nikdy neodejdeš bez závěrečné <span>relaxace</span>. 
            </p>
          </div>
          <NuxtLink to="/events">
            <TheButton label="Kurzy" icon="fa:calendar" filled pulse />
          </NuxtLink>
      </div>
      <div class="flex flex-1  items-center justify-center p-4">
        <NuxtImg 
          src="img/35_org.png"  
          width="400px" 
          height="400px" 
          class="rounded-full"
          densities="1x"
          sizes="400px"
          format="webp"
          quality="100"
        />
      </div>
      </div>
    </SectionsContainer>

  <SectionsContainer bg-color="bg-gray-100">
    <div class="flex flex-col items-center p-4 gap-20">
      <div class="flex flex-col items-center">

        <h2 class="text-center">Příjemná atmosféra</h2>
        <p class="highlighted-text text-center mb-12 max-w-[800px]">
          Cvičení probíhá v <span>příjemné atmosféře</span>, kdy i po cvičení odcházíš <span>zrelaxovaná</span>. Cílem je, aby se každá žena po skončení lekce cítila skvěle a těšila se na další týden!
      </p>
      <NuxtLink to="/events">
          <TheButton label="Kurzy" icon="fa:calendar" filled pulse />
        </NuxtLink>
    </div>

    <div class="flex flex-col lg:flex-row gap-8">
        <div class="flex rounded-xl overflow-hidden aspect-square max-w-[400px] max-h-[400px]">
            <NuxtImg src="/img/46_org.jpeg" 
                class="w-full object-cover object-center  "
                alt=""
                densities="1x"
                sizes="sm:100vw "
                format="webp"
                quality="90"
            />
        </div>
        <div class="flex rounded-xl overflow-hidden aspect-square max-w-[400px] max-h-[400px]">
            <NuxtImg src="/img/49_org.jpeg" 
                class="w-full object-cover object-center "
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
      <div class="flex flex-col items-center p-4 gap-12">
        <div class="flex flex-col items-center p-4 gap-4">
          <h2 class="text-center">Kurzy</h2>
          <p class="text-center">Kurzy probíhají v Kroměříži každou středu a čtvrtek.</p>
          <p class="text-center">Aktuálně kurzy zaplněny - možno si rezervovat místo od září 2025</p>
        </div>
        <PricePanel 
          title="Standard"
          price="2.250"
          price-label="15 lekcí"
          show-flower
          subtitle="Kurz posilování středu těla a pánevního dna"
        />
      </div>
      
    </SectionsContainer>
</template>

<script setup>
const cards = [
  {
    title: "Na co se zaměřuji",
    description: [
      "stabilizaci těla",
      "pevný core",
      "aktivaci pánevního dna",
      "aktivaci bránice",
      "mezilopatkové svaly",
      "zpevnění hýždí",
      "mobilitu",
      "relaxaci"
    ]
  },
  {
    title: "Co si cvičením můžeš vyřešit",
    description: [
      "bolavá záda",
      "problémy s inkontinencí",
      "diastázu",
      "povolené bříško",
      "horní a dolní zkřížený syndrom",
      "zkrácené a ochablé svaly",
      "špatné držení těla",
      "špatné dechové stereotypy"
    ]
  },
];

</script>