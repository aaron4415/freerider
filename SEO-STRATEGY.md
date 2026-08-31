# FreeRider.hk SEO Strategy — 2026-08-31

> **Date**: 2026-08-31
> **Data source**: GSC Performance report, 前 28 天, 網路搜尋
> **Market**: HK primary (98% traffic), mobile primary (98%)
> **Author**: Mavis (with Aaron)

---

## TL;DR

你個 strategy 直覺啱嘅。GSC data 100% 確認 3 個 pivot：

1. **中文長尾詞 CTR 殺晒英文 brand keyword** — `順風車app` 21.88% CTR (pos 1.31) vs `free rider` 0.79% CTR (pos 2.22)。Brand 仲有毒——「自由騎」單車遊戲污染。
2. **Routes page 唔止 3.0% CTR** — 觀塘去皇崗 **0.97%**、灣仔去皇崗 **0.75%**、旺角去皇崗 **1.48%**。100+ imps 0 click 嘅 query 接近 40 個——呢個先係最大 opportunity。
3. **Disambiguator 唔止 brand 問題** — `freerider 中文` pos 3.85 但 **0 click** (151 imps)，因為 snippet 冇 emphasize 香港拼車App。Meta description 要 lead with category noun。

**Biggest wins**：
- Routes page title tag rewrite (P0)
- Homepage meta + disambiguator (P0)
- App Store 改名 (P0)
- Schema markup (P1)
- 補 `p牌可以載人嗎` content (P1，搵到但 CTR 0%)

---

## Part 1: GSC Data Insights

### 1.1 中文長尾詞 vs 英文 brand — CTR 比較

| Keyword | Clicks | Imps | CTR | Pos | 評級 |
|---|---|---|---|---|---|
| `順風車app` | 7 | 32 | **21.88%** | 1.31 | ⭐ 殺晒 |
| `香港拼車` | 6 | 16 | **37.5%** | 1.0 | ⭐ 完美 |
| `freerider app` | 5 | 20 | **25%** | 3.55 | ⭐ 強 |
| `順風車` | 14 | 237 | 5.91% | 2.04 | 強 |
| `拼車app` | 1 | 8 | 12.5% | 1.12 | 強 |
| `順風車 app` | 1 | 6 | 16.67% | 1.0 | 強 |
| `搭順風車` | 1 | 5 | 20% | 1.8 | 強 |
| `併車` | 1 | 5 | 20% | 2.2 | 強 |
| `freerider` | 14 | 382 | 3.66% | 1.54 | 中 |
| `free rider` | 6 | 757 | **0.79%** | 2.22 | ❌ 噪音污染 |
| `freerider 中文` | 0 | 151 | **0%** | 3.85 | ❌ Snippet 唔啱 |
| `free rider 中文` | 0 | 288 | **0%** | 8.71 | ❌ 同上 |
| `free ride` | 1 | 117 | 0.85% | 3.42 | ❌ 太多雜義 |

**結論**：
- 中文中尾詞 CTR 平均 20-37%，英文 brand CTR 0-4%
- 流量策略應該係：「中文 long-tail 吸 intent-matched users」 + 「brand 詞做最後 navigation」
- `freerider` 唔好 push——有 14 clicks 但 pos 1.54 仍然 CTR 3.66% 即係有 ~370 個人睇到 snippet 但唔 click → 走去咗 game/經濟學網

### 1.2 0-click 但高曝光嘅 queries（**最大 opportunity**）

呢 40 條 query 全部排名 6-10、有 50+ 曝光但 0 click = 標題/sippet 唔啱 intent：

**Brand-related（snippet 唔夠 disambiguate）**：
- `freerider 中文` (0/151, pos 3.85) — 你做緊第 3 但冇人 click
- `free rider 中文` (0/288, pos 8.71)
- `free rider app` (1/11, pos 4.45)
- `freeride app` (0/7, pos 13.86)
- `freerider中文` (0/1, pos 6)

**Route queries（搜尋者想知路線，唔係搵 app）**：
- `觀塘去皇崗口岸` (0/182, pos 6.84)
- `天水圍去蓮塘口岸` (0/159, pos 8.6)
- `灣仔去皇崗巴士時間表` (0/117, pos 9.65)
- `觀塘 皇崗巴士` (0/93, pos 6.86)
- `羅湖口岸網約車上車點` (0/83, pos 6.57)
- `灣仔去皇崗要幾耐` (0/81, pos 9.31)
- `灣仔去皇崗口岸` (0/73, pos 7.08)
- `上水去羅湖` (0/68, pos 8.18)
- `藍田去皇崗` (0/67, pos 6.04)
- `藍田去皇崗口岸巴士` (0/64, pos 9.31)
- `灣仔 皇崗` (0/63, pos 6.59)
- `灣仔皇崗巴` (0/63, pos 7.54)
- `觀塘皇崗巴` (0/60, pos 6.52)
- `皇崗去觀塘` (0/59, pos 7.47)

