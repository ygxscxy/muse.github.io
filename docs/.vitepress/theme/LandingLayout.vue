<script setup lang="ts">
import { ref, onMounted, onUnmounted } from "vue"

const heroVisible = ref(false)
const featuresVisible = ref(false)
const highlightsVisible = ref(false)
const demoVisible = ref(false)
const ctaVisible = ref(false)

const whatsNewVisible = ref(false)
const statsVisible = ref(false)
const techStackVisible = ref(false)
const heroScreenshotRef = ref<HTMLElement | null>(null)

const features = [
  {
    icon: "📝",
    title: "WYSIWYG 实时渲染",
    description:
      "所见即所得的编辑体验，输入即呈现。支持标题、列表、表格、任务清单、引用等丰富格式，让 Markdown 编辑如写文档般自然流畅。",
  },
  {
    icon: "💻",
    title: "代码块 & 数学公式",
    description:
      "内置 190+ 种语言的语法高亮，支持 KaTeX 数学公式和 Mermaid 图表渲染。技术写作、学术笔记、流程图绘制，一站搞定。",
  },
  {
    icon: "📁",
    title: "文件管理器",
    description:
      "内置侧边栏文件树，支持文件夹展开/折叠、新建、重命名、删除。以纯 Markdown 文件形式存储，你的数据永远属于你。",
  },
]

const highlights = [
  { icon: "🌙", title: "深色 & 浅色主题", desc: "一键切换，护眼又美观" },
  { icon: "⌨️", title: "快捷键支持", desc: "全面键盘操作，效率翻倍" },
  { icon: "🖼️", title: "图片拖拽插入", desc: "直接拖放，自动上传本地路径" },
  { icon: "📤", title: "多种格式导出", desc: "HTML / PDF / Markdown 随心导出" },
  { icon: "🔍", title: "全文搜索", desc: "快速定位文档中的任意内容" },
  { icon: "⚡", title: "极速启动", desc: "基于 Electron，秒开即用" },
]

// What's New — 文件预览与代码高亮
const whatsNew = [
  {
    icon: "📊",
    title: "Office 文档预览",
    desc: "支持 Excel、Word、PPT、XMind 等办公文档在应用内直接预览，无需切换软件",
  },
  {
    icon: "🎨",
    title: "代码自动语法高亮",
    desc: "自动识别 JS/TS/Python/JSON/HTML/CSS/Shell/SQL 等语言，一键高亮",
  },
  {
    icon: "📁",
    title: "多格式文件拖拽打开",
    desc: "拖拽即可打开 xlsx、docx、pptx、xmind 等非 Markdown 文件，预览编辑自动切换",
  },
]

// Stats Strip 数据
const stats = [
  { value: 10000, suffix: "+", label: "下载次数" },
  { value: 500, suffix: "+", label: "GitHub Stars" },
  { value: 3, suffix: "", label: "平台支持" },
  { value: 190, suffix: "+", label: "高亮语言" },
]

// Tech Stack
const techStack = ["Electron", "React", "TipTap", "TailwindCSS", "VitePress"]

let scrollRafId: number | null = null

onMounted(() => {
  heroVisible.value = true
  setTimeout(() => {
    featuresVisible.value = true
  }, 300)
  setTimeout(() => {
    highlightsVisible.value = true
  }, 500)
  setTimeout(() => {
    demoVisible.value = true
  }, 700)
  setTimeout(() => {
    ctaVisible.value = true
  }, 900)
  setTimeout(() => (whatsNewVisible.value = true), 1100)
  setTimeout(() => (statsVisible.value = true), 1300)
  setTimeout(() => (techStackVisible.value = true), 1500)

  const handleScroll = () => {
    if (scrollRafId !== null) return
    scrollRafId = requestAnimationFrame(() => {
      if (heroScreenshotRef.value) {
        const scrolled = window.scrollY
        const rate = scrolled * 0.15
        heroScreenshotRef.value.style.transform = `translateY(${rate}px)`
      }

      if (statsVisible.value) {
        document.querySelectorAll(".stat-number").forEach((el) => {
          const target = parseInt(el.getAttribute("data-target") || "0")
          const current = parseInt(
            el.textContent?.replace(/[^0-9]/g, "") || "0",
          )
          if (current < target) {
            const increment = Math.ceil(target / 60)
            el.textContent = `${Math.min(current + increment, target)}${el.textContent?.match(/[^\d]+$/)?.[0] || ""}`
          }
        })
      }
      scrollRafId = null
    })
  }

  window.addEventListener("scroll", handleScroll, { passive: true })
})

