# Ayush Chaudhary Portfolio

Dark glassmorphism portfolio website for Ayush Chaudhary built with Next.js 14, Tailwind CSS, lucide-react, and Resend.

## Local Setup

```bash
npm install
npm run dev
```

Open `http://localhost:3000`.

## Contact form (email)

The form in `components/Contact.tsx` POSTs to `/api/contact`. The API uses [Resend](https://resend.com) to email **ayushchaudhary4972@gmail.com** (override with `CONTACT_TO_EMAIL`). The visitor’s email is set as `replyTo` so you can reply directly.

### 1. Resend setup

1. Sign up at [resend.com](https://resend.com) with **ayushchaudhary4972@gmail.com** (required for the test sender).
2. Create an API key at [resend.com/api-keys](https://resend.com/api-keys).
3. Copy `.env.example` to `.env.local` and set `RESEND_API_KEY`.

```bash
cp .env.example .env.local
# Edit .env.local and paste your real API key
```

4. Restart the dev server and submit the contact form.

**Test mode:** `onboarding@resend.dev` only delivers to the email on your Resend account. That matches your Gmail, so it should work for testing.

**Production:** In Resend, add and verify your domain, then set `RESEND_FROM_EMAIL` to something like `Portfolio <hello@yourdomain.com>` in your host’s environment variables.

## Deploy (hosting)

This app should be deployed to a host that supports Next.js API routes. Do not use static-only hosting such as plain GitHub Pages because the contact form depends on `/api/contact`.

### Vercel

Vercel is the recommended deployment target for this project.

1. Push this project to a GitHub repository.
2. Go to [vercel.com/new](https://vercel.com/new) and import the repository.
3. Keep the default framework settings. Vercel will detect Next.js automatically.
4. Add these environment variables in **Project Settings → Environment Variables**:

```txt
RESEND_API_KEY=your_resend_api_key
CONTACT_TO_EMAIL=ayushchaudhary4972@gmail.com
RESEND_FROM_EMAIL="Portfolio Contact <onboarding@resend.dev>"
```

5. Deploy the project.
6. After deployment, submit the contact form on the live Vercel URL to confirm email delivery.

### Production email sender

`onboarding@resend.dev` is fine for testing, but it only works with Resend's test-sender restrictions. For production, verify your own domain in Resend and then change `RESEND_FROM_EMAIL` in Vercel to something like:

```txt
RESEND_FROM_EMAIL="Portfolio <hello@yourdomain.com>"
```

After changing environment variables in Vercel, redeploy the project.
