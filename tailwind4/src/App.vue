<template>
  <div class="flex gap-6">
    <button class="tcsmd-btn-default" @click="handleClick">按鈕</button>
    <button class="tcsmd-btn-primary" @click="handleClick">按鈕</button>
    <button class="tcsmd-btn-disabled min-w-btn-xs" @click="handleClick">按鈕</button>
    <button class="btn min-w-btn-large" @click="handleClick">按鈕</button>
  </div>
</template>

<script setup>
const handleClick = () => console.log('btn click');
</script>
