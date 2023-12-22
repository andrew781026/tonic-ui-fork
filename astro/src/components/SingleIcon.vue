<template>
  <h2 class="text-3xl uppercase pb-2">{{ iconName }}</h2>
  <div class="flex mx-auto gap-8">
    <div
      class="w-96 h-96 flex justify-center items-center border-2 border-solid border-tcsmd-ref-palette-gray-26 p-4 rounded-xl ">
      <span :class="`${iconClazz} w-12 h-12`"></span>
    </div>

    <div
      class="h-48 flex flex-col items-center border-2 border-solid border-tcsmd-ref-palette-gray-24 rounded-xl">
      <div :class="`tcsmd-tab-group capsule`">
        <div :class="`tcsmd-tab capsule`"
             :selected="selectIndex == 1 ? true : null"
             @click="selectIndex = 1"
             tabindex="1">
          HTML
        </div>
        <div :class="`tcsmd-tab capsule`"
             :selected="selectIndex == 2 ? true : null"
             @click="selectIndex = 2"
             tabindex="1">
          React
        </div>
        <div :class="`tcsmd-tab capsule`"
             :selected="selectIndex == 3 ? true : null"
             @click="selectIndex = 3"
             tabindex="1">
          Vue
        </div>
        <div :class="`tcsmd-tab capsule`"
             :selected="selectIndex == 4 ? true : null"
             @click="selectIndex = 4"
             tabindex="1">
          SVG
        </div>
      </div>
      <div class="p-4 w-full">
        <MonacoEditor :type="type"/>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import {computed, ref} from "vue";
import MonacoEditor from "./MonacoEditor.vue";

defineProps(['iconClazz', 'iconName']);

const selectIndex = ref<number>(1);

const type = computed(() => {
  const map = {
    1: 'html',
    2: 'react',
    3: 'vue',
    4: 'svg',
  }

  return map[selectIndex.value];
})
</script>
