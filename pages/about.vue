<template>
    <SectionsContainer background-color="black-dr">
        <template #content>
            <div class=" introduce-container">
                <div class="introduce-header">
                    <h2>Jmenuji se <span>Lucie</span></h2> 
                    <p>jsem matkou tří synů...</p>
                </div>
                <div class="introduce-content">
                    <GallerySinglePhoto photo="./img/9458_org.jpg" :position="'vertical'"/>
                    <InfoWrapper>
                        
                        <p>
                            ... žiji v <span>Kroměříži</span>, kde také působím jako <span>dula</span>, <span>laktační poradkyně</span>, <span>funkční trenérka</span> a <span>lektorka Školy pánevního dna</span>.
                        </p>
                        <p>
                            Provázím ženy během <span>těhotenství</span>, pomáhám s <span>kompletní</span> přípravou na <span>porod</span> a s <span>péčí</span> v <span>šestinedělí</span>. Mým cílem je, aby šly ženy k porodu <span>sebevědomé</span> a skvěle připravené <span>po všech stránkách</span>.
                        </p>
                        <p>                            
                            Důraz kladu nejen na <span>psychickou</span> a mentální stránku, ale i na tu <span>fyzickou</span> – proto se jako funkční trenérka věnuji celkové <span>stabilizaci, zpevnění těla</span> a zdravého cvičení <span>pánevního dna</span>. Protože <span>funkční tělo</span> Vám opravdu může změnit život!
                        </p>
                    </InfoWrapper>
                </div>
            </div>
            </template>
    </SectionsContainer>
     <SectionsContainer background-color="gray-lt">
        <template #content>
            <div class="section-1">
                <div class="left">
                    <InfoWrapper>
                        <p>
                            <span>Ženy</span>, kterým se věnuji, <span>vědí</span>, jak se <span>o sebe starat</span>, jak <span>zůstat fit</span> v těhotenství a mít tak snazší <span>start</span> života <span>po porodu</span>.
                        </p>
                        <p>
                            Základem a smyslem je pro mě <span>kontinuální péče</span>, kdy Váš <span>kontakt se mnou</span> nekončí v šestinedělí. Díky <span>pohybovým kurzům</span>, <span>lekcím</span> a různě zaměřeným <span>workshopům</span> se můžeme <span>potkávat dlouhodobě</span>.
                        </p>
                    </InfoWrapper>
                </div>
                <div class="right">
                    <GalleryTwoPhotos :images="images1" />
                </div>
            </div>
        </template>
    </SectionsContainer> 
  <SectionsContainer>
        <template #content>
            <div class="section-2">
                <div class="left">
                    <GallerySinglePhoto :photo="'/img/8_org.jpeg'"  rotate="right" :position="'vertical'"/>
                </div>
                <div class="right">
                    <InfoWrapper>
                        <p>
                            Nestarám se jen o Vás, ale i o <span>Vaše děti</span>, pro které jinak pracuji jako <span>asistentka pedagoga</span> na ZŠ Zámoraví, vedu pro ně <span>hudební kroužky</span> v <span>Hudební škole YAMAHA</span> (a to od miminek), v létě vedu <span>příměstské tábory</span> v <span>rodinném centru Klubíčko</span> a pro dívky 9 – 12 let pořádám <span>besedy</span> na téma <span>dospívání</span> a začínající ženská cykličnost.
                        </p>
                    </InfoWrapper>
                </div>
            </div>
            </template>
    </SectionsContainer> 
    <SectionsContainer shadow background-color="black-dr">
        <template #content>
            <div class="section-3">
                <div class="left">
                    <InfoWrapper>
                        <p>
                            Miluju <span>pohyb</span> všeho druhu, proto jsem své <span>vzdělání</span> rozšířila ještě o <span>certifikát funkční trenérky</span>, abych mohla to, co mám ráda, dělat opravdu naplno.
                        </p>
                        <p>
                            Svého času jsem se věnovala také vlastní <span>autorské hudební tvorbě</span>, která se zhmotnila do <span>kapely Nad ránem</span>.
                        </p>
                        </InfoWrapper>
                    </div>
                <div class="right">
                    <GalleryTwoPhotos :images="images3" />
                </div>
            </div>
        </template>
    </SectionsContainer>
    <SectionsContainer full-width>
        <template #content>
            <div class="section-4">
                <div class="top">
                    <InfoWrapper>
                        <p>
                            <span>Snažím se</span> být co nejlepším příkladem pro své <span>3 syny</span>, kteří jsou naprosto báječní a děkuji, že i <span>díky nim</span> můžu dělat to <span>všechno</span>, co mě baví.
                        </p>
                        <p>
                            Mé <span>vlastní porody</span>, <span>mateřství</span> a životní <span>zkušenosti</span> mi byly velkou <span>inspirací</span> pro to začít dělat to, co dělám. Dbát na <span>zdravotní prevenci žen</span> a udělat jim to vše <span>od počátku tak nějak snazší…</span>
                        </p>
                </InfoWrapper>
            </div>
            <div class="bottom">
                <GalleryFullWidth :images="images5"/>
            </div>
            </div>
        </template>
    </SectionsContainer>

    <div>
        <span>Vzdělání (certifikáty)</span>

        Škola pro duly 

        Škola pánevního dna 

        Akreditovaný kurz funkčního trenéra u Vital institut 

        Aromaterapie v porodnictví
    </div>
</template>

<script setup lang="ts">


const images1 = ref([
    {src:"/img/9425_org.jpg", position: "horizontal"},
    {src:"/img/9249_org.jpg", position: "vertical"},
])

const images3 = ref([
    {src:"/img/9_org.jpeg", position: "vertical"},
    {src:"/img/5_org.jpg", position: "vertical"},
])
const images5 = ref([
    {src:"/img/10_org.jpeg"},
    {src:"/img/4_org.jpg"},
    {src:"/img/6_org.jpg"},
    {src:"/img/3_org.jpg"},
    {src:"/img/11_org.jpeg"},
])
</script>

<style lang="scss" scoped>
.introduce-container {
    display: flex;
    flex-direction: column;
    gap: 5rem;
    padding: 0 2rem;
    @media (max-width: $medium-screen) {
        padding: 0;     
    }
    .introduce-header {
        display: flex;
        flex-direction: column;
        align-items: center;
        font-size: 1.8rem;
        color: $pink-dr;
        
        h2 {
            span {
                font-weight: bold;
            }
        }
        p {
            font-style: italic;
        }
    }
    
    .introduce-content {
        display: flex;
        gap: 5rem;
        width: 100%;
        align-items: center;
        justify-content: space-between;
        @media (max-width: $medium-screen) {
            flex-direction: column;
        }
        
    }
}

.section-1, .section-3, .section-2, .section-4 {
    display:flex;
    align-items: center;
    @media (max-width: $large-screen) {
        flex-direction: column-reverse;
        gap: 5rem;
    }
    .left {
        width: 50%;
        flex-shrink: 0;
        @media (max-width: $large-screen) {
            width: 100%;
        }
    }
}

.section-2 {
    @media (max-width: $large-screen) {
        flex-direction: column;
    }
} 

.section-4 {
    flex-direction: column;
    gap: 5rem ;
    @media (max-width: $medium-screen) {
        gap: 5rem;
    }
    .top {
        max-width: 800px;
    }
}
</style>