
import React, { useState, useEffect, useRef } from 'react';
// Grouping react-router-dom imports to handle potential type environment issues
import { Link, useNavigate } from 'react-router-dom';
import { 
  Search, 
  Loader2, 
  AlertCircle, 
  ShieldAlert, 
  Lock, 
  Info, 
  ShieldCheck, 
  Activity, 
  BarChart3, 
  Lightbulb,
  Terminal,
  ArrowRight
} from 'lucide-react';
import { ScanResult, RiskLevel } from '../types';

interface ScanPageProps {
  onScanComplete: (result: ScanResult) => void;
}

const ScanPage: React.FC<ScanPageProps> = ({ onScanComplete }) => {
  const navigate = useNavigate();
  const [target, setTarget] = useState('');
  const [isScanning, setIsScanning] = useState(false);
  const [logs, setLogs] = useState<string[]>([]);
  const scrollRef = useRef<HTMLDivElement>(null);

  const scanSteps = [
    "Initializing secure analysis...",
    "Evaluating exposure patterns...",
    "Mapping public data indicators...",
    "Generating risk summary...",
    "Cross-referencing identifier nodes...",
    "Synthesizing awareness report..."
  ];

  useEffect(() => {
    if (scrollRef.current) {
      scrollRef.current.scrollTop = scrollRef.current.scrollHeight;
    }
  }, [logs]);

  const handleStartScan = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!target) return;

    setIsScanning(true);
    setLogs([]);

    // Sequential log simulation
    for (const step of scanSteps) {
      setLogs(prev => [...prev, `[${new Date().toLocaleTimeString()}] ${step}`]);
      await new Promise(r => setTimeout(r, 1200));
    }

    const mockResult: ScanResult = {
      id: Math.random().toString(36).substr(2, 9),
      target,
      score: Math.floor(Math.random() * 35) + 50, // 50-85 score for realism
      riskLevel: RiskLevel.MEDIUM,
      timestamp: new Date().toISOString(),
      findings: [
        { category: "Pattern Correlation", description: "Presence of identifier on multiple public platforms detected.", severity: RiskLevel.MEDIUM },
        { category: "Metadata Insight", description: "Simulation suggests potential for metadata extraction from public media.", severity: RiskLevel.LOW },
        { category: "Exposure Baseline", description: "General exposure signature matches medium-risk profile patterns.", severity: RiskLevel.MEDIUM }
      ]
    };

    onScanComplete(mockResult);
    setIsScanning(false);
    navigate('/results');
  };

  return (
    <div className="max-w-6xl mx-auto px-4 py-16 md:py-24">
      {/* Page Header */}
      <div className="text-center mb-16 animate-in fade-in slide-in-from-top-4 duration-700">
        <h1 className="text-4xl md:text-5xl font-bold text-white mb-6">Digital Risk Scanner</h1>
        <p className="text-slate-400 text-lg max-w-2xl mx-auto leading-relaxed">
          Analyze potential online exposure patterns associated with publicly shared digital identifiers.
          <span className="block mt-2 text-cyan-400/80 text-sm font-medium">This scan is designed for awareness and education only.</span>
        </p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
        {/* Left: Input & Scan Area (Lg 7/12) */}
        <div className="lg:col-span-7 space-y-8">
          <div className="glass p-8 md:p-12 rounded-[40px] border border-white/10 shadow-2xl relative overflow-hidden group">
            <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-cyan-500/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
            
            {!isScanning ? (
              <div className="animate-in fade-in duration-500">
                <h2 className="text-2xl font-bold text-white mb-8 flex items-center gap-3">
                  <ShieldCheck className="w-6 h-6 text-cyan-400" />
                  Start a Secure Scan
                </h2>
                <form onSubmit={handleStartScan} className="space-y-6">
                  <div className="space-y-2">
                    <label className="text-xs font-bold text-slate-500 uppercase tracking-widest pl-1">Digital Identifier</label>
                    <div className="relative group">
                      <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-slate-600 group-focus-within:text-cyan-400 transition-colors" />
                      <input
                        type="text"
                        placeholder="Enter an email address or username"
                        className="w-full bg-slate-900 border border-white/5 rounded-2xl py-4 pl-12 pr-4 text-white focus:outline-none focus:border-cyan-500/30 transition-all placeholder:text-slate-700"
                        value={target}
                        onChange={(e) => setTarget(e.target.value)}
                        required
                      />
                    </div>
                    <p className="text-[10px] text-slate-600 pl-1 flex items-center gap-1">
                      <Lock className="w-3 h-3" /> We do not store or verify real personal data.
                    </p>
                  </div>
                  <button
                    type="submit"
                    disabled={!target}
                    className="w-full bg-cyan-600 hover:bg-cyan-500 disabled:bg-slate-800 disabled:text-slate-600 text-white font-bold py-5 rounded-2xl transition-all flex items-center justify-center gap-3 shadow-[0_0_30px_rgba(34,211,238,0.2)]"
                  >
                    Run Risk Scan
                  </button>
                </form>
              </div>
            ) : (
              <div className="py-8 animate-in zoom-in duration-500">
                <div className="flex flex-col items-center text-center mb-10">
                  <div className="relative mb-6">
                    <div className="w-20 h-20 border-2 border-cyan-500/20 rounded-full animate-ping absolute inset-0" />
                    <div className="w-20 h-20 border-t-2 border-cyan-400 rounded-full animate-spin flex items-center justify-center relative bg-slate-950">
                      <Activity className="w-8 h-8 text-cyan-400" />
                    </div>
                  </div>
                  <h3 className="text-xl font-bold text-white mb-2">Analyzing Patterns</h3>
                  <p className="text-slate-500 text-sm">Please remain on this page while we process the request.</p>
                </div>
                
                <div className="bg-slate-950/80 border border-white/5 rounded-2xl p-6 h-48 overflow-y-auto mono text-[11px] leading-relaxed scroll-smooth" ref={scrollRef}>
                  {logs.map((log, i) => (
                    <div key={i} className="text-cyan-500/80 flex gap-2">
                      <span className="text-slate-700">[{i + 1}]</span> 
                      <span>{log}</span>
                    </div>
                  ))}
                  <div className="flex items-center gap-2 mt-2">
                    <span className="w-2 h-4 bg-cyan-400 animate-pulse" />
                  </div>
                </div>
              </div>
            )}
          </div>

          {/* Privacy & Trust Section */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 animate-in slide-in-from-bottom-4 duration-700 delay-200">
            <div className="glass p-6 rounded-3xl border border-white/5 flex gap-4">
              <div className="w-10 h-10 rounded-xl bg-green-500/10 flex items-center justify-center text-green-400 flex-shrink-0">
                <Lock className="w-5 h-5" />
              </div>
              <div>
                <h3 className="text-white font-bold text-sm mb-1">Your Privacy Matters</h3>
                <ul className="text-[11px] text-slate-500 space-y-1">
                  <li>• No real data collection</li>
                  <li>• No scan history stored</li>
                  <li>• No third-party sharing</li>
                </ul>
              </div>
            </div>
            <div className="glass p-6 rounded-3xl border border-white/5 flex gap-4">
              <div className="w-10 h-10 rounded-xl bg-cyan-500/10 flex items-center justify-center text-cyan-400 flex-shrink-0">
                <ShieldCheck className="w-5 h-5" />
              </div>
              <div>
                <h3 className="text-white font-bold text-sm mb-1">Secure Analysis</h3>
                <p className="text-[11px] text-slate-500 leading-relaxed">
                  Anonymous scans are supported. Your identifier is processed in-memory and discarded.
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Right: Explanations & Warnings (Lg 5/12) */}
        <div className="lg:col-span-5 space-y-8">
          {/* How to Read Your Results */}
          <section className="space-y-6">
            <h2 className="text-xl font-bold text-white pl-4 border-l-4 border-cyan-500 uppercase tracking-widest text-xs">How to Read Your Results</h2>
            <div className="space-y-4">
              {[
                { icon: <Activity className="w-4 h-4" />, title: "Risk Level", desc: "Indicates potential exposure intensity (Low / Medium / High)." },
                { icon: <BarChart3 className="w-4 h-4" />, title: "Exposure Score", desc: "A simulated score based on pattern matching analysis." },
                { icon: <Terminal className="w-4 h-4" />, title: "Timeline Indicators", desc: "Generalized exposure timeframes across digital history." },
                { icon: <Lightbulb className="w-4 h-4" />, title: "Safety Insights", desc: "Recommended digital hygiene practices for better security." }
              ].map((item, i) => (
                <div key={i} className="flex gap-4 p-4 glass rounded-2xl border border-white/5 hover:bg-white/5 transition-colors">
                  <div className="text-cyan-400 mt-1">{item.icon}</div>
                  <div>
                    <h4 className="text-white font-semibold text-xs mb-1">{item.title}</h4>
                    <p className="text-[11px] text-slate-500 leading-relaxed">{item.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </section>

          {/* Ethical Warning */}
          <div className="p-8 bg-cyan-500/5 border border-cyan-500/10 rounded-[32px] animate-in fade-in duration-1000">
            <div className="flex items-center gap-3 mb-4">
              <div className="w-10 h-10 rounded-full bg-cyan-500/20 flex items-center justify-center text-cyan-400">
                <AlertCircle className="w-6 h-6" />
              </div>
              <h3 className="text-cyan-400 font-bold uppercase tracking-widest text-xs">Educational Use Only</h3>
            </div>
            <p className="text-xs text-slate-400 leading-relaxed mb-4">
              ShadowTrace does not access real breach databases, perform hacking, or retrieve private information.
            </p>
            <p className="text-[11px] text-slate-500 leading-relaxed">
              All scan results are simulated to help users understand digital safety and potential exposure risks. We prioritize ethical awareness over alarmism.
            </p>
          </div>

          {/* Post-Scan CTA Mock */}
          <div className="pt-4 flex flex-col gap-3">
             <div className="text-[10px] text-slate-600 uppercase tracking-[0.2em] font-bold mb-2">Next Steps</div>
             <Link to="/education" className="flex items-center justify-between p-4 glass rounded-2xl border border-white/5 hover:border-cyan-500/30 group transition-all">
                <span className="text-xs text-slate-300">Learn About Digital Footprints</span>
                <ArrowRight className="w-4 h-4 text-slate-600 group-hover:text-cyan-400 group-hover:translate-x-1 transition-all" />
             </Link>
             <Link to="/feedback" className="flex items-center justify-between p-4 glass rounded-2xl border border-white/5 hover:border-cyan-500/30 group transition-all">
                <span className="text-xs text-slate-300">Submit Platform Feedback</span>
                <ArrowRight className="w-4 h-4 text-slate-600 group-hover:text-cyan-400 group-hover:translate-x-1 transition-all" />
             </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ScanPage;
