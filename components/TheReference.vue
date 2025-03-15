<template>
    <div class="relative flex flex-col items-center gap-8 p-12">
        
       

        <div class="absolute top-[-20px]">
            <Icon name="entypo:quote" class="text-pink-500 opacity-30" size="124px"/>
        </div>
        <div class="relative">
            <button 
                class="absolute rounded-full flex items-center top-[50%] left-[-60px] justify-center bg-gray-200 text-white aspect-square w-10 h-10 cursor-pointer opacity-70"
                @click.stop="prevReference"
            >
                <Icon name="iconamoon:arrow-left-2" class="text-pink-400" size="36px" />
            </button>

        
            <p class="text-center">
                {{ currentReference?.reference }}
            </p>

            <button 
                class=" absolute rounded-full flex items-center top-[50%] right-[-60px] justify-center bg-gray-200 text-white aspect-square w-10 h-10 cursor-pointer opacity-70"
                @click.stop="nextReference"
            >
                <Icon name="iconamoon:arrow-right-2" class="text-pink-400" size="36px" />
            </button>
       
        </div>


        <div class="flex items-center gap-8">

            <div class="flex items-bottom justify-center min-w-14 max-w-14 w-14 rounded-full aspect-square overflow-hidden bg-gray-200 shrink">
                <Icon name="famicons:person" size="70px" class="text-pink-400 " />
            </div>
            <div class="flex flex-col items-start">

                <div class="text-xl text-pink-800 font-semibold">
                    {{ currentReference?.name }}
                </div>
                <div class="text-gray-700 font-semibold">
                    {{ currentReference?.type }}
                </div>

            </div>
        </div>
    </div>
</template>

<script setup >
    import { ref, computed } from 'vue';

    const props = defineProps({
        references: {
            type: Array,
            required: true
        },
    })

    // Aktuální index reference
    const currentIndex = ref(0);

    // Přepínání reference
    const prevReference = () => {
        currentIndex.value = (currentIndex.value - 1 + props.references.length) % props.references.length;
    };

    const nextReference = () => {
        currentIndex.value = (currentIndex.value + 1) % props.references.length;
    };

    // Aktuální reference (computed)
    const currentReference = computed(() => props.references[currentIndex.value]);

   
</script>