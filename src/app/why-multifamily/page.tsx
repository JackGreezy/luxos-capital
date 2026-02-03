'use client';

import { useState } from 'react';
import Link from 'next/link';
import { ArrowRight, Plus, Minus } from 'lucide-react';
import PortfolioComparison from '@/components/PortfolioComparison';

const keyReasons = [
  {
    number: '01',
    title: 'Recession Resistant',
    description: 'People always need a place to live. During economic downturns, apartment demand often increases as homeownership becomes less accessible, providing stability when other investments falter.',
  },
  {
    number: '02',
    title: 'Consistent Cash Flow',
    description: 'Multiple tenants generate monthly rental income, creating predictable cash flow that can be distributed to investors quarterly.',
  },
  {
    number: '03',
    title: 'Forced Appreciation',
    description: 'Unlike stocks, you can directly increase property value through strategic renovations and operational improvements that boost rental income.',
  },
  {
    number: '04',
    title: 'Tax Advantages',
    description: 'Benefit from depreciation deductions, 1031 exchanges, and pass-through income treatment that can significantly reduce your tax burden.',
  },
  {
    number: '05',
    title: 'Inflation Protection',
    description: 'As inflation rises, so do rents and property values, protecting your purchasing power while other investments lose real value.',
  },
  {
    number: '06',
    title: 'Leverage Benefits',
    description: 'Banks readily lend against income-producing multifamily properties, allowing you to control larger assets and amplify returns.',
  },
];

const expandedReasons = [
  { title: 'Limited Supply Creates Value', description: 'High barriers to entry and zoning restrictions limit new apartment construction, protecting existing investments.' },
  { title: 'Built-In Diversification', description: 'A single multifamily property spreads risk across dozens of tenants rather than relying on one.' },
  { title: 'Economies of Scale', description: 'Managing 30 units in one building is far more efficient than managing 30 scattered single-family homes.' },
  { title: 'Tangible Asset', description: 'Unlike stocks or bonds, multifamily real estate is a physical asset with intrinsic value you can see and touch.' },
  { title: 'Natural Appreciation', description: 'Well-located properties in growing markets tend to appreciate over time as demand increases.' },
  { title: 'Housing Demand Growth', description: 'Population growth and shifting preferences toward renting are driving long-term apartment demand.' },
];

