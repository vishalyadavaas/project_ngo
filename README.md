# 🇮🇳 SevaForAll NGO Website

**सेवा परमो धर्मः** - Service is the highest virtue

A modern, responsive NGO website built with Next.js, featuring a beautiful dark theme and bilingual content (Hindi + English) designed specifically for Indian non-profit organizations.

![Next.js](https://img.shields.io/badge/Next.js-15.4.6-black?style=for-the-badge&logo=next.js)
![React](https://img.shields.io/badge/React-19.1.0-blue?style=for-the-badge&logo=react)
![TailwindCSS](https://img.shields.io/badge/Tailwind_CSS-4.0-38B2AC?style=for-the-badge&logo=tailwind-css)
![License](https://img.shields.io/badge/License-MIT-green?style=for-the-badge)

## 🌟 Features

### 🎨 **Design & User Experience**
- **Dark Theme**: Sophisticated dark design with emerald/cyan accent colors
- **Responsive Design**: Optimized for all devices (mobile, tablet, desktop)
- **Glassmorphism Effects**: Modern UI with backdrop blur and transparency effects
- **Smooth Animations**: Custom CSS animations including floating elements and hover effects
- **Active Navigation**: Intelligent navigation highlighting for current page

### 🇮🇳 **Indian Cultural Integration**
- **Bilingual Content**: Hindi (Devanagari) + English for maximum accessibility
- **Cultural Elements**: Sanskrit quotes and Indian philosophical concepts
- **Local Relevance**: Indian address formats, phone numbers, and cultural context
- **Unity in Diversity**: Celebrating India's diverse heritage with "वसुधैव कुटुम्बकम्"

### 📱 **Pages & Functionality**
- **🏠 Home Page**: Hero section, mission areas, impact statistics, call-to-action
- **ℹ️ About Page**: Organization story, team profiles, mission/vision/values
- **🤝 Volunteer Page**: Comprehensive volunteer registration form with interests
- **📞 Contact Page**: Contact information, inquiry form, office details
- **📧 Newsletter**: Email subscription with validation

### 🎯 **Social Media Integration**
- Instagram, WhatsApp, Twitter, YouTube with authentic platform icons
- Gradient styling with hover animations
- Direct links to social platforms

## 🚀 Quick Start

### Prerequisites
- Node.js 18.0 or later
- npm or yarn package manager

### Installation

1. **Clone the repository**
   ```bash
   git clone <repository-url>
   cd project_ngo
   ```

2. **Install dependencies**
   ```bash
   npm install
   # or
   yarn install
   ```

3. **Start development server**
   ```bash
   npm run dev
   # or
   yarn dev
   ```

4. **Open your browser**
   Navigate to [http://localhost:3000](http://localhost:3000)

## 🛠️ Available Scripts

| Command | Description |
|---------|-------------|
| `npm run dev` | Start development server with Turbopack |
| `npm run build` | Build the application for production |
| `npm run start` | Start the production server |
| `npm run lint` | Run ESLint for code quality |

## 📁 Project Structure

```
project_ngo/
├── public/                 # Static assets
│   ├── images/            # Image assets
│   └── *.svg              # SVG icons
├── src/
│   ├── app/               # Next.js 13+ App Router
│   │   ├── about/         # About page
│   │   ├── contact/       # Contact page
│   │   ├── volunteer/     # Volunteer page
│   │   ├── globals.css    # Global styles & animations
│   │   ├── layout.js      # Root layout component
│   │   └── page.js        # Home page
│   └── components/        # Reusable components
│       ├── Header.js      # Navigation header
│       └── Footer.js      # Site footer
├── package.json
└── README.md
```

## 🎨 Design System

### 🎨 **Color Palette**
- **Primary**: Emerald (#10B981) to Cyan (#06B6D4) gradients
- **Background**: Slate-900 (#0F172A) with variations
- **Accent**: Orange (#F97316) for Indian cultural elements
- **Text**: White (#FFFFFF) and Slate-300 (#CBD5E1)

### ✨ **Key Components**

#### Header
- Responsive navigation with mobile hamburger menu
- Active page highlighting with emerald background
- Scroll-responsive glassmorphism effect
- Bilingual organization branding

#### Footer
- Contact information in Indian format
- Social media links with platform-specific icons
- Newsletter subscription form
- Bilingual taglines and cultural messages

#### Forms
- Volunteer registration with comprehensive fields
- Contact inquiry form with validation
- Dark theme styling with focus states
- Indian phone and address format support

## 🌍 Internationalization

### Hindi Content Integration
- **Organization Name**: SevaForAll (सेवाForAll)
- **Tagline**: सेवा परमो धर्मः (Service is the highest virtue)
- **Page Headers**: Bilingual titles with Devanagari script
- **Contact Info**: Hindi labels with English translations
- **Cultural Quotes**: Sanskrit philosophy integration

### Content Areas
- **Education**: शिक्षा with "सर्वे भवन्तु सुखिनः"
- **Healthcare**: स्वास्थ्य with "आरोग्यं भास्करादिच्छेत्"
- **Development**: सतत विकास with environmental focus
- **Statistics**: Hindi metrics with English translations

## 🔧 Customization

### Adding New Pages
1. Create new folder in `src/app/`
2. Add `page.js` file with your component
3. Update navigation in `src/components/Header.js`
4. Follow existing dark theme styling patterns

### Modifying Content
- **Hindi Text**: Update Devanagari content in respective page files
- **Contact Info**: Modify Indian address/phone in contact components
- **Social Media**: Update platform links in Footer component
- **Colors**: Adjust color scheme in Tailwind classes

### Custom Animations
The project includes custom CSS animations in `globals.css`:
- `float-animation`: Floating background elements
- `pulse-glow`: Glowing effects for important elements
- `hover-lift`: Subtle hover transformations

## 📊 Performance Features

- **Turbopack**: Fast development with Next.js Turbopack
- **App Router**: Next.js 13+ App Router for optimal performance
- **CSS Optimizations**: Tailwind CSS for minimal bundle size
- **Image Optimization**: Next.js built-in image optimization
- **SEO Ready**: Proper meta tags and semantic HTML

## 🤝 Contributing

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit your changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

## 📝 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## 🙏 Acknowledgments

- **Cultural Inspiration**: Indian philosophy and values
- **Design System**: Modern glassmorphism and dark themes
- **Accessibility**: Inclusive design for diverse users
- **Community**: Open source contributors and NGO sector


---

**Built with ❤️ for social impact** | **सेवा से समाज का कल्याण**

*Made in India 🇮🇳 | Empowering Communities Through Technology*
