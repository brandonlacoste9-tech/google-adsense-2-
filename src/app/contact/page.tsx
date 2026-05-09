export default function ContactPage() {
  return (
    <div className="container py-24">
      <div className="max-w-2xl mx-auto">
        <h1 className="text-4xl font-bold mb-6">Contact Us</h1>
        <p className="text-slate-600 mb-12">
          Have a question about our blueprint or need help with your site audit? Reach out to our team of publishing experts.
        </p>

        <form className="space-y-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <label className="block text-sm font-bold text-slate-700 mb-2">Name</label>
              <input 
                type="text" 
                placeholder="Your Name"
                className="w-full px-4 py-3 rounded-lg border border-border focus:ring-2 focus:ring-primary focus:outline-none"
              />
            </div>
            <div>
              <label className="block text-sm font-bold text-slate-700 mb-2">Email</label>
              <input 
                type="email" 
                placeholder="your@email.com"
                className="w-full px-4 py-3 rounded-lg border border-border focus:ring-2 focus:ring-primary focus:outline-none"
              />
            </div>
          </div>
          <div>
            <label className="block text-sm font-bold text-slate-700 mb-2">Subject</label>
            <input 
              type="text" 
              placeholder="How can we help?"
              className="w-full px-4 py-3 rounded-lg border border-border focus:ring-2 focus:ring-primary focus:outline-none"
            />
          </div>
          <div>
            <label className="block text-sm font-bold text-slate-700 mb-2">Message</label>
            <textarea 
              rows={6}
              placeholder="Tell us about your site..."
              className="w-full px-4 py-3 rounded-lg border border-border focus:ring-2 focus:ring-primary focus:outline-none resize-none"
            ></textarea>
          </div>
          <button type="submit" className="w-full btn-primary justify-center text-lg">
            Send Message
          </button>
        </form>

        <div className="mt-20 pt-12 border-t border-border">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 text-sm text-slate-500">
            <div>
              <h4 className="font-bold text-slate-900 mb-4 uppercase tracking-widest text-[10px]">Email Enquiries</h4>
              <p>General: hello@adsenseacademy.com</p>
              <p>Support: support@adsenseacademy.com</p>
            </div>
            <div>
              <h4 className="font-bold text-slate-900 mb-4 uppercase tracking-widest text-[10px]">Follow Our Journey</h4>
              <p>X/Twitter: @AdSenseAcademy</p>
              <p>YouTube: AdSense Blueprint</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
