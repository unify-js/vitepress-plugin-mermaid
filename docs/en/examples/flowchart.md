# Flowchart Examples

Flowcharts are perfect for visualizing processes, workflows, and decision trees.

## Basic Flowchart

```mermaid
graph TD
    A[Start] --> B{Is it working?}
    B -->|Yes| C[Great!]
    B -->|No| D[Debug]
    D --> E{Fixed?}
    E -->|Yes| C
    E -->|No| D
    C --> F[End]
```

## LR Direction

Left-to-right flowchart:

```mermaid
graph LR
    A[Input] --> B[Process]
    B --> C{Decision}
    C -->|Option 1| D[Output A]
    C -->|Option 2| E[Output B]
```

## Complex Workflow

A more complex example with styling:

```mermaid
flowchart TB
    subgraph "User Request"
        A[User Clicks Diagram] --> B[Open Preview Modal]
    end

    subgraph "Preview Mode"
        B --> C[Show Fullscreen]
        C --> D{User Action}
        D -->|Zoom| E[Scale SVG]
        D -->|Pan| F[Translate Position]
        D -->|ESC| G[Close Modal]
    end

    subgraph "Zoom Controls"
        E --> H[Ctrl + +/-]
        E --> I[Mouse Wheel]
        E --> J[Button Click]
    end

    style A fill:#bd34fe,color:#fff
    style C fill:#41d1ff,color:#000
    style G fill:#10b981,color:#fff
```

## Node Shapes

Different node types:

```mermaid
graph LR
    A([Start]) --> B[Rectangle]
    B --> C(Rounded)
    C --> D{Decision}
    D -->|Yes| E((Circle))
    D -->|No| F>Document]
    E --> G{Another}
    F --> G
    G --> H[Subroutine]
    H --> I[/Parallel/]
    I --> J[\Alternative\]
    J --> K[[Predefined]]
    K --> L[(Database)]
    L --> M{{Hexagon}}
    M --> N>Flag]
    N --> O[/Trapezoid/]
    O --> P[\Reverse/]
    P --> Q((Stop))
```

## Styled Flowchart

Using custom colors:

```mermaid
graph TB
    subgraph "Frontend Stack"
        A[VitePress] --> B[Vue 3]
        B --> C[Vite]
    end

    subgraph "Plugin System"
        D[Markdown It] --> E[Custom Plugin]
        E --> F[Components]
    end

    subgraph "Diagram Engine"
        G[Mermaid.js] --> H[SVG Output]
    end

    C --> D
    F --> G

    style A fill:#bd34fe,color:#fff
    style B fill:#41d1ff,color:#000
    style C fill:#646cff,color:#fff
    style G fill:#ff3670,color:#fff
    style H fill:#10b981,color:#fff
```

**Click any diagram to preview in fullscreen!**
