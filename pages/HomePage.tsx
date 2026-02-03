
import React from 'react';
import { Link } from 'react-router-dom';
import { ShieldCheck, Eye, Lock, Globe, ArrowRight, Activity, Database, Smartphone, ShieldAlert } from 'lucide-react';

const HomePage: React.FC = () => {
  const features = [
    {
      icon: <Eye className="w-6 h-6" />,
      title: "Footprint Analysis",
      desc: "Identify how much of your digital identity is publicly accessible via OSINT techniques."
    },
    {
      icon: <Activity className="w-6 h-6" />,
      title: "Risk Scoring",
      desc: "Our proprietary algorithm calculates an exposure score based on found data points."
    },
    {
      icon: <Lock className="w-6 h-6" />,
      title: "Privacy Shielding",
      desc: "Learn actionable strategies to minimize your online presence and reclaim privacy."
    }
  ];

  const stats = [
    { label: "Data Points", value: "2.4B+" },
    { label: "Active Monitors", value: "150K" },
    { label: "Awareness Score", value: "98%" }
  ];

  return (
    <div className="relative overflow-hidden">
      {/* Decorative Blur */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-[600px] bg-cyan-500/10 blur-[120px] rounded-full pointer-events-none" />

      {/* Hero Section */}
      <section className="relative pt-24 pb-20 md:pt-32 md:pb-32 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
        <div className="text-center max-w-4xl mx-auto">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full glass border border-cyan-500/20 text-cyan-400 text-xs font-bold uppercase tracking-widest mb-8 animate-pulse">
            <ShieldCheck className="w-4 h-4" />
            Enterprise-Grade Awareness
          </div>
          <h1 className="text-5xl md:text-7xl font-bold text-white tracking-tight mb-8 leading-[1.1]">
            Your Digital Footprint Is <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-blue-500">Bigger Than You Think</span>
          </h1>
          <p className="text-lg md:text-xl text-slate-400 mb-12 max-w-2xl mx-auto leading-relaxed">
            ShadowTrace uncovers simulated exposure risks to help you understand how much information you leave behind across the web.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Link 
              to="/scan" 
              className="w-full sm:w-auto bg-cyan-600 hover:bg-cyan-500 text-white px-8 py-4 rounded-xl font-bold text-lg transition-all hover:scale-[1.02] flex items-center justify-center gap-2 group shadow-[0_0_30px_rgba(34,211,238,0.3)]"
            >
              Start Secure Scan <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </Link>
            <Link 
              to="/education" 
              className="w-full sm:w-auto glass hover:bg-white/5 text-white px-8 py-4 rounded-xl font-bold text-lg transition-all border border-white/10"
            >
              Explore Education
            </Link>
          </div>
        </div>

        {/* Hero Mockup */}
        <div className="mt-20 relative animate-in slide-in-from-bottom-8 duration-1000">
          <div className="glass border border-white/10 rounded-2xl overflow-hidden glow-cyan shadow-2xl">
             <div className="h-10 bg-slate-900 border-b border-white/5 flex items-center px-4 gap-2">
                <div className="w-3 h-3 rounded-full bg-red-500/50" />
                <div className="w-3 h-3 rounded-full bg-yellow-500/50" />
                <div className="w-3 h-3 rounded-full bg-green-500/50" />
                <div className="ml-4 h-6 w-64 bg-slate-950 rounded border border-white/5 flex items-center px-2">
                  <span className="text-[10px] text-slate-500 mono">https://shadowtrace.app/scan/analysis</span>
                </div>
             </div>
             <div className="relative group overflow-hidden">
                <img 
                  src="https://images.unsplash.com/photo-1563986768609-322da13575f3?auto=format&fit=crop&q=80&w=1200&h=600" 
                  alt="Cybersecurity Dashboard Analysis" 
                  className="w-full h-auto opacity-60 group-hover:opacity-80 transition-opacity duration-700 object-cover" 
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-transparent to-transparent pointer-events-none" />
                
                {/* Simulated UI Overlay */}
                <div className="absolute bottom-8 left-8 right-8 flex flex-col md:flex-row gap-4 items-end justify-between pointer-events-none">
                  <div className="glass p-4 rounded-xl border border-white/10 flex items-center gap-4 animate-in fade-in slide-in-from-left-4 duration-1000 delay-500">
                    <div className="w-10 h-10 rounded-full bg-cyan-500/20 flex items-center justify-center text-cyan-400">
                      <ShieldAlert className="w-5 h-5" />
                    </div>
                    <div>
                      <div className="text-[10px] text-slate-500 font-bold uppercase tracking-widest">System Status</div>
                      <div className="text-xs text-white font-bold">Scanning Global Nodes...</div>
                    </div>
                  </div>
                  <div className="hidden md:block glass p-4 rounded-xl border border-white/10 animate-in fade-in slide-in-from-right-4 duration-1000 delay-700">
                    <div className="flex gap-2">
                      {[1, 2, 3, 4, 5].map(i => (
                        <div key={i} className={`h-1 w-8 rounded-full ${i < 4 ? 'bg-cyan-500' : 'bg-slate-800'}`} />
                      ))}
                    </div>
                    <div className="mt-2 text-[10px] text-slate-500 font-bold text-right uppercase">Risk Level: Moderate</div>
                  </div>
                </div>
             </div>
          </div>
        </div>
      </section>

      {/* Feature Section */}
      <section className="py-24 bg-slate-950 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">Core Awareness Modules</h2>
          <p className="text-slate-400">Everything you need to secure your online identity.</p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {features.map((f, i) => (
            <div key={i} className="glass p-8 rounded-3xl border border-white/5 hover:border-cyan-500/30 transition-all group">
              <div className="w-14 h-14 bg-cyan-500/10 rounded-2xl flex items-center justify-center text-cyan-400 mb-6 group-hover:scale-110 transition-transform">
                {f.icon}
              </div>
              <h3 className="text-xl font-bold text-white mb-4">{f.title}</h3>
              <p className="text-slate-400 leading-relaxed text-sm">
                {f.desc}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* OSINT Contextual Image Section */}
      <section className="py-24 px-4 overflow-hidden">
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <div className="order-2 lg:order-1">
            <div className="relative">
              <div className="absolute -inset-4 bg-cyan-500/10 blur-2xl rounded-full" />
              <img 
                src="https://images.unsplash.com/photo-1550751827-4bd374c3f58b?auto=format&fit=crop&q=80&w=800&h=800" 
                alt="Hardware and Data Encryption" 
                className="relative rounded-[40px] border border-white/10 glow-cyan shadow-2xl rotate-2 hover:rotate-0 transition-transform duration-700" 
              />
            </div>
          </div>
          <div className="order-1 lg:order-2 space-y-8">
            <h2 className="text-3xl md:text-5xl font-bold text-white leading-tight">
              Bridge the Gap Between <span className="text-cyan-400">Technical OSINT</span> and User Awareness
            </h2>
            <p className="text-slate-400 text-lg leading-relaxed">
              ShadowTrace translates complex metadata analysis and data correlation patterns into easy-to-understand insights. We show you what professional investigators see, so you can take control before others do.
            </p>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 pt-4">
              <div className="flex gap-4">
                <div className="flex-shrink-0 w-10 h-10 rounded-xl bg-slate-900 border border-white/10 flex items-center justify-center text-cyan-400">
                  <Database className="w-5 h-5" />
                </div>
                <div>
                  <h4 className="text-white font-bold text-sm mb-1">Data Indexing</h4>
                  <p className="text-xs text-slate-500">Mapping public database nodes to your unique identifiers.</p>
                </div>
              </div>
              <div className="flex gap-4">
                <div className="flex-shrink-0 w-10 h-10 rounded-xl bg-slate-900 border border-white/10 flex items-center justify-center text-cyan-400">
                  <Smartphone className="w-5 h-5" />
                </div>
                <div>
                  <h4 className="text-white font-bold text-sm mb-1">Mobile Vectors</h4>
                  <p className="text-xs text-slate-500">Analyzing mobile exposure through leaked identifiers.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Trust Stats */}
      <section className="py-20 border-y border-white/5 bg-slate-900/30">
        <div className="max-w-7xl mx-auto px-4 grid grid-cols-2 md:grid-cols-3 gap-8 text-center">
          {stats.map((s, i) => (
            <div key={i}>
              <div className="text-4xl font-bold text-white mb-2">{s.value}</div>
              <div className="text-sm text-cyan-400 font-semibold uppercase tracking-widest">{s.label}</div>
            </div>
          ))}
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 px-4">
        <div className="max-w-5xl mx-auto glass p-12 rounded-[40px] border border-cyan-500/20 text-center relative overflow-hidden group">
          <img 
            src="https://images.unsplash.com/photo-1614064641938-3bbee52942c7?auto=format&fit=crop&q=80&w=1200&h=400" 
            alt="Cyber Code Background" 
            className="absolute inset-0 w-full h-full object-cover opacity-10 group-hover:opacity-20 transition-opacity duration-1000" 
          />
          <div className="absolute inset-0 bg-gradient-to-br from-cyan-500/5 to-transparent pointer-events-none" />
          <div className="relative z-10">
            <h2 className="text-3xl md:text-5xl font-bold text-white mb-6">Ready to see your footprint?</h2>
            <p className="text-slate-400 mb-10 max-w-xl mx-auto text-lg">
              Join thousands of users who have taken the first step toward a more secure digital future.
            </p>
            <Link to="/scan" className="bg-white text-slate-950 hover:bg-cyan-50 px-10 py-4 rounded-xl font-bold text-lg transition-all inline-block shadow-2xl hover:scale-105">
              Get Started Now
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default HomePage;
