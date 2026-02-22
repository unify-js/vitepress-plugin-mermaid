# Sequence Diagram Examples

Sequence diagrams show interactions between objects or participants over time.

## Basic Sequence

```mermaid
sequenceDiagram
    participant A as User
    participant B as Browser
    participant C as Server

    A->>B: Click diagram
    B->>C: Request fullscreen
    C-->>B: Return modal HTML
    B-->>A: Show preview
    A->>B: Zoom/Pan
    B-->>A: Update view
```

## With Loops and Notes

```mermaid
sequenceDiagram
    participant U as User
    participant M as MermaidPreview
    participant S as State Store

    U->>M: Click on diagram
    M->>S: open(svgContent)
    S-->>M: isOpen = true
    M-->>U: Show fullscreen modal

    loop Zoom Controls
        U->>M: Ctrl + +/-
        M->>M: Update scale
        M-->>U: Re-render SVG
    end

    Note over M,S: Global state shared<br/>across all components

    U->>M: Press ESC
    M->>S: close()
    S-->>M: isOpen = false
    M-->>U: Hide modal
```

## Activation Boxes

```mermaid
sequenceDiagram
    participant C as Client
    participant S as Server
    participant D as Database

    C->>+S: Request page
    S->>+D: Query data
    D-->>-S: Return results
    S->>S: Process HTML
    S-->>-C: Send response

    Note over C,S: Server-side rendering

    C->>+C: Hydrate app
    C->>+S: Load Mermaid
    S-->>-C: Mermaid JS
    C->>C: Render diagrams
    deactivate C
```

## Alternative Paths

```mermaid
sequenceDiagram
    participant U as User
    participant P as Preview

    U->>P: Click diagram

    alt Zoom In
        U->>P: Ctrl + +
        P-->>U: Scale up
    else Zoom Out
        U->>P: Ctrl + -
        P-->>U: Scale down
    else Pan
        U->>P: Drag
        P-->>U: Move view
    else Close
        U->>P: ESC
        P-->>U: Close modal
    end
```

## Complex Example

```mermaid
sequenceDiagram
    autonumber
    actor User
    participant VP as VitePress
    participant MP as Markdown Plugin
    participant M as Mermaid
    participant V as Vue Component

    User->>VP: Open page
    VP->>MP: Process markdown
    MP->>MP: Find mermaid blocks
    MP->>M: Parse syntax
    M-->>MP: Return SVG
    MP->>V: Create component
    V-->>VP: Rendered HTML
    VP-->>User: Show page

    User->>V: Click diagram
    V->>V: openPreview()
    V-->>User: Fullscreen modal

    loop Interactions
        User->>V: Zoom/Pan
        V-->>User: Update view
    end

    User->>V: Close
    V-->>User: Return to page
```

**Click any diagram to see it in fullscreen!**
