# @aurorafe/eslint-config-react

React 的 ESLint flat config。

基于 [`@eslint-react/eslint-plugin`](https://github.com/Rel1cx/eslint-react)（兼容 ESLint 10）与 `eslint-plugin-react-hooks`。

## Install

```bash
pnpm add -D eslint@^10 @aurorafe/eslint-config-react
```

## Usage

```js
import { defineConfig } from 'eslint/config';
import auroraReact from '@aurorafe/eslint-config-react';

export default defineConfig([...auroraReact]);
```
