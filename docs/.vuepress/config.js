import { viteBundler } from '@vuepress/bundler-vite'
import { defaultTheme } from '@vuepress/theme-default'
import { defineUserConfig } from 'vuepress'

export default defineUserConfig({
  bundler: viteBundler(),
  theme: defaultTheme({
    contributors: false,
    navbar: [
      { text: 'Home', link: '/' },
      { text: 'Blog', link: '/blog/' },
      { text: 'Links', link: '/links/' },
    ],
  }),
  lang: 'ja-JP',
  title: "r's homepage",
  description: '色々',
  
})