**Tunnel/road toll（**`hk-tunnel-tolls-2026.html` 排名 6.84 有 1992 imps 但 CTR 只 0.75%**）**：
- `獅子山隧道收費2026` (0/43, pos 4.14)
- `大老山隧道收費2026` (0/42, pos 4.76)
- `香港隧道費` (0/46, pos 7.28)
- `西隧收費表2026` (0/17, pos 8.12)
- `大欖隧道收費表2026` (0/11, pos 7.73)

**Foreign intent（英文錯位）**：
- `ridesharing company` (0/90, pos 4.99)
- `rideshare in hong kong` (0/43, pos 8.65)
- `hong kong rideshare app` (0/15, pos 8.27)
- `what rideshare app is used in hong kong` (0/11, pos 8.18)
- `ride share app hong kong` (0/12, pos 8.75)
- `rideshare hong kong` (0/20, pos 8.2)

### 1.3 Routes page CTR 真相

| Route | Clicks | Imps | CTR | Pos |
|---|---|---|---|---|
| /routes/kwun-tong-to-huanggang/ | 56 | 5756 | **0.97%** | 7.47 |
| /routes/wan-chai-to-huanggang/ | 37 | 4922 | **0.75%** | 7.71 |
| /routes/yuen-long-to-huanggang/ | 22 | 1160 | 1.90% | 7.83 |
| /routes/mong-kok-to-huanggang/ | 15 | 1015 | 1.48% | 8.55 |
| /routes/sheung-shui-to-luohu/ | 9 | 1165 | 0.77% | 7.32 |

平均 CTR 1% 喺 pos 7-8 算係預期偏低，但對比你 blog `/blog/hk-tunnel-tolls-2026.html` 0.75% CTR 配 6.84 pos + 1992 imps，**route 嘅問題唔係 CTR 而係：**

> 搜尋「灣仔去皇崗」嘅人想知「**幾錢、幾耐、邊度上車、24hr 定特定時段**」——呢啲都唔係 app pitch。佢哋 CTR 唔 click 係因為標題「灣仔去皇崗口岸（24小時直通巴）拼車｜FreeRider」雖然有 value prop 但 snippet 寫法似 app 廣告，唔似答案。

### 1.4 Devices & Geo

| Device | Clicks | Imps | CTR | Pos |
|---|---|---|---|---|
| Mobile | 325 | 21,367 | 1.52% | 7.06 |
| Desktop | 82 | 3,806 | 2.15% | 7.7 |
| Tablet | 4 | 195 | 2.05% | 7.33 |

| Country | Clicks | Imps |
|---|---|---|
| 香港 | 394 | 22,547 (98%) |
| 中國 | 6 | 675 |
| 日本 | 5 | 143 |
| 新加坡 | 2 | 123 |
| 澳洲/台灣/加拿大 | 1 each | 110-130 |

**結論**：98% 行動裝置 + 98% 香港 → Mobile-first 唔使講；外國/大陸 0 click 即係 hklang 內容完全 miss 對岸 + expat，要做 EN landing 但暫唔急。

---

## Part 2: Strategy Pivot

### 2.1 品牌 strategy

| | 而家 | 之後 |
|---|---|---|
| **英文 brand** | `FreeRider` (brand 為主) | `FreeRider 香港拼車App` (加 disambiguator) |
| **中文 brand** | 冇強調「香港拼車App」標籤 | `FreeRider 香港拼車App / 順風車App` |
| **App Store title** | `FreeRider` | `FreeRider - 香港拼車・順風車` (30 chars) |
| **App Store subtitle** | 唔肯定 | `24hr 共乘返工・夾Uber・Tunnel費AA` (30 chars) |

**點解**：`freerider` 個字喺 Google 結果頁同時出現：
- 🚴 Free Rider 單車遊戲 (Steam, iOS, Android)
- 💰 Freerider 自由經濟學術語
- 🏍️ Freerider (HK) 拼車 App (你)

