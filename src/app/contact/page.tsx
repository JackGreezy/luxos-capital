'use client';

import { useState, useRef } from 'react';
import Link from 'next/link';
import { ArrowRight } from 'lucide-react';
import { Turnstile } from '@marsidev/react-turnstile';

export default function ContactPage() {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    investorStatus: '',
    investmentAmount: '',
    message: '',
    smsConsent: false,
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [error, setError] = useState('');
  const [turnstileToken, setTurnstileToken] = useState<string | null>(null);
  const turnstileRef = useRef<any>(null);

  const formatPhoneDisplay = (phone: string) => {
    const digitsOnly = phone.replace(/\D/g, '');
    if (digitsOnly.length <= 3) return digitsOnly;
    if (digitsOnly.length <= 6) return `(${digitsOnly.slice(0, 3)}) ${digitsOnly.slice(3)}`;
    return `(${digitsOnly.slice(0, 3)}) ${digitsOnly.slice(3, 6)}-${digitsOnly.slice(6, 10)}`;
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value, type } = e.target;
    
    // Phone number - only allow digits
    if (name === 'phone') {
      const digitsOnly = value.replace(/\D/g, '');
      setFormData(prev => ({ ...prev, [name]: digitsOnly }));
      return;
    }
    
    setFormData(prev => ({
      ...prev,
      [name]: type === 'checkbox' ? (e.target as HTMLInputElement).checked : value
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setError('');

    if (!turnstileToken) {
      setError('Please complete the security verification.');
      setIsSubmitting(false);
      return;
    }

    try {
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          ...formData,
          turnstileToken,
        }),
      });

      if (!response.ok) {
        const data = await response.json();
        throw new Error(data.error || 'Failed to submit form');
      }

      setSubmitted(true);
      // Reset Turnstile
      if (turnstileRef.current) {
        turnstileRef.current.reset();
      }
    } catch (err) {
      setError(err instanceof Error ? err.message : 'There was an error submitting your request. Please try again or call us directly.');
      // Reset Turnstile on error
      if (turnstileRef.current) {
        turnstileRef.current.reset();
      }
      setTurnstileToken(null);
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <>
      {/* Cinematic Hero */}
      <section className="relative min-h-[60vh] flex items-end">
        <div className="absolute inset-0">
          <img 
            src="/images/contact-hero/image.jpg" 
            alt="Contact Us"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black via-black/70 to-black/40" />
          <div className="absolute inset-0 bg-gradient-to-r from-black/80 via-transparent to-transparent" />
        </div>
        
        <div className="relative z-10 max-w-7xl mx-auto px-6 pb-20 lg:pb-24 pt-40">
          <div className="max-w-2xl">
            <div className="w-12 h-px bg-[#c9a961] mb-8" />
            <h1 className="text-5xl lg:text-7xl font-light text-white leading-[1.05] mb-6">
              Let&apos;s <span className="font-semibold italic">Connect</span>
            </h1>
            <p className="text-xl text-white/70 leading-relaxed max-w-lg">
              Ready to explore passive multifamily investing? Our team is here to answer your questions.
            </p>
          </div>
        </div>
      </section>

      {/* Contact Section - Split Layout */}
      <section className="relative">
        <div className="grid lg:grid-cols-2">
          {/* Left Side - Contact Info */}
          <div className="bg-[#0a0a0a] px-8 lg:px-16 py-20 lg:py-24">
            <div className="max-w-md">
              <div className="w-12 h-px bg-[#c9a961] mb-8" />
              <h2 className="text-3xl lg:text-4xl font-light text-white leading-[1.2] mb-6">
                Get in <span className="italic">Touch</span>
              </h2>
              <p className="text-white/60 leading-relaxed mb-12">
                Whether you&apos;re ready to invest or just want to learn more, we&apos;re here to help you take the next step.
              </p>
              
              <div className="space-y-8 mb-12">
                <div className="border-l-2 border-[#c9a961] pl-6">
                  <h3 className="text-white/40 text-xs uppercase tracking-[0.2em] mb-2">Email</h3>
                  <p className="text-white">investors@luxoscapital.com</p>
                </div>
                
                <div className="border-l-2 border-[#c9a961] pl-6">
                  <h3 className="text-white/40 text-xs uppercase tracking-[0.2em] mb-2">Phone</h3>
                  <p className="text-white">+1 (949) 749-7499</p>
                </div>
                
                <div className="border-l-2 border-[#c9a961] pl-6">
                  <h3 className="text-white/40 text-xs uppercase tracking-[0.2em] mb-2">Office</h3>
                  <p className="text-white">Orange County, California</p>
                  <p className="text-white/60 text-sm mt-1">By appointment only</p>
                </div>
                
                <div className="border-l-2 border-[#c9a961] pl-6">
                  <h3 className="text-white/40 text-xs uppercase tracking-[0.2em] mb-2">Hours</h3>
                  <p className="text-white">Monday – Friday</p>
                  <p className="text-white/60 text-sm mt-1">9:00 AM – 5:00 PM PT</p>
                </div>
              </div>
              
              {/* Schedule Call CTA */}
              <div className="bg-[#c9a961] p-8">
                <h3 className="text-white text-lg font-medium mb-3">Prefer to talk?</h3>
                <p className="text-white/80 text-sm mb-6">
                  Schedule a 15-minute introductory call with our investor relations team.
                </p>
                <button className="inline-flex items-center gap-3 bg-white text-[#c9a961] px-6 py-3 text-sm uppercase tracking-[0.15em] font-medium hover:bg-white/90 transition-colors">
                  <span>Book a Call</span>
                  <ArrowRight className="w-4 h-4" />
                </button>
              </div>
            </div>
          </div>
          
          {/* Right Side - Form */}
          <div className="bg-white px-8 lg:px-16 py-20 lg:py-24">
            <div className="max-w-md mx-auto lg:mx-0">
              <span className="text-[#c9a961] text-sm uppercase tracking-[0.2em] font-medium">Send a Message</span>
              <h2 className="text-2xl lg:text-3xl font-light text-gray-900 leading-[1.3] mt-4 mb-8">
                We&apos;ll respond within 24 hours.
              </h2>
              
              {submitted ? (
                <div className="text-center py-12">
                  <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                    <svg className="w-8 h-8 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                  </div>
                  <h3 className="text-2xl font-light text-gray-900 mb-2">
                    Thank You!
                  </h3>
                  <p className="text-gray-600">
                    We have received your message and will be in touch within 24 hours.
                  </p>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid grid-cols-2 gap-4">
                    <div>
                      <label className="block text-gray-500 text-xs uppercase tracking-[0.15em] mb-2">First Name*</label>
                      <input 
                        type="text" 
                        name="firstName"
                        required 
                        value={formData.firstName}
                        onChange={handleChange}
                        disabled={isSubmitting}
                        className="w-full px-0 py-3 bg-transparent border-0 border-b border-gray-300 focus:border-[#c9a961] focus:outline-none transition-colors disabled:opacity-50"
                      />
                    </div>
                    <div>
                      <label className="block text-gray-500 text-xs uppercase tracking-[0.15em] mb-2">Last Name*</label>
                      <input 
                        type="text" 
                        name="lastName"
                        required 
                        value={formData.lastName}
                        onChange={handleChange}
                        disabled={isSubmitting}
                        className="w-full px-0 py-3 bg-transparent border-0 border-b border-gray-300 focus:border-[#c9a961] focus:outline-none transition-colors disabled:opacity-50"
                      />
                    </div>
                  </div>
                  
                  <div>
                    <label className="block text-gray-500 text-xs uppercase tracking-[0.15em] mb-2">Email*</label>
                    <input 
                      type="email" 
                      name="email"
                      required 
                      value={formData.email}
                      onChange={handleChange}
                      disabled={isSubmitting}
                      className="w-full px-0 py-3 bg-transparent border-0 border-b border-gray-300 focus:border-[#c9a961] focus:outline-none transition-colors disabled:opacity-50"
                    />
                  </div>
                  
                  <div>
                    <label className="block text-gray-500 text-xs uppercase tracking-[0.15em] mb-2">Phone*</label>
                    <input 
                      type="tel" 
                      name="phone"
                      required 
                      value={formatPhoneDisplay(formData.phone)}
                      onChange={handleChange}
                      disabled={isSubmitting}
                      maxLength={14}
                      className="w-full px-0 py-3 bg-transparent border-0 border-b border-gray-300 focus:border-[#c9a961] focus:outline-none transition-colors disabled:opacity-50"
                      placeholder="(555) 555-5555"
                    />
                  </div>
                  
                  <div>
                    <label className="block text-gray-500 text-xs uppercase tracking-[0.15em] mb-2">Accredited Investor?</label>
                    <select 
                      name="investorStatus"
                      value={formData.investorStatus}
                      onChange={handleChange}
                      disabled={isSubmitting}
                      className="w-full px-0 py-3 bg-transparent border-0 border-b border-gray-300 focus:border-[#c9a961] focus:outline-none transition-colors appearance-none cursor-pointer disabled:opacity-50"
                    >
                      <option value="">Select one...</option>
                      <option value="yes">Yes</option>
                      <option value="no">No</option>
                      <option value="unsure">Not sure</option>
                    </select>
                  </div>
                  
                  <div>
                    <label className="block text-gray-500 text-xs uppercase tracking-[0.15em] mb-2">Investment Amount</label>
                    <select 
                      name="investmentAmount"
                      value={formData.investmentAmount}
                      onChange={handleChange}
                      disabled={isSubmitting}
                      className="w-full px-0 py-3 bg-transparent border-0 border-b border-gray-300 focus:border-[#c9a961] focus:outline-none transition-colors appearance-none cursor-pointer disabled:opacity-50"
                    >
                      <option value="">Select range...</option>
                      <option value="100k-250k">$100,000 – $250,000</option>
                      <option value="250k-500k">$250,000 – $500,000</option>
                      <option value="500k-1m">$500,000 – $1,000,000</option>
                      <option value="1m+">$1,000,000+</option>
                    </select>
                  </div>
                  
                  <div>
                    <label className="block text-gray-500 text-xs uppercase tracking-[0.15em] mb-2">Message</label>
                    <textarea 
                      name="message"
                      rows={3} 
                      value={formData.message}
                      onChange={handleChange}
                      disabled={isSubmitting}
                      className="w-full px-0 py-3 bg-transparent border-0 border-b border-gray-300 focus:border-[#c9a961] focus:outline-none transition-colors resize-none disabled:opacity-50"
                      placeholder="Tell us about your investment goals..."
                    />
                  </div>
                  
                  <div className="flex items-start gap-3 pt-2">
                    <input 
                      type="checkbox" 
                      id="smsConsent"
                      name="smsConsent"
                      checked={formData.smsConsent}
                      onChange={handleChange}
                      disabled={isSubmitting}
                      className="mt-1 accent-[#c9a961] disabled:opacity-50"
                    />
                    <label htmlFor="smsConsent" className="text-gray-500 text-sm leading-relaxed">
                      I consent to receive communications from Luxos Capital.
                    </label>
                  </div>

                  {/* Turnstile */}
                  <div className="flex justify-center pt-2">
                    <Turnstile
                      ref={turnstileRef}
                      siteKey={process.env.NEXT_PUBLIC_TURNSTILE_SITE_KEY || ''}
                      onSuccess={(token) => setTurnstileToken(token)}
                      onError={() => setTurnstileToken(null)}
                      onExpire={() => setTurnstileToken(null)}
                      options={{
                        theme: 'light',
                        size: 'normal',
                      }}
                    />
                  </div>

                  {error && (
                    <div className="p-4 bg-red-50 border border-red-200 rounded text-red-700 text-sm">
                      {error}
                    </div>
                  )}
                  
                  <button 
                    type="submit" 
                    disabled={isSubmitting || !turnstileToken}
                    className="w-full bg-[#c9a961] text-white px-8 py-4 text-sm uppercase tracking-[0.15em] font-medium hover:bg-[#b8944d] transition-colors mt-4 disabled:opacity-50 disabled:cursor-not-allowed"
                  >
                    {isSubmitting ? 'Submitting...' : 'Send Message'}
                  </button>
                </form>
              )}
            </div>
          </div>
        </div>
      </section>

      {/* Map / Location Section */}
      <section className="relative h-[400px] lg:h-[500px]">
        <img 
          src="/images/contact-orange-county/image.jpg" 
          alt="Orange County California"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-black/60" />
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="text-center px-6">
            <span className="text-[#c9a961] text-xs uppercase tracking-[0.3em] mb-4 block">Headquarters</span>
            <h3 className="text-4xl lg:text-5xl font-light text-white mb-4">
              Orange County, <span className="italic">California</span>
            </h3>
            <p className="text-white/60">
              Serving investors nationwide from Southern California
            </p>
          </div>
        </div>
      </section>
    </>
  );
}
