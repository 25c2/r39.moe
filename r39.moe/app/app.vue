<template>
  <div class="app">
    <NuxtRouteAnnouncer />
    <NuxtLoadingIndicator color="var(--accent)" />
    <div class="backdrop" aria-hidden="true" />
    <main class="page-shell">
      <NuxtPage />
    </main>
  </div>
</template>

<style>
:root {
  color-scheme: dark;
  --bg: #0a0b10;
  --bg-deep: #05060a;
  --panel: rgba(20, 24, 34, 0.78);
  --panel-border: rgba(120, 130, 160, 0.24);
  --text: #e8e9f0;
  --muted: #9aa3b2;
  --accent: #86f2ff;
  --accent-deep: #0f6c7a;
  --glow: rgba(134, 242, 255, 0.28);
  --shadow: rgba(5, 6, 10, 0.7);
  --radius: 20px;
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
  font-family: "Space Grotesk", "Zen Kaku Gothic New", "Hiragino Kaku Gothic ProN", "Noto Sans JP", sans-serif;
  letter-spacing: 0.01em;
  min-height: 100vh;
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
  padding: 72px 24px 96px;
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
  background: linear-gradient(140deg, rgba(18, 22, 34, 0.9), rgba(10, 12, 20, 0.85));
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
  background: rgba(255, 255, 255, 0.03);
  border: 1px solid rgba(255, 255, 255, 0.05);
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

@media (max-width: 640px) {
  .page-shell {
    padding: 56px 18px 80px;
  }

  .card {
    padding: 20px;
  }
}
</style>
