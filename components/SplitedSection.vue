<template>
    <div class="container">
        <div class="left">
            <slot name="left" />
        </div>
        <div class="right">
            <slot name="right" />
        </div>
    </div>
</template>

<script setup>

</script>

<style lang="scss" scoped>
.container {
    display: flex;
    max-width: 100vw;
    padding: 5rem 0 ;
}

.left, .right {
    flex: 1; /* Zajišťuje rovnoměrné rozložení mezi levou a pravou částí */
    max-width: 50%; /* Zabraňuje přesahu nad polovinu obrazovky */
    box-sizing: border-box; /* Zajišťuje správné počítání šířky včetně paddingu a border */
    overflow: hidden; /* Skryje přetékající obsah */
}
.right {
    position: relative;
    z-index: 1;
}
.right::before {
    content: '';
    position: absolute;
    top: 0;
    right: -300px;
    width: 100%;
    height: 100%;
    background-image: url('../flower.svg');
    background-position: center;
    background-repeat: no-repeat;
    background-size: contain;
    opacity: 0.15; 
    z-index: 0; 
    pointer-events: none; 
}
</style>
