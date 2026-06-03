# TraderPro - Professional Trading Portfolio Website

A modern, premium trader portfolio website built with Next.js 15, React 19, TypeScript, Tailwind CSS, and Supabase.

## Features

### Pages
- **Home** - Hero section with profile, trading statistics, and CTAs
- **About Me** - Trading journey, experience, skills, and methodology
- **Dashboard** - Real-time analytics with equity curve, performance charts
- **P&L Calendar** - Daily profit/loss tracking with calendar view
- **Trade Journal** - Trade entries with screenshots and notes
- **Strategies** - Trading strategies documentation (ICT, SMC, etc.)
- **YouTube Learning Hub** - Educational video library
- **Verification** - Performance verification placeholders
- **Gallery** - Trading setup and achievement photos
- **Contact** - Contact form and business inquiries

### Admin Panel
- Secure authentication with Supabase Auth
- Dashboard analytics
- Manage all content (P&L, videos, journal, gallery, strategies)
- Site settings management

### Technical Features
- Dark theme by default with light mode toggle
- Glassmorphism effects
- Smooth Framer Motion animations
- Mobile-first responsive design
- SEO optimized with Open Graph support
- TypeScript for type safety
- ShadCN UI components
- Recharts for data visualization
- Supabase for backend (database, auth, storage)

## Getting Started

### Prerequisites
- Node.js 18+ 
- npm or yarn
- Supabase account

### Installation

1. Clone the repository:
```bash
cd trader-portfolio
```

2. Install dependencies:
```bash
npm install --legacy-peer-deps
```

3. Set up environment variables:
Create a `.env.local` file in the root directory:
```env
NEXT_PUBLIC_SUPABASE_URL=your_supabase_url
NEXT_PUBLIC_SUPABASE_ANON_KEY=your_supabase_anon_key
```

4. Run the development server:
```bash
npm run dev
```

5. Open [http://localhost:3000](http://localhost:3000) in your browser.

## Project Structure

```
trader-portfolio/
├── src/
│   ├── app/                 # Next.js App Router pages
│   │   ├── layout.tsx       # Root layout
│   │   ├── page.tsx         # Home page
│   │   ├── about/           # About page
│   │   ├── dashboard/       # Dashboard page
│   │   ├── pnl/             # P&L Calendar page
│   │   ├── journal/         # Trade Journal page
│   │   ├── strategies/      # Strategies page
│   │   ├── youtube/         # YouTube Hub page
│   │   ├── gallery/         # Gallery page
│   │   ├── verification/    # Verification page
│   │   ├── contact/         # Contact page
│   │   └── admin/           # Admin panel
│   ├── components/
│   │   ├── ui/              # ShadCN UI components
│   │   ├── dashboard/       # Dashboard-specific components
│   │   ├── admin/           # Admin components
│   │   └── shared/          # Shared components (Navbar, Footer)
│   ├── lib/
│   │   ├── supabase.ts      # Supabase client
│   │   └── utils.ts         # Utility functions
│   ├── hooks/               # Custom React hooks
│   ├── types/               # TypeScript type definitions
│   └── supabase/            # Supabase utilities
├── public/                  # Static assets
├── tailwind.config.js       # Tailwind configuration
├── tsconfig.json            # TypeScript configuration
└── package.json             # Dependencies
```

## Database Schema

The application uses Supabase with the following tables:

- `users` - User profiles and trader info
- `trades` - Trade journal entries
- `pnl_calendar` - Daily P&L records
- `youtube_videos` - Educational videos
- `strategies` - Trading strategies
- `social_links` - Social media links
- `gallery` - Gallery images
- `achievements` - Trading achievements
- `contact_messages` - Contact form submissions
- `site_settings` - Site configuration

## Deployment

### Vercel

1. Push code to GitHub
2. Import project in Vercel
3. Add environment variables
4. Deploy

### Environment Variables for Production

```env
NEXT_PUBLIC_SUPABASE_URL=your_production_supabase_url
NEXT_PUBLIC_SUPABASE_ANON_KEY=your_production_supabase_anon_key
```

## Customization

### Branding
- Update profile image in `/public`
- Modify colors in `tailwind.config.js`
- Edit site metadata in `src/app/layout.tsx`

### Content
- Update trading statistics in respective page components
- Add your social links in the database or components
- Customize strategies and educational content

## Tech Stack

- **Framework**: Next.js 15 (App Router)
- **Language**: TypeScript
- **Styling**: Tailwind CSS
- **UI Components**: ShadCN UI (Radix UI primitives)
- **Animations**: Framer Motion
- **Charts**: Recharts
- **Backend**: Supabase
- **Forms**: React Hook Form + Zod
- **Theme**: next-themes

## License

MIT License - feel free to use this template for your own trading portfolio!

## Support

For issues or questions, please open an issue on GitHub.

---

Built with ❤️ for traders
