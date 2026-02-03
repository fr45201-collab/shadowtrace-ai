
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { 
  Star, 
  Send, 
  ShieldCheck, 
  ArrowLeft, 
  ChevronDown, 
  CheckCircle2,
  RefreshCw,
  Info
} from 'lucide-react';

const FeedbackPage: React.FC = () => {
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [rating, setRating] = useState(0);
  const [hoverRating, setHoverRating] = useState(0);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    type: '',
    message: ''
  });

  const ratingLabels: Record<number, string> = {
    1: 'Poor',
    2: 'Fair',
    3: 'Good',
    4: 'Very Good',
    5: 'Excellent'
  };

  const handleRatingClick = (val: number) => {
    setRating(val);
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate API delay
    setTimeout(() => {
      setIsSubmitting(false);
      setIsSubmitted(true);
    }, 1500);
  };

  const resetForm = () => {
    setIsSubmitted(false);
    setFormData({ name: '', email: '', type: '', message: '' });
    setRating(0);
  };

  if (isSubmitted) {
    return (
      <div className="max-w-7xl mx-auto px-4 py-24 flex flex-col items-center justify-center min-h-[60vh]">
        <div className="glass p-12 md:p-16 rounded-[40px] border border-cyan-500/20 text-center max-w-xl w-full animate-in zoom-in duration-500 shadow-[0_0_50px_rgba(34,211,238,0.1)]">
          <div className="w-20 h-20 bg-cyan-500/20 text-cyan-400 rounded-full flex items-center justify-center mx-auto mb-8 animate-pulse">
            <CheckCircle2 className="w-10 h-10" />
          </div>
          <h2 className="text-3xl font-bold text-white mb-4 tracking-tight">Feedback Sent Successfully</h2>
          <p className="text-slate-400 text-lg mb-10 leading-relaxed">
            Thank you for sharing your feedback. Your input helps make ShadowTrace better for everyone.
          </p>
          <div className="text-xs text-cyan-400/60 font-medium uppercase tracking-[0.2em] mb-12">
            Building safer digital experiences — together.
          </div>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button 
              onClick={resetForm}
              className="flex items-center justify-center gap-2 text-slate-400 hover:text-white transition-all text-sm font-bold border border-white/5 hover:bg-white/5 px-6 py-3 rounded-xl"
            >
              <RefreshCw className="w-4 h-4" /> Submit Another
            </button>
            <Link 
              to="/" 
              className="bg-cyan-600 hover:bg-cyan-500 text-white px-8 py-3 rounded-xl font-bold transition-all shadow-[0_0_20px_rgba(34,211,238,0.3)]"
            >
              Return Home
            </Link>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="max-w-7xl mx-auto px-4 py-20 relative overflow-hidden">
      {/* Background Decor */}
      <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-cyan-500/5 blur-[120px] rounded-full pointer-events-none" />
      
      <div className="max-w-3xl mx-auto">
        <div className="text-center mb-16 animate-in fade-in slide-in-from-top-4 duration-700">
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-6">Share Your Feedback</h1>
          <p className="text-slate-400 text-lg max-w-xl mx-auto leading-relaxed">
            Your feedback helps improve ShadowTrace. All responses are optional and can be shared anonymously.
          </p>
        </div>

        <div className="glass p-8 md:p-12 rounded-[40px] border border-white/10 relative shadow-2xl animate-in slide-in-from-bottom-8 duration-700">
          <form onSubmit={handleSubmit} className="space-y-8">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="space-y-2">
                <label className="text-xs font-bold text-slate-500 uppercase tracking-widest pl-1">Name</label>
                <input 
                  type="text" 
                  placeholder="Your name (optional)"
                  className="w-full bg-slate-900/50 border border-white/5 rounded-2xl py-4 px-6 text-white focus:outline-none focus:border-cyan-500/30 transition-all placeholder:text-slate-700"
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                />
              </div>
              <div className="space-y-2">
                <label className="text-xs font-bold text-slate-500 uppercase tracking-widest pl-1">Email</label>
                <input 
                  type="email" 
                  placeholder="Email (optional)"
                  className="w-full bg-slate-900/50 border border-white/5 rounded-2xl py-4 px-6 text-white focus:outline-none focus:border-cyan-500/30 transition-all placeholder:text-slate-700"
                  value={formData.email}
                  onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                />
                <p className="text-[10px] text-slate-600 pl-1">Only if you'd like a response.</p>
              </div>
            </div>

            <div className="space-y-4">
              <label className="text-xs font-bold text-slate-500 uppercase tracking-widest pl-1">Feedback Type</label>
              <div className="relative">
                <select 
                  className="w-full bg-slate-900/50 border border-white/5 rounded-2xl py-4 px-6 text-white appearance-none focus:outline-none focus:border-cyan-500/30 transition-all cursor-pointer"
                  value={formData.type}
                  onChange={(e) => setFormData({ ...formData, type: e.target.value })}
                >
                  <option value="" className="bg-slate-950">Select feedback type (optional)</option>
                  <option value="general" className="bg-slate-950">General Feedback</option>
                  <option value="feature" className="bg-slate-950">Feature Suggestion</option>
                  <option value="bug" className="bg-slate-950">Bug Report</option>
                  <option value="ui" className="bg-slate-950">UI/UX Improvement</option>
                </select>
                <ChevronDown className="absolute right-6 top-1/2 -translate-y-1/2 w-5 h-5 text-slate-600 pointer-events-none" />
              </div>
            </div>

            <div className="space-y-4">
              <label className="text-xs font-bold text-slate-500 uppercase tracking-widest pl-1 flex items-center justify-between">
                <span>Rating</span>
                <span className="text-cyan-400 font-medium lowercase tracking-normal">
                  {ratingLabels[rating || hoverRating] || ''}
                </span>
              </label>
              <div className="flex gap-4">
                {[1, 2, 3, 4, 5].map((star) => (
                  <button
                    key={star}
                    type="button"
                    onClick={() => handleRatingClick(star)}
                    onMouseEnter={() => setHoverRating(star)}
                    onMouseLeave={() => setHoverRating(0)}
                    className="group focus:outline-none"
                  >
                    <Star 
                      className={`w-10 h-10 transition-all duration-300 ${
                        star <= (hoverRating || rating) 
                        ? 'fill-cyan-400 text-cyan-400 drop-shadow-[0_0_8px_rgba(34,211,238,0.4)] scale-110' 
                        : 'text-slate-800'
                      } group-hover:scale-110`}
                    />
                  </button>
                ))}
              </div>
            </div>

            <div className="space-y-4">
              <label className="text-xs font-bold text-slate-500 uppercase tracking-widest pl-1">Feedback Message</label>
              <textarea 
                placeholder="Tell us what you liked, what can be better, or what you'd love to see next..."
                className="w-full bg-slate-900/50 border border-white/5 rounded-3xl p-6 text-white focus:outline-none focus:border-cyan-500/30 transition-all h-48 resize-none placeholder:text-slate-700 leading-relaxed"
                value={formData.message}
                onChange={(e) => setFormData({ ...formData, message: e.target.value })}
              />
            </div>

            <button 
              type="submit"
              disabled={isSubmitting}
              className="w-full bg-cyan-600 hover:bg-cyan-500 disabled:bg-slate-800 disabled:text-slate-600 text-white font-bold py-5 rounded-2xl transition-all flex items-center justify-center gap-3 group shadow-[0_0_30px_rgba(34,211,238,0.2)]"
            >
              {isSubmitting ? (
                <RefreshCw className="w-5 h-5 animate-spin" />
              ) : (
                <>Send Feedback <Send className="w-4 h-4 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" /></>
              )}
            </button>
          </form>

          <div className="mt-10 pt-8 border-t border-white/5 text-center">
            <div className="inline-flex items-center gap-2 text-[10px] text-slate-500 uppercase tracking-widest font-medium">
              <ShieldCheck className="w-3.5 h-3.5 text-cyan-500/50" />
              Anonymous submission available • No data is shared
            </div>
          </div>
        </div>

        <div className="mt-12 flex flex-col items-center gap-6">
          <Link to="/" className="text-slate-600 hover:text-cyan-400 text-sm font-medium flex items-center gap-2 transition-colors group">
            <ArrowLeft className="w-4 h-4 group-hover:-translate-x-1 transition-transform" /> Return to Home
          </Link>
          
          <div className="p-4 bg-slate-900/30 border border-white/5 rounded-2xl flex items-center gap-4 max-w-lg">
            <Info className="w-5 h-5 text-slate-700 flex-shrink-0" />
            <p className="text-[11px] text-slate-600 leading-relaxed">
              ShadowTrace is an educational cybersecurity awareness platform. Feedback is reviewed only for product improvement and user experience.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FeedbackPage;
