# weather-updates-typescript

## Required Steps -

First create a react app using create-react-app with Typescript support

```bash
npx create-react-app --template typescript
```

## Packages to Install -

```bash
yarn add @material-ui/core @types/@material-ui axios @babel/preset-env @babel/preset-react @babel/plugin-syntax-jsx
```

Create a babel configuration file in the root -
Name it as - babel.config.js
and add the following lines -

```bash
'use strict'
/**
babel.config.js with useful plugins.
*/
module.exports = function(api) {
  api.cache(true);
  api.assertVersion("^7.4.5");
​
  const presets = [
    ["@babel/preset-env"],
    ["@babel/preset-react"]
  ];
  const plugins = [
    ['@babel/plugin-syntax-jsx']
  ];
​
  return {
    presets,
    plugins
  }
}
```

## You make face issues in setting up routing refer to this link for router v6 , Also refer App.tsx for routing

[react-router v6](https://reacttraining.com/blog/react-router-v6-pre/)
