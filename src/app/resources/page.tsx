'use client';

import { useEffect, useState } from 'react';
import Link from 'next/link';
import { ArrowRight } from 'lucide-react';
import { resources as fallbackResources } from '@/data/content';
import { fetchSanity } from '@/lib/sanity.client';
import { resourcesQuery } from '@/lib/sanity';

const glossaryTerms = [
  { term: 'Cap Rate', definition: 'Capitalization rate — the ratio of Net Operating Income to property value, used to estimate investment return potential.' },
  { term: 'IRR', definition: 'Internal Rate of Return — a metric that accounts for the time value of money when calculating annualized returns.' },
  { term: 'Cash-on-Cash', definition: 'Annual pre-tax cash flow divided by total cash invested, expressed as a percentage of your actual cash return.' },
  { term: 'NOI', definition: 'Net Operating Income — rental income minus operating expenses, calculated before debt service payments.' },
  { term: 'Value-Add', definition: 'Investment strategy focused on acquiring underperforming properties and improving them to increase value and returns.' },
  { term: 'Syndication', definition: 'Pooling capital from multiple investors to acquire larger properties than any individual could purchase alone.' },
  { term: 'LP / GP', definition: 'Limited Partner (passive investor) and General Partner (operator/sponsor who manages the investment).' },
  { term: 'Waterfall', definition: 'The structure that determines how profits are distributed between LPs and GPs at various return thresholds.' },
];

