# Usage Guide

Learn how to create and customize Mermaid diagrams in your VitePress documentation.

## Basic Syntax

Mermaid diagrams are created using code blocks with the `mermaid` language identifier:

````markdown
```mermaid
graph TD
    A[Start] --> B[End]
```
````

```mermaid
graph TD
    A[Start] --> B[End]
```

## Diagram Types

### Flowchart

Flowcharts are great for visualizing processes and workflows:

````markdown
```mermaid
flowchart LR
    A[Hard edge] -->|Link text| B(Round edge)
    B --> C{Decision}
    C -->|One| D[Result one]
    C -->|Two| E[Result two]
```
````

```mermaid
flowchart LR
    A[Hard edge] -->|Link text| B(Round edge)
    B --> C{Decision}
    C -->|One| D[Result one]
    C -->|Two| E[Result two]
```

### Sequence Diagram

Sequence diagrams show interactions between entities:

````markdown
```mermaid
sequenceDiagram
    participant Alice
    participant Bob
    Alice->>John: Hello John, how are you?
    loop Health check
        John->>John: Fight against hypochondria
    end
    Note right of John: Rational thoughts <br/>prevail!
    John-->>Alice: Great!
    John->>Bob: How about you?
    Bob-->>John: Jolly good!
```
````

```mermaid
sequenceDiagram
    participant Alice
    participant Bob
    Alice->>John: Hello John, how are you?
    loop Health check
        John->>John: Fight against hypochondria
    end
    Note right of John: Rational thoughts <br/>prevail!
    John-->>Alice: Great!
    John->>Bob: How about you?
    Bob-->>John: Jolly good!
```

### Class Diagram

Class diagrams for object-oriented design:

````markdown
```mermaid
classDiagram
    class Animal {
        +String name
        +makeSound()
    }
    class Dog {
        +fetch()
    }
    class Cat {
        +climb()
    }
    Animal <|-- Dog
    Animal <|-- Cat
```
````

```mermaid
classDiagram
    class Animal {
        +String name
        +makeSound()
    }
    class Dog {
        +fetch()
    }
    class Cat {
        +climb()
    }
    Animal <|-- Dog
    Animal <|-- Cat
```

## Interactive Preview

### How to Use

1. **Click** on any diagram in your documentation
2. The diagram opens in **fullscreen mode**
3. Use your **mouse wheel** or **keyboard** to zoom
4. **Drag** to pan around the diagram
5. Press **ESC** or click the **X** to close

### Example: Complex Diagram

Try interacting with this larger diagram:

```mermaid
graph TB
    subgraph "Frontend"
        A[VitePress] --> B[Vue Components]
        B --> C[Mermaid Theme]
    end

    subgraph "Diagram Rendering"
        C --> D[Mermaid.js]
        D --> E[SVG Output]
    end

    subgraph "Interactive Features"
        E --> F[Click Handler]
        F --> G[Fullscreen Modal]
        G --> H[Zoom & Pan]
    end

    style A fill:#bd34fe,color:#fff
    style D fill:#41d1ff,color:#000
    style G fill:#10b981,color:#fff
```

**Click the diagram above to explore it in fullscreen!**

## Show Source Code

Use `mermaid-example` to display both the diagram and its source:

````markdown
```mermaid-example
graph LR
    A[Input] --> B[Process]
    B --> C[Output]
```
````

```mermaid-example
graph LR
    A[Input] --> B[Process]
    B --> C[Output]
```

## Styling Tips

### Colors and Themes

Mermaid diagrams automatically adapt to your VitePress theme:

```mermaid
%%{init: {'theme': 'base', 'themeVariables': { 'primaryColor': '#bd34fe', 'primaryTextColor': '#fff', 'primaryBorderColor': '#7c3aed'}}}%%
graph TD
    A[Custom Color] --> B[Another Node]
    B --> C[Third Node]
```

### Node Shapes

Different node shapes for different purposes:

```mermaid
graph LR
    A([Start]) --> B[Process]
    B --> C{Decision}
    C -->|Yes| D((End))
    C -->|No| E>Document]
    E --> B
```

## Best Practices

1. **Keep diagrams focused** - One concept per diagram
2. **Use meaningful labels** - Clear and concise text
3. **Consistent styling** - Use colors purposefully
4. **Test interactions** - Click your diagrams to ensure they work
5. **Consider mobile** - Large diagrams may need zooming on small screens

## Next Steps

- Explore more [diagram examples](../examples/)
- Learn [keyboard shortcuts](./shortcuts.md)
- Check the [API reference](../api/)