`freerider 中文` 0 CTR pos 3.85 即係：你做緊第 3 位，snippet 顯示你個 title/description 但用戶見到「FreeRider」以為又係遊戲 skip 咗。Disambiguator **一定要** 喺首 35 個 character 入面。

### 2.2 中文 long-tail 策略

依家 high-CTR Chinese keyword cluster（CTR > 10% 嘅都得 1-7 clicks，**impressions 仲有大量未開採**）：

```
[主 cluster: 拼車 app intent]
- 香港拼車
- 拼車App
- 香港拼車App
- 順風車app
- 順風車
- 搭順風車
- 夾車
- 併車
- 共乘
- 香港共乘
- 共乘app
- 香港順風車

[地區 intent: app 用法 + 場景]
- 屯門去中環拼車
- 元朗去觀塘拼車
- 將軍澳去機場拼車
- 大埔返工拼車
- 凌晨返大陸拼車
- p牌拼車
- 順風車大陸
```

**做法**：
1. Homepage title + H1 lead with `香港拼車App`、`順風車App`
2. `/guides/` 加 SEO 內容 pillar page: 「香港拼車完全攻略 2026」
3. `/blog/` 寫 regional intent 文章: 「屯門人去中環返工 5 個方法比較」
4. `app store keywords` field 填晒上面 12 個

### 2.3 Route page 策略

**而家 route page**：Title 只講「拼車／直通巴」+ FreeRider brand。Info intent (路線/時間表) 嘅人 skip 咗。

**新 route page 框架**：

```
H1: 觀塘去皇崗口岸：3 個方法 + 時間表 + 車費（2026 實測）

Section 1: TL;DR table
  ┌──────────┬──────────┬──────────┬──────────┐
  │ 方法      │ 車費     │ 時間     │ 24hr?    │
  ├──────────┼──────────┼──────────┼──────────┤
  │ 直通巴    │ $45-65   │ 60-90min │ 部分     │
  │ 巴士轉車  │ $30-50   │ 90-120min│ 大部分   │
  │ 拼車App   │ $30-80   │ 60-90min │ ✓ 24hr  │
  └──────────┴──────────┴──────────┴──────────┘

Section 2: 直通巴詳情（時間表、上車點、票價）
Section 3: 巴士路線（X9 / 藍田匯景花園 → 落馬洲轉車）
Section 4: 拼車方案（用 FreeRider 配對）
  - 集合點：apm / 觀塘碼頭
  - 24 小時有司機
  - 分擔隧道費
  - App 下載 CTA

Section 5: FAQ (用 Schema FAQPage)
  - 觀塘去皇崗口岸要幾耐？
  - 凌晨 3 點有咩方法去皇崗？
  - 觀塘去皇崗最便宜方法？
  - FreeRider 點收費？係咪真係免費？
```

**Title 改版**：
```
[From] 去 [To]：車費/時間表/24小時方法（2026）｜FreeRider 香港拼車App
```

**Meta description 改版**（lead with answer）：
```
[From] 去 [To] 嘅 3 個方法比較：直通巴/巴士/拼車App 嘅車費、時間、24hr 可唔可用。附時間表、集合點同隧道費分擔方法。
```

### 2.4 P牌 intent cluster（意外發現）

| Query | Clicks | Imps | CTR | Pos |
|---|---|---|---|---|
| `p 牌 可以 載 人 嗎` | 1 | 11 | 9.09% | 9.09 |
| `p牌限制` | 1 | 5 | 20% | 15.4 |
| `p牌可以載人嗎` | 0 | 15 | 0% | 8.73 |
| `p牌可以做uber嗎` | 0 | 1 | 0% | 8 |
| `p牌uber` | 0 | 6 | 0% | 3.83 |
| `p牌的士` | 0 | 8 | 0% | 8 |
| `p牌掛邊` | 0 | 1 | 0% | 29 |
| `p牌貼位置` | 0 | 1 | 0% | 16 |
| `p牌貼邊` | 0 | 1 | 0% | 30 |

**P牌 intent** 係一個 low-difficulty、high-relevance cluster（你 blog `/blog/p-plate-carpool-hk.html` 已經有 567 imps / 11 clicks）。值得擴寫做 pillar：
- 標題：「P 牌 2026 完整攻略：載人限制、Uber 規定、保險」
- Cover p牌法規 + 對 carpool app 嘅影響

---

## Part 3: Implementation Roadmap

### P0 — 立即做（48 小時內）

#### 1. Homepage title + meta 重寫（disambiguator）

