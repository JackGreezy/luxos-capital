'use client';

import { useState } from 'react';
import Link from 'next/link';
import { Plus, Minus } from 'lucide-react';
import { faqItems } from '@/data/content';

const additionalFaqs = [
  { question: 'How do I know if I\'m an accredited investor?', answer: 'An accredited investor must meet at least one of these criteria: (1) Annual income exceeding $200,000 ($300,000 joint with spouse) for the last two years with reasonable expectation of the same this year, OR (2) Net worth exceeding $1 million, individually or jointly with spouse, excluding the value of primary residence. Certain professional credentials (Series 7, 65, or 82 licenses) also qualify.' },
  { question: 'What is a Private Placement Memorandum (PPM)?', answer: 'The PPM is the legal document that outlines all material facts about an investment offering. It includes details about the property, business plan, projected returns, risk factors, fee structure, and the rights and responsibilities of all parties. All investors must review and acknowledge the PPM before investing.' },
  { question: 'How are distributions paid?', answer: 'Distributions are typically paid quarterly when the property generates sufficient cash flow after expenses. The amount varies based on property performance. You\'ll receive detailed statements with each distribution and can track everything in your investor portal.' },
  { question: 'What happens if I need my money before the hold period ends?', answer: 'Real estate syndications are illiquid investments, meaning your capital is committed for the duration of the hold period (typically 3-5 years). There is no secondary market for these investments, so you should only invest capital you won\'t need during this time. Early redemption is generally not possible except in very limited circumstances.' },
  { question: 'How is the property managed?', answer: 'We partner with experienced third-party property management companies who handle day-to-day operations including tenant relations, maintenance, rent collection, and leasing. Our asset management team oversees the property manager to ensure they execute our business plan and maintain high standards.' },
  { question: 'What are the tax implications?', answer: 'Investors receive K-1 tax documents annually detailing their share of income, losses, and deductions. Multifamily investments offer significant tax benefits including depreciation deductions that can offset passive income. We recommend consulting with a tax professional to understand how these benefits apply to your specific situation.' },
];

const allFaqs = [...faqItems, ...additionalFaqs];

const quickAnswers = [
  { question: 'Minimum Investment', answer: '$200K initial investment' },
  { question: 'Hold Period', answer: '3-5 years typically' },
  { question: 'Target IRR', answer: '20%+ annually' },
  { question: 'Distributions', answer: 'Quarterly when available' },
  { question: 'Investor Type', answer: 'Accredited investors' },
  { question: 'Tax Documents', answer: 'K-1 provided annually' },
];