onUnmounted(() => {
  if (scrollRafId !== null) cancelAnimationFrame(scrollRafId)
})
</script>

<template>
  <div class="landing-root">
    <!-- Hero Section -->
    <section class="hero-section">
      <div class="hero-vignette" />
      <div class="hero-content" :class="{ visible: heroVisible }">
        <div class="hero-brand">
          <span class="hero-icon">✦</span>
          <span class="hero-name">Muse</span>
        </div>
        <h1 class="hero-title">现代 Markdown 编辑器</h1>
        <p class="hero-subtitle">
          不止 Markdown —— Office 预览、代码高亮、XMind 导图，一揽子搞定
        </p>
        <div class="hero-actions">
          <a href="/download" class="hero-cta">下载 Muse</a>
        </div>
        <p class="hero-version">v1.1.0 · 免费 · 跨平台</p>
      </div>
      <div class="hero-gradient-orb" />
    </section>

    <!-- Features Section -->
    <section class="features-section" :class="{ visible: featuresVisible }">
      <div class="section-header">
        <h2 class="section-title">为什么选择 Muse？</h2>
        <p class="section-desc">为技术写作而生，让 Markdown 编辑成为一种享受</p>
      </div>
      <div class="features-grid">
        <div
          v-for="(feature, index) in features"
          :key="index"
          class="feature-item"
        >
          <div class="feature-icon">{{ feature.icon }}</div>
          <h3 class="feature-title">{{ feature.title }}</h3>
          <p class="feature-desc">{{ feature.description }}</p>
        </div>
      </div>
    </section>

    <!-- Highlights Section -->
    <section class="highlights-section" :class="{ visible: highlightsVisible }">
      <div class="highlights-grid">
        <div
          v-for="(item, index) in highlights"
          :key="index"
          class="highlight-item"
        >
          <div class="highlight-icon">{{ item.icon }}</div>
          <div class="highlight-body">
            <h4 class="highlight-title">{{ item.title }}</h4>
            <p class="highlight-desc">{{ item.desc }}</p>
          </div>
        </div>
      </div>
    </section>

    <!-- What's New Section -->
    <section class="whats-new-section" :class="{ visible: whatsNewVisible }">
      <div class="section-header">
        <span class="section-badge">NEW</span>
        <h2 class="section-title">文件预览 & 代码高亮</h2>
        <p class="section-desc">不止 Markdown，更多格式一揽子搞定</p>
      </div>
      <div class="whats-new-grid">
        <div
          v-for="(item, index) in whatsNew"
          :key="index"
          class="whats-new-card"
          :style="{ transitionDelay: `${index * 120}ms` }"
        >
          <div class="whats-new-icon">{{ item.icon }}</div>
          <div class="whats-new-body">
            <h3 class="whats-new-title">{{ item.title }}</h3>
            <p class="whats-new-desc">{{ item.desc }}</p>
          </div>
        </div>
      </div>
    </section>

    <!-- Stats Strip Section -->
    <section class="stats-strip-section" :class="{ visible: statsVisible }">
      <div class="stats-strip-inner">
        <div v-for="(stat, index) in stats" :key="index" class="stat-item">
          <span class="stat-number" :data-target="stat.value"
            >{{ stat.value }}{{ stat.suffix }}</span
          >
          <span class="stat-label">{{ stat.label }}</span>
        </div>
      </div>
    </section>

    <!-- Demo Section -->
    <section class="demo-section" :class="{ visible: demoVisible }">
      <div class="section-header">
        <h2 class="section-title">一探究竟</h2>
        <p class="section-desc">简洁优雅的编辑界面，专注你的每一行文字</p>
      </div>
      <div class="demo-mock">
        <div class="mock-titlebar">
          <div class="mock-dots">
            <span class="mock-dot dot-red" />
            <span class="mock-dot dot-yellow" />
            <span class="mock-dot dot-green" />
          </div>
          <span class="mock-filename">untitled.md</span>
        </div>
        <div class="mock-toolbar">
          <span class="mock-toolbar-item">H1</span>
          <span class="mock-toolbar-item">B</span>
          <span class="mock-toolbar-item">I</span>
          <span class="mock-toolbar-divider" />
          <span class="mock-toolbar-item">≡</span>
          <span class="mock-toolbar-item">🔗</span>
          <span class="mock-toolbar-item">◇</span>
          <span class="mock-toolbar-divider" />
          <span class="mock-toolbar-item">▨</span>
          <span class="mock-toolbar-item">∑</span>
          <span class="mock-toolbar-item">⬡</span>
        </div>
        <div class="mock-editor">
          <div class="mock-line mock-heading">
            <span class="mock-hash"># </span>Getting Started
          </div>
          <div class="mock-line mock-empty" />
          <div class="mock-line">
            Welcome to <span class="mock-bold">Muse</span> — a modern markdown
            editor built for
          </div>
          <div class="mock-line">
            developers and writers who care about their craft.
          </div>
          <div class="mock-line mock-empty" />
          <div class="mock-line mock-heading">
            <span class="mock-hash">## </span>Features
          </div>
          <div class="mock-line mock-empty" />
          <div class="mock-line">
            - Real-time <span class="mock-bold">WYSIWYG</span> preview
          </div>
          <div class="mock-line">
            - Syntax highlighting for <span class="mock-code">code blocks</span>
          </div>
          <div class="mock-line">
            - KaTeX math formulas: <span class="mock-math">$E = mc^2$</span>
          </div>
          <div class="mock-line">- Mermaid diagrams</div>
          <div class="mock-line mock-empty" />
          <div class="mock-line mock-cursor">|</div>
        </div>
      </div>
    </section>

    <!-- Tech Stack Section -->
    <section class="tech-stack-section" :class="{ visible: techStackVisible }">
      <p class="tech-stack-label">Built with</p>
      <div class="tech-stack-list">
        <span
          v-for="(tech, index) in techStack"
          :key="index"
          class="tech-stack-item"
          >{{ tech }}</span
        >
      </div>
    </section>

    <!-- CTA Section -->
    <section class="cta-section" :class="{ visible: ctaVisible }">
      <div class="cta-content">
        <h2 class="cta-title">开始创作</h2>
        <p class="cta-desc">下载 Muse，体验新一代 Markdown 编辑器</p>
        <div class="cta-buttons">
          <a href="/download" class="cta-button">
            <span class="cta-button-icon">🪟</span>
            <span class="cta-button-text">
              <span class="cta-button-label">Windows</span>
              <span class="cta-button-sub">下载 .exe</span>
            </span>
          </a>
          <a href="/download" class="cta-button">
            <span class="cta-button-icon">🍎</span>
            <span class="cta-button-text">
              <span class="cta-button-label">macOS</span>
              <span class="cta-button-sub">下载 .dmg</span>
            </span>
          </a>
          <a href="/download" class="cta-button">
            <span class="cta-button-icon">🐧</span>
            <span class="cta-button-text">
              <span class="cta-button-label">Linux</span>
              <span class="cta-button-sub">下载 .AppImage</span>
            </span>
          </a>
        </div>
        <p class="cta-version">v1.1.0</p>
      </div>
    </section>
  </div>
