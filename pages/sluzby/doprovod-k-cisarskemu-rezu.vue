<template>
    <HeaderContainer 
        :bg-image="'/img/9103_transparent_darker.png'"
        :title="'Doprovod k císařskému řezu'" 
    />
    <SectionsContainer :justify-header="'start'" title="Náplní setkávání je:">
        <template #content>
            <CardsPanel :data="cardsContent" />
        </template>
    </SectionsContainer>
    <SectionsContainer background-color="white" :justify-header="'center'" title="DÁLE TI V TĚHOTENSTVÍ NABÍZÍM:">
        <template #content>
            <div class="next-info">
                <ul>
                    <li>
                        rozvolňující masáže před porodem
                    </li>
                    <li>
                        práci s rebozem, spinning babies
                    </li>
                    <li>
                        celotělovou práci na protažení svalů a kompletní přípravu těla pro porod
                    </li>
                    <li>
                        rituál s bylinnou vaginální napářkou
                    </li>
                </ul>
            </div>
        </template>
    </SectionsContainer>

**CENA:**

600,- / 60min
</template>

<script setup>

const cardsContent = ref([
    {title: "FYZICKÁ PŘÍPRAVA NA POROD",
     description: [
        "práce s pánevním dnem",
        "dechové techniky pro všechny porodní fáze",
        "cviky pro zdravé fit těhotenství a bezproblémový porod",
        "relaxační i rebozo masáže"
    ]},
    {title: "PRÁCE S MYSLÍ",
     description: [
        "uvědomění si vnitřní síly",
        "návod na zvládání bolesti",
        "vnímání porodu jako zážitku",
        "vizualizace, afirmace, vedené meditace"
    ]},
    {title: "INFORMACE",
     description: [
        "vše, co potřebuješ vědět k porodu",
        "příprava na šestinedělí a kojení",
        "zapojení partnera",
        "prevence a řešení potíží"
    ]}
])
</script>

<style lang="scss" scoped>


// SECTIONS

.next-info {
    position: relative;
    display: flex;
    flex-direction: column;
    align-items: center;
    ul {
        display: flex;
        flex-direction: column;
        gap: 1.5rem;
        align-items: center;
        li {
            font-size: 1.8rem;
            font-weight: 200;
            font-style: italic;
        }
    }
}

</style>