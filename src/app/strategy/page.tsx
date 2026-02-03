'use client';

import Link from 'next/link';
import { ArrowRight } from 'lucide-react';

const businessModel = [
  { 
    number: '01', 
    title: 'Acquire', 
    description: 'We target undervalued 30-200 unit multifamily assets in high-growth markets with strong value-add potential.',
  },
  { 
    number: '02', 
    title: 'Renovate', 
    description: 'Transform units with $80K-$160K average per-unit investment, upgrading finishes, amenities, and curb appeal.',
  },
  { 
    number: '03', 
    title: 'Maximize', 
    description: 'Increase rents 40-70% post-renovation through premium positioning and operational improvements.',
  },
  { 
    number: '04', 
    title: 'Exit', 
    description: 'Refinance or sell stabilized properties, distributing profits to investors while targeting 20%+ IRR.',
  },
];

const targetMarkets = [
  { name: 'Orange County', highlight: 'Affluent tenant base, high rent growth' },
  { name: 'Los Angeles County', highlight: 'Urban revitalization, population density' },
  { name: 'Riverside County', highlight: 'Rapid suburban expansion' },
  { name: 'San Bernardino County', highlight: 'Strong rental demand growth' },
  { name: 'San Diego County', highlight: 'Limited new inventory, coastal premium' },
];

