<template>
  <main class="not-content">
    <div class="tcsmd-input mb-6">
      Search：<input type="text" class="tcsmd-input__inner" placeholder="search" v-model="search"/>
    </div>
    <div class="flex flex-wrap gap-4">
      <div v-for="[key, value] of Object.entries(filteredColor)"
           class="flex flex-col w-[360px] mix-blend-difference">
        <div
          :class="`text-2xl font-900 w-full p-3 uppercase bg-${value[0]?.colorName} ${ textColorSwitcher(value[0]?.hsl?.l) }`">
          {{ key }}
        </div>
        <div v-for="item in value"
             :class="`flex w-full p-3 bg-${item.colorName} ${ textColorSwitcher(item?.hsl?.l) }`">
          <p class="flex-1 m-0">{{ item.colorName }}</p>
          <p class="m-0 text-right" style="max-width:50%">{{ getHex(item.color) }}</p>
        </div>
      </div>
    </div>
  </main>
</template>

<script setup lang="ts">
import {computed, ref} from "vue";
import {getHex} from '@/utils/colorUtil.js';
import colors from 'consumer-tonic-design-system/default_grouped_design_token.json';

const textColorSwitcher = l => l > 0.65 ? 'text-black' : 'text-white';

const search = ref('');

const filteredColor = computed(() => {
  // filter with colorName
  const result = {};

  for (const [groupName, arr] of Object.entries(colors)) {
    arr.forEach(colorItem => {
      if (colorItem.colorName?.includes(search.value)) {
        result[groupName] ? result[groupName].push(colorItem) : result[groupName] = [colorItem];
      }
    })
  }

  return result;
});
</script>

<style scoped>

</style>
