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
npm install --save git+ssh://git@adc.github.trendmicro.com:Consumer-Frontend/consumer-tonic-ui.git
```
3.Then add daisyUI to your tailwind.config.js files:
```js
module.exports = {
  //...
  plugins: [require("consumer-tonic-ui")],
}
```
