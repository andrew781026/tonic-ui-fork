<template>
  <div :class="`tcsmd-tab-group ${type}`">
    <div :class="`tcsmd-tab ${type}`"
         v-for="i in number"
         :selected="selectIndex == i ? true : null"
         @click="selectIndex = i"
         :tabindex="i">
      Tab Label
    </div>
  </div>
</template>

<script setup lang="ts">
defineProps(['selectIndex', 'type', 'number'])
</script>
