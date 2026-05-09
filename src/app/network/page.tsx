import { Globe, Shield, Cpu, TrendingUp, ArrowUpRight } from "lucide-react";
import Link from "next/link";

export default function NetworkPage() {
  const sites = [
    {
      name: "CyberSentinel",
      url: "https://google-1-adsense.vercel.app",
      niche: "Cyber Intelligence",
      desc: "Real-time threat monitoring and autonomous security analysis for the decentralized era.",
      icon: Shield,
      color: "text-cyan-400"
    },
    {
      name: "Tech-Lifestyle Blog",
      url: "https://tech-lifestyle-blog.vercel.app",
      niche: "Modern Living",
      desc: "Minimalist editorial exploring the intersection of emerging technology and intentional living.",
      icon: Cpu,
      color: "text-teal-400"
    },
    {
      name: "AdSense Academy",
      url: "/",
      niche: "Digital Publishing",
      desc: "The gold standard in monetization training and authority site architecture.",
      icon: TrendingUp,
      color: "text-indigo-400"
    },
    {
      name: "Capital Pulse",
      url: "https://google-adsense-3.vercel.app",
      niche: "Finance & Markets",
      desc: "Institutional-grade financial news and market alpha for the modern retail investor.",
      icon: Globe,
      color: "text-amber-400"
    },
    {
      name: "Legal Nexus",
      url: "https://google-adsense-4.vercel.app",
      niche: "Legal & Compliance",
      desc: "Premier repository for corporate law, intellectual property protection, and regulatory intelligence.",
      icon: Shield,
      color: "text-slate-300"
    }
  ];

  return (
    <div className="relative min-h-screen py-32">
      <div className="glow-spot glow-primary opacity-20" />
      
      <div className="container relative z-10 text-center">
        <div className="max-w-3xl mx-auto mb-20">
          <h1 className="text-6xl font-black mb-6 gradient-text uppercase tracking-tighter">The Publisher Network</h1>
          <p className="text-xl text-slate-400 leading-relaxed">
            Capital Pulse Media Group operates a network of high-authority digital properties across critical market niches.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto">
          {sites.map((site, i) => (
            <a 
              key={i} 
              href={site.url} 
              target="_blank" 
              rel="noopener noreferrer"
              className="glass-panel p-10 text-left group hover:scale-[1.02] transition-all duration-500"
            >
              <div className="flex justify-between items-start mb-8">
                <div className={`w-14 h-14 bg-white/5 rounded-2xl flex items-center justify-center ${site.color}`}>
                  <site.icon size={28} />
                </div>
                <ArrowUpRight size={20} className="text-slate-600 group-hover:text-white transition-colors" />
              </div>
              <h3 className="text-2xl font-black text-white mb-2">{site.name}</h3>
              <p className="text-[10px] font-black uppercase tracking-[0.2em] text-slate-500 mb-6">{site.niche}</p>
              <p className="text-sm text-slate-400 leading-relaxed">
                {site.desc}
              </p>
            </a>
          ))}
        </div>

        <div className="mt-32 p-12 glass-card border-white/5 inline-block mx-auto">
          <p className="text-xs font-black text-slate-500 uppercase tracking-[0.3em]">Institutional Verification</p>
          <div className="mt-4 flex gap-8 grayscale opacity-30 hover:grayscale-0 hover:opacity-100 transition-all cursor-default">
            <span className="font-black text-white italic">GOOGLE ADSENSE VERIFIED</span>
            <span className="font-black text-white italic">SSL SECURE ARCHITECTURE</span>
            <span className="font-black text-white italic">E-E-A-T CERTIFIED</span>
          </div>
        </div>
      </div>
    </div>
  );
}
