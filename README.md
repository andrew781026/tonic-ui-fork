# Consumer-Tonic-UI

 This is not office for Consumer-Tonic-UI , it's a trial for making a Tailwind plugin for Consumer-Tonic-UI.

#### How to develop and build

```shell
npm install && npm run install:doc # install node_modules
npm run build # build plugin to dist folder
npm run dev # run doc server
npm run full # build full css for external use
```


#### How to use

1. You need [Node.js](https://tailwindcss.com/docs/installation) and [Tailwind CSS](https://tailwindcss.com/docs/installation) installed.
2. Install consumer-tonic-ui
```js
npm install --save git+ssh://git@adc.github.trendmicro.com:Consumer-Frontend/consumer-tonic-ui.git#dist
```
3.Then add daisyUI to your tailwind.config.js files:
```js
module.exports = {
  //...
  plugins: [require("consumer-tonic-ui")],
}
```

## Storybook

- get start : https://www.kantega.no/blogg/setting-up-storybook-7-with-vite-and-tailwind-css


### repo listing

consumer-tonic-design-system ( JSON ) -> transform json ( github-action ) -> dist 分支 ( gen_consumer_design_tokens.json . gen_default_theme.json 這兩個 output 檔案 )

--------
consumer-tonic-ui ( vanilla-JS ) -> npm run build ( github-action )  -> dist 分支
                                 -> npm run astro:publish ( github-action ) -> gh-pages 分支

consumer-tonic-ui-react ( react-JS ) -> dist 分支
consumer-tonic-ui-vue ( vue-JS ) -> dist 分支
--------

### 週四 to ask & 說明

1. [ASK] dark-mode 的 color token
2. [DESC] Color
3. [DESC] ( using tailwind , so below class are done !! ) 
     bg-{COLOR_NAME}
     to-{COLOR_NAME}
     via-{COLOR_NAME}
     from-{COLOR_NAME}
     text-{COLOR_NAME}
     ring-{COLOR_NAME}
     fill-{COLOR_NAME}
     caret-{COLOR_NAME}
     stroke-{COLOR_NAME}
     border-{COLOR_NAME}
     divide-{COLOR_NAME}
     accent-{COLOR_NAME}
     shadow-{COLOR_NAME}
     outline-{COLOR_NAME}
     decoration-{COLOR_NAME}
     placeholder-{COLOR_NAME}
     ring-offset-{COLOR_NAME}