export default function StrategyPage() {
  return (
    <>
      {/* Cinematic Hero */}
      <section className="relative min-h-[90vh] flex items-end">
        <div className="absolute inset-0">
          <img 
            src="/multifamily-investment-hero.png" 
            alt="Multifamily Investment Strategy"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black via-black/60 to-black/30" />
          <div className="absolute inset-0 bg-gradient-to-r from-black/80 via-transparent to-transparent" />
        </div>
        
        <div className="relative z-10 max-w-7xl mx-auto px-6 pb-20 lg:pb-32 pt-40">
          <div className="max-w-2xl">
            <div className="w-12 h-px bg-[#c9a961] mb-8" />
            <h1 className="text-5xl lg:text-7xl font-light text-white leading-[1.05] mb-6">
              Our <span className="font-semibold italic">Strategy</span>
            </h1>
            <p className="text-xl text-white/70 leading-relaxed mb-10 max-w-lg">
              Value-add multifamily syndication that transforms underperforming assets into thriving communities and premium returns.
            </p>
            <Link 
              href="/invest" 
              className="inline-flex items-center gap-3 bg-[#c9a961] text-white px-8 py-4 text-sm uppercase tracking-[0.15em] font-medium hover:bg-[#b8944d] transition-colors"
            >
              <span>View Opportunities</span>
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </div>
        
        {/* Scroll Indicator */}
        <div className="hidden md:flex absolute bottom-8 left-1/2 -translate-x-1/2 flex-col items-center gap-2 z-10">
          <span className="text-white/40 text-xs uppercase tracking-[0.3em]">Scroll</span>
          <div className="w-px h-12 bg-gradient-to-b from-white/40 to-transparent" />
        </div>
      </section>

      {/* Executive Summary */}
      <section className="bg-white py-24 lg:py-32">
        <div className="max-w-5xl mx-auto px-6">
          <div className="grid lg:grid-cols-12 gap-12 items-start">
            <div className="lg:col-span-4">
              <span className="text-[#c9a961] text-sm uppercase tracking-[0.2em] font-medium">Executive Summary</span>
            </div>
            <div className="lg:col-span-8">
              <h2 className="text-3xl lg:text-4xl font-light text-gray-900 leading-[1.3] mb-8">
                We transform C-class apartments into B+ class communities in prime bedroom markets across the United States.
              </h2>
              <div className="space-y-6 text-gray-600 leading-relaxed">
                <p>
                  Our proven model combines disciplined acquisition, strategic renovation, and operational excellence 
                  to create substantial value for our investors.
                </p>
                <p>
                  Led by CEO Terry LeClair, COO Kelly Baker, and CFO Josh Miller, our team brings decades 
                  of combined experience in real estate development, property management, and financial strategy.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Strip */}
      <section className="bg-[#c9a961]">
        <div className="max-w-6xl mx-auto grid grid-cols-2 lg:grid-cols-4">
          {[
            { value: '20%+', label: 'Target IRR' },
            { value: '5-8%', label: 'Cash-on-Cash' },
            { value: '40-70%', label: 'Rent Increase' },
            { value: '3-5yr', label: 'Hold Period' },
          ].map((stat, index) => (
            <div 
              key={index} 
              className={`px-8 py-12 lg:py-16 text-center ${index < 3 ? 'border-r border-white/20' : ''} ${index >= 2 ? 'border-t lg:border-t-0' : ''}`}
            >
              <div className="text-4xl lg:text-5xl font-light text-white mb-2">{stat.value}</div>
              <div className="text-white/80 text-xs uppercase tracking-[0.2em]">{stat.label}</div>
            </div>
          ))}
        </div>
      </section>

      {/* Business Model - Editorial List */}
      <section className="bg-[#0a0a0a] py-24 lg:py-32">
        <div className="max-w-5xl mx-auto px-6">
          <div className="max-w-3xl mb-16 lg:mb-20">
            <div className="w-12 h-px bg-[#c9a961] mb-8" />
            <h2 className="text-4xl lg:text-5xl font-light text-white leading-[1.1] mb-6">
              The <span className="font-semibold italic">Model</span>
            </h2>
            <p className="text-white/60 text-lg leading-relaxed">
              A proven four-step approach to value creation that has delivered consistent returns across market cycles.
            </p>
          </div>
          
          <div className="space-y-0">
            {businessModel.map((item, index) => (
              <div 
                key={index} 
                className="grid lg:grid-cols-12 gap-8 py-10 border-t border-white/10 group"
              >
                <div className="lg:col-span-1">
                  <span className="text-[#c9a961] text-sm font-bold uppercase tracking-wider">{item.number}</span>
                </div>
                <div className="lg:col-span-3">
                  <h3 className="text-2xl font-semibold text-white group-hover:text-[#c9a961] transition-colors">
                    {item.title}
                  </h3>
                </div>
                <div className="lg:col-span-8">
                  <p className="text-white/60 leading-relaxed text-lg">
                    {item.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Target Markets - Split Layout */}
      <section className="relative">
        <div className="grid lg:grid-cols-2">
          {/* Image Side */}
          <div className="relative h-[500px] lg:h-auto lg:min-h-[700px]">
            <img 
              src="/images/strategy-southern-california/image.jpg" 
              alt="Southern California"
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-black/30" />
            <div className="absolute bottom-8 left-8 right-8">
              <div className="bg-white/10 backdrop-blur-sm border border-white/20 p-6">
                <div className="text-white text-sm uppercase tracking-[0.2em] mb-2">Geographic Focus</div>
                <div className="text-white text-2xl font-light">Southern California</div>
              </div>
            </div>
          </div>
          
          {/* Content Side */}
          <div className="bg-white flex items-center px-8 lg:px-16 py-20 lg:py-32">
            <div className="max-w-lg">
              <div className="w-12 h-px bg-[#c9a961] mb-8" />
              <h2 className="text-3xl lg:text-4xl font-light text-gray-900 leading-[1.2] mb-6">
                Target <span className="italic">Markets</span>
              </h2>
              <p className="text-gray-600 leading-relaxed mb-10">
                We focus on five high-growth counties in Southern California, with planned expansion 
                throughout the Midwest and Southeastern United States.
              </p>
              
              <div className="space-y-6">
                {targetMarkets.map((market, index) => (
                  <div key={index} className="flex items-start gap-4 group">
                    <div className="w-px h-12 bg-[#c9a961] flex-shrink-0 mt-1" />
                    <div>
                      <h4 className="text-gray-900 font-medium mb-1 group-hover:text-[#c9a961] transition-colors">
                        {market.name}
                      </h4>
                      <p className="text-gray-500 text-sm">{market.highlight}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Investment Structure */}
      <section className="bg-[#111] py-24 lg:py-32">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid lg:grid-cols-2 gap-16 lg:gap-24 items-center">
            <div>
              <div className="w-12 h-px bg-[#c9a961] mb-8" />
              <h2 className="text-3xl lg:text-4xl font-light text-white leading-[1.2] mb-6">
                Investment <span className="italic">Structure</span>
              </h2>
              <p className="text-white/60 leading-relaxed mb-10">
                We structure each deal to align our interests with our investors and optimize for both 
                cash flow and long-term appreciation.
              </p>
              
              <div className="space-y-8">
                <div className="border-l-2 border-[#c9a961] pl-6">
                  <h4 className="text-white font-medium mb-2">Capital Structure</h4>
                  <p className="text-white/50 text-sm leading-relaxed">
                    Equity from LP investors covers 20-30% of the required down payment, with senior 
                    debt financing the remainder.
                  </p>
                </div>
                <div className="border-l-2 border-[#c9a961] pl-6">
                  <h4 className="text-white font-medium mb-2">Hold Strategy</h4>
                  <p className="text-white/50 text-sm leading-relaxed">
                    Strategic 30-36 month repositioning period, with flexibility for long-term hold 
                    when cash flow supports investor distributions.
                  </p>
                </div>
                <div className="border-l-2 border-[#c9a961] pl-6">
                  <h4 className="text-white font-medium mb-2">Tax Optimization</h4>
                  <p className="text-white/50 text-sm leading-relaxed">
                    1031 exchanges on property sales and tax-free cash-out refinancing to maximize 
                    after-tax returns.
                  </p>
                </div>
                <div className="border-l-2 border-[#c9a961] pl-6">
                  <h4 className="text-white font-medium mb-2">Growth Path</h4>
                  <p className="text-white/50 text-sm leading-relaxed">
                    Profits reinvested into larger acquisitions, building portfolio scale and 
                    compounding returns over time.
                  </p>
                </div>
              </div>
            </div>
            
            <div className="relative">
              <div className="aspect-[4/5] overflow-hidden">
                <img 
                  src="/images/strategy-investment-property/image.webp" 
                  alt="Investment property"
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="absolute -bottom-6 -left-6 bg-[#c9a961] p-8">
                <div className="text-white text-4xl font-light mb-1">$200K</div>
                <div className="text-white/80 text-xs uppercase tracking-[0.2em]">Minimum Investment</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Value Creation Visual */}
      <section className="relative h-[50vh] lg:h-[60vh]">
        <img 
          src="/images/strategy-value-creation/image.jpg" 
          alt="Luxury apartment interior"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-black/50" />
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="text-center px-6 max-w-4xl">
            <h2 className="text-3xl lg:text-5xl font-light text-white leading-tight mb-6">
              Transforming Properties.<br />
              <span className="italic">Creating Value.</span>
            </h2>
            <p className="text-white/60 text-lg max-w-2xl mx-auto">
              Every renovation decision is driven by data—targeting improvements that maximize rent growth 
              and property value while creating communities residents are proud to call home.
            </p>
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
            Schedule a call with our investor relations team to learn about current opportunities 
            and how our strategy can work for your portfolio.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link 
              href="/invest" 
              className="inline-flex items-center justify-center gap-2 bg-[#c9a961] text-white px-10 py-4 text-sm uppercase tracking-[0.15em] font-medium hover:bg-[#b8944d] transition-colors"
            >
              View Opportunities
            </Link>
            <Link 
              href="/contact" 
              className="inline-flex items-center justify-center gap-2 border border-white/30 text-white px-10 py-4 text-sm uppercase tracking-[0.15em] font-medium hover:bg-white hover:text-gray-900 transition-colors"
            >
              Contact Us
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
