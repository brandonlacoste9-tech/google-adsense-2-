'use client';
import { useState } from 'react';
import { Check, AlertCircle, Sparkles, ArrowRight } from 'lucide-react';
import Link from 'next/link';

export default function ChecklistPage() {
  const [checked, setChecked] = useState<string[]>([]);

  const items = [
    { id: 'domain', category: 'Foundation', text: 'Top-Level Domain (e.g. .com, .net, .org)' },
    { id: 'ssl', category: 'Technical', text: 'SSL Certificate (HTTPS) is active' },
    { id: 'posts', category: 'Content', text: 'At least 15-20 high-quality articles' },
    { id: 'length', category: 'Content', text: 'Average post length is 800+ words' },
    { id: 'privacy', category: 'Legal', text: 'Privacy Policy page exists' },
    { id: 'contact', category: 'Legal', text: 'Contact Us page is accessible' },
    { id: 'nav', category: 'UX', text: 'Clear, working navigation menu' },
    { id: 'mobile', category: 'UX', text: 'Site is fully mobile-responsive' },
  ];

  const toggle = (id: string) => {
    setChecked(prev => prev.includes(id) ? prev.filter(x => x !== id) : [...prev, id]);
  };

  const progress = Math.round((checked.length / items.length) * 100);

  return (
    <div className="relative min-h-screen py-32">
      <div className="glow-spot glow-primary" />
      
      <div className="container relative z-10">
        <div className="max-w-3xl mx-auto">
          <div className="text-center mb-16">
            <h1 className="text-5xl font-black mb-4 gradient-text">Site Readiness Audit</h1>
            <p className="text-slate-400 text-lg">
              Verify your architectural compliance before submitting to Google AdSense.
            </p>
          </div>

          <div className="glass-panel p-10 border-white/5 mb-12">
            <div className="flex justify-between items-center mb-4">
              <span className="text-sm font-bold text-slate-400 uppercase tracking-widest">Blueprint Completion</span>
              <span className="text-2xl font-black text-primary">{progress}%</span>
            </div>
            <div className="w-full h-4 bg-white/5 rounded-full overflow-hidden p-1 border border-white/5">
              <div 
                className="h-full bg-gradient-to-r from-primary to-emerald-500 rounded-full transition-all duration-700 ease-out shadow-[0_0_20px_rgba(99,102,241,0.5)]" 
                style={{ width: `${progress}%` }}
              />
            </div>
          </div>

          <div className="grid grid-cols-1 gap-4">
            {items.map((item) => (
              <div 
                key={item.id} 
                onClick={() => toggle(item.id)}
                className={`group p-6 rounded-2xl border transition-all cursor-pointer ${
                  checked.includes(item.id) 
                  ? 'border-emerald-500/50 bg-emerald-500/5 text-white' 
                  : 'border-white/5 bg-white/[0.02] hover:bg-white/[0.05] hover:border-white/10'
                }`}
              >
                <div className="flex items-center gap-6">
                  <div className={`w-8 h-8 rounded-xl border flex items-center justify-center transition-all ${
                    checked.includes(item.id) 
                    ? 'bg-emerald-500 border-emerald-500 text-white shadow-[0_0_15px_rgba(16,185,129,0.4)]' 
                    : 'bg-transparent border-white/10 group-hover:border-primary'
                  }`}>
                    {checked.includes(item.id) && <Check size={18} strokeWidth={4} />}
                  </div>
                  <div>
                    <span className={`text-[10px] font-black uppercase tracking-[0.2em] mb-1 block ${
                      checked.includes(item.id) ? 'text-emerald-400' : 'text-slate-500'
                    }`}>
                      {item.category}
                    </span>
                    <p className={`text-lg font-bold transition-colors ${
                      checked.includes(item.id) ? 'text-white' : 'text-slate-300'
                    }`}>{item.text}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {progress === 100 ? (
            <div className="mt-16 glass-panel p-12 border-emerald-500/20 bg-emerald-500/[0.02] text-center">
              <div className="w-20 h-20 bg-emerald-500/20 rounded-full flex items-center justify-center mx-auto mb-6 text-emerald-400">
                <Sparkles size={40} />
              </div>
              <h3 className="text-3xl font-black mb-4 text-white">Elite Status Achieved</h3>
              <p className="text-slate-400 mb-8 max-w-md mx-auto">Your site infrastructure meets the highest standards of the Blueprint Academy. You are clear for takeoff.</p>
              <a href="https://adsense.google.com" target="_blank" className="btn-premium px-12">
                Launch Application
              </a>
            </div>
          ) : (
            <div className="mt-16 p-8 rounded-2xl bg-indigo-500/5 border border-indigo-500/20 flex gap-6 items-start">
              <div className="w-12 h-12 rounded-xl bg-indigo-500/10 flex items-center justify-center text-indigo-400 shrink-0">
                <AlertCircle size={24} />
              </div>
              <div>
                <h4 className="text-white font-bold mb-1">Architectural Gaps Detected</h4>
                <p className="text-sm text-slate-400 leading-relaxed">Please resolve all checklist items. Submitting with gaps increases the risk of a "Low Value" permanent flag on your publisher account.</p>
              </div>
            </div>
          )}
          
          <div className="mt-20 text-center">
            <Link href="/" className="text-slate-500 hover:text-white transition-colors text-sm font-bold uppercase tracking-widest">
              ← Return to Academy Hub
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
