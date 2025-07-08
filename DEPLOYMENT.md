# Hudence 官網部署指南

## 🚀 部署到 GitHub Pages

### 1. 初始化 Git 存儲庫

```bash
git init
git add .
git commit -m "Initial commit: Hudence website"
```

### 2. 連接到 GitHub

```bash
# 替換 [您的用戶名] 為您的 GitHub 用戶名
git remote add origin https://github.com/[您的用戶名]/Hudence.git
git branch -M main
git push -u origin main
```

### 3. 設置 GitHub Pages

1. 前往您的 GitHub 存儲庫
2. 點擊 **Settings** 選項卡
3. 滾動到 **Pages** 部分
4. 在 **Source** 下選擇 **GitHub Actions**

### 4. 自動部署

本專案已配置 GitHub Actions，當您推送到 `main` 分支時會自動：
- 安裝依賴
- 建置專案
- 導出靜態檔案
- 部署到 GitHub Pages

您的網站將可在 `https://[您的用戶名].github.io/Hudence` 訪問。

## 🛠️ 本地開發

### 安裝依賴
```bash
npm install
```

### 開發模式
```bash
npm run dev
```
在 [http://localhost:3000](http://localhost:3000) 查看

### 建置生產版本
```bash
npm run build
```

### 導出靜態檔案
```bash
npm run export
```

## 📁 專案結構

```
Hudence/
├── .github/
│   └── workflows/
│       └── deploy.yml          # GitHub Actions 部署配置
├── app/
│   ├── components/             # React 組件
│   │   ├── Header.tsx
│   │   ├── Hero.tsx
│   │   ├── About.tsx
│   │   ├── Services.tsx
│   │   ├── Courses.tsx
│   │   ├── Portfolio.tsx
│   │   ├── News.tsx
│   │   ├── Contact.tsx
│   │   └── Footer.tsx
│   ├── globals.css             # 全域樣式
│   ├── layout.tsx              # 根佈局
│   └── page.tsx                # 主頁面
├── public/
│   └── Hudence_logo.png        # 公司 Logo
├── next.config.js              # Next.js 配置
├── tailwind.config.js          # Tailwind CSS 配置
├── package.json                # 專案依賴
└── README.md                   # 專案說明
```

## 🎨 自定義配置

### 更改公司資訊

1. **Logo**: 替換 `public/Hudence_logo.png`
2. **公司名稱**: 在各組件中搜索並替換 "Hudence" 和 "艾登星"
3. **聯絡資訊**: 修改 `Contact.tsx` 中的聯絡資訊
4. **色彩主題**: 修改 `tailwind.config.js` 中的色彩配置

### 添加新內容

1. **課程**: 修改 `Courses.tsx` 中的課程資料
2. **服務**: 修改 `Services.tsx` 中的服務項目
3. **作品**: 修改 `Portfolio.tsx` 中的學生作品
4. **新聞**: 修改 `News.tsx` 中的新聞項目

## 🔧 故障排除

### 建置失敗
- 檢查所有 import 路徑是否正確
- 確保所有依賴都已安裝：`npm install`
- 檢查 TypeScript 錯誤：`npm run build`

### 部署問題
- 確保 GitHub Actions 有必要的權限
- 檢查 `.github/workflows/deploy.yml` 配置
- 確認存儲庫名稱與 `next.config.js` 中的設置一致

### 圖片問題
- 確保圖片檔案在 `public/` 目錄中
- 檢查圖片路徑是否正確
- 對於 GitHub Pages，路徑應該以 `/` 開始

## 📞 支援

如果您在部署過程中遇到問題，請：

1. 檢查 GitHub Actions 日誌
2. 參考 Next.js 官方文件
3. 查看 GitHub Pages 設置

---

**© 2024 Hudence 艾登星科技教育有限公司** 