'use client';

import { useState } from 'react';
import Link from 'next/link';
import { ArrowRight, Plus, Minus, Heart } from 'lucide-react';
import { teamMembers } from '@/data/content';

export default function AboutPage() {
  const [expandedMember, setExpandedMember] = useState<number | null>(null);
  const [showMission, setShowMission] = useState(false);

  return (
    <>
      {/* Cinematic Hero */}
      <section className="relative min-h-[90vh] flex items-end">
        {/* Background Image */}
        <div className="absolute inset-0">
          <img 
            src="/terry-leclair-lifestyle.jpg" 
            alt="Luxos Capital Leadership"
            className="w-full h-full object-cover object-top"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black via-black/50 to-transparent" />
          <div className="absolute inset-0 bg-gradient-to-r from-black/80 via-transparent to-transparent" />
        </div>
        
        {/* Content */}
        <div className="relative z-10 max-w-7xl mx-auto px-6 pb-20 lg:pb-32 pt-40">
          <div className="max-w-2xl">
            <div className="w-12 h-px bg-[#c9a961] mb-8" />
            <h1 className="text-5xl lg:text-7xl font-light text-white leading-[1.05] mb-6">
              Building <span className="font-semibold italic">Wealth</span>,<br />
              Building <span className="font-semibold italic">Trust</span>
            </h1>
            <p className="text-xl text-white/70 leading-relaxed mb-10 max-w-lg">
              Premium multifamily investments backed by decades of expertise and an unwavering commitment to our investors.
            </p>
            <Link 
              href="/contact" 
              className="inline-flex items-center gap-3 bg-[#c9a961] text-white px-8 py-4 text-sm uppercase tracking-[0.15em] font-medium hover:bg-[#b8944d] transition-colors"
            >
              <span>Start a Conversation</span>
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

      {/* Mission Statement - Minimal */}
      <section className="bg-white py-24 lg:py-32">
        <div className="max-w-5xl mx-auto px-6">
          <div className="grid lg:grid-cols-12 gap-12 items-start">
            <div className="lg:col-span-4">
              <span className="text-[#c9a961] text-sm uppercase tracking-[0.2em] font-medium">Our Mission</span>
            </div>
            <div className="lg:col-span-8">
              <h2 className="text-3xl lg:text-4xl font-light text-gray-900 leading-[1.3] mb-8">
                We help investors build lasting wealth through carefully curated multifamily real estate investments.
              </h2>
              
              {/* Expandable Content */}
              <div className={`overflow-hidden transition-all duration-500 ${showMission ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'}`}>
                <div className="pt-6 border-t border-gray-200">
                  <p className="text-gray-600 leading-relaxed mb-4">
                    Our goal is to deliver premium returns while providing first-class service that makes real estate investing effortless. We are experts at identifying exceptional apartment deals and partnering with investors to raise capital.
                  </p>
                  <p className="text-gray-600 leading-relaxed">
                    We acquire, renovate, optimize rental income, and ultimately position properties for maximum value—ensuring investor returns are maximized at every stage of the process.
                  </p>
                </div>
              </div>
              
              <button 
                onClick={() => setShowMission(!showMission)}
                className="inline-flex items-center gap-2 text-[#c9a961] text-sm uppercase tracking-[0.15em] font-medium mt-6 group"
              >
                <span>{showMission ? 'Show Less' : 'Learn More'}</span>
                {showMission ? <Minus className="w-4 h-4" /> : <Plus className="w-4 h-4" />}
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Leadership - Editorial Grid */}
      <section className="bg-[#0a0a0a] py-24 lg:py-32">
        <div className="max-w-7xl mx-auto px-6">
          <div className="flex flex-col lg:flex-row lg:items-end lg:justify-between mb-16 lg:mb-20">
            <div>
              <div className="w-12 h-px bg-[#c9a961] mb-6" />
              <h2 className="text-4xl lg:text-5xl font-light text-white">
                Our <span className="font-semibold italic">Leadership</span>
              </h2>
            </div>
          </div>
          
          {/* Team Grid */}
          <div className="grid md:grid-cols-3 gap-6 lg:gap-8">
            {teamMembers.map((member, index) => (
              <div 
                key={index} 
                className="group relative"
              >
                {/* Image Container */}
                <div className="relative aspect-[3/4] overflow-hidden mb-6">
                  <img 
                    src={member.image} 
                    alt={member.name}
                    className="w-full h-full object-cover object-top grayscale group-hover:grayscale-0 transition-all duration-700"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                  
                  {/* Gold Accent on Hover */}
                  <div className="absolute bottom-0 left-0 w-full h-1 bg-[#c9a961] transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left" />
                </div>
                
                {/* Info */}
                <h3 className="text-xl font-semibold text-white mb-1">{member.name}</h3>
                <p className="text-[#c9a961] text-sm uppercase tracking-[0.15em] mb-4">{member.title}</p>
                
                {/* Expandable Bio */}
                <div className={`overflow-hidden transition-all duration-500 ${expandedMember === index ? 'max-h-96' : 'max-h-0'}`}>
                  <p className="text-white/60 text-sm leading-relaxed pb-4">
                    {member.bio}
                  </p>
                </div>
                
                <button 
                  onClick={() => setExpandedMember(expandedMember === index ? null : index)}
                  className="inline-flex items-center gap-2 text-white/50 hover:text-white text-xs uppercase tracking-[0.15em] transition-colors"
                >
                  <span>{expandedMember === index ? 'Close' : 'Read Bio'}</span>
                  {expandedMember === index ? <Minus className="w-3 h-3" /> : <Plus className="w-3 h-3" />}
                </button>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Numbers Strip */}
      <section className="bg-[#c9a961]">
        <div className="max-w-6xl mx-auto grid grid-cols-2 lg:grid-cols-4">
          <div className="px-8 py-12 lg:py-16 text-center border-r border-white/20">
            <div className="text-4xl lg:text-5xl font-light text-white mb-2">60+</div>
            <div className="text-white/80 text-xs uppercase tracking-[0.2em]">Years Experience</div>
          </div>
          <div className="px-8 py-12 lg:py-16 text-center lg:border-r border-white/20">
            <div className="text-4xl lg:text-5xl font-light text-white mb-2">1000s</div>
            <div className="text-white/80 text-xs uppercase tracking-[0.2em]">Units Managed</div>
          </div>
          <div className="px-8 py-12 lg:py-16 text-center border-r border-white/20 border-t lg:border-t-0">
            <div className="text-4xl lg:text-5xl font-light text-white mb-2">20%+</div>
            <div className="text-white/80 text-xs uppercase tracking-[0.2em]">Target IRR</div>
          </div>
          <div className="px-8 py-12 lg:py-16 text-center border-t lg:border-t-0">
            <div className="text-4xl lg:text-5xl font-light text-white mb-2">5</div>
            <div className="text-white/80 text-xs uppercase tracking-[0.2em]">Target Markets</div>
          </div>
        </div>
      </section>

      {/* Philosophy Section */}
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
                Creating the Best Real Estate <span className="italic">Investing Experience</span>
              </h2>
              <p className="text-white/60 leading-relaxed mb-8">
                We don&apos;t just invest in properties. We transform communities, create value, and build lasting partnerships with investors who expect excellence at every turn.
              </p>
              <div className="space-y-4">
                <div className="flex items-start gap-4">
                  <div className="w-px h-12 bg-[#c9a961] flex-shrink-0 mt-1" />
                  <div>
                    <h4 className="text-white font-medium mb-1">Premium Returns</h4>
                    <p className="text-white/50 text-sm">Targeting annual returns of 15-20%+ through strategic value creation.</p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <div className="w-px h-12 bg-[#c9a961] flex-shrink-0 mt-1" />
                  <div>
                    <h4 className="text-white font-medium mb-1">Regular Distributions</h4>
                    <p className="text-white/50 text-sm">Investors benefit from cash flow generated by our stabilized properties.</p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <div className="w-px h-12 bg-[#c9a961] flex-shrink-0 mt-1" />
                  <div>
                    <h4 className="text-white font-medium mb-1">Full Transparency</h4>
                    <p className="text-white/50 text-sm">Real-time updates and complete visibility into every investment. Investors can leverage our online & mobile investor portal for live updates and transparency.</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Luxos Cares - Minimal */}
      <section className="bg-white py-24 lg:py-32">
        <div className="max-w-5xl mx-auto px-6">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div>
              <div className="flex items-center gap-3 mb-6">
                <span className="text-3xl lg:text-4xl font-light text-gray-900">Luxos</span>
                <Heart className="w-8 h-8 text-[#c9a961]" fill="#c9a961" />
                <span className="text-3xl lg:text-4xl font-light text-gray-900">Cares</span>
              </div>
              <p className="text-xl text-gray-600 leading-relaxed mb-6">
                Beyond financial success, we are committed to making a positive impact in the communities where we invest.
              </p>
              <p className="text-gray-500 leading-relaxed">
                We believe that building wealth and building community go hand in hand. Every property we transform becomes a better place to call home.
              </p>
            </div>
            <div className="relative">
              <div className="aspect-square overflow-hidden">
                <img 
                  src="/images/about-community/image.jpeg" 
                  alt="Community"
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="absolute -bottom-4 -right-4 w-32 h-32 border-2 border-[#c9a961] -z-10" />
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
            Schedule a call with our investor relations team to learn about current opportunities.
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
