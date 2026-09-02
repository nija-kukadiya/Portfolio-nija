import { useState, useEffect } from 'react';
import {
  Building2,
  MapPin,
  Mail,
  Phone,
  CreditCard,
  Cloud,
  Code,
  Database,
  Menu,
  X,
  Copy,
  Check,
  Download,
  Search,
  Zap,
  Sparkles,
  Moon,
  Sun
} from 'lucide-react';
import profileImg from '/nija_profile.jpg';

export default function App() {
  const [activeSection, setActiveSection] = useState('home');
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [copiedEmail, setCopiedEmail] = useState(false);
  const [projectFilter, setProjectFilter] = useState('all');

  // Theme toggle
  const [isDark, setIsDark] = useState(() => {
    if (typeof window !== 'undefined') {
      const stored = localStorage.getItem('theme');
      if (stored) return stored === 'dark';
      return window.matchMedia('(prefers-color-scheme: dark)').matches;
    }
    return true;
  });

  useEffect(() => {
    const root = document.documentElement;
    if (isDark) {
      root.classList.add('dark');
      root.classList.remove('light');
      localStorage.setItem('theme', 'dark');
    } else {
      root.classList.remove('dark');
      root.classList.add('light');
      localStorage.setItem('theme', 'light');
    }
  }, [isDark]);

  useEffect(() => {
    const handleScroll = () => {
      const sections = ['home', 'about', 'skills', 'experience', 'projects', 'contact'];
      const scrollPosition = window.scrollY + 200;
      for (const section of sections) {
        const el = document.getElementById(section);
        if (el) {
          const top = el.offsetTop;
          const height = el.offsetHeight;
          if (scrollPosition >= top && scrollPosition < top + height) {
            setActiveSection(section);
            break;
          }
        }
      }
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const copyEmail = () => {
    navigator.clipboard.writeText('nija.kukadiya001@gmail.com');
    setCopiedEmail(true);
    setTimeout(() => setCopiedEmail(false), 2500);
  };

  const projects = [
    { title: 'VinoVoss', category: 'saas', tag: 'AI & SaaS Platform', desc: 'AI-powered wine discovery platform providing personalized recommendations, smart search, food pairings, tasting notes, and interactive quizzes.', tech: ['Next.js', 'Python', 'Tailwind CSS', 'shadcn/ui', 'Zod', 'Zustand'] },
    { title: 'Rentest.ai', category: 'analytics saas', tag: 'Real Estate & Pricing AI', desc: 'Data-driven rental price estimation platform providing property rent estimates, comparable market analysis, customizable reports, and real estate insights.', tech: ['Next.js', 'API Routes', 'Redux', 'AWS Lambda', 'Tailwind CSS', 'shadcn/ui'] },
    { title: 'MetadataWorks', category: 'enterprise analytics', tag: 'Data Governance Platform', desc: 'Enterprise metadata catalog platform supporting data discovery, governance, secure access control, compliance reporting, and FAIR data management.', tech: ['Next.js', 'Styled Components', 'Grommet', 'Redux'] },
    { title: 'Slabstack', category: 'saas enterprise', tag: 'SaaS CRM & Operations', desc: 'Sales & business management SaaS platform supporting CRM, dynamic pricing, quoting, sales forecasting, and business workflows for heavy building materials producers.', tech: ['Next.js', 'Golang', 'Tailwind CSS'] },
    { title: 'ARTDAI', category: 'analytics', tag: 'Art Market Intelligence', desc: 'Data-driven art market intelligence platform providing auction analytics, artwork listings, comparable sales, market insights, and interactive visualizations.', tech: ['Next.js', 'Data Visualization', 'REST APIs'] },
    { title: 'VERSD', category: 'saas enterprise', tag: 'Experience Platform', desc: 'Experience management platform supporting event management, bookings, RSVPs, Stripe payments, recurring subscriptions, dashboards, and customer engagement.', tech: ['Next.js', 'React Native', 'Stripe'] }
  ];

  const filteredProjects = projectFilter === 'all' ? projects : projects.filter(p => p.category.includes(projectFilter));

  return (
    <div className="min-h-screen font-sans selection:bg-[#f97316] selection:text-[#0b0f19] transition-colors duration-300" style={{backgroundColor: isDark ? '#0b0f19' : '#f8fafc', color: isDark ? '#f1f5f9' : '#0f172a'}}>

      <nav className="fixed top-0 left-0 right-0 z-50 bg-[#0b0f19]/85 backdrop-blur-md border-b border-white/10 px-6 py-4 transition-all">
        <div className="max-w-6xl mx-auto flex items-center justify-between">
          <a href="#home" className="flex items-center gap-2 font-bold text-xl tracking-tight text-white">
            <span className="w-2.5 h-2.5 rounded-full bg-[#f97316] shadow-[0_0_10px_#f97316]"></span>
            <span>NIJA KUKADIYA</span>
          </a>
          <div className="hidden md:flex items-center gap-8">
            {[{ id: 'home', label: 'Home' }, { id: 'skills', label: 'Skills' }, { id: 'experience', label: 'Experience' }, { id: 'projects', label: 'Projects' }, { id: 'contact', label: 'Contact' }].map(link => (
              <a key={link.id} href={`#${link.id}`} className={`text-sm font-medium transition-colors relative py-1 ${activeSection === link.id ? 'text-white' : 'text-slate-400 hover:text-slate-200'}`}>
                {link.label}
                {activeSection === link.id && <span className="absolute bottom-0 left-0 right-0 h-0.5 bg-[#f97316] rounded-full"></span>}
              </a>
            ))}
          </div>
          <div className="hidden md:flex items-center gap-3">
            <button
              onClick={() => setIsDark(!isDark)}
              className="p-2 rounded-full border border-white/10 text-slate-300 hover:text-white hover:border-[#f97316]/40 transition-all"
              aria-label="Toggle theme"
            >
              {isDark ? <Sun size={18} /> : <Moon size={18} />}
            </button>
            <a href="#contact" className="inline-flex items-center px-4 py-2 text-sm font-semibold rounded-md bg-gradient-to-r from-[#f97316] to-[#fbbf24] text-[#0b0f19] hover:opacity-90 transition-opacity shadow-[0_4px_20px_rgba(249,115,22,0.2)]">Get in touch</a>
          </div>
          <button onClick={() => setMobileMenuOpen(!mobileMenuOpen)} className="md:hidden text-slate-300 hover:text-white p-1">
            {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
        {mobileMenuOpen && (
          <div className="md:hidden pt-4 pb-6 border-t border-white/10 mt-3 flex flex-col gap-4">
            {['home', 'skills', 'experience', 'projects', 'contact'].map(id => (
              <a key={id} href={`#${id}`} onClick={() => setMobileMenuOpen(false)} className="text-slate-300 hover:text-white text-base font-medium capitalize">{id}</a>
            ))}
            <div className="flex items-center justify-between pt-2 border-t border-white/10">
              <span className="text-sm font-medium text-slate-300">Theme</span>
              <button
                onClick={() => {
                  setIsDark(!isDark);
                  setMobileMenuOpen(false);
                }}
                className="p-2 rounded-full border border-white/10 text-slate-300 hover:text-white"
                aria-label="Toggle theme"
              >
                {isDark ? <Sun size={18} /> : <Moon size={18} />}
              </button>
            </div>
            <a href="#contact" onClick={() => setMobileMenuOpen(false)} className="inline-block text-center w-full py-2.5 text-sm font-semibold rounded-md bg-gradient-to-r from-[#f97316] to-[#fbbf24] text-[#0b0f19]">Get in touch</a>
          </div>
        )}
      </nav>

      {/* Hero */}
      <section id="home" className="pt-36 pb-20 px-6">
        <div className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          <div className="lg:col-span-8">
            <div className="inline-block font-mono text-xs uppercase tracking-widest text-[#f97316] bg-[#f97316]/10 px-3 py-1 rounded-full border border-[#f97316]/20 mb-6">
              Full-Stack Architecture &middot; Microfrontends &middot; Tech Leadership
            </div>
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight text-white leading-tight mb-6">
              Senior Full-Stack Engineer building <span className="bg-gradient-to-r from-[#f97316] to-[#fbbf24] bg-clip-text text-transparent">scalable SaaS, AI-powered products,</span> and leading high-performance teams.
            </h1>
            <p className="text-lg text-slate-400 max-w-2xl leading-relaxed mb-8">
              Senior Software Engineer and Tech Lead with 5+ years of experience building scalable web and SaaS applications. Specialist in Microfrontend architecture, AI integration (OpenAI, Gemini AI), Stripe payments, ZATCA e-invoicing, and cloud deployment. Passionate about AI-powered development and always eager to learn new technologies.
            </p>
            <div className="flex flex-wrap gap-4 text-sm text-slate-400 mb-10">
              <span className="flex items-center gap-1.5"><MapPin size={16} className="text-[#f97316]" /> Surat, India (Remote Available)</span>
              <span className="flex items-center gap-1.5"><Building2 size={16} className="text-[#f97316]" /> Senior Software Engineer / Team Lead, HVG Infotech</span>
            </div>
            <div className="flex flex-wrap gap-4">
              <a href="#contact" className="px-6 py-3 text-sm font-semibold rounded-md bg-gradient-to-r from-[#f97316] to-[#fbbf24] text-[#0b0f19] hover:opacity-90 transition-opacity shadow-[0_4px_20px_rgba(249,115,22,0.25)]">Get in touch</a>
              <a href="/nija_kukadiya_resume.pdf" download="Nija_Kukadiya_Resume.pdf" className="px-6 py-3 text-sm font-semibold rounded-md bg-[#f97316]/10 border border-[#f97316]/40 text-[#f97316] hover:bg-[#f97316]/20 transition-all flex items-center gap-2 shadow-[0_0_15px_rgba(249,115,22,0.15)]">
                <Download size={18} /> Download Resume
              </a>
              <a href="#projects" className="px-6 py-3 text-sm font-semibold rounded-md bg-white/5 border border-white/10 text-white hover:bg-white/10 hover:border-[#f97316]/40 transition-all">View SaaS Projects</a>
              <a href="https://www.linkedin.com/in/nija-kukadiya-a416b5211/" target="_blank" rel="noreferrer" className="px-6 py-3 text-sm font-semibold rounded-md bg-white/5 border border-white/10 text-white hover:bg-white/10 transition-all flex items-center gap-2">LinkedIn Profile</a>
              <a href="https://github.com/nija-kukadiya" target="_blank" rel="noreferrer" className="px-6 py-3 text-sm font-semibold rounded-md bg-white/5 border border-white/10 text-white hover:bg-white/10 transition-all flex items-center gap-2">GitHub Profile</a>
            </div>
          </div>
          <div className="lg:col-span-4 flex justify-center">
            <div className="bg-[#131b2e] border border-white/10 rounded-2xl p-6 text-center relative shadow-2xl max-w-sm w-full">
              <div className="relative w-44 h-44 mx-auto mb-5 rounded-2xl overflow-hidden border-2 border-[#f97316] shadow-[0_0_20px_rgba(249,115,22,0.25)]">
                <img src={profileImg} alt="Nija Kukadiya" className="w-full h-full object-cover object-top hover:scale-105 transition-transform duration-300" />
              </div>
              <h3 className="text-xl font-bold text-white mb-1">Nija Kukadiya</h3>
              <p className="font-mono text-xs text-[#f97316]">Senior Software Engineer & Team Lead</p>
              <div className="mt-4 flex flex-col gap-2">
                <span className="inline-flex items-center justify-center gap-1.5 px-3 py-1.5 rounded-full bg-[#fbbf24]/10 border border-[#fbbf24]/30 text-[#fbbf24] text-xs font-semibold"><Zap size={12} /> 5+ Years Experience</span>
                <span className="inline-flex items-center justify-center gap-1.5 px-3 py-1.5 rounded-full bg-[#f97316]/10 border border-[#f97316]/30 text-[#f97316] text-xs font-semibold"><Sparkles size={12} /> Always Eager to Learn</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Skills */}
      <section id="skills" className="py-20 px-6 border-t border-white/10">
        <div className="max-w-6xl mx-auto">
          <div className="mb-16">
            <div className="font-mono text-xs uppercase tracking-widest text-[#f97316] mb-2">Core Competencies</div>
            <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4">Technical expertise matrix</h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="bg-[#131b2e] border border-[#f97316]/30 rounded-xl p-6 md:col-span-2 relative overflow-hidden shadow-[0_0_30px_rgba(249,115,22,0.08)]">
              <div className="absolute top-0 right-0 w-40 h-40 bg-[#f97316]/5 rounded-full blur-3xl pointer-events-none" />
              <h3 className="text-lg font-bold text-[#f97316] mb-4 flex items-center gap-2"><Sparkles size={18} /> AI & Chatbot Integration</h3>
              <div className="flex flex-wrap gap-2">
                {['OpenAI API (GPT-4)', 'OpenAI Assistants API', 'Gemini AI API', 'Vercel AI SDK', 'LangChain', 'AI-Powered Chatbots', 'Prompt Engineering', 'LLM Integration', 'AI Tool-Assisted Development', 'GitHub Copilot', 'Cursor AI', 'v0.dev / Lovable'].map((skill, i) => (
                  <span key={i} className="font-mono text-xs px-3 py-1.5 rounded-md bg-[#f97316]/10 border border-[#f97316]/20 text-[#f97316]">{skill}</span>
                ))}
              </div>
            </div>
            <div className="bg-[#131b2e] border border-white/10 rounded-xl p-6">
              <h3 className="text-lg font-bold text-[#f97316] mb-4 flex items-center gap-2"><Code size={18} /> Frontend & Mobile Development</h3>
              <div className="flex flex-wrap gap-2">
                {['React.js', 'Next.js', 'TypeScript', 'JavaScript (ES6+)', 'Microfrontends', 'Module Federation', 'Redux / Context API', 'Zustand', 'Tanstack Query (React Query)', 'Tailwind CSS', 'Material UI', 'shadcn/ui', 'Styled Components', 'React Native', 'Android', 'iOS'].map((skill, i) => (
                  <span key={i} className="font-mono text-xs px-3 py-1.5 rounded-md bg-white/5 border border-white/10 text-slate-200">{skill}</span>
                ))}
              </div>
            </div>
            <div className="bg-[#131b2e] border border-white/10 rounded-xl p-6">
              <h3 className="text-lg font-bold text-[#f97316] mb-4 flex items-center gap-2"><Database size={18} /> Backend, APIs & Languages</h3>
              <div className="flex flex-wrap gap-2">
                {['Node.js', 'Express.js', 'FastAPI', 'Python', 'Golang', 'Next.js API Routes', 'REST APIs', 'GraphQL', 'WebSockets', 'JWT', 'OAuth 2.0', 'Microservices', 'MongoDB', 'PostgreSQL', 'Redis', 'Zod', 'Prisma ORM'].map((skill, i) => (
                  <span key={i} className="font-mono text-xs px-3 py-1.5 rounded-md bg-white/5 border border-white/10 text-slate-200">{skill}</span>
                ))}
              </div>
            </div>
            <div className="bg-[#131b2e] border border-white/10 rounded-xl p-6">
              <h3 className="text-lg font-bold text-[#f97316] mb-4 flex items-center gap-2"><Search size={18} /> Analytics, SEO & Design</h3>
              <div className="flex flex-wrap gap-2">
                {['Google Analytics', 'Mixpanel', 'Search Engine (SEO)', 'PageRank Optimization', 'Backlinks Strategy', 'Figma', 'Adobe XD'].map((skill, i) => (
                  <span key={i} className="font-mono text-xs px-3 py-1.5 rounded-md bg-white/5 border border-white/10 text-slate-200">{skill}</span>
                ))}
              </div>
            </div>
            <div className="bg-[#131b2e] border border-white/10 rounded-xl p-6">
              <h3 className="text-lg font-bold text-[#f97316] mb-4 flex items-center gap-2"><CreditCard size={18} /> Payments & Compliance</h3>
              <div className="flex flex-wrap gap-2">
                {['Stripe Payments', 'Subscriptions & Recurring Billing', 'Stripe Webhooks', 'Checkout & Refunds', 'ZATCA E-Invoicing', 'XML Digital Signing', 'QR Codes', 'ZATCA API Clearance'].map((skill, i) => (
                  <span key={i} className="font-mono text-xs px-3 py-1.5 rounded-md bg-white/5 border border-white/10 text-slate-200">{skill}</span>
                ))}
              </div>
            </div>
            <div className="bg-[#131b2e] border border-white/10 rounded-xl p-6">
              <h3 className="text-lg font-bold text-[#f97316] mb-4 flex items-center gap-2"><Cloud size={18} /> Cloud & DevOps</h3>
              <div className="flex flex-wrap gap-2">
                {['AWS S3', 'AWS Lambda', 'Docker', 'Kubernetes', 'GitHub Actions', 'Jenkins', 'Vercel', 'Azure', 'CI/CD'].map((skill, i) => (
                  <span key={i} className="font-mono text-xs px-3 py-1.5 rounded-md bg-white/5 border border-white/10 text-slate-200">{skill}</span>
                ))}
              </div>
            </div>
            <div className="bg-[#131b2e] border border-white/10 rounded-xl p-6">
              <h3 className="text-lg font-bold text-[#f97316] mb-4 flex items-center gap-2"><Check size={18} /> Testing, Tools & Data Visualization</h3>
              <div className="flex flex-wrap gap-2">
                {['Jest', 'Vitest', 'Cypress', 'Playwright', 'React Testing Library', 'Git / GitHub', 'Jira', 'D3.js', 'Highcharts', 'amCharts (AM5)', 'Technical Architecture', 'Team Mentoring', 'Agile / Scrum'].map((skill, i) => (
                  <span key={i} className="font-mono text-xs px-3 py-1.5 rounded-md bg-white/5 border border-white/10 text-slate-200">{skill}</span>
                ))}
              </div>
            </div>
            <div className="bg-gradient-to-r from-[#f97316]/5 to-[#fbbf24]/5 border border-[#fbbf24]/20 rounded-xl p-6 md:col-span-2 flex items-center gap-4">
              <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-[#f97316]/20 to-[#fbbf24]/20 flex items-center justify-center shrink-0">
                <Zap size={22} className="text-[#fbbf24]" />
              </div>
              <div>
                <h3 className="text-base font-bold text-white mb-1">🚀 Always Eager to Learn</h3>
                <p className="text-sm text-slate-400">Passionate about exploring new technologies — whether it's a new framework, AI tool, cloud service, or programming language. Continuously upskilling to stay ahead of the curve and deliver cutting-edge solutions.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Experience */}
      <section id="experience" className="py-20 px-6 border-t border-white/10">
        <div className="max-w-4xl mx-auto">
          <div className="mb-16">
            <div className="font-mono text-xs uppercase tracking-widest text-[#f97316] mb-2">Professional Journey</div>
            <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4">Experience & Leadership</h2>
          </div>
          <div className="relative pl-6 border-l-2 border-white/10 space-y-12">
            <div className="relative">
              <div className="absolute -left-[31px] top-1.5 w-4 h-4 rounded-full bg-[#0b0f19] border-2 border-[#f97316]"></div>
              <div className="bg-[#131b2e] border border-white/10 rounded-xl p-8">
                <div className="flex flex-wrap items-start justify-between gap-4 mb-4">
                  <div>
                    <h3 className="text-xl font-bold text-white">Senior Software Engineer / Team Lead</h3>
                    <div className="text-sm font-semibold text-[#f97316]">HVG Infotech Pvt Ltd &middot; Surat, India</div>
                  </div>
                  <span className="font-mono text-xs bg-white/5 text-slate-300 px-3 py-1 rounded-full border border-white/10">Jul 2021 – Present</span>
                </div>
                <ul className="space-y-3 text-sm text-slate-300">
                  {[
                    'Architected and shipped full-stack SaaS applications using React.js, Next.js, Node.js, TypeScript, Redux, REST APIs, and GraphQL for international clients across AI, real estate, data management, and e-commerce domains.',
                    'Integrated AI capabilities into production applications using OpenAI API (GPT-4) and Gemini AI API — including chatbot development, prompt engineering, and LLM-powered features.',
                    'Currently leading a team of 4 developers with hands-on experience in technical architecture, mentoring, code reviews, client communication, Stripe payments, and ZATCA e-invoicing.',
                    'Designed and implemented 2 Microfrontend applications using modular frontend architecture and Module Federation.',
                    'Built reusable component libraries and design systems using Tailwind CSS, Material UI, shadcn/ui, and Styled Components.',
                    'Implemented end-to-end Stripe integrations (subscriptions, recurring billing, webhooks, refunds, customer management) and ZATCA XML e-invoicing with digital signing and QR codes.',
                    'Managed cloud deployment and CI/CD automation using AWS S3, AWS Lambda, Docker, Kubernetes, Vercel, GitHub Actions, and Jenkins.'
                  ].map((item, i) => (
                    <li key={i} className="flex items-start gap-2">
                      <span className="text-[#f97316] mt-0.5">▹</span>
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Projects */}
      <section id="projects" className="py-20 px-6 border-t border-white/10">
        <div className="max-w-6xl mx-auto">
          <div className="mb-12">
            <div className="font-mono text-xs uppercase tracking-widest text-[#f97316] mb-2">Portfolio Showcase</div>
            <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4">SaaS & Enterprise Platforms</h2>
            <p className="text-slate-400">Key applications engineered for international clients.</p>
          </div>
          <div className="flex flex-wrap gap-2 mb-10">
            {[{ id: 'all', label: 'All Projects' }, { id: 'saas', label: 'SaaS & AI' }, { id: 'analytics', label: 'Real Estate & Analytics' }, { id: 'enterprise', label: 'Enterprise & CRM' }].map(tab => (
              <button key={tab.id} onClick={() => setProjectFilter(tab.id)} className={`px-4 py-2 rounded-full text-xs font-semibold transition-all ${projectFilter === tab.id ? 'bg-gradient-to-r from-[#f97316] to-[#fbbf24] text-[#0b0f19]' : 'bg-white/5 border border-white/10 text-slate-300 hover:bg-white/10'}`}>{tab.label}</button>
            ))}
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {filteredProjects.map((project, index) => (
              <div key={index} className="bg-[#131b2e] border border-white/10 rounded-xl p-6 flex flex-col justify-between hover:border-[#f97316]/40 hover:-translate-y-1 transition-all">
                <div>
                  <div className="flex justify-between items-center mb-3">
                    <span className="font-mono text-[11px] uppercase tracking-wider text-[#f97316] bg-[#f97316]/10 px-2.5 py-1 rounded border border-[#f97316]/20">{project.tag}</span>
                  </div>
                  <h3 className="text-xl font-bold text-white mb-3">{project.title}</h3>
                  <p className="text-sm text-slate-400 leading-relaxed mb-6">{project.desc}</p>
                </div>
                <div className="flex flex-wrap gap-1.5 pt-4 border-t border-white/5">
                  {project.tech.map((t, i) => <span key={i} className="font-mono text-[11px] text-slate-300 bg-white/5 px-2.5 py-1 rounded">{t}</span>)}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact */}
      <section id="contact" className="py-20 px-6 border-t border-white/10">
        <div className="max-w-6xl mx-auto">
          <div className="mb-16">
            <div className="font-mono text-xs uppercase tracking-widest text-[#f97316] mb-2">Get in touch</div>
            <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4">Let's connect</h2>
            <p className="text-slate-400 max-w-xl">Open for Senior Software Engineer & Tech Lead opportunities, full-stack consulting, and high-impact SaaS projects.</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="bg-[#131b2e] border border-white/10 rounded-xl p-8 space-y-6">
              {[{ icon: <Mail size={22} />, label: 'Email Address', value: 'nija.kukadiya001@gmail.com' }, { icon: <Phone size={22} />, label: 'Phone', value: '+91 7096529981' }, { icon: <MapPin size={22} />, label: 'Location', value: 'Surat, Gujarat, India (Remote)' }].map((item, i) => (
                <div key={i} className="flex items-center gap-4">
                  <div className="w-12 h-12 rounded-lg bg-[#f97316]/10 text-[#f97316] flex items-center justify-center">{item.icon}</div>
                  <div>
                    <div className="text-xs text-slate-400 uppercase tracking-wider font-mono">{item.label}</div>
                    <div className="text-base font-semibold text-white">{item.value}</div>
                  </div>
                </div>
              ))}
            </div>
            <div className="bg-[#131b2e] border border-white/10 rounded-xl p-8 flex flex-col justify-center gap-6">
              <div>
                <h3 className="text-xl font-bold text-white mb-2">Connect Directly</h3>
                <p className="text-sm text-slate-400">Click below to copy my email or reach out via LinkedIn / GitHub.</p>
              </div>
              <div className="flex flex-wrap gap-4">
                <button onClick={copyEmail} className="px-6 py-3 text-sm font-semibold rounded-md bg-gradient-to-r from-[#f97316] to-[#fbbf24] text-[#0b0f19] flex items-center gap-2 hover:opacity-90 transition-opacity">
                  {copiedEmail ? <Check size={18} /> : <Copy size={18} />}
                  {copiedEmail ? 'Email Copied!' : 'Copy Email Address'}
                </button>
                <a href="mailto:nija.kukadiya001@gmail.com" className="px-6 py-3 text-sm font-semibold rounded-md bg-white/5 border border-white/10 text-white hover:bg-white/10 transition-all flex items-center gap-2"><Mail size={18} /> Direct Email</a>
                <a href="https://www.linkedin.com/in/nija-kukadiya-a416b5211/" target="_blank" rel="noreferrer" className="px-6 py-3 text-sm font-semibold rounded-md bg-white/5 border border-white/10 text-white hover:bg-white/10 transition-all flex items-center gap-2">LinkedIn</a>
                <a href="https://github.com/nija-kukadiya" target="_blank" rel="noreferrer" className="px-6 py-3 text-sm font-semibold rounded-md bg-white/5 border border-white/10 text-white hover:bg-white/10 transition-all flex items-center gap-2">GitHub</a>
              </div>
            </div>
          </div>
        </div>
      </section>

      <footer className="py-8 px-6 border-t border-white/10 text-center text-xs text-slate-500">
        <div className="max-w-6xl mx-auto">&copy; 2026 Nija Kukadiya. Built with React & TypeScript. Deployed on Vercel.</div>
      </footer>
    </div>
  );
}
