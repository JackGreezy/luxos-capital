'use client';

import Link from 'next/link';

export default function PrivacyPage() {
  return (
    <>
      {/* Hero */}
      <section className="relative min-h-[50vh] flex items-end">
        <div className="absolute inset-0">
          <img 
            src="/images/privacy-hero/image.webp" 
            alt="Privacy"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black via-black/70 to-black/40" />
          <div className="absolute inset-0 bg-gradient-to-r from-black/80 via-transparent to-transparent" />
        </div>
        
        <div className="relative z-10 max-w-7xl mx-auto px-6 pb-16 lg:pb-24 pt-32">
          <div className="max-w-2xl">
            <div className="w-12 h-px bg-[#c9a961] mb-6" />
            <h1 className="text-4xl lg:text-6xl font-light text-white leading-[1.05] mb-4">
              Privacy <span className="font-semibold italic">Policy</span>
            </h1>
            <p className="text-white/60 text-sm uppercase tracking-[0.2em]">
              Last updated: February 2025
            </p>
          </div>
        </div>
      </section>

      {/* Content */}
      <section className="bg-white py-20 lg:py-28">
        <div className="max-w-3xl mx-auto px-6">
          <p className="text-gray-600 leading-relaxed mb-16">
            Luxos Capital (&quot;we,&quot; &quot;us,&quot; or &quot;our&quot;) is committed to protecting your privacy. 
            This Privacy Policy explains how we collect, use, disclose, and safeguard your information when you 
            visit our website or engage with our investment services.
          </p>

          {[
            {
              title: 'Information We Collect',
              content: [
                'We may collect personal information that you voluntarily provide when you contact us, request information about investment opportunities, subscribe to our communications, or complete investor qualification forms. This may include your name, email address, phone number, mailing address, and financial or accreditation-related information as required for compliance and investor relations.',
                'We automatically collect certain information when you visit our website, including your IP address, browser type, device information, and usage data through cookies and similar technologies.'
              ]
            },
            {
              title: 'How We Use Your Information',
              content: [
                'We use the information we collect to respond to your inquiries, provide information about investment opportunities, process and administer investments, comply with legal and regulatory obligations, send relevant updates and marketing communications (where you have consented), and improve our website and services.'
              ]
            },
            {
              title: 'Disclosure of Information',
              content: [
                'We may share your information with service providers who assist us in operating our business (such as legal, accounting, or technology providers), as required by law or to protect our rights, or in connection with a merger, acquisition, or sale of assets. We do not sell your personal information to third parties.'
              ]
            },
            {
              title: 'Data Security',
              content: [
                'We implement appropriate technical and organizational measures to protect your personal information against unauthorized access, alteration, disclosure, or destruction. However, no method of transmission over the Internet or electronic storage is completely secure.'
              ]
            },
            {
              title: 'Your Rights',
              content: [
                'Depending on your location, you may have the right to access, correct, or delete your personal information, object to or restrict certain processing, or data portability. To exercise these rights or ask questions about our privacy practices, please contact us using the information below.'
              ]
            },
            {
              title: 'Cookies and Tracking',
              content: [
                'Our website may use cookies and similar technologies to enhance your experience, analyze site traffic, and personalize content. You can adjust your browser settings to refuse cookies, though some features of the site may not function properly.'
              ]
            },
            {
              title: 'Changes to This Policy',
              content: [
                'We may update this Privacy Policy from time to time. We will post the revised policy on this page and update the &quot;Last updated&quot; date. We encourage you to review this policy periodically.'
              ]
            },
            {
              title: 'Contact Us',
              content: [
                'If you have questions about this Privacy Policy or our privacy practices, please contact us at investors@luxoscapital.com or at our office address listed on our Contact page.'
              ]
            }
          ].map((section, index) => (
            <div key={index} className="mb-14">
              <h2 className="text-2xl font-light text-gray-900 mb-6 border-l-2 border-[#c9a961] pl-6">
                {section.title}
              </h2>
              <div className="space-y-4">
                {section.content.map((paragraph, pIndex) => (
                  <p key={pIndex} className="text-gray-600 leading-relaxed">
                    {paragraph}
                  </p>
                ))}
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Back Link */}
      <section className="bg-[#0a0a0a] py-16">
        <div className="max-w-7xl mx-auto px-6">
          <Link 
            href="/contact" 
            className="inline-flex items-center gap-3 text-[#c9a961] text-sm uppercase tracking-[0.15em] font-medium hover:text-white transition-colors group"
          >
            <span className="group-hover:underline">Contact Us</span>
            <span className="w-6 h-px bg-[#c9a961] group-hover:w-10 transition-all duration-300" />
          </Link>
        </div>
      </section>
    </>
  );
}
