# NorthernWindHVAC Website

A modern, high-converting Next.js website for NorthernWindHVAC - a professional HVAC company serving Glendale, Burbank, Tujunga, Pasadena, and surrounding areas.

## Features

- **Modern Design**: Clean, professional design with Tailwind CSS
- **Fully Responsive**: Optimized for all devices (mobile, tablet, desktop)
- **High Converting**: Multiple CTAs, trust signals, and conversion-optimized layouts
- **SEO Optimized**: Proper meta tags and semantic HTML
- **Fast Performance**: Built with Next.js 14 and optimized for speed

## Pages

1. **Home** (`/`) - Hero section, services overview, testimonials, and CTAs
2. **About Us** (`/about`) - Company story, values, and team
3. **Services** (`/services`) - Detailed HVAC service offerings
4. **Serving Areas** (`/serving-areas`) - Target locations and service coverage
5. **Contact** (`/contact`) - Contact form and business information

## Tech Stack

- **Framework**: Next.js 16 (App Router)
- **Styling**: Tailwind CSS 4
- **Language**: TypeScript
- **Package Manager**: npm

## Getting Started

### Prerequisites

- Node.js 18+ installed
- npm or yarn package manager

### Installation

1. Navigate to the project directory:
```bash
cd NorthernWindHVAC
```

2. Install dependencies (already done):
```bash
npm install
```

### Development

Run the development server:
```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser.

### Build for Production

```bash
npm run build
```

### Start Production Server

```bash
npm start
```

## Project Structure

```
NorthernWindHVAC/
├── app/
│   ├── layout.tsx          # Root layout with navbar and footer
│   ├── page.tsx            # Home page
│   ├── globals.css         # Global styles and Tailwind directives
│   ├── about/
│   │   └── page.tsx        # About Us page
│   ├── services/
│   │   └── page.tsx        # Services page
│   ├── serving-areas/
│   │   └── page.tsx        # Serving Areas page
│   └── contact/
│       └── page.tsx        # Contact page
├── components/
│   ├── Navbar.tsx          # Navigation component
│   └── Footer.tsx          # Footer component
├── tailwind.config.ts      # Tailwind configuration
├── tsconfig.json           # TypeScript configuration
└── package.json            # Dependencies and scripts
```

## Customization

### Colors

Edit the color scheme in `tailwind.config.ts`:
- Primary colors (blue): Used for main CTAs and accents
- Secondary colors (red): Used for urgent CTAs and highlights

### Contact Information

Update contact details in:
- `components/Footer.tsx`
- `app/contact/page.tsx`

### License Number

Update the license number in `components/Footer.tsx` (currently placeholder: #123456)

### Form Handling

The contact form in `app/contact/page.tsx` currently logs to console. To connect to a backend:
1. Update the `handleSubmit` function
2. Add your API endpoint or email service
3. Configure proper error handling

## Deployment

This Next.js app can be deployed to:
- **Vercel** (recommended): `vercel deploy`
- **Netlify**: Connect your git repository
- **Custom server**: Build and serve the `.next` folder

## Performance Features

- Server-side rendering (SSR)
- Image optimization (when images are added)
- Code splitting
- CSS optimization
- Fast refresh during development

## Future Enhancements

- Add actual images for services and team members
- Integrate with a CRM for form submissions
- Add live chat functionality
- Implement blog/resources section
- Add customer portal for appointment scheduling
- Connect to Google Maps API for service area visualization

## License

Copyright 2025 NorthernWindHVAC. All rights reserved.
