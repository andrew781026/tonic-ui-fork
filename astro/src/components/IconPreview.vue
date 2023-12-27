<template>
  <span class="tcsmd-input">
    Search：<input type="text" class="tcsmd-input__inner" placeholder="search" v-model="search"/>
  </span>
  <h2 class="text-2xl font-900 mr-auto my-4"> 📃 16px</h2>
  <div class="select-none flex flex-wrap gap-4 m-4">
    <div
      @click="copy(icon.clazz,$event)"
      v-for="icon in filteredSmallIconNames"
      :key="icon"
      class="cursor-pointer min-w-[200px] flex flex-col gap-2 items-center bg-tcsmd-ref-palette-gray-22 hover:bg-tcsmd-ref-palette-gray-26 active:bg-tcsmd-ref-palette-gray-20 p-4 rounded-xl">
      <span :class="`${icon.clazz} w-4 h-4 text-tcsmd-ref-palette-red-70`"></span>
      <span>{{ icon.name }}</span>
    </div>
  </div>

  <h2 class="text-2xl font-900 mr-auto mb-4"> 📃 24px</h2>
  <div class="select-none flex flex-wrap gap-8">
    <div class="flex flex-wrap gap-4 m-4">
      <div
        @click="copy(icon.clazz,$event)"
        v-for="icon in filteredMiddleIconNames"
        :key="icon"
        class="cursor-pointer min-w-[200px] flex flex-col gap-2 items-center bg-tcsmd-ref-palette-gray-22 hover:bg-tcsmd-ref-palette-gray-26 active:bg-tcsmd-ref-palette-gray-20 p-4 rounded-xl">
        <span :class="`${icon.clazz} w-6 h-6`"></span>
        <span>{{ icon.name }}</span>
      </div>
    </div>
  </div>

  <div class="container" ref="container" ></div>
  <transition name="fade" @afterEnter="copySuccess = false">
    <span v-show="copySuccess" class="absolute pointer-events-none text-tcsmd-ref-palette-red-70" :style="{left,top}">Copied</span>
  </transition>
</template>

<script setup lang="ts">
import {computed, ref} from "vue";

const {smallIconNames, middleIconNames} = defineProps(['smallIconNames', 'middleIconNames']);

const search = ref('');
const copySuccess = ref(false);
const left = ref('');
const top = ref('');
const container = ref(null);

const filteredSmallIconNames = computed(() => {
  return smallIconNames.filter(icon => icon.name.includes(search.value))
});

const filteredMiddleIconNames = computed(() => {
  return middleIconNames.filter(icon => icon.name.includes(search.value))
});

const copy = (clazz, event) => {
  navigator.clipboard.writeText(clazz);
  left.value = `${event.clientX}px`;
  top.value = `${event.clientY - 20}px`;
  // copySuccess.value = true;
  createSpan({top:`${event.clientY - 20}px`,left:`${event.clientX}px`});
}

const createSpan = ({top, left}) => {
  const spanEl = window.document.createElement('span');
  spanEl.className = 'absolute pointer-events-none copied text-tcsmd-ref-palette-red-70'
  spanEl.style.top = top;
  spanEl.style.left = left;
  spanEl.innerText = 'Copied';
  spanEl.ontransitionend = () => spanEl.remove();
  container.value.append(spanEl);
  setTimeout(() => spanEl.classList.add('fade'));
}

</script>

<style>
.copied {
  opacity: 1;
  transform: translateY(0px);
  transition: opacity 0.5s ease, transform 0.5s ease;
}

.copied.fade {
  opacity: 0;
  transform: translateY(-20px);
}
</style>

<style scoped>
.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.5s ease, transform 0.5s ease;
}

.fade-enter-from {
  opacity: 0;
  transform: translateY(0px);
}

.fade-enter-to {
  opacity: 1;
  transform: translateY(-10px);
}

.fade-leave-from,
.fade-leave-to {
  opacity: 0;
}
</style>
