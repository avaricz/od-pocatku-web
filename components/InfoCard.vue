<template>
    <div class="
        relative flex flex-col gap-4 w-[340px] max-w-[340px] rounded-xl bg-gray-50 shadow-lg transition-transform duration-300 ease-in-out hover:shadow-2xl hover:scale-102
    ">
        <div class="absolute top-[-20px] left-[-20px] w-[60px] h-auto">
            <NuxtImg 
                src="flower.svg" 
                class="w-full h-auto flower-drop-shadow"
                alt=""
                densities="1x"
                sizes="100px"
                format="webp"
                quality="100"
            />
        </div>
        <div class="
            card-header 
            bg-[url('/9103_small_darker.jpg')] bg-no-repeat bg-cover bg-gray-950 rounded-t-xl
        ">
            <div class="
            flex items-center justify-center h-[180px] p-4 
            tracking-[1px] text-2xl text-center font-medium text-gray-50 uppercase
            ">
                {{ content.title }}
            </div>
        </div>
        <ul class="flex flex-col h-full list-none px-8 pb-8 m-0 gap-2">
            <li 
                v-for="item in content.description"
                class="flex gap-4 leading-6 text-lg font-normal text-gray-700 italic"
            >
                <div class="flex pt-1.5">
                    <Icon  name="material-symbols:circle" class="text-pink-700" size="12px"/>
                </div>
                <div class="flex gap-1" v-html="item" />
            </li>
        </ul>
    </div>
</template>

<script setup>

defineProps({
    content: {
        type: Object,
        required: true,
    }
})

</script>
