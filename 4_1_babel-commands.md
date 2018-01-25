# Babel Commands

## Plugins

```bash
npm install babel-plugin-transform-runtime
npm install babel-plugin-transform-es2015-modules-amd
npx babel src/first.js --out-file out/first1.js --plugins=transform-runtime,transform-es2015-modules-amd
```

## Presets

На выходе имеем es5

```bash
npm i babel-preset-es2015
npm i babel-preset-react
npx babel src/first.js --out-file out/first2.js --presets=es2015,react
```

