
import React from 'react';
import { Link } from 'react-router-dom';
import { Shield, Github, Twitter, Instagram, ExternalLink, Code, Mail, MessageSquare } from 'lucide-react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-slate-950 border-t border-slate-900 pt-16 pb-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-12">
          <div className="col-span-1 md:col-span-2">
            <div className="flex items-center gap-2 mb-6">
              <Shield className="w-6 h-6 text-cyan-400" />
              <span className="text-xl font-bold tracking-tight text-white">
                SHADOW<span className="text-cyan-400">TRACE</span>
              </span>
            </div>
            <p className="text-slate-400 max-w-sm mb-6 leading-relaxed">
              Empowering individuals to reclaim their digital identity through advanced awareness and educational insights.
            </p>
            <div className="flex items-center gap-4">
              <a href="https://github.com/fr45201-collab" target="_blank" rel="noopener noreferrer" className="p-2 glass rounded-lg text-slate-400 hover:text-cyan-400 hover:glow-cyan transition-all">
                <span className="sr-only">GitHub</span>
                <Github className="w-5 h-5" />
              </a>
              <a href="https://x.com/FaizanRaza54722" target="_blank" rel="noopener noreferrer" className="p-2 glass rounded-lg text-slate-400 hover:text-cyan-400 hover:glow-cyan transition-all">
                <span className="sr-only">Twitter</span>
                <Twitter className="w-5 h-5" />
              </a>
              <a href="https://www.instagram.com/faizanraza.dev?igsh=MWdqbnZhNjR3YXRpbQ==" target="_blank" rel="noopener noreferrer" className="p-2 glass rounded-lg text-slate-400 hover:text-cyan-400 hover:glow-cyan transition-all">
                <span className="sr-only">Instagram</span>
                <Instagram className="w-5 h-5" />
              </a>
            </div>
          </div>

          <div>
            <h4 className="text-white font-semibold mb-6">Platform</h4>
            <ul className="space-y-4 text-slate-400 text-sm">
              <li><Link to="/scan" className="hover:text-cyan-400 transition-colors">Risk Scanner</Link></li>
              <li><Link to="/education" className="hover:text-cyan-400 transition-colors">Learning Center</Link></li>
              <li><Link to="/feedback" className="hover:text-cyan-400 transition-colors">Share Feedback</Link></li>
              <li><Link to="/about" className="hover:text-cyan-400 transition-colors">Privacy Policy</Link></li>
            </ul>
          </div>

          <div>
            <h4 className="text-white font-semibold mb-6">Contact</h4>
            <ul className="space-y-4 text-slate-400 text-sm">
              <li>
                <Link to="/contact" className="flex items-center gap-2 hover:text-cyan-400 transition-colors">
                  <Mail className="w-4 h-4" /> Contact Developer
                </Link>
              </li>
              <li>
                <Link to="/portfolio" className="flex items-center gap-2 hover:text-cyan-400 transition-colors">
                  <Code className="w-4 h-4" /> Developer Profile
                </Link>
              </li>
              <li>
                <a href="mailto:faizandev727@gmail.com" className="hover:text-cyan-400 transition-colors text-xs text-slate-500">
                  faizandev727@gmail.com
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="bg-cyan-500/5 border border-cyan-500/10 rounded-2xl p-6 mb-8">
          <div className="flex flex-col md:flex-row gap-4 items-start">
            <div className="bg-cyan-500/10 p-2 rounded-lg">
              <Shield className="w-5 h-5 text-cyan-400" />
            </div>
            <div>
              <h5 className="text-sm font-bold text-cyan-400 uppercase tracking-wider mb-2">⚠️ Educational Use Only</h5>
              <p className="text-xs text-slate-400 leading-relaxed">
                ShadowTrace is a cybersecurity awareness and educational tool. It does not access real breach databases, perform hacking, or retrieve private data. 
                All results are simulated to help users understand digital safety and online exposure risks.
              </p>
            </div>
          </div>
        </div>

        <div className="flex flex-col md:flex-row justify-between items-center gap-4 pt-8 border-t border-slate-900">
          <p className="text-slate-500 text-xs">
            © {new Date().getFullYear()} ShadowTrace. All rights reserved.
          </p>
          <p className="text-slate-500 text-xs font-medium">
            Developed by <span className="text-slate-300">Faizan Raza</span>
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
