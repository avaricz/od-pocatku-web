<template>
    <HeroHeader />
       
    <SectionsContainer bg-color="bg-gray-100">
        <div class="flex flex-col gap-12 p-4 ">
            <div class="flex flex-col items-center">
                <h2 class="text-center">Jsem v tom s Tebou</h2>
                <p class="highlighted-text text-center">„Protože na počátku záleží.“</p>
            </div>

            <div 
                class="
                grid grid-cols-1 gap-2 
                sm:grid-cols-[repeat(2,_minmax(340px,_1fr))] 
                lg:grid-cols-[340px_minmax(340px,_1fr)_340px]"
            >
                
                <CardPanelSquare 
                    v-for="card in infoCards"
                    :title="card.title"
                    :description="card.description"
                    :image="card.img"
                    :overlayColor="card.overlayColor"
                    :textColor="card.textColor"
                >
                    <template #button>

                        <NuxtLink :to="card.btnLink">
                            <TheButton :label="card.btnLabel" :icon="card.btnIcon" pulse/>
                        </NuxtLink >
                    </template>
                </CardPanelSquare>
            
            </div>

        </div>
    </SectionsContainer>
    
    <ScrollableContainer>
        <div class="flex flex-col items-center gap-16">
            <div class="flex flex-col items-center">
                <h2 class="text-center">Události</h2>
                <p class="text-center">„..., kterých se můžeš zůčastnit i ty“</p>
            </div>
            <div v-if="events" class="flex gap-8">
                <EventCard 
                    v-for="(event, index) in events" 
                    :key="index" 
                    :event="event"
                />
            </div>
            <NoEvents v-else />
        </div>
    </ScrollableContainer>

    <SectionsContainer>
        <div class="flex flex-col items-center gap-16 p-4">
           <div>
                <h2>Reference</h2>
           </div>
           <div class="max-w-[800px] min-h-[500px] flex items-center justify-center">
            <TheReference 
                :references="references"
            />
           </div>
        </div>
    </SectionsContainer>


</template>

<script setup lang="ts">
import type { Event, InfoCard } from '~/types/types'; 
import { EventModel } from '~/models/EventModel';
import { socialLinks } from '#imports';
import rawEvents from '@/data/events.json'

const events = computed(() => {
    const filteredEvents = rawEvents.filter(event => {
        const now = new Date()
        const eventEnd = new Date(event.date_end )
        return eventEnd > now
        
    }).map(event => new EventModel(event))

    return filteredEvents
})


/* const  data  = await $fetch<Event[]>('/api/futureEvents')

const events = computed(() => data?.map(event => new EventModel(event)) || []) */

const infoCards: InfoCard[] = [
    {
        title: "Předporodní kurzy a péče o těhotné",
        description: [
            "kompletní příprava na porod",
            "kontinuální podpora a péče",
            "masáže",
            "rebozo",
            "spinning babies",
            "předporodní rituál",
        ],
        img: "img/9071_org.jpg",
        overlayColor: "bg-gray-950",
        textColor: "text-gray-50",
        btnLabel: "Kurzy",
        btnLink: "/events",
        btnIcon: "fa:calendar"
    },
    {
        title: "Zpracování placenty",
        description: [
            "placenta jako přirozený životabudič",
            "návrat energie a živin do těla",
            "kapsle",
            "tinktura",
        ],
        img: "img/36_org.jpeg",
        overlayColor: "bg-gray-950",
        textColor: "text-gray-50",
        btnLabel:"Více",
        btnLink: "/sluzby/zpracovani-placenty",
        btnIcon: ""
    },
    {
        title: "Laktační poradenství a péče v šestinedělí",
        description: [
            "podpora bezprostředně po porodu",
            "péče o jizvy a porodní poranění",
            "pomoc s kojením",
            "psychická opora",
            "masáž bříška bylinnými koulemi",
            "rituál zavírání kostí",
        ],
        img: "img/7_org.png",
        overlayColor: "bg-gray-950",
        textColor: "text-gray-50",
        btnLabel:"Napiš mi",
        btnLink: socialLinks.mail.link,
        btnIcon: "fa:envelope-o"
    },
    
    {
        title: "Vzdělávání",
        description: [
            "besedy pro dívky o dospívání a začínající ženské cykličnosti",
            "workshopy Tajemství pánevního dna",
            "workshopy o práci s tělem - bioenergetika, dechové techniky",
            "předporodní kurzy",
            "e-booky",
        ],
        img: "img/9249_org.jpg",
        overlayColor: "bg-gray-950",
        textColor: "text-gray-50",
        btnLabel: "Události",
        btnLink: "events",
        btnIcon: "fa:calendar"
    },
    {
        title: "Kurzy zaměřené na zdravý pohyb",
        description: [
            "posilování pánevního dna",
            "posilování středu těla",
            "pochopení hlubokého stabilizačního systému",
            "individuální cvičební plány",
            "diagnostika",
        ],
        img: "img/9320_org.jpg",
        overlayColor: "bg-gray-950",
        textColor: "text-gray-50",
        btnLabel: "Události",
        btnLink: "events",
        btnIcon: "fa:calendar"
    },
    {
        title: "Kdo jsem",
        description: [
            "Matka tří dětí",
            "Dula",
            "Laktační poradkyně",
            "Lektorka Školy pánevního dna",
            "Funkční trenérka",
        ],
        img: "img/9452_org.jpg",
        overlayColor: "bg-gray-950",
        textColor: "text-gray-50",
        btnLabel:"Více",
        btnLink: "/about"
    },
]

