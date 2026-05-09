import Link from "next/link";
import Image from "next/image";
import { CheckCircle, BookOpen, Settings, Layout, Search, BarChart, ArrowRight, Star, ShieldCheck, Zap } from "lucide-react";
import AdSlot from "@/components/AdSlot";

export default function Home() {
  return (
    <div className="relative min-h-screen page-enter">
      {/* Background Decor */}
      <div className="glow-spot glow-primary" />
      <div className="glow-spot glow-secondary" />

      {/* Top Leaderboard Ad */}
      <div className="container pt-8">
        <AdSlot type="leaderboard" />
      </div>

      {/* Hero Section */}
      <section className="pt-20 pb-24 overflow-hidden">
        <div className="container">
          <div className="flex flex-col lg:flex-row items-center gap-16">
            <div className="flex-1 text-center lg:text-left relative z-10">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-indigo-500/10 border border-indigo-500/20 text-indigo-400 text-xs font-bold uppercase tracking-widest mb-8 mx-auto lg:mx-0">
                <Star size={12} className="fill-indigo-400" />
                The Gold Standard in AdSense Training
              </div>
              <h1 className="text-6xl md:text-7xl font-black mb-8 leading-[1.05] gradient-text">
                Monetize Your <br />Passion with <br /><span className="text-primary italic">Expert Precision.</span>
              </h1>
              <p className="text-xl text-slate-400 mb-10 leading-relaxed max-w-xl mx-auto lg:mx-0">
                The AdSense Blueprint Academy is an elite masterclass designed for serious publishers. We turn "Low Value Content" rejections into high-CPM approvals through data-driven architectural standards.
              </p>
              <div className="flex flex-wrap justify-center lg:justify-start gap-4">
                <Link href="/checklist" className="btn-premium group">
                  Start Site Audit
                  <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
                </Link>
                <Link href="/calculator" className="px-8 py-4 rounded-xl border border-white/10 hover:bg-white/5 transition-all font-bold">
                  Profit Calculator
                </Link>
              </div>
              
              <div className="mt-12 flex justify-center lg:justify-start items-center gap-8 text-slate-500 border-t border-white/5 pt-8">
                <div className="flex flex-col">
                  <span className="text-white font-bold text-2xl">98%</span>
                  <span className="text-xs uppercase tracking-tighter">Success Rate</span>
                </div>
                <div className="w-px h-10 bg-white/10" />
                <div className="flex flex-col">
                  <span className="text-white font-bold text-2xl">48h</span>
                  <span className="text-xs uppercase tracking-tighter">Avg. Approval</span>
                </div>
                <div className="w-px h-10 bg-white/10" />
                <div className="flex flex-col">
                  <span className="text-white font-bold text-2xl">10k+</span>
                  <span className="text-xs uppercase tracking-tighter">Students</span>
                </div>
              </div>
            </div>

            <div className="flex-1 relative w-full max-w-[600px]">
              <div className="absolute inset-0 bg-indigo-500/20 blur-[100px] rounded-full" />
              <div className="relative glass-panel p-4 border-white/10 shadow-2xl rotate-2">
                <Image 
                  src="/hero_graphic.png" 
                  alt="AdSense Academy Hero" 
                  width={800} 
                  height={800} 
                  className="rounded-xl shadow-inner w-full h-auto"
                />
              </div>
              <div className="absolute -bottom-6 -left-6 glass-card p-6 border-emerald-500/30 animate-bounce-slow">
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 rounded-full bg-emerald-500/20 flex items-center justify-center text-emerald-400">
                    <Zap size={24} />
                  </div>
                  <div>
                    <p className="text-xs text-slate-400 uppercase font-bold tracking-widest">Revenue Lift</p>
                    <p className="text-xl font-black text-white">+340%</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Middle Banner Ad */}
      <div className="container my-12">
        <AdSlot type="leaderboard" />
      </div>

      {/* The Pillars */}
      <section className="py-32 relative">
        <div className="container">
          <div className="text-center mb-20">
            <h2 className="text-4xl font-black mb-4 gradient-text">The Architectural Standards</h2>
            <p className="text-slate-500 max-w-xl mx-auto">
              Our framework is built on four non-negotiable pillars that ensure your site survives every Google update.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              { icon: ShieldCheck, title: "EEAT Authority", desc: "Establishing Experience, Expertise, Authoritativeness, and Trust." },
              { icon: Layout, title: "Core Web Vitals", desc: "Technical optimization for sub-second load times and perfect UX." },
              { icon: BookOpen, title: "Pillar Content", desc: "Long-form semantic clusters that dominate your niche authority." },
              { icon: Zap, title: "Monetization UX", desc: "Strategic ad placement that maximizes CPM without hurting UX." }
            ].map((pillar, i) => (
              <div key={i} className="glass-card p-8 group">
                <div className="w-14 h-14 bg-white/5 rounded-2xl flex items-center justify-center mb-6 group-hover:bg-primary/20 transition-colors">
                  <pillar.icon size={28} className="text-slate-400 group-hover:text-primary transition-colors" />
                </div>
                <h3 className="text-xl font-bold mb-3 text-white">{pillar.title}</h3>
                <p className="text-sm text-slate-500 leading-relaxed">{pillar.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="py-40 relative overflow-hidden">
        <div className="absolute inset-0 bg-primary/10 -z-10" />
        <div className="container text-center relative z-10">
          <div className="max-w-3xl mx-auto glass-panel p-16 border-white/5 bg-white/[0.02]">
            <h2 className="text-5xl font-black mb-8 leading-tight text-white">Join the Elite <br /><span className="text-primary">1% of Publishers.</span></h2>
            <p className="text-lg text-slate-400 mb-12">
              Stop guessing. Start building. The Blueprint Academy is your final stop on the road to financial independence through content.
            </p>
            <Link href="/checklist" className="btn-premium text-xl px-12 py-5 rounded-2xl">
              Get Started for Free
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
