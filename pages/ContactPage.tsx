
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { 
  Mail, 
  Send, 
  ShieldCheck, 
  Info, 
  AlertTriangle, 
  ArrowLeft, 
  User, 
  ExternalLink,
  Github,
  Twitter,
  Instagram
} from 'lucide-react';

const ContactPage: React.FC = () => {
  const [formState, setFormState] = useState({ name: '', email: '', message: '' });
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Simulate form submission
    console.log('Form data:', formState);
    setIsSubmitted(true);
    setTimeout(() => setIsSubmitted(false), 5000);
    setFormState({ name: '', email: '', message: '' });
  };

  return (
    <div className="max-w-7xl mx-auto px-4 py-20 relative">
      {/* Background Gradients */}
      <div className="absolute top-0 left-1/4 w-[400px] h-[400px] bg-cyan-500/5 blur-[120px] rounded-full pointer-events-none" />
      
      <div className="max-w-4xl mx-auto">
        {/* Header Section */}
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-6">Contact the Developer</h1>
          <p className="text-slate-400 text-lg max-w-2xl mx-auto">
            For feedback, collaboration, or professional inquiries related to ShadowTrace.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-start">
          {/* Left Column: Info & Ethical Notice */}
          <div className="space-y-8">
            <section className="glass p-8 rounded-3xl border border-white/10">
              <h3 className="text-white font-bold mb-6 flex items-center gap-2 uppercase tracking-widest text-xs">
                Primary Contact
              </h3>
              <div className="flex flex-col gap-6">
                <a 
                  href="mailto:faizandev727@gmail.com" 
                  className="group flex items-center gap-4 p-4 rounded-2xl bg-slate-900/50 border border-white/5 hover:border-cyan-500/30 transition-all"
                >
                  <div className="w-12 h-12 rounded-xl bg-cyan-500/10 flex items-center justify-center text-cyan-400 group-hover:scale-110 transition-transform">
                    <Mail className="w-6 h-6" />
                  </div>
                  <div>
                    <span className="block text-xs font-bold text-slate-500 uppercase tracking-widest mb-1">Email Address</span>
                    <span className="text-slate-200 font-medium break-all">faizandev727@gmail.com</span>
                  </div>
                </a>
              </div>

              <div className="mt-8 pt-8 border-t border-white/5">
                <div className="flex gap-3 items-start text-xs text-slate-400 leading-relaxed">
                  <ShieldCheck className="w-5 h-5 text-cyan-400 flex-shrink-0" />
                  <div>
                    <p className="font-bold text-slate-200 mb-1">Privacy Assurance</p>
                    Your information is used only to respond to your message. No data is stored, shared, or reused beyond communication.
                  </div>
                </div>
              </div>
            </section>

            <section className="glass p-8 rounded-3xl border border-white/10">
              <h3 className="text-white font-bold mb-6 flex items-center gap-2 uppercase tracking-widest text-xs">
                Intended Use Notice
              </h3>
              <ul className="space-y-4">
                {[
                  "Project feedback and feature requests",
                  "Security and privacy discussions",
                  "Collaboration and research opportunities",
                  "Professional or technical inquiries"
                ].map((reason, i) => (
                  <li key={i} className="flex gap-3 text-sm text-slate-400">
                    <div className="w-1.5 h-1.5 bg-cyan-400 rounded-full mt-2 flex-shrink-0" />
                    {reason}
                  </li>
                ))}
              </ul>
            </section>

            <section className="p-6 bg-red-500/5 border border-red-500/10 rounded-2xl flex items-start gap-4">
              <AlertTriangle className="w-5 h-5 text-red-500/50 flex-shrink-0" />
              <p className="text-[11px] text-slate-500 leading-relaxed italic">
                <strong>Ethical Disclaimer:</strong> ShadowTrace is an educational cybersecurity awareness project. No support is provided for illegal, unethical, or unauthorized activities.
              </p>
            </section>
          </div>

          {/* Right Column: Contact Form */}
          <div className="glass p-8 md:p-10 rounded-[40px] border border-white/10 relative overflow-hidden">
            <h3 className="text-white font-bold mb-8">Send a Message</h3>
            
            {isSubmitted ? (
              <div className="py-12 text-center animate-in zoom-in duration-300">
                <div className="w-16 h-16 bg-cyan-500/20 text-cyan-400 rounded-full flex items-center justify-center mx-auto mb-6">
                  <ShieldCheck className="w-8 h-8" />
                </div>
                <h4 className="text-xl font-bold text-white mb-2">Message Sent</h4>
                <p className="text-slate-400 text-sm">Thank you for reaching out. I will respond to your inquiry shortly.</p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <label className="block text-xs font-bold text-slate-500 uppercase tracking-widest mb-3">Full Name</label>
                  <div className="relative">
                    <User className="absolute left-4 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-600" />
                    <input 
                      required
                      type="text" 
                      placeholder="e.g. John Doe"
                      className="w-full bg-slate-900/50 border border-white/5 rounded-xl py-3 pl-12 pr-4 text-white focus:outline-none focus:border-cyan-500/30 transition-all placeholder:text-slate-700"
                      value={formState.name}
                      onChange={(e) => setFormState({ ...formState, name: e.target.value })}
                    />
                  </div>
                </div>
                <div>
                  <label className="block text-xs font-bold text-slate-500 uppercase tracking-widest mb-3">Email Address</label>
                  <div className="relative">
                    <Mail className="absolute left-4 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-600" />
                    <input 
                      required
                      type="email" 
                      placeholder="e.g. john@example.com"
                      className="w-full bg-slate-900/50 border border-white/5 rounded-xl py-3 pl-12 pr-4 text-white focus:outline-none focus:border-cyan-500/30 transition-all placeholder:text-slate-700"
                      value={formState.email}
                      onChange={(e) => setFormState({ ...formState, email: e.target.value })}
                    />
                  </div>
                </div>
                <div>
                  <label className="block text-xs font-bold text-slate-500 uppercase tracking-widest mb-3">Message</label>
                  <textarea 
                    required
                    placeholder="How can I help you?"
                    className="w-full bg-slate-900/50 border border-white/5 rounded-xl p-4 text-white focus:outline-none focus:border-cyan-500/30 transition-all h-40 resize-none placeholder:text-slate-700"
                    value={formState.message}
                    onChange={(e) => setFormState({ ...formState, message: e.target.value })}
                  />
                </div>
                <button 
                  type="submit"
                  className="w-full bg-cyan-600 hover:bg-cyan-500 text-white font-bold py-4 rounded-xl transition-all flex items-center justify-center gap-2 group shadow-[0_0_20px_rgba(34,211,238,0.2)]"
                >
                  Send Message <Send className="w-4 h-4 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
                </button>
              </form>
            )}
          </div>
        </div>

        {/* Navigation Links */}
        <div className="mt-20 pt-12 border-t border-white/5 flex flex-wrap justify-center gap-8 md:gap-12">
          <Link to="/" className="text-slate-500 hover:text-cyan-400 text-sm font-medium flex items-center gap-2 transition-colors">
            <ArrowLeft className="w-4 h-4" /> Back to Home
          </Link>
          <Link to="/portfolio" className="text-slate-500 hover:text-cyan-400 text-sm font-medium flex items-center gap-2 transition-colors">
            Developer Portfolio <ExternalLink className="w-3 h-3" />
          </Link>
          <div className="flex gap-4">
             <a href="https://github.com/fr45201-collab" target="_blank" className="text-slate-500 hover:text-white transition-all"><Github className="w-4 h-4" /></a>
             <a href="https://x.com/FaizanRaza54722" target="_blank" className="text-slate-500 hover:text-white transition-all"><Twitter className="w-4 h-4" /></a>
             <a href="https://www.instagram.com/faizanraza.dev?igsh=MWdqbnZhNjR3YXRpbQ==" target="_blank" className="text-slate-500 hover:text-white transition-all"><Instagram className="w-4 h-4" /></a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactPage;
