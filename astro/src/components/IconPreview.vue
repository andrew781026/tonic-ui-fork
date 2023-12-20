<script setup lang="ts">
import { Icon } from 'astro-icon';

defineProps(['smallIconNames','middleIconNames'])
</script>

<template>
  <span class="tcsmd-input">
    Search：<input type="text" class="tcsmd-input__inner" placeholder="search"/>
  </span>
  <h2 class="text-2xl font-900 mr-auto my-4"> 📃 16px</h2>
  <div class="flex flex-wrap gap-4 m-4">
    <div
      v-for="iconName in smallIconNames"
      :key="iconName"
      class="min-w-[200px] flex flex-col gap-2 items-center bg-tcsmd-ref-palette-gray-22 p-4 rounded-xl">
      <Icon class="w-4 h-4" pack="consumer-tonic-ui" :name="`16px/${iconName}`" />
      <span>{{iconName}}</span>
    </div>
  </div>

  <h2 class="text-2xl font-900 mr-auto mb-4"> 📃 24px</h2>
  <div class="flex flex-wrap gap-8">
    <div class="flex flex-wrap gap-4 m-4">
      <div
        v-for="iconName in middleIconNames"
        :key="iconName"
        class="min-w-[200px] flex flex-col gap-2 items-center bg-tcsmd-ref-palette-gray-22 p-4 rounded-xl">
        <Icon class="w-6 h-6" pack="consumer-tonic-ui" name={`24px/${iconName}`} />
        <span>{iconName}</span>
      </div>
    </div>
  </div>
</template>

<style scoped>

</style>
