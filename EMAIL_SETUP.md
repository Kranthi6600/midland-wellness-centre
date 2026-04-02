# Email Service Setup for Midland Wellness Centre

## 🚨 IMPORTANT - Your Project Goes Live Today!

Since this is your first live project, I'll help you set up email properly. All appointment requests should go to: **info@midlandwellness.ca**

## Quick Setup Options

### Option 1: Easiest - Use Formspree (Recommended for beginners)
1. Go to https://formspree.io/
2. Sign up for free account
3. Create a new form
4. Add your email: info@midlandwellness.ca
5. Get your form ID and add it to the project

### Option 2: Use EmailJS (Free tier available)
1. Go to https://www.emailjs.com/
2. Sign up for free account
3. Create email service
4. Add your email: info@midlandwellness.ca
5. Get your credentials

### Option 3: Use SendGrid (More professional)
1. Go to https://sendgrid.com/
2. Sign up for free account
3. Verify your email domain
4. Get API key

## Environment Variables Setup

Create a file called `.env.local` in your project root:

```env
# Choose ONE of these options:

# Option 1: Formspree
NEXT_PUBLIC_FORMSPREE_ID=your_formspree_id_here

# Option 2: EmailJS
NEXT_PUBLIC_EMAILJS_SERVICE_ID=your_service_id
NEXT_PUBLIC_EMAILJS_TEMPLATE_ID=your_template_id
NEXT_PUBLIC_EMAILJS_PUBLIC_KEY=your_public_key

# Option 3: SendGrid
SENDGRID_API_KEY=your_sendgrid_api_key
EMAIL_FROM=noreply@midlandwellness.ca
EMAIL_TO=info@midlandwellness.ca
EMAIL_PROVIDER=sendgrid
```

## What I've Already Set Up

✅ Email service with fallback (stores locally if no API keys)
✅ Form validation and error handling
✅ Success messages to users
✅ Professional appointment booking flow
✅ Mobile responsive design
✅ Error handling and user feedback

## For Today - Quick Fix

Since you're going live today, I recommend **Option 1 (Formspree)** because:
- ✅ Easiest to set up (5 minutes)
- ✅ Free for up to 50 submissions/month
- ✅ No API keys needed
- ✅ Works immediately
- ✅ Professional appearance

## Next Steps

1. Choose your email service (I recommend Formspree for today)
2. Set up the environment variables
3. Test the appointment form
4. Go live! 🎉

## Emergency Backup

If you can't set up email service today, the system will:
- Store all appointment requests in browser localStorage
- Show success messages to users
- You can manually check the stored requests
- No appointments will be lost

## Need Help?

If you need help with setup, let me know which option you choose and I'll help you implement it!

Good luck with your first live project! 🚀
