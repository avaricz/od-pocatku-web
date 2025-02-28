<template>
    <HeroHeader />
       
    <SectionsContainer 
        :background-color="'gray-lt'" 
        :justify-header="'center'" 
        title="Jsem v tom s Tebou" 
        subtitle="„Protože na počátku záleží.“" 
    >
        <template #content>
            <SideMenuCards 
            :content="infoCards"
            />
        </template>
    </SectionsContainer>

    <SectionsContainer 
        v-if="events"
        :justify-header="'center'" 
        title="Události" 
        subtitle="„..., kterých se můžeš zůčastnit i ty“" 
    >
        <template #content>
            <div class="events-container">
                <EventCard 
                    v-for="event in events" 
                    :key="event.id" 
                    :event="event"
                />
            </div>
        </template>
    </SectionsContainer>

</template>

<script setup lang="ts">
import type { Event, InfoCard } from '~/types/types'; 
import { EventModel } from '~/models/EventModel';

const  data  = await $fetch<Event[]>('/api/futureEvents')

const events = computed(() => data?.map(event => new EventModel(event)) || [])

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
        img: "img/9071_org.jpg"
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
        img: "img/7_org.png"
    },
    {
        title: "Zpracování placenty",
        description: [
            "placenta jako přirozený životabudič",
            "návrat energie a živin do těla",
            "kapsle",
            "tinktura",
        ],
        img: "img/36_org.jpeg"
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
        img: "img/9320_org.jpg"
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
        img: "img/9249_org.jpg"
    },
]
</script>

<style lang="scss" scoped>
pre{
    max-width: 600px;
}
.events-container {
    display:flex;
    gap: 2rem;
}
</style>