---
layout: home

hero:
  name: 'VitePress Mermaid'
  text: '交互式 Mermaid 图表'
  tagline: 为文档带来全屏预览、缩放和平移支持的 VitePress Mermaid 自定义主题
  actions:
    - theme: brand
      text: 快速开始
      link: /zh/guide/getting-started
    - theme: alt
      text: 查看示例
      link: /zh/examples/
    - theme: alt
      text: GitHub
      link: https://github.com/unify-js/vitepress-plugin-mermaid-preview

features:
  - icon: 🎯
    title: 点击预览
    details: 点击文档中的任何 Mermaid 图表，以全屏模式打开，获得更好的查看体验。
  - icon: 🔍
    title: 缩放与平移
    details: 使用鼠标滚轮或键盘快捷键自由缩放，拖拽平移浏览大型图表。
  - icon: 🌓
    title: 暗黑模式支持
    details: 自动适配 VitePress 浅色/深色主题，切换流畅自然。
  - icon: ⌨️
    title: 键盘快捷键
    details: ESC 关闭，Ctrl/Cmd +/- 缩放，Ctrl/Cmd 0 重置 - 直观高效。
  - icon: 📱
    title: 响应式设计
    details: 移动端友好，支持触摸手势进行缩放和平移操作。
  - icon: ⚡
    title: 轻松集成
    details: 通过主题扩展快速完成集成。
---

<style>
:root {
  --vp-home-hero-name-color: transparent;
  --vp-home-hero-name-background: -webkit-linear-gradient(120deg, #bd34fe 30%, #41d1ff);
  --vp-home-hero-image-background-image: linear-gradient(-45deg, #bd34fe 50%, #47caff 50%);
  --vp-home-hero-image-filter: blur(44px);
}

.VPFeature {
  border-radius: 12px;
  padding: 24px;
  background-color: var(--vp-c-bg-soft);
  transition: all 0.3s ease;
}

.VPFeature:hover {
  transform: translateY(-4px);
  box-shadow: 0 12px 24px rgba(0, 0, 0, 0.1);
}
</style>
