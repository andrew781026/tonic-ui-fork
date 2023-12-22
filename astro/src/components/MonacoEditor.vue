<template>
  <div ref="editorRef" style="height: 100px; width: 100%;"></div>
</template>

<script setup lang="ts">
import {onMounted, Ref, ref, watch} from 'vue';
import * as monaco from 'monaco-editor';
import {types} from "astro/dist/assets/vendor/image-size";

const props = defineProps(['type']);

let editor = null;
const editorRef: Ref<null | HTMLElement> = ref(null);

onMounted(() => {

  // Initialize Monaco Editor
  const editorEl = editorRef.value;
  if (editorEl) {

    // const options = {
    //   value: 'rrr',
    //   language: "html",
    //   contextmenu: false,
    //   minimap: {
    //     enabled: false,
    //   },
    // }

    /**
     * language map :
     *    react = jsx
     *    vue = https://github.com/Kingwl/monaco-volar
     *    html
     *    svg
     */

    editor = monaco.editor.create(editorEl, {
      value: `<template><h1>SSS</h1></template>`,
      language: 'html',
      // readOnly: true, // Make it view-only (read-only)
      contextmenu: false,
      minimap: {
        enabled: false
      },
      lineNumbers: 'off', // Set lineNumbers to "off" to hide line numbers
      "glyphMargin": false,
      "folding": false,
      "lineDecorationsWidth": 0,
      "lineNumbersMinChars": 0,
      overviewRulerLanes: 0,
      wordWrap: 'on',
    });

    editor.onDidChangeModelContent(event => {
      console.log('onDidChangeModelContent , event=', event);
    });

    editor.onDidBlurEditorText(event => {
      console.log('onDidBlurEditorText , event=', event);
    });

    editor.onDidFocusEditorText(event => {
      console.log('onDidFocusEditorText , event=', event);
    });

    console.log(editor);
  }

});

watch(() => props.type, value => {

  const getOptions = type => {

    if (type === 'html') return {
      value: `<span class="icon-[consumer-tonic-ui--small-home]"></span>`,
      language: 'html',
    };
    if (type === 'react') return {
      value: 'import React from "react";\n\nfunction App() {\n  return <div>Hello, React!</div>;\n}\n\nexport default App;',
      language: 'jsx',
    };
    if (type === 'vue') return {
      value: `<template><h1>SSS</h1></template>`,
      language: 'vue',
    };
    if (type === 'svg') return {
      value: `<svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                <g clip-path="url(#clip0_28237_28807)">
                  <path fill-rule="evenodd" clip-rule="evenodd" d="M15 13V6.07036C15 5.0673 14.4987 4.13061 13.6641 3.57421L9.6641 0.907538C8.6564 0.235736 7.3436 0.235736 6.3359 0.907538L2.3359 3.57421C1.5013 4.13061 1 5.0673 1 6.07036V13C1 14.6568 2.34315 16 4 16H12C13.6569 16 15 14.6568 15 13ZM2 6.07036C2 5.40166 2.3342 4.77719 2.8906 4.40626L6.8906 1.73959C7.5624 1.29172 8.4376 1.29172 9.1094 1.73959L13.1094 4.40626C13.6658 4.77719 14 5.40166 14 6.07036V13C14 14.1046 13.1046 15 12 15H4C2.89543 15 2 14.1046 2 13V6.07036ZM8 8.99999C6.34315 8.99999 5 10.3431 5 12V15H6V12C6 10.8954 6.89543 9.99999 8 9.99999C9.10457 9.99999 10 10.8954 10 12V15H11V12C11 10.3431 9.65685 8.99999 8 8.99999Z" fill="#222222"/>
                </g>
                <defs>
                  <clipPath id="clip0_28237_28807">
                    <rect width="16" height="16" fill="white"/>
                  </clipPath>
                </defs>
              </svg>`,
      language: 'html',
    };
  }

  const newOptions = getOptions(value);
  editor.getModel().setValue(newOptions.value);
  monaco.editor.setModelLanguage(editor.getModel(), newOptions.language);
  // console.log(editor.getModel().getLanguageId());
})
</script>

<style scoped>

</style>
