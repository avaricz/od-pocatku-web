<template>
    <SectionsContainer 
    :backgroundUrl="`bg2.svg`">

        <div class="column">

            <div class="section-title">
                <h2>Nech o sebe pečovat</h2>
                <p>„Pokud budeš spokojená ty, budou spokojeni i tví nejbližší.“</p>
            </div>

            <SideMenuCards 
            :content="cardsContent"
            />

           
        </div>
    </SectionsContainer>
</template>

<script setup lang="ts">

import { infoCards } from '@/content/infoCards';

const cardsContent = ref(infoCards)

</script>

<style lang="scss" scoped>
.column {
    display: flex;
    flex-direction: column;
    gap: 5rem;
    width: 100%;
    .section-title {
        h2 {
            font-size: 3rem;
        }
        p {
            color: $gray;
            font-weight: 500;
        }
    }
}
</style>