export default function WhyMultifamilyPage() {
  const [showMore, setShowMore] = useState(false);

  return (
    <>
      {/* Cinematic Hero */}
      <section className="relative min-h-[90vh] flex items-end">
        <div className="absolute inset-0">
          <img 
            src="/why-multifamily-real-estate.jpg" 
            alt="Multifamily Real Estate"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black via-black/60 to-black/30" />
          <div className="absolute inset-0 bg-gradient-to-r from-black/70 via-transparent to-transparent" />
        </div>
        
        <div className="relative z-10 max-w-7xl mx-auto px-6 pb-20 lg:pb-32 pt-40">
          <div className="max-w-2xl">
            <div className="w-12 h-px bg-[#c9a961] mb-8" />
            <h1 className="text-5xl lg:text-7xl font-light text-white leading-[1.05] mb-6">
              Why <span className="font-semibold italic">Multifamily</span><br />
              Real Estate
            </h1>
            <p className="text-xl text-white/70 leading-relaxed mb-10 max-w-lg">
              Discover why institutional investors and sophisticated individuals choose apartments as their cornerstone wealth-building asset.
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
        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 z-10">
          <span className="text-white/40 text-xs uppercase tracking-[0.3em]">Scroll</span>
          <div className="w-px h-12 bg-gradient-to-b from-white/40 to-transparent" />
        </div>
      </section>

      {/* Stats Strip */}
      <section className="bg-[#c9a961]">
        <div className="max-w-6xl mx-auto grid grid-cols-2 lg:grid-cols-4">
          {[
            { value: '20%+', label: 'Target IRR' },
            { value: '3-5yr', label: 'Hold Period' },
            { value: '$200K', label: 'Min Investment' },
            { value: '2x', label: 'Equity Multiple' },
          ].map((stat, index) => (
            <div key={index} className={`px-8 py-12 lg:py-16 text-center ${index < 3 ? 'border-r border-white/20' : ''} ${index === 2 ? 'border-t lg:border-t-0' : ''} ${index === 3 ? 'border-t lg:border-t-0' : ''}`}>
              <div className="text-4xl lg:text-5xl font-light text-white mb-2">{stat.value}</div>
              <div className="text-white/80 text-xs uppercase tracking-[0.2em]">{stat.label}</div>
            </div>
          ))}
        </div>
      </section>

      {/* Main Benefits - Editorial Style */}
      <section className="bg-white py-24 lg:py-32">
        <div className="max-w-5xl mx-auto px-6">
          <div className="grid lg:grid-cols-12 gap-12 items-start mb-20">
            <div className="lg:col-span-4">
              <span className="text-[#c9a961] text-sm uppercase tracking-[0.2em] font-medium">The Advantage</span>
            </div>
            <div className="lg:col-span-8">
              <h2 className="text-3xl lg:text-4xl font-light text-gray-900 leading-[1.3]">
                Multifamily real estate combines cash flow, appreciation, tax benefits, and inflation protection in a single asset class.
              </h2>
            </div>
          </div>
          
          {/* Numbered Benefits */}
          <div className="space-y-0">
            {keyReasons.map((reason, index) => (
              <div 
                key={index} 
                className="grid lg:grid-cols-12 gap-8 py-10 border-t border-gray-200 group"
              >
                <div className="lg:col-span-1">
                  <span className="text-[#c9a961] text-sm font-bold uppercase tracking-wider">{reason.number}</span>
                </div>
                <div className="lg:col-span-4">
                  <h3 className="text-xl font-semibold text-gray-900 group-hover:text-[#c9a961] transition-colors">
                    {reason.title}
                  </h3>
                </div>
                <div className="lg:col-span-7">
                  <p className="text-gray-600 leading-relaxed">
                    {reason.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
          
          {/* Expandable Additional Benefits */}
          <div className={`overflow-hidden transition-all duration-500 ${showMore ? 'max-h-[1000px] opacity-100' : 'max-h-0 opacity-0'}`}>
            <div className="pt-4">
              {expandedReasons.map((reason, index) => (
                <div 
                  key={index} 
                  className="grid lg:grid-cols-12 gap-8 py-10 border-t border-gray-200 group"
                >
                  <div className="lg:col-span-1">
                    <span className="text-[#c9a961] text-sm font-bold uppercase tracking-wider">{String(index + 7).padStart(2, '0')}</span>
                  </div>
                  <div className="lg:col-span-4">
                    <h3 className="text-xl font-semibold text-gray-900 group-hover:text-[#c9a961] transition-colors">
                      {reason.title}
                    </h3>
                  </div>
                  <div className="lg:col-span-7">
                    <p className="text-gray-600 leading-relaxed">
                      {reason.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
          
          <div className="border-t border-gray-200 pt-10">
            <button 
              onClick={() => setShowMore(!showMore)}
              className="inline-flex items-center gap-2 text-[#c9a961] text-sm uppercase tracking-[0.15em] font-medium group"
            >
              <span>{showMore ? 'Show Less' : 'View All 12 Benefits'}</span>
              {showMore ? <Minus className="w-4 h-4" /> : <Plus className="w-4 h-4" />}
            </button>
          </div>
        </div>
      </section>

      {/* Visual Break - Full Width Image */}
      <section className="relative h-[50vh] lg:h-[60vh]">
        <img 
          src="/multifamily-investment-hero.png" 
          alt="Multifamily Property"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-black/40" />
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="text-center px-6">
            <h2 className="text-3xl lg:text-5xl font-light text-white max-w-3xl leading-tight">
              &ldquo;The best investment on earth is <span className="italic">earth</span>.&rdquo;
            </h2>
            <p className="text-white/60 mt-4 text-sm uppercase tracking-[0.2em]">— Louis Glickman</p>
          </div>
        </div>
      </section>

      {/* Comparison Section - Editorial */}
      <section className="bg-[#0a0a0a] py-24 lg:py-32">
        <div className="max-w-7xl mx-auto px-6">
          <div className="max-w-3xl mb-16 lg:mb-20">
            <div className="w-12 h-px bg-[#c9a961] mb-8" />
            <h2 className="text-4xl lg:text-5xl font-light text-white leading-[1.1] mb-6">
              Why Multifamily <span className="font-semibold italic">Outperforms</span>
            </h2>
            <p className="text-white/60 text-lg leading-relaxed">
              See how apartments compare to other investment options across key performance factors.
            </p>
          </div>
          
          <div className="grid lg:grid-cols-3 gap-px bg-white/10">
            {/* Multifamily - Highlighted */}
            <div className="bg-[#c9a961] p-10 lg:p-12">
              <h3 className="text-2xl font-semibold text-white mb-2">Multifamily</h3>
              <p className="text-white/70 text-sm uppercase tracking-wider mb-8">Apartments</p>
              <ul className="space-y-4">
                {['Multiple income streams', 'Recession resilient', 'Forced appreciation', 'Tax advantages', 'Inflation hedge'].map((item, i) => (
                  <li key={i} className="flex items-start gap-3">
                    <div className="w-px h-5 bg-white/60 flex-shrink-0 mt-0.5" />
                    <span className="text-white">{item}</span>
                  </li>
                ))}
              </ul>
            </div>
            
            {/* Single Family */}
            <div className="bg-[#0a0a0a] p-10 lg:p-12">
              <h3 className="text-2xl font-semibold text-white mb-2">Single Family</h3>
              <p className="text-white/40 text-sm uppercase tracking-wider mb-8">Houses</p>
              <ul className="space-y-4">
                {['One tenant at a time', 'Higher per-unit costs', 'Scattered locations', '100% vacancy when empty', 'Limited scale'].map((item, i) => (
                  <li key={i} className="flex items-start gap-3">
                    <div className="w-px h-5 bg-white/20 flex-shrink-0 mt-0.5" />
                    <span className="text-white/50">{item}</span>
                  </li>
                ))}
              </ul>
            </div>
            
            {/* Commercial */}
            <div className="bg-[#0a0a0a] p-10 lg:p-12">
              <h3 className="text-2xl font-semibold text-white mb-2">Commercial</h3>
              <p className="text-white/40 text-sm uppercase tracking-wider mb-8">Office / Retail</p>
              <ul className="space-y-4">
                {['Economic sensitivity', 'Remote work disruption', 'E-commerce pressure', 'Longer lease cycles', 'Discretionary spending'].map((item, i) => (
                  <li key={i} className="flex items-start gap-3">
                    <div className="w-px h-5 bg-white/20 flex-shrink-0 mt-0.5" />
                    <span className="text-white/50">{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Investor Benefits - Split Layout */}
      <section className="relative">
        <div className="grid lg:grid-cols-2">
          {/* Image Side */}
          <div className="relative h-[500px] lg:h-auto lg:min-h-[700px]">
            <img 
              src="/images/about-luxury-apartment-interior/image.jpg" 
              alt="Luxury apartment interior"
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-black/20" />
          </div>
          
          {/* Content Side */}
          <div className="bg-[#111] flex items-center px-8 lg:px-16 py-20 lg:py-32">
            <div className="max-w-lg">
              <div className="w-12 h-px bg-[#c9a961] mb-8" />
              <h2 className="text-3xl lg:text-4xl font-light text-white leading-[1.2] mb-6">
                Your Potential <span className="italic">Benefits</span>
              </h2>
              <p className="text-white/60 leading-relaxed mb-10">
                When you invest with Luxos Capital, you gain access to institutional-quality deals with these potential benefits:
              </p>
              <div className="space-y-6">
                {[
                  { title: 'Quarterly Distributions', desc: 'Receive cash flow from rental income when available.' },
                  { title: 'Equity Growth', desc: 'Benefit from strategic repositioning and appreciation.' },
                  { title: 'Tax Efficiency', desc: 'Participate in 1031 exchanges and tax-free refinance events.' },
                  { title: 'Depreciation Benefits', desc: 'Pass-through deductions commonly associated with real estate.' },
                ].map((item, i) => (
                  <div key={i} className="flex items-start gap-4">
                    <div className="w-px h-12 bg-[#c9a961] flex-shrink-0 mt-1" />
                    <div>
                      <h4 className="text-white font-medium mb-1">{item.title}</h4>
                      <p className="text-white/50 text-sm">{item.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Portfolio Comparison Charts */}
      <PortfolioComparison />

      {/* CTA */}
      <section className="bg-[#0a0a0a] py-24 lg:py-32">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <div className="w-12 h-px bg-[#c9a961] mx-auto mb-8" />
          <h2 className="text-3xl lg:text-5xl font-light text-white mb-6">
            Ready to <span className="italic">Invest</span>?
          </h2>
          <p className="text-white/60 text-lg mb-10 max-w-2xl mx-auto">
            Schedule a call with our investor relations team to learn about current opportunities and how multifamily can fit into your portfolio.
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
