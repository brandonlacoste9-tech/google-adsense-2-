import Link from "next/link";
import { CheckCircle, BookOpen, Settings, Layout, Search, BarChart } from "lucide-react";

export default function Home() {
  return (
    <div>
      {/* Hero Section */}
      <section className="bg-white border-b border-border py-24">
        <div className="container">
          <div className="max-w-3xl">
            <span className="badge-success mb-6 inline-block uppercase tracking-wider">
              Updated for 2026
            </span>
            <h1 className="text-5xl font-extrabold text-slate-900 leading-[1.1] mb-6">
              Your Complete Roadmap to <span className="text-primary">Google AdSense</span> Approval
            </h1>
            <p className="text-xl text-slate-600 mb-8 leading-relaxed">
              Stop guessing why your site was rejected. Our step-by-step blueprint walks you through the exact requirements, content standards, and technical settings needed for a successful application.
            </p>
            <div className="flex gap-4">
              <Link href="/checklist" className="btn-primary">
                Check My Site Readiness
              </Link>
              <Link href="/guides" className="px-6 py-3 border border-border rounded-8 font-semibold hover:bg-slate-50 transition-colors">
                Browse Guides
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* The 4 Pillars of Approval */}
      <section className="py-20 bg-slate-50">
        <div className="container">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold mb-4">The 4 Pillars of a Successful Application</h2>
            <p className="text-slate-600 max-w-2xl mx-auto">
              Google doesn't just approve anyone. Your site must excel in these four core areas before you even click "Submit".
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              { icon: BookOpen, title: "High-Quality Content", desc: "Original, helpful, and high-value content that solves user problems." },
              { icon: Layout, title: "UX Architecture", desc: "Clean navigation, mobile responsiveness, and professional layout design." },
              { icon: Settings, title: "Legal Compliance", desc: "Proper Privacy Policy, Terms, and mandatory legal documentation." },
              { icon: CheckCircle, title: "Technical Settings", desc: "Proper SSL, site speed, and ads.txt implementation." }
            ].map((pillar, i) => (
              <div key={i} className="academy-card text-center">
                <div className="w-12 h-12 bg-indigo-100 text-primary rounded-xl flex items-center justify-center mx-auto mb-6">
                  <pillar.icon size={24} />
                </div>
                <h3 className="font-bold text-lg mb-3">{pillar.title}</h3>
                <p className="text-sm text-slate-500 leading-relaxed">{pillar.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Learning Path */}
      <section className="py-24">
        <div className="container">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div>
              <h2 className="text-4xl font-bold mb-8 leading-tight">Mastering the <br />Content Strategy</h2>
              <div className="space-y-8">
                {[
                  { step: "01", title: "Niche Selection", desc: "Choosing a topic with high Advertiser demand and lower competition." },
                  { step: "02", title: "Keyword Research", desc: "Finding the exact questions people are asking in your niche." },
                  { step: "03", title: "The 1000-Word Rule", desc: "Why comprehensive, long-form content is the key to faster approval." }
                ].map((item, i) => (
                  <div key={i} className="flex gap-6">
                    <div className="step-indicator shrink-0">{item.step}</div>
                    <div>
                      <h4 className="font-bold mb-1">{item.title}</h4>
                      <p className="text-slate-500 text-sm">{item.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
              <div className="mt-10">
                <Link href="/guides/content-strategy" className="text-primary font-bold hover:underline">
                  Read Full Strategy →
                </Link>
              </div>
            </div>
            
            <div className="bg-slate-900 rounded-3xl p-10 text-white relative overflow-hidden">
              <div className="absolute top-0 right-0 p-4 opacity-10">
                <BarChart size={200} />
              </div>
              <h3 className="text-2xl font-bold mb-6">Real Publisher Success</h3>
              <p className="text-slate-400 mb-8 italic">
                "I was rejected three times for 'Low Value Content'. After following the Blueprint Academy's content checklist, I was approved in 48 hours."
              </p>
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 rounded-full bg-slate-700" />
                <div>
                  <p className="font-bold">Sarah Jenkins</p>
                  <p className="text-xs text-slate-500">Tech Blogger (Approved 2026)</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Ad Placeholder */}
      <div className="container">
        <div className="ad-slot">
          [ Leaderboard Ad Unit - Displayed to Students ]
        </div>
      </div>

      {/* CTA Section */}
      <section className="py-24 bg-primary text-white">
        <div className="container text-center">
          <h2 className="text-4xl font-bold mb-6">Ready to Start Monetizing?</h2>
          <p className="text-indigo-100 text-lg mb-10 max-w-2xl mx-auto">
            Join thousands of publishers who have turned their passion into a sustainable business using our AdSense approval framework.
          </p>
          <Link href="/checklist" className="bg-white text-primary px-10 py-4 rounded-full font-bold hover:bg-slate-100 transition-all shadow-xl">
            Take the Readiness Test
          </Link>
        </div>
      </section>
    </div>
  );
}
