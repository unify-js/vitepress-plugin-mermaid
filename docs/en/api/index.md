# API Reference

Complete API reference for VitePress Mermaid.

## Package Exports

All APIs are exported from the main entry point `@unify-js/vitepress-mermaid`:

```typescript
// Default export: theme configuration
import mermaidTheme from '@unify-js/vitepress-mermaid';

// Named exports
import {
  mermaidMarkdownPlugin, // Markdown-it plugin
  Mermaid, // Diagram component
  MermaidPreview, // Preview modal component
} from '@unify-js/vitepress-mermaid';
```

## Main Exports

### `mermaidTheme`

Default theme export for easy integration:

```typescript
import mermaidTheme from '@unify-js/vitepress-mermaid';
```

### `mermaidMarkdownPlugin`

Markdown-it plugin for processing Mermaid code blocks:

```typescript
import { mermaidMarkdownPlugin } from '@unify-js/vitepress-mermaid';
```

### `enhanceAppWithMermaid`

Helper function to register components in your theme:

```typescript
import { enhanceAppWithMermaid } from '@unify-js/vitepress-mermaid';
```

## Modules

- [Components](./components.md) - Vue component references
- [Markdown Plugin](./markdown-plugin.md) - Markdown-it plugin details
