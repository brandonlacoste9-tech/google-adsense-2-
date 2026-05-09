import Link from "next/link";

export default function AboutPage() {
  return (
    <div className="container py-24">
      <div className="max-w-3xl mx-auto">
        <h1 className="text-4xl font-bold mb-8">About the Academy</h1>
        <div className="prose prose-slate lg:prose-lg leading-relaxed text-slate-600">
          <p>
            The <strong>AdSense Blueprint Academy</strong> was founded with a singular mission: to simplify the journey of digital publishing and monetization.
          </p>
          <p>
            In an era where "rejection for low-value content" has become the standard response for many aspiring bloggers, we recognized the need for a transparent, step-by-step roadmap that goes beyond the surface-level advice found on forums.
          </p>
          
          <h2 className="text-2xl font-bold text-slate-900 mt-12 mb-6">Our Philosophy</h2>
          <p>
            We believe that Google AdSense approval isn't a game of luck. It is a reward for building a high-quality, user-centric digital asset. We teach our students to stop building "for AdSense" and start building for their audience—knowing that approval is the natural byproduct of quality.
          </p>

          <h2 className="text-2xl font-bold text-slate-900 mt-12 mb-6">What We Teach</h2>
          <ul className="space-y-4 list-disc pl-6">
            <li><strong>Technical Mastery:</strong> Ensuring your site is fast, secure, and semantically sound.</li>
            <li><strong>Content Strategy:</strong> How to write articles that Google loves and users share.</li>
            <li><strong>UX Design:</strong> Creating intuitive layouts that maximize engagement and ad viewability.</li>
            <li><strong>Compliance:</strong> Navigating the complex landscape of legal requirements and program policies.</li>
          </ul>

          <div className="mt-16 p-8 bg-slate-50 rounded-2xl border border-border">
            <h3 className="text-xl font-bold text-slate-900 mb-4 text-center">Ready to join the ranks of successful publishers?</h3>
            <div className="flex justify-center">
              <Link href="/checklist" className="btn-primary">
                Start Your Site Audit Now
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
