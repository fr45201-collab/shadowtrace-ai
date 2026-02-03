
import React from 'react';
import { Link } from 'react-router-dom';
import { 
  BookOpen, 
  ShieldCheck, 
  ShieldAlert, 
  Lock, 
  Eye, 
  Info, 
  Lightbulb, 
  ArrowRight, 
  CheckCircle2, 
  AlertCircle,
  Smartphone,
  Fingerprint,
  Globe,
  Database
} from 'lucide-react';

const EducationPage: React.FC = () => {
  const categories = [
    {
      icon: <Fingerprint className="w-5 h-5" />,
      title: "Digital Footprint Basics",
      desc: "Understand the trail of data you leave behind every time you go online."
    },
    {
      icon: <Lock className="w-5 h-5" />,
      title: "Online Privacy",
      desc: "Strategies to manage your digital presence and reclaim control over your information."
    },
    {
      icon: <ShieldAlert className="w-5 h-5" />,
      title: "Exposure Risks",
      desc: "Learn how threat actors identify and aggregate public data points."
    },
    {
      icon: <Smartphone className="w-5 h-5" />,
      title: "Account Security",
      desc: "Industry-standard best practices for securing your most vital digital accounts."
    }
  ];

  const safetyTips = [
    { title: "Strong, Unique Passwords", desc: "Use a password manager to generate and store 20+ character passphrases." },
    { title: "Enable Multi-Factor (2FA)", desc: "Use hardware keys or authenticator apps rather than SMS-based codes." },
    { title: "Privacy Audit", desc: "Regularly check 'Third-Party App' permissions in your Google and Social accounts." },
    { title: "Public Wi-Fi Hygiene", desc: "Avoid accessing sensitive data or banking on untrusted public networks." }
  ];

  return (
    <div className="max-w-7xl mx-auto px-4 py-16 md:py-24 relative overflow-hidden">
      {/* Background Decor */}
      <div className="absolute top-0 left-1/4 w-[500px] h-[500px] bg-cyan-500/5 blur-[120px] rounded-full pointer-events-none" />

      {/* Page Header */}
      <div className="text-center mb-20 animate-in fade-in slide-in-from-top-4 duration-700">
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-cyan-500/10 text-cyan-400 text-[10px] font-bold uppercase tracking-widest mb-6">
          Knowledge is Security
        </div>
        <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">Learning Center</h1>
        <p className="text-slate-400 text-lg md:text-xl max-w-3xl mx-auto leading-relaxed">
          Understand digital risks, online privacy, and how to protect yourself in an increasingly connected world. Knowledge is the first step toward digital safety.
        </p>
      </div>

      {/* Categories Grid */}
      <section className="mb-24">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {categories.map((cat, i) => (
            <div key={i} className="glass p-8 rounded-3xl border border-white/5 hover:border-cyan-500/30 transition-all group cursor-default">
              <div className="w-12 h-12 rounded-xl bg-cyan-500/10 flex items-center justify-center text-cyan-400 mb-6 group-hover:scale-110 transition-transform">
                {cat.icon}
              </div>
              <h3 className="text-white font-bold mb-3">{cat.title}</h3>
              <p className="text-sm text-slate-500 leading-relaxed mb-6">{cat.desc}</p>
              <button className="text-xs text-cyan-400 font-bold flex items-center gap-2 group-hover:gap-3 transition-all">
                Learn more <ArrowRight className="w-3 h-3" />
              </button>
            </div>
          ))}
        </div>
      </section>

      {/* Featured Topics Section */}
      <section className="mb-24 space-y-12">
        <h2 className="text-2xl font-bold text-white pl-4 border-l-4 border-cyan-500 uppercase tracking-widest text-xs">Featured Topics</h2>
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* Topic 1: Digital Footprint */}
          <div className="glass p-8 md:p-12 rounded-[40px] border border-white/10 relative overflow-hidden">
            <div className="flex flex-col md:flex-row gap-8">
              <div className="space-y-6">
                <div className="flex items-center gap-3 text-cyan-400 font-bold uppercase tracking-widest text-[10px]">
                  <Eye className="w-4 h-4" /> Basics
                </div>
                <h3 className="text-2xl font-bold text-white">What Is a Digital Footprint?</h3>
                <p className="text-slate-400 text-sm leading-relaxed">
                  Your digital footprint is the trail of data you leave behind while using the internet. It ranges from social media interactions to your browsing history and device metadata.
                </p>
                <div className="grid grid-cols-2 gap-4">
                  <div className="p-4 bg-slate-900/50 rounded-2xl border border-white/5">
                    <span className="block text-white font-bold text-xs mb-1">Active</span>
                    <span className="text-[11px] text-slate-500">Data you share intentionally, like social posts or emails.</span>
                  </div>
                  <div className="p-4 bg-slate-900/50 rounded-2xl border border-white/5">
                    <span className="block text-white font-bold text-xs mb-1">Passive</span>
                    <span className="text-[11px] text-slate-500">Data collected without your direct input, like IP logs.</span>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Topic 2: Exposure Sources */}
          <div className="glass p-8 md:p-12 rounded-[40px] border border-white/10 relative overflow-hidden">
            <div className="space-y-6">
              <div className="flex items-center gap-3 text-red-400 font-bold uppercase tracking-widest text-[10px]">
                <ShieldAlert className="w-4 h-4" /> Risks
              </div>
              <h3 className="text-2xl font-bold text-white">How Personal Data Gets Exposed</h3>
              <p className="text-slate-400 text-sm leading-relaxed">
                Most data exposure happens unintentionally. Understanding common sources is the first step toward effective mitigation.
              </p>
              <ul className="space-y-3">
                {[
                  "Publicly shared social identifiers and bios",
                  "Credential reuse across multiple platforms",
                  "Insecure third-party application permissions",
                  "Data scrapers harvesting public directory listings"
                ].map((item, i) => (
                  <li key={i} className="flex gap-3 text-xs text-slate-500">
                    <CheckCircle2 className="w-4 h-4 text-cyan-500/50 flex-shrink-0" />
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* Topic 3: Risk Levels */}
          <div className="glass p-8 md:p-12 rounded-[40px] border border-white/10 relative overflow-hidden">
            <div className="space-y-6">
              <div className="flex items-center gap-3 text-yellow-400 font-bold uppercase tracking-widest text-[10px]">
                <Activity className="w-4 h-4" /> Analysis
              </div>
              <h3 className="text-2xl font-bold text-white">Understanding Risk Levels</h3>
              <p className="text-slate-400 text-sm leading-relaxed">
                Risk is not a certainty; it is a measure of potential exposure. Our scores categorize these patterns into distinct profiles.
              </p>
              <div className="flex flex-col gap-3">
                <div className="flex justify-between items-center text-xs">
                  <span className="text-green-400 font-bold">Low</span>
                  <span className="text-slate-600">Minimal footprint, hardened accounts.</span>
                </div>
                <div className="flex justify-between items-center text-xs">
                  <span className="text-yellow-400 font-bold">Medium</span>
                  <span className="text-slate-600">Common identifiers linked to public nodes.</span>
                </div>
                <div className="flex justify-between items-center text-xs">
                  <span className="text-red-400 font-bold">High</span>
                  <span className="text-slate-600">Significant exposure across multiple domains.</span>
                </div>
              </div>
            </div>
          </div>

          {/* Topic 4: Public vs Private */}
          <div className="glass p-8 md:p-12 rounded-[40px] border border-white/10 relative overflow-hidden">
            <div className="space-y-6">
              <div className="flex items-center gap-3 text-cyan-400 font-bold uppercase tracking-widest text-[10px]">
                <Globe className="w-4 h-4" /> Presence
              </div>
              <h3 className="text-2xl font-bold text-white">Public vs Private Information</h3>
              <p className="text-slate-400 text-sm leading-relaxed">
                Many users are unaware of what information is legally public record. Proactive privacy involves understanding the difference.
              </p>
              <div className="p-6 bg-slate-900/30 rounded-3xl border border-white/5 italic text-slate-500 text-xs leading-relaxed">
                "Privacy is about control, not secrecy. It is the ability to choose how much of yourself you share with the world."
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Practical Security Tips */}
      <section className="mb-24">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-white mb-4">Practical Security Tips</h2>
          <p className="text-slate-400 text-sm">Actionable steps you can take today to improve your digital hygiene.</p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {safetyTips.map((tip, i) => (
            <div key={i} className="flex gap-6 p-8 glass rounded-3xl border border-white/5 hover:border-cyan-500/20 transition-all">
              <div className="w-12 h-12 rounded-2xl bg-cyan-500/10 flex items-center justify-center text-cyan-400 flex-shrink-0">
                <CheckCircle2 className="w-6 h-6" />
              </div>
              <div>
                <h4 className="text-white font-bold mb-2">{tip.title}</h4>
                <p className="text-sm text-slate-500 leading-relaxed">{tip.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Educational Insights (Did You Know?) */}
      <section className="mb-24 grid grid-cols-1 md:grid-cols-3 gap-6">
        {[
          "Most data exposure happens unintentionally through shared metadata.",
          "Awareness reduces risk more than tools alone.",
          "A smaller digital footprint is inherently more secure."
        ].map((insight, i) => (
          <div key={i} className="p-6 bg-cyan-500/5 border border-cyan-500/10 rounded-2xl flex items-start gap-4">
            <Lightbulb className="w-5 h-5 text-cyan-400 flex-shrink-0 mt-0.5" />
            <p className="text-xs text-slate-400 leading-relaxed font-medium">{insight}</p>
          </div>
        ))}
      </section>

      {/* Ethical Disclaimer */}
      <section className="mb-24 text-center">
        <div className="inline-block p-10 glass rounded-[40px] border border-red-500/10 max-w-3xl">
          <div className="flex items-center justify-center gap-3 mb-6 text-red-500/50">
            <AlertCircle className="w-8 h-8" />
            <h3 className="text-lg font-bold uppercase tracking-[0.2em]">Educational Purpose Only</h3>
          </div>
          <p className="text-sm text-slate-400 leading-relaxed mb-6">
            The Learning Center provides general cybersecurity awareness content. It does not offer hacking techniques, breach access, or security exploitation methods.
          </p>
          <p className="text-[11px] text-slate-600 leading-relaxed italic">
            ShadowTrace advocates for the ethical use of information and the empowerment of individual digital privacy.
          </p>
        </div>
      </section>

      {/* Final Navigation */}
      <section className="flex flex-col md:flex-row items-center justify-center gap-12 pt-12 border-t border-white/5">
        <Link to="/scan" className="text-white font-bold flex items-center gap-2 hover:text-cyan-400 transition-all group">
          Try the Risk Scanner <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-all" />
        </Link>
        <Link to="/about" className="text-slate-500 font-bold hover:text-white transition-all">
          View Privacy Policy
        </Link>
        <Link to="/feedback" className="text-slate-500 font-bold hover:text-white transition-all">
          Share Feedback
        </Link>
      </section>
    </div>
  );
};

// Helper component for Risk Analysis section as it was used in previous code
const Activity: React.FC<{ className?: string }> = ({ className }) => (
  <svg 
    xmlns="http://www.w3.org/2000/svg" 
    viewBox="0 0 24 24" 
    fill="none" 
    stroke="currentColor" 
    strokeWidth="2" 
    strokeLinecap="round" 
    strokeLinejoin="round" 
    className={className}
  >
    <polyline points="22 12 18 12 15 21 9 3 6 12 2 12" />
  </svg>
);

export default EducationPage;
