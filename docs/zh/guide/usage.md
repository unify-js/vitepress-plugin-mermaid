# 使用指南

了解如何在 VitePress 文档中创建和自定义 Mermaid 图表。

## 基本语法

Mermaid 图表使用 `mermaid` 语言标识符的代码块创建：

````markdown
```mermaid
graph TD
    A[开始] --> B[结束]
```
````

```mermaid
graph TD
    A[开始] --> B[结束]
```

## 图表类型

### 流程图

流程图非常适合可视化流程和工作流：

````markdown
```mermaid
flowchart LR
    A[硬边] -->|链接文本| B(圆角边)
    B --> C{判断}
    C -->|选项 1| D[结果 1]
    C -->|选项 2| E[结果 2]
```
````

```mermaid
flowchart LR
    A[硬边] -->|链接文本| B(圆角边)
    B --> C{判断}
    C -->|选项 1| D[结果 1]
    C -->|选项 2| E[结果 2]
```

### 时序图

时序图展示实体间的交互：

````markdown
```mermaid
sequenceDiagram
    participant 用户
    participant 浏览器
    participant 服务器

    用户->>浏览器: 点击图表
    浏览器->>服务器: 请求全屏
    服务器-->>浏览器: 返回模态框 HTML
    浏览器-->>用户: 显示预览
    用户->>浏览器: 缩放/拖拽
    浏览器-->>用户: 更新视图
```
````

```mermaid
sequenceDiagram
    participant 用户
    participant 浏览器
    participant 服务器

    用户->>浏览器: 点击图表
    浏览器->>服务器: 请求全屏
    服务器-->>浏览器: 返回模态框 HTML
    浏览器-->>用户: 显示预览
    用户->>浏览器: 缩放/拖拽
    浏览器-->>用户: 更新视图
```

### 类图

类图用于面向对象设计：

````markdown
```mermaid
classDiagram
    class 动物 {
        +String 名称
        +发出声音()
    }
    class 狗 {
        +取回()
    }
    class 猫 {
        +攀爬()
    }
    动物 <|-- 狗
    动物 <|-- 猫
```
````

```mermaid
classDiagram
    class 动物 {
        +String 名称
        +发出声音()
    }
    class 狗 {
        +取回()
    }
    class 猫 {
        +攀爬()
    }
    动物 <|-- 狗
    动物 <|-- 猫
```

## 交互式预览

### 如何使用

1. **点击** 文档中的任意图表
2. 图表以 **全屏模式** 打开
3. 使用 **鼠标滚轮** 或 **键盘** 缩放
4. **拖拽** 在图表中平移
5. 按 **ESC** 或点击 **X** 关闭

### 示例：复杂图表

尝试与这个较大的图表交互：

```mermaid
graph TB
    subgraph "前端"
        A[VitePress] --> B[Vue 组件]
        B --> C[Mermaid 插件]
    end

    subgraph "图表渲染"
        C --> D[Mermaid.js]
        D --> E[SVG 输出]
    end

    subgraph "交互功能"
        E --> F[点击处理器]
        F --> G[全屏模态框]
        G --> H[缩放与平移]
    end

    style A fill:#bd34fe,color:#fff
    style D fill:#41d1ff,color:#000
    style G fill:#10b981,color:#fff
```

**点击上方的图表以全屏模式探索！**

## 显示源代码

使用 `mermaid-example` 同时显示图表及其源代码：

````markdown
```mermaid-example
graph LR
    A[输入] --> B[处理]
    B --> C[输出]
```
````

```mermaid-example
graph LR
    A[输入] --> B[处理]
    B --> C[输出]
```

## 样式技巧

### 颜色和主题

Mermaid 图表会自动适应您的 VitePress 主题：

```mermaid
%%{init: {'theme': 'base', 'themeVariables': { 'primaryColor': '#bd34fe', 'primaryTextColor': '#fff', 'primaryBorderColor': '#7c3aed'}}}%%
graph TD
    A[自定义颜色] --> B[另一个节点]
    B --> C[第三个节点]
```

### 节点形状

不同用途使用不同的节点形状：

```mermaid
graph LR
    A([开始]) --> B[流程]
    B --> C{判断}
    C -->|是| D((结束))
    C -->|否| E>文档]
    E --> B
```

## 最佳实践

1. **保持图表聚焦** - 每个图表一个概念
2. **使用有意义的标签** - 清晰简洁的文字
3. **一致的样式** - 有目的地使用颜色
4. **测试交互** - 点击图表确保功能正常
5. **考虑移动端** - 大屏幕可能需要在小屏幕上缩放

## 下一步

- 探索更多 [图表示例](../examples/)
- 了解 [键盘快捷键](./shortcuts.md)
- 查看 [API 参考](../api/)
