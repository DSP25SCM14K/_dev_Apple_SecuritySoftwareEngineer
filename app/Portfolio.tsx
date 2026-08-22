"use client";

import { useEffect, useMemo, useState } from "react";

type Project = {
  name: string;
  type: "Systems" | "Security" | "AI" | "Product";
  description: string;
  source: string;
  demo?: string;
};

const experiences = [
  {
    company: "Sprouts AI",
    role: "Software Engineer · Systems and Security Engineering",
    period: "Mar 2025 — Present",
    bullets: [
      "Designed and implemented container-level isolation and compartmentalization mechanisms for a multi-tenant AI agent platform in C and Python, reducing cross-tenant data exposure risk 90% by enforcing sandboxed execution and least-privilege runtime policies.",
      "Designed a declarative security policy language and evaluation engine with grammar design, parsing, AST construction, semantic validation, and default-deny evaluation with precedence and conflict resolution, blocking 100% of unauthorized requests in pre-production testing.",
      "Built secure, ergonomic APIs with hardened boundaries, including authentication, authorization, CORS restrictions, rate limiting, and fail-safe error handling, cutting secure integration time 40% for first-party and third-party developers.",
      "Hardened low-level userland services against injection, privilege escalation, and unsafe deserialization exploits by applying current mitigation techniques, eliminating all critical findings across 3 consecutive penetration tests.",
      "Optimized security-critical policy enforcement paths in C using perf and low-level tracing, holding added latency under 5%, balancing security, performance, and usability.",
    ],
  },
  {
    company: "Resilience Inc",
    role: "Software Engineer · Apple Platform and Application Security",
    period: "Aug 2023 — Mar 2025",
    bullets: [
      "Engineered mandatory access control and role-scoped policy enforcement across backend services, eliminating unauthorized data access incidents for 10K+ users.",
      "Shipped user-facing iOS features in Swift and Objective-C using UIKit, GCD, and structured concurrency, boosting student engagement 40% and improving page-load performance 30% by protecting main-thread responsiveness.",
      "Implemented application sandboxing with entitlements and XPC-based IPC to compartmentalize services, containing faults and potential compromise to single components, improving system resilience 45% as measured by fault-injection testing.",
      "Analyzed framework and application code to apply security models pragmatically across the entire stack, resolving 30+ security design gaps around permissions, background execution, and memory pressure before release.",
      "Navigated kernel, low-level userland, framework, and application layers to diagnose security and performance defects, cutting triage time 50%.",
    ],
  },
  {
    company: "Tata Steel",
    role: "Software Engineer · Systems and Security Infrastructure",
    period: "Apr 2018 — Aug 2023",
    bullets: [
      "Architected default-deny access-control and policy-enforcement services in Java with C-backed performance components, achieving 99.99% uptime while enforcing least-privilege access for 50K+ employees.",
      "Designed isolation and audit controls for enterprise data pipelines, cutting manual compliance processing 60% via cross-departmental data-flow containment.",
      "Drove adoption of secure coding standards and exploit mitigation practices, including input validation and memory safety review, across 6 engineering teams, reducing production vulnerabilities 70%.",
      "Partnered with infrastructure, platform, and product teams to ensure security technologies were correctly adopted, shipping 15+ secure releases on tight schedules.",
      "Broke multi-year security modernization goals into tangible, deployable milestones, delivering every phase on schedule across concurrent priorities while managing technical debt.",
    ],
  },
];

