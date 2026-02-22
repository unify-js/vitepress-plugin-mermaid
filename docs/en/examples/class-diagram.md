# Class Diagram Examples

Class diagrams illustrate the structure of object-oriented systems.

## Basic Class Diagram

```mermaid
classDiagram
    class Animal {
        +String name
        +int age
        +makeSound()
        +move()
    }

    class Dog {
        +String breed
        +fetch()
        +wagTail()
    }

    class Cat {
        +Boolean isIndoor
        +climb()
        +purr()
    }

    Animal <|-- Dog
    Animal <|-- Cat
```

## With Relationships

```mermaid
classDiagram
    direction LR

    class User {
        -String id
        -String email
        +login()
        +logout()
    }

    class Post {
        -String id
        -String title
        -String content
        +publish()
        +edit()
    }

    class Comment {
        -String id
        -String text
        +create()
        +delete()
    }

    class Tag {
        -String name
        +addPost()
    }

    User "1" --> "*" Post : creates
    User "1" --> "*" Comment : writes
    Post "1" --> "*" Comment : has
    Post "*" --> "*" Tag : tagged with
```

## Complex Hierarchy

```mermaid
classDiagram
    class Component {
        <<abstract>>
        +render()
        +mount()
        +unmount()
    }

    class UIComponent {
        +props
        +state
        +update()
    }

    class Mermaid {
        +code
        +theme
        +renderDiagram()
        +handleClick()
    }

    class MermaidPreview {
        +isOpen
        +svg
        +scale
        +open()
        +close()
        +zoomIn()
        +zoomOut()
    }

    Component <|-- UIComponent
    UIComponent <|-- Mermaid
    UIComponent <|-- MermaidPreview

    Mermaid ..> MermaidPreview : triggers
```

## VitePress Plugin System

```mermaid
classDiagram
    class Theme {
        <<interface>>
        +Layout
        +enhanceApp()
    }

    class DefaultTheme {
        +Layout
        +NotFound
    }

    class MermaidPluginTheme {
        +enhanceApp()
    }

    class MarkdownIt {
        +use()
        +render()
    }

    class MermaidMarkdownPlugin {
        +install()
    }

    class MermaidComponent {
        +code
        +render()
        +onClick()
    }

    Theme <|.. DefaultTheme
    DefaultTheme <|-- MermaidPluginTheme
    MarkdownIt *-- MermaidMarkdownPlugin : uses
    MermaidMarkdownPlugin ..> MermaidComponent : creates
```

## With Annotations

```mermaid
classDiagram
    note "State Management"

    class PreviewState {
        +isOpen: boolean
        +svg: string
        +scale: number
        +position: Point
        --
        +open(svg)
        +close()
        +setScale(s)
        +setPosition(p)
    }

    class Point {
        +x: number
        +y: number
    }

    PreviewState o-- Point : position

    note for PreviewState "Global singleton\nShared across app"
```

**Click any diagram for fullscreen preview!**
