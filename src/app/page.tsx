'use client';

import { useState, useRef, useEffect } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { 
  Heart, 
  Lightbulb, 
  Gem, 
  Settings, 
  Zap,
  ChevronLeft,
  ChevronRight,
} from 'lucide-react';
import { stats, deals } from '@/data/content';

// Core Values
const coreValues = [
  { icon: Heart, topLabel: 'Genuine Love', bottomLabel: 'Of People' },
  { icon: Lightbulb, topLabel: 'Make Wise', bottomLabel: 'Choices' },
  { icon: Gem, topLabel: 'First Class', bottomLabel: 'Service' },
  { icon: Settings, topLabel: 'Operational', bottomLabel: 'Excellence' },
  { icon: Zap, topLabel: 'Speed Of', bottomLabel: 'Execution' },
];

export default function HomePage() {
  const [currentDeal, setCurrentDeal] = useState(0);
  const [formData, setFormData] = useState({ firstName: '', lastName: '', email: '', phone: '', message: '', smsConsent: false });
  const videoRef = useRef<HTMLVideoElement>(null);

  useEffect(() => {
    // Ensure video plays on mount
    if (videoRef.current) {
      videoRef.current.play().catch(() => {
        // Autoplay might be blocked, that's okay
      });
    }
  }, []);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    alert('Thank you for your message! We will get back to you soon.');
  };


  return (
    <>
      {/* Video Hero Section */}
      <section className="relative h-screen w-full overflow-hidden">
        {/* Video Background */}
        <video
          ref={videoRef}
          autoPlay
          loop
          muted
          playsInline
          className="absolute inset-0 w-full h-full object-cover"
        >
          <source src="/luxos-capital-hero.mp4" type="video/mp4" />
        </video>
        
        {/* Overlay Gradient */}
        <div className="absolute inset-0 bg-gradient-to-b from-black/80 via-black/70 to-black/85" />
        
        {/* Subtle Gold Accent Overlay */}
        <div className="absolute inset-0 bg-gradient-to-tr from-[#c9a961]/10 via-transparent to-transparent" />
        
        {/* Content */}
        <div className="relative z-10 h-full flex flex-col justify-center items-center text-center px-6">
          {/* Logo Badge */}
          <div className="mb-8 animate-fade-in">
            <div className="w-px h-16 bg-gradient-to-b from-transparent via-[#c9a961] to-transparent mx-auto mb-6" />
            <span className="text-[#c9a961] text-xs tracking-[0.4em] uppercase font-medium">
              Boutique Investment Firm
            </span>
          </div>
          
          {/* Main Headline */}
          <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-light text-white leading-[1.1] tracking-tight mb-6 max-w-5xl">
            <span className="font-extralight">Exceptional</span>{' '}
            <span className="font-semibold">Multifamily</span>
            <br />
            <span className="font-extralight">Real Estate</span>{' '}
            <span className="text-[#c9a961] font-semibold">Investments</span>
          </h1>
          
          {/* Subheadline */}
          <p className="text-lg md:text-xl text-white/80 mb-10 max-w-2xl leading-relaxed font-light tracking-wide">
            Premium returns through carefully curated value-add multi-family asset acquisitions.
            <span className="hidden sm:inline"> Building lasting wealth for discerning investors.</span>
          </p>
          
          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 sm:gap-6 mb-8 sm:mb-16 pb-20 sm:pb-0">
            <Link 
              href="/invest" 
              className="group relative px-6 sm:px-10 py-4 bg-[#c9a961] text-white text-sm uppercase tracking-[0.2em] font-medium rounded-none hover:bg-[#b8944d] transition-all duration-300 overflow-hidden whitespace-nowrap text-center"
            >
              <span className="relative z-10">View Opportunities</span>
              <div className="absolute inset-0 bg-white/20 translate-y-full group-hover:translate-y-0 transition-transform duration-300" />
            </Link>
            <Link 
              href="/strategy" 
              className="group px-6 sm:px-10 py-4 border border-white/40 text-white text-sm uppercase tracking-[0.2em] font-medium rounded-none hover:bg-white hover:text-gray-900 transition-all duration-300 backdrop-blur-sm whitespace-nowrap text-center"
            >
              Our Approach
            </Link>
          </div>
          
        </div>
        
        {/* Stats Overlay Bar */}
        <div className="absolute bottom-0 left-0 right-0 bg-black/40 backdrop-blur-md border-t border-white/10">
          <div className="max-w-6xl mx-auto px-4 sm:px-6 py-4 sm:py-6">
            <div className="grid grid-cols-2 sm:grid-cols-4 divide-x divide-white/20">
              {stats.map((stat, index) => (
                <div key={index} className="text-center px-1 sm:px-4">
                  <div className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-light text-[#c9a961] mb-1 whitespace-nowrap">{stat.value}</div>
                  <div className="text-[9px] sm:text-[10px] md:text-xs uppercase tracking-[0.15em] sm:tracking-[0.2em] text-white/70 font-light leading-tight">
                    {stat.label.split('\n').map((line, i) => (
                      <span key={i} className="block">{line}</span>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section className="bg-dark-light py-20">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div className="text-white">
              <h2 className="gold-text text-lg font-semibold mb-4 uppercase tracking-wider">About Us</h2>
              <h3 className="text-4xl font-bold leading-tight mb-6">
                Luxos Capital exists to empower real estate investors to{' '}
                <em className="text-gray-300">allocate capital to multifamily residential assets across the United States.</em>
              </h3>
              
              <p className="text-gray-300 mb-6 leading-relaxed text-lg">
                We aim to deliver strong risk-adjusted returns and support long-term wealth building. Our team offers a high-touch experience and streamlines the path to institutional-quality multifamily investing.
              </p>
              
              <p className="text-gray-300 mb-8 leading-relaxed text-lg">
                We specialize in sourcing value-add multi-family asset opportunities and aligning with capital partners to fund acquisitions. From purchase through renovation, lease-up, and disposition, we focus on operational and financial optimization to enhance returns at every phase.
              </p>
              
              <div className="flex flex-wrap gap-4">
                <Link href="/strategy" className="btn-gold px-6 sm:px-8 py-3 uppercase text-sm font-bold whitespace-nowrap">
                  Learn More
                </Link>
                <Link href="/about" className="btn-outline-white px-6 sm:px-8 py-3 uppercase text-sm font-bold whitespace-nowrap">
                  Meet The Team
                </Link>
              </div>
            </div>
            
            <div className="relative flex justify-center">
              <div className="bg-white p-2 shadow-2xl transform lg:translate-x-8 lg:translate-y-8 w-full max-w-lg mx-auto">
                <img 
                  src="/multifamily-apartment.webp" 
                  alt="Multifamily Apartment Complex" 
                  className="w-full h-auto"
                />
              </div>
              <div className="absolute -bottom-4 -left-4 w-full h-full bg-gray-700 -z-10 hidden lg:block" />
            </div>
          </div>
        </div>
      </section>

      {/* Core Values */}
      <section className="bg-dark-light py-20 border-t border-gray-800">
        <div className="max-w-7xl mx-auto px-6">
          <h2 className="text-white text-3xl font-bold text-center mb-16">Our Core Values</h2>
          
          <div className="grid grid-cols-2 md:grid-cols-5 gap-8">
            {coreValues.map((value, index) => {
              const Icon = value.icon;
              return (
                <div key={index} className="text-center group">
                  <div className="relative w-28 h-28 sm:w-32 sm:h-32 mx-auto mb-4">
                    <div className="absolute inset-0 rounded-full border-4 border-gold" />
                    <div className="absolute inset-2 rounded-full bg-gold flex items-center justify-center">
                      <Icon className="w-8 h-8 sm:w-10 sm:h-10 text-white" strokeWidth={1.5} />
                    </div>
                  </div>
                  <div className="gold-text text-xs font-bold uppercase tracking-wider leading-tight">
                    {value.topLabel}<br />{value.bottomLabel}
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Why Invest in Multifamily Real Estate */}
      <section className="relative">
        {/* Image with overlay */}
        <div className="relative h-[400px] lg:h-[500px]">
          <img
            src="/why-multifamily-real-estate.jpg"
            alt="Multifamily real estate"
            className="w-full h-full object-cover object-center"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-black/50 via-black/30 to-transparent" />
          <div className="absolute inset-0 flex items-center justify-center">
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white text-center px-6 max-w-4xl leading-tight">
              Why invest in multifamily real estate?
            </h2>
          </div>
        </div>
        
        {/* Content cards */}
        <div className="bg-white">
          <div className="max-w-6xl mx-auto px-6 py-16 lg:py-20">
            <div className="grid md:grid-cols-3 gap-8 lg:gap-12">
              
              <div className="border-l-4 border-gold pl-6">
                <span className="text-gold text-sm font-bold uppercase tracking-wider">01</span>
                <h3 className="text-xl font-bold text-gray-900 mt-2 mb-3">Essential Need</h3>
                <p className="text-gray-600 leading-relaxed">
                  Regardless of what is happening in the economy, people always need a place to live. Housing is a fundamental necessity.
                </p>
              </div>
              
              <div className="border-l-4 border-gold pl-6">
                <span className="text-gold text-sm font-bold uppercase tracking-wider">02</span>
                <h3 className="text-xl font-bold text-gray-900 mt-2 mb-3">Strong Performance</h3>
                <p className="text-gray-600 leading-relaxed">
                  Multifamily properties have consistently generated higher returns with lower volatility than other real estate asset classes.
                </p>
              </div>
              
              <div className="border-l-4 border-gold pl-6">
                <span className="text-gold text-sm font-bold uppercase tracking-wider">03</span>
                <h3 className="text-xl font-bold text-gray-900 mt-2 mb-3">Housing Shortage</h3>
                <p className="text-gray-600 leading-relaxed">
                  The U.S. needs to build 4.3 million new apartment units by 2035 to keep up with demand, creating sustained opportunity.
                </p>
              </div>
              
            </div>
            
            <div className="mt-12 text-center">
              <Link 
                href="/why-multifamily" 
                className="inline-flex items-center gap-3 text-[#c9a961] text-sm uppercase tracking-[0.15em] font-medium group"
              >
                <span>Learn More</span>
                <span className="w-6 h-px bg-[#c9a961] group-hover:w-10 transition-all duration-300" />
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Current Deals */}
      <section className="bg-gray-100 py-20">
        <div className="max-w-6xl mx-auto px-6">
          <h3 className="gold-text text-lg font-semibold mb-2 uppercase tracking-wider text-center">Current Deals</h3>
          <h2 className="text-4xl font-bold text-gray-900 mb-12 text-center">Check Out Our Deals</h2>
          
          <div className="bg-white shadow-xl overflow-hidden">
            <div className="grid md:grid-cols-2">
              <div className="relative h-80 md:h-auto bg-gray-200">
                <img src={deals[currentDeal].image} alt={deals[currentDeal].name} className="w-full h-full object-cover" />
                <button onClick={() => setCurrentDeal(prev => prev === 0 ? deals.length - 1 : prev - 1)} className="absolute left-4 top-1/2 -translate-y-1/2 w-12 h-12 bg-gold rounded-full flex items-center justify-center text-white hover:bg-gold-dark transition">
                  <ChevronLeft className="w-6 h-6" />
                </button>
                <button onClick={() => setCurrentDeal(prev => prev === deals.length - 1 ? 0 : prev + 1)} className="absolute right-4 top-1/2 -translate-y-1/2 w-12 h-12 bg-gold rounded-full flex items-center justify-center text-white hover:bg-gold-dark transition">
                  <ChevronRight className="w-6 h-6" />
                </button>
              </div>
              
              <div className="p-8 md:p-12">
                <div className={`text-sm font-bold uppercase tracking-wider mb-2 ${deals[currentDeal].status === 'Investment Open' ? 'text-green-600' : 'gold-text'}`}>
                  {deals[currentDeal].status}
                </div>
                <h3 className="text-2xl md:text-3xl font-bold text-gray-900 mb-8">{deals[currentDeal].name}</h3>
                
                <div className="space-y-4">
                  {deals[currentDeal].details.map((item, index) => (
                    <div key={index} className="flex justify-between items-center py-2 border-b border-gray-200">
                      <span className="text-gray-600 text-sm">{item.label}</span>
                      <span className="font-semibold gold-text text-sm">{item.value}</span>
                    </div>
                  ))}
                </div>
                
                <Link href="/invest" className="mt-8 btn-gold px-8 py-3 uppercase text-sm font-bold inline-block">
                  View Details
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* The Luxos Difference - Editorial Style */}
      <section className="bg-[#0a0a0a] relative overflow-hidden">
        {/* Large Background Image with Overlay */}
        <div className="absolute inset-0">
          <img 
            src="/images/home-luxos-difference-bg/image.jpeg" 
            alt="Luxury apartment interior"
            className="w-full h-full object-cover opacity-40"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-[#0a0a0a] via-[#0a0a0a]/95 to-[#0a0a0a]/70" />
        </div>
        
        <div className="relative z-10 max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-2 min-h-[800px]">
            {/* Left Content */}
            <div className="flex flex-col justify-center px-4 sm:px-6 lg:px-16 py-20 lg:py-32">
              <div className="w-12 h-px bg-[#c9a961] mb-8" />
              <h2 className="text-3xl sm:text-4xl lg:text-5xl xl:text-6xl font-light text-white leading-[1.1] mb-8">
                The <span className="font-semibold italic">Luxos</span><br />
                Difference
              </h2>
              <p className="text-base sm:text-lg lg:text-xl text-white/70 leading-relaxed mb-12 max-w-lg">
                We don&apos;t just invest in properties. We transform communities, 
                create value, and build lasting partnerships with investors who 
                expect excellence.
              </p>
              
              {/* Elegant Stats Row */}
              <div className="flex flex-wrap gap-6 sm:gap-8 lg:gap-12 mb-12">
                <div className="flex-shrink-0">
                  <div className="text-3xl sm:text-4xl lg:text-5xl font-light text-[#c9a961]">60+</div>
                  <div className="text-[10px] sm:text-xs uppercase tracking-[0.15em] sm:tracking-[0.2em] text-white/50 mt-2 leading-tight">Years Combined<br/>Experience</div>
                </div>
                <div className="flex-shrink-0">
                  <div className="text-3xl sm:text-4xl lg:text-5xl font-light text-[#c9a961]">12-15%</div>
                  <div className="text-[10px] sm:text-xs uppercase tracking-[0.15em] sm:tracking-[0.2em] text-white/50 mt-2 leading-tight">Target<br/>IRR</div>
                </div>
                <div className="flex-shrink-0">
                  <div className="text-3xl sm:text-4xl lg:text-5xl font-light text-[#c9a961]">8-12%</div>
                  <div className="text-[10px] sm:text-xs uppercase tracking-[0.15em] sm:tracking-[0.2em] text-white/50 mt-2 leading-tight">Yield to<br/>Cost</div>
                </div>
                <div className="flex-shrink-0">
                  <div className="text-3xl sm:text-4xl lg:text-5xl font-light text-[#c9a961] whitespace-nowrap">1000s</div>
                  <div className="text-[10px] sm:text-xs uppercase tracking-[0.15em] sm:tracking-[0.2em] text-white/50 mt-2 leading-tight">Units<br/>Managed</div>
                </div>
              </div>
              
              <Link 
                href="/strategy" 
                className="inline-flex items-center gap-3 text-[#c9a961] text-sm uppercase tracking-[0.2em] font-medium group whitespace-nowrap"
              >
                <span className="whitespace-nowrap">Discover Our Approach</span>
                <span className="w-8 h-px bg-[#c9a961] group-hover:w-12 transition-all duration-300 flex-shrink-0" />
              </Link>
            </div>
            
            {/* Right - Staggered Image Grid */}
            <div className="hidden lg:flex items-center justify-center px-8 py-20">
              <div className="relative w-full max-w-lg">
                {/* Main Large Image */}
                <div className="relative z-10 aspect-[4/5] overflow-hidden shadow-2xl">
                  <img 
                    src="/images/home-luxury-apartment-main/image.jpg" 
                    alt="Modern luxury apartment"
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent" />
                </div>
                
                {/* Floating Accent Image */}
                <div className="absolute -bottom-8 -left-12 w-48 aspect-square overflow-hidden shadow-xl border-4 border-[#0a0a0a] z-20">
                  <img 
                    src="/images/home-skyline-accent/image.jpg" 
                    alt="Skyline"
                    className="w-full h-full object-cover"
                  />
                </div>
                
                {/* Gold Accent Frame */}
                <div className="absolute -top-4 -right-4 w-full h-full border border-[#c9a961]/30 z-0" />
                
                {/* Text Overlay Card */}
                <div className="absolute bottom-12 right-0 translate-x-8 bg-[#c9a961] p-6 z-30 max-w-[200px]">
                  <div className="text-white text-sm font-medium leading-relaxed">
                    &ldquo;Excellence in every detail, from acquisition to exit.&rdquo;
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        
        {/* Bottom Feature Strip */}
        <div className="relative z-10 border-t border-white/10">
          <div className="max-w-7xl mx-auto grid md:grid-cols-3 divide-y md:divide-y-0 md:divide-x divide-white/10">
            <div className="px-4 sm:px-8 py-8 sm:py-10 group">
              <h4 className="text-white font-semibold mb-2 group-hover:text-[#c9a961] transition-colors">Value Creation</h4>
              <p className="text-white/50 text-sm leading-relaxed">Strategic renovations that increase rents 20-25% and maximize property value.</p>
            </div>
            <div className="px-4 sm:px-8 py-8 sm:py-10 group">
              <h4 className="text-white font-semibold mb-2 group-hover:text-[#c9a961] transition-colors">Transparent Partnership</h4>
              <p className="text-white/50 text-sm leading-relaxed">Real-time updates and clear communication through our investor portal.</p>
            </div>
            <div className="px-4 sm:px-8 py-8 sm:py-10 group">
              <h4 className="text-white font-semibold mb-2 group-hover:text-[#c9a961] transition-colors">Aligned Interests</h4>
              <p className="text-white/50 text-sm leading-relaxed">We invest alongside you. Your success is our success.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Contact CTA */}
      <section className="bg-gold py-20">
        <div className="max-w-6xl mx-auto px-6">
          <div className="text-center mb-12">
            <h3 className="text-white text-lg font-semibold uppercase tracking-wider">Ready To Connect?</h3>
          </div>
          
          <div className="grid md:grid-cols-2 gap-12">
            <div className="flex flex-col items-center justify-center md:border-r border-white/30 md:pr-12">
              <h2 className="text-white text-3xl sm:text-4xl font-bold text-center mb-8 leading-tight">
                Book a call with our<br />investor relations team<br />today to learn more<br />about current<br />investment<br />opportunities.
              </h2>
              <Link href="/contact" className="btn-outline-white px-8 py-3 uppercase text-sm font-bold">
                Book Your Call
              </Link>
            </div>
            
            <div className="md:pl-12">
              <h3 className="text-white text-2xl sm:text-3xl font-bold mb-2">Have a question?</h3>
              <p className="text-white/90 mb-8 text-sm">Please use the form below to contact us.</p>
              
              <form onSubmit={handleSubmit} className="space-y-4">
                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <label className="block text-white text-sm mb-1">First name*</label>
                    <input type="text" required className="w-full px-4 py-2 rounded border-0 text-gray-900" />
                  </div>
                  <div>
                    <label className="block text-white text-sm mb-1">Last name*</label>
                    <input type="text" required className="w-full px-4 py-2 rounded border-0 text-gray-900" />
                  </div>
                </div>
                <div>
                  <label className="block text-white text-sm mb-1">Email*</label>
                  <input type="email" required className="w-full px-4 py-2 rounded border-0 text-gray-900" />
                </div>
                <div>
                  <label className="block text-white text-sm mb-1">Phone number*</label>
                  <input type="tel" required className="w-full px-4 py-2 rounded border-0 text-gray-900" />
                </div>
                <div>
                  <label className="block text-white text-sm mb-1">Message</label>
                  <textarea rows={4} className="w-full px-4 py-2 rounded border-0 resize-none text-gray-900" />
                </div>
                <button type="submit" className="btn-outline-white px-8 py-3 uppercase text-sm font-bold">
                  Submit
                </button>
              </form>
            </div>
          </div>
        </div>
      </section>

    </>
  );
}
