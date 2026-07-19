# @aurorafe/eslint-config-ts

TypeScript 的 ESLint flat config。

## Install

```bash
pnpm add -D eslint@^10 typescript @aurorafe/eslint-config-ts
```

## Usage

```js
import { defineConfig } from 'eslint/config';
import auroraTs from '@aurorafe/eslint-config-ts';

export default defineConfig([...auroraTs]);
```
