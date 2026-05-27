# 🚀 Quick Start Guide

## Installation (5 minutes)

```bash
# 1. Install dependencies
npm install

# 2. Start development server
npm run dev
```

Then open http://localhost:3000 in your browser.

## 🎯 Next Steps

### 1. **Update Your Contact Info**
- Edit your email in `components/Contact.tsx`
- Add social links in `components/Footer.tsx`

### 2. **Add Your Photo**
Replace the placeholder in `components/Hero.tsx`:
```tsx
import Image from 'next/image';

<Image
  src="/your-photo.jpg"
  alt="Profile"
  width={600}
  height={800}
/>
```

Place photo in `/public/your-photo.jpg`

### 3. **Enable Email Notifications**
Install Resend (easiest option):
```bash
npm install resend
```

Add API key to `.env.local`:
```
RESEND_API_KEY=re_your_key_here
```

Update `app/api/contact/route.ts` with Resend code.

### 4. **Customize Content**
- **Services**: Edit `components/Services.tsx`
- **Skills**: Edit `components/Skills.tsx`  
- **Colors**: Edit `tailwind.config.ts`
- **Fonts**: Edit `app/layout.tsx`

### 5. **Deploy**
Push to GitHub, then:
- Go to https://vercel.com
- Import your repo
- Deploy (takes 1 minute)

## 📁 File Structure

```
portfolio/
├── app/
│   ├── layout.tsx          ← Main layout + metadata
│   ├── page.tsx            ← Home page
│   ├── globals.css         ← Global styles
│   └── api/
│       └── contact/route.ts ← Contact form API
├── components/
│   ├── Navbar.tsx
│   ├── Hero.tsx
│   ├── Stats.tsx
│   ├── Services.tsx
│   ├── Skills.tsx
│   ├── Contact.tsx
│   └── Footer.tsx
├── public/                 ← Static files (images, etc)
├── lib/
│   └── utils.ts           ← Helper functions
├── tailwind.config.ts     ← Tailwind configuration
├── tsconfig.json          ← TypeScript configuration
├── next.config.js         ← Next.js configuration
└── package.json           ← Dependencies
```

## 🛠️ Available Commands

```bash
npm run dev        # Start dev server (http://localhost:3000)
npm run build      # Production build
npm start          # Start production server
npm run lint       # Check for errors
npm run type-check # TypeScript checking
```

## 🎨 Key Features

✅ **Responsive** - Works perfectly on mobile, tablet, desktop
✅ **Fast** - Optimized with Next.js static generation
✅ **Modern** - React 19, TypeScript, Tailwind CSS
✅ **Animated** - Smooth scroll animations with Framer Motion
✅ **Accessible** - WCAG 2.1 AA compliant
✅ **SEO Ready** - Metadata and Open Graph tags included

## ❓ Common Questions

**Q: How do I change colors?**
A: Edit `tailwind.config.ts` - the colors are defined in the `extend.colors` section.

**Q: How do I add a new section?**
A: Create a new component in `/components`, then import it in `app/page.tsx`.

**Q: How do I host it for free?**
A: Deploy to Vercel (https://vercel.com) - it's free and takes 1 minute.

**Q: Can I use a custom domain?**
A: Yes! Both Vercel and GitHub Pages support custom domains.

**Q: How do I get form submissions?**
A: Set up Resend, SendGrid, or another email service (see step 3 above).

## 📚 Learning Resources

- [Next.js Docs](https://nextjs.org/docs)
- [Tailwind CSS Docs](https://tailwindcss.com/docs)
- [Framer Motion Docs](https://www.framer.com/motion/)
- [TypeScript Handbook](https://www.typescriptlang.org/docs/)

## 🆘 Troubleshooting

**npm install fails**
```bash
rm -rf node_modules package-lock.json
npm install
```

**Styles not showing**
- Make sure you're in the `/Portfolio` directory
- Run `npm run dev` from the root
- Check that `globals.css` is imported in `app/layout.tsx`

**Build fails**
```bash
npm run type-check  # Check for TypeScript errors
npm run build       # Try building again
```

## 🎉 That's It!

You're ready to go! Customize the content and deploy to Vercel. Your portfolio will be live in minutes!

---

**Questions?** Check the full README.md for detailed documentation.
