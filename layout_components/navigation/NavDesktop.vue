<template>
  <nav class="flex gap-8 justify-between items-center">
    <ul class="flex gap-5">
      <li
          v-for="(item, index) in navigation"
          :key="index"
          class=""
      >
        <div
            v-if="item.type === 'category'"
            class="relative flex items-center gap-1 py-[.3rem] px-2
              text-gray-50 font-semibold
              hover:text-gray-900
              transition-all duration-300 ease-linear
              group
            "
        >
          <span>
            {{ item.label }}
          </span>
          <Icon
              v-if="item.innerLinks"
              name="iconamoon:arrow-down-2-fill"
              class="text-gray-50 transition-all duration-300 group-hover:rotate-180 group-hover:text-gray-900 ease-linear"
              size="18px"
          />
<!--Dropdown-->
          <div
              v-if="item.innerLinks"
              class="
              hidden group-hover:block absolute z-10
              w-[360px] max-w-[360px] top-[100%] left-[0%] p-8
              bg-gray-50 rounded-lg text-[.9rem] shadow-lg
              "
          >
            <ul class="flex flex-col gap-4">
              <li
                  v-for="innerLink in item.innerLinks"
                  :key="innerLink.label"
                  class="pb-4 border-b-[.5px] border-solid border-b-gray-200 last:border-none last:pb-0"
              >
                <NuxtLink
                    :to="innerLink.link"
                    class="text-gray-900 transition-all duration-300 text-wrap font-medium hover:text-pink-700">
                  {{ innerLink.label }}
                </NuxtLink>
              </li>
            </ul>
          </div>
        </div>
<!--Classic Link-->
        <NuxtLink
            v-if="item.type === 'link'"
            :to="item.link"
            class="flex items-center gap-1 py-[.3rem] px-2
              text-gray-50 font-semibold
              hover:text-gray-900
              transition-all duration-300 ease-linear
              group
            "
        >
          <span>
            {{ item.label }}
          </span>
        </NuxtLink>
      </li>
    </ul>
    <div class="flex gap-4">
      <NuxtLink
          :to="socialLinks.instagram.link"
          target="_blank"
      >
        <NuxtImg :src="socialLinks.instagram.icon" height="32px" class="transition-all duration-300 hover:scale-110"/>
      </NuxtLink>
      <NuxtLink
          :to="socialLinks.facebook.link"
          target="_blank"
      >
        <NuxtImg :src="socialLinks.facebook.icon" height="32px" class="transition-all duration-300 hover:scale-110"/>
      </NuxtLink>
    </div>
  </nav>
</template>

<script setup lang="ts">
import {navigation, socialLinks} from "~/utils/navigation";
</script>
