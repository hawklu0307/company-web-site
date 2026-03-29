
const topics = [
  { id: "5g", zh: "次世代5G技術", en: "Next-Gen 5G Technology", img: "images/5g.jpg", descZh: "探索高速、低延遲的行動通訊未來。", descEn: "Explore the future of ultra-fast, low-latency mobile communications." },
  { id: "leo", zh: "低軌衛星通訊技術", en: "Low Earth Orbit Satellite Communication", img: "images/leo.jpg", descZh: "連結全球每個角落的衛星網絡。", descEn: "Connecting every corner of the globe with satellite networks." },
  { id: "sar", zh: "SAR無線電偵測技術", en: "SAR Radio Detection Technology", img: "images/sar.jpg", descZh: "精確的無線電波偵測與定位能力。", descEn: "Precise radio wave detection and positioning capabilities." },
  { id: "lwir", zh: "LWIR遠紅外線偵測技術", en: "Long-Wave Infrared Detection Technology", img: "images/lwir.jpg", descZh: "穿越黑暗與霧氣，捕捉每一絲熱能。", descEn: "Capture every bit of thermal energy through darkness and fog." },
  { id: "ai", zh: "AI影像目標偵測", en: "AI Image Target Detection", img: "images/ai.jpg", descZh: "智慧化辨識與自動追蹤目標。", descEn: "Smart recognition and automatic target tracking." },
  { id: "vr360", zh: "無雲台VR360技術", en: "Gimbal-Free VR360 Technology", img: "images/vr360.jpg", descZh: "超穩定、超沉浸式的全景視覺體驗。", descEn: "Ultra-stable, immersive panoramic experience." },
  { id: "vtol", zh: "VTOL長時間巡航機型(開發中)", en: "VTOL Long-Endurance Aircraft (Under Development)", img: "images/vtol.jpg", descZh: "革命性的垂直起降長航時無人機設計。", descEn: "Revolutionary vertical take-off and long-endurance UAV design." }
];

let currentLang = "zh";

function switchLanguage() {
  currentLang = currentLang === "zh" ? "en" : "zh";
  render();
}

function render() {
  document.getElementById('hero-title').textContent = currentLang === "zh" ? "Stinger Drone" : "Stinger Drone";
  document.getElementById('hero-description').textContent = currentLang === "zh" ? 
    "專注於救災、巡防、農業與其他應用，提供量身訂製的無人機解決方案。" : 
    "Focusing on customized UAV solutions for disaster relief, patrol, agriculture, and more.";
  document.getElementById('footer-text').innerHTML = currentLang === "zh" ? 
    "©2025 STINGER Drone. 保留所有權利。<br>聯絡信箱: <a href='mailto:sales@stinger.com.tw'>sales@stinger.com.tw</a>" :
    "©2025 STINGER Drone. All rights reserved.<br>Contact: <a href='mailto:sales@stinger.com.tw'>sales@stinger.com.tw</a>";
}

function renderTopics() {
  const nav = document.getElementById('topics');
  topics.forEach(topic => {
    const btn = document.createElement('button');
    btn.textContent = topic.zh;
    btn.onclick = () => selectTopic(topic);
    nav.appendChild(btn);
  });
}

function selectTopic(topic) {
  const content = document.getElementById('content');
  content.innerHTML = `
    <img src="${topic.img}" style="width:100%;max-width:800px;margin-bottom:1rem;">
    <h2>${currentLang === "zh" ? topic.zh : topic.en}</h2>
    <p>${currentLang === "zh" ? topic.descZh : topic.descEn}</p>
  `;
}

document.getElementById('lang-toggle').addEventListener('click', () => {
  switchLanguage();
  render();
});

render();
renderTopics();
