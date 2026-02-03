
import React from 'react';
import { Link } from 'react-router-dom';
import { 
  Code, 
  Github, 
  Twitter, 
  Instagram, 
  Mail, 
  ArrowRight, 
  ShieldCheck, 
  Cpu, 
  Globe, 
  Database, 
  Lock,
  ExternalLink
} from 'lucide-react';

const PortfolioPage: React.FC = () => {
  const skills = [
    {
      category: "Programming Languages",
      items: ["Python", "JavaScript", "HTML & CSS", "TypeScript"]
    },
    {
      category: "Backend & Systems",
      items: ["Flask", "REST APIs", "SQLite", "Node.js"]
    },
    {
      category: "Frontend & Design",
      items: ["React", "UI/UX Design", "Tailwind CSS", "Accessibility"]
    },
    {
      category: "Security Principles",
      items: ["OSINT Simulation", "Privacy-First Design", "Encryption Basics", "Input Validation"]
    }
  ];

  const philosophies = [
    {
      title: "Privacy before data",
      desc: "Architecting systems that respect user boundaries by default, not as an afterthought."
    },
    {
      title: "Transparency builds trust",
      desc: "Clear communication about tool capabilities and limitations is the foundation of credibility."
    },
    {
      title: "Education over exploitation",
      desc: "Creating tools that empower users with knowledge rather than exploiting their fears."
    }
  ];

  return (
    <div className="relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute top-20 right-0 w-[500px] h-[500px] bg-cyan-500/5 blur-[120px] rounded-full pointer-events-none" />
      <div className="absolute bottom-20 left-0 w-[500px] h-[500px] bg-blue-500/5 blur-[120px] rounded-full pointer-events-none" />

      {/* Hero Section */}
      <section className="max-w-5xl mx-auto px-4 pt-24 pb-16 relative">
        <div className="flex flex-col md:flex-row items-center gap-12">
          <div className="w-32 h-32 md:w-48 md:h-48 rounded-full border-2 border-cyan-500/20 p-2 glass">
            <div className="w-full h-full rounded-full overflow-hidden bg-slate-900 flex items-center justify-center text-cyan-400">
               <Code className="w-12 h-12 md:w-20 md:h-20" />
            </div>
          </div>
          <div className="text-center md:text-left">
            <h1 className="text-4xl md:text-6xl font-bold text-white mb-4">Faizan Raza</h1>
            <p className="text-xl md:text-2xl text-cyan-400 font-medium mb-6">Developer & Builder</p>
            <p className="text-slate-400 text-lg max-w-xl leading-relaxed mb-8">
              Building secure, transparent, and meaningful digital products with a focus on privacy and user trust. 
            </p>
            <div className="flex flex-wrap justify-center md:justify-start gap-4">
              <a href="#projects" className="bg-cyan-600 hover:bg-cyan-500 text-white px-6 py-3 rounded-xl font-bold transition-all">
                View Projects
              </a>
              <a href="#contact" className="glass hover:bg-white/5 text-white px-6 py-3 rounded-xl font-bold transition-all border border-white/10">
                Contact Developer
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section className="max-w-5xl mx-auto px-4 py-16">
        <h2 className="text-2xl font-bold text-white mb-8 border-l-4 border-cyan-500 pl-4 uppercase tracking-widest text-sm">About the Developer</h2>
        <div className="glass p-8 rounded-3xl border border-white/5 leading-relaxed text-slate-300">
          <p className="mb-4">
            Faizan Raza is a developer focused on building secure and transparent digital tools. His work emphasizes user awareness, ethical design, and practical problem-solving through clean and reliable software.
          </p>
          <p>
            With a background in both frontend aesthetics and backend stability, Faizan bridges the gap between complex technical security concepts and user-friendly interfaces. He believes that the future of tech lies in accountability and transparency.
          </p>
        </div>
      </section>

      {/* Technical Expertise */}
      <section className="max-w-5xl mx-auto px-4 py-16">
        <h2 className="text-2xl font-bold text-white mb-12 border-l-4 border-cyan-500 pl-4 uppercase tracking-widest text-sm">Technical Expertise</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {skills.map((skill, i) => (
            <div key={i} className="glass p-6 rounded-2xl border border-white/5 hover:border-cyan-500/20 transition-all">
              <h3 className="text-cyan-400 font-bold mb-4 text-xs uppercase tracking-wider">{skill.category}</h3>
              <div className="flex flex-wrap gap-2">
                {skill.items.map((item, j) => (
                  <span key={j} className="text-sm text-slate-400 bg-slate-900/50 px-3 py-1 rounded-lg border border-white/5">
                    {item}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Featured Project */}
      <section id="projects" className="max-w-5xl mx-auto px-4 py-16">
        <h2 className="text-2xl font-bold text-white mb-12 border-l-4 border-cyan-500 pl-4 uppercase tracking-widest text-sm">Featured Project</h2>
        <div className="glass p-8 md:p-12 rounded-[40px] border border-cyan-500/20 relative overflow-hidden group">
          <div className="absolute inset-0 bg-gradient-to-br from-cyan-500/5 to-transparent pointer-events-none" />
          <div className="flex flex-col lg:flex-row gap-12 items-center">
            <div className="w-full lg:w-1/2">
               <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-cyan-500/10 text-cyan-400 text-[10px] font-bold uppercase tracking-widest mb-6">
                Cybersecurity Awareness
               </div>
               <h3 className="text-3xl font-bold text-white mb-4">ShadowTrace</h3>
               <p className="text-slate-400 mb-8 leading-relaxed">
                 A cybersecurity awareness web platform designed to help users understand potential digital exposure patterns through simulated analysis. Built to bridge the gap between technical OSINT workflows and general user awareness.
               </p>
               <ul className="space-y-3 mb-10">
                 {["Privacy-first architecture", "Educational focus", "Clean, professional UI", "No real data collection"].map((item, i) => (
                   <li key={i} className="flex items-center gap-3 text-sm text-slate-300">
                     <ShieldCheck className="w-4 h-4 text-cyan-400" />
                     {item}
                   </li>
                 ))}
               </ul>
               <div className="flex gap-4">
                 <Link to="/" className="text-white font-bold flex items-center gap-2 hover:text-cyan-400 transition-all group">
                   View Live Project <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-all" />
                 </Link>
                 <a href="https://github.com/fr45201-collab" target="_blank" className="text-slate-500 font-bold flex items-center gap-2 hover:text-white transition-all">
                   <Github className="w-4 h-4" /> Source Code
                 </a>
               </div>
            </div>
            <div className="w-full lg:w-1/2 rounded-2xl overflow-hidden border border-white/10 glow-cyan">
               <img src="https://picsum.photos/seed/shadowtrace/800/600" alt="ShadowTrace Screenshot" className="w-full h-auto opacity-80" />
            </div>
          </div>
        </div>
      </section>

      {/* Development Philosophy */}
      <section className="max-w-5xl mx-auto px-4 py-16">
        <h2 className="text-2xl font-bold text-white mb-12 border-l-4 border-cyan-500 pl-4 uppercase tracking-widest text-sm">Development Philosophy</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {philosophies.map((p, i) => (
            <div key={i} className="glass p-8 rounded-3xl border border-white/5 text-center md:text-left">
              <h3 className="text-lg font-bold text-white mb-3">{p.title}</h3>
              <p className="text-sm text-slate-400 leading-relaxed">
                {p.desc}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="max-w-5xl mx-auto px-4 py-16">
        <h2 className="text-2xl font-bold text-white mb-12 border-l-4 border-cyan-500 pl-4 uppercase tracking-widest text-sm">Connect</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          <div className="glass p-10 rounded-3xl border border-white/10 flex flex-col justify-between">
            <div>
              <h3 className="text-2xl font-bold text-white mb-6">Let's build something secure.</h3>
              <p className="text-slate-400 mb-8 leading-relaxed">
                This contact is for feedback, collaboration, or professional inquiries. I'm always open to discussing ethical tech and privacy-focused software.
              </p>
            </div>
            <div className="flex flex-col gap-4">
               <a href="mailto:faizandev727@gmail.com" className="flex items-center gap-4 text-slate-300 hover:text-cyan-400 transition-all">
                 <div className="w-10 h-10 rounded-xl bg-white/5 flex items-center justify-center">
                    <Mail className="w-5 h-5" />
                 </div>
                 faizandev727@gmail.com
               </a>
               <a href="https://github.com/fr45201-collab" target="_blank" className="flex items-center gap-4 text-slate-300 hover:text-cyan-400 transition-all">
                 <div className="w-10 h-10 rounded-xl bg-white/5 flex items-center justify-center">
                    <Github className="w-5 h-5" />
                 </div>
                 github.com/fr45201-collab
               </a>
               <a href="https://x.com/FaizanRaza54722" target="_blank" className="flex items-center gap-4 text-slate-300 hover:text-cyan-400 transition-all">
                 <div className="w-10 h-10 rounded-xl bg-white/5 flex items-center justify-center">
                    <Twitter className="w-5 h-5" />
                 </div>
                 @FaizanRaza54722
               </a>
               <a href="https://www.instagram.com/faizanraza.dev?igsh=MWdqbnZhNjR3YXRpbQ==" target="_blank" className="flex items-center gap-4 text-slate-300 hover:text-cyan-400 transition-all">
                 <div className="w-10 h-10 rounded-xl bg-white/5 flex items-center justify-center">
                    <Instagram className="w-5 h-5" />
                 </div>
                 @faizanraza.dev
               </a>
            </div>
          </div>
          <div className="glass p-8 rounded-3xl border border-white/10">
             <form className="space-y-4" onSubmit={(e) => e.preventDefault()}>
               <div>
                 <label className="block text-xs font-bold text-slate-500 uppercase tracking-widest mb-2">Full Name</label>
                 <input type="text" className="w-full bg-slate-900 border border-white/5 rounded-xl px-4 py-3 text-white focus:outline-none focus:border-cyan-500/30 transition-all" placeholder="John Doe" />
               </div>
               <div>
                 <label className="block text-xs font-bold text-slate-500 uppercase tracking-widest mb-2">Email Address</label>
                 <input type="email" className="w-full bg-slate-900 border border-white/5 rounded-xl px-4 py-3 text-white focus:outline-none focus:border-cyan-500/30 transition-all" placeholder="john@example.com" />
               </div>
               <div>
                 <label className="block text-xs font-bold text-slate-500 uppercase tracking-widest mb-2">Message</label>
                 <textarea className="w-full bg-slate-900 border border-white/5 rounded-xl px-4 py-3 text-white focus:outline-none focus:border-cyan-500/30 transition-all h-32" placeholder="Tell me about your project..."></textarea>
               </div>
               <button className="w-full bg-white text-slate-950 font-bold py-4 rounded-xl hover:bg-cyan-50 transition-all">
                 Send Inquiry
               </button>
             </form>
          </div>
        </div>
      </section>

      {/* Ethical Statement */}
      <section className="max-w-5xl mx-auto px-4 py-16">
        <div className="p-6 bg-slate-900/30 border border-white/5 rounded-2xl flex items-start gap-4">
           <Lock className="w-6 h-6 text-slate-600 flex-shrink-0" />
           <p className="text-xs text-slate-500 leading-relaxed italic">
             ShadowTrace and related projects are built for educational and awareness purposes only. No tools or features are designed for unauthorized access or misuse. Responsibility for ethical application lies with the end user.
           </p>
        </div>
      </section>
      
      {/* Footer Space */}
      <div className="h-20" />
    </div>
  );
};

export default PortfolioPage;
