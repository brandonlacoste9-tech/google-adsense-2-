import Link from "next/link";
import Image from "next/image";
import { CheckCircle, BookOpen, Settings, Layout, Search, BarChart, ArrowRight, Star, ShieldCheck, Zap, Quote, Mail, Bell } from "lucide-react";
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
            </div>
          </div>
        </div>
      </section>

      {/* Success Stories */}
      <section className="py-32 bg-white/[0.02]">
        <div className="container">
          <div className="text-center mb-20">
            <h2 className="text-4xl font-black mb-4 gradient-text">Publisher Success Stories</h2>
            <p className="text-slate-500 max-w-xl mx-auto italic">
              Real publishers. Real income. Real results from the Blueprint Academy.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            <div className="glass-card p-10 relative group">
              <Quote className="absolute top-10 right-10 text-primary opacity-10 group-hover:opacity-30 transition-opacity" size={80} />
              <div className="flex items-start gap-6 relative z-10">
                <div className="w-20 h-20 rounded-2xl overflow-hidden shadow-2xl border-2 border-primary/20 shrink-0">
                  <Image src="/avatar1.png" alt="Student" width={80} height={80} className="w-full h-full object-cover" />
                </div>
                <div>
                  <p className="text-xl text-slate-300 leading-relaxed mb-6 italic">
                    "I was stuck in the 'Low Value Content' rejection loop for 8 months. After taking the Academy's Niche Selection module, my third site was approved in 3 days. My first month revenue was $1,200."
                  </p>
                  <div>
                    <h4 className="text-white font-bold text-lg">Marcus Thorne</h4>
                    <p className="text-xs text-primary font-bold uppercase tracking-widest">TechReviewHub.com (Approved 2026)</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="glass-card p-10 relative group">
              <Quote className="absolute top-10 right-10 text-emerald-500 opacity-10 group-hover:opacity-30 transition-opacity" size={80} />
              <div className="flex items-start gap-6 relative z-10">
                <div className="w-20 h-20 rounded-2xl overflow-hidden shadow-2xl border-2 border-emerald-500/20 shrink-0">
                  <Image src="/avatar2.png" alt="Student" width={80} height={80} className="w-full h-full object-cover" />
                </div>
                <div>
                  <p className="text-xl text-slate-300 leading-relaxed mb-6 italic">
                    "The Profit Calculator alone changed my strategy. I realized I was targeting low-CPM keywords. Switched to the Academy's Finance Blueprint and my CPC tripled overnight."
                  </p>
                  <div>
                    <h4 className="text-white font-bold text-lg">Elena Rossi</h4>
                    <p className="text-xs text-emerald-400 font-bold uppercase tracking-widest">FinStreamGlobal (Approved 2026)</p>
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

      {/* Newsletter */}
      <section className="py-32 relative overflow-hidden">
        <div className="container">
          <div className="glass-panel p-16 border-indigo-500/10 bg-gradient-to-br from-indigo-500/10 via-transparent to-transparent">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <div>
                <div className="w-12 h-12 bg-primary/20 rounded-xl flex items-center justify-center text-primary mb-6">
                  <Bell size={24} className="animate-tada" />
                </div>
                <h2 className="text-4xl font-black text-white mb-4">Master the Algorithm</h2>
                <p className="text-slate-400 text-lg">
                  Get daily monetization updates, high-CPC keyword lists, and approval hacks delivered straight to your inbox.
                </p>
              </div>
              <div className="relative">
                <div className="flex gap-2 p-2 bg-white/5 border border-white/10 rounded-2xl focus-within:border-primary transition-colors">
                  <div className="flex items-center pl-4 text-slate-500">
                    <Mail size={20} />
                  </div>
                  <input 
                    type="email" 
                    placeholder="Enter your email" 
                    className="flex-1 bg-transparent border-none outline-none py-4 px-2 text-white"
                  />
                  <button className="btn-premium px-8 rounded-xl">
                    Subscribe
                  </button>
                </div>
                <p className="mt-4 text-[10px] text-slate-600 uppercase tracking-widest font-bold text-center">
                  Join 10,000+ Publishers. No Spam. Only Value.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="py-40 relative">
        <div className="container text-center">
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
