# Sanity CMS Setup for Luxos Capital

This guide explains how to configure Sanity CMS for managing:
- Resources page categories and items
- About page team members
- Investments page deals

## Quick Start

### 1) Create a Sanity Project
1. Go to https://www.sanity.io/ and create a new project.
2. Note your **Project ID** and **Dataset** (usually "production").

### 2) Configure Environment Variables
Create a `.env.local` file in the project root:

```env
NEXT_PUBLIC_SANITY_PROJECT_ID=your_project_id_here
NEXT_PUBLIC_SANITY_DATASET=production
NEXT_PUBLIC_SANITY_API_VERSION=2024-01-01
```

### 3) Run Sanity Studio
From the `sanity` folder:

```bash
cd sanity
pnpm install
pnpm dev
```

Sanity Studio will run at `http://localhost:3333`.

## Content Types

### Team Member
Use this to add and update leadership team members shown on the About page.

### Deal
Use this to add and update investment opportunities shown on the Invest page.
Each deal includes a status and a list of detail rows (label + value).

### Resource Category
Use this to add categories and their resource items for the Resources page.

## CORS
Add your domains to Sanity CORS settings:
- `http://localhost:3000`
- Your production domain
