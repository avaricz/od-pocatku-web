<template>
    <section>
       
        <div class="header-container">
            <NuxtImg 
                src="/img/9454_org_transparent.png" 
                alt=""
                densities="1x"
                sizes="sm:100vw md:100vw lg:100vw"
                format="webp"
                quality="100"
            />
            <div class="overlay">
                <div class="welcome-title-area">
                    <h1>Dula Lucie...</h1>
                    <p>Laktační poradkyně, lektorka Školy pánevního dna a funkční trenérka.</p>
                    <TheButton label="O mně" @click="$router.push('/about')" filled pulse />
                </div>
            </div>
        </div>
    </section>
</template>

<script setup>
</script>

<style lang="scss" scoped>
section {
    overflow: hidden;
    position: relative;
    background-color: $black-dr;
    height: 100vh;
    @media (min-width: $medium-screen) {
        height: calc(100vh - 80px);
    }
}

.header-container {
    position: relative;
    
    display: flex;
    align-items: center;
    justify-content: center;
    
    height: 100%;
    margin: 0 auto;
    max-width: $large-screen;
    img {
        position: absolute;
        height: 100%;
        object-fit: cover;
        right: -40%;
        @media (min-width: $small-screen) {
            right: -20%;
        }
    }
}
.overlay {
    display: flex;
    width: 100%;
    height: 100%;
    align-items: center;
    justify-content: center;
    background: #00000090;
    z-index: 1;
    @media (min-width: $small-screen) {
        background: transparent;
    }
    .welcome-title-area{
        display: flex;
        justify-content: center;
        align-items: center;
        flex-direction: column;
        gap: 4rem;
        text-align: center;
        max-width: 500px;
        @media (min-width: $small-screen) {
            position: relative;
            top: -20%;
            left: -10%;
            text-align: left;
            align-items: start;
        }
        h1 {
            font-family: Italianno;
            color: $pink-dr;
            font-size: 5rem;
            font-weight: 100;
            line-height: 4.5rem;
            @media (min-width: $small-screen) {
                font-size: 7rem;
            }
        }
        p {
            color: $white;            
            font-size: 1.3rem;
            font-weight: 500;
            font-style: italic;
        }
    }
    
}
</style>
