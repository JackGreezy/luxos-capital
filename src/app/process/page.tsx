'use client';

import { useState } from 'react';
import Link from 'next/link';
import { ArrowRight, Plus, Minus } from 'lucide-react';

const investmentProcess = [
  { 
    number: '01', 
    title: 'Opportunity Sourcing', 
    description: 'We leverage best-in-class market research to identify high-growth markets and neighborhoods that will generate the most value for our investors and building owners.',
  },
  { 
    number: '02', 
    title: 'Broker Relationships', 
    description: 'We cultivate strong relationships with real estate brokers in our target markets, giving us access to off-market and early-stage opportunities.',
  },
  { 
    number: '03', 
    title: 'Deal Analysis', 
    description: 'Rigorous due diligence and conservative financial modeling on every potential acquisition ensures we only pursue deals that meet our stringent criteria.',
  },
  { 
    number: '04', 
    title: 'Due Diligence', 
    description: 'Comprehensive property inspections, market analysis, title review, and financial verification protect our investors from hidden risks.',
  },
  { 
    number: '05', 
    title: 'Expert Negotiations', 
    description: 'Our experienced team negotiates favorable terms on price, financing, and contingencies to maximize investor returns from day one.',
  },
  { 
    number: '06', 
    title: 'Partner Investment', 
    description: 'Qualified investors review detailed investment materials and choose to participate alongside us in carefully vetted opportunities.',
  },
  { 
    number: '07', 
    title: 'Value Creation', 
    description: 'Strategic renovations and operational improvements increase rental income and property value according to our proven playbook.',
  },
  { 
    number: '08', 
    title: 'Communication', 
    description: 'Regular updates keep investors informed through our investor portal with full transparency on progress and performance.',
  },
  { 
    number: '09', 
    title: 'Distributions', 
    description: 'Investors receive distributions from rental income while the property appreciates, creating both current income and long-term growth.',
  },
  { 
    number: '10', 
    title: 'Exit Strategy', 
    description: 'Properties are refinanced or sold at optimal timing, and investors can reinvest proceeds into new opportunities.',
  },
];

const investorJourney = [
  { 
    step: '01', 
    title: 'Schedule Your Call', 
    description: 'Start with a 15-30 minute introductory call to discuss your investment goals and timeline. No commitment required.',
  },
  { 
    step: '02', 
    title: 'Complete Your Profile', 
    description: 'Verify your accredited investor status and define your investment preferences through our secure investor questionnaire.',
  },
  { 
    step: '03', 
    title: 'Review Opportunities', 
    description: 'Receive detailed materials including investment summaries, financial projections, and market analysis for each opportunity.',
  },
  { 
    step: '04', 
    title: 'Make Your Investment', 
    description: 'Complete subscription documents and fund your investment. Our team guides you through every step of the process.',
  },
  { 
    step: '05', 
    title: 'Track Performance', 
    description: 'Receive regular updates on property performance, renovation progress, and cash distributions through your investor portal.',
  },
  { 
    step: '06', 
    title: 'Realize Returns', 
    description: 'Upon sale or refinance, receive your share of profits. Many investors choose to reinvest in new opportunities.',
  },
];

const weHandle = [
  { category: 'Acquisition', items: ['Property Sourcing', 'Market Research', 'Deal Analysis', 'Negotiations'] },
  { category: 'Legal & Finance', items: ['LLC Formation', 'Escrow Management', 'Loan Procurement', 'Investor Relations'] },
  { category: 'Operations', items: ['Permits & Approvals', 'Renovations', 'Construction Management', 'Property Stabilization'] },
  { category: 'Ongoing', items: ['Asset Management', 'Tenant Relations', 'Financial Reporting', 'Exit Strategy'] },
];

export default function ProcessPage() {
  const [expandedProcess, setExpandedProcess] = useState(false);
  const [activeJourneyStep, setActiveJourneyStep] = useState(0);

  return (
    <>
      {/* Cinematic Hero */}
      <section className="relative min-h-[90vh] flex items-end">
        <div className="absolute inset-0">
          <img 
            src="/images/process-investment-process-hero/image.jpg" 
            alt="Investment Process"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black via-black/60 to-black/30" />
          <div className="absolute inset-0 bg-gradient-to-r from-black/80 via-transparent to-transparent" />
        </div>
        
        <div className="relative z-10 max-w-7xl mx-auto px-6 pb-20 lg:pb-32 pt-40">
          <div className="max-w-2xl">
            <div className="w-12 h-px bg-[#c9a961] mb-8" />
            <h1 className="text-5xl lg:text-7xl font-light text-white leading-[1.05] mb-6">
              Our <span className="font-semibold italic">Process</span>
            </h1>
            <p className="text-xl text-white/70 leading-relaxed mb-10 max-w-lg">
              A transparent, systematic approach to multifamily investing that puts our investors first at every step.
            </p>
            <Link 
              href="/contact" 
              className="inline-flex items-center gap-3 bg-[#c9a961] text-white px-8 py-4 text-sm uppercase tracking-[0.15em] font-medium hover:bg-[#b8944d] transition-colors"
            >
              <span>Schedule a Call</span>
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </div>
        
        {/* Scroll Indicator */}
        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 z-10">
          <span className="text-white/40 text-xs uppercase tracking-[0.3em]">Scroll</span>
          <div className="w-px h-12 bg-gradient-to-b from-white/40 to-transparent" />
        </div>
      </section>

      {/* 10-Step Investment Process */}
      <section className="bg-white py-24 lg:py-32">
        <div className="max-w-5xl mx-auto px-6">
          <div className="grid lg:grid-cols-12 gap-12 items-start mb-16">
            <div className="lg:col-span-4">
              <span className="text-[#c9a961] text-sm uppercase tracking-[0.2em] font-medium">Our Approach</span>
            </div>
            <div className="lg:col-span-8">
              <h2 className="text-3xl lg:text-4xl font-light text-gray-900 leading-[1.3]">
                A proven 10-step system for identifying, acquiring, and maximizing multifamily investments.
              </h2>
            </div>
          </div>
          
          {/* Process Steps */}
          <div className="space-y-0">
            {investmentProcess.slice(0, expandedProcess ? 10 : 5).map((item, index) => (
              <div 
                key={index} 
                className="grid lg:grid-cols-12 gap-8 py-8 border-t border-gray-200 group"
              >
                <div className="lg:col-span-1">
                  <span className="text-[#c9a961] text-sm font-bold uppercase tracking-wider">{item.number}</span>
                </div>
                <div className="lg:col-span-4">
                  <h3 className="text-xl font-semibold text-gray-900 group-hover:text-[#c9a961] transition-colors">
                    {item.title}
                  </h3>
                </div>
                <div className="lg:col-span-7">
                  <p className="text-gray-600 leading-relaxed">
                    {item.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
          
          <div className="border-t border-gray-200 pt-8">
            <button 
              onClick={() => setExpandedProcess(!expandedProcess)}
              className="inline-flex items-center gap-2 text-[#c9a961] text-sm uppercase tracking-[0.15em] font-medium group"
            >
              <span>{expandedProcess ? 'Show Less' : 'View All 10 Steps'}</span>
              {expandedProcess ? <Minus className="w-4 h-4" /> : <Plus className="w-4 h-4" />}
            </button>
          </div>
        </div>
      </section>

      {/* Your Journey - Interactive */}
      <section className="bg-[#0a0a0a] py-24 lg:py-32">
        <div className="max-w-7xl mx-auto px-6">
          <div className="max-w-3xl mb-16 lg:mb-20">
            <div className="w-12 h-px bg-[#c9a961] mb-8" />
            <h2 className="text-4xl lg:text-5xl font-light text-white leading-[1.1] mb-6">
              Your <span className="font-semibold italic">Journey</span>
            </h2>
            <p className="text-white/60 text-lg leading-relaxed">
              From first contact to returns, here&apos;s what to expect as a Luxos Capital investor.
            </p>
          </div>
          
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-16">
            {/* Timeline */}
            <div className="space-y-0">
              {investorJourney.map((item, index) => (
                <button
                  key={index}
                  onClick={() => setActiveJourneyStep(index)}
                  className={`w-full text-left py-6 border-t border-white/10 transition-all group ${
                    index === activeJourneyStep ? 'border-l-2 border-l-[#c9a961] pl-6' : 'border-l-2 border-l-transparent pl-6'
                  }`}
                >
                  <div className="flex items-start gap-6">
                    <span className={`text-sm font-bold uppercase tracking-wider transition-colors ${
                      index === activeJourneyStep ? 'text-[#c9a961]' : 'text-white/40 group-hover:text-white/60'
                    }`}>
                      {item.step}
                    </span>
                    <span className={`text-lg font-medium transition-colors ${
                      index === activeJourneyStep ? 'text-white' : 'text-white/60 group-hover:text-white/80'
                    }`}>
                      {item.title}
                    </span>
                  </div>
                </button>
              ))}
            </div>
            
            {/* Detail Card */}
            <div className="lg:sticky lg:top-32">
              <div className="bg-[#c9a961] p-10 lg:p-12">
                <span className="text-white/70 text-sm uppercase tracking-[0.2em] mb-4 block">
                  Step {investorJourney[activeJourneyStep].step}
                </span>
                <h3 className="text-2xl lg:text-3xl font-light text-white mb-6">
                  {investorJourney[activeJourneyStep].title}
                </h3>
                <p className="text-white/90 leading-relaxed text-lg">
                  {investorJourney[activeJourneyStep].description}
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* What We Handle - Split Layout */}
      <section className="relative">
        <div className="grid lg:grid-cols-2">
          {/* Image Side */}
          <div className="relative h-[500px] lg:h-auto lg:min-h-[800px]">
            <img 
              src="/images/process-property-management/image.jpg" 
              alt="Property Management"
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-black/40" />
            <div className="absolute inset-0 flex items-center justify-center p-12">
              <div className="text-center">
                <h3 className="text-4xl lg:text-5xl font-light text-white mb-4">
                  Truly <span className="italic">Passive</span>
                </h3>
                <p className="text-white/70 text-lg max-w-md">
                  You invest. We handle everything else.
                </p>
              </div>
            </div>
          </div>
          
          {/* Content Side */}
          <div className="bg-[#111] px-8 lg:px-16 py-20 lg:py-32">
            <div className="max-w-lg">
              <div className="w-12 h-px bg-[#c9a961] mb-8" />
              <h2 className="text-3xl lg:text-4xl font-light text-white leading-[1.2] mb-6">
                What We <span className="italic">Handle</span>
              </h2>
              <p className="text-white/60 leading-relaxed mb-12">
                As a passive investor, you benefit from all the upside while we handle every aspect of the investment.
              </p>
              
              <div className="space-y-10">
                {weHandle.map((category, index) => (
                  <div key={index}>
                    <h4 className="text-[#c9a961] text-xs uppercase tracking-[0.2em] mb-4">
                      {category.category}
                    </h4>
                    <div className="grid grid-cols-2 gap-3">
                      {category.items.map((item, itemIndex) => (
                        <div key={itemIndex} className="flex items-center gap-3">
                          <div className="w-1 h-1 bg-white/40 flex-shrink-0" />
                          <span className="text-white/70 text-sm">{item}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-[#0a0a0a] py-24 lg:py-32">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <div className="w-12 h-px bg-[#c9a961] mx-auto mb-8" />
          <h2 className="text-3xl lg:text-5xl font-light text-white mb-6">
            Ready to <span className="italic">Begin</span>?
          </h2>
          <p className="text-white/60 text-lg mb-10 max-w-2xl mx-auto">
            Schedule your introductory call today and take the first step toward passive real estate investing.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link 
              href="/contact" 
              className="inline-flex items-center justify-center gap-2 bg-[#c9a961] text-white px-10 py-4 text-sm uppercase tracking-[0.15em] font-medium hover:bg-[#b8944d] transition-colors"
            >
              Schedule a Call
            </Link>
            <Link 
              href="/invest" 
              className="inline-flex items-center justify-center gap-2 border border-white/30 text-white px-10 py-4 text-sm uppercase tracking-[0.15em] font-medium hover:bg-white hover:text-gray-900 transition-colors"
            >
              View Opportunities
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