const projects: Project[] = [
  {
    name: "EXPERIMENTAL OPERATING SYSTEM",
    type: "Systems",
    description: "A multitasking operating system built from bootstrapping through interrupts, system calls, virtual memory, and process scheduling.",
    source: "https://github.com/devthedevil/EXPOS",
  },
  {
    name: "Character Device Driver",
    type: "Systems",
    description: "Linux kernel character driver with file operations, ioctl control, concurrency, and memory-safe synchronization.",
    source: "https://github.com/devthedevil/Character-Device-Driver",
  },
  {
    name: "LangChain · Chat with Search",
    type: "AI",
    description: "Search-grounded conversational system with tool routing and answer synthesis.",
    source: "https://github.com/devthedevil/LangChain-Chat-with-Search",
  },
  {
    name: "16-Bit RISC Processor",
    type: "Systems",
    description: "Processor architecture work spanning datapath, control, instruction flow, and low-level hardware reasoning.",
    source: "https://github.com/devthedevil/Hardware-lab",
  },
  {
    name: "Real-time Stock Market Pipeline",
    type: "Product",
    description: "Streaming market-data ingestion and real-time analytical processing pipeline.",
    source: "https://github.com/devthedevil/Realtime-Stock-Market-Analysis",
  },
  {
    name: "CME MDP 3.0 Feed Handler",
    type: "Systems",
    description: "Low-latency C++ multicast market-data feed handler engineered for determinism and throughput.",
    source: "https://github.com/devthedevil/CME-Multicast-Market-Data-Feed-Handler-C-",
  },
  {
    name: "TradeSentinel",
    type: "Security",
    description: "Security-aware trading intelligence product with anomaly-oriented market analysis.",
    source: "https://github.com/devthedevil/tradesentinel",
    demo: "https://tradesentinel.vercel.app/",
  },
  {
    name: "AskMyStore",
    type: "AI",
    description: "LangGraph-orchestrated retail assistant that turns natural-language questions into grounded actions.",
    source: "https://github.com/devthedevil/AskMyStore",
    demo: "https://ask-my-store.vercel.app/",
  },
  {
    name: "Pitch Perfect",
    type: "Product",
    description: "Native iOS audio experience focused on responsive interaction and platform fluency.",
    source: "https://github.com/devthedevil/Pitch_Perfect",
  },
  {
    name: "STRANGERS",
    type: "Product",
    description: "Interactive React social experience with a polished public deployment.",
    source: "https://github.com/devthedevil/Strangers",
    demo: "https://strangers-react.vercel.app/",
  },
  {
    name: "Hire Loop",
    type: "Product",
    description: "Full-stack hiring workflow product designed around practical recruiting operations.",
    source: "https://github.com/devthedevil/hireloop",
  },
  {
    name: "AgentFlow",
    type: "AI",
    description: "Composable agent orchestration using tool calls, state transitions, and controlled execution.",
    source: "https://github.com/devthedevil/openAI-Agent-SDK",
  },
  {
    name: "Tic Tac Toe",
    type: "Product",
    description: "Native Android game application with deterministic state and interaction handling.",
    source: "https://github.com/devthedevil/TicTacToe-Game",
  },
  {
    name: "Model Context Protocol",
    type: "AI",
    description: "MCP experiments that connect models to carefully scoped tools and external context.",
    source: "https://github.com/devthedevil/MCP",
  },
  {
    name: "Voting App · Kubernetes",
    type: "Systems",
    description: "Containerized multi-service voting system deployed and operated through Kubernetes.",
    source: "https://github.com/devthedevil/Kubernetes-K8",
  },
  {
    name: "oxide-hv",
    type: "Security",
    description: "Rust hypervisor exploration centered on privilege boundaries, virtual execution, and memory isolation.",
    source: "https://github.com/devthedevil/oxide-hv",
    demo: "https://oxide-hv.vercel.app/",
  },
];

const policies = [
  {
    id: "trusted",
    request: "signed.helper → notes.db",
    verdict: "ALLOW",
    color: "mint",
    reason: "entitlement matches · label dominates · scoped read",
  },
  {
    id: "tenant",
    request: "tenant.7 → tenant.3/vector",
    verdict: "DENY",
    color: "coral",
    reason: "cross-tenant boundary · default-deny",
  },
  {
    id: "unsigned",
    request: "unsigned.worker → network",
    verdict: "DENY",
    color: "coral",
    reason: "missing signature · no network capability",
  },
];

const filters = ["All", "Systems", "Security", "AI", "Product"] as const;
const rotatingWords = ["containment", "policy", "isolation", "trust"];

function Arrow() {
  return <span aria-hidden="true">↗</span>;
}

