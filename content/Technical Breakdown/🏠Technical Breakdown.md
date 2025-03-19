---
tags:
  - homepage
  - prototype
---
> [!info] High-Level Overview
> This folder is dedicated to exploring the potential aspects of a theoretical solution to use as a starting point for project planning.
> 
> Here we will detail the desired actions of the EDMS but also the methods to get there.
## [[1. Check In]]
- Exploration of the check in technical prototype
## [[2. Check Point]]
- Exploration of the check point technical prototype
## [[3. Check Out]]
- Exploration of the check out technical prototype

---
## Prototype System Overview (Birdseye)

> [!warning] Better in the Dark
> Click the sun to switch to dark mode

```mermaid
graph TD
    subgraph Pre-Event
        P1([System Setup]) --> P2([Staff Prep])
    end

    subgraph Check-In
        C1((Mentor Process)) & C2((Mentee Process))
        C1 --> C3{ID Verify}
        C2 --> C4{QR Gen}
    end

    subgraph Event
        A1([Matching]) --> A2([Shopping])
        A2 --> A3([Wrapping])
        A3 --> A4([Activities])
    end

    subgraph Checkout
        E1((Parent Return)) --> E2{Location}
        E2 --> E3([Alert])
        E3 --> E4([Process Out])
    end

    P2 --> C1 & C2
    C3 & C4 --> A1
    A4 --> E1

    style Pre-Event fill:#1a1a1a,stroke:#00ab51,color:#fff
    style Check-In fill:#1a1a1a,stroke:#00ab51,color:#fff
    style Event fill:#1a1a1a,stroke:#00ab51,color:#fff
    style Checkout fill:#1a1a1a,stroke:#00ab51,color:#fff
    
    style C1 fill:#00ab51,stroke:#ffffff,color:#fff
    style C2 fill:#00ab51,stroke:#ffffff,color:#fff
    style E1 fill:#00ab51,stroke:#ffffff,color:#fff
    
    style C3 fill:#2a2a2a,stroke:#00ab51,color:#fff
    style C4 fill:#2a2a2a,stroke:#00ab51,color:#fff
    style E2 fill:#2a2a2a,stroke:#00ab51,color:#fff
    
    style P1 fill:#2a2a2a,stroke:#00ab51,color:#fff
    style P2 fill:#2a2a2a,stroke:#00ab51,color:#fff
    style A1 fill:#2a2a2a,stroke:#00ab51,color:#fff
    style A2 fill:#2a2a2a,stroke:#00ab51,color:#fff
    style A3 fill:#2a2a2a,stroke:#00ab51,color:#fff
    style A4 fill:#2a2a2a,stroke:#00ab51,color:#fff
    style E3 fill:#2a2a2a,stroke:#00ab51,color:#fff
    style E4 fill:#2a2a2a,stroke:#00ab51,color:#fff
```