# tts_web_app

This template should help get you started developing with Vue 3 in Vite.

## git config

解决git提示 `hint: core.useBuiltinFSMonitor=true is deprecated;please set core.fsmonitor=true instead`

```sh
git config --global core.fsmonitor true
```

## Customize configuration

See [Vite Configuration Reference](https://vitejs.dev/config/).

## Project Setup

```sh
npm install
yarn add element-plus
```


## Project dependencies

### 按需导入element-plus

首先需要安装unplugin-vue-components 和 unplugin-auto-import这两款插件

```sh
npm install -D unplugin-vue-components unplugin-auto-import

```

vite.config.ts配置

```typescript
// vite.config.ts
import { defineConfig } from 'vite'
import AutoImport from 'unplugin-auto-import/vite'
import Components from 'unplugin-vue-components/vite'
import { ElementPlusResolver } from 'unplugin-vue-components/resolvers'

export default defineConfig({
  // ...
  plugins: [
    // ...
    AutoImport({
      resolvers: [ElementPlusResolver()],
    }),
    Components({
      resolvers: [ElementPlusResolver()],
    }),
  ],
})
```

### 安装windicss

```sh
npm i -D vite-plugin-windicss windicss
```

具体配置见 [安装 windicss](https://cn.windicss.org/integrations/vite.html)


### Compile and Hot-Reload for Development

```sh
npm run dev
```

### Type-Check, Compile and Minify for Production

```sh
npm run build
```
