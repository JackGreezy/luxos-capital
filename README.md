# Luxos Capital

A modern Next.js website for Luxos Capital - a multifamily real estate investment firm.

## Tech Stack

- **Framework**: Next.js 14 (App Router)
- **Styling**: Tailwind CSS
- **Icons**: Lucide React
- **Language**: TypeScript

## Getting Started

First, install dependencies:

```bash
npm install
```

Then, run the development server:

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

## Project Structure

```
src/
├── app/                 # Next.js App Router pages
│   ├── page.tsx         # Home page
│   ├── about/           # About page
│   ├── strategy/        # Strategy page
│   ├── why-multifamily/ # Why Multifamily page
│   ├── invest/          # Invest page
│   ├── process/         # Process page
│   ├── resources/       # Resources page
│   ├── faq/             # FAQ page
│   └── contact/         # Contact page
├── components/          # Shared components
│   ├── Navbar.tsx       # Navigation component
│   └── Footer.tsx       # Footer component
├── data/                # Static data and content
│   └── content.ts       # Site content
└── lib/                 # Utility functions
    └── utils.ts         # Helper utilities
```

## Pages

- **Home** - Hero, About preview, Core Values, How It Works, Deals, Why Multifamily, Contact CTA
- **About** - Team, Values, Acquisition Criteria, 28-Day Transformation
- **Strategy** - Executive Summary, Business Model, Target Markets, Investment Strategy
- **Why Multifamily** - 12 Reasons, Benefits, Comparisons
- **Invest** - Current Deals, Investor Benefits, How to Invest
- **Process** - 10-Step System, Investor Journey
- **Resources** - Educational content, Glossary
- **FAQ** - Common questions and answers
- **Contact** - Contact form, Office info

## Build for Production

```bash
npm run build
npm start
```

## License

Private - All rights reserved.
