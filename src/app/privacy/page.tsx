export default function PrivacyPage() {
  return (
    <div className="container py-20">
      <article className="max-w-3xl mx-auto prose prose-slate">
        <h1 className="text-4xl font-bold mb-8">Privacy Policy</h1>
        <p className="text-muted italic mb-8">Last Updated: May 2026</p>

        <section className="mb-12">
          <h2 className="text-2xl font-bold mb-4">1. Introduction</h2>
          <p>
            At AdSense Blueprint Academy, we are committed to protecting your privacy. This Privacy Policy explains how we collect, use, and safeguard your information when you visit our website and use our educational resources.
          </p>
        </section>

        <section className="mb-12">
          <h2 className="text-2xl font-bold mb-4">2. Information Collection</h2>
          <p>
            We may collect information you provide directly, such as when you subscribe to our newsletter or use our interactive tools. This may include your name, email address, and website URL. We also automatically collect certain technical data via cookies and server logs.
          </p>
        </section>

        <section className="mb-12">
          <h2 className="text-2xl font-bold mb-4">3. Use of Cookies and Advertising</h2>
          <p>
            This site uses Google AdSense to serve advertisements. Google and third-party vendors use cookies to serve ads based on your prior visits to this website or other websites. Google's use of advertising cookies enables it and its partners to serve ads to you based on your visit to this site and/or other sites on the Internet.
          </p>
          <p>
            You may opt out of personalized advertising by visiting <a href="https://www.google.com/settings/ads" className="text-primary hover:underline">Ads Settings</a>.
          </p>
        </section>

        <section className="mb-12">
          <h2 className="text-2xl font-bold mb-4">4. Data Protection</h2>
          <p>
            We implement reasonable security measures to protect your personal information from unauthorized access, alteration, or disclosure. However, no method of transmission over the internet is 100% secure.
          </p>
        </section>

        <section className="mb-12">
          <h2 className="text-2xl font-bold mb-4">5. Contact Us</h2>
          <p>
            If you have any questions regarding this Privacy Policy, please contact us at privacy@adsenseacademy.com.
          </p>
        </section>
      </article>
    </div>
  );
}
