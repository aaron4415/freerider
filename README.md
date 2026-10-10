# freerider.hk

香港拼車 / 順風車 App 嘅 marketing website。純 static HTML，無 build process、無 framework、無 dependency — push 上 GitHub Pages 就得。

本 repo **淨係網站**。App 本身（Flutter iOS + Android）係獨立 codebase，唔喺呢度。

- **Live site**: https://www.freerider.hk
- **App Store**: [id6755711097](https://apps.apple.com/us/app/freerider-%E9%A0%86%E9%A2%A8%E8%BB%8A%E7%A4%BE%E7%BE%A4%E5%B9%B3%E5%8F%B0/id6755711097)
- **Google Play**: `com.aaron.freerider_front`

---

## 技術棧

刻意保持零依賴。市面上 marketing site 好多時會引入 React / Next.js，但呢個站得靜態內容 + 少量 vanilla JS，引入 framework 只會增加 build step 同埋 SEO 風險（CSR 內容要等 JS 先 render 完，Google 抓嘅時候未必拎到）。

| 嘢 | 用咩 |
|---|---|
| Markup | 手寫 HTML5（每個 page 獨立 `<style>`，無 shared CSS file） |
| Scripting | Vanilla JS inline（loading screen、live ticker、drawer） |
| Styling | 手寫 CSS custom property 風格，主色 `#f59e0b`（amber）on `#0a0a0a` |
| SEO | 手寫 `<meta>` + JSON-LD structured data（schema.org） |
| Deploy | GitHub Pages（`CNAME` → `www.freerider.hk`） |
| Encoding | UTF-8，**LF line endings**（`index.html` 2229 LF / 0 CRLF） |

### ⚠️ 編輯守則

- **唔好加 CRLF**。呢個 repo 全部 LF。用 Python 改檔要 `open(..., 'rb')` 或者 `newline='\n'`，否則成個 file 會出 diff noise。
- **唔好加 build step**。加 `package.json` / bundler 等於推高維護成本同 SEO 風險。
- **唔好刪 `<link rel="canonical">`**。每個 page 都有，靠佢避免 duplicate content。

---

## 專案結構

```
freerider-main/
├── index.html              # 主頁（zh-Hant-HK）— live ticker、FAQ、schema
├── en/
│   └── index.html          # English 主頁
│
├── routes/
│   ├── index.html          # 29 條路線總覽（35 個 card）
│   ├── <slug>/index.html   # 29 個路線 detail page ← 主要 SEO 資產
│   └── *.html              # 7 個 legacy redirect stub（noindex → 新 slug）
│
├── guides/                 # 6 個主題攻略 pillar
│   ├── hk-carpool-2026.html            # 3000+ words 終極攻略
│   ├── flytaxi-alternative-2026.html   # NewsArticle schema
│   ├── airport-carpool.html
│   ├── cross-border-carpool.html
│   ├── taxi-uber-split.html
│   └── weekend-fun-rides.html
│
├── blog/
│   ├── index.html          # 文章列表
│   ├── hk-taxi-vs-uber-2026.html
│   ├── hk-tunnel-tolls-2026.html
│   └── tseung-kwan-o-commute-cost-comparison.html
│
├── assets/                 # 17 個檔案：icon、screenshot、og-image、hero video
├── docs/
│   └── seo-strategy/backlink-building-2026.md
│
├── dev-log.html            # 開發日誌（用戶可見）
├── dev-log.xml             # RSS 2.0 feed（10 items）
├── llms.txt                # AI search engine 索引
├── robots.txt              # crawler policy（分 search / training / social 三類）
├── sitemap.xml             # 47 URLs + 43 image tags
│
├── terms.html / privacy.html / delete-account.html
├── SEO-AUDIT-2026-08-13.md    # gitignored，本地參考
├── SEO-STRATEGY.md             # gitignored，本地參考
└── CNAME                   # www.freerider.hk
```

---

## 內容架構

### Pillar 內容（高權重，內部 link 網絡中心）

| Page | 定位 | Schema |
|---|---|---|
| `guides/hk-carpool-2026.html` | 終極攻略，3000+ words | Article + FAQPage |
| `guides/flytaxi-alternative-2026.html` | FlyTaxi 收購新聞替代指南 | **NewsArticle** + FAQPage |
| `blog/hk-taxi-vs-uber-2026.html` | 的士 vs Uber vs 拼車比較 | Article + FAQPage |

### Route pages（29 條）

`routes/<slug>/index.html` 每頁都有：

- 10 條 route-specific FAQ（全部人手寫，唔係 template fill）
- FAQPage structured data
- 三種交通方式對比表（直通巴 / 巴士 / 拼車）
- 集合點、時間窗、注意事項

呢 29 頁 + pillar 嘅 334 條 FAQ 係呢個站最主要嘅 organic traffic 來源。

### FAQPage schema 嘅重點

每頁 FAQ 既要喺 HTML 有 `<h3>` + `<p>`，亦要喺 JSON-LD 有對應 `Question` / `acceptedAnswer`。**兩邊文字要一致** — Google 會 compare，唔一致會當 rich result 唔合格。

---

## SEO 基建

### Structured data

| Page type | Schema |
|---|---|
| Homepage | Organization (`#org`, `#author`) + SoftwareApplication + VideoObject + FAQPage + BreadcrumbList |
| Route page | Article + FAQPage + BreadcrumbList |
| Guide pillar | Article (+ NewsArticle for FlyTaxi) + FAQPage + BreadcrumbList |
| Blog post | Article + BreadcrumbList |
| Dev log | BlogPosting |

用 `#org` / `#author` 做 JSON-LD `@id` reference，所以每頁 `<head>` 都要有同一份 Organization 定義。

### AI search 基建

呢個站特意為 AI search engine 砌過一層嘢：

- **`llms.txt`** — 給 LLM 讀嘅結構化索引，按 pillar / guides / blog / routes 分組
- **`robots.txt`** — 明確分三類：
  - **AI search**（`ChatGPT-User`、`Claude-Web`、`PerplexityBot`、`FacebookBot`）→ **Allow**
  - **AI training**（`GPTBot`、`ClaudeBot`、`anthropic-ai`、`Google-Extended`、`CCBot`）→ **Disallow**
  - **Social preview**（`Twitterbot`、`facebookexternalhit` 等）→ **Allow**
- **`sitemap.xml`** — 47 URLs，每條帶 `image:image` extension（image search 用）

### 改頁面時嘅 checklist

新增或搬遷任何 page，都要同步：

1. `<link rel="canonical">` + 兩個 `hreflang`
2. `<meta property="og:url">`
3. Schema `Article.mainEntityOfPage.@id`
4. Schema `BreadcrumbList` — position 2 要跟返新上層（`/guides/` vs `/blog/`）
5. `sitemap.xml` 嘅 `<loc>` + `<lastmod>`
6. `llms.txt` 對應 section
7. 舊 path 嘅所有 inbound link（用 `grep` 掃）
8. Title suffix 跟返層級：guides 用 `｜FreeRider HK Carpool App`，blog 用 `| FreeRider 部落格`

漏任何一項 = split ranking signal。

---

## 已知問題

（2026-10-10 已修復：見 commit history。）

### 修復紀錄

- `blog/p-plate-carpool-hk.html` 嘅 10 個 stale links + sitemap entry 已移除
- `a5e95c2` commit 漏咗嘅 P 牌內容（8 個跨境 routes、`hk-carpool-2026.html` 4 條 FAQ、`dev-log.html` / `dev-log.xml`、`index.html`、`blog/index.html` meta、`sitemap.xml`、`llms.txt`）全部 scrub
- `/guides/` index page 已新增（`CollectionPage` schema，6 個 pillar cards）

### 仍然存在

- `en/index.html` 仲 link 去 `/en/delete-account.html` 同 `/en/routes/`，但呢兩個 EN 版 page 唔存在。屬於 pre-existing scope，唔喺呢次修復入面。

---

## 開發工作流

### 部署

```bash
git push origin main
```

GitHub Pages 自動 build。冇 build step，所以 push 完就出。

### 批量改頁面

改 SEO metadata 通常要 touch 十幾個 file。用 Python script 掃全部 HTML 一次過改，比手改安全：

```python
# 用 binary mode 讀寫，保住 LF line endings
with open(path, 'rb') as f:
    content = f.read().decode('utf-8')
content = content.replace(old, new)
with open(path, 'wb') as f:
    f.write(content.encode('utf-8'))
```

`open(path, 'r')` + `write()` 喺 Windows 會引入 CRLF，令每個 file 出成 888 行嘅假 diff。

### 常用指令

```bash
# 搵邊啲 file reference 某個 path（搬 page 前必做）
grep -rn "old/path" .

# 檢查有冇 broken internal link
# （見 Known problems —— 現時有 3 組）

# 睇改咗乜
git diff

# 行尾 / encoding audit
git ls-files '*.html' | ForEach-Object { ... }
```

### Line endings

全部 LF。`index.html` 係 2229 LF / 0 CRLF。`.gitattributes` 唔存在，所以 Windows 編輯器可能會引入 CRLF — commit 前用 `git diff` 確認冇成個 file 重新寫入。

---

## 內容守則

- **語言**：主站 zh-Hant-HK（繁體、香港用語），EN 版本喺 `/en/`
- **語氣**：口語廣東話（「唔使」「嘅」「咁樣」），唔用書面中文
- **Title suffix 分層**：guides `｜FreeRider HK Carpool App`，blog `| FreeRider 部落格`
- **每個 FAQ answer 都要有具體數字**（價錢、距離、時間、百分比），唔好講「通常」「大概」
- **唔好寫 P 牌內容** — 見 Known problems

---

## License

未指定。All rights reserved。
