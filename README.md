# babel-transform-import-plugin

babel插件用于修改引用包名


## Install

```bash
yarn add -D babel-transform-import-plugin
```

or

```bash
npm i babel-transform-import-plugin --save-dev

```

## 案例


```json

{
  "plugins": [
  ["./src/index.js", {
    // 要替换的包名
    "libraryName": "@uiw/react-native",
    // 转换的包名
    "alias": "@uiw/react-native/lib"
  }]
]
}


```

将

```js
import {Button, Spacing} from '@uiw/react-native';

```

转换成

```js

import Button from "@uiw/react-native/lib/Button";
import Spacing from "@uiw/react-native/lib/Spacing";

```