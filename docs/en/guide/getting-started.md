# Getting Started

Get up and running with VitePress Mermaid in minutes.

## Installation

Install the plugin using your preferred package manager:

::: code-group

```bash [pnpm]
pnpm add -D @unify-js/vitepress-mermaid
```

```bash [npm]
npm install -D @unify-js/vitepress-mermaid
```

```bash [yarn]
yarn add -D @unify-js/vitepress-mermaid
```

:::

## Dependency Requirements

This custom theme requires the following dependencies to work properly. Please make sure they are installed:

```bash
pnpm add -D vitepress mermaid
```

## Configuration

### Step 1: Configure the Markdown Plugin

Create or edit your `.vitepress/config.ts` file:

```typescript
import { defineConfig } from 'vitepress';
import { mermaidMarkdownPlugin } from '@unify-js/vitepress-mermaid';

export default defineConfig({
  markdown: {
    config: md => {
      mermaidMarkdownPlugin(md);
    },
  },
});
```

### Step 2: Configure the Theme (Choose One)

#### Option A: Theme Extension (Recommended)

The easiest way to integrate is by extending the custom theme:

```typescript
import type { Theme } from 'vitepress';
import mermaidTheme from '@unify-js/vitepress-mermaid';

export default {
  extends: mermaidTheme,
} satisfies Theme;
```

#### Option B: Manual Configuration

For more control, manually register the components:

```typescript
import { h } from 'vue';
import type { Theme } from 'vitepress';
import DefaultTheme from 'vitepress/theme';
import { Mermaid, MermaidPreview } from '@unify-js/vitepress-mermaid';

export default {
  extends: DefaultTheme,
  enhanceApp({ app }) {
    app.component('Mermaid', Mermaid);
    app.component('MermaidPreview', MermaidPreview);
  },
  Layout() {
    return h(DefaultTheme.Layout, null, {
      'layout-bottom': () => h(MermaidPreview),
    });
  },
} satisfies Theme;
```

## Usage

Once configured, you can use Mermaid diagrams in your Markdown files:

````markdown
```mermaid
graph TD
  A[Start] --> B{Decision}
  B -->|Yes| C[Action 1]
  B -->|No| D[Action 2]
  C --> E[End]
  D --> E
```
````

This will render as:

```mermaid
graph TD
  A[Start] --> B{Decision}
  B -->|Yes| C[Action 1]
  B -->|No| D[Action 2]
  C --> E[End]
  D --> E
```

**Click on the diagram above** to open the fullscreen preview!

## Displaying Source Code

Use `mermaid-example` to show both the diagram and its source code:

````markdown
```mermaid-example
graph LR
  A --> B --> C
```
````

```mermaid-example
graph LR
  A --> B --> C
```

## Next Steps

- Learn about [configuration options](./configuration.md)
- See more [usage examples](./usage.md)
- Check out [keyboard shortcuts](./shortcuts.md)
- Explore [diagram examples](../examples/)
