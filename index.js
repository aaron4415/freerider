<!DOCTYPE html>
<html lang="zh-Hant">
<head>
  <meta charset="UTF-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1" />
  <title>FreeRider - 香港社群順風車 App</title>
  <meta name="description" content="FreeRider 係香港本地嘅社群順風車 App，幫你夾車、識朋友、又減少交通擠塞，推動共享經濟同環保出行。" />
  <style>
    body {
      font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", system-ui, sans-serif;
      margin: 0;
      padding: 0;
      color: #111827;
      background-color: #f9fafb;
      line-height: 1.6;
    }
    .container {
      max-width: 960px;
      margin: 0 auto;
      padding: 24px 16px 48px;
    }
    header {
      text-align: center;
      padding: 32px 0 24px;
    }
    h1 {
      font-size: 2rem;
      margin-bottom: 8px;
    }
    h2 {
      font-size: 1.4rem;
      margin-top: 32px;
      margin-bottom: 8px;
    }
    p {
      margin: 8px 0;
    }
    .tagline {
      font-size: 1.1rem;
      color: #4b5563;
    }
    .badges {
      margin-top: 20px;
      display: flex;
      justify-content: center;
      flex-wrap: wrap;
      gap: 12px;
    }
    .badge-link img {
      height: 44px;
    }
    .hero-note {
      margin-top: 10px;
      font-size: 0.9rem;
      color: #6b7280;
    }
    .section {
      margin-top: 32px;
      background: #ffffff;
      border-radius: 12px;
      padding: 20px 16px;
      box-shadow: 0 1px 3px rgba(0,0,0,0.06);
    }
    ul {
      padding-left: 1.2rem;
      margin: 8px 0;
    }
    li {
      margin: 4px 0;
    }
    .steps {
      counter-reset: step;
      list-style: none;
      padding-left: 0;
    }
    .steps li::before {
      counter-increment: step;
      content: counter(step) "．";
      font-weight: 600;
      margin-right: 4px;
    }
    footer {
      margin-top: 32px;
      text-align: center;
      font-size: 0.85rem;
      color: #6b7280;
    }
    @media (min-width: 768px) {
      h1 { font-size: 2.4rem; }
      .tagline { font-size: 1.2rem; }
      .section { padding: 24px 20px; }
    }
  </style>
</head>
<body>
  <div class="container">
    <header>
      <h1>FreeRider</h1>
      <p class="tagline">夾車・識朋友・慳錢，順手減少塞車，推動香港共享出行</p>
      <div class="badges">
        <!-- TODO: 替換成你真實嘅 App Store / Google Play 連結同官方 badge 圖 -->
        <a class="badge-link" href="YOUR_IOS_APP_STORE_LINK" target="_blank" rel="noopener">
          <img src="YOUR_APP_STORE_BADGE_IMAGE" alt="下載 FreeRider（App Store）">
        </a>
        <a class="badge-link" href="YOUR_GOOGLE_PLAY_LINK" target="_blank" rel="noopener">
          <img src="YOUR_GOOGLE_PLAY_BADGE_IMAGE" alt="下載 FreeRider（Google Play）">
        </a>
      </div>
      <p class="hero-note">由香港工程師獨立開發 · 100% 免費 · 無廣告 · 無抽佣</p>
    </header>

    <section class="section" id="about">
      <h2>FreeRider 係乜？</h2>
      <p>
        FreeRider 係一個香港本地嘅社群順風車平台，幫你輕鬆連接司機同乘客，將每日通勤變成更聰明、更環保同更有趣嘅體驗。
      </p>
      <p>
        目標唔只係幫你慳車費，仲想減少一人一車、紓緩交通擠塞，推動共享經濟，令本來都會開出嚟嘅車位可以被更好咁善用。
      </p>
    </section>

    <section class="section" id="modes">
      <h2>四大夾車模式</h2>
      <p>不論你係司機定乘客，都可以喺 FreeRider 度揾到最適合你嘅夾車方式：</p>
      <ul>
        <li><strong>司機搵乘客：</strong>分享你固定或即興路線，分擔油費同隧道費，順路幫人又幫自己。</li>
        <li><strong>司機搵司機：</strong>同另一位司機輪流揸，一人一日，長途返工放工冇咁攰。</li>
        <li><strong>乘客搵司機：</strong>輕鬆搵到順風車，唔使每日都迫地鐵、巴士。</li>
        <li><strong>夾 Taxi / Uber：</strong>分享行程，同路乘客一齊搭，車費可以平好多之餘，車位亦唔會浪費。</li>
      </ul>
    </section>

    <section class="section" id="features">
      <h2>主要功能</h2>
      <ul>
        <li><strong>智慧路線規劃：</strong>自由新增中途站點，幾多個人、幾多個落車位都睇得一清二楚。</li>
        <li><strong>內置安全聊天室：</strong>唔使交換電話號碼，喺 App 入面就可以協調上車時間同地點，保障私隱。</li>
        <li><strong>即時通知：</strong>有人加入行程或者收到新訊息，都會第一時間通知你，唔會 miss 任何更新。</li>
        <li><strong>行程管理好簡單：</strong>幾步就可以發佈、編輯同管理順風車 post，隨時更新時間同路線。</li>
        <li><strong>建立你嘅夾車社群：</strong>認識住喺同一區、行同一路線嘅人，慢慢建立屬於你自己嘅順風車 network。</li>
      </ul>
    </section>

    <section class="section" id="how-it-works">
      <h2>點樣用？</h2>
      <ol class="steps">
        <li><strong>發佈或搜尋行程：</strong>揀你係司機定乘客，輸入出發地、目的地同時間。</li>
        <li><strong>尋找配對：</strong>瀏覽適合你嘅行程，或者等其他用戶加入你開嘅車。</li>
        <li><strong>App 內傾好細節：</strong>用內置聊天室傾好上落車位、車費分擔同其他安排。</li>
        <li><strong>出發享受旅程：</strong>一齊上車、分享車費，將通勤變成一個可以識新朋友嘅社交體驗。</li>
      </ol>
    </section>

    <section class="section" id="vision">
      <h2>唔只係慳錢嘅 App</h2>
      <p>
        FreeRider 希望喺香港推動一種更聰明嘅出行方式：少啲空車、多啲共享，令道路冇咁擠塞，亦令每一公里都行得更有價值。
      </p>
      <p>
        透過夾車，同一路線嘅人可以連結起嚟，將「我自己一程」變成「我哋一程」，為環保、為城市交通、為共享經濟出一分力。
      </p>
    </section>

    <footer>
      <p>© FreeRider · Hong Kong Community Carpool App</p>
      <p>Built with ❤️ in Tin Shui Wai</p>
    </footer>
  </div>
</body>
</html>
