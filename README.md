# HeatWear - Smart Medical Heat Therapy Landing Page

Modern, Apple-inspired landing page built with React, Tailwind CSS, and Vite.

## 🎨 Design

- **Apple-inspired** minimalist design
- Custom **color palette** from your image:
  - Desert Sand (#E3CDBF)
  - Golden Hour (#E3AB00)
  - Clay Blossom (#BF786C)
  - Spiced Earth (#590D00)
  - Mossy Grove (#4A4003)

## 🚀 Quick Start

### Prerequisites

- Node.js 18+ and npm

### Installation

```bash
# Navigate to project
cd heat-socks-mvp

# Install dependencies
npm install

# Start development server
npm run dev
```

Visit `http://localhost:5173`

## 📦 Build for Production

```bash
# Build optimized version
npm run build

# Preview production build
npm run preview
```

## 🌐 Deploy to Vercel

### Option 1: Vercel CLI (Recommended)

```bash
# Install Vercel CLI
npm i -g vercel

# Deploy
vercel
```

### Option 2: Vercel Dashboard

1. Push code to GitHub
2. Go to [vercel.com](https://vercel.com)
3. Click "Import Project"
4. Select your repository
5. Vercel auto-detects Vite settings
6. Click "Deploy"

## 📁 Project Structure

```
heat-socks-mvp/
├── src/
│   ├── components/
│   │   ├── Navbar.jsx
│   │   ├── Hero.jsx
│   │   ├── Problem.jsx
│   │   ├── Solution.jsx
│   │   ├── Dashboard.jsx       # Interactive dashboard mockup
│   │   ├── Features.jsx
│   │   ├── HowItWorks.jsx
│   │   ├── Testimonials.jsx
│   │   ├── CTA.jsx
│   │   └── Footer.jsx
│   ├── App.jsx
│   ├── main.jsx
│   └── index.css
├── index.html
├── package.json
├── vite.config.js
├── tailwind.config.js
└── postcss.config.js
```

## ✨ Features

- 🎯 **Real-time monitoring** simulation
- 📊 **Interactive dashboard** mockup
- 💊 **Prescription integration** showcase
- 📱 **Fully responsive** design
- ⚡ **Smooth animations**
- 🎨 **Apple-inspired** aesthetics

## 🛠 Tech Stack

- **React 18** - UI framework
- **Vite** - Build tool
- **Tailwind CSS** - Styling
- **Lucide React** - Icons (optional)

## 🎯 Customization

### Update Colors

Edit `tailwind.config.js`:

```js
colors: {
  'desert-sand': '#E3CDBF',
  'golden-hour': '#E3AB00',
  // ...
}
```

### Connect Backend

Update `CTA.jsx` form submission:

```jsx
const handleSubmit = async (e) => {
  e.preventDefault()
  await fetch('/api/waitlist', {
    method: 'POST',
    body: JSON.stringify({ email })
  })
}
```

## 📋 TODO

- [ ] Connect email form to backend API
- [ ] Add product images/photos
- [ ] Create demo video
- [ ] Add FAQ section
- [ ] Implement analytics
- [ ] Add SEO meta tags
- [ ] Set up medical disclaimers

## 🏥 Medical Compliance

Remember to add:
- HIPAA compliance notices
- Medical disclaimers
- Privacy policy
- Terms of service
- Doctor verification system

## 📄 License

MIT

## 🤝 Support

For questions: support@heatwear.com
