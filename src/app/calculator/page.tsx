'use client';
import { useState } from 'react';
import { BarChart3, TrendingUp, DollarSign, Users } from 'lucide-react';

export default function CalculatorPage() {
  const [traffic, setTraffic] = useState(10000);
  const [cpc, setCpc] = useState(0.5);
  const [ctr, setCtr] = useState(2);

  const monthlyRevenue = (traffic * (ctr / 100) * cpc).toFixed(2);
  const yearlyRevenue = (parseFloat(monthlyRevenue) * 12).toFixed(2);

  return (
    <div className="relative min-h-screen py-32">
      <div className="glow-spot glow-primary opacity-20" />
      
      <div className="container relative z-10">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-16">
            <h1 className="text-5xl font-black mb-4 gradient-text">AdSense Profit Calculator</h1>
            <p className="text-slate-400 text-lg">
              Estimate your monthly and yearly revenue potential based on industry-standard metrics.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
            {/* Inputs */}
            <div className="glass-panel p-10 border-white/5 space-y-10">
              <div className="space-y-4">
                <div className="flex justify-between items-center">
                  <label className="text-sm font-bold text-slate-300 uppercase tracking-widest flex items-center gap-2">
                    <Users size={16} className="text-primary" /> Monthly Traffic
                  </label>
                  <span className="text-xl font-black text-white">{traffic.toLocaleString()} PV</span>
                </div>
                <input 
                  type="range" min="1000" max="500000" step="1000"
                  value={traffic} onChange={(e) => setTraffic(parseInt(e.target.value))}
                  className="w-full h-2 bg-white/5 rounded-full appearance-none cursor-pointer accent-primary"
                />
              </div>

              <div className="space-y-4">
                <div className="flex justify-between items-center">
                  <label className="text-sm font-bold text-slate-300 uppercase tracking-widest flex items-center gap-2">
                    <TrendingUp size={16} className="text-primary" /> Est. CTR (%)
                  </label>
                  <span className="text-xl font-black text-white">{ctr}%</span>
                </div>
                <input 
                  type="range" min="0.1" max="10" step="0.1"
                  value={ctr} onChange={(e) => setCtr(parseFloat(e.target.value))}
                  className="w-full h-2 bg-white/5 rounded-full appearance-none cursor-pointer accent-primary"
                />
              </div>

              <div className="space-y-4">
                <div className="flex justify-between items-center">
                  <label className="text-sm font-bold text-slate-300 uppercase tracking-widest flex items-center gap-2">
                    <DollarSign size={16} className="text-primary" /> Avg. CPC ($)
                  </label>
                  <span className="text-xl font-black text-white">${cpc}</span>
                </div>
                <input 
                  type="range" min="0.01" max="15" step="0.05"
                  value={cpc} onChange={(e) => setCpc(parseFloat(e.target.value))}
                  className="w-full h-2 bg-white/5 rounded-full appearance-none cursor-pointer accent-primary"
                />
              </div>

              <div className="pt-6 border-t border-white/5">
                <p className="text-[10px] text-slate-500 italic">
                  * These are estimates. Actual revenue depends on niche, geography, and ad placement quality.
                </p>
              </div>
            </div>

            {/* Results */}
            <div className="space-y-6">
              <div className="glass-card p-10 border-emerald-500/20 bg-emerald-500/[0.03]">
                <p className="text-xs font-black text-emerald-400 uppercase tracking-[0.2em] mb-4">Estimated Monthly Revenue</p>
                <h2 className="text-6xl font-black text-white mb-2">${monthlyRevenue}</h2>
                <p className="text-slate-400 text-sm italic">Based on your current metrics</p>
              </div>

              <div className="glass-card p-10 border-indigo-500/20 bg-indigo-500/[0.03]">
                <p className="text-xs font-black text-indigo-400 uppercase tracking-[0.2em] mb-4">Estimated Yearly Revenue</p>
                <h2 className="text-6xl font-black text-white mb-2">${yearlyRevenue}</h2>
                <p className="text-slate-400 text-sm italic">Potential annual earnings</p>
              </div>

              <div className="glass-panel p-8 border-white/5 text-center">
                <h4 className="font-bold text-white mb-4 flex items-center justify-center gap-2">
                  <BarChart3 size={18} className="text-primary" /> Scale Your Income
                </h4>
                <p className="text-sm text-slate-500 mb-6 leading-relaxed">
                  The Blueprint Academy teaches you how to target high-CPC keywords to 10x these numbers.
                </p>
                <Link href="/guides/niche-selection" className="text-primary font-bold text-sm uppercase tracking-widest hover:underline">
                  Learn Niche Selection →
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

import Link from 'next/link';
