<template>
    <div class="flex flex-wrap justify-center gap-8">
        <div 
            v-for="card in content" 
            class="
                flex flex-col 
                rounded-xl w-[340px] md:w-[380px] bg-gray-50 shadow 
                transition-all duration-300 linear
                hover:shadow-xl hover:scale-105"
            >
            <div class="flex justify-center p-4">
                <div class="border-4 border-pink-300 p-2 rounded-full bg-pink-200 ">
                    <IconFlower class="w-12 h-12"/>
                </div>
            </div>
            <div class="flex flex-col px-8 pb-8">
                <h3 class="flex items-center h-14">{{ card.title }}</h3>
                <ul class="flex flex-col gap-2 text-gray-700">
                    <li 
                        v-for="item in card.description"
                        class="flex items-start gap-4"
                    >
                        <div class="flex pt-1">
                            <Icon  name="material-symbols:circle" class="text-pink-700" size="12px"/>
                        </div>
                        <div class="flex "> 
                            {{ item }}
                        </div>
                    </li>
                </ul>

            </div>
        </div>
    </div>
</template>

<script setup>
defineProps({
    content: {
        type: Object,
        required: true
    }
})
</script>