import Link from "next/link";
import { BookOpen, Zap, ShieldCheck, Search, Layout, MousePointer2, ArrowRight } from "lucide-react";

export default function GuidesIndex() {
  const categories = [
    {
      title: "The Technical Foundation",
      icon: Layout,
      guides: [
        { title: "Site Speed Mastery", slug: "site-speed", desc: "How to achieve sub-second load times for AdSense.", duration: "15 min" },
        { title: "Mobile-First UX", slug: "mobile-ux", desc: "Optimizing for the 70% of traffic that uses a phone.", duration: "10 min" },
        { title: "Advanced SEO Indexing", slug: "advanced-seo", desc: "Forcing Google to discover your content.", duration: "20 min" },
      ]
    },
    {
      title: "Content Strategy",
      icon: BookOpen,
      guides: [
        { title: "The Niche Selection Matrix", slug: "niche-selection", desc: "Choosing high-CPM topics.", duration: "12 min" },
        { title: "The 1000-Word Rule", slug: "content-strategy", desc: "Writing content Google can't reject.", duration: "15 min" },
        { title: "Keyword Architecture", slug: "keyword-research", desc: "Building semantic clusters.", duration: "25 min" },
      ]
    },
    {
      title: "Monetization Mastery",
      icon: Zap,
      guides: [
        { title: "Ad Placement Logic", slug: "ad-placement", desc: "Max revenue without hurting UX.", duration: "18 min" },
        { title: "Policy Compliance", slug: "compliance", desc: "Avoiding the dreaded 'Policy Violation'.", duration: "12 min" },
        { title: "The Profit Shield", slug: "profit-shield", desc: "Protecting your AdSense account.", duration: "18 min" },
      ]
    }
  ];

  return (
    <div className="relative min-h-screen pt-32 pb-24">
      <div className="glow-spot glow-primary" />
      
      <div className="container relative z-10">
        <div className="max-w-3xl mb-20">
          <h1 className="text-6xl font-black mb-6 gradient-text">Academy Curriculum</h1>
          <p className="text-xl text-slate-400 leading-relaxed">
            The most comprehensive learning path for digital publishers. Follow these modules in order to achieve a 98% approval probability on your first application.
          </p>
        </div>

        <div className="space-y-24">
          {categories.map((cat, i) => (
            <section key={i}>
              <div className="flex items-center gap-4 mb-10">
                <div className="w-12 h-12 bg-primary/10 rounded-xl flex items-center justify-center text-primary">
                  <cat.icon size={24} />
                </div>
                <h2 className="text-3xl font-bold text-white">{cat.title}</h2>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {cat.guides.map((guide, j) => (
                  <Link key={j} href={`/guides/${guide.slug}`} className="glass-card p-8 group flex flex-col h-full">
                    <div className="flex justify-between items-start mb-6">
                      <span className="text-[10px] font-black uppercase tracking-widest text-indigo-400 bg-indigo-500/10 px-2 py-1 rounded">
                        {guide.duration}
                      </span>
                      <ArrowRight size={16} className="text-slate-600 group-hover:text-primary transition-colors group-hover:translate-x-1" />
                    </div>
                    <h3 className="text-xl font-bold mb-4 text-white group-hover:text-primary transition-colors">
                      {guide.title}
                    </h3>
                    <p className="text-sm text-slate-500 leading-relaxed flex-grow">
                      {guide.desc}
                    </p>
                    <div className="mt-8 pt-6 border-t border-white/5 text-[10px] font-bold uppercase tracking-widest text-slate-600 group-hover:text-slate-400 transition-colors">
                      Start Lesson
                    </div>
                  </Link>
                ))}
              </div>
            </section>
          ))}
        </div>
      </div>
    </div>
  );
}
