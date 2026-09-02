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
  Check
} from 'lucide-react';
import profileImg from '/nija_profile.jpg';

export default function App() {
  const [activeSection, setActiveSection] = useState('home');
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [copiedEmail, setCopiedEmail] = useState(false);
  const [projectFilter, setProjectFilter] = useState('all');

  // Active section scroll detection
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
    {
      title: 'VinoVoss',
      category: 'saas',
      tag: 'AI & SaaS Platform',
      desc: 'AI-powered wine discovery platform providing personalized recommendations, smart search, food pairings, tasting notes, and interactive quizzes.',
      tech: ['Next.js', 'Python', 'Tailwind CSS', 'shadcn/ui', 'Zod', 'Zustand']
    },
    {
      title: 'Rentest.ai',
      category: 'analytics saas',
      tag: 'Real Estate & Pricing AI',
      desc: 'Data-driven rental price estimation platform providing property rent estimates, comparable market analysis, customizable reports, and real estate insights.',
      tech: ['Next.js', 'API Routes', 'Redux', 'AWS Lambda', 'Tailwind CSS', 'shadcn/ui']
    },
    {
      title: 'MetadataWorks',
      category: 'enterprise analytics',
      tag: 'Data Governance Platform',
      desc: 'Enterprise metadata catalog platform supporting data discovery, governance, secure access control, compliance reporting, and FAIR data management.',
      tech: ['Next.js', 'Styled Components', 'Grommet', 'Redux']
    },
    {
      title: 'Slabstack',
      category: 'saas enterprise',
      tag: 'SaaS CRM & Operations',
      desc: 'Sales & business management SaaS platform supporting CRM, dynamic pricing, quoting, sales forecasting, and business workflows for heavy building materials producers.',
      tech: ['Next.js', 'Golang', 'Tailwind CSS']
    },
    {
      title: 'ARTDAI',
      category: 'analytics',
      tag: 'Art Market Intelligence',
      desc: 'Data-driven art market intelligence platform providing auction analytics, artwork listings, comparable sales, market insights, and interactive visualizations.',
      tech: ['Next.js', 'Data Visualization', 'REST APIs']
    },
    {
      title: 'VERSD',
      category: 'saas enterprise',
      tag: 'Experience Platform',
      desc: 'Experience management platform supporting event management, bookings, RSVPs, Stripe payments, recurring subscriptions, dashboards, and customer engagement.',
      tech: ['Next.js', 'React Native', 'Stripe']
    }
  ];

  const filteredProjects = projectFilter === 'all' 
    ? projects 
    : projects.filter(p => p.category.includes(projectFilter));

  return (
    <div className="min-h-screen bg-[#0b0f19] text-[#f1f5f9] font-sans selection:bg-[#38bdf8] selection:text-[#0b0f19]">
      
      {/* Top Navigation */}
      <nav className="fixed top-0 left-0 right-0 z-50 bg-[#0b0f19]/85 backdrop-blur-md border-b border-white/10 px-6 py-4 transition-all">
        <div className="max-w-6xl mx-auto flex items-center justify-between">
          <a href="#home" className="flex items-center gap-2 font-bold text-xl tracking-tight text-white">
            <span className="w-2.5 h-2.5 rounded-full bg-[#38bdf8] shadow-[0_0_10px_#38bdf8]"></span>
            <span>NIJA KUKADIYA</span>
          </a>

          {/* Desktop Nav Links */}
          <div className="hidden md:flex items-center gap-8">
            {[
              { id: 'home', label: 'Home' },
              { id: 'skills', label: 'Skills' },
              { id: 'experience', label: 'Experience' },
              { id: 'projects', label: 'Projects' },
              { id: 'contact', label: 'Contact' }
            ].map(link => (
              <a
                key={link.id}
                href={`#${link.id}`}
                className={`text-sm font-medium transition-colors relative py-1 ${
                  activeSection === link.id ? 'text-white' : 'text-slate-400 hover:text-slate-200'
                }`}
              >
                {link.label}
                {activeSection === link.id && (
                  <span className="absolute bottom-0 left-0 right-0 h-0.5 bg-[#38bdf8] rounded-full"></span>
                )}
              </a>
            ))}
          </div>

          <div className="hidden md:block">
            <a
              href="#contact"
              className="inline-flex items-center px-4 py-2 text-sm font-semibold rounded-md bg-gradient-to-r from-[#38bdf8] to-[#818cf8] text-[#0b0f19] hover:opacity-90 transition-opacity shadow-[0_4px_20px_rgba(56,189,248,0.2)]"
            >
              Get in touch
            </a>
          </div>

          {/* Mobile Menu Button */}
          <button 
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="md:hidden text-slate-300 hover:text-white p-1"
          >
            {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Navigation Drawer */}
        {mobileMenuOpen && (
          <div className="md:hidden pt-4 pb-6 border-t border-white/10 mt-3 flex flex-col gap-4">
            {['home', 'about', 'skills', 'experience', 'projects', 'contact'].map(id => (
              <a
                key={id}
                href={`#${id}`}
                onClick={() => setMobileMenuOpen(false)}
                className="text-slate-300 hover:text-white text-base font-medium capitalize"
              >
                {id}
              </a>
            ))}
            <a
              href="#contact"
              onClick={() => setMobileMenuOpen(false)}
              className="inline-block text-center w-full py-2.5 text-sm font-semibold rounded-md bg-gradient-to-r from-[#38bdf8] to-[#818cf8] text-[#0b0f19]"
            >
              Get in touch
            </a>
          </div>
        )}
      </nav>

      {/* Hero Section (#home) */}
      <section id="home" className="pt-36 pb-20 px-6">
        <div className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          <div className="lg:col-span-8">
            <div className="inline-block font-mono text-xs uppercase tracking-widest text-[#38bdf8] bg-[#38bdf8]/10 px-3 py-1 rounded-full border border-[#38bdf8]/20 mb-6">
              Full-Stack Architecture &middot; Microfrontends &middot; Tech Leadership
            </div>
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight text-white leading-tight mb-6">
              Shipping <span className="bg-gradient-to-r from-[#38bdf8] to-[#818cf8] bg-clip-text text-transparent">production-grade web & SaaS applications</span> — and leading the engineering teams that build them.
            </h1>
            <p className="text-lg text-slate-400 max-w-2xl leading-relaxed mb-8">
              Senior Software Engineer and Team Lead with 5+ years of experience architecting scalable web applications using React.js, Next.js, Node.js, and TypeScript. Specialist in Microfrontend architecture, Stripe Payment systems, ZATCA e-invoicing compliance, and cloud deployment.
            </p>

            <div className="flex flex-wrap gap-4 text-sm text-slate-400 mb-10">
              <span className="flex items-center gap-1.5">
                <MapPin size={16} className="text-[#38bdf8]" /> Surat, India (Remote Available)
              </span>
              <span className="flex items-center gap-1.5">
                <Building2 size={16} className="text-[#38bdf8]" /> Senior Software Engineer / Team Lead, HVG Infotech
              </span>
            </div>

            <div className="flex flex-wrap gap-4">
              <a 
                href="#contact" 
                className="px-6 py-3 text-sm font-semibold rounded-md bg-gradient-to-r from-[#38bdf8] to-[#818cf8] text-[#0b0f19] hover:opacity-90 transition-opacity shadow-[0_4px_20px_rgba(56,189,248,0.25)]"
              >
                Get in touch
              </a>
              <a 
                href="#projects" 
                className="px-6 py-3 text-sm font-semibold rounded-md bg-white/5 border border-white/10 text-white hover:bg-white/10 hover:border-[#38bdf8]/40 transition-all"
              >
                View SaaS Projects
              </a>
              <a 
                href="https://linkedin.com" 
                target="_blank" 
                rel="noreferrer"
                className="px-6 py-3 text-sm font-semibold rounded-md bg-white/5 border border-white/10 text-white hover:bg-white/10 transition-all flex items-center gap-2"
              >
                LinkedIn Profile
              </a>
            </div>
          </div>

          {/* Executive Profile Frame */}
          <div className="lg:col-span-4 flex justify-center">
            <div className="bg-[#131b2e] border border-white/10 rounded-2xl p-6 text-center relative shadow-2xl max-w-sm w-full">
              <div className="relative w-44 h-44 mx-auto mb-5 rounded-2xl overflow-hidden border-2 border-[#38bdf8] shadow-[0_0_20px_rgba(56,189,248,0.25)]">
                <img 
                  src={profileImg} 
                  alt="Nija Kukadiya" 
                  className="w-full h-full object-cover object-top hover:scale-105 transition-transform duration-300"
                />
              </div>
              <h3 className="text-xl font-bold text-white mb-1">Nija Kukadiya</h3>
              <p className="font-mono text-xs text-[#38bdf8]">Senior Software Engineer & Team Lead</p>
            </div>
          </div>
        </div>

      </section>



      {/* Skills Matrix Section (#skills) */}
      <section id="skills" className="py-20 px-6 border-t border-white/10">
        <div className="max-w-6xl mx-auto">
          <div className="mb-16">
            <div className="font-mono text-xs uppercase tracking-widest text-[#38bdf8] mb-2">Core Competencies</div>
            <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4">Technical expertise matrix</h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="bg-[#131b2e] border border-white/10 rounded-xl p-6">
              <h3 className="text-lg font-bold text-[#38bdf8] mb-4 flex items-center gap-2">
                <Code size={18} /> Frontend & Microfrontends
              </h3>
              <div className="flex flex-wrap gap-2">
                {['React.js', 'Next.js', 'TypeScript', 'JavaScript (ES6+)', 'Microfrontends', 'Module Federation', 'Redux / Context API', 'Tailwind CSS', 'Material UI', 'shadcn/ui', 'Styled Components', 'React Native'].map((skill, i) => (
                  <span key={i} className="font-mono text-xs px-3 py-1.5 rounded-md bg-white/5 border border-white/10 text-slate-200">
                    {skill}
                  </span>
                ))}
              </div>
            </div>

            <div className="bg-[#131b2e] border border-white/10 rounded-xl p-6">
              <h3 className="text-lg font-bold text-[#38bdf8] mb-4 flex items-center gap-2">
                <Database size={18} /> Backend & APIs
              </h3>
              <div className="flex flex-wrap gap-2">
                {['Node.js', 'Express.js', 'FastAPI', 'Python', 'Next.js API Routes', 'REST APIs', 'GraphQL', 'WebSockets', 'JWT', 'OAuth 2.0', 'Microservices', 'MongoDB', 'PostgreSQL'].map((skill, i) => (
                  <span key={i} className="font-mono text-xs px-3 py-1.5 rounded-md bg-white/5 border border-white/10 text-slate-200">
                    {skill}
                  </span>
                ))}
              </div>
            </div>

            <div className="bg-[#131b2e] border border-white/10 rounded-xl p-6">
              <h3 className="text-lg font-bold text-[#38bdf8] mb-4 flex items-center gap-2">
                <CreditCard size={18} /> Payments & Enterprise Compliance
              </h3>
              <div className="flex flex-wrap gap-2">
                {['Stripe Payments', 'Subscriptions & Recurring Billing', 'Stripe Webhooks', 'Checkout & Refunds', 'ZATCA E-Invoicing', 'XML Digital Signing', 'QR Codes', 'ZATCA API Clearance'].map((skill, i) => (
                  <span key={i} className="font-mono text-xs px-3 py-1.5 rounded-md bg-white/5 border border-white/10 text-slate-200">
                    {skill}
                  </span>
                ))}
              </div>
            </div>

            <div className="bg-[#131b2e] border border-white/10 rounded-xl p-6">
              <h3 className="text-lg font-bold text-[#38bdf8] mb-4 flex items-center gap-2">
                <Cloud size={18} /> Cloud, DevOps & Leadership
              </h3>
              <div className="flex flex-wrap gap-2">
                {['AWS S3', 'AWS Lambda', 'Docker', 'GitHub Actions', 'Jenkins', 'Vercel', 'Jest / Cypress / Playwright', 'Technical Architecture', 'Team Mentoring', 'Agile / Scrum'].map((skill, i) => (
                  <span key={i} className="font-mono text-xs px-3 py-1.5 rounded-md bg-white/5 border border-white/10 text-slate-200">
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Experience Timeline Section (#experience) */}
      <section id="experience" className="py-20 px-6 border-t border-white/10">
        <div className="max-w-4xl mx-auto">
          <div className="mb-16">
            <div className="font-mono text-xs uppercase tracking-widest text-[#38bdf8] mb-2">Professional Journey</div>
            <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4">Experience & Leadership</h2>
          </div>

          <div className="relative pl-6 border-l-2 border-white/10 space-y-12">
            <div className="relative">
              <div className="absolute -left-[31px] top-1.5 w-4 h-4 rounded-full bg-[#0b0f19] border-2 border-[#38bdf8]"></div>
              <div className="bg-[#131b2e] border border-white/10 rounded-xl p-8">
                <div className="flex flex-wrap items-start justify-between gap-4 mb-4">
                  <div>
                    <h3 className="text-xl font-bold text-white">Senior Software Engineer / Team Lead</h3>
                    <div className="text-sm font-semibold text-[#38bdf8]">HVG Infotech Pvt Ltd &middot; Surat, India</div>
                  </div>
                  <span className="font-mono text-xs bg-white/5 text-slate-300 px-3 py-1 rounded-full border border-white/10">
                    Jul 2021 – Present
                  </span>
                </div>

                <ul className="space-y-3 text-sm text-slate-300">
                  <li className="flex items-start gap-2">
                    <span className="text-[#38bdf8] mt-0.5">▹</span>
                    <span>Architected and shipped full-stack SaaS applications using React.js, Next.js, Node.js, TypeScript, Redux, REST APIs, and GraphQL for international clients across AI, real estate, data management, and e-commerce domains.</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-[#38bdf8] mt-0.5">▹</span>
                    <span>Currently leading a team of 4 developers with hands-on experience in technical architecture, mentoring, code reviews, client communication, Stripe payments, and ZATCA e-invoicing.</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-[#38bdf8] mt-0.5">▹</span>
                    <span>Designed and implemented 2 Microfrontend applications using modular frontend architecture and Module Federation.</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-[#38bdf8] mt-0.5">▹</span>
                    <span>Built reusable component libraries and design systems using Tailwind CSS, Material UI, shadcn/ui, and Styled Components.</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-[#38bdf8] mt-0.5">▹</span>
                    <span>Implemented end-to-end Stripe integrations (subscriptions, recurring billing, webhooks, refunds, customer management) and regulatory ZATCA XML e-invoicing with digital signing and QR codes.</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-[#38bdf8] mt-0.5">▹</span>
                    <span>Managed cloud deployment and CI/CD automation using AWS S3, AWS Lambda, Docker, Vercel, GitHub Actions, and Jenkins.</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Projects Showcase Section (#projects) */}
      <section id="projects" className="py-20 px-6 border-t border-white/10">
        <div className="max-w-6xl mx-auto">
          <div className="mb-12">
            <div className="font-mono text-xs uppercase tracking-widest text-[#38bdf8] mb-2">Portfolio Showcase</div>
            <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4">SaaS & Enterprise Platforms</h2>
            <p className="text-slate-400">Key applications engineered for international clients.</p>
          </div>

          {/* Project Filter Tabs */}
          <div className="flex flex-wrap gap-2 mb-10">
            {[
              { id: 'all', label: 'All Projects' },
              { id: 'saas', label: 'SaaS & AI' },
              { id: 'analytics', label: 'Real Estate & Analytics' },
              { id: 'enterprise', label: 'Enterprise & CRM' }
            ].map(tab => (
              <button
                key={tab.id}
                onClick={() => setProjectFilter(tab.id)}
                className={`px-4 py-2 rounded-full text-xs font-semibold transition-all ${
                  projectFilter === tab.id
                    ? 'bg-gradient-to-r from-[#38bdf8] to-[#818cf8] text-[#0b0f19]'
                    : 'bg-white/5 border border-white/10 text-slate-300 hover:bg-white/10'
                }`}
              >
                {tab.label}
              </button>
            ))}
          </div>

          {/* Projects Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {filteredProjects.map((project, index) => (
              <div 
                key={index}
                className="bg-[#131b2e] border border-white/10 rounded-xl p-6 flex flex-col justify-between hover:border-[#38bdf8]/40 hover:-translate-y-1 transition-all"
              >
                <div>
                  <div className="flex justify-between items-center mb-3">
                    <span className="font-mono text-[11px] uppercase tracking-wider text-[#38bdf8] bg-[#38bdf8]/10 px-2.5 py-1 rounded border border-[#38bdf8]/20">
                      {project.tag}
                    </span>
                  </div>
                  <h3 className="text-xl font-bold text-white mb-3">{project.title}</h3>
                  <p className="text-sm text-slate-400 leading-relaxed mb-6">
                    {project.desc}
                  </p>
                </div>

                <div className="flex flex-wrap gap-1.5 pt-4 border-t border-white/5">
                  {project.tech.map((t, i) => (
                    <span key={i} className="font-mono text-[11px] text-slate-300 bg-white/5 px-2.5 py-1 rounded">
                      {t}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section (#contact) */}
      <section id="contact" className="py-20 px-6 border-t border-white/10">
        <div className="max-w-6xl mx-auto">
          <div className="mb-16">
            <div className="font-mono text-xs uppercase tracking-widest text-[#38bdf8] mb-2">Get in touch</div>
            <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4">Let's connect</h2>
            <p className="text-slate-400 max-w-xl">Open for Senior Software Engineer & Tech Lead opportunities, full-stack consulting, and high-impact SaaS projects.</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="bg-[#131b2e] border border-white/10 rounded-xl p-8 space-y-6">
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 rounded-lg bg-[#38bdf8]/10 text-[#38bdf8] flex items-center justify-center">
                  <Mail size={22} />
                </div>
                <div>
                  <div className="text-xs text-slate-400 uppercase tracking-wider font-mono">Email Address</div>
                  <div className="text-base font-semibold text-white">nija.kukadiya001@gmail.com</div>
                </div>
              </div>

              <div className="flex items-center gap-4">
                <div className="w-12 h-12 rounded-lg bg-[#38bdf8]/10 text-[#38bdf8] flex items-center justify-center">
                  <Phone size={22} />
                </div>
                <div>
                  <div className="text-xs text-slate-400 uppercase tracking-wider font-mono">Phone</div>
                  <div className="text-base font-semibold text-white">+91 7096529981</div>
                </div>
              </div>

              <div className="flex items-center gap-4">
                <div className="w-12 h-12 rounded-lg bg-[#38bdf8]/10 text-[#38bdf8] flex items-center justify-center">
                  <MapPin size={22} />
                </div>
                <div>
                  <div className="text-xs text-slate-400 uppercase tracking-wider font-mono">Location</div>
                  <div className="text-base font-semibold text-white">Surat, Gujarat, India (Remote)</div>
                </div>
              </div>
            </div>

            <div className="bg-[#131b2e] border border-white/10 rounded-xl p-8 flex flex-col justify-center gap-6">
              <div>
                <h3 className="text-xl font-bold text-white mb-2">Connect Directly</h3>
                <p className="text-sm text-slate-400">Click below to copy my email directly or reach out via mail client.</p>
              </div>

              <div className="flex flex-wrap gap-4">
                <button
                  onClick={copyEmail}
                  className="px-6 py-3 text-sm font-semibold rounded-md bg-gradient-to-r from-[#38bdf8] to-[#818cf8] text-[#0b0f19] flex items-center gap-2 hover:opacity-90 transition-opacity"
                >
                  {copiedEmail ? <Check size={18} /> : <Copy size={18} />}
                  {copiedEmail ? 'Email Copied!' : 'Copy Email Address'}
                </button>
                <a
                  href="mailto:nija.kukadiya001@gmail.com"
                  className="px-6 py-3 text-sm font-semibold rounded-md bg-white/5 border border-white/10 text-white hover:bg-white/10 transition-all flex items-center gap-2"
                >
                  <Mail size={18} /> Direct Email
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-8 px-6 border-t border-white/10 text-center text-xs text-slate-500">
        <div className="max-w-6xl mx-auto">
          &copy; 2026 Nija Kukadiya. Built with React & TypeScript for GitHub Pages.
        </div>
      </footer>
    </div>
  );
}
