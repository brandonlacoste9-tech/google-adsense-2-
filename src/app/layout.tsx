import type { Metadata } from "next";
import "./globals.css";
import Link from "next/link";

export const metadata: Metadata = {
  title: "AdSense Blueprint Academy | Master Google AdSense Approval",
  description: "The ultimate guide to getting your website approved for Google AdSense. Step-by-step tutorials, checklists, and expert strategies for digital publishers.",
  keywords: ["google adsense", "adsense approval", "monetization guide", "blogging for money", "adsense tutorial"],
  other: {
    "google-adsense-account": "ca-pub-4276130467303652"
  }
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <script 
          async 
          src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-4276130467303652"
          crossOrigin="anonymous"
        ></script>
      </head>
      <body>
        <nav className="border-b border-border bg-white/80 backdrop-blur-md sticky top-0 z-50">
          <div className="container py-4 flex justify-between items-center">
            <Link href="/" className="flex items-center gap-2">
              <div className="w-10 h-10 bg-primary rounded-lg flex items-center justify-center text-white font-bold text-xl">
                A
              </div>
              <div className="leading-tight">
                <span className="block font-bold text-lg text-primary">AdSense</span>
                <span className="block text-xs font-semibold text-muted uppercase tracking-wider">Blueprint Academy</span>
              </div>
            </Link>
            <div className="flex gap-6 text-sm font-semibold">
              <Link href="/" className="hover:text-primary">Home</Link>
              <Link href="/guides" className="hover:text-primary">Guides</Link>
              <Link href="/checklist" className="hover:text-primary">Checklist</Link>
              <Link href="/about" className="hover:text-primary">About</Link>
            </div>
          </div>
        </nav>

        <main>{children}</main>

        <footer className="bg-slate-900 text-slate-400 py-16 mt-20">
          <div className="container">
            <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-12">
              <div className="col-span-2">
                <div className="flex items-center gap-2 mb-6">
                  <div className="w-8 h-8 bg-primary rounded flex items-center justify-center text-white font-bold">
                    A
                  </div>
                  <span className="font-bold text-white text-lg">AdSense Academy</span>
                </div>
                <p className="max-w-xs leading-relaxed">
                  Empowering digital creators with the knowledge and tools to achieve financial independence through high-quality publishing.
                </p>
              </div>
              <div>
                <h4 className="text-white font-bold mb-4 uppercase text-xs tracking-widest">Resources</h4>
                <ul className="space-y-2 text-sm">
                  <li><Link href="/" className="hover:text-white">Success Stories</Link></li>
                  <li><Link href="/guides" className="hover:text-white">Learning Paths</Link></li>
                  <li><Link href="/checklist" className="hover:text-white">Readiness Tool</Link></li>
                </ul>
              </div>
              <div>
                <h4 className="text-white font-bold mb-4 uppercase text-xs tracking-widest">Legal</h4>
                <ul className="space-y-2 text-sm">
                  <li><Link href="/privacy" className="hover:text-white">Privacy Policy</Link></li>
                  <li><Link href="/terms" className="hover:text-white">Terms of Use</Link></li>
                  <li><Link href="/disclaimer" className="hover:text-white">Disclaimer</Link></li>
                  <li><Link href="/contact" className="hover:text-white">Contact Us</Link></li>
                </ul>
              </div>
            </div>
            <div className="border-t border-slate-800 pt-8 flex justify-between items-center text-xs">
              <p>© 2026 AdSense Blueprint Academy. All rights reserved.</p>
              <p>Publisher ID: ca-pub-4276130467303652</p>
            </div>
          </div>
        </footer>
      </body>
    </html>
  );
}
