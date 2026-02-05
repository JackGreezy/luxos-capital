# Contact Form Setup Guide

This guide will help you set up the contact form with SendGrid email integration and Cloudflare Turnstile CAPTCHA.

## Prerequisites

1. **SendGrid Account**: Sign up at [sendgrid.com](https://sendgrid.com)
2. **Cloudflare Account**: Sign up at [cloudflare.com](https://cloudflare.com) (free tier works)

## Step 1: SendGrid Setup

### 1.1 Create SendGrid API Key
1. Log in to your SendGrid account
2. Go to **Settings** → **API Keys**
3. Click **Create API Key**
4. Name it (e.g., "Luxos Capital Contact Form")
5. Select **Full Access** or **Restricted Access** with Mail Send permissions
6. Copy the API key (starts with `SG.`)

### 1.2 Create Email Template
1. Go to **Email API** → **Dynamic Templates**
2. Click **Create a Dynamic Template**
3. Name it (e.g., "Luxos Capital Contact Confirmation")
4. Click **Add Version**
5. Choose **Code Editor**
6. Copy the HTML from `src/lib/email/template.html` into the editor
7. Save the template
8. Copy the **Template ID** (starts with `d-`)

### 1.3 Verify Sender Identity
1. Go to **Settings** → **Sender Authentication**
2. Verify your domain or single sender email
3. Use the verified email for `SENDGRID_FROM_EMAIL`

## Step 2: Cloudflare Turnstile Setup

### 2.1 Create Turnstile Site
1. Log in to Cloudflare Dashboard
2. Go to **Turnstile** (in the sidebar)
3. Click **Add Site**
4. Enter site name: "Luxos Capital Contact Form"
5. Select domain (or use "localhost" for development)
6. Choose widget mode: **Managed** (recommended)
7. Click **Create**
8. Copy the **Site Key** and **Secret Key**

## Step 3: Environment Variables

Create a `.env.local` file in the project root:

```bash
# SendGrid Configuration
SENDGRID_API_KEY=SG.your_api_key_here
SENDGRID_TEMPLATE_ID=d-your_template_id_here
SENDGRID_FROM_EMAIL=investors@luxoscapital.com
SENDGRID_FROM_NAME=Luxos Capital
SENDGRID_REPLY_TO=investors@luxoscapital.com

# Cloudflare Turnstile Configuration
NEXT_PUBLIC_TURNSTILE_SITE_KEY=your_turnstile_site_key_here
TURNSTILE_SECRET_KEY=your_turnstile_secret_key_here

# Internal notification emails
INTERNAL_NOTIFICATION_EMAIL_1=jack@sitereviver.com
INTERNAL_NOTIFICATION_EMAIL_2=investors@luxoscapital.com
```

**Important**: 
- Never commit `.env.local` to git (it's already in `.gitignore`)
- Use `NEXT_PUBLIC_` prefix for client-side environment variables
- Restart your dev server after adding environment variables

## Step 4: Test the Form

1. Start your development server: `pnpm dev`
2. Navigate to `/contact`
3. Fill out the form
4. Complete the Turnstile challenge
5. Submit the form
6. Check:
   - Console logs for any errors
   - Your email inbox for the confirmation email
   - Internal notification emails

## Troubleshooting

### Turnstile not showing
- Verify `NEXT_PUBLIC_TURNSTILE_SITE_KEY` is set correctly
- Check browser console for errors
- Ensure the domain matches your Turnstile site configuration

### Emails not sending
- Verify `SENDGRID_API_KEY` is correct (starts with `SG.`)
- Check SendGrid activity logs for errors
- Verify sender email is authenticated in SendGrid
- Check that `SENDGRID_TEMPLATE_ID` matches your template

### Form submission errors
- Check browser console and server logs
- Verify all required fields are filled
- Ensure Turnstile token is being generated

## Email Template Variables

The email template uses Handlebars syntax. Available variables:

### Brand Variables
- `company_name`: "Luxos Capital"
- `logo_url`: Logo image URL
- `city_state`: "Orange County, California"
- `brand_accent`: Brand color (#c9a961)
- `brand_gold`: Gold accent color
- `hero_title`: Main heading
- `hero_subtitle`: Subheading text
- `call_phone`: Formatted phone number
- `site_url`: Website URL

### Lead Variables
- `lead.name`: Full name
- `lead.email`: Email address
- `lead.phone`: Formatted phone number
- `lead.phone_plain`: Phone number without formatting
- `lead.projectType`: Service interest/investor status
- `lead.investorStatus`: Accredited investor status
- `lead.investmentAmount`: Investment amount range
- `lead.message`: Message content
- `submitted_date`: Formatted submission date

See `src/lib/email/example-template-data.json` for a complete example.

## Production Deployment

### Vercel
1. Add all environment variables in Vercel dashboard
2. Under **Settings** → **Environment Variables**
3. Add each variable for Production, Preview, and Development environments

### Other Platforms
- Add environment variables through your hosting platform's dashboard
- Ensure `NEXT_PUBLIC_` variables are available at build time
- Restart your application after adding variables

## Security Notes

- Turnstile tokens expire after 5 minutes
- Tokens are verified server-side before processing
- Never expose `TURNSTILE_SECRET_KEY` in client-side code
- Keep `SENDGRID_API_KEY` secure and rotate regularly
- Use environment variables, never hardcode secrets
