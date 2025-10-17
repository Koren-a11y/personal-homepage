# Personal Homepage (Vite + React + TypeScript)

这是一个使用 Vite + React + TypeScript 构建的个人主页示例，并通过 GitHub Actions 部署到 GitHub Pages。

## 本地开发

```bash
npm install
npm run dev
```

## 构建

```bash
npm run build
npm run preview
```

## 部署（GitHub Actions → GitHub Pages）

- 推送到 `main` 后会自动构建并部署。
- 站点地址（项目页）：`https://<username>.github.io/personal-homepage`
- 已在 `vite.config.ts` 中设置：`base: '/personal-homepage/'` 以适配项目页子路径。
- 如果你更改了仓库名，请同步修改 `vite.config.ts` 的 `base`。
