# 宝云云计算有限公司官网

Next.js 静态官网，结构参考目标站的产品官网形态：固定头部、首页七段内容、产品下载页、联系我们页、方案对比页，并支持中文、英文、日文三种语言。

## 路由

- 中文默认：`/`、`/download/`、`/about/`、`/edition/`
- 中文显式：`/zh/`、`/zh/download/`、`/zh/about/`、`/zh/edition/`
- 英文：`/en/`、`/en/download/`、`/en/about/`、`/en/edition/`
- 日文：`/ja/`、`/ja/download/`、`/ja/about/`、`/ja/edition/`

## 本地运行

```bash
npm install
npm run dev
```

默认访问：

```text
http://127.0.0.1:3000
```

## 生产构建

```bash
npm run build
```

项目已在 `next.config.mjs` 中启用：

```js
output: "export"
```

构建完成后会生成 `out/` 目录，里面就是可上传到 AWS S3 或 CloudFront 源站的静态文件。

## AWS Amplify 部署

1. 将代码推送到 GitHub / GitLab / CodeCommit。
2. 在 AWS Amplify Hosting 创建应用并连接仓库。
3. Build command 填写：

```bash
npm ci && npm run build
```

4. Output directory 填写：

```text
out
```

## S3 + CloudFront 部署

```bash
npm ci
npm run build
aws s3 sync out/ s3://YOUR_BUCKET_NAME --delete
```

CloudFront 默认根对象建议设置为：

```text
index.html
```

## 上线前建议替换

- `public/brand/baoyun-logo.svg`：正式 Logo。
- `public/brand/cloud-hero.png`：首屏品牌图。
- `public/brand/qrcode-business.svg`：商务咨询二维码。
- `public/brand/qrcode-updates.svg`：公众号或产品更新二维码。
- `public/downloads/*`：正式资料包、安装包或 PDF。
- `lib/site.ts`：三语文案、电话、邮箱、地址、控制台链接和方案内容。
- `app/sitemap.ts` 与 `app/layout.tsx`：正式域名 `https://www.baoyuncloud.com`。