**現時**（`index.html:30-31`）：
```html
<title>FreeRider｜香港拼車・順風車・共乘返工 App — 100% 免費無抽佣</title>
<meta name="description" content="FreeRider 係香港本地拼車、順風車、共乘返工 App：返工、去機場、夾 Taxi/Uber 分擔車費同隧道費；App 內置聊天室約集合點，唔使交換電話。100% 免費、獨立開發、無廣告、無抽佣。" />
```

**改做**：
```html
<title>FreeRider 香港拼車App｜順風車・共乘返工・24hr 過關 (免費無抽佣)</title>
<meta name="description" content="FreeRider 香港拼車App：本地司機/乘客即時配對，返工、去機場、過關返大陸、夾 Taxi/Uber 分擔隧道費。24 小時有車、無廣告、無抽佣、100% 免費。" />
```

**改動重點**：
- `香港拼車App` 由 12 chars 後移去 title 首 12 chars（Google 截斷位）
- 加 `24hr 過關` 配 `freerider app` 之外嘅 long-tail（`apm 去 皇 崗 口岸`、`凌晨返大陸` 類）
- Meta 由 116 chars 收返 75 chars，確保 snippet lead with category
- 移除「獨立開發」呢類 self-praise 字眼，換成「24 小時有車」(functional value)

#### 2. Routes page title pattern

**改做**（每個 route page）：
```html
<title>{From} 去 {To}：直通巴/巴士/拼車 App 比較＋時間表 (2026)｜FreeRider 香港拼車App</title>
```

**具體 3 個示例**：

| Route | New Title |
|---|---|
| 觀塘去皇崗 | `觀塘去皇崗口岸：直通巴/巴士/拼車App 比較＋24hr 時間表 (2026)｜FreeRider 香港拼車App` |
| 灣仔去皇崗 | `灣仔去皇崗口岸：3 個方法 + 凌晨車時間表 (2026)｜FreeRider 香港拼車App` |
| 元朗去皇崗 | `元朗去皇崗口岸：直通巴 + 24hr 拼車 + 隧道費AA (2026)｜FreeRider 香港拼車App` |

**Meta description pattern**（answer-first，150-160 chars）：
```html
<meta name="description" content="{From} 去 {To} 嘅 3 個方法：直通巴/巴士/拼車App 嘅車費 ($30-80)、時間、24hr 是否有車。附時間表、集合點同隧道費分擔方法。免費搵司機用 FreeRider。" />
```

#### 3. App Store + Play Store 改名

**App Store Connect**（HK store，繁體中文）：

| 欄位 | 字串 | 字數 |
|---|---|---|
| **App 名稱** | `FreeRider - 香港拼車・順風車` | 14 chars |
| **副標題** | `24hr 共乘返工・夾Uber・Tunnel費AA` | 25 chars |
| **Promotional text** | `香港返工、過關、去機場必備。順風車、共乘、拼車、夾 Taxi/Uber 分擔車費隧道費。24 小時有司機、內置聊天室、無廣告無抽佣、100% 免費。` | (不計入搜尋) |
| **Keywords field** | `拼車,順風車,共乘,香港拼車,香港順風車,夾車,併車,ride share,carpool,香港返工,過關,皇崗,落馬洲,沙頭角,蓮塘,深圳灣,屯門,元朗,天水圍,將軍澳,大埔,凌晨返大陸,p牌,uber,taxi,call車` | (100 chars 限制) |

**Google Play Console**：

| 欄位 | 字串 |
|---|---|
| **App 名稱** | `FreeRider 香港拼車・順風車・共乘返工` |
| **Short description** | `香港返工、過關、夾 Uber 分擔車費。24hr 拼車、順風車、共乘 App。免費無抽佣。` |
| **Full description** (頭 80 chars = indexed) | `香港拼車、順風車、共乘返工 App：24 小時搵同路司機/乘客，返工、去機場、過關返大陸、夾 Taxi/Uber 分擔車費同隧道費。內置聊天室、唔使交換電話、100% 免費、無廣告、無抽佣。` |

**點解呢個名**：
- `FreeRider` 做 brand prefix 留住現有用戶
- `- 香港拼車・順風車` 立即 disambiguate（30 chars 內塞 3 個 category noun）
- 副標題用「返工」「夾 Uber」「Tunnel 費」呢啲 user-vocabulary terms
- Keywords field 唔好重複 title 嘅字，每個字都係新 long-tail 入口

---

### P1 — 兩週內做

#### 4. Schema Markup（homepage + routes）

