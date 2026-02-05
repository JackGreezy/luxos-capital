// lib/brand.ts
export function getBrand() {
  // Luxos Capital brand colors
  const COLORS = {
    gold: '#c9a961', // Brand gold
    dark: '#0a0a0a', // Dark background
    accent: '#c9a961', // Accent color
  };

  return {
    // Email template fields
    subject: "We received your investment inquiry",
    preheader: "Thank you for your interest in Luxos Capital. We have received your request and will contact you within 24 hours.",
    company_name: 'Luxos Capital',
    logo_url: 'https://luxoscapital.com/luxos-capital-logo.png',
    city_state: "Orange County, California",
    brand_accent: COLORS.gold,
    brand_gold: COLORS.gold,
    cta_dark_bg: COLORS.dark,
    bg_color: "#F9FAFB",
    text_dark: "#111827",
    text_muted: "#6B7280",
    text_body: "#374151",
    text_faint: "#9CA3AF",
    border_color: "#E5E7EB",
    card_header_bg: "#FEF3C7",

    // Hero content
    hero_title: "Thank you for your inquiry",
    hero_subtitle: "Our team will review your details and reach out within 24 hours to discuss how Luxos Capital can help you achieve your investment goals.",
    details_title: "Inquiry Details",

    // CTA buttons
    call_cta_label: "Call Our Team",
    call_phone: "+1 (949) 749-7499",
    call_phone_plain: "19497497499",
    site_cta_label: "Visit Website",
    site_url: "https://luxoscapital.com",

    // Address and footer
    address_line: "Orange County, California",
    footer_note: "This confirmation is a transactional email related to your inquiry. We respect your privacy and will never share your information.",

    // Legacy fields for backward compatibility
    brand_title: 'Luxos Capital',
    brand_tagline: 'Passive Multifamily Real Estate Investing',
    brand_dark_bg: COLORS.dark,
    supportPhone: '+1 (949) 749-7499',
    supportEmail: 'investors@luxoscapital.com',
    service_area: 'Serving investors nationwide from Southern California',
    portfolio_url: 'https://luxoscapital.com/about',
    portfolio_blurb: 'Strategic multifamily real estate investments.',
    intro_copy: 'Delivering exceptional returns through value-add multifamily investments.',
  };
}
