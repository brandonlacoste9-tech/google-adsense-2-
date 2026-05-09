import Link from "next/link";
import { ChevronLeft, Calendar, User, Clock } from "lucide-react";

const guidesData: Record<string, any> = {
  "niche-selection": {
    title: "The Niche Selection Matrix: High CPM vs. Low Competition",
    author: "Brandon",
    date: "May 2026",
    readTime: "12 min read",
    content: `
      <h2>Why Niche Selection is 50% of Your Success</h2>
      <p>Most beginners fail because they choose a niche that is either too competitive or has zero advertiser demand. In the AdSense world, your niche determines your Cost Per Click (CPC).</p>
      
      <h3>The Golden Triangle of Niches</h3>
      <p>A perfect AdSense niche sits at the intersection of three factors:</p>
      <ul>
        <li><strong>High Advertiser Demand:</strong> Are companies spending money to show up for these keywords?</li>
        <li><strong>Originality:</strong> Can you provide a perspective that isn't already covered by 1,000 other sites?</li>
        <li><strong>Personal Interest:</strong> Can you write 50 articles about this without burning out?</li>
      </ul>

      <h3>Top High-CPM Niches for 2026</h3>
      <p>If you're looking for high revenue, consider these categories:</p>
      <ul>
        <li><strong>Insurance & Finance:</strong> The highest CPCs globally.</li>
        <li><strong>Digital Marketing & SaaS:</strong> High demand from B2B companies.</li>
        <li><strong>Health & Wellness:</strong> Massive consumer interest (but requires high E-E-A-T).</li>
      </ul>
    `
  },
  "content-strategy": {
    title: "The 1000-Word Rule: Writing Content Google Loves",
    author: "Brandon",
    date: "May 2026",
    readTime: "15 min read",
    content: `
      <h2>Quality Over Quantity</h2>
      <p>Google's recent updates have made it clear: thin content is the #1 reason for AdSense rejection. You need "helpful" content that actually solves a user's problem.</p>
      
      <h3>The anatomy of an approved article:</h3>
      <ul>
        <li><strong>Length:</strong> Aim for 1,000+ words per pillar post.</li>
        <li><strong>Formatting:</strong> Use H2/H3 headers, bullet points, and short paragraphs.</li>
        <li><strong>Original Images:</strong> Avoid generic stock photos; use custom graphics or screenshots.</li>
      </ul>
    `
  }
};

export default async function GuidePage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const guide = guidesData[slug];

  if (!guide) return <div className="container py-20">Guide not found.</div>;

  return (
    <div className="container py-20">
      <div className="max-w-3xl mx-auto">
        <Link href="/" className="flex items-center gap-2 text-primary font-bold mb-8 hover:-translate-x-1 transition-transform">
          <ChevronLeft size={20} />
          Back to Academy
        </Link>
        
        <header className="mb-12">
          <h1 className="text-4xl font-extrabold text-slate-900 mb-6 leading-tight">
            {guide.title}
          </h1>
          <div className="flex gap-6 text-sm text-slate-500">
            <div className="flex items-center gap-2"><User size={16} /> {guide.author}</div>
            <div className="flex items-center gap-2"><Calendar size={16} /> {guide.date}</div>
            <div className="flex items-center gap-2"><Clock size={16} /> {guide.readTime}</div>
          </div>
        </header>

        <div className="academy-card p-10 mb-12">
          <div 
            className="prose prose-slate lg:prose-lg max-w-none"
            dangerouslySetInnerHTML={{ __html: guide.content }}
          />
        </div>

        <div className="bg-slate-50 border border-border p-8 rounded-2xl">
          <h3 className="font-bold mb-4">Did this guide help?</h3>
          <p className="text-sm text-slate-600 mb-6">We're constantly updating our blueprint. Subscribe to get notified when we release Guide #3: Technical Perfection.</p>
          <div className="flex gap-2">
            <input type="email" placeholder="your@email.com" className="flex-1 px-4 py-2 rounded border border-border" />
            <button className="btn-primary">Join Academy</button>
          </div>
        </div>
      </div>
    </div>
  );
}