export default function FAQPage() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <>
      {/* Cinematic Hero */}
      <section className="relative min-h-[70vh] flex items-end">
        <div className="absolute inset-0">
          <img 
            src="/images/faq-hero/image.jpg" 
            alt="Frequently Asked Questions"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black via-black/70 to-black/40" />
          <div className="absolute inset-0 bg-gradient-to-r from-black/80 via-transparent to-transparent" />
        </div>
        
        <div className="relative z-10 max-w-7xl mx-auto px-6 pb-20 lg:pb-32 pt-40">
          <div className="max-w-2xl">
            <div className="w-12 h-px bg-[#c9a961] mb-8" />
            <h1 className="text-5xl lg:text-7xl font-light text-white leading-[1.05] mb-6">
              Common <span className="font-semibold italic">Questions</span>
            </h1>
            <p className="text-xl text-white/70 leading-relaxed max-w-lg">
              Everything you need to know about investing with Luxos Capital. Can&apos;t find your answer? We&apos;re here to help.
            </p>
          </div>
        </div>
      </section>

      {/* Quick Reference Strip */}
      <section className="bg-[#c9a961]">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6">
            {quickAnswers.map((item, index) => (
              <div 
                key={index} 
                className={`px-6 py-8 text-center ${
                  index < 5 ? 'border-r border-white/20' : ''
                } ${index >= 2 && index < 4 ? 'border-t md:border-t-0' : ''} ${index >= 4 ? 'border-t lg:border-t-0' : ''}`}
              >
                <div className="text-white/70 text-xs uppercase tracking-[0.15em] mb-2">{item.question}</div>
                <div className="text-white font-medium">{item.answer}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ Accordion */}
      <section className="bg-white py-24 lg:py-32">
        <div className="max-w-4xl mx-auto px-6">
          <div className="mb-16">
            <span className="text-[#c9a961] text-sm uppercase tracking-[0.2em] font-medium">FAQs</span>
            <h2 className="text-3xl lg:text-4xl font-light text-gray-900 leading-[1.3] mt-4">
              Answers to your most important questions about multifamily investing.
            </h2>
          </div>
          
          <div className="space-y-0">
            {allFaqs.map((faq, index) => (
              <div 
                key={index} 
                className="border-t border-gray-200"
              >
                <button
                  onClick={() => setOpenIndex(openIndex === index ? null : index)}
                  className="w-full flex items-start justify-between py-6 text-left group"
                >
                  <span className={`text-lg font-medium pr-8 transition-colors ${
                    openIndex === index ? 'text-[#c9a961]' : 'text-gray-900 group-hover:text-[#c9a961]'
                  }`}>
                    {faq.question}
                  </span>
                  <span className="flex-shrink-0 mt-1">
                    {openIndex === index ? (
                      <Minus className="w-5 h-5 text-[#c9a961]" />
                    ) : (
                      <Plus className="w-5 h-5 text-gray-400 group-hover:text-[#c9a961] transition-colors" />
                    )}
                  </span>
                </button>
                
                <div className={`overflow-hidden transition-all duration-300 ${
                  openIndex === index ? 'max-h-96 pb-6' : 'max-h-0'
                }`}>
                  <p className="text-gray-600 leading-relaxed pr-12">{faq.answer}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Investment Basics - Split Layout */}
      <section className="relative">
        <div className="grid lg:grid-cols-2">
          {/* Image Side */}
          <div className="relative h-[400px] lg:h-auto lg:min-h-[600px]">
            <img 
              src="/images/faq-investment-property/image.jpg" 
              alt="Investment Property"
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-black/30" />
          </div>
          
          {/* Content Side */}
          <div className="bg-[#111] flex items-center px-8 lg:px-16 py-16 lg:py-24">
            <div className="max-w-lg">
              <div className="w-12 h-px bg-[#c9a961] mb-8" />
              <h2 className="text-3xl lg:text-4xl font-light text-white leading-[1.2] mb-6">
                Investment <span className="italic">Basics</span>
              </h2>
              <p className="text-white/60 leading-relaxed mb-10">
                New to real estate syndication? Here are the fundamentals you should understand before investing.
              </p>
              
              <div className="space-y-6">
                <div className="border-l-2 border-[#c9a961] pl-6">
                  <h4 className="text-white font-medium mb-2">What is a Syndication?</h4>
                  <p className="text-white/50 text-sm leading-relaxed">
                    A real estate syndication pools capital from multiple investors to acquire larger properties than any individual could purchase alone.
                  </p>
                </div>
                <div className="border-l-2 border-[#c9a961] pl-6">
                  <h4 className="text-white font-medium mb-2">Passive vs Active</h4>
                  <p className="text-white/50 text-sm leading-relaxed">
                    As a limited partner (LP), you invest capital and receive returns while we handle all property operations and management.
                  </p>
                </div>
                <div className="border-l-2 border-[#c9a961] pl-6">
                  <h4 className="text-white font-medium mb-2">Risk & Returns</h4>
                  <p className="text-white/50 text-sm leading-relaxed">
                    All investments carry risk. We target 20%+ IRR through conservative underwriting and value-add strategies.
                  </p>
                </div>
              </div>
              
              <div className="mt-10">
                <Link 
                  href="/resources" 
                  className="inline-flex items-center gap-3 text-[#c9a961] text-sm uppercase tracking-[0.15em] font-medium group"
                >
                  <span>Explore Resources</span>
                  <span className="w-6 h-px bg-[#c9a961] group-hover:w-10 transition-all duration-300" />
                </Link>
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
            Still Have <span className="italic">Questions</span>?
          </h2>
          <p className="text-white/60 text-lg mb-10 max-w-2xl mx-auto">
            Our investor relations team is here to help. Schedule a call to discuss your specific questions and investment goals.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link 
              href="/contact" 
              className="inline-flex items-center justify-center gap-2 bg-[#c9a961] text-white px-10 py-4 text-sm uppercase tracking-[0.15em] font-medium hover:bg-[#b8944d] transition-colors"
            >
              Contact Us
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
