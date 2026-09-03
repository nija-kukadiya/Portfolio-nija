import { motion } from 'framer-motion';
import { useState, useEffect } from 'react';
import {
  Building2,
  MapPin,
  Mail,
  Phone,
  Code,
  Database,
  Menu,
  X,
  Copy,
  Check,
  Download,
  Zap,
  Moon,
  Sun,
  ExternalLink,
  ChevronRight,
  Server,
  Cloud,
  Layers,
  Terminal,
  GraduationCap,
} from 'lucide-react';
import profileImg from '/nija_profile.jpg';

export default function App() {

  const fadeInUp = {
    hidden: { opacity: 0, y: 40 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: "easeOut" as const } }
  };
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
      const sections = ['home', 'skills', 'experience', 'projects', 'contact'];
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
    { title: 'goFintel (UN)', category: 'enterprise', tag: 'Financial Intelligence Platform', desc: 'Next-generation financial intelligence platform developed with the UN to help identify and investigate suspicious financial activities related to money laundering and terrorist financing.', tech: ['React.js', 'TypeScript', 'Redux', 'REST APIs', 'Data Visualization'], url: 'https://www.un.org/counterterrorism/en/events/soft-launch-gofintel-software', image: '/Project_images/gofintel.jpg' },
    { title: 'Kalshi', category: 'saas', tag: 'Prediction Market & Exchange', desc: 'Regulated prediction market and financial exchange to trade event contracts based on real-world events. Includes market discovery, real-time data, trading, and portfolio management.', tech: ['Next.js', 'TypeScript', 'Redux', 'REST APIs', 'Data Visualization'], url: 'https://kalshi.com', image: '/Project_images/kalshi.jpg' },
    { title: 'CloudRemedy', category: 'enterprise', tag: 'Managed Cloud Services', desc: 'Managed cloud services platform providing Private Cloud, Cloud Backup, and Disaster Recovery solutions, featuring an online portal for service configuration and management.', tech: ['React.js', 'Redux', 'REST APIs'], url: '#', image: '/Project_images/cloudremedy.jpg' },
    { title: 'VinoVoss', category: 'saas', tag: 'AI Wine Discovery Platform', desc: 'AI-powered virtual sommelier providing personalized wine suggestions, smart search, food pairings, tasting notes, and interactive quizzes.', tech: ['Next.js', 'Python', 'shadcn/ui', 'Tailwind CSS', 'Zod', 'Zustand'], url: 'https://vinovoss.com', image: '/Project_images/vinovoss.png' },
    { title: 'Rentest.ai', category: 'analytics', tag: 'Real Estate Estimation Platform', desc: 'Data-driven rental price estimation platform providing fast, accurate rent estimates, comparable market rents, and detailed rent reports for real estate professionals.', tech: ['Next.js', 'Tailwind CSS', 'Redux', 'AWS Lambda'], url: 'https://rentest.ai', image: '/Project_images/rentest.png' },
    { title: 'FairPrice E-Gift Voucher', category: 'enterprise', tag: 'Online Gifting Platform', desc: 'Online gifting platform by FairPrice in Singapore offering curated gifts and hampers. Designed and developed the e-Gift Voucher experience with a user-friendly interface for digital gift vouchers.', tech: ['Next.js'], url: 'https://www.gift.fairprice.com.sg', image: '/Project_images/fairprice-e-gift-voucher.jpg' },
    { title: 'ArtBank (ARTDAI)', category: 'analytics', tag: 'Art Market Intelligence', desc: 'Art-market intelligence and analytics platform providing auction data, artist analytics, market indexes, and collection-management tools for art professionals.', tech: ['Next.js'], url: 'https://www.artd.ai', image: '/Project_images/artbank.png' },
    { title: 'TourneyMaster', category: 'saas', tag: 'Sports Management Platform', desc: 'Sports tournament management platform for team registration, scheduling, brackets, game management, and communication for various sports.', tech: ['React.js'], url: 'https://www.tourneymaster.org', image: '/Project_images/tourneymaster.jpg' },
    { title: 'MetadataWorks', category: 'enterprise', tag: 'Data Governance Platform', desc: 'Data management platform that helps organizations catalog, discover, and govern their data efficiently to make it FAIR. Features secure data access, reporting, and governance workflows.', tech: ['Next.js', 'Styled Components', 'Grommet', 'Redux'], url: 'https://metadataworks.ai', image: '' },
    { title: 'Slabstack', category: 'enterprise', tag: 'Sales & Business Management', desc: 'Cloud-based platform for concrete, aggregates, and asphalt producers offering CRM, dynamic pricing, quoting, and sales forecasting to streamline operations.', tech: ['Next.js', 'Golang', 'Tailwind CSS'], url: 'https://slabstack.com/', image: '' },
    { title: 'MY Visa USA', category: 'saas', tag: 'Visa & Immigration Platform', desc: 'Online visa and immigration consultation platform helping customers with applications, documentation, and interview preparation across countries like the USA, Canada, and the UK.', tech: ['Next.js'], url: 'https://myvisa-usa.com', image: '' },
    { title: 'VERSD', category: 'saas', tag: 'Experience Management Platform', desc: 'Experience-management platform for studios and creators to manage events, classes, bookings, payments, subscriptions, RSVPs, and customer data.', tech: ['Next.js', 'React Native'], url: 'https://www.versd.co', image: '' }
  ];

  const filteredProjects = projectFilter === 'all' ? projects : projects.filter(p => p.category.includes(projectFilter));

  return (
    <div className="min-h-screen font-sans selection:bg-[#F97316]/20 selection:text-[#F8FAFC] transition-colors duration-300" style={{ backgroundColor: isDark ? '#0B1120' : '#F8FAFC', color: isDark ? '#F8FAFC' : '#0F172A' }}>

      <nav className="fixed top-0 left-0 right-0 z-50 bg-[#0B1120]/80 backdrop-blur-md border-b border-[#1E293B] px-6 py-4 transition-all">
        <div className="max-w-6xl mx-auto flex items-center justify-between">
          <a href="#home" className="flex items-center gap-2 font-bold text-lg tracking-tight text-[#F8FAFC]">
            <span className="w-2 h-2 rounded-full bg-[#F97316]"></span>
            <span>NIJA KUKADIYA</span>
          </a>
          <div className="hidden md:flex items-center gap-8">
            {[{ id: 'home', label: 'Home' }, { id: 'skills', label: 'Skills' }, { id: 'achievements', label: 'Achievements' }, { id: 'experience', label: 'Experience' }, { id: 'projects', label: 'Projects' }, { id: 'resume', label: 'Resume' }, { id: 'contact', label: 'Contact' }].map(link => (
              <a key={link.id} href={`#${link.id}`} className={`text-sm font-medium transition-colors relative py-1 ${activeSection === link.id ? 'text-[#F8FAFC]' : 'text-[#94A3B8] hover:text-[#F8FAFC]'}`}>
                {link.label}
                {activeSection === link.id && <span className="absolute bottom-0 left-0 right-0 h-0.5 bg-[#F97316]"></span>}
              </a>
            ))}
          </div>
          <div className="hidden md:flex items-center gap-4">
            <button
              onClick={() => setIsDark(!isDark)}
              className="text-[#94A3B8] hover:text-[#F8FAFC] transition-colors"
              aria-label="Toggle theme"
            >
              {isDark ? <Sun size={18} /> : <Moon size={18} />}
            </button>
            <a href="#contact" className="inline-flex items-center px-4 py-2 text-sm font-medium rounded-md bg-[#F97316] text-white hover:bg-[#EA580C] transition-colors">
              Get in touch
            </a>
          </div>
          <button onClick={() => setMobileMenuOpen(!mobileMenuOpen)} className="md:hidden text-[#94A3B8] hover:text-[#F8FAFC] p-1">
            {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
        {mobileMenuOpen && (
          <div className="md:hidden pt-4 pb-6 border-t border-[#1E293B] mt-4 flex flex-col gap-4">
            {['home', 'skills', 'experience', 'projects', 'contact'].map(id => (
              <a key={id} href={`#${id}`} onClick={() => setMobileMenuOpen(false)} className="text-[#94A3B8] hover:text-[#F8FAFC] text-base font-medium capitalize px-2">{id}</a>
            ))}
            <div className="flex items-center justify-between pt-4 pb-2 border-t border-[#1E293B] px-2">
              <span className="text-sm font-medium text-[#94A3B8]">Theme</span>
              <button
                onClick={() => {
                  setIsDark(!isDark);
                  setMobileMenuOpen(false);
                }}
                className="text-[#94A3B8] hover:text-[#F8FAFC]"
                aria-label="Toggle theme"
              >
                {isDark ? <Sun size={18} /> : <Moon size={18} />}
              </button>
            </div>
            <a href="#contact" onClick={() => setMobileMenuOpen(false)} className="inline-block text-center w-full py-2.5 text-sm font-medium rounded-md bg-[#F97316] text-white mx-2 w-[calc(100%-1rem)]">Get in touch</a>
          </div>
        )}
      </nav>

      {/* Hero */}
      <motion.section id="home" className="pt-36 pb-20 px-6" initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-100px" }} variants={fadeInUp}>
        <div className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          <div className="lg:col-span-8 flex flex-col order-2 lg:order-1">
            <div className="inline-flex items-center font-mono text-xs text-[#94A3B8] mb-6 tracking-wide">
              <span className="text-[#F97316] mr-2">/</span> FULL-STACK ARCHITECTURE &middot; MICROFRONTENDS
            </div>
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight text-[#F8FAFC] leading-tight mb-6">
              Senior Full-Stack Engineer building <span className="text-[#F8FAFC]">scalable SaaS & AI-powered products.</span>
            </h1>
            <p className="text-lg text-[#94A3B8] max-w-2xl leading-relaxed mb-8">
              5+ years of experience building production-grade applications with React, Next.js, Node.js, TypeScript, AI integrations, and cloud technologies.
            </p>
            <div className="flex flex-wrap gap-5 text-sm text-[#94A3B8] mb-10">
              <span className="flex items-center gap-2"><MapPin size={16} className="text-[#94A3B8]" /> Surat, India (Remote Available)</span>
              <span className="flex items-center gap-2"><Building2 size={16} className="text-[#94A3B8]" /> Senior Software Engineer / Team Lead, HVG Infotech</span>
            </div>

            <div className="flex flex-wrap items-center gap-4">
              <a href="#contact" className="px-6 py-3 text-sm font-medium rounded-md bg-[#F97316] text-white hover:bg-[#EA580C] transition-colors">
                Get in touch
              </a>
              <a href="#projects" className="px-6 py-3 text-sm font-medium rounded-md bg-[#111827] border border-[#1E293B] text-[#F8FAFC] hover:border-[#94A3B8] transition-colors">
                View Projects
              </a>
              <a href="/nija_kukadiya_resume.pdf" download="Nija_Kukadiya_Resume.pdf" className="px-6 py-3 text-sm font-medium rounded-md bg-[#111827] border border-[#1E293B] text-[#F8FAFC] hover:border-[#94A3B8] transition-colors flex items-center gap-2">
                <Download size={16} /> Resume
              </a>
              <div className="flex items-center gap-3 ml-2">
                <a href="https://www.linkedin.com/in/nija-kukadiya-a416b5211/" target="_blank" rel="noreferrer" className="p-2 text-[#94A3B8] hover:text-[#F8FAFC] transition-colors" aria-label="LinkedIn">
                  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true"><path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" /></svg>
                </a>
                <a href="https://github.com/nija-kukadiya" target="_blank" rel="noreferrer" className="p-2 text-[#94A3B8] hover:text-[#F8FAFC] transition-colors" aria-label="GitHub">
                  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true"><path fillRule="evenodd" d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" clipRule="evenodd" /></svg>
                </a>
              </div>
            </div>
          </div>
          <div className="lg:col-span-4 flex justify-center order-1 lg:order-2 w-full">
            <div className="relative w-full max-w-sm">
              {/* Subtle background glow */}
              <div className="absolute inset-0 bg-gradient-to-tr from-[#F97316]/10 to-transparent rounded-2xl blur-2xl"></div>

              <div className="relative bg-[#111827] border border-[#1E293B] rounded-2xl p-6 shadow-2xl overflow-hidden group">
                <div className="absolute top-0 right-0 p-4">
                  <div className="flex items-center gap-2 px-2.5 py-1 rounded-full bg-green-500/10 border border-green-500/20">
                    <span className="w-1.5 h-1.5 rounded-full bg-green-500 animate-pulse"></span>
                    <span className="text-[10px] font-medium text-green-400 uppercase tracking-wider">Available</span>
                  </div>
                </div>

                <div className="flex flex-col items-center mt-4">
                  <div className="relative w-32 h-32 mb-6 rounded-2xl overflow-hidden border border-[#1E293B] bg-[#0B1120] shadow-lg group-hover:border-[#F97316]/30 transition-colors duration-500">
                    <img src={profileImg} alt="Nija Kukadiya" className="w-full h-full object-cover object-top transition-all duration-500" />
                  </div>

                  <h3 className="text-xl font-bold text-[#F8FAFC] mb-1">Nija Kukadiya</h3>
                  <p className="text-sm text-[#94A3B8] mb-6">Senior Software Engineer &middot; Team Lead</p>

                  <div className="w-full flex flex-wrap justify-center gap-2">
                    <div className="flex items-center gap-1.5 px-3 py-2 bg-[#0B1120] border border-[#1E293B] rounded-lg w-full justify-center group-hover:border-[#1E293B]/80 transition-colors">
                      <Zap size={14} className="text-[#F97316]" />
                      <span className="text-xs font-medium text-[#F8FAFC]">5+ Years Experience</span>
                    </div>
                    <div className="flex items-center gap-1.5 px-3 py-2 bg-[#0B1120] border border-[#1E293B] rounded-lg w-full justify-center group-hover:border-[#1E293B]/80 transition-colors">
                      <Building2 size={14} className="text-[#F97316]" />
                      <span className="text-xs font-medium text-[#F8FAFC]">Leading Team of 4</span>
                    </div>
                    <div className="flex items-center gap-1.5 px-3 py-2 bg-[#0B1120] border border-[#1E293B] rounded-lg w-full justify-center group-hover:border-[#1E293B]/80 transition-colors">
                      <Terminal size={14} className="text-[#F97316]" />
                      <span className="text-xs font-medium text-[#F8FAFC]">SaaS & AI Products</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </motion.section>

      {/* Skills */}
      <motion.section id="skills" className="py-20 px-6 border-t border-[#1E293B]" initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-100px" }} variants={fadeInUp}>
        <div className="max-w-6xl mx-auto">
          <div className="mb-12">
            <div className="font-mono text-xs text-[#94A3B8] mb-2 uppercase tracking-wide">Technical capabilities</div>
            <h2 className="text-3xl font-bold text-[#F8FAFC]">Engineering Arsenal</h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">

            {/* AI & GenAI */}
            <motion.div 
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.1 }}
              transition={{ duration: 0.5, delay: 0, ease: "easeOut" }}
              className="bg-[#111827] border border-[#1E293B] rounded-xl p-6 hover:border-[#F97316]/40 hover:-translate-y-1 transition-all duration-300 group"
            >
              <h3 className="text-base font-semibold text-[#F8FAFC] mb-4 flex items-center gap-2">
                <Terminal size={18} className="text-[#94A3B8]" /> AI & GenAI
              </h3>
              <div className="flex flex-wrap gap-2">
                {['OpenAI API', 'Gemini API', 'LangChain', 'Vercel AI SDK', 'RAG', 'Prompt Engineering', 'Cursor', 'GitHub Copilot'].map((skill, i) => (
                  <span key={i} className="font-mono text-xs px-2.5 py-1 rounded bg-[#0B1120] border border-[#1E293B] text-[#94A3B8]">{skill}</span>
                ))}
              </div>
            </motion.div>

            {/* Frontend */}
            <motion.div 
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.1 }}
              transition={{ duration: 0.5, delay: 0.1, ease: "easeOut" }}
              className="bg-[#111827] border border-[#1E293B] rounded-xl p-6 hover:border-[#F97316]/40 hover:-translate-y-1 transition-all duration-300 group"
            >
              <h3 className="text-base font-semibold text-[#F8FAFC] mb-4 flex items-center gap-2">
                <Code size={18} className="text-[#94A3B8]" /> Frontend
              </h3>
              <div className="flex flex-wrap gap-2">
                {['React.js', 'Next.js', 'TypeScript', 'Tailwind CSS', 'Redux', 'Zustand', 'React Query', 'Microfrontends', 'Module Federation'].map((skill, i) => (
                  <span key={i} className="font-mono text-xs px-2.5 py-1 rounded bg-[#0B1120] border border-[#1E293B] text-[#94A3B8]">{skill}</span>
                ))}
              </div>
            </motion.div>

            {/* Backend */}
            <motion.div 
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.1 }}
              transition={{ duration: 0.5, delay: 0.2, ease: "easeOut" }}
              className="bg-[#111827] border border-[#1E293B] rounded-xl p-6 hover:border-[#F97316]/40 hover:-translate-y-1 transition-all duration-300 group"
            >
              <h3 className="text-base font-semibold text-[#F8FAFC] mb-4 flex items-center gap-2">
                <Server size={18} className="text-[#94A3B8]" /> Backend
              </h3>
              <div className="flex flex-wrap gap-2">
                {['Node.js', 'Express.js', 'Python', 'FastAPI', 'Golang', 'GraphQL', 'REST APIs', 'Microservices', 'WebSockets'].map((skill, i) => (
                  <span key={i} className="font-mono text-xs px-2.5 py-1 rounded bg-[#0B1120] border border-[#1E293B] text-[#94A3B8]">{skill}</span>
                ))}
              </div>
            </motion.div>

            {/* Database */}
            <motion.div 
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.1 }}
              transition={{ duration: 0.5, delay: 0.30000000000000004, ease: "easeOut" }}
              className="bg-[#111827] border border-[#1E293B] rounded-xl p-6 hover:border-[#F97316]/40 hover:-translate-y-1 transition-all duration-300 group"
            >
              <h3 className="text-base font-semibold text-[#F8FAFC] mb-4 flex items-center gap-2">
                <Database size={18} className="text-[#94A3B8]" /> Database
              </h3>
              <div className="flex flex-wrap gap-2">
                {['PostgreSQL', 'MongoDB', 'Redis', 'Prisma ORM', 'Zod Data Validation'].map((skill, i) => (
                  <span key={i} className="font-mono text-xs px-2.5 py-1 rounded bg-[#0B1120] border border-[#1E293B] text-[#94A3B8]">{skill}</span>
                ))}
              </div>
            </motion.div>

            {/* Cloud & DevOps */}
            <motion.div 
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.1 }}
              transition={{ duration: 0.5, delay: 0.4, ease: "easeOut" }}
              className="bg-[#111827] border border-[#1E293B] rounded-xl p-6 hover:border-[#F97316]/40 hover:-translate-y-1 transition-all duration-300 group"
            >
              <h3 className="text-base font-semibold text-[#F8FAFC] mb-4 flex items-center gap-2">
                <Cloud size={18} className="text-[#94A3B8]" /> Cloud & DevOps
              </h3>
              <div className="flex flex-wrap gap-2">
                {['AWS S3', 'AWS Lambda', 'Docker', 'Kubernetes', 'GitHub Actions', 'Jenkins', 'Vercel', 'CI/CD Pipelines'].map((skill, i) => (
                  <span key={i} className="font-mono text-xs px-2.5 py-1 rounded bg-[#0B1120] border border-[#1E293B] text-[#94A3B8]">{skill}</span>
                ))}
              </div>
            </motion.div>

            {/* Payments & Integrations */}
            <motion.div 
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.1 }}
              transition={{ duration: 0.5, delay: 0.5, ease: "easeOut" }}
              className="bg-[#111827] border border-[#1E293B] rounded-xl p-6 hover:border-[#F97316]/40 hover:-translate-y-1 transition-all duration-300 group"
            >
              <h3 className="text-base font-semibold text-[#F8FAFC] mb-4 flex items-center gap-2">
                <Layers size={18} className="text-[#94A3B8]" /> Integrations & Testing
              </h3>
              <div className="flex flex-wrap gap-2">
                {['Stripe Payments', 'ZATCA E-Invoicing', 'OAuth 2.0', 'Jest', 'Playwright', 'Cypress'].map((skill, i) => (
                  <span key={i} className="font-mono text-xs px-2.5 py-1 rounded bg-[#0B1120] border border-[#1E293B] text-[#94A3B8]">{skill}</span>
                ))}
              </div>
            </motion.div>
          </div>

          <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, amount: 0.1 }} transition={{ duration: 0.6, delay: 0.6 }} className="mt-8 bg-[#111827] border border-[#1E293B] rounded-xl p-6 flex flex-col sm:flex-row items-start sm:items-center gap-5 hover:border-[#F97316]/30 transition-colors">
            <div className="w-12 h-12 rounded-lg bg-[#0B1120] border border-[#1E293B] flex items-center justify-center shrink-0">
              <Zap size={20} className="text-[#F97316]" />
            </div>
            <div>
              <h3 className="text-base font-bold text-[#F8FAFC] mb-1">Engineering Mindset</h3>
              <p className="text-sm text-[#94A3B8] leading-relaxed">Continuously exploring modern frameworks, AI technologies, cloud platforms, and engineering practices to build scalable and reliable products.</p>
            </div>
          </motion.div>

        </div>
      </motion.section>


      {/* Achievements */}
      <motion.section id="achievements" className="py-20 px-6 border-t border-[#1E293B]" initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-100px" }} variants={fadeInUp}>
        <div className="max-w-6xl mx-auto">
          <div className="mb-12">
            <div className="font-mono text-xs text-[#F97316] mb-2 uppercase tracking-wide">Key Metrics & Impact</div>
            <h2 className="text-3xl font-bold text-[#F8FAFC]">Achievements</h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="bg-[#111827] border border-[#1E293B] rounded-xl p-6 relative overflow-hidden group hover:border-[#F97316]/40 transition-colors">
              <div className="text-3xl font-extrabold text-[#F97316] mb-2">35%↓</div>
              <h3 className="text-base font-bold text-[#F8FAFC] mb-2">Production Defect Reduction</h3>
              <p className="text-xs text-[#94A3B8] leading-relaxed">Achieved through strict TypeScript typing, automated Jest/Playwright testing pipelines, and code review standards.</p>
            </div>
            <div className="bg-[#111827] border border-[#1E293B] rounded-xl p-6 relative overflow-hidden group hover:border-[#F97316]/40 transition-colors">
              <div className="text-3xl font-extrabold text-[#F97316] mb-2">40%↑</div>
              <h3 className="text-base font-bold text-[#F8FAFC] mb-2">Load Performance & SSR</h3>
              <p className="text-xs text-[#94A3B8] leading-relaxed">Improved page load speeds across Next.js SaaS platforms using SSR, code splitting, and smart caching strategies.</p>
            </div>
            <div className="bg-[#111827] border border-[#1E293B] rounded-xl p-6 relative overflow-hidden group hover:border-[#F97316]/40 transition-colors">
              <div className="text-3xl font-extrabold text-[#F97316] mb-2">12+</div>
              <h3 className="text-base font-bold text-[#F8FAFC] mb-2">Enterprise & SaaS Products</h3>
              <p className="text-xs text-[#94A3B8] leading-relaxed">Architected and delivered scalable web applications for international clients across FinTech, AI, Real Estate, and Gifting.</p>
            </div>
          </div>
        </div>
      </motion.section>

      {/* Experience */}
      <motion.section id="experience" className="py-20 px-6 border-t border-[#1E293B]" initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-100px" }} variants={fadeInUp}>
        <div className="max-w-4xl mx-auto">
          <div className="mb-12">
            <div className="font-mono text-xs text-[#94A3B8] mb-2 uppercase tracking-wide">Professional Journey</div>
            <h2 className="text-3xl font-bold text-[#F8FAFC]">Experience</h2>
          </div>
          <div className="relative pl-6 border-l border-[#1E293B] space-y-12">
            <div className="relative">
              <div className="absolute -left-[29px] top-2 w-3 h-3 rounded-full bg-[#111827] border-2 border-[#94A3B8]"></div>
              <div className="bg-[#111827] border border-[#1E293B] rounded-xl p-6 sm:p-8">
                <div className="flex flex-wrap items-start justify-between gap-4 mb-6">
                  <div>
                    <h3 className="text-lg font-bold text-[#F8FAFC]">Senior Software Engineer / Team Lead</h3>
                    <div className="text-sm text-[#94A3B8] mt-1">HVG Infotech Pvt Ltd &middot; Surat, India</div>
                  </div>
                  <span className="font-mono text-xs bg-[#0B1120] text-[#94A3B8] px-3 py-1.5 rounded border border-[#1E293B]">Jul 2021 – Present</span>
                </div>
                <ul className="space-y-4 text-sm text-[#94A3B8] leading-relaxed">
                  <li className="flex items-start gap-3">
                    <ChevronRight size={16} className="text-[#F97316] shrink-0 mt-0.5" />
                    <span><strong>Architected full-stack SaaS applications</strong> using React.js, Next.js, Node.js, TypeScript, and GraphQL for international clients across AI, real estate, data management, and e-commerce domains.</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <ChevronRight size={16} className="text-[#F97316] shrink-0 mt-0.5" />
                    <span><strong>Integrated generative AI capabilities</strong> into production applications using OpenAI API and Gemini AI API, implementing RAG pipelines, LLM-powered features, and intelligent chatbots.</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <ChevronRight size={16} className="text-[#F97316] shrink-0 mt-0.5" />
                    <span><strong>Led an engineering team of 4</strong>, driving technical architecture, code reviews, mentoring, and agile development processes.</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <ChevronRight size={16} className="text-[#F97316] shrink-0 mt-0.5" />
                    <span><strong>Designed Microfrontend architecture</strong> using Module Federation, splitting monolithic frontends into independent, scalable micro-apps.</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <ChevronRight size={16} className="text-[#F97316] shrink-0 mt-0.5" />
                    <span><strong>Implemented complex integrations</strong> including end-to-end Stripe payments (subscriptions, webhooks, SaaS billing) and ZATCA XML e-invoicing with digital signing.</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <ChevronRight size={16} className="text-[#F97316] shrink-0 mt-0.5" />
                    <span><strong>Managed cloud infrastructure and deployments</strong> utilizing AWS Lambda, S3, Docker, Kubernetes, Vercel, and automated CI/CD pipelines via GitHub Actions.</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>

          {/* Education Block */}
          <div className="mt-12 bg-[#111827] border border-[#1E293B] rounded-xl p-6 sm:p-8">
            <h3 className="text-xl font-bold text-[#F8FAFC] mb-6 flex items-center gap-2">
              <GraduationCap size={20} className="text-[#F97316]" /> Education
            </h3>
            <div className="space-y-6">
              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2">
                <div>
                  <h4 className="text-base font-bold text-[#F8FAFC]">Bachelor of Computer Applications (BCA)</h4>
                  <p className="text-xs text-[#94A3B8] mt-1">Veer Narmad South Gujarat University, Surat</p>
                </div>
                <span className="font-mono text-xs text-[#94A3B8] bg-[#0B1120] px-3 py-1 rounded border border-[#1E293B]">2018 - 2021</span>
              </div>
            </div>
          </div>
        </div>
      </motion.section>

      {/* Projects */}
      <motion.section id="projects" className="py-20 px-6 border-t border-[#1E293B]" initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-100px" }} variants={fadeInUp}>
        <div className="max-w-6xl mx-auto">
          <div className="mb-12 text-center md:text-left">
            <div className="font-mono text-xs text-[#F97316] mb-3 uppercase tracking-wider">PROJECTS</div>
            <h2 className="text-3xl md:text-4xl font-bold text-[#F8FAFC] mb-4">A selection of products and platforms.</h2>
            <p className="text-[#94A3B8] max-w-2xl text-lg">I've helped design and engineer across SaaS, enterprise, fintech, and data domains.</p>
          </div>

          <div className="flex flex-wrap gap-2 mb-10">
            {[{ id: 'all', label: 'All' }, { id: 'saas', label: 'SaaS' }, { id: 'enterprise', label: 'Enterprise' }, { id: 'analytics', label: 'AI & Data' }].map(tab => (
              <button
                key={tab.id}
                onClick={() => setProjectFilter(tab.id)}
                className={`px-5 py-2 rounded-full text-sm font-medium transition-colors border ${projectFilter === tab.id ? 'bg-[#F97316] text-[#F8FAFC] border-[#F97316]' : 'bg-[#111827] text-[#94A3B8] border-[#1E293B] hover:border-[#94A3B8] hover:text-[#F8FAFC]'}`}
              >
                {tab.label}
              </button>
            ))}
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredProjects.map((project, index) => (
              <motion.div 
                key={index}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.1 }}
                transition={{ duration: 0.6, delay: index * 0.1, ease: "easeOut" }}
                className="bg-[#111827] border border-[#1E293B] rounded-xl overflow-hidden flex flex-col hover:border-[#F97316]/40 hover:-translate-y-1.5 transition-all duration-300 group shadow-lg hover:shadow-[#F97316]/10"
              >
                {project.image ? (
                  <div className="w-full h-[200px] overflow-hidden bg-[#0B1120] border-b border-[#1E293B] relative">
                    <img src={project.image} alt={project.title} className="w-full h-full object-cover object-top transition-transform duration-700 group-hover:scale-105" />
                    {project.url && project.url !== '#' && (
                      <a href={project.url} target="_blank" rel="noreferrer" className="absolute top-4 right-4 w-8 h-8 rounded-full bg-[#111827]/80 backdrop-blur-sm border border-[#1E293B] flex items-center justify-center text-[#F8FAFC] opacity-0 group-hover:opacity-100 transition-all hover:bg-[#F97316] hover:border-[#F97316]">
                        <ExternalLink size={14} />
                      </a>
                    )}
                  </div>
                ) : (
                  <div className="w-full h-[200px] bg-gradient-to-br from-[#1E293B] to-[#0B1120] border-b border-[#1E293B] relative flex items-center justify-center overflow-hidden">
                    <span className="text-6xl font-bold text-[#334155] opacity-30 select-none group-hover:scale-110 transition-transform duration-700 tracking-tighter">{project.title.substring(0, 2).toUpperCase()}</span>
                    {project.url && project.url !== '#' && (
                      <a href={project.url} target="_blank" rel="noreferrer" className="absolute top-4 right-4 w-8 h-8 rounded-full bg-[#111827]/80 backdrop-blur-sm border border-[#1E293B] flex items-center justify-center text-[#F8FAFC] opacity-0 group-hover:opacity-100 transition-all hover:bg-[#F97316] hover:border-[#F97316]">
                        <ExternalLink size={14} />
                      </a>
                    )}
                  </div>
                )}
                <div className="p-5 flex flex-col justify-between flex-grow">
                  <div>
                    <div className="mb-2 flex justify-between items-center">
                      <span className="font-mono text-[10px] uppercase tracking-widest text-[#94A3B8] font-semibold">{project.tag}</span>
                      {!project.image && project.url && project.url !== '#' && (
                        <a href={project.url} target="_blank" rel="noreferrer" className="text-[#94A3B8] hover:text-[#F97316] transition-colors">
                          <ExternalLink size={14} />
                        </a>
                      )}
                    </div>
                    {project.url && project.url !== '#' ? (
                      <a href={project.url} target="_blank" rel="noreferrer" className="block text-xl font-bold text-[#F8FAFC] mb-2 group-hover:text-[#F97316] transition-colors flex items-center gap-2">
                        {project.title}
                        {!project.image && <ExternalLink size={14} className="opacity-0 group-hover:opacity-100 transition-opacity" />}
                      </a>
                    ) : (
                      <h3 className="text-xl font-bold text-[#F8FAFC] mb-2">{project.title}</h3>
                    )}
                    <p className="text-sm text-[#94A3B8] leading-relaxed mb-4 line-clamp-1" title={project.desc}>{project.desc}</p>
                  </div>
                  <div className="flex flex-wrap items-center pt-4 border-t border-[#1E293B]">
                    {project.tech.map((t, i) => (
                      <span key={i} className="font-mono text-[11px] text-[#94A3B8]">
                        {t}{i < project.tech.length - 1 ? <span className="mx-1.5 opacity-40">·</span> : ''}
                      </span>
                    ))}
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </motion.section>


      {/* Resume Section */}
      <motion.section id="resume" className="py-20 px-6 border-t border-[#1E293B]" initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-100px" }} variants={fadeInUp}>
        <div className="max-w-4xl mx-auto bg-[#111827] border border-[#1E293B] rounded-2xl p-8 flex flex-col md:flex-row items-center gap-8 shadow-2xl">
          <div className="w-full md:w-1/3 shrink-0">
            <div className="relative border border-[#1E293B] bg-[#0B1120] rounded-xl p-4 shadow-xl group hover:border-[#F97316]/40 transition-colors">
              <div className="w-full aspect-[1/1.4] bg-[#111827] rounded border border-[#1E293B] p-4 flex flex-col justify-between text-[9px] font-mono text-[#64748B] relative overflow-hidden">
                <div className="absolute -right-6 -bottom-6 w-24 h-24 bg-[#F97316]/10 rounded-full blur-xl"></div>
                <div className="border-b border-[#1E293B] pb-3">
                  <div className="font-bold text-[#F8FAFC] text-[11px]">NIJA KUKADIYA</div>
                  <div className="text-[#F97316]">Senior Full-Stack Engineer</div>
                </div>
                <div className="space-y-2 my-3">
                  <div className="h-1.5 bg-[#1E293B] rounded w-full"></div>
                  <div className="h-1.5 bg-[#1E293B] rounded w-4/5"></div>
                  <div className="h-1.5 bg-[#1E293B] rounded w-5/6"></div>
                  <div className="h-1.5 bg-[#1E293B] rounded w-2/3"></div>
                </div>
                <div className="border-t border-[#1E293B] pt-3 flex justify-between items-center text-[8px]">
                  <span>5+ Yrs Experience</span>
                  <span className="text-[#F97316] font-bold">PDF RESUME</span>
                </div>
              </div>
            </div>
          </div>
          <div className="w-full md:w-2/3">
            <div className="font-mono text-xs text-[#F97316] mb-2 uppercase tracking-wide">RESUME & DOCUMENTATION</div>
            <h2 className="text-2xl md:text-3xl font-bold text-[#F8FAFC] mb-3">Download Official Resume</h2>
            <p className="text-sm text-[#94A3B8] leading-relaxed mb-6">
              For a detailed breakdown of technical architecture, key achievements, and full professional experience, you can download the trusted PDF version below.
            </p>
            <a href="/nija_kukadiya_resume.pdf" download="Nija_Kukadiya_Resume.pdf" className="inline-flex items-center gap-2.5 px-6 py-3 text-sm font-medium rounded-md bg-[#F97316] text-white hover:bg-[#EA580C] transition-colors shadow-lg shadow-[#F97316]/10">
              <Download size={16} /> Download Resume (PDF)
            </a>
          </div>
        </div>
      </motion.section>

      {/* Contact */}
      <motion.section id="contact" className="py-20 px-6 border-t border-[#1E293B]" initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-100px" }} variants={fadeInUp}>
        <div className="max-w-6xl mx-auto">
          <div className="mb-12">
            <div className="font-mono text-xs text-[#94A3B8] mb-2 uppercase tracking-wide">Next Steps</div>
            <h2 className="text-3xl font-bold text-[#F8FAFC]">Let's build something great.</h2>
            <p className="text-[#94A3B8] max-w-xl mt-4">Open to Senior Software Engineer, Full-Stack Engineer, and Tech Lead opportunities.</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="bg-[#111827] border border-[#1E293B] rounded-xl p-8 space-y-6">
              {[{ icon: <Mail size={20} />, label: 'Email', value: 'nija.kukadiya001@gmail.com' }, { icon: <Phone size={20} />, label: 'Phone', value: '+91 7096529981' }, { icon: <MapPin size={20} />, label: 'Location', value: 'Surat, India (Remote)' }].map((item, i) => (
                <div key={i} className="flex items-center gap-4">
                  <div className="text-[#94A3B8]">{item.icon}</div>
                  <div>
                    <div className="text-xs text-[#94A3B8] font-mono mb-0.5">{item.label}</div>
                    <div className="text-sm font-medium text-[#F8FAFC]">{item.value}</div>
                  </div>
                </div>
              ))}
            </div>
            <div className="bg-[#111827] border border-[#1E293B] rounded-xl p-8 flex flex-col justify-center">
              <h3 className="text-lg font-bold text-[#F8FAFC] mb-6">Connect</h3>
              <div className="flex flex-wrap gap-4">
                <button onClick={copyEmail} className="px-5 py-2.5 text-sm font-medium rounded-md bg-[#1E293B] text-[#F8FAFC] flex items-center gap-2 hover:bg-[#334155] transition-colors">
                  {copiedEmail ? <Check size={16} className="text-green-400" /> : <Copy size={16} />}
                  {copiedEmail ? 'Email Copied!' : 'Copy Email'}
                </button>
                <a href="mailto:nija.kukadiya001@gmail.com" className="px-5 py-2.5 text-sm font-medium rounded-md bg-[#F97316] text-white flex items-center gap-2 hover:bg-[#EA580C] transition-colors">
                  <ExternalLink size={16} /> Direct Email
                </a>
                <a href="https://www.linkedin.com/in/nija-kukadiya-a416b5211/" target="_blank" rel="noreferrer" className="px-5 py-2.5 text-sm font-medium rounded-md border border-[#1E293B] text-[#F8FAFC] hover:border-[#94A3B8] transition-colors flex items-center gap-2">
                  LinkedIn
                </a>
                <a href="https://github.com/nija-kukadiya" target="_blank" rel="noreferrer" className="px-5 py-2.5 text-sm font-medium rounded-md border border-[#1E293B] text-[#F8FAFC] hover:border-[#94A3B8] transition-colors flex items-center gap-2">
                  GitHub
                </a>
              </div>
            </div>
          </div>
        </div>
      </motion.section>

      <footer className="py-8 px-6 border-t border-[#1E293B] text-center text-xs text-[#94A3B8]">
        <div className="max-w-6xl mx-auto">&copy; 2026 Nija Kukadiya. Built with React & TypeScript.</div>
      </footer>
    </div>
  );
}

