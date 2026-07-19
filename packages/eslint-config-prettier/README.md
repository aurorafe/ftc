# @aurorafe/eslint-config-prettier

ESLint + Prettier 集成配置（flat config）。

> 推荐直接使用 `@aurorafe/eslint-config-base`，其中已包含本配置。

## Usage

```js
import { defineConfig } from 'eslint/config';
import auroraPrettier from '@aurorafe/eslint-config-prettier';

export default defineConfig([
  // other configs...
  ...auroraPrettier,
]);
```