</template>

<style scoped>
.landing-root {
  overflow: hidden;
}

/* ─── Hero ─── */
.hero-section {
  position: relative;
  min-height: calc(100vh - var(--vp-nav-height, 64px));
  display: flex;
  align-items: center;
  justify-content: center;
  background: linear-gradient(
    180deg,
    var(--muse-hero-bg-start) 0%,
    var(--muse-hero-bg-end) 100%
  );
  overflow: hidden;
}

.hero-vignette {
  position: absolute;
  inset: 0;
  background: radial-gradient(
    ellipse at center,
    transparent 40%,
    rgba(0, 0, 0, 0.08) 100%
  );
  pointer-events: none;
  z-index: 1;
}

html.dark .hero-vignette {
  background: radial-gradient(
    ellipse at center,
    transparent 40%,
    rgba(10, 10, 15, 0.7) 100%
  );
}

.hero-gradient-orb {
  position: absolute;
  top: 50%;
  left: 50%;
  width: 600px;
  height: 600px;
  transform: translate(-50%, -50%);
  background: radial-gradient(circle, var(--muse-hero-orb) 0%, transparent 70%);
  pointer-events: none;
  animation: float 6s ease-in-out infinite;
}

.hero-content {
  position: relative;
  z-index: 2;
  text-align: center;
  padding: 2rem;
  opacity: 0;
  transform: translateY(40px);
  transition: all 0.8s cubic-bezier(0.16, 1, 0.3, 1);
}