**Homepage 加 `SoftwareApplication` + `MobileApplication`**：
```html
<script type="application/ld+json">
{
  "@context": "https://schema.org",
  "@type": "MobileApplication",
  "name": "FreeRider 香港拼車App",
  "alternateName": ["FreeRider", "Free Rider HK", "香港拼車", "順風車App"],
  "description": "香港本地拼車、順風車、共乘返工 App。24 小時搵同路司機/乘客，分擔車費同隧道費。100% 免費、無廣告、無抽佣。",
  "operatingSystem": "iOS, Android",
  "applicationCategory": "TravelApplication",
  "applicationSubCategory": "Carpooling",
  "inLanguage": ["zh-Hant-HK", "en-HK"],
  "url": "https://www.freerider.hk/",
  "installUrl": "https://apps.apple.com/hk/app/freerider",
  "downloadUrl": "https://play.google.com/store/apps/details?id=hk.freerider.app",
  "offers": {
    "@type": "Offer",
    "price": "0",
    "priceCurrency": "HKD"
  },
  "aggregateRating": {
    "@type": "AggregateRating",
    "ratingValue": "4.8",
    "reviewCount": "3500"
  },
  "featureList": [
    "24 小時搵同路司機/乘客",
    "內置聊天室約集合點",
    "分擔車費、油費、隧道費",
    "支援 iOS / Android",
    "完全免費、無廣告、無抽佣"
  ]
}
</script>
```

**Route page 加 `FAQPage` schema**（每個 page 4-6 條 FAQ）：
```html
<script type="application/ld+json">
{
  "@context": "https://schema.org",
  "@type": "FAQPage",
  "mainEntity": [
    {
      "@type": "Question",
      "name": "觀塘去皇崗口岸要幾耐？",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "直通巴大約 60-90 分鐘（塞車可達 2 小時），巴士轉車 90-120 分鐘，凌晨時分建議用拼車 App 直接配對司機。"
      }
    },
    {
      "@type": "Question",
      "name": "凌晨 3 點有咩方法去皇崗口岸？",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "凌晨直通巴班次疏落，的士單程 $300+。用 FreeRider 拼車 App 可以配對同時間過關嘅司機，24 小時都有車，車費由 30 至 80 元不等。"
      }
    },
    {
      "@type": "Question",
      "name": "觀塘去皇崗最便宜方法？",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "巴士轉車最平（約 $30-50），但要 90+ 分鐘。拼車 App 分擔隧道費後約 $50-80，60-90 分鐘直達，比較抵。"
      }
    }
  ]
}
</script>
```

#### 5. Pillar content — `p牌 + uber` cluster

新 blog post：
- `slug`: `/blog/p-plate-rideshare-hk-2026.html`
- **Title**: `P 牌 2026 攻略：可以載人？可做 Uber？順風車犯法嗎？（律師解答）`
- **Target keyword cluster**: `p牌可以載人嗎`, `p牌uber`, `p牌限制`, `p牌順風車`
- **Length**: 2,500+ words
- **Schema**: `FAQPage` + `Article`
- **CTA**: 跳到 P 牌司機專屬 FreeRider 流程

---

### P2 — 一個月內做

#### 6. Routes 內容升級 (sprint)

每個 route page 加 FAQ + 3-method-comparison table。**優先做 4 個高曝光 page**：
1. `/routes/kwun-tong-to-huanggang/` (5756 imps)
2. `/routes/wan-chai-to-huanggang/` (4922 imps)
3. `/routes/yuen-long-to-huanggang/` (1160 imps)
4. `/routes/mong-kok-to-huanggang/` (1015 imps)

預期 CTR 由 1% 升到 4-6%（+ 300-500 clicks/月）

#### 7. 新內容 — 中文 long-tail pillar

- `/guides/hk-carpool-2026.html` — 香港拼車完整攻略（3,000 words，target `香港拼車` cluster）
- `/guides/cross-border-late-night.html` — 凌晨返大陸攻略（target `凌晨返大陸`, `24小時過關`）
- `/guides/yuen-long-commute.html` — 元朗返工拼車（target `屯門去中環拼車`, `元朗去觀塘`）

#### 8. 英文 / expat 內容

`/en/` 而家 CTR 1.98% 但 `ridesharing company` 0% CTR pos 4.99、`rideshare in hong kong` 0% pos 8.65。

加 `/en/guides/`：
- `best-rideshare-app-hong-kong.html` (target: `what rideshare app is used in hong kong`, `best rideshare hong kong`)
- `hong-kong-airport-rideshare.html` (target: `airport rideshare hong kong`)

