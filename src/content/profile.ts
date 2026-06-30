// Single source of truth for portfolio content. Edit here, not in components.

export const profile = {
  name: 'Rohan Sood',
  role: 'AI/ML Engineer',
  email: 'rohansood98@gmail.com',
  resumeUrl: '/resume.pdf', // drop your PDF at public/resume.pdf
  socials: {
    github: 'https://github.com/rohansood98',
    linkedin: 'https://www.linkedin.com/in/rohansood98',
  },
  hero: {
    eyebrow: 'AI/ML Engineer · 4+ years',
    // `ghost` renders in the serif accent
    line1: 'Building ',
    ghost: 'agentic',
    line2: 'AI systems that ship.',
    lead: 'I design and deploy production LLM applications, multi-agent workflows, and RAG systems — from interview platforms to codebase intelligence. Currently at Digit88; previously Vosyn, GridX, PlaySimple.',
  },
  about: {
    lead: 'I build AI that earns its place — measured by what it ships and what it saves, not by the demo.',
    body: [
      'Four years across analytics, cloud automation, and AI systems — most recently designing production LLM and multi-agent platforms end to end, from the retrieval layer to the provider-abstraction that keeps them portable and cheap.',
      'I care about the unglamorous parts: cost per call, p95 latency, resumable workflows, and architecture that a teammate can pick up cold. Master’s in Computer Science from the University of Ottawa.',
    ],
    facts: [
      { k: 'Now', v: 'AI/ML Engineer · Digit88' },
      { k: 'Focus', v: 'LLM apps · agents · RAG' },
      { k: 'Education', v: 'MCS, University of Ottawa (4.9/5)' },
      { k: 'Previously', v: 'Vosyn · GridX · PlaySimple' },
      { k: 'Based', v: 'India · remote' },
    ],
  },
  // Featured work — order = display order
  projects: [
    {
      title: 'Recruit Assist',
      desc: 'End-to-end AI hiring platform — résumé scoring, tailored question generation, and turn-based voice interviews with LLM-graded scorecards, all behind a provider-agnostic LLM/STT/TTS layer that swaps cloud↔local models from one config.',
      tags: ['Python', 'FastAPI', 'LiteLLM', 'React', 'Postgres', 'Celery'],
      impact: '~$0.003/résumé · ~$0.12/interview',
      access: 'Private · Digit88',
      href: '',
    },
    {
      title: 'Keepsy',
      desc: 'Mobile app that turns saved Reels & TikToks into an organized, searchable library — auto-classified, structured via OCR + LLM, with hybrid keyword/semantic search and a RAG chat grounded only in your saves.',
      tags: ['React Native', 'Expo', 'Supabase', 'pgvector', 'RAG'],
      impact: 'Sub-1s hybrid search',
      access: 'Private · Lisnara',
      href: '',
    },
    {
      title: 'NewsAI',
      desc: 'LangGraph-orchestrated agentic newsletter — crawls, enriches, and ranks 200–300 articles, then generates multi-speaker podcasts. A multi-agent ranking pass lifted multi-class classification from 13% to 52%.',
      tags: ['LangGraph', 'FastAPI', 'Multi-provider LLM', 'Celery'],
      impact: '6h analyst work → 10-min runs',
      access: 'Private',
      href: '',
    },
    {
      title: 'AutoDoc AI',
      desc: 'Multi-agent codebase-intelligence system that analyzes a repository and auto-writes architecture, API, and testing docs (markdown + PDF with Mermaid diagrams) using MCP-integrated tools and checkpointed, resumable LangGraph workflows.',
      tags: ['LangGraph', 'MCP', 'Anthropic', 'Postgres'],
      impact: '−70% repo-analysis effort',
      access: 'Private · Digit88',
      href: '',
    },
  ],
  // Smaller / earlier work — shown as a compact line
  more: [
    { title: 'Game Manual Q&A Chatbot', note: 'LangGraph · Qdrant · Streamlit', href: 'https://github.com/rohansood98/game_manual_chatbot' },
    { title: 'Phishing Detection — Email', note: 'Fine-tuned Mistral-7B · 98.9%', href: 'https://github.com/rohansood98/Phishing-Email-detection' },
    { title: 'Phishing Detection — URLs', note: 'RoBERTa · 98%', href: 'https://github.com/rohansood98/Phishing-URL-Detection-using-RoBerta' },
  ],
  experience: [
    {
      role: 'AI/ML Engineer',
      org: 'Digit88',
      when: 'Aug 2025 — Present',
      where: 'Remote · India',
      note: 'Production LLM apps & multi-agent systems — interview platforms, agentic newsletters, codebase intelligence; provider-abstraction for portable, cheap inference.',
    },
    {
      role: 'ML Engineering Consultant',
      org: 'Vosyn',
      when: 'Apr — Jul 2025',
      where: 'Toronto · Canada',
      note: 'AWS Lambda + LangGraph pipelines for PDF→HTML review; PSOLA silence-aware auto-dubbing realignment; FastAPI services on Cloud Run.',
    },
    {
      role: 'SRE & Automation Intern',
      org: 'GridX',
      when: 'May — Aug 2024',
      where: 'Toronto · Canada',
      note: 'Slack bot on EKS (Lex + Lambda) automating Jira & access (−80% DevOps tickets); CI/CD with Docker + Jenkins.',
    },
    {
      role: 'Product Analyst',
      org: 'PlaySimple Games',
      when: 'Sep 2020 — Dec 2022',
      where: 'Bengaluru · India',
      note: 'Anomaly-detection product alerts; A/B experiments lifting retention 15% / IAP 40%; PowerBI root-cause dashboards over billions of rows.',
    },
  ],
  education: [
    { role: 'M.Sc. Computer Science', org: 'University of Ottawa', when: '2023 — 2024', where: 'GPA 4.9 / 5' },
    { role: 'B.Tech, Computer Science', org: 'SRM Institute of Science & Technology', when: '2017 — 2021', where: 'GPA 9.2 / 10' },
  ],
  hobby: {
    kicker: 'Beyond the day job',
    title: 'Lisnara Studio',
    body: 'I run an independent studio for my own apps — calm, human software I actually want to use. Keepsy is the first.',
    href: 'https://lisnara.com',
  },
} as const