export default function Portfolio() {
  const [filter, setFilter] = useState<(typeof filters)[number]>("All");
  const [policy, setPolicy] = useState(policies[0]);
  const [wordIndex, setWordIndex] = useState(0);

  useEffect(() => {
    document.documentElement.classList.add("js");
    const timer = window.setInterval(() => setWordIndex((value) => (value + 1) % rotatingWords.length), 1900);
    const observer = new IntersectionObserver(
      (entries) => entries.forEach((entry) => entry.isIntersecting && entry.target.classList.add("visible")),
      { threshold: 0.12 },
    );
    document.querySelectorAll(".reveal").forEach((element) => observer.observe(element));
    return () => {
      window.clearInterval(timer);
      observer.disconnect();
      document.documentElement.classList.remove("js");
    };
  }, []);

  const filtered = useMemo(
    () => (filter === "All" ? projects : projects.filter((project) => project.type === filter)),
    [filter],
  );

  const handlePointer = (event: React.PointerEvent<HTMLElement>) => {
    const x = event.clientX / window.innerWidth - 0.5;
    const y = event.clientY / window.innerHeight - 0.5;
    event.currentTarget.style.setProperty("--mx", `${x * 12}px`);
    event.currentTarget.style.setProperty("--my", `${y * 12}px`);
  };

  return (
    <main onPointerMove={handlePointer}>
      <div className="grain" aria-hidden="true" />

      <header className="site-nav">
        <a className="identity" href="#top" aria-label="Dev Kumar, home">
          <span className="identity-mark">DK</span>
          <span>DEV KUMAR</span>
        </a>
        <nav aria-label="Portfolio">
          <a href="#system">System</a>
          <a href="#experience">Experience</a>
          <a href="#work">Work</a>
        </nav>
        <a className="nav-cta" href="mailto:devkumar.dklv@gmail.com">
          Connect <Arrow />
        </a>
      </header>

      <section className="hero" id="top">
        <div className="hero-copy reveal">
          <div className="eyebrow"><span /> SYSTEMS &amp; OS SECURITY · CHICAGO</div>
          <h1>
            Build the boundary.<br />
            <span>Prove the path.</span>
          </h1>
          <p className="hero-deck">
            I engineer <strong>{rotatingWords[wordIndex]}</strong> into the system—from kernel and userland to
            framework and application—so secure behavior is fast, explainable, and natural to adopt.
          </p>
          <div className="hero-actions">
            <a className="button primary" href="#system">Explore the system <span>↓</span></a>
            <a className="button ghost" href="./Dev-Kumar-Resume.docx" download>Résumé <span>↘</span></a>
          </div>
        </div>

        <div className="hero-visual reveal">
          <div
            className="hero-image"
            role="img"
            aria-label="A layered operating-system containment architecture with an evaluating policy engine"
            style={{ backgroundImage: "linear-gradient(180deg, transparent 60%, rgba(9, 11, 10, 0.9) 100%), url('./security-system.png')" }}
          />
          <div className="live-chip"><i /> POLICY ENGINE / ONLINE</div>
          <div className="image-caption">
            <span>FIG. 01</span>
            <span>TRUST BOUNDARY / SYSTEM VIEW</span>
          </div>
        </div>

        <div className="metric-rail reveal" aria-label="Selected outcomes">
          <div><strong>90%</strong><span>less cross-tenant exposure risk</span></div>
          <div><strong>&lt;5%</strong><span>policy enforcement overhead</span></div>
          <div><strong>100%</strong><span>unauthorized requests blocked in test</span></div>
          <div><strong>13</strong><span>merged open-source contributions</span></div>
        </div>
      </section>

      <section className="system-section" id="system">
        <div className="section-heading reveal">
          <span className="section-index">01 / POLICY SYSTEM</span>
          <h2>A decision should leave<br />a trail, not a mystery.</h2>
          <p>
            Every request crosses a boundary with identity, labels, capabilities, and context.
            The policy layer evaluates once, fails closed, and emits an auditable reason.
          </p>
        </div>

        <div className="policy-lab reveal">
          <div className="lab-topbar">
            <span>POLICY LAB · INTERACTIVE TRACE</span>
            <span className="pulse-label"><i /> LIVE EVALUATOR</span>
          </div>
          <div className="scenario-tabs" role="tablist" aria-label="Policy scenarios">
            {policies.map((item, index) => (
              <button
                key={item.id}
                role="tab"
                aria-selected={policy.id === item.id}
                onClick={() => setPolicy(item)}
              >
                <span>0{index + 1}</span>{item.request}
              </button>
            ))}
          </div>
          <div className="trace" aria-live="polite">
            <div className="trace-node">
              <small>REQUEST</small>
              <strong>{policy.request}</strong>
              <span>subject + object + operation</span>
            </div>
            <div className="trace-link"><span>context</span><i /></div>
            <div className="trace-node code-node">
              <small>POLICY AST</small>
              <code>require signed<br />and label_dominates<br />and capability_scoped</code>
            </div>
            <div className="trace-link"><span>evaluate</span><i /></div>
            <div className={`trace-node verdict ${policy.color}`}>
              <small>DECISION</small>
              <strong>{policy.verdict}</strong>
              <span>{policy.reason}</span>
            </div>
            <div className="audit-node">
              <span>timestamp</span><b>14:32:08.417</b>
              <span>decision id</span><b>7f2c…e91a</b>
              <span>provenance</span><b>attached ✓</b>
            </div>
          </div>
          <div className="system-principles">
            {[
              ["ISOLATE", "Constrain blast radius before code executes."],
              ["MEDIATE", "Route every sensitive operation through policy."],
              ["EXPLAIN", "Make allow and deny decisions reproducible."],
              ["MEASURE", "Keep protection inside the latency budget."],
            ].map(([title, copy], index) => (
              <div key={title}><span>0{index + 1}</span><strong>{title}</strong><p>{copy}</p></div>
            ))}
          </div>
        </div>
      </section>

      <section className="stack-section">
        <div className="section-heading light reveal">
          <span className="section-index">02 / THE STACK</span>
          <h2>Deep enough to secure it.<br />Pragmatic enough to ship it.</h2>
        </div>
        <div className="stack-grid reveal">
          {[
            { level: "KERNEL", title: "Privilege & memory", copy: "Scheduling, virtual memory, interrupts, syscall paths, device drivers, hypervisor-class isolation.", tools: "C · C++ · Rust · x86 · LLDB · perf" },
            { level: "USERLAND", title: "Containment services", copy: "Sandboxing, compartmentalized daemons, XPC boundaries, entitlements, code signing, fault isolation.", tools: "Swift · Objective-C · XPC · GCD · BSD" },
            { level: "POLICY", title: "Deterministic control", copy: "Mandatory access control, label systems, grammars, ASTs, semantic validation, precedence, diagnostics.", tools: "MAC · DSL · AUTHZ · DEFAULT-DENY" },
            { level: "ADOPTION", title: "Security people can use", copy: "Ergonomic APIs, cross-functional integration, measurable overhead, testing, documentation, and rollout.", tools: "API · CI/CD · PYTEST · DOCKER" },
          ].map((item, index) => (
            <article key={item.level}>
              <div className="stack-number">{String(index + 1).padStart(2, "0")}</div>
              <span>{item.level}</span>
              <h3>{item.title}</h3>
              <p>{item.copy}</p>
              <code>{item.tools}</code>
            </article>
          ))}
        </div>
      </section>

      <section className="experience-section" id="experience">
        <div className="section-heading reveal">
          <span className="section-index">03 / EXPERIENCE</span>
          <h2>Security work,<br />measured in outcomes.</h2>
          <p>Eight years moving between architecture, implementation, debugging, and adoption—without losing the thread between them.</p>
        </div>
        <div className="experience-list">
          {experiences.map((experience, index) => (
            <article className="experience-item reveal" key={experience.company}>
              <div className="experience-meta">
                <span>0{index + 1}</span>
                <h3>{experience.company}</h3>
                <p>{experience.role}</p>
                <time>{experience.period}</time>
              </div>
              <ol>
                {experience.bullets.map((bullet, bulletIndex) => (
                  <li key={bullet}><span>{String(bulletIndex + 1).padStart(2, "0")}</span><p>{bullet}</p></li>
                ))}
              </ol>
            </article>
          ))}
        </div>
      </section>

      <section className="open-source">
        <div className="open-source-inner reveal">
          <div>
            <span className="section-index">OPEN SOURCE / FIELD NOTES</span>
            <h2>Enter unfamiliar code.<br />Leave it safer.</h2>
          </div>
          <div className="merge-count"><strong>13</strong><span>MERGED<br />PULL REQUESTS</span></div>
          <p>
            Scoped, test-backed fixes across public repositories: mikefarah/yq #2785,
            agentstore #1 and #2, opensre #3737, lecture-jax #330, table-view #1321, and more.
          </p>
          <a href="https://github.com/devthedevil" target="_blank" rel="noreferrer">
            Review public work <Arrow />
          </a>
        </div>
      </section>

      <section className="work-section" id="work">
        <div className="section-heading light reveal">
          <span className="section-index">04 / SELECTED WORK</span>
          <h2>Systems are best understood<br />by building them.</h2>
        </div>
        <div className="filter-row reveal" role="group" aria-label="Filter projects">
          {filters.map((item) => (
            <button key={item} aria-pressed={filter === item} onClick={() => setFilter(item)}>{item}</button>
          ))}
        </div>
        <div className="project-grid">
          {filtered.map((project, index) => (
            <article className="project-card reveal" key={project.name}>
              <div className="project-top">
                <span>{project.type}</span><span>{String(index + 1).padStart(2, "0")}</span>
              </div>
              <h3>{project.name}</h3>
              <p>{project.description}</p>
              <div className="project-links">
                <a href={project.source} target="_blank" rel="noreferrer">SourceCode <Arrow /></a>
                {project.demo && <a href={project.demo} target="_blank" rel="noreferrer">Technical Demo <Arrow /></a>}
              </div>
            </article>
          ))}
        </div>
      </section>

      <section className="publication-section">
        <div className="publication-card reveal">
          <div className="publication-label">IEEE / PUBLISHED RESEARCH / 2023</div>
          <h2>Comparative Study of Movie Recommendation Systems using Feature Engineering</h2>
          <p>
            Research discipline carries into systems engineering: define the hypothesis, instrument the behavior,
            compare alternatives, and preserve enough evidence to explain the result.
          </p>
          <div>
            <a href="https://ieeexplore.ieee.org/document/10094480" target="_blank" rel="noreferrer">Paper <Arrow /></a>
            <a href="https://github.com/devthedevil/Comparative-Study-of-Movie-Recommendation-System/blob/main/Netflix_Movie.ipynb" target="_blank" rel="noreferrer">SourceCode <Arrow /></a>
            <a href="https://drive.google.com/file/d/1rayr6Cht6quyLUJOXWOAcBi_rxQp2Ol0/view" target="_blank" rel="noreferrer">Certificate <Arrow /></a>
          </div>
        </div>
      </section>

      <section className="education-section">
        <div className="education-heading reveal">
          <span className="section-index">05 / EDUCATION</span>
          <h2>Built on first principles.</h2>
        </div>
        <div className="education-grid reveal">
          <article>
            <span>GRADUATE</span>
            <h3>Illinois Institute of Technology</h3>
            <p>M.S. · Computer Science</p>
          </article>
          <article>
            <span>UNDERGRADUATE</span>
            <h3>National Institute of Technology, Calicut</h3>
            <p>B.S. · Computer Science</p>
          </article>
        </div>
      </section>

      <section className="contact-section" id="contact">
        <div className="contact-orbit" aria-hidden="true"><span /><span /><span /></div>
        <div className="contact-copy reveal">
          <span className="section-index">06 / NEXT BOUNDARY</span>
          <h2>Build systems that<br /><em>have the user’s back.</em></h2>
          <p>For work where low-level rigor, pragmatic policy, and thoughtful platform design belong in the same room.</p>
          <a className="contact-email" href="mailto:devkumar.dklv@gmail.com">devkumar.dklv@gmail.com <Arrow /></a>
          <div className="profile-links">
            <a href="https://github.com/devthedevil" target="_blank" rel="noreferrer">GitHub <Arrow /></a>
            <a href="https://leetcode.com/u/dev_kumar_dklv/" target="_blank" rel="noreferrer">LeetCode <Arrow /></a>
            <a href="./Dev-Kumar-Resume.docx" download>Résumé <Arrow /></a>
          </div>
        </div>
      </section>
    </main>
  );
}