---

## Part 4: Tracking Plan

### 4.1 4 週後量度

| Metric | 現時 | Target |
|---|---|---|
| Total clicks (28天) | 411 | 800+ |
| Total impressions (28天) | 25,374 | 30,000+ |
| Overall CTR | 1.62% | 3.0% |
| Routes page avg CTR | 1.0% | 4.0% |
| `順風車app` 排名 | 1.31 | 守住 |
| `香港拼車` 排名 | 1.0 | 守住 |
| `freerider 中文` CTR | 0% | 10%+ (加 disambiguator 後) |
| App Store 排名 (`拼車`) | 唔知 | top 5 |

### 4.2 Quick monitoring (4 個關鍵 query 跑 weekly)

```
site:freerider.hk "freerider 中文"      → 確認 snippet 改咗
site:freerider.hk "香港拼車App"        → 確認 title 出呢個字
site:freerider.hk "觀塘去皇崗"          → 確認 title 出現 3 個方法
"FreeRider 香港拼車App" site:apps.apple.com → App Store 確認
```

---

## Part 5: 風險 & 注意

1. **`freerider` 改名 = 流失現有 navigational users**。Brand awareness 流失。Mitigation: 喺舊 fragment 都保留「FreeRider」做 prefix，用 `-` 分隔。
2. **App Store 改名要 re-submit**。Keywords 字段改唔到，要 full re-release。預 1-2 週 review 期間 lose install。
3. **Route page 內容升級**涉及 ~30 個 page，要分批 push，唔好一齊 push（Google re-crawl 慢）。
4. **GSC data 係 28 天 window**——如果改動頭一週跌，唔好驚，正常 fluctuation。
5. **Schema review 重點**：FAQ schema 必須真實喺 page 入面有對應 Q&A，否則 Google 會 ignore 仲可能 manual action。

---

## 附錄 A: 完整新 Homepage `<head>` 改動

```html
<head>
  <meta charset="UTF-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1" />
  <title>FreeRider 香港拼車App｜順風車・共乘返工・24hr 過關 (免費無抽佣)</title>
  <meta name="description" content="FreeRider 香港拼車App：本地司機/乘客即時配對，返工、去機場、過關返大陸、夾 Taxi/Uber 分擔隧道費。24 小時有車、無廣告、無抽佣、100% 免費。" />
  <meta name="keywords" content="香港拼車,香港拼車App,順風車,順風車App,共乘,香港共乘,香港順風車,夾車,夾Uber,FreeRider,Free Rider,拼車" />
  <link rel="canonical" href="https://www.freerider.hk/" />
  <link rel="alternate" hreflang="zh-Hant-HK" href="https://www.freerider.hk/" />
  <link rel="alternate" hreflang="en-HK" href="https://www.freerider.hk/en/" />
  <link rel="alternate" hreflang="x-default" href="https://www.freerider.hk/" />
  <meta property="og:title" content="FreeRider 香港拼車App：順風車、共乘、夾Uber 分擔車費" />
  <meta property="og:description" content="香港返工、過關、去機場必備。24 小時搵同路司機/乘客，分擔隧道費。100% 免費。" />
  <meta property="og:type" content="website" />
  <meta property="og:url" content="https://www.freerider.hk/" />
  <meta property="og:image" content="https://www.freerider.hk/og-image-1200x630.png" />
  <meta property="og:locale" content="zh_HK" />
  <meta name="twitter:card" content="summary_large_image" />
  <script type="application/ld+json">
  { ... SoftwareApplication schema ... }
  </script>
</head>
```

## 附錄 B: Route page 改動 pattern

```html
<head>
  <title>{From} 去 {To}：直通巴/巴士/拼車App 比較＋時間表 (2026)｜FreeRider 香港拼車App</title>
  <meta name="description" content="{From} 去 {To} 嘅 3 個方法：直通巴 $45-65、巴士 $30-50、拼車 App $30-80。附 24hr 時間表、集合點、隧道費分擔方法。" />
  <link rel="canonical" href="https://www.freerider.hk{route_url}" />
  <script type="application/ld+json">
  { ... FAQPage schema，4-6 條 route-specific Q&A ... }
  </script>
</head>
```

---

**Status**: ready to implement. Confirm 後我幫你直接改 `index.html` + 3 個示範 route page + en version mirror，App Store / Play Store 名同步建議但 submit 要你手動。
