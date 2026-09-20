<template>
  <section class="bg-gray-950 relative md:h-[calc(100vh-80px)] h-lvh">
    <div
      class="absolute flex top-0 left-[-30%] md:left-0 right-0 bottom-0 justify-end"
    >
      <NuxtImg
        src="/img/9454_org_transparent.png"
        class="w-full object-cover object-center"
        alt=""
        densities="1x"
        sizes="sm:100vw md:100vw lg:100vw"
        format="webp"
        quality="100"
      />
    </div>
    <div
      class="relative max-w-[1280px] mx-auto h-full overflow-hidden p-[5%] transition-all duration-300 ease-linear"
    >
      <div
        class="flex flex-col items-start justify-center gap-8 relative text-gray-50 h-full max-w-[550px] mt-4 transition-all duration-300 ease-linear md:mt-0"
      >
        <div
          class="flex flex-col items-center md:items-start gap-16 text-center max-w-[500px] z-1"
        >
          <h1
            class="text-pink-700 text-[5rem] font-thin leading-[4.5rem] md:text-[7rem] md:text-left"
          >
            Lucie Machalová...
          </h1>
          <p class="flex flex-col gap-2 md:items-start">

              <span class="text-gray-50 md:text-start">
                  Dula, laktační poradkyně, instruktorka zdravotní tělesné výchovy,
                  ředitelka a lektorka Yamaha music school Kroměříž.
              </span>
                <span class="text-gray-50 md:text-start">
                    Nově otevřeno Studio Od počátku - Velehradská 507, Kroměříž 
                </span>
                <a
                href="https://www.studioodpocatku.cz"
                target="_blank"
                class="text-blue-400"
                >www.studioodpocatku.cz</a
                >
            </p>
          <DefaultButton to="/about" label="O mně" pulse />
        </div>
      </div>
    </div>
    <div
      class="absolute top-0 bottom-0 left-0 right-0 md:hidden bg-[#00000090]"
    ></div>
  </section>
</template>
<script setup>
import DefaultButton from "./buttons/DefaultButton.vue";
</script>
<style lang="scss" scoped>
h1 {
  font-family: Italianno;
}
</style>
