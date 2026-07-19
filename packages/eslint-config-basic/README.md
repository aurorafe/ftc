# @aurorafe/eslint-config-base

aurorafe 团队的基础 ESLint flat config。

## 安装

```bash
pnpm add -D eslint@^10 prettier @aurorafe/eslint-config-base
```

## 使用

创建 `eslint.config.mjs`：

```js
import { defineConfig } from 'eslint/config';
import auroraBase from '@aurorafe/eslint-config-base';

export default defineConfig([...auroraBase]);
```

仅基础规则（不含 Prettier）：

```js
import { defineConfig } from 'eslint/config';
import base from '@aurorafe/eslint-config-base/base';

export default defineConfig([...base]);
```

Prettier 选项可复用：

```js
import { prettierRules } from '@aurorafe/eslint-config-base/rules';

/** @type {import('prettier').Config} */
export default {
  ...prettierRules,
};
```
