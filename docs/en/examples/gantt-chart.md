# Gantt Chart Examples

Gantt charts are used for project scheduling and timeline visualization.

## Basic Gantt Chart

```mermaid
gantt
    title Project Timeline
    dateFormat  YYYY-MM-DD
    section Planning
    Requirements    :done, req, 2024-01-01, 7d
    Design          :active, des, after req, 5d
    section Development
    Core Feature    :dev1, after des, 10d
    Secondary       :dev2, after dev1, 8d
    section Testing
    Unit Tests      :test1, after dev1, 5d
    Integration     :test2, after dev2, 5d
    section Deployment
    Release         :milestone, deploy, after test2, 0d
```

## Plugin Development Timeline

```mermaid
gantt
    title VitePress Mermaid Plugin Roadmap
    dateFormat  YYYY-MM-DD

    section Core Features
    Basic rendering      :done, c1, 2024-01-01, 14d
    Preview modal        :done, c2, after c1, 10d
    Zoom & pan           :done, c3, after c2, 7d
    Dark mode            :active, c4, after c3, 5d

    section Enhancements
    Mobile support       :mob, after c4, 7d
    Touch gestures       :touch, after mob, 5d
    Keyboard shortcuts   :key, after c4, 3d

    section Documentation
    API docs             :doc1, after c2, 14d
    Examples             :doc2, after c3, 10d
    Video tutorial       :doc3, after doc2, 7d

    section Release
    v1.0                 :milestone, v1, after key, 0d
    v1.1                 :milestone, v2, after touch, 0d
```

## Multi-Project View

```mermaid
gantt
    dateFormat  YYYY-MM-DD
    title Q1 Development Schedule

    section Frontend
    Design system      :fs1, 2024-01-01, 21d
    Component lib      :fs2, after fs1, 14d
    Docs site          :fs3, after fs2, 14d

    section Backend
    API design         :bs1, 2024-01-08, 14d
    Database setup     :bs2, after bs1, 7d
    Core endpoints     :bs3, after bs2, 21d

    section Integration
    Frontend connect   :is1, after fs2, 10d
    Backend connect    :is2, after bs3, 10d
    E2E testing        :is3, after is1, 14d

    section Milestones
    Alpha release      :milestone, alpha, after is1, 0d
    Beta release       :milestone, beta, after is3, 0d
```

## Dependency Tracking

```mermaid
gantt
    dateFormat  YYYY-MM-DD
    title Documentation Build Pipeline

    section Source
    Write content      :crit, s1, 2024-01-01, 5d
    Review drafts      :crit, s2, after s1, 3d
    Approve content    :crit, s3, after s2, 2d

    section Build
    Parse markdown     :b1, after s3, 1d
    Generate HTML      :b2, after b1, 1d
    Process Mermaid    :b3, after b2, 2d
    Optimize assets    :b4, after b3, 1d

    section Deploy
    Staging test       :d1, after b4, 1d
    Production deploy  :crit, d2, after d1, 1d
    CDN propagation    :d3, after d2, 4h

    section Milestones
    Content ready      :milestone, m1, after s3, 0d
    Build complete     :milestone, m2, after b4, 0d
    Live               :milestone, m3, after d3, 0d
```

## Critical Path

```mermaid
gantt
    dateFormat  YYYY-MM-DD
    title Critical Path Analysis

    section Phase 1
    Market research    :done, p1a, 2024-01-01, 14d
    Competitor analysis :done, p1b, after p1a, 7d

    section Phase 2
    Requirements       :crit, done, p2a, after p1b, 10d
    Architecture       :crit, done, p2b, after p2a, 7d

    section Phase 3
    Core development   :crit, active, p3a, after p2b, 21d
    Testing setup      :p3b, after p2b, 14d

    section Phase 4
    QA testing         :crit, p4a, after p3a, 14d
    Documentation      :p4b, after p3a, 14d

    section Phase 5
    User acceptance    :crit, p5a, after p4a, 7d
    Bug fixes          :crit, p5b, after p5a, 7d

    section Launch
    Final release      :milestone, crit, launch, after p5b, 0d
```

**Click any chart to view in fullscreen mode!**
