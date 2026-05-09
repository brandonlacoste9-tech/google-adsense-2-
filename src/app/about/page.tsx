import Link from "next/link";
import { ShieldCheck, Target, TrendingUp, Users, ArrowRight } from "lucide-react";

export default function AboutPage() {
  return (
    <div className="relative min-h-screen py-32">
      <div className="glow-spot glow-primary opacity-20" />
      
      <div className="container relative z-10">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-20">
            <h1 className="text-6xl font-black mb-6 gradient-text">Our Mission</h1>
            <p className="text-xl text-slate-400 leading-relaxed max-w-2xl mx-auto">
              The AdSense Blueprint Academy was founded to bridge the gap between amateur blogging and professional digital publishing.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 mb-24">
            <div className="glass-panel p-10 border-white/5">
              <div className="w-12 h-12 bg-primary/10 rounded-xl flex items-center justify-center text-primary mb-6">
                <Target size={24} />
              </div>
              <h3 className="text-2xl font-bold mb-4 text-white">The Quality Mandate</h3>
              <p className="text-slate-400 leading-relaxed">
                In an era where "rejection for low-value content" is the standard response, we provide the architectural blueprints that ensure your site is built on a foundation of genuine value.
              </p>
            </div>

            <div className="glass-panel p-10 border-white/5">
              <div className="w-12 h-12 bg-emerald-500/10 rounded-xl flex items-center justify-center text-emerald-400 mb-6">
                <TrendingUp size={24} />
              </div>
              <h3 className="text-2xl font-bold mb-4 text-white">The Profit Catalyst</h3>
              <p className="text-slate-400 leading-relaxed">
                We don't just teach you how to get approved. We teach you how to target the $15+ CPC keywords that turn a hobby into a high-yield digital asset.
              </p>
            </div>
          </div>

          <div className="glass-card p-12 border-white/5 bg-white/[0.02] mb-24">
            <h2 className="text-3xl font-black mb-8 text-white">The Academy Philosophy</h2>
            <div className="prose prose-invert prose-slate lg:prose-lg max-w-none text-slate-400">
              <p>
                We believe that Google AdSense approval isn't a game of luck. It is a reward for building a high-quality, user-centric digital asset. We teach our students to stop building "for AdSense" and start building for their audience—knowing that approval is the natural byproduct of quality.
              </p>
              <p>
                Our team consists of veteran publishers who have collectively managed over 100+ AdSense accounts across dozens of niches. We have seen every rejection reason and built a solution for every one of them.
              </p>
            </div>
          </div>

          <div className="text-center">
            <h3 className="text-2xl font-bold mb-8 text-white">Ready to join the elite?</h3>
            <div className="flex justify-center gap-6">
              <Link href="/checklist" className="btn-premium">
                Audit Your Site
                <ArrowRight size={18} />
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
