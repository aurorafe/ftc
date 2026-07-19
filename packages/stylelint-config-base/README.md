# @aurorafe/stylelint-config-base

Stylelint 基础配置（Stylelint 17 + standard）。

格式相关规则交给 Prettier；本配置聚焦合法性与约定。

## Install

```bash
pnpm add -D stylelint@^17 @aurorafe/stylelint-config-base
```

## Usage

```js
/** @type {import('stylelint').Config} */
export default {
  extends: ['@aurorafe/stylelint-config-base'],
};
```