export default function ResourcesPage() {
  type ResourceItem = { title: string; description?: string };
  type ResourceCategory = { category: string; items: ResourceItem[] };

  const [categories, setCategories] = useState<ResourceCategory[]>(fallbackResources);
  const [activeCategory, setActiveCategory] = useState(0);
  const activeResources = categories[activeCategory] || categories[0];

  useEffect(() => {
    let isMounted = true;

    fetchSanity<ResourceCategory[]>(resourcesQuery)
      .then((data) => {
        if (isMounted && Array.isArray(data) && data.length > 0) {
          const normalized = data.map((item) => ({
            ...item,
            items: item.items ?? [],
          }));
          setCategories(normalized);
          setActiveCategory(0);
        }
      })
      .catch(() => null);

    return () => {
      isMounted = false;
    };
  }, []);

  return (
    <>
      {/* Cinematic Hero */}
      <section className="relative min-h-[70vh] flex items-end">
        <div className="absolute inset-0">
          <img 
            src="/images/resources-hero/image.jpg" 
            alt="Investment Resources"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black via-black/70 to-black/40" />
          <div className="absolute inset-0 bg-gradient-to-r from-black/80 via-transparent to-transparent" />
        </div>
        
        <div className="relative z-10 max-w-7xl mx-auto px-6 pb-20 lg:pb-32 pt-40">
          <div className="max-w-2xl">
            <div className="w-12 h-px bg-[#c9a961] mb-8" />
            <h1 className="text-5xl lg:text-7xl font-light text-white leading-[1.05] mb-6">
              Investor <span className="font-semibold italic">Resources</span>
            </h1>
            <p className="text-xl text-white/70 leading-relaxed max-w-lg">
              Educational materials and guides to help you understand multifamily syndication and make informed investment decisions.
            </p>
          </div>
        </div>
      </section>

      {/* Resources by Category - Interactive */}
      <section className="bg-white py-24 lg:py-32">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid lg:grid-cols-12 gap-12 items-start mb-16">
            <div className="lg:col-span-4">
              <span className="text-[#c9a961] text-sm uppercase tracking-[0.2em] font-medium">Education</span>
              <h2 className="text-3xl lg:text-4xl font-light text-gray-900 leading-[1.3] mt-4">
                Browse by topic to deepen your understanding.
              </h2>
            </div>
            <div className="lg:col-span-8">
              {/* Category Tabs */}
              <div className="flex flex-wrap gap-4 mb-12">
                {categories.map((category, index) => (
                  <button
                    key={index}
                    onClick={() => setActiveCategory(index)}
                    className={`px-6 py-3 text-sm uppercase tracking-[0.15em] font-medium transition-all ${
                      activeCategory === index
                        ? 'bg-[#c9a961] text-white'
                        : 'bg-gray-100 text-gray-600 hover:bg-gray-200'
                    }`}
                  >
                    {category.category}
                  </button>
                ))}
              </div>
              
              {/* Active Category Content */}
              <div className="space-y-0">
                {activeResources.items.map((item, itemIndex) => (
                  <div 
                    key={itemIndex} 
                    className="py-8 border-t border-gray-200 group cursor-pointer"
                  >
                    <div className="flex items-start justify-between gap-8">
                      <div className="flex-1">
                        <h3 className="text-xl font-medium text-gray-900 mb-2 group-hover:text-[#c9a961] transition-colors">
                          {item.title}
                        </h3>
                        <p className="text-gray-600 leading-relaxed">
                          {item.description}
                        </p>
                      </div>
                      <ArrowRight className="w-5 h-5 text-gray-400 group-hover:text-[#c9a961] group-hover:translate-x-1 transition-all flex-shrink-0 mt-1" />
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Glossary - Editorial Style */}
      <section className="bg-[#0a0a0a] py-24 lg:py-32">
        <div className="max-w-5xl mx-auto px-6">
          <div className="max-w-3xl mb-16">
            <div className="w-12 h-px bg-[#c9a961] mb-8" />
            <h2 className="text-4xl lg:text-5xl font-light text-white leading-[1.1] mb-6">
              Investment <span className="font-semibold italic">Glossary</span>
            </h2>
            <p className="text-white/60 text-lg leading-relaxed">
              Key terms every multifamily investor should understand before making investment decisions.
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 gap-x-16 gap-y-0">
            {glossaryTerms.map((item, index) => (
              <div 
                key={index} 
                className="py-8 border-t border-white/10 group"
              >
                <h3 className="text-[#c9a961] font-medium mb-3 group-hover:text-white transition-colors">
                  {item.term}
                </h3>
                <p className="text-white/50 leading-relaxed text-sm">
                  {item.definition}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Newsletter - Split Layout */}
      <section className="relative">
        <div className="grid lg:grid-cols-2">
          {/* Image Side */}
          <div className="relative h-[400px] lg:h-auto lg:min-h-[500px]">
            <img 
              src="/images/resources-stay-informed/image.jpg" 
              alt="Stay Informed"
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-black/40" />
          </div>
          
          {/* Form Side */}
          <div className="bg-[#c9a961] flex items-center px-8 lg:px-16 py-16 lg:py-24">
            <div className="max-w-md">
              <div className="w-12 h-px bg-white/40 mb-8" />
              <h2 className="text-3xl lg:text-4xl font-light text-white leading-[1.2] mb-4">
                Stay <span className="italic">Informed</span>
              </h2>
              <p className="text-white/80 leading-relaxed mb-8">
                Subscribe to receive market insights, investment opportunities, and educational content directly to your inbox.
              </p>
              
              <form className="space-y-4">
                <input 
                  type="email" 
                  placeholder="Your email address" 
                  className="w-full px-0 py-4 bg-transparent border-0 border-b border-white/40 text-white placeholder-white/50 focus:outline-none focus:border-white transition-colors"
                />
                <button 
                  type="submit" 
                  className="w-full bg-white text-[#c9a961] px-8 py-4 text-sm uppercase tracking-[0.15em] font-medium hover:bg-white/90 transition-colors mt-6"
                >
                  Subscribe
                </button>
              </form>
              
              <p className="text-white/50 text-xs mt-6">
                We respect your privacy. Unsubscribe at any time.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Quick Links */}
      <section className="bg-white py-24 lg:py-32">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid lg:grid-cols-3 gap-px bg-gray-200">
            <Link 
              href="/why-multifamily" 
              className="bg-white p-12 group"
            >
              <span className="text-[#c9a961] text-xs uppercase tracking-[0.2em] mb-4 block">Learn</span>
              <h3 className="text-2xl font-light text-gray-900 mb-4 group-hover:text-[#c9a961] transition-colors">
                Why Multifamily?
              </h3>
              <p className="text-gray-600 text-sm mb-6">
                Discover the advantages of apartment investing.
              </p>
              <span className="inline-flex items-center gap-2 text-[#c9a961] text-sm uppercase tracking-[0.15em] font-medium">
                <span>Explore</span>
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </span>
            </Link>
            
            <Link 
              href="/process" 
              className="bg-white p-12 group"
            >
              <span className="text-[#c9a961] text-xs uppercase tracking-[0.2em] mb-4 block">Understand</span>
              <h3 className="text-2xl font-light text-gray-900 mb-4 group-hover:text-[#c9a961] transition-colors">
                Our Process
              </h3>
              <p className="text-gray-600 text-sm mb-6">
                See how we identify and execute investments.
              </p>
              <span className="inline-flex items-center gap-2 text-[#c9a961] text-sm uppercase tracking-[0.15em] font-medium">
                <span>Explore</span>
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </span>
            </Link>
            
            <Link 
              href="/faq" 
              className="bg-white p-12 group"
            >
              <span className="text-[#c9a961] text-xs uppercase tracking-[0.2em] mb-4 block">Questions</span>
              <h3 className="text-2xl font-light text-gray-900 mb-4 group-hover:text-[#c9a961] transition-colors">
                FAQs
              </h3>
              <p className="text-gray-600 text-sm mb-6">
                Find answers to common investor questions.
              </p>
              <span className="inline-flex items-center gap-2 text-[#c9a961] text-sm uppercase tracking-[0.15em] font-medium">
                <span>Explore</span>
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </span>
            </Link>
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
            Schedule a call with our team to discuss your investment goals and learn about current opportunities.
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
