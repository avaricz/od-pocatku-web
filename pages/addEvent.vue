<template>
    <SectionsContainer >
        <template #content>

            <div class="container">
                
                <div>
                <label for="title">Název události:</label>
                <input type="text" id="title" v-model="formData.title">
            </div>
            
            <div>
                <label for="start">Začátek:</label>
                <input type="datetime-local" id="start" v-model="formData.start">
            </div>
            
            <div>
                <label for="end">Konec:</label>
                <input type="datetime-local" id="end" v-model="formData.end">
            </div>
            
            <div>
                <label for="location">Místo konání:</label>
                <input type="text" id="location" v-model="formData.location">
            </div>
            
            <div>
                <label for="price">Cena:</label>
                <input type="text" id="price" v-model="formData.price">
            </div>
            
            <div>
                <label for="image">Obrázek (URL):</label>
                <input type="url" id="image" v-model="formData.image">
            </div>
            
            <div>
                <label for="description">Popis:</label>
                <textarea id="description" v-model="formData.description"></textarea>
            </div>
            
            <div>
                <label for="link">Odkaz na registraci:</label>
                <input type="url" id="link" v-model="formData.link">
            </div>
            
            <button type="submit"0 @click="submit">Odeslat</button>
            
            
        </div>
    </template>
    </SectionsContainer>
</template>

<script setup>

const formData = ref({
    title: 'Předporodní kurz: Příprava těla pro porod bez obav',
    start: '2025-03-08T09:30',
    end: '2025-03-08T11:30',
    location: 'RC Klubíčko - Albertova 4062, Kroměříž',
    price: '250,-',
    image: null, // Můžeš doplnit URL obrázku
    description: `<p><strong>Kurz pro ženy ve II. trimestru</strong> o tom, jak zůstat v těhotenství fit, být k porodu v co největší formě a zajistit si tak jeho hladký průběh i rychlý návrat zpět do kondice. Prevence diastázy a povoleného pánevního dna!</p>
    <p><strong>Co nás čeká:</strong></p>
    <ul>
        <li>Aktivace coru v těhotenství – význam hlubokého stabilizačního systému</li>
        <li>Aktivace i relaxace pánevního dna</li>
        <li>Dechové techniky pro pevný core i jednotlivé porodní fáze</li>
        <li>Série cviků vhodných v těhotenství</li>
        <li>Cviky na mobilitu pánve pro snadnější porod</li>
        <li>A mnoho dalších užitečných informací</li>
    </ul>`,
    link: 'https://od-pocatku.reenio.cz/cs/service/predporodni-kurzy-40417/2025-03-08;viewMode=7-days'

})

const submit = () => {
    $fetch('api/addEvent', {
        method: 'POST',
        body: formData.value
     })
}

</script>

<style lang="scss" scoped>
.container {
    height: 100%;
    display: flex;
    flex-direction: column;
    gap: 1rem;
    width: 400px;
    max-width: 400px;
    div {
        display: flex;
        flex-direction: column;
    }
}
</style>