.hero-content.visible {
  opacity: 1;
  transform: translateY(0);
}

.hero-brand {
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 0.5rem;
  margin-bottom: 1.5rem;
}

.hero-icon {
  font-size: 1.4rem;
  color: var(--vp-c-brand-1);
}

.hero-name {
  font-size: 1.1rem;
  font-weight: 600;
  color: var(--vp-c-text-2);
  letter-spacing: 0.15em;
  text-transform: uppercase;
}

.hero-title {
  font-size: clamp(2.8rem, 6vw, 4.5rem);
  font-weight: 800;
  line-height: 1.1;
  letter-spacing: -0.03em;
  margin: 0 0 1rem;
  background: linear-gradient(
    135deg,
    var(--muse-hero-text) 0%,
    var(--vp-c-text-2) 100%
  );
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
}

.hero-subtitle {
  font-size: clamp(1.05rem, 2vw, 1.25rem);
  color: var(--muse-hero-subtitle);
  margin: 0 0 2rem;
  font-weight: 400;
}

.hero-actions {
  display: flex;
  justify-content: center;
  gap: 1rem;
  margin-bottom: 1.25rem;
}

.hero-cta {
  display: inline-flex;
  align-items: center;
  gap: 0.5rem;
  padding: 0.85rem 2.4rem;
  font-size: 1rem;
  font-weight: 600;
  color: #fff;
  background: var(--vp-c-brand-1);
  border-radius: 8px;
  text-decoration: none;
  transition: all 0.2s ease;
}

.hero-cta:hover {
  background: var(--vp-c-brand-2);
  transform: translateY(-1px);
  color: #fff;
}

/* ─── Hero Screenshot ─── */
.hero-screenshot {
  margin-top: 3rem;
  position: relative;
  will-change: transform;
}
.hero-screenshot img {
  width: 100%;
  max-width: 960px;
  border-radius: 12px;
  border: 1px solid var(--muse-mock-border, var(--vp-c-divider));
  box-shadow: 0 16px 64px rgba(0, 0, 0, 0.12);
  transition:
    transform 0.4s ease,
    box-shadow 0.4s ease;
}
html.dark .hero-screenshot img {
  box-shadow: 0 16px 64px rgba(0, 0, 0, 0.4);
}
.hero-screenshot:hover img {
  transform: translateY(-6px);
  box-shadow: 0 24px 80px rgba(0, 0, 0, 0.18);
}

.hero-version {
  font-size: 0.85rem;
  color: var(--vp-c-text-3);
  margin: 0;
}

/* ─── Sections Shared ─── */
.section-header {
  text-align: center;
  margin-bottom: 3.5rem;
}

.section-title {
  font-size: clamp(2rem, 4vw, 2.8rem);
  font-weight: 700;
  letter-spacing: -0.02em;
  margin: 0 0 0.75rem;
  color: var(--vp-c-text-1);
}

.section-desc {
  font-size: 1.1rem;
  color: var(--muse-section-desc);
  margin: 0;
}

/* ─── Features ─── */
.features-section {
  padding: 6rem 2rem;
  max-width: 1100px;
  margin: 0 auto;
  opacity: 0;
  transform: translateY(30px);
  transition: all 0.6s ease;
}

.features-section.visible {
  opacity: 1;
  transform: translateY(0);
}

.features-grid {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 2rem;
}

.feature-item {
  text-align: center;
  padding: 2rem 1.5rem;
  border-radius: 12px;
  transition: background 0.2s ease;
}

.feature-item:hover {
  background: var(--vp-c-bg-soft);
}

.feature-icon {
  font-size: 2.5rem;
  margin-bottom: 1rem;
  display: block;
}

.feature-title {
  font-size: 1.2rem;
  font-weight: 600;
  margin: 0 0 0.6rem;
  color: var(--vp-c-text-1);
}

.feature-desc {
  font-size: 0.95rem;
  line-height: 1.6;
  color: var(--muse-section-desc);
  margin: 0;
}

/* ─── Highlights ─── */
.highlights-section {
  padding: 4rem 2rem;
  max-width: 1100px;
  margin: 0 auto;
  opacity: 0;
  transform: translateY(30px);
  transition: all 0.6s ease;
}

.highlights-section.visible {
  opacity: 1;
  transform: translateY(0);
}

.highlights-grid {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 1rem;
}

.highlight-item {
  display: flex;
  align-items: flex-start;
  gap: 1rem;
  padding: 1.25rem;
  background: var(--vp-c-bg-soft);
  border: 1px solid var(--vp-c-divider);
  border-radius: 12px;
  transition: all 0.2s ease;
}

.highlight-item:hover {
  border-color: var(--vp-c-brand-1);
  background: var(--vp-c-bg-mute);
}

.highlight-icon {
  font-size: 1.5rem;
  flex-shrink: 0;
  margin-top: 2px;
}

.highlight-title {
  font-size: 0.95rem;
  font-weight: 600;
  color: var(--vp-c-text-1);
  margin: 0 0 0.25rem 0;
}

.highlight-desc {
  font-size: 0.85rem;
  color: var(--vp-c-text-2);
  margin: 0;
  line-height: 1.5;
}

/* ─── What's New ─── */
.whats-new-section {
  padding: 5rem 2rem;
  max-width: 900px;
  margin: 0 auto;
  opacity: 0;
  transform: translateY(30px);
  transition: all 0.6s ease;
}
.whats-new-section.visible {
  opacity: 1;
  transform: translateY(0);
}
.section-badge {
  display: inline-block;
  padding: 0.25rem 0.75rem;
  background: linear-gradient(
    135deg,
    rgba(99, 102, 241, 0.15),
    rgba(139, 92, 246, 0.15)
  );
  border: 1px solid rgba(139, 92, 246, 0.25);
  border-radius: 100px;
  font-size: 0.8rem;
  font-weight: 600;
  color: #a78bfa;
  letter-spacing: 0.05em;
  margin-bottom: 1rem;
}
.whats-new-grid {
  display: flex;
  flex-direction: column;
  gap: 1rem;
}
.whats-new-card {
  display: flex;
  align-items: flex-start;
  gap: 1.25rem;
  padding: 1.5rem;
  background: var(--vp-c-bg-soft);
  border: 1px solid var(--vp-c-divider);
  border-radius: 14px;
  opacity: 0;
  transform: translateX(-20px);
  transition: all 0.5s cubic-bezier(0.16, 1, 0.3, 1);
}
.whats-new-section.visible .whats-new-card {
  opacity: 1;
  transform: translateX(0);
}
.whats-new-card:hover {
  border-color: rgba(139, 92, 246, 0.35);
  background: var(--vp-c-bg-mute);
  transform: translateX(4px);
}
.whats-new-icon {
  font-size: 1.75rem;
  flex-shrink: 0;
  width: 2.5rem;
  height: 2.5rem;
  display: flex;
  align-items: center;
  justify-content: center;
  background: linear-gradient(
    135deg,
    rgba(139, 92, 246, 0.12),
    rgba(99, 102, 241, 0.08)
  );
  border-radius: 10px;
}
.whats-new-title {
  font-size: 1.05rem;
  font-weight: 600;
  color: var(--vp-c-text-1);
  margin: 0 0 0.35rem 0;
}
.whats-new-desc {
  font-size: 0.9rem;
  color: var(--muse-section-desc);
  margin: 0;
  line-height: 1.55;
}

/* ─── Stats Strip ─── */
.stats-strip-section {
  padding: 4rem 2rem;
  text-align: center;
  opacity: 0;
  transform: translateY(30px);
  transition: all 0.6s ease;
  background: linear-gradient(
    180deg,
    transparent,
    var(--muse-stats-bg, rgba(15, 23, 42, 0.5)),
    transparent
  );
}
.stats-strip-section.visible {
  opacity: 1;
  transform: translateY(0);
}
.stats-strip-inner {
  max-width: 900px;
  margin: 0 auto;
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 2rem;
}
.stat-item {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 0.4rem;
}
.stat-number {
  font-size: clamp(1.8rem, 3vw, 2.4rem);
  font-weight: 800;
  color: var(--vp-c-text-1);
  letter-spacing: -0.02em;
  font-variant-numeric: tabular-nums;
}
.stat-label {
  font-size: 0.85rem;
  color: var(--vp-c-text-3);
  font-weight: 500;
}

/* ─── Demo ─── */
.demo-section {
  padding: 6rem 2rem;
  max-width: 800px;
  margin: 0 auto;
  opacity: 0;
  transform: translateY(30px);
  transition: all 0.6s ease;
}

.demo-section.visible {
  opacity: 1;
  transform: translateY(0);
}

.demo-mock {
  background: var(--muse-mock-bg);
  border: 1px solid var(--muse-mock-border);
  border-radius: 12px;
  overflow: hidden;
  box-shadow: 0 8px 40px rgba(0, 0, 0, 0.1);
}

html.dark .demo-mock {
  box-shadow: 0 8px 40px rgba(0, 0, 0, 0.3);
}

.mock-titlebar {
  display: flex;
  align-items: center;
  gap: 0.6rem;
  padding: 0.75rem 1rem;
  background: var(--muse-mock-titlebar);
  border-bottom: 1px solid var(--muse-mock-border);
}

.mock-dots {
  display: flex;
  gap: 6px;
}

.mock-dot {
  width: 10px;
  height: 10px;
  border-radius: 50%;
}

.dot-red {
  background: #ff5f56;
}
.dot-yellow {
  background: #ffbd2e;
}
.dot-green {
  background: #27c93f;
}

.mock-filename {
  font-size: 0.82rem;
  color: var(--vp-c-text-3);
  margin-left: auto;
  margin-right: auto;
}

.mock-toolbar {
  display: flex;
  align-items: center;
  gap: 0.3rem;
  padding: 0.5rem 1rem;
  background: var(--muse-mock-toolbar);
  border-bottom: 1px solid var(--muse-mock-border);
  flex-wrap: wrap;
}

.mock-toolbar-item {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  min-width: 28px;
  height: 28px;
  padding: 0 6px;
  font-size: 0.78rem;
  color: var(--vp-c-text-3);
  border-radius: 4px;
  cursor: default;
}

.mock-toolbar-divider {
  width: 1px;
  height: 18px;
  background: var(--muse-mock-border);
  margin: 0 4px;
}

.mock-editor {
  padding: 1.25rem 1.25rem 2rem;
  font-family:
    "Inter",
    -apple-system,
    BlinkMacSystemFont,
    "Segoe UI",
    monospace;
  font-size: 0.9rem;
  line-height: 1.7;
  min-height: 220px;
}

.mock-line {
  color: var(--muse-mock-text);
}

.mock-heading {
  color: var(--muse-mock-heading);
  font-weight: 600;
  font-size: 1rem;
}

.mock-hash {
  color: var(--muse-mock-hash);
  opacity: 0.6;
}

.mock-bold {
  color: var(--muse-mock-bold);
  font-weight: 600;
}

.mock-code {
  font-family: "JetBrains Mono", "Fira Code", monospace;
  background: var(--muse-mock-code-bg);
  color: var(--muse-mock-code-text);
  padding: 0.1em 0.3em;
  border-radius: 3px;
  font-size: 0.85em;
}

.mock-math {
  font-style: italic;
  color: var(--muse-mock-math);
}

.mock-empty {
  height: 0.5em;
}

.mock-cursor {
  animation: blink 1s step-end infinite;
  color: var(--muse-mock-hash);
}

@keyframes blink {
  50% {
    opacity: 0;
  }
}

/* ─── Tech Stack ─── */
.tech-stack-section {
  padding: 3rem 2rem;
  text-align: center;
  opacity: 0;
  transform: translateY(20px);
  transition: all 0.5s ease;
}
.tech-stack-section.visible {
  opacity: 1;
  transform: translateY(0);
}
.tech-stack-label {
  font-size: 0.85rem;
  color: var(--vp-c-text-3);
  margin: 0 0 1rem 0;
  letter-spacing: 0.08em;
  text-transform: uppercase;
}
.tech-stack-list {
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 0.5rem;
  flex-wrap: wrap;
}
.tech-stack-item {
  padding: 0.4rem 1rem;
  font-family: var(--vp-font-family-mono);
  font-size: 0.85rem;
  font-weight: 500;
  color: var(--vp-c-text-2);
  background: var(--vp-c-bg-soft);
  border: 1px solid var(--vp-c-divider);
  border-radius: 8px;
  white-space: nowrap;
}

/* ─── CTA ─── */
.cta-section {
  padding: 6rem 2rem;
  text-align: center;
  opacity: 0;
  transform: translateY(30px);
  transition: all 0.6s ease;
  background: linear-gradient(
    135deg,
    var(--muse-cta-bg-start) 0%,
    var(--muse-cta-bg-end) 50%,
    var(--muse-cta-bg-start) 100%
  );
  position: relative;
  overflow: hidden;
}

.cta-section.visible {
  opacity: 1;
  transform: translateY(0);
}

.cta-section::before {
  content: "";
  position: absolute;
  top: 50%;
  left: 50%;
  width: 500px;
  height: 500px;
  transform: translate(-50%, -50%);
  background: radial-gradient(circle, var(--muse-cta-orb) 0%, transparent 70%);
  pointer-events: none;
  z-index: 0;
}

.cta-content {
  position: relative;
  z-index: 1;
  max-width: 700px;
  margin: 0 auto;
}

.cta-title {
  font-size: clamp(2.2rem, 4vw, 3rem);
  font-weight: 800;
  letter-spacing: -0.02em;
  line-height: 1;
  margin: 0 0 0.75rem;
  background: linear-gradient(
    135deg,
    var(--muse-hero-text) 0%,
    var(--vp-c-text-2) 100%
  );
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
}

.cta-desc {
  font-size: 1.1rem;
  color: var(--muse-section-desc);
  margin: 0 0 2.5rem;
}

.cta-buttons {
  display: flex;
  justify-content: center;
  gap: 1rem;
  flex-wrap: wrap;
}

.cta-button {
  display: inline-flex;
  align-items: center;
  gap: 0.75rem;
  padding: 0.9rem 1.8rem;
  background: var(--muse-btn-bg);
  border: 1px solid var(--muse-btn-border);
  border-radius: 10px;
  text-decoration: none;
  transition: all 0.2s ease;
  min-width: 180px;
}

.cta-button:hover {
  border-color: var(--vp-c-brand-1);
  background: var(--muse-btn-hover-bg);
  transform: translateY(-2px);
}

.cta-button-icon {
  font-size: 1.5rem;
  flex-shrink: 0;
}

.cta-button-text {
  display: flex;
  flex-direction: column;
  align-items: flex-start;
}

.cta-button-label {
  font-size: 1rem;
  font-weight: 600;
  color: var(--vp-c-text-1);
}

.cta-button-sub {
  font-size: 0.78rem;
  color: var(--vp-c-text-3);
}

.cta-version {
  margin-top: 2rem;
  font-size: 0.85rem;
  color: var(--vp-c-text-3);
}

/* ─── Responsive ─── */
@media (max-width: 768px) {
  .features-grid {
    grid-template-columns: 1fr;
    gap: 0.5rem;
  }

  .highlights-grid {
    grid-template-columns: 1fr;
  }

  .cta-buttons {
    flex-direction: column;
    align-items: center;
  }

  .hero-title {
    font-size: 2.4rem;
  }
  .stats-strip-inner {
    grid-template-columns: repeat(2, 1fr);
    gap: 1.5rem;
  }
  .whats-new-card {
    padding: 1.25rem;
  }
  .tech-stack-list {
    gap: 0.4rem;
  }
  .tech-stack-item {
    font-size: 0.78rem;
    padding: 0.3rem 0.75rem;
  }
  .hero-screenshot {
    margin-top: 2rem;
  }
}

@media (min-width: 769px) and (max-width: 1024px) {
  .features-grid {
    gap: 1rem;
  }

  .highlights-grid {
    grid-template-columns: repeat(2, 1fr);
  }
}
</style>
