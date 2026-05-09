'use client';
import { useState } from 'react';
import { Check, AlertCircle, Sparkles } from 'lucide-react';

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
    <div className="container py-20">
      <div className="max-w-2xl mx-auto">
        <h1 className="text-4xl font-bold mb-4">AdSense Readiness Test</h1>
        <p className="text-slate-600 mb-12 italic">
          Check off your progress to see if your site meets the official 2026 AdSense approval standards.
        </p>

        <div className="mb-12">
          <div className="flex justify-between items-center mb-2">
            <span className="text-sm font-bold text-slate-700">Readiness Score</span>
            <span className="text-sm font-bold text-primary">{progress}%</span>
          </div>
          <div className="w-full h-3 bg-slate-200 rounded-full overflow-hidden">
            <div 
              className="h-full bg-primary transition-all duration-500 ease-out" 
              style={{ width: `${progress}%` }}
            />
          </div>
        </div>

        <div className="space-y-4">
          {items.map((item) => (
            <div 
              key={item.id} 
              onClick={() => toggle(item.id)}
              className={`p-5 rounded-xl border cursor-pointer transition-all ${
                checked.includes(item.id) 
                ? 'border-emerald-200 bg-emerald-50 text-emerald-900' 
                : 'border-slate-200 hover:border-indigo-200 hover:bg-indigo-50'
              }`}
            >
              <div className="flex items-center gap-4">
                <div className={`w-6 h-6 rounded border flex items-center justify-center ${
                  checked.includes(item.id) ? 'bg-emerald-500 border-emerald-500 text-white' : 'bg-white border-slate-300'
                }`}>
                  {checked.includes(item.id) && <Check size={14} strokeWidth={3} />}
                </div>
                <div>
                  <span className="text-[10px] font-bold uppercase tracking-widest opacity-60 block mb-1">
                    {item.category}
                  </span>
                  <p className="font-semibold">{item.text}</p>
                </div>
              </div>
            </div>
          ))}
        </div>

        {progress === 100 ? (
          <div className="mt-12 p-8 bg-indigo-900 rounded-2xl text-white text-center animate-bounce">
            <Sparkles className="mx-auto mb-4 text-amber-400" />
            <h3 className="text-2xl font-bold mb-2">You're Ready!</h3>
            <p className="text-indigo-200 mb-6">Your site meets all the core criteria for AdSense approval. Go ahead and submit your application.</p>
            <a href="https://adsense.google.com" target="_blank" className="btn-primary">
              Visit Google AdSense
            </a>
          </div>
        ) : (
          <div className="mt-12 p-6 bg-amber-50 border border-amber-200 rounded-xl flex gap-4">
            <AlertCircle className="text-amber-500 shrink-0" />
            <div>
              <p className="text-sm text-amber-900 font-semibold mb-1">Items Remaining</p>
              <p className="text-xs text-amber-800">Please complete all checklist items before applying. Google rejection for "Low Value Content" often stems from missing these fundamentals.</p>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
