'use client';

import { useState } from 'react';
import Link from 'next/link';
import { ArrowRight } from 'lucide-react';
import { deals } from '@/data/content';

const investorSteps = [
  { number: '01', title: 'Schedule a Call', description: 'Start with a brief introductory call to discuss your goals and learn about our approach.' },
  { number: '02', title: 'Complete Profile', description: 'Complete our investor questionnaire to verify accreditation and define your preferences.' },
  { number: '03', title: 'Review Deals', description: 'Receive detailed materials including projections and market analysis for each opportunity.' },
  { number: '04', title: 'Invest', description: 'Complete subscription documents and fund your investment. We handle the rest.' },
];

const investorBenefits = [
  { title: 'Institutional Access', description: 'Invest alongside us in deals typically reserved for large institutions.' },
  { title: 'Passive Income', description: 'Receive quarterly distributions from rental income when cash flow allows.' },
  { title: 'Tax Advantages', description: 'Benefit from depreciation and other tax benefits of real estate ownership.' },
  { title: 'Full Transparency', description: 'Track your investments in real-time through our investor portal.' },
];

export default function InvestPage() {
  const [currentDeal, setCurrentDeal] = useState(0);
  const deal = deals[currentDeal];

  return (
    <>
      {/* Cinematic Hero */}
      <section className="relative min-h-[90vh] flex items-end">
        <div className="absolute inset-0">
          <img 
            src="/images/invest-opportunities-hero/image.webp" 
            alt="Investment Opportunities"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black via-black/60 to-black/30" />
          <div className="absolute inset-0 bg-gradient-to-r from-black/80 via-transparent to-transparent" />
        </div>
        
        <div className="relative z-10 max-w-7xl mx-auto px-6 pb-20 lg:pb-32 pt-40">
          <div className="max-w-2xl">
            <div className="w-12 h-px bg-[#c9a961] mb-8" />
            <h1 className="text-5xl lg:text-7xl font-light text-white leading-[1.05] mb-6">
              Investment <span className="font-semibold italic">Opportunities</span>
            </h1>
            <p className="text-xl text-white/70 leading-relaxed mb-10 max-w-lg">
              Curated value-add multifamily investments designed to deliver strong risk-adjusted returns for accredited investors.
            </p>
            <Link 
              href="/contact" 
              className="inline-flex items-center gap-3 bg-[#c9a961] text-white px-8 py-4 text-sm uppercase tracking-[0.15em] font-medium hover:bg-[#b8944d] transition-colors"
            >
              <span>Request Access</span>
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

      {/* Featured Deals */}
      <section className="bg-white py-24 lg:py-32">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid lg:grid-cols-12 gap-12 items-start mb-16">
            <div className="lg:col-span-4">
              <span className="text-[#c9a961] text-sm uppercase tracking-[0.2em] font-medium">Current Deals</span>
              <h2 className="text-3xl lg:text-4xl font-light text-gray-900 leading-[1.3] mt-4">
                Active opportunities for qualified investors.
              </h2>
            </div>
            <div className="lg:col-span-8">
              <p className="text-gray-600 text-lg leading-relaxed">
                Each investment undergoes rigorous due diligence and conservative underwriting. 
                We only bring opportunities to our investors that meet our strict criteria for 
                value creation and risk-adjusted returns.
              </p>
            </div>
          </div>
          
          {/* Deal Cards */}
          <div className="grid lg:grid-cols-2 gap-8">
            {deals.map((dealItem, index) => (
              <div 
                key={index}
                className={`group cursor-pointer ${currentDeal === index ? 'ring-2 ring-[#c9a961]' : ''}`}
                onClick={() => setCurrentDeal(index)}
              >
                <div className="relative aspect-[16/10] overflow-hidden">
                  <img 
                    src={dealItem.image} 
                    alt={dealItem.name}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />
                  
                  {/* Status Badge */}
                  <div className="absolute top-6 left-6">
                    <span className={`px-4 py-2 text-xs uppercase tracking-[0.15em] font-medium ${
                      dealItem.status === 'Investment Open' 
                        ? 'bg-green-600 text-white' 
                        : 'bg-[#c9a961] text-white'
                    }`}>
                      {dealItem.status}
                    </span>
                  </div>
                  
                  {/* Deal Info */}
                  <div className="absolute bottom-0 left-0 right-0 p-6">
                    <h3 className="text-2xl font-light text-white mb-4">{dealItem.name}</h3>
                    <div className="grid grid-cols-3 gap-4">
                      {dealItem.details.slice(0, 3).map((detail, detailIndex) => (
                        <div key={detailIndex}>
                          <div className="text-white/50 text-xs uppercase tracking-wider mb-1">{detail.label}</div>
                          <div className="text-white font-medium">{detail.value}</div>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
          
          {/* Selected Deal Details */}
          <div className="mt-12 p-8 lg:p-12 bg-gray-50">
            <div className="grid lg:grid-cols-2 gap-12">
              <div>
                <span className="text-[#c9a961] text-xs uppercase tracking-[0.2em] mb-4 block">{deal.status}</span>
                <h3 className="text-3xl font-light text-gray-900 mb-6">{deal.name}</h3>
                <div className="space-y-4">
                  {deal.details.map((item, index) => (
                    <div key={index} className="flex justify-between items-center py-3 border-b border-gray-200">
                      <span className="text-gray-500">{item.label}</span>
                      <span className="font-medium text-gray-900">{item.value}</span>
                    </div>
                  ))}
                </div>
              </div>
              <div className="flex items-end">
                <div>
                  <p className="text-gray-600 leading-relaxed mb-8">
                    This investment opportunity is available to accredited investors. 
                    Contact our investor relations team to receive the full investment 
                    memorandum and discuss whether this opportunity aligns with your goals.
                  </p>
                  <Link 
                    href="/contact" 
                    className="inline-flex items-center gap-3 bg-[#c9a961] text-white px-8 py-4 text-sm uppercase tracking-[0.15em] font-medium hover:bg-[#b8944d] transition-colors"
                  >
                    <span>Request Information</span>
                    <ArrowRight className="w-4 h-4" />
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Why Invest - Split Layout */}
      <section className="relative">
        <div className="grid lg:grid-cols-2">
          {/* Image Side */}
          <div className="relative h-[500px] lg:h-auto lg:min-h-[700px]">
            <img 
              src="/images/invest-luxury-apartment/image.jpg" 
              alt="Luxury Apartment"
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-black/30" />
          </div>
          
          {/* Content Side */}
          <div className="bg-[#0a0a0a] flex items-center px-8 lg:px-16 py-20 lg:py-32">
            <div className="max-w-lg">
              <div className="w-12 h-px bg-[#c9a961] mb-8" />
              <h2 className="text-3xl lg:text-4xl font-light text-white leading-[1.2] mb-6">
                Why Invest With <span className="italic">Luxos</span>
              </h2>
              <p className="text-white/60 leading-relaxed mb-12">
                As a Luxos Capital investor, you gain access to institutional-quality 
                investments with attractive return potential and true passive ownership.
              </p>
              
              <div className="space-y-8">
                {investorBenefits.map((benefit, index) => (
                  <div key={index} className="border-l-2 border-[#c9a961] pl-6">
                    <h4 className="text-white font-medium mb-2">{benefit.title}</h4>
                    <p className="text-white/50 text-sm leading-relaxed">{benefit.description}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* How to Invest */}
      <section className="bg-white py-24 lg:py-32">
        <div className="max-w-5xl mx-auto px-6">
          <div className="max-w-3xl mb-16">
            <span className="text-[#c9a961] text-sm uppercase tracking-[0.2em] font-medium">Get Started</span>
            <h2 className="text-3xl lg:text-4xl font-light text-gray-900 leading-[1.3] mt-4">
              Four simple steps to begin your investment journey.
            </h2>
          </div>
          
          <div className="space-y-0">
            {investorSteps.map((item, index) => (
              <div 
                key={index} 
                className="grid lg:grid-cols-12 gap-8 py-10 border-t border-gray-200 group"
              >
                <div className="lg:col-span-1">
                  <span className="text-[#c9a961] text-sm font-bold uppercase tracking-wider">{item.number}</span>
                </div>
                <div className="lg:col-span-4">
                  <h3 className="text-xl font-medium text-gray-900 group-hover:text-[#c9a961] transition-colors">
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
        </div>
      </section>

      {/* Accreditation */}
      <section className="bg-[#c9a961]">
        <div className="max-w-7xl mx-auto px-6 py-20 lg:py-24">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl lg:text-4xl font-light text-white leading-[1.2] mb-6">
                Investor <span className="italic">Requirements</span>
              </h2>
              <p className="text-white/80 leading-relaxed">
                Our offerings are available to accredited investors as defined by the SEC. 
                You may qualify if you meet either the income or net worth requirement.
              </p>
            </div>
            <div className="grid sm:grid-cols-2 gap-6">
              <div className="bg-white/10 backdrop-blur-sm p-8">
                <h3 className="text-white/60 text-xs uppercase tracking-[0.2em] mb-4">Income</h3>
                <p className="text-white text-lg font-light leading-relaxed">
                  $200K+ annual income ($300K with spouse) for the past two years
                </p>
              </div>
              <div className="bg-white/10 backdrop-blur-sm p-8">
                <h3 className="text-white/60 text-xs uppercase tracking-[0.2em] mb-4">Net Worth</h3>
                <p className="text-white text-lg font-light leading-relaxed">
                  $1M+ net worth excluding primary residence
                </p>
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
            Ready to <span className="italic">Invest</span>?
          </h2>
          <p className="text-white/60 text-lg mb-10 max-w-2xl mx-auto">
            Schedule a call with our investor relations team to discuss current opportunities 
            and determine if Luxos Capital is the right fit for your portfolio.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link 
              href="/contact" 
              className="inline-flex items-center justify-center gap-2 bg-[#c9a961] text-white px-10 py-4 text-sm uppercase tracking-[0.15em] font-medium hover:bg-[#b8944d] transition-colors"
            >
              Schedule a Call
            </Link>
            <Link 
              href="/process" 
              className="inline-flex items-center justify-center gap-2 border border-white/30 text-white px-10 py-4 text-sm uppercase tracking-[0.15em] font-medium hover:bg-white hover:text-gray-900 transition-colors"
            >
              View Process
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
