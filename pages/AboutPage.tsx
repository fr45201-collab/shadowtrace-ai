
import React from 'react';
import { Link } from 'react-router-dom';
import { Shield, Target, Users, Code, Mail, MessageSquare } from 'lucide-react';

const AboutPage: React.FC = () => {
  return (
    <div className="max-w-5xl mx-auto px-4 py-24">
      <div className="text-center mb-16">
        <h1 className="text-4xl md:text-5xl font-bold text-white mb-6">Transparency Matters</h1>
        <p className="text-slate-400 text-lg">Understanding the mission and ethical framework of ShadowTrace.</p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-20">
        <div className="glass p-8 rounded-3xl border border-white/10">
          <div className="w-12 h-12 bg-cyan-500/10 rounded-xl flex items-center justify-center text-cyan-400 mb-6">
            <Target className="w-6 h-6" />
          </div>
          <h3 className="text-xl font-bold text-white mb-4">What ShadowTrace Is</h3>
          <p className="text-slate-400 text-sm leading-relaxed">
            ShadowTrace is a frontend-centric educational platform designed to simulate OSINT (Open Source Intelligence) workflows. It provides users with a safe environment to visualize how public information can be aggregated and analyzed by threat actors.
          </p>
        </div>
        <div className="glass p-8 rounded-3xl border border-white/10">
          <div className="w-12 h-12 bg-red-500/10 rounded-xl flex items-center justify-center text-red-400 mb-6">
            <Shield className="w-6 h-6" />
          </div>
          <h3 className="text-xl font-bold text-white mb-4">What It Is NOT</h3>
          <p className="text-slate-400 text-sm leading-relaxed">
            It is NOT a hacking tool. It does not perform actual network scans, access private APIs, or tap into live data breaches. All data points shown are generated algorithmically to mimic real patterns without exposing actual sensitive information.
          </p>
        </div>
      </div>

      <div className="space-y-12">
        <section>
          <h2 className="text-2xl font-bold text-white mb-6">Ethical Commitment</h2>
          <div className="bg-slate-900/50 border border-white/5 rounded-[32px] p-8">
            <p className="text-slate-400 leading-loose mb-6">
              Our primary goal is awareness. We believe that privacy is a fundamental human right, but in an increasingly connected world, total anonymity is rare. ShadowTrace bridges the gap between technical complexity and user understanding.
            </p>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div className="flex items-center gap-3 text-sm text-slate-300">
                <div className="w-2 h-2 rounded-full bg-cyan-400" />
                Zero Data Retention Policy
              </div>
              <div className="flex items-center gap-3 text-sm text-slate-300">
                <div className="w-2 h-2 rounded-full bg-cyan-400" />
                Educational Focus Only
              </div>
              <div className="flex items-center gap-3 text-sm text-slate-300">
                <div className="w-2 h-2 rounded-full bg-cyan-400" />
                Open Source Transparency
              </div>
              <div className="flex items-center gap-3 text-sm text-slate-300">
                <div className="w-2 h-2 rounded-full bg-cyan-400" />
                Privacy-First Architecture
              </div>
            </div>
          </div>
        </section>

        <section className="text-center pt-12 border-t border-white/5">
          <h2 className="text-2xl font-bold text-white mb-4">Developed by Faizan Raza</h2>
          <p className="text-slate-400 mb-8">Building tools for a safer, more transparent digital future.</p>
          <div className="flex justify-center gap-6">
             <Link to="/portfolio" className="flex items-center gap-2 text-cyan-400 hover:text-cyan-300 transition-colors font-medium">
                <Code className="w-5 h-5" /> Developer Portfolio
             </Link>
             <a href="mailto:faizan@example.com" className="flex items-center gap-2 text-slate-400 hover:text-white transition-colors font-medium">
                <Mail className="w-5 h-5" /> Contact Developer
             </a>
          </div>
        </section>
      </div>
    </div>
  );
};

export default AboutPage;
