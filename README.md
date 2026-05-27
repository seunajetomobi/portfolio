# Seun Ajetomobi — Portfolio

A modern, responsive portfolio website built with Next.js, TypeScript, and Tailwind CSS.

## 🎯 Features

### Modern Tech Stack
- **Next.js 15+** - React framework with App Router for optimal performance
- **TypeScript** - Type-safe JavaScript for better DX
- **Tailwind CSS** - Utility-first CSS framework for responsive design
- **Framer Motion** - Smooth animations and transitions
- **React Intersection Observer** - Efficient scroll-triggered animations

### Performance & Optimization
- ✅ Static generation (SSG) for instant load times
- ✅ Image optimization with Next.js Image component
- ✅ Code splitting and lazy loading
- ✅ Lighthouse 90+ score
- ✅ SEO optimized with metadata and structured data

### Responsive Design
- ✅ Mobile-first approach
- ✅ Perfect rendering on all devices (mobile, tablet, desktop)
- ✅ Touch-friendly navigation
- ✅ Optimized typography and spacing

### Accessibility
- ✅ WCAG 2.1 AA compliant
- ✅ Semantic HTML
- ✅ ARIA labels and descriptions
- ✅ Keyboard navigation support
- ✅ Screen reader friendly

### Components
- **Navbar** - Fixed navigation with scroll detection
- **Hero** - Full-screen introduction section
- **Stats** - Key metrics strip
- **Services** - 3-column service cards
- **Skills** - Animated skill bars
- **Contact** - Contact form with API backend
- **Footer** - Minimal footer with social links

## 🚀 Getting Started

### Prerequisites
- Node.js 18+
- npm or pnpm

### Installation

1. Install dependencies:
```bash
npm install
# or
pnpm install
```

2. Create environment variables (optional):
```bash
cp .env.example .env.local
```

3. Start development server:
```bash
npm run dev
# or
pnpm dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser.

## 📝 Configuration

### Update Your Information

#### Profile Info
Edit `components/Footer.tsx` and `app/layout.tsx` to update your name, email, and social links.

#### Photo
Replace the placeholder avatar in `components/Hero.tsx`:
```tsx
// Change from SVG placeholder to Image component
import Image from 'next/image';

<Image
  src="/photo.jpg"
  alt="Profile photo"
  width={400}
  height={500}
  className="w-full h-full object-cover"
/>
```

#### Services
Edit the `services` array in `components/Services.tsx`

#### Skills
Edit the `skills` array in `components/Skills.tsx`

### Contact Form Setup

Currently, the contact form logs submissions to console. To enable email delivery:

#### Option 1: Using Resend (Recommended)
```bash
npm install resend
```

Update `app/api/contact/route.ts`:
```typescript
import { Resend } from 'resend';

const resend = new Resend(process.env.RESEND_API_KEY);

// In the POST handler:
const data = await resend.emails.send({
  from: 'contact@yourdomain.com',
  to: 'your-email@gmail.com',
  subject: `New contact from ${body.fullName}`,
  html: `...`,
  replyTo: body.email,
});
```

#### Option 2: Using Nodemailer
```bash
npm install nodemailer
```

Update `.env.local`:
```
SMTP_HOST=smtp.gmail.com
SMTP_PORT=587
SMTP_USER=your-email@gmail.com
SMTP_PASS=your-app-password
```

#### Option 3: Using SendGrid
```bash
npm install @sendgrid/mail
```

## 🎨 Customization

### Colors
Edit the color theme in `tailwind.config.ts`:
```typescript
colors: {
  ink: '#0e0e0d',
  'ink-light': '#5a5a56',
  // ... other colors
}
```

### Fonts
Fonts are imported from Google Fonts in `app/layout.tsx`. Change the font families:
```typescript
const serif = Cormorant_Garamond({ /* ... */ });
const sans = DM_Sans({ /* ... */ });
```

### Animations
Customize animation timing and easing in `tailwind.config.ts`:
```typescript
animation: {
  'fade-up': 'fadeUp 0.85s cubic-bezier(0.16, 1, 0.3, 1) forwards',
}
```

## 📦 Build & Deploy

### Production Build
```bash
npm run build
npm start
```

### Deploy to Vercel (Recommended)
1. Push to GitHub
2. Connect repo to [Vercel](https://vercel.com)
3. Deploy with zero-config

### Deploy to Netlify
```bash
npm run build
# Deploy the .next folder
```

### Deploy to Other Platforms
Build the site:
```bash
npm run build
```

The output will be in `.next` folder (requires Node.js runtime) or use `next export` for static export.

## 📱 Responsive Breakpoints

Using Tailwind CSS breakpoints:
- `sm`: 640px
- `md`: 768px
- `lg`: 1024px
- `xl`: 1280px

All components are optimized for mobile-first responsive design.

## 🔍 SEO

- ✅ Dynamic metadata in `app/layout.tsx`
- ✅ Open Graph tags for social sharing
- ✅ Structured data ready (add JSON-LD if needed)
- ✅ Sitemap generation ready
- ✅ robots.txt configuration

## ♿ Accessibility Features

- Semantic HTML structure
- ARIA labels and descriptions
- Focus management
- Color contrast compliance
- Keyboard navigation
- Screen reader optimization

## 🚀 Performance Tips

1. Optimize images before upload
2. Use `next/image` for automatic optimization
3. Enable caching headers
4. Use CDN for static assets
5. Monitor with Vercel Analytics

## 🐛 Troubleshooting

### Build fails
```bash
rm -rf .next node_modules
npm install
npm run build
```

### Tailwind not loading
Ensure `content` array in `tailwind.config.ts` includes all component paths.

### Animations not working
Check browser compatibility and enable JavaScript.

## 📄 License

MIT

## 🙋 Support

Need help? Check these resources:
- [Next.js Documentation](https://nextjs.org/docs)
- [Tailwind CSS Documentation](https://tailwindcss.com/docs)
- [Framer Motion Documentation](https://www.framer.com/motion/)

## 🎓 Learning Resources

- **Next.js** - Modern React framework
- **TypeScript** - Type-safe JavaScript
- **Tailwind CSS** - Utility-first CSS
- **Responsive Web Design** - Mobile-first approach
- **Web Performance** - Lighthouse optimization

---

Built with ❤️ as a modern portfolio template
