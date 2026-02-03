'use client';

import Link from 'next/link';

export default function TermsPage() {
  return (
    <>
      {/* Hero */}
      <section className="relative min-h-[50vh] flex items-end">
        <div className="absolute inset-0">
          <img 
            src="/images/terms-hero/image.jpeg" 
            alt="Terms of Service"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black via-black/70 to-black/40" />
          <div className="absolute inset-0 bg-gradient-to-r from-black/80 via-transparent to-transparent" />
        </div>
        
        <div className="relative z-10 max-w-7xl mx-auto px-6 pb-16 lg:pb-24 pt-32">
          <div className="max-w-2xl">
            <div className="w-12 h-px bg-[#c9a961] mb-6" />
            <h1 className="text-4xl lg:text-6xl font-light text-white leading-[1.05] mb-4">
              Terms of <span className="font-semibold italic">Service</span>
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
            Please read these Terms of Service (&quot;Terms&quot;) carefully before using the website and services 
            of Luxos Capital (&quot;we,&quot; &quot;us,&quot; or &quot;our&quot;). By accessing or using our website or services, 
            you agree to be bound by these Terms.
          </p>

          {[
            {
              title: 'Use of Website',
              content: [
                'This website is provided for informational purposes related to our multifamily real estate investment activities. You may use the site only for lawful purposes and in accordance with these Terms. You may not use the site in any way that could damage, disable, or impair the site or interfere with any other party\'s use of the site.'
              ]
            },
            {
              title: 'No Offer or Advice',
              content: [
                'Nothing on this website constitutes an offer to sell or a solicitation of an offer to buy any securities. Investment offerings are made only through formal offering documents (such as a Private Placement Memorandum) and only in jurisdictions where permitted. The information on this site does not constitute investment, legal, or tax advice. You should consult your own advisors before making any investment decision.'
              ]
            },
            {
              title: 'Accredited Investors',
              content: [
                'Certain investment opportunities described on this website may be available only to accredited investors as defined under applicable securities laws. We may require verification of accreditation status before providing access to detailed offering materials.'
              ]
            },
            {
              title: 'Risk Disclosure',
              content: [
                'Real estate and syndication investments involve significant risk, including the potential loss of principal. Past performance is not indicative of future results. Projected returns are estimates and are not guaranteed. You should only invest capital that you can afford to lose and that you will not need during the anticipated hold period.'
              ]
            },
            {
              title: 'Intellectual Property',
              content: [
                'All content on this website, including text, graphics, logos, and images, is the property of Luxos Capital or its licensors and is protected by copyright and other intellectual property laws. You may not reproduce, distribute, or create derivative works without our prior written consent.'
              ]
            },
            {
              title: 'Disclaimer of Warranties',
              content: [
                'This website and its content are provided &quot;as is&quot; without warranties of any kind, either express or implied. We do not warrant that the site will be uninterrupted, error-free, or free of viruses or other harmful components.'
              ]
            },
            {
              title: 'Limitation of Liability',
              content: [
                'To the fullest extent permitted by law, Luxos Capital and its affiliates, officers, and agents shall not be liable for any indirect, incidental, special, consequential, or punitive damages arising out of or related to your use of this website or any information contained herein.'
              ]
            },
            {
              title: 'Third-Party Links',
              content: [
                'Our website may contain links to third-party sites. We are not responsible for the content or privacy practices of those sites. The inclusion of any link does not imply our endorsement.'
              ]
            },
            {
              title: 'Governing Law',
              content: [
                'These Terms shall be governed by and construed in accordance with the laws of the State of California, without regard to its conflict of law provisions. Any disputes arising from these Terms or your use of the site shall be resolved in the courts located in California.'
              ]
            },
            {
              title: 'Changes',
              content: [
                'We may revise these Terms at any time. By continuing to use the website after changes are posted, you accept the revised Terms. We encourage you to review this page periodically.'
              ]
            },
            {
              title: 'Contact',
              content: [
                'For questions about these Terms of Service, please contact us at investors@luxoscapital.com or through the contact information provided on our Contact page.'
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