const references = ref([
  {
    reference: "Předporodní kurz vřele doporučuji. Vše probíhalo v přátelské atmosféře. Budoucím maminkám dokáže Lucka nabídnout spoustu alternativních způsobů jak zvládnout porod, přípravu na něj i rekonvalescenci a péči o miminko. Nejen prvorodičky si přijdou na své:-)",
    name: "Vendula Ž.",
    photo: ""
  },
  {
    reference: "Chci poděkovat Lucii za workshop, kterého jsem se zúčastnila, a jsem ráda, že tady v Kroměříži něco takového probíhá, hodně mi to dalo i jaksi uklidnilo, bylo to moc fajn, jsi fakt dobrá 😊…",
    name: "Denisa",
    photo: ""
  },
  {
    reference: "Lucie dokáže svým projevem zaujmout a předat to podstatné nejen budoucím maminkám, ale i ženám po porodu. Orientuje se v tom, co předává velmi dobře a je to znát. Z informací, které jsem na setkání s ní získala stále vycházím a pokud bych řešila nějaký problém, ráda se na ni s důvěrou znovu obrátím.",
    name: "Michaela D.",
    photo: ""
  },
  {
    reference: "Během svého pátého měsíce těhotenství jsem s Lucií absolvovala zážitkovou předporodní přípravu, která mi pomohla uzemnit a zklidnit některé mé divoké myšlenky a představy o těhotenství a porodu. Celý kurz probíhal ve velmi příjemném a intimním duchu s atmosférou, při níž jsem se nebála zeptat na jakoukoliv otázku ohledně těhotenství a porodu. Moc jsem ocenila i to, že jsem byla v kruhu dalších těhotných žen (prvo i vícerodiček), a tak jsem měla možnost slyšet pocity a emoce jiných, což také považuji za hodně přínosné. Tato předporodní příprava mi dala opravdu hodně a to jak z hlediska informací, praktických rad, podpory sebevědomí a vědomého přístupu k tomu, co vše se děje během porodu a bezprostředně po něm, a proč je dobré mít při sobě partnera či jinou oporu (např. to, proč si stát opravdu za svým a nenechat se zlomit nemocničním personálem, pokud bude jednat neadekvátně). Jako sportovně aktivní žena také oceňuji i to, že nás Lucie během kurzu provedla cviky a polohami vhodnými pro těhotenství a porod. Zkrátka velké díky Lucce za její práci a citlivý přístup, v němž se zrcadlí její životní zkušenosti matky tří dětí.",
    name: "Míša B.",
    photo: ""
  },
  {
    reference: "Úžasná žena s velkou mírou empatie a citem pro věc. Skvělá máma tří dětí. Díky, že něco takového v Kroměříži poskytuješ, Luci.",
    name: "Kristýna B.",
    photo: ""
  },
  {
    type: "Zpětná vazba na kurz Tajemství pánevního dna",
    reference: "Zdravím, Luci, jenom jsem Vám chtěla napsat, že včera to bylo super, je to pro mě úplně terapie to cvičení s Váma :) Vždycky se na to těším celý týden :)",
    name: "",
    photo: ""
  },
  {
    type: "Zpětná vazba na posilovací kurzy",
    reference: "Jsem spokojená moc! Už se nemůžu dočkat, až zase začneme! Ohledně cvičení se mi líbí, jak lekce vedete. Člověk se tak trochu zastaví a zamyslí se… Jestli chápete, co tím chci říct :) Není to prostě jen cvičení.",
    name: "Petra S.",
    photo: ""
  },
  {
    type: "Zpětná vazba na laktační poradenství",
    reference: "Poslední 4 kojení v noci a dnes úplně bez kloboučku.. Vyhráno asi ještě nemáme, ale věřím, že to půjde! Hrozně jsi mi pomohla, jsem ti moc vděčná.",
    name: "Tereza N.",
    photo: ""
  },
  {
    reference: "S Luckou jsem se poprvé potkala na jejích workshopech během těhotenství, které můžu každé (nejen) prvorodičce jen doporučit. K porodu jsem tak šla mnohem klidnější, měla jsem informace, jak pracovat se svým tělem před porodem, co si připravit do porodnice a co čekat po porodu. Kromě workshopů jsem Lucku využila i těsně před termínem k uvolnění těla pro porod, což byla moc příjemná a uklidňující návštěva :) Nejvíc jsem ale vděčná za pomoc a podporou při kojení. Z porodnice jsem odcházela s kloboučky, zoufalá,že bez nich nejsem schopná kojit a s Luckou se je podařilo během jediné její návštěvy odbourat a kojení je naprosto bez problémů. Lucka je moc příjemný, empatický a ochotný člověk, kdykoliv připraven pomoci, můžu ji jedině doporučit! :)",
    name: "Tereza K.",
    photo: ""
  },
  {
    reference: "Paní Lucii jsem vyhledala na začátku třetího trimestru z důvodu bolesti beder a také ze strachu z porodu. Lucka dokázala vždy vytvořit uklidňující atmosféru, kde jsem se cítila velmi dobře a vždy mi dokázala pomoc od bolesti. Na konci těhotenství jsem využívala i bylinky k přípravě porodu, které mi Lucka vždy nachystala. Lucka je velmi milá, empatická osoba,která se snaží vždy pomoci, reaguje pohotově.Děkuji za veškerou péči!",
    name: "Denisa P.",
    photo: ""
  }
]);

</script>