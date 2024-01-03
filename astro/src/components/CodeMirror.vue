<template>
  <KeepAlive>
    <div ref="editor" class="editor not-content"></div>
  </KeepAlive>
</template>

<script setup lang="ts">
import {EditorState} from '@codemirror/state';
import {EditorView} from '@codemirror/view';
import {svelte} from "@replit/codemirror-lang-svelte";
import {vue} from "@codemirror/lang-vue";
import {basicSetup} from 'codemirror';
import {onMounted, ref} from "vue";

const editor = ref(null);

onMounted(() => {

  new EditorView({
    state: EditorState.create({
      doc: `<template><h1>{{Good}}</h1></template>`,
      extensions: [basicSetup, svelte(), vue()],
    }),
    parent: editor.value,
  });
})

</script>

<style scoped>
.editor {
  width: 400px;
  height: 200px;
}
</style>
