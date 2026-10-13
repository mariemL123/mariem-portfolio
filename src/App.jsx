import { ArrowDownRight, ArrowUpRight, BrainCircuit, Code2, Github, Layers3, Server, Sparkles } from "lucide-react";

const projects = [
  { number: "01", title: "FocusBoard", category: "PRODUCTIVITY · PYTHON", description: "A productivity dashboard project exploring task tracking, authentication, data persistence and analytics. The repository is currently private.", stack: ["Python", "Streamlit", "SQLite", "Plotly"], href: "https://github.com/mariemL123/Focusboard", status: "Existing project" },
  { number: "02", title: "OneDoc Directory Scraper", category: "DATA COLLECTION · PYTHON", description: "An experimental scraper that collects directory data and exports structured results. Reliability and responsible data handling remain part of the improvement roadmap.", stack: ["Python", "Web scraping", "Pandas", "Excel"], href: "https://github.com/mariemL123/onedoc-dermatologists-scraper", status: "Experimental" },
  { number: "03", title: "IA Expert PDF", category: "WINDOWS DESKTOP APP", description: "A Windows desktop application in development for working with PDF documents. AI-powered document Q&A is a possible future extension, not a current feature claim.", stack: ["C#", "WinUI", "PdfPig"], href: "https://github.com/mariemL123", status: "In development" },
];
const skills = [
  { icon: Code2, title: "Python & backend", text: "Python application development, API concepts, application structure, validation and testing practices." },
  { icon: BrainCircuit, title: "Applied AI", text: "Learning and experimenting with LLM integrations, retrieval-augmented generation (RAG) and AI agents." },
  { icon: Layers3, title: "Frontend", text: "React, modern JavaScript, responsive layouts and accessible user-interface fundamentals." },
  { icon: Server, title: "Data & delivery", text: "SQLite, SQL fundamentals, Git, Docker fundamentals and CI workflows." },
];
function Tag({ children }) { return <span className="tag">{children}</span>; }

export default function App() {
  return <main>
    <nav className="nav shell" aria-label="Main navigation">
      <a className="brand" href="#top" aria-label="Go to top"><span className="brand-mark">M.</span><span>MARIEM<span className="brand-muted"> / DEV</span></span></a>
      <div className="nav-links"><a href="#projects">Projects</a><a href="#skills">Expertise</a><a href="#about">About</a><a className="nav-cta" href="https://github.com/mariemL123" target="_blank" rel="noreferrer">GitHub <ArrowUpRight size={15}/></a></div>
    </nav>
    <section className="hero shell" id="top">
      <div className="hero-copy">
        <div className="eyebrow"><span className="status-dot"/> DEVELOPER PORTFOLIO · 2026</div>
        <h1>Building useful software.<br/><span className="gradient-text">Exploring intelligent systems.</span></h1>
        <p className="hero-lede">Python developer focused on backend engineering, applied AI and modern web interfaces. I turn practical problems into maintainable, documented software.</p>
        <div className="hero-actions"><a className="button button-primary" href="#projects">Explore projects <ArrowDownRight size={17}/></a><a className="button button-quiet" href="https://github.com/mariemL123" target="_blank" rel="noreferrer"><Github size={17}/> View GitHub</a></div>
        <div className="hero-footnote"><span>PYTHON</span><i/><span>AI & LLM</span><i/><span>FULL-STACK</span></div>
      </div>
      <div className="hero-visual" aria-label="Abstract software architecture illustration">
        <div className="orbit orbit-one"/><div className="orbit orbit-two"/>
        <div className="core"><BrainCircuit size={48} strokeWidth={1.25}/><span>BUILD<br/>THINK<br/>IMPROVE</span></div>
        <div className="float-card card-api"><Server size={17}/><span>API DESIGN</span><b>01</b></div><div className="float-card card-ai"><Sparkles size={17}/><span>APPLIED AI</span><b>02</b></div><div className="float-card card-ui"><Code2 size={17}/><span>WEB UI</span><b>03</b></div><div className="visual-caption">FROM IDEA TO IMPLEMENTATION</div>
      </div>
    </section>
    <section className="metrics shell" aria-label="Portfolio focus"><div><strong>01</strong><span>Python-first</span></div><div><strong>02</strong><span>AI in practice</span></div><div><strong>03</strong><span>Full-stack mindset</span></div><div><strong>04</strong><span>Quality & clarity</span></div></section>
    <section className="section shell" id="projects">
      <div className="section-heading"><div><p className="eyebrow">SELECTED WORK</p><h2>Projects with a purpose<span className="accent">.</span></h2></div><p className="section-intro">A selection of projects and experiments. Work in progress is identified transparently rather than presented as production-ready.</p></div>
      <div className="project-grid">{projects.map(project => <article className="project-card" key={project.number}><div className="project-top"><span className="project-number">{project.number}</span><span className="project-status">{project.status}</span></div><p className="project-category">{project.category}</p><h3>{project.title}</h3><p className="project-description">{project.description}</p><div className="tag-list">{project.stack.map(item => <Tag key={item}>{item}</Tag>)}</div><a className="project-link" href={project.href} target="_blank" rel="noreferrer">View repository <ArrowUpRight size={16}/></a></article>)}</div>
    </section>
    <section className="section skills-section" id="skills"><div className="shell"><div className="section-heading"><div><p className="eyebrow">TECHNICAL FOCUS</p><h2>Engineering, end to end<span className="accent">.</span></h2></div><p className="section-intro">A focused skill set connecting application logic, intelligent features, interfaces and reliable delivery.</p></div><div className="skills-grid">{skills.map(({icon:Icon,title,text}) => <article className="skill-card" key={title}><div className="skill-icon"><Icon size={21}/></div><h3>{title}</h3><p>{text}</p></article>)}</div><p className="skills-note">Skills are described as areas of practice and development. Tools will be presented as mastered only when supported by demonstrable work.</p></div></section>
    <section className="section shell about-section" id="about"><div className="about-panel"><div><p className="eyebrow">ABOUT MY APPROACH</p><h2>Curious by design.<br/><span className="gradient-text">Careful by default.</span></h2></div><div className="about-copy"><p>I enjoy building software that solves concrete problems—from productivity tools and data workflows to document-focused applications.</p><p>My focus is to grow through hands-on engineering: readable code, clear documentation, automated checks and honest project status.</p><a className="button button-primary" href="https://github.com/mariemL123" target="_blank" rel="noreferrer">Explore my GitHub <ArrowUpRight size={16}/></a></div></div></section>
    <footer className="footer shell"><a className="brand" href="#top"><span className="brand-mark">M.</span><span>MARIEM<span className="brand-muted"> / DEV</span></span></a><p>Designed for clarity. Built to keep improving.</p><a className="footer-link" href="https://github.com/mariemL123" target="_blank" rel="noreferrer"><Github size={16}/> GitHub <ArrowUpRight size={14}/></a></footer>
  </main>;
}
