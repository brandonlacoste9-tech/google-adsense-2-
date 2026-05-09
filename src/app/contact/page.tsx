import { Mail, MessageSquare, Globe, ArrowRight } from "lucide-react";

export default function ContactPage() {
  return (
    <div className="relative min-h-screen py-32">
      <div className="glow-spot glow-primary opacity-20" />
      
      <div className="container relative z-10">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-20">
            <h1 className="text-6xl font-black mb-6 gradient-text">Get In Touch</h1>
            <p className="text-xl text-slate-400 max-w-2xl mx-auto">
              Have a question about our blueprint or need help with your site audit? Reach out to our team of publishing experts.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12 items-start">
            {/* Contact Info */}
            <div className="lg:col-span-1 space-y-6">
              <div className="glass-card p-8 border-white/5">
                <div className="w-12 h-12 bg-primary/10 rounded-xl flex items-center justify-center text-primary mb-6">
                  <Mail size={24} />
                </div>
                <h4 className="text-white font-bold mb-2">Email Us</h4>
                <p className="text-sm text-slate-400">hello@adsenseacademy.com</p>
              </div>

              <div className="glass-card p-8 border-white/5">
                <div className="w-12 h-12 bg-emerald-500/10 rounded-xl flex items-center justify-center text-emerald-400 mb-6">
                  <MessageSquare size={24} />
                </div>
                <h4 className="text-white font-bold mb-2">Support Hub</h4>
                <p className="text-sm text-slate-400">24/7 Academic Support</p>
              </div>

              <div className="glass-card p-8 border-white/5">
                <div className="w-12 h-12 bg-amber-500/10 rounded-xl flex items-center justify-center text-amber-400 mb-6">
                  <Globe size={24} />
                </div>
                <h4 className="text-white font-bold mb-2">Global HQ</h4>
                <p className="text-sm text-slate-400">Digital-First Operation</p>
              </div>
            </div>

            {/* Contact Form */}
            <div className="lg:col-span-2">
              <div className="glass-panel p-12 border-white/5">
                <form className="space-y-8">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                    <div className="space-y-3">
                      <label className="text-xs font-black text-slate-400 uppercase tracking-widest">Full Name</label>
                      <input 
                        type="text" 
                        className="w-full bg-white/[0.03] border border-white/10 rounded-xl px-4 py-4 text-white focus:ring-2 focus:ring-primary outline-none transition-all"
                        placeholder="John Doe"
                      />
                    </div>
                    <div className="space-y-3">
                      <label className="text-xs font-black text-slate-400 uppercase tracking-widest">Email Address</label>
                      <input 
                        type="email" 
                        className="w-full bg-white/[0.03] border border-white/10 rounded-xl px-4 py-4 text-white focus:ring-2 focus:ring-primary outline-none transition-all"
                        placeholder="john@example.com"
                      />
                    </div>
                  </div>
                  <div className="space-y-3">
                    <label className="text-xs font-black text-slate-400 uppercase tracking-widest">Subject</label>
                    <input 
                      type="text" 
                      className="w-full bg-white/[0.03] border border-white/10 rounded-xl px-4 py-4 text-white focus:ring-2 focus:ring-primary outline-none transition-all"
                      placeholder="How can we help?"
                    />
                  </div>
                  <div className="space-y-3">
                    <label className="text-xs font-black text-slate-400 uppercase tracking-widest">Message</label>
                    <textarea 
                      rows={6}
                      className="w-full bg-white/[0.03] border border-white/10 rounded-xl px-4 py-4 text-white focus:ring-2 focus:ring-primary outline-none transition-all resize-none"
                      placeholder="Tell us about your publishing goals..."
                    ></textarea>
                  </div>
                  <button className="btn-premium w-full justify-center group">
                    Send Message
                    <ArrowRight size={20} className="group-hover:translate-x-1 transition-transform" />
                  </button>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
