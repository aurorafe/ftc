# aurorafe tool chain config

共享 ESLint / Prettier / Stylelint / TypeScript 配置。

## Requirements

- Node.js `>= 24`
- pnpm `10.34.5+`

## Dev

```bash
git clone https://github.com/aurorafe/ftc.git

nvm use

pnpm i

pnpm run lint
pnpm run test
```

### ESLint flat config 示例

```js
import { defineConfig } from 'eslint/config';
import auroraBase from '@aurorafe/eslint-config-base';

export default defineConfig([...auroraBase]);
```

### local link

1. 将 `packages` 下的某个包 link 到全局，以 `tsconfig` 为例：

```bash
cd ./packages/tsconfig
pnpm link --global
```

2. 在需要使用的仓库下执行：

```bash
pnpm link --global @aurorafe/tsconfig
```
