
import React, { useState, useEffect } from 'react';
// Grouping react-router-dom imports to handle potential type environment issues
import { Navigate, Link } from 'react-router-dom';
import { 
  ShieldCheck, 
  AlertTriangle, 
  ChevronRight, 
  RefreshCw, 
  Download, 
  Share2,
  Info,
  CheckCircle2,
  ExternalLink,
  Sparkles,
  X,
  Copy,
  Link as LinkIcon
} from 'lucide-react';
import { 
  AreaChart, 
  Area, 
  XAxis, 
  YAxis, 
  CartesianGrid, 
  Tooltip, 
  ResponsiveContainer 
} from 'recharts';
import { jsPDF } from 'jspdf';
import { ScanResult, RiskLevel, TimelineData } from '../types';
import { getPersonalizedRecommendations } from '../services/geminiService';

const ResultsPage: React.FC<{ result: ScanResult | null }> = ({ result }) => {
  const [recommendations, setRecommendations] = useState<string[]>([]);
  const [isLoadingRecs, setIsLoadingRecs] = useState(true);
  const [isShareModalOpen, setIsShareModalOpen] = useState(false);
  const [copyStatus, setCopyStatus] = useState<'idle' | 'copied'>('idle');

  useEffect(() => {
    if (result) {
      const fetchRecs = async () => {
        setIsLoadingRecs(true);
        const recs = await getPersonalizedRecommendations(result);
        setRecommendations(recs);
        setIsLoadingRecs(false);
      };
      fetchRecs();
    }
  }, [result]);

  if (!result) return <Navigate to="/scan" />;

  const timelineData: TimelineData[] = [
    { date: 'Jan', exposure: 12 },
    { date: 'Feb', exposure: 18 },
    { date: 'Mar', exposure: 25 },
    { date: 'Apr', exposure: 22 },
    { date: 'May', exposure: 38 },
    { date: 'Jun', exposure: result.score },
  ];

  const maskTarget = (text: string) => {
    if (text.includes('@')) {
      const [name, domain] = text.split('@');
      return `${name[0]}${'*'.repeat(Math.min(name.length - 1, 5))}@${domain}`;
    }
    return `${text[0]}${'*'.repeat(Math.min(text.length - 1, 5))}`;
  };

  const handleDownload = () => {
    const doc = new jsPDF();
    const maskedId = maskTarget(result.target);
    const date = new Date().toLocaleDateString();

    // Header
    doc.setFontSize(22);
    doc.setTextColor(34, 211, 238); // Cyan
    doc.text('SHADOWTRACE', 20, 25);
    doc.setFontSize(10);
    doc.setTextColor(100, 116, 139); // Slate
    doc.text('KNOW YOUR DIGITAL FOOTPRINT', 20, 30);
    
    doc.setDrawColor(34, 211, 238);
    doc.line(20, 35, 190, 35);

    // Report Title
    doc.setFontSize(18);
    doc.setTextColor(15, 23, 42);
    doc.text('Simulated Exposure Awareness Report', 20, 50);
    doc.setFontSize(10);
    doc.text(`Generated on: ${date}`, 20, 57);

    // Summary Section
    doc.setFontSize(14);
    doc.text('1. Risk Summary', 20, 75);
    doc.setFontSize(11);
    doc.text(`Identifier: ${maskedId}`, 25, 85);
    doc.text(`Exposure Score: ${result.score}/100`, 25, 92);
    doc.text(`Risk Level: ${result.riskLevel}`, 25, 99);
    doc.text('Status: SIMULATED ANALYSIS', 25, 106);

    // Findings
    doc.setFontSize(14);
    doc.text('2. Audit Findings', 20, 125);
    let y = 135;
    result.findings.forEach((f, i) => {
      doc.setFontSize(10);
      doc.setFont('helvetica', 'bold');
      doc.text(`${i + 1}. ${f.category} [${f.severity}]`, 25, y);
      doc.setFont('helvetica', 'normal');
      doc.text(f.description, 25, y + 5, { maxWidth: 160 });
      y += 15;
    });

    // Recommendations
    if (recommendations.length > 0) {
      doc.setFontSize(14);
      doc.text('3. Safety Recommendations', 20, y + 10);
      y += 20;
      recommendations.forEach((rec, i) => {
        doc.setFontSize(10);
        doc.text(`• ${rec}`, 25, y, { maxWidth: 160 });
        y += 10;
      });
    }

    // Disclaimer
    doc.setDrawColor(226, 232, 240);
    doc.line(20, 260, 190, 260);
    doc.setFontSize(8);
    doc.setTextColor(100, 116, 139);
    doc.text('DISCLAIMER: This report is generated for educational and awareness purposes only.', 20, 268);
    doc.text('It does not represent real data breaches, live monitoring, or hacking activity.', 20, 273);
    doc.text('Developed by Faizan Raza | ShadowTrace Platform', 20, 280);

    doc.save('ShadowTrace_Simulated_Risk_Report.pdf');
  };

  const handleShare = () => {
    setIsShareModalOpen(true);
  };

  const getShareText = () => {
    return `ShadowTrace simulated risk analysis indicates a ${result.riskLevel} exposure profile (Score: ${result.score}/100). This is an educational insight designed to improve digital safety awareness. Build a safer digital future at ShadowTrace.`;
  };

  const copyToClipboard = () => {
    navigator.clipboard.writeText(getShareText());
    setCopyStatus('copied');
    setTimeout(() => setCopyStatus('idle'), 2000);
  };

  const systemShare = () => {
    if (navigator.share) {
      navigator.share({
        title: 'ShadowTrace Exposure Audit',
        text: getShareText(),
        url: window.location.origin
      }).catch(() => {});
    } else {
      copyToClipboard();
    }
  };

  const getRiskColor = (level: RiskLevel) => {
    switch (level) {
      case RiskLevel.LOW: return 'text-green-400';
      case RiskLevel.MEDIUM: return 'text-yellow-400';
      case RiskLevel.HIGH: return 'text-red-400';
    }
  };

  return (
    <div className="max-w-7xl mx-auto px-4 py-16">
      <div className="flex flex-col md:flex-row items-center justify-between gap-8 mb-12">
        <div>
          <h1 className="text-3xl font-bold text-white mb-2">Exposure Audit Report</h1>
          <p className="text-slate-400 flex items-center gap-2">
            Target Identification: <span className="text-cyan-400 mono text-sm">{result.target}</span>
          </p>
        </div>
        <div className="flex gap-4">
          <button 
            onClick={handleDownload}
            title="Download Report"
            className="glass p-3 rounded-xl text-slate-400 hover:text-white transition-all hover:glow-cyan"
          >
            <Download className="w-5 h-5" />
          </button>
          <button 
            onClick={handleShare}
            title="Share Summary"
            className="glass p-3 rounded-xl text-slate-400 hover:text-white transition-all hover:glow-cyan"
          >
            <Share2 className="w-5 h-5" />
          </button>
          <Link to="/scan" className="bg-slate-900 border border-white/10 text-white px-6 py-3 rounded-xl font-bold flex items-center gap-2 hover:bg-slate-800 transition-all">
            <RefreshCw className="w-4 h-4" /> Rescan
          </Link>
        </div>
      </div>

      {/* Share Modal */}
      {isShareModalOpen && (
        <div className="fixed inset-0 z-[100] flex items-center justify-center p-4 bg-slate-950/80 backdrop-blur-sm animate-in fade-in duration-300">
          <div className="glass p-8 rounded-[32px] border border-white/10 max-w-md w-full relative shadow-2xl">
            <button 
              onClick={() => setIsShareModalOpen(false)}
              className="absolute top-6 right-6 text-slate-500 hover:text-white transition-colors"
            >
              <X className="w-6 h-6" />
            </button>
            <h3 className="text-xl font-bold text-white mb-6">Share Report Summary</h3>
            
            <div className="bg-slate-900/50 p-4 rounded-2xl border border-white/5 mb-6">
              <p className="text-sm text-slate-400 leading-relaxed italic">
                "{getShareText()}"
              </p>
            </div>

            <div className="space-y-3">
              <button 
                onClick={copyToClipboard}
                className="w-full flex items-center justify-between p-4 glass rounded-2xl border border-white/5 hover:border-cyan-500/30 transition-all group"
              >
                <span className="text-sm text-slate-200 flex items-center gap-3">
                  <Copy className="w-4 h-4 text-cyan-400" /> 
                  {copyStatus === 'copied' ? 'Copied to Clipboard' : 'Copy Summary'}
                </span>
                {copyStatus === 'copied' && <CheckCircle2 className="w-4 h-4 text-green-400" />}
              </button>
              
              <button 
                onClick={systemShare}
                className="w-full flex items-center justify-between p-4 glass rounded-2xl border border-white/5 hover:border-cyan-500/30 transition-all group"
              >
                <span className="text-sm text-slate-200 flex items-center gap-3">
                  <LinkIcon className="w-4 h-4 text-cyan-400" /> Share via System
                </span>
                <ChevronRight className="w-4 h-4 text-slate-600 group-hover:text-cyan-400 transition-all" />
              </button>
            </div>

            <div className="mt-8 pt-6 border-t border-white/5">
              <p className="text-[10px] text-slate-600 leading-relaxed uppercase tracking-wider text-center">
                Shared summaries are simulated and do not reflect real security incidents.
              </p>
            </div>
          </div>
        </div>
      )}

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-8">
        {/* Risk Score Card */}
        <div className="glass p-8 rounded-[32px] border border-white/10 flex flex-col items-center justify-center text-center relative overflow-hidden group">
          <div className="absolute inset-0 bg-gradient-to-b from-cyan-500/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
          <h3 className="text-slate-400 font-semibold mb-6 uppercase tracking-widest text-xs">Exposure Index</h3>
          <div className="relative w-48 h-48 flex items-center justify-center mb-6">
            <svg className="w-full h-full -rotate-90">
              <circle
                cx="96" cy="96" r="80"
                fill="transparent"
                stroke="currentColor"
                strokeWidth="12"
                className="text-slate-800"
              />
              <circle
                cx="96" cy="96" r="80"
                fill="transparent"
                stroke="currentColor"
                strokeWidth="12"
                strokeDasharray={`${2 * Math.PI * 80}`}
                strokeDashoffset={`${2 * Math.PI * 80 * (1 - result.score / 100)}`}
                className="text-cyan-500 drop-shadow-[0_0_8px_rgba(34,211,238,0.5)]"
                strokeLinecap="round"
              />
            </svg>
            <div className="absolute inset-0 flex flex-col items-center justify-center">
              <span className="text-5xl font-bold text-white leading-none">{result.score}</span>
              <span className="text-slate-500 text-sm">/ 100</span>
            </div>
          </div>
          <div className={`text-lg font-bold ${getRiskColor(result.riskLevel)}`}>
            {result.riskLevel} Risk Profile
          </div>
        </div>

        {/* Analytics Chart */}
        <div className="lg:col-span-2 glass p-8 rounded-[32px] border border-white/10">
          <div className="flex items-center justify-between mb-8">
            <h3 className="text-white font-bold">Historical Exposure Pattern</h3>
            <div className="flex gap-4">
               <div className="flex items-center gap-2 text-xs text-slate-500">
                  <div className="w-2 h-2 rounded-full bg-cyan-500" /> Simulated Growth
               </div>
            </div>
          </div>
          <div className="h-64">
            <ResponsiveContainer width="100%" height="100%">
              <AreaChart data={timelineData}>
                <defs>
                  <linearGradient id="colorExp" x1="0" y1="0" x2="0" y2="1">
                    <stop offset="5%" stopColor="#22d3ee" stopOpacity={0.3}/>
                    <stop offset="95%" stopColor="#22d3ee" stopOpacity={0}/>
                  </linearGradient>
                </defs>
                <CartesianGrid strokeDasharray="3 3" vertical={false} stroke="#1e293b" />
                <XAxis dataKey="date" stroke="#64748b" fontSize={12} tickLine={false} axisLine={false} />
                <YAxis stroke="#64748b" fontSize={12} tickLine={false} axisLine={false} />
                <Tooltip 
                  contentStyle={{ backgroundColor: '#0f172a', border: '1px solid #1e293b', borderRadius: '12px' }}
                  itemStyle={{ color: '#22d3ee' }}
                />
                <Area type="monotone" dataKey="exposure" stroke="#22d3ee" strokeWidth={3} fillOpacity={1} fill="url(#colorExp)" />
              </AreaChart>
            </ResponsiveContainer>
          </div>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        {/* Findings List */}
        <div className="glass p-8 rounded-[32px] border border-white/10">
          <h3 className="text-white font-bold mb-6 flex items-center gap-2">
            Audit Findings <span className="bg-slate-800 text-slate-400 text-xs py-1 px-2 rounded-lg">{result.findings.length} Items</span>
          </h3>
          <div className="space-y-4">
            {result.findings.map((finding, i) => (
              <div key={i} className="flex items-start gap-4 p-4 rounded-2xl bg-slate-900/50 border border-white/5 hover:bg-slate-900 transition-colors">
                <div className={`p-2 rounded-lg ${
                  finding.severity === RiskLevel.HIGH ? 'bg-red-500/10 text-red-400' :
                  finding.severity === RiskLevel.MEDIUM ? 'bg-yellow-500/10 text-yellow-400' :
                  'bg-green-500/10 text-green-400'
                }`}>
                  <AlertTriangle className="w-5 h-5" />
                </div>
                <div>
                  <div className="flex items-center gap-2 mb-1">
                    <span className="text-white font-semibold text-sm">{finding.category}</span>
                    <span className={`text-[10px] font-bold uppercase tracking-wider ${getRiskColor(finding.severity)}`}>
                      {finding.severity}
                    </span>
                  </div>
                  <p className="text-sm text-slate-400">{finding.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* AI Recommendations */}
        <div className="glass p-8 rounded-[32px] border border-white/10 relative overflow-hidden">
          <div className="absolute top-0 right-0 p-8 opacity-10">
            <Sparkles className="w-24 h-24 text-cyan-400" />
          </div>
          <h3 className="text-white font-bold mb-6 flex items-center gap-2">
            Personalized Protection Plan <span className="bg-cyan-500/20 text-cyan-400 text-xs py-1 px-2 rounded-lg">AI Generated</span>
          </h3>
          
          {isLoadingRecs ? (
            <div className="space-y-4">
              {[1, 2, 3, 4].map(i => (
                <div key={i} className="h-16 bg-slate-800/50 animate-pulse rounded-2xl" />
              ))}
            </div>
          ) : (
            <div className="space-y-4">
              {recommendations.map((rec, i) => (
                <div key={i} className="flex items-center gap-4 p-4 rounded-2xl bg-cyan-500/5 border border-cyan-500/10">
                  <div className="w-8 h-8 rounded-full bg-cyan-500/20 flex items-center justify-center text-cyan-400 font-bold text-sm">
                    {i + 1}
                  </div>
                  <p className="text-sm text-slate-200 leading-relaxed font-medium">{rec}</p>
                </div>
              ))}
              <div className="pt-6">
                <Link to="/education" className="text-cyan-400 text-sm font-semibold flex items-center gap-1 hover:gap-2 transition-all">
                  Access Complete Security Playbook <ChevronRight className="w-4 h-4" />
                </Link>
              </div>
            </div>
          )}
        </div>
      </div>

      <div className="mt-12 p-6 glass rounded-2xl border border-yellow-500/10 flex items-start gap-4">
         <Info className="w-6 h-6 text-yellow-500 flex-shrink-0" />
         <div className="text-sm text-slate-400">
           <p className="font-bold text-yellow-500 mb-1">Final Analysis Note</p>
           This report is a simulation of risk profile and does not represent an actual data breach or live hacking activity. Use these insights to review and improve your real-world security posture.
         </div>
      </div>
    </div>
  );
};

export default ResultsPage;
