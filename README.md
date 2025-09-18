# Kian Janloo - Portfolio Website

A modern, responsive portfolio website showcasing my skills, experience, and projects as a Frontend Developer. Built with React, TypeScript, and modern web technologies.

## 🌐 Live Demo

**Deployment:** [https://myself-wheat.vercel.app/](https://myself-wheat.vercel.app/)

## 🚀 Features

- **Modern Design**: Clean, professional UI with glass morphism effects and smooth animations
- **Responsive Layout**: Fully responsive design that works on all devices
- **Interactive Elements**: Smooth scrolling, particle background, and engaging animations
- **Performance Optimized**: Lazy loading, optimized images, and efficient rendering
- **SEO Friendly**: Proper meta tags, structured data, and semantic HTML
- **Contact Form**: Integrated contact form with email functionality
- **Resume Download**: Direct download functionality for resume
- **Dark Theme**: Beautiful dark theme with gradient accents

## 🛠️ Tech Stack

### Frontend
- **React 19** - Modern React with latest features
- **TypeScript** - Type-safe development
- **Vite** - Fast build tool and development server
- **Tailwind CSS** - Utility-first CSS framework
- **Framer Motion** - Smooth animations and transitions
- **React Router** - Client-side routing
- **HeroUI** - Modern UI component library

### Backend & Services
- **EmailJS** - Contact form email service
- **Vercel** - Hosting and deployment platform

### Development Tools
- **ESLint** - Code linting and formatting
- **TypeScript** - Static type checking
- **Git** - Version control

## 📁 Project Structure

```
src/
├── app/                    # Main app configuration
├── components/             # Reusable UI components
│   ├── common/            # Shared components (Footer, Header, etc.)
│   ├── landing/           # Landing page sections
│   │   ├── contact/       # Contact form components
│   │   ├── experience/    # Experience section
│   │   ├── projects/      # Projects showcase
│   │   ├── skills/        # Skills section
│   │   └── summary/       # About/Summary section
│   ├── seo/              # SEO components
│   └── ui/               # Custom UI components
├── contexts/             # React contexts
├── hooks/                # Custom React hooks
├── lib/                  # Utility functions
├── screen/               # Screen components
├── types/                # TypeScript type definitions
└── utils/                # Service utilities and data
    └── service/
        ├── emailService.ts
        ├── experiences/
        ├── projects/
        ├── skills/
        └── summary/
```

## 🚀 Getting Started

### Prerequisites

- Node.js (v18 or higher)
- npm or yarn package manager

### Installation

1. **Clone the repository**
   ```bash
   git clone https://github.com/KianJanloo/myself.git
   cd myself
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Start development server**
   ```bash
   npm run dev
   ```

4. **Open your browser**
   Navigate to `http://localhost:5173` to view the application

### Build for Production

```bash
npm run build
```

The built files will be in the `dist` directory, ready for deployment.

### Preview Production Build

```bash
npm run preview
```

## 📱 Sections

- **About**: Personal introduction and professional summary
- **Experience**: Work history and professional achievements
- **Projects**: Portfolio of completed projects with live demos
- **Skills**: Technical skills and proficiency levels
- **Contact**: Contact form and social media links
- **Resume**: Downloadable resume in PDF format

## 🎨 Customization

The portfolio is fully customizable with easy-to-modify data files for projects, skills, and personal information. All content can be updated through dedicated service files without touching the core components.

## 🔧 Configuration

### Environment Variables
Create a `.env` file in the root directory for any environment-specific configurations:

```env
VITE_EMAILJS_SERVICE_ID=your_service_id
VITE_EMAILJS_TEMPLATE_ID=your_template_id
VITE_EMAILJS_PUBLIC_KEY=your_public_key
```

### Email Configuration
The contact form uses EmailJS. Configure your email service in the EmailJS dashboard and update the environment variables.

## 📦 Deployment

### Vercel (Recommended)
1. Connect your GitHub repository to Vercel
2. Configure build settings:
   - Build Command: `npm run build`
   - Output Directory: `dist`
3. Deploy automatically on every push to main branch

### Other Platforms
The project can be deployed to any static hosting service:
- Netlify
- GitHub Pages
- AWS S3 + CloudFront
- Firebase Hosting

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add some amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## 📞 Contact

**Kian Janloo**
- Portfolio: [https://myself-wheat.vercel.app/](https://myself-wheat.vercel.app/)
- GitHub: [@KianJanloo](https://github.com/KianJanloo)
- Email: [Contact through portfolio](https://myself-wheat.vercel.app/#contact)

---

⭐ If you found this project helpful, please give it a star!