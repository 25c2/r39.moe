<template>
  <div class="app">
    <NuxtRouteAnnouncer />
    <NuxtLoadingIndicator color="var(--accent)" />
    <div class="backdrop" aria-hidden="true" />
    <header class="site-header">
      <div class="footer-inner">
        <div class="footer-title">R's Homepage</div>
        <nav class="footer-nav">
          <NuxtLink to="/">home</NuxtLink>
          <NuxtLink to="/blog">blog</NuxtLink>
          <NuxtLink to="/links">links</NuxtLink>
        </nav>
        <button class="theme-toggle" type="button" @click="toggleTheme">
          {{ isDark ? '☾' : '☼' }}
        </button>
      </div>
    </header>
    <main class="page-shell">
      <NuxtPage />
    </main>
    <footer class="site-footer">
      <div class="header-inner">
        <span class="copyright">Copyright © 2025-present r</span>
      </div>
    </footer>
  </div>
  </template>

<script setup>
const isDark = ref(true)

const applyTheme = (theme) => {
  if (process.client) {
    document.documentElement.dataset.theme = theme
    localStorage.setItem('theme', theme)
  }
}

const toggleTheme = () => {
  isDark.value = !isDark.value
  applyTheme(isDark.value ? 'dark' : 'light')
}

onMounted(() => {
  const stored = localStorage.getItem('theme')
  const theme = stored === 'light' ? 'light' : 'dark'
  isDark.value = theme === 'dark'
  applyTheme(theme)
})
</script>

<style>
@font-face {
  font-family: "Zen Maru Gothic";
  src: url("/assets/fonts/ZenMaruGothic-Light.ttf") format("truetype");
  font-weight: 300;
  font-style: normal;
  font-display: swap;
}

@font-face {
  font-family: "Zen Maru Gothic";
  src: url("/assets/fonts/ZenMaruGothic-Regular.ttf") format("truetype");
  font-weight: 400;
  font-style: normal;
  font-display: swap;
}

@font-face {
  font-family: "Zen Maru Gothic";
  src: url("/assets/fonts/ZenMaruGothic-Medium.ttf") format("truetype");
  font-weight: 500;
  font-style: normal;
  font-display: swap;
}

@font-face {
  font-family: "Zen Maru Gothic";
  src: url("/assets/fonts/ZenMaruGothic-Bold.ttf") format("truetype");
  font-weight: 700;
  font-style: normal;
  font-display: swap;
}

@font-face {
  font-family: "Zen Maru Gothic";
  src: url("/assets/fonts/ZenMaruGothic-Black.ttf") format("truetype");
  font-weight: 900;
  font-style: normal;
  font-display: swap;
}

:root {
  color-scheme: dark;
  --bg: #0a0b10;
  --bg-deep: #05060a;
  --panel: rgba(20, 24, 34, 0.78);
  --panel-border: rgba(120, 130, 160, 0.24);
  --card: linear-gradient(140deg, rgba(18, 22, 34, 0.9), rgba(10, 12, 20, 0.85));
  --list-item: rgba(255, 255, 255, 0.03);
  --list-item-border: rgba(255, 255, 255, 0.05);
  --text: #e8e9f0;
  --muted: #9aa3b2;
  --accent: #86f2ff;
  --accent-deep: #0f6c7a;
  --glow: rgba(134, 242, 255, 0.28);
  --shadow: rgba(5, 6, 10, 0.7);
  --radius: 20px;
}

[data-theme="light"] {
  color-scheme: light;
  --bg: #f3f4f8;
  --bg-deep: #e6e9f2;
  --panel: rgba(255, 255, 255, 0.78);
  --panel-border: rgba(120, 130, 160, 0.24);
  --card: linear-gradient(140deg, rgba(255, 255, 255, 0.9), rgba(240, 244, 252, 0.95));
  --list-item: rgba(15, 20, 30, 0.05);
  --list-item-border: rgba(15, 20, 30, 0.08);
  --text: #1d2130;
  --muted: #5f6b7a;
  --accent: #0f6c7a;
  --accent-deep: #0a3f49;
  --glow: rgba(15, 108, 122, 0.25);
  --shadow: rgba(15, 20, 30, 0.18);
}

*,
*::before,
*::after {
  box-sizing: border-box;
}

body {
  margin: 0;
  background: radial-gradient(120% 120% at 10% 10%, #141825 0%, var(--bg) 55%, var(--bg-deep) 100%);
  color: var(--text);
  font-family: "Zen Maru Gothic", "Zen Kaku Gothic New", "Hiragino Kaku Gothic ProN", "Noto Sans JP", sans-serif;
  letter-spacing: 0.01em;
  min-height: 100vh;
}

[data-theme="light"] body {
  background: radial-gradient(140% 140% at 10% 10%, #ffffff 0%, var(--bg) 55%, var(--bg-deep) 100%);
}

a {
  color: inherit;
  text-decoration: none;
}

a:hover,
a:focus-visible {
  color: var(--accent);
}

.app {
  position: relative;
  min-height: 100vh;
  overflow: hidden;
}

.backdrop {
  position: fixed;
  inset: -20vh -20vw;
  background:
    radial-gradient(40% 50% at 15% 20%, rgba(134, 242, 255, 0.2), transparent 65%),
    radial-gradient(35% 40% at 85% 15%, rgba(255, 155, 130, 0.15), transparent 60%),
    radial-gradient(30% 45% at 70% 75%, rgba(130, 140, 255, 0.18), transparent 70%),
    radial-gradient(25% 35% at 10% 85%, rgba(90, 255, 190, 0.12), transparent 70%);
  filter: blur(10px);
  pointer-events: none;
  z-index: 0;
}

.page-shell {
  position: relative;
  z-index: 1;
  max-width: 920px;
  margin: 0 auto;
  padding: 40px 24px 96px;
}

.content {
  display: grid;
  gap: 32px;
}

.hero {
  display: flex;
  flex-direction: column;
  gap: 16px;
}

.title {
  margin: 0;
  font-size: clamp(2.4rem, 4vw, 3.6rem);
  font-weight: 600;
  letter-spacing: 0.02em;
  text-shadow: 0 12px 32px var(--shadow);
}

.subtitle {
  margin: 0;
  font-size: 1.35rem;
  font-weight: 500;
  color: var(--muted);
  letter-spacing: 0.08em;
  text-transform: uppercase;
}

.block {
  display: grid;
  gap: 16px;
}

.card {
  background: var(--card);
  border: 1px solid var(--panel-border);
  border-radius: var(--radius);
  padding: 24px 28px;
  box-shadow: 0 18px 40px var(--shadow), inset 0 0 0 1px rgba(255, 255, 255, 0.03);
  backdrop-filter: blur(6px);
}

.lead {
  margin: 0 0 16px;
  color: var(--text);
  font-size: 1.1rem;
}

.list {
  list-style: none;
  padding: 0;
  margin: 0;
  display: grid;
  gap: 10px;
}

.list li {
  padding: 10px 14px;
  border-radius: 12px;
  background: var(--list-item);
  border: 1px solid var(--list-item-border);
  display: flex;
  align-items: center;
  gap: 12px;
  color: var(--text);
}

.list li::before {
  content: "";
  width: 8px;
  height: 8px;
  border-radius: 50%;
  background: radial-gradient(circle at 30% 30%, var(--accent), var(--accent-deep));
  box-shadow: 0 0 12px var(--glow);
  flex: 0 0 auto;
}

.list .link-row {
  display: flex;
  align-items: center;
  gap: 8px;
  width: 100%;
  padding: 10px 14px;
  margin: -10px -14px;
  border-radius: 12px;
}

.list .link-row:focus-visible {
  outline: 2px solid rgba(134, 242, 255, 0.6);
  outline-offset: 2px;
}

.site-header,
.site-footer {
  position: relative;
  z-index: 2;
}

.site-header {
  padding: 28px 24px 16px;
}

.header-inner {
  max-width: 920px;
  margin: 0 auto;
  display: flex;
  align-items: center;
  justify-content: flex-end;
}

.copyright {
  font-size: 0.9rem;
  color: var(--muted);
  letter-spacing: 0.08em;
}

.site-footer {
  padding: 24px 24px 64px;
}

.footer-inner {
  max-width: 920px;
  margin: 0 auto;
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  justify-content: space-between;
  gap: 16px;
  background: var(--panel);
  border: 1px solid var(--panel-border);
  border-radius: calc(var(--radius) + 4px);
  padding: 18px 22px;
  box-shadow: 0 18px 40px var(--shadow);
}

.footer-title {
  font-size: 1.25rem;
  font-weight: 600;
  letter-spacing: 0.06em;
}

.footer-nav {
  display: flex;
  gap: 16px;
  font-size: 0.95rem;
  text-transform: uppercase;
  letter-spacing: 0.12em;
}

.footer-nav a {
  padding: 6px 10px;
  border-radius: 999px;
  border: 1px solid transparent;
  background: rgba(255, 255, 255, 0.03);
}

.footer-nav a:hover,
.footer-nav a:focus-visible {
  border-color: rgba(134, 242, 255, 0.4);
  box-shadow: 0 0 14px rgba(134, 242, 255, 0.25);
}

.theme-toggle {
  border: 1px solid rgba(134, 242, 255, 0.35);
  background: rgba(134, 242, 255, 0.08);
  color: var(--text);
  border-radius: 999px;
  padding: 6px 14px;
  font-size: 0.85rem;
  letter-spacing: 0.08em;
  text-transform: uppercase;
  cursor: pointer;
}

[data-theme="light"] .theme-toggle {
  border-color: rgba(15, 108, 122, 0.3);
  background: rgba(15, 108, 122, 0.08);
}

@media (max-width: 640px) {
  .page-shell {
    padding: 56px 18px 80px;
  }

  .card {
    padding: 20px;
  }

  .header-inner {
    justify-content: flex-start;
  }

  .footer-inner {
    align-items: flex-start;
  }

  .footer-nav {
    flex-wrap: wrap;
    gap: 10px;
  }
}
</style>
