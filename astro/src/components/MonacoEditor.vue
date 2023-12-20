<template>
  <div ref="editor" style="height: 500px; width: 100%;"></div>
</template>

<script setup lang="ts">
import {onMounted, Ref, ref} from 'vue';
import * as monaco from 'monaco-editor';

const editorRef: Ref<null | HTMLElement> = ref(null);

onMounted(() => {
  // Initialize Monaco Editor
  const editorEl = editorRef.value;
  if (editorEl) {

    const options = {
      value: this.value,
      language: "html",
      contextmenu: false,
      minimap: {
        enabled: false,
      },
    }

    const editor = monaco.editor.create(editorEl, {
      value: 'import React from "react";\n\nfunction App() {\n  return <div>Hello, React!</div>;\n}\n\nexport default App;',
      language: 'jsx', // Set the language to 'jsx' for React
      readOnly: true, // Make it view-only (read-only)
    });

    editor.onDidChangeModelContent((/* event */) => {
      // this.$emit("input", this.editor.getValue());
    });
  }

});
</script>

<style scoped>

</style>
