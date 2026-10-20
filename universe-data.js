/* Portfolio entries checked against the supplied resumes, paper manuscripts, and repository audit. */
window.universeItems = {
  research: [
    {
      id: 'icwite-2026-water-purifier', category: 'research', orbitTitle: 'UV-C Purifier · ICWITE 2026',
      title: 'Portable UV-C Water Bottle and Purifier: Design, Development, and Performance Evaluation',
      description: 'A portable four-stage filtration and UV-C disinfection system. The paper reports prototype construction and preliminary functional testing; calibrated turbidity and device-specific microbiological validation are identified as future work.',
      contribution: 'Co-designed the embedded dosage-timing control and an interrupt-driven safety interlock that cuts lamp power when the enclosure opens.',
      status: 'Accepted and presented orally at IEEE ICWITE 2026 (per supplied resume)', venue: 'IEEE ICWITE 2026',
      authors: 'Deekshaa Balachandran and Jalli Haneesha', technologies: ['UV-C', 'Embedded control', 'Safety interlock'],
      url: 'https://www.researchgate.net/publication/408573570_Portable_UV-C_Water_Bottle_and_Purifier_Design_Development_and_Performance_Evaluation',
      linkLabel: 'Open ResearchGate preprint ↗'
    },
    {
      id: 'nmic-snas-review', category: 'research', orbitTitle: 'SNAS · GNSS / Aviation',
      title: 'SNAS — Satellite Navigation and Aviation Standards: A Review of GNSS, SBAS Enhancements, and High-Integrity Requirements for Modern Aviation',
      description: 'A review of GNSS and SBAS signal architecture, GAGAN augmentation, and aviation integrity monitoring in the context of accuracy, integrity, continuity, and availability requirements. No new performance results are claimed.',
      contribution: 'Authored the review manuscript and survey of navigation augmentation and aviation integrity requirements.',
      status: 'Accepted at NMIC ’26 (per supplied research CV and resume)', venue: 'NMIC 2026',
      authors: 'Deekshaa Balachandran', technologies: ['GNSS', 'SBAS', 'GAGAN', 'Aviation integrity'],
      url: 'https://www.researchgate.net/publication/403403249_SNAS_-Satellite_Navigation_and_Aviation_Standards_A_Comprehensive_Review_of_GNSS_SBAS_Enhancements_and_High-Integrity_Requirements_for_Modern_Aviation',
      linkLabel: 'Open conference paper ↗'
    }
  ],
  projects: [
    {
      id: 'mobile-network-rover', category: 'projects', orbitTitle: 'Mobile Signal Rover',
      title: 'Semi-Autonomous Rover for Mobile Network Signal Monitoring',
      description: 'An ESP32-controlled rover for operator-specific cellular RSSI sampling with geotagged and orientation-aware observations. Readings are streamed over UART to a Python/Tkinter dashboard.',
      contribution: 'Resume describes hardware bring-up, debugging, and validation on a four-person team; Deekshaa authored the IEEE-format system-design manuscript.',
      status: 'Resume describes an implemented and validated build; field-test results are not supplied.',
      technologies: ['ESP32', 'SIM8202G-M2 (resume version)', 'AT+COPS', 'NEO-6M', 'MPU6050', 'L298N', 'UART', 'Python / Tkinter'],
      sourceNote: 'The supplied resume names SIM8202G-M2, the manuscript names A7670C, and the repository audit lists SIM7600 for an unverified repository. These references may describe different versions; the exact modem-to-build mapping is unconfirmed.',
      url: null
    },
    {
      id: 'portable-uvc-water-purifier', category: 'projects', orbitTitle: 'Portable UV-C Purifier',
      title: 'Portable UV-C Water Bottle and Purifier',
      description: 'A portable filtration and UV-C disinfection prototype with microcontroller-based dosage timing.',
      contribution: 'Designed the treatment timing and interrupt-driven enclosure interlock, which cuts UV power when the enclosure opens.',
      status: 'Hardware built and bench-evaluated (per supplied resume); device-specific microbiological validation remains future work in the paper.',
      technologies: ['UV-C', 'Embedded C', 'Arduino Nano / ESP32 variants', 'Interrupt safety interlock', 'Four-stage filtration'],
      venue: 'IEEE ICWITE 2026 paper; see research satellite',
      url: 'https://www.researchgate.net/publication/408573570_Portable_UV-C_Water_Bottle_and_Purifier_Design_Development_and_Performance_Evaluation',
      linkLabel: 'Open paper preprint ↗'
    },
    {
      id: 'gps-time-synchronization', category: 'projects', orbitTitle: 'GPS Time Synchronization',
      title: 'GPS-Based Time Synchronisation System',
      description: 'A microcontroller project that receives NEO-6M GNSS data over UART and parses NMEA sentences to extract UTC time for downstream communication-system synchronisation.',
      contribution: 'Implemented the receiver interface and NMEA time extraction; the resume describes continuous logging to observe drift and signal-integrity conditions.',
      status: 'Technical project listed in the supplied resume; no public source repository or results link verified.',
      technologies: ['NEO-6M GNSS', 'UART', 'NMEA 0183', 'UTC', 'Embedded systems'], url: null
    },
    {
      id: 'gagan-data-automation', category: 'projects', orbitTitle: 'GAGAN Data Automation',
      title: 'Enterprise Data Automation for GAGAN Performance Workflows',
      description: 'An internship team project that converted workbook-based GAGAN performance-data entry into a secure Flask application. Sensitive operational datasets and records are not reproduced here.',
      contribution: 'The internship report describes Excel data entry and management, user authentication, role-protected routes, password controls, an admin panel, and automatic monthly worksheet handling.',
      status: 'Completed as an Airports Authority of India GAGAN Complex internship project (2024–25).',
      technologies: ['Python', 'Flask', 'OpenPyXL', 'PyWebView', 'JSON user records', 'Excel automation'],
      sourceNote: 'The project report specifies PyWebView, not Tkinter; no Tkinter implementation is claimed.', url: null
    },
    {
      id: 'laser-communication', category: 'projects', orbitTitle: 'Laser Communication',
      title: 'Laser Communication System',
      description: 'An educational optical communication prototype using a light source, LDR receiver, and signal-conditioning circuitry.',
      contribution: 'Explored the optical transmitter-to-receiver path described in the existing portfolio.',
      status: 'Prototype description retained from the previous portfolio; detailed lab notes and results were not present in the supplied files.',
      technologies: ['Optical link', 'LDR', 'Signal conditioning'], url: null
    }
  ],
  repositories: [
    {
      id: 'safeintern-ai', category: 'repositories', orbitTitle: 'SafeIntern-AI',
      title: 'SafeIntern-AI — Explainable Internship-Fraud Detection',
      description: 'A multi-input internship and job-message risk-analysis application, with OCR intake for screenshots and explainable risk indicators. Repository files document FastAPI, React, OCR, and Gemma/Ollama-backed reasoning.',
      contribution: 'Designed and directed feature development, authored a backend change, and reviewed/merged coding-agent pull requests.',
      status: 'Active showcase repository; AI-assisted implementation and contribution scope stated explicitly.',
      technologies: ['FastAPI', 'React', 'OCR', 'Ollama / Gemma', 'Sentence Transformers / FAISS', 'Python', 'JavaScript'],
      sourceNote: 'The supplied research CV reports post-hoc LIME and SHAP work. The checked repository source does not confirm those implementation call sites. The local Git remote does not establish whether this repository is public, so its direct URL is withheld.',
      url: null
    },
    {
      id: 'transitops-retrieval', category: 'repositories', orbitTitle: 'TransitOps · Retrieval',
      title: 'TransitOps — ChromaDB Retrieval Layer',
      description: 'A retrieval contribution to a forked team fleet-operations project. The repository audit describes a Markdown ingestion and chunking pipeline backed by ChromaDB and a similarity-search Retriever; it does not substantiate the broader SQL-routing or generation claims.',
      contribution: 'Built the documented ingestion and retrieval modules in the team fork; the wider TransitOps application is not claimed as individual work.',
      status: 'Team/fork-based contribution; repository name and contribution verified in the supplied GitHub audit, but a direct URL was not included there.',
      technologies: ['Python', 'ChromaDB', 'Document chunking', 'Similarity search'], url: null
    },
    {
      id: 'claim-review-docs', category: 'repositories', orbitTitle: 'Evidence Review · Docs',
      title: 'Multi-Modal Evidence Review System — Documentation Contribution',
      description: 'A forked challenge project documented around comparing photo evidence with structured damage-claim data. The supplied audit describes a claim-parser, image-analysis, evidence-matching, and risk-review pipeline, but does not verify the implementation details.',
      contribution: 'Documentation, architecture-diagram, and repository-hygiene contributions only; code authorship of the evidence-analysis pipeline is unverified.',
      status: 'Forked project; not presented as an individually implemented system.',
      technologies: ['Python (repository language only)'],
      sourceNote: 'The audit does not verify FastAPI, Pydantic, OpenCV, or interchangeable VLM backends as working code or as Deekshaa’s implementation.',
      url: null
    }
  ]
};
