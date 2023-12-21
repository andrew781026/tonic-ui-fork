<template>
  <span class="tcsmd-input">
    Search：<input type="text" class="tcsmd-input__inner" placeholder="search" v-model="search"/>
  </span>
  <h2 class="text-2xl font-900 mr-auto my-4"> 📃 16px</h2>
  <div class="flex flex-wrap gap-4 m-4">
    <div
      v-for="icon in filteredSmallIconNames"
      :key="icon"
      class="min-w-[200px] flex flex-col gap-2 items-center bg-tcsmd-ref-palette-gray-22 p-4 rounded-xl">
      <span :class="`${icon.clazz} w-4 h-4 text-tcsmd-ref-palette-red-70`"></span>
      <span>{{ icon.name }}</span>
    </div>
  </div>

  <h2 class="text-2xl font-900 mr-auto mb-4"> 📃 24px</h2>
  <div class="flex flex-wrap gap-8">
    <div class="flex flex-wrap gap-4 m-4">
      <div
        v-for="icon in filteredMiddleIconNames"
        :key="icon"
        class="min-w-[200px] flex flex-col gap-2 items-center bg-tcsmd-ref-palette-gray-22 p-4 rounded-xl">
        <span :class="`${icon.clazz} w-6 h-6`"></span>
        <span>{{ icon.name }}</span>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import {computed, ref} from "vue";

const {smallIconNames, middleIconNames} = defineProps(['smallIconNames', 'middleIconNames']);

const search = ref('');

const filteredSmallIconNames = computed(() => {
  return smallIconNames.filter(icon => icon.name.includes(search.value))
});

const filteredMiddleIconNames = computed(() => {
  return middleIconNames.filter(icon => icon.name.includes(search.value))
});
</script>
