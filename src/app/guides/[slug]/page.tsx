import Link from "next/link";
import { ChevronLeft, Calendar, User, Clock, CheckCircle2, AlertTriangle, Lightbulb } from "lucide-react";

const guidesData: Record<string, any> = {
  "niche-selection": {
    title: "The Niche Selection Matrix: High CPM vs. Low Competition",
    author: "Brandon Lacoste",
    date: "May 2026",
    readTime: "12 min read",
    content: `
      <h2>The Foundation of AdSense Wealth</h2>
      <p>Before you write a single word, you must understand that not all niches are created equal. In the world of AdSense, you are an information publisher, and advertisers are your customers. If advertisers aren't interested in your audience, your CPC (Cost Per Click) will be pennies.</p>
      
      <div class="bg-indigo-500/5 border border-indigo-500/20 p-6 rounded-xl my-8">
        <h4 class="text-white font-bold flex items-center gap-2 mb-2"><Lightbulb size="18" /> The Pro Strategy</h4>
        <p class="text-sm text-slate-400">Don't chase high-volume keywords with zero commercial intent. Focus on "Problem/Solution" keywords where users are looking for a product or service.</p>
      </div>

      <h3>1. High Advertiser Demand Categories</h3>
      <p>Advertisers pay the most for audiences in these categories because the "Customer Lifetime Value" is high:</p>
      <ul>
        <li><strong>Insurance:</strong> Car, Home, Life, Health.</li>
        <li><strong>Finance:</strong> Mortgages, Loans, Credit Cards, Investing.</li>
        <li><strong>Software:</strong> SaaS, Hosting, Enterprise Security.</li>
        <li><strong>Legal:</strong> Personal Injury, Corporate Law, Intellectual Property.</li>
      </ul>

      <h3>2. Avoiding the "Generalist" Trap</h3>
      <p>Google loves specialists. If you build a site about "Technology", you are competing with The Verge. If you build a site about "Cybersecurity for Remote Freelancers", you are an authority.</p>
    `
  },
  "content-strategy": {
    title: "The 1000-Word Rule: Building High-Authority Content",
    author: "Brandon Lacoste",
    date: "May 2026",
    readTime: "15 min read",
    content: `
      <h2>The End of Thin Content</h2>
      <p>Google's HCU (Helpful Content Update) destroyed millions of thin sites. To get approved in 2026, your content must be <strong>Comprehensive, Unique, and Helpful.</strong></p>
      
      <h3>The "Pillar & Cluster" Model</h3>
      <p>Organize your content into "Pillar Posts" (2,500+ words) and "Cluster Posts" (1,000+ words). This shows Google that you have depth on a topic.</p>

      <h3>Anatomy of an Approved Post:</h3>
      <ul>
        <li><strong>Magnetic Header:</strong> An H1 that answers a specific user intent.</li>
        <li><strong>The 100-Word Hook:</strong> Answer the user's primary question in the first paragraph.</li>
        <li><strong>Sub-Headers (H2/H3):</strong> Every 300 words to improve readability.</li>
        <li><strong>Data & Screenshots:</strong> Show, don't just tell. Original visuals are a massive trust signal.</li>
      </ul>
    `
  },
  "site-speed": {
    title: "Site Speed Mastery: Sub-Second Load Times",
    author: "Brandon Lacoste",
    date: "May 2026",
    readTime: "15 min read",
    content: `
      <h2>Speed is a Ranking Factor</h2>
      <p>If your site takes more than 3 seconds to load, you lose 40% of your visitors. Google's AdSense reviewers check your "Core Web Vitals" before approval.</p>
      
      <h3>Key Performance Metrics:</h3>
      <ul>
        <li><strong>LCP (Largest Contentful Paint):</strong> Under 2.5s.</li>
        <li><strong>FID (First Input Delay):</strong> Under 100ms.</li>
        <li><strong>CLS (Cumulative Layout Shift):</strong> Under 0.1.</li>
      </ul>

      <h3>How to Optimize:</h3>
      <p>Use Next.js Image components, minimize third-party scripts, and ensure you're using a global CDN like Vercel or Cloudflare.</p>
    `
  },
  "mobile-ux": {
    title: "Mobile-First UX: Optimizing for the 70%",
    author: "Brandon Lacoste",
    date: "May 2026",
    readTime: "10 min read",
    content: `
      <h2>The Mobile Era</h2>
      <p>Google indexes the mobile version of your site first. If your mobile layout is broken, you will be rejected for "Site Navigation Issues".</p>
      
      <h3>Mobile Checklist:</h3>
      <ul>
        <li><strong>Clickable Targets:</strong> Buttons should be at least 48x48px.</li>
        <li><strong>Font Size:</strong> Minimum 16px for body text.</li>
        <li><strong>Horizontal Scroll:</strong> Eliminate it entirely.</li>
      </ul>
    `
  },
  "compliance": {
    title: "Policy Compliance: Avoiding the Rejection Loop",
    author: "Brandon Lacoste",
    date: "May 2026",
    readTime: "12 min read",
    content: `
      <h2>The AdSense Program Policies</h2>
      <p>Google is extremely strict about their policies. Even a small violation can lead to a permanent account ban.</p>
      
      <h3>Common Rejection Reasons:</h3>
      <ul>
        <li><strong>Copyright Infringement:</strong> Never use images or text that aren't yours.</li>
        <li><strong>Illegal Content:</strong> Gambling, drugs, or adult content are strictly forbidden.</li>
        <li><strong>Deceptive Navigation:</strong> Hidden links or misleading buttons.</li>
      </ul>
    `
  },
  "ad-placement": {
    title: "Ad Placement Logic: Maximize Revenue, Keep the Users",
    author: "Brandon Lacoste",
    date: "May 2026",
    readTime: "18 min read",
    content: `
      <h2>The Balance of Power</h2>
      <p>Putting too many ads on a page will kill your user experience and get you banned. Too few, and you're leaving money on the table.</p>
      
      <h3>The "Above the Fold" Rule:</h3>
      <p>At least 50% of the screen "above the fold" should be original content, not ads.</p>

      <h3>High-Performance Slots:</h3>
      <ul>
        <li><strong>In-Article:</strong> Every 4-5 paragraphs.</li>
        <li><strong>Anchor Ads:</strong> The sticky banner at the bottom of mobile.</li>
        <li><strong>Sidebar:</strong> Great for desktop, hidden on mobile.</li>
      </ul>
    `
  }
};

