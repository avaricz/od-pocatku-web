<template>
    <nav
        class="fixed top-15 bottom-0 z-20
        flex grow flex-col w-full h-[cals(100% - 60px)]
        bg-pink-700 border-t-[1px] border-t-gray-950
        transition-transform duration-300
        "
    >
      <div class="flex flex-col gap-0 p-4 overflow-y-auto grow">
        <ul class="text-gray-50 font-semibold">
          <li v-for="item in navigation" class="border-b-[.5px] last-of-type:border-b-0 border-b-gray-200 border-dotted" >
            <div
                v-if="item.type === 'category'"
                class="flex flex-col "
                @click="toggleCategory(item.label)"
            >
              <div class="flex gap-1 items-center p-4 ">
                <span>
                    {{ item.label }}
                </span>
                <Icon
                    v-if="item.type === 'category'"
                    name="iconamoon:arrow-down-2-fill"
                    class="text-gray-50 transition-all duration-300 group-hover:rotate-180 group-hover:text-gray-900 ease-linear"
                    :class="{'rotate-180' : activeCategory === item.label}"
                    size="18px"
                />
              </div>
              <div class="
                flex flex-col pl-4
                overflow-hidden transition-[max-height] duration-300 ease-in-out"
                   :class="{
                      'max-h-0': activeCategory !== item.label,
                      'max-h-96': activeCategory === item.label
                    }"
              >
                <NuxtLink
                    v-for="link in item.innerLinks"
                    :to="link.link"
                    class="text-[.9rem] py-2 pl-4 last:mb-4"
                    @click="$emit('onClickLink')"
                >
                  <span>{{ link.label}}</span>
                </NuxtLink>
              </div>
            </div>

            <NuxtLink
                v-else
                :to="item.link"
                class="block p-4"
                @click="$emit('onClickLink')"
            >
              <span>
                  {{ item.label }}
              </span>
            </NuxtLink>
          </li>

        </ul>
<!--Social links-->
        <div class="flex gap-4 items-center justify-center py-4 mt-auto">
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
      </div>
    </nav>
</template>

<script setup lang="ts">
import {navigation, socialLinks} from "~/utils/navigation";

defineProps<{
  isOpen: boolean;
}>();

defineEmits<{
  onClickLink: () => void,
}>();

const activeCategory = ref<string | null>(null);
const toggleCategory = (label: string) => {
  activeCategory.value = activeCategory.value === label ? null : label;
};
</script>
