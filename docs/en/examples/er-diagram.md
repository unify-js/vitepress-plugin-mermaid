# ER Diagram Examples

Entity-Relationship diagrams show the relationships between entities in a database.

## Simple ER Diagram

```mermaid
erDiagram
    CUSTOMER ||--o{ ORDER : places
    CUSTOMER {
        string id PK
        string name
        string email
        string phone
    }

    ORDER ||--|{ ORDER_ITEM : contains
    ORDER {
        string id PK
        date orderDate
        float total
        string status
    }

    ORDER_ITEM {
        int quantity
        float price
    }

    PRODUCT ||--o{ ORDER_ITEM : "included in"
    PRODUCT {
        string id PK
        string name
        float price
        int stock
    }
```

## Blog System

```mermaid
erDiagram
    USER ||--o{ POST : writes
    USER ||--o{ COMMENT : writes
    POST ||--o{ COMMENT : has
    POST }o--o{ TAG : tagged_with
    POST ||--o{ CATEGORY : belongs_to

    USER {
        uuid id PK
        string username
        string email
        datetime created_at
    }

    POST {
        uuid id PK
        string title
        text content
        uuid author_id FK
        datetime published_at
        enum status
    }

    COMMENT {
        uuid id PK
        text content
        uuid author_id FK
        uuid post_id FK
        datetime created_at
    }

    TAG {
        uuid id PK
        string name
        string slug
    }

    CATEGORY {
        uuid id PK
        string name
        string description
    }
```

## E-Commerce System

```mermaid
erDiagram
    USER ||--o{ CART : has
    USER ||--o{ ORDER : places
    USER ||--o{ ADDRESS : has
    USER ||--o{ REVIEW : writes

    CART ||--|{ CART_ITEM : contains
    CART_ITEM }o--|| PRODUCT : references

    ORDER ||--|{ ORDER_ITEM : contains
    ORDER }o--|| ADDRESS : ships_to
    ORDER_ITEM }o--|| PRODUCT : references

    PRODUCT }o--|| CATEGORY : categorized_in
    PRODUCT ||--o{ REVIEW : has
    PRODUCT }o--o{ PRODUCT_IMAGE : has

    USER {
        int id PK
        varchar email
        varchar password_hash
        varchar first_name
        varchar last_name
        timestamp created_at
    }

    PRODUCT {
        int id PK
        varchar name
        text description
        decimal price
        int category_id FK
        int stock_quantity
    }

    CATEGORY {
        int id PK
        varchar name
        int parent_id FK
    }

    ORDER {
        int id PK
        int user_id FK
        int address_id FK
        decimal total
        enum status
        timestamp ordered_at
    }
```

## Plugin Architecture

```mermaid
erDiagram
    VITEPRESS ||--|{ PLUGIN : loads
    PLUGIN ||--|{ COMPONENT : registers
    PLUGIN ||--|| THEME : extends

    MARKDOWN_PLUGIN ||--|{ CODE_BLOCK : processes
    MARKDOWN_PLUGIN ||--|| MERMAID : uses

    COMPONENT ||--|| PREVIEW_STATE : manages

    VITEPRESS {
        string config
        string theme_path
        array plugins
    }

    PLUGIN {
        string name
        string entry_point
        object config
    }

    COMPONENT {
        string name
        string file_path
        boolean global
    }

    PREVIEW_STATE {
        boolean isOpen
        string svg_content
        float scale
        object position
    }

    MERMAID {
        string version
        object config
        function render
    }
```

**Click any diagram for fullscreen preview!**