export default async function GuidePage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const guide = guidesData[slug];

  if (!guide) return <div className="container py-20">Guide not found.</div>;

  return (
    <div className="relative min-h-screen py-24">
      <div className="glow-spot glow-primary opacity-30" />
      
      <div className="container relative z-10">
        <div className="max-w-4xl mx-auto">
          <Link href="/guides" className="inline-flex items-center gap-2 text-primary font-bold mb-12 hover:-translate-x-1 transition-transform uppercase tracking-widest text-xs">
            <ChevronLeft size={16} />
            Back to Curriculum
          </Link>
          
          <header className="mb-16">
            <h1 className="text-5xl md:text-6xl font-black text-white mb-8 leading-[1.1] gradient-text">
              {guide.title}
            </h1>
            <div className="flex flex-wrap gap-8 text-sm text-slate-500 font-bold uppercase tracking-widest">
              <div className="flex items-center gap-2"><User size={16} className="text-primary" /> {guide.author}</div>
              <div className="flex items-center gap-2"><Calendar size={16} className="text-primary" /> {guide.date}</div>
              <div className="flex items-center gap-2"><Clock size={16} className="text-primary" /> {guide.readTime}</div>
            </div>
          </header>

          <div className="glass-panel p-12 border-white/5 mb-16 shadow-2xl">
            <div 
              className="prose prose-invert prose-slate lg:prose-xl max-w-none 
                prose-headings:text-white prose-headings:font-black prose-headings:tracking-tight
                prose-p:text-slate-400 prose-p:leading-relaxed
                prose-li:text-slate-400 prose-strong:text-white"
              dangerouslySetInnerHTML={{ __html: guide.content }}
            />
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-20">
            <div className="glass-card p-8 border-emerald-500/20 bg-emerald-500/[0.02]">
              <div className="flex items-center gap-4 mb-6 text-emerald-400">
                <CheckCircle2 size={24} />
                <h3 className="text-xl font-bold text-white">The Academy Standard</h3>
              </div>
              <p className="text-sm text-slate-400 leading-relaxed mb-6">
                Following this guide ensures your site meets the 2026 quality standards for elite publishers.
              </p>
              <div className="flex items-center gap-2 text-emerald-400 text-xs font-black uppercase tracking-widest">
                <ShieldCheck size={14} />
                Verified Blueprint
              </div>
            </div>

            <div className="glass-card p-8 border-amber-500/20 bg-amber-500/[0.02]">
              <div className="flex items-center gap-4 mb-6 text-amber-400">
                <AlertTriangle size={24} />
                <h3 className="text-xl font-bold text-white">Common Pitfall</h3>
              </div>
              <p className="text-sm text-slate-400 leading-relaxed">
                Many publishers skip this step and receive the "Low Value Content" flag. Do not rush your content architecture.
              </p>
            </div>
          </div>

          {/* Ad Slot */}
          <div className="ad-slot-premium mb-20">
            Academy Partner Spotlight
          </div>

          <div className="text-center p-16 glass-panel border-primary/20 bg-primary/[0.02]">
            <h3 className="text-3xl font-black mb-4 text-white">Ready for the Next Module?</h3>
            <p className="text-slate-400 mb-10 max-w-md mx-auto">Mastering the foundation is just the beginning. Continue your journey to monetization mastery.</p>
            <Link href="/guides" className="btn-premium">
              Return to Curriculum
              <ArrowRight size={18} />
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
