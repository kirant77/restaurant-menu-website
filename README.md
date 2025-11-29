# 🍽️ Gourmet Bistro - Restaurant Menu Website

A stunning, modern restaurant menu website built with **React**, **Vite**, and **Tailwind CSS v4**. This project showcases a premium fine dining experience with beautiful animations, glassmorphism effects, and a fully responsive design.

![Restaurant Website](https://img.shields.io/badge/React-18.3-blue) ![Vite](https://img.shields.io/badge/Vite-7.2-purple) ![Tailwind](https://img.shields.io/badge/Tailwind-4.1-cyan)

## ✨ Features

- **🎨 Modern Design**: Premium UI with gradient colors, glassmorphism effects, and smooth animations
- **📱 Fully Responsive**: Perfect viewing experience on all devices (mobile, tablet, desktop)
- **⚡ Fast Performance**: Built with Vite for lightning-fast development and optimized production builds
- **🎭 Smooth Animations**: Custom CSS animations including floating elements, fade-in effects, and hover transitions
- **🍔 Interactive Menu**: Dynamic menu with category tabs (Appetizers, Mains, Desserts)
- **📝 Reservation Form**: Functional contact form for table reservations
- **🎯 SEO Optimized**: Proper meta tags, semantic HTML, and Open Graph tags

## 🚀 Quick Start

### Prerequisites

- Node.js (v18 or higher)
- npm or yarn

### Installation

1. **Clone or navigate to the project directory**
   ```bash
   cd restaurant-menu-website
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Start the development server**
   ```bash
   npm run dev
   ```

4. **Open your browser**
   Navigate to `http://localhost:5173/`

### Build for Production

```bash
npm run build
```

The optimized production files will be in the `dist` folder.

### Preview Production Build

```bash
npm run preview
```

## 📂 Project Structure

```
restaurant-menu-website/
├── src/
│   ├── components/
│   │   ├── Navbar.jsx       # Navigation bar with glassmorphism
│   │   ├── Hero.jsx          # Hero section with CTA
│   │   ├── Menu.jsx          # Interactive menu with tabs
│   │   ├── About.jsx         # About section with features
│   │   └── Contact.jsx       # Reservation form & contact info
│   ├── App.jsx               # Main app component
│   ├── main.jsx              # Entry point
│   └── index.css             # Global styles & Tailwind config
├── index.html                # HTML template with SEO tags
├── tailwind.config.js        # Tailwind configuration
├── postcss.config.js         # PostCSS configuration
└── package.json              # Dependencies & scripts
```

## 🎨 Design Features

### Color Palette
- **Primary**: Orange gradient (#f39333 → #f0760b → #e15a01)
- **Background**: Dark theme (#0a0a0a, #1a1a1a)
- **Accent**: White with opacity for glassmorphism

### Typography
- **Headings**: Playfair Display (serif)
- **Body**: Inter (sans-serif)

### Key Components

1. **Hero Section**
   - Animated gradient text
   - Floating background elements
   - Statistics cards with glassmorphism
   - Smooth scroll indicator

2. **Menu Section**
   - Category tabs (Appetizers, Mains, Desserts)
   - Interactive menu cards with hover effects
   - Real food images from Unsplash
   - "Add to Order" functionality

3. **About Section**
   - Feature cards with icons
   - Chef signature
   - Statistics bar

4. **Contact Section**
   - Reservation form with validation
   - Contact information cards
   - Social media links

## 🛠️ Technologies Used

- **React 18.3** - UI library
- **Vite 7.2** - Build tool & dev server
- **Tailwind CSS 4.1** - Utility-first CSS framework
- **@tailwindcss/postcss** - PostCSS plugin for Tailwind v4
- **Google Fonts** - Playfair Display & Inter

## 📱 Responsive Design

The website is fully responsive with breakpoints:
- Mobile: < 768px
- Tablet: 768px - 1024px
- Desktop: > 1024px

## 🎯 SEO & Performance

- Semantic HTML5 elements
- Proper heading hierarchy (H1, H2, H3)
- Meta descriptions and keywords
- Open Graph tags for social sharing
- Optimized images with lazy loading
- Fast load times with Vite optimization

## 🔧 Customization

### Update Menu Items
Edit the `menuData` object in `src/components/Menu.jsx`:

```javascript
const menuData = {
  appetizers: [
    {
      id: 1,
      name: 'Your Dish Name',
      description: 'Description here',
      price: '$XX',
      image: 'image-url',
      tags: ['Tag1', 'Tag2']
    }
  ]
}
```

### Change Colors
Update the theme in `src/index.css`:

```css
@theme {
  --color-primary-500: #your-color;
  --color-dark-900: #your-dark-color;
}
```

### Modify Sections
Each section is a separate component in `src/components/`. Edit the respective `.jsx` file to customize content.

## 📸 Screenshots

The website includes:
- ✅ Stunning hero section with animated elements
- ✅ Interactive menu with beautiful food photography
- ✅ About section showcasing restaurant features
- ✅ Contact form for reservations

## 🌐 Deployment

### Deploy to Vercel
```bash
npm install -g vercel
vercel
```

### Deploy to Netlify
```bash
npm run build
# Drag and drop the 'dist' folder to Netlify
```

### Deploy to GitHub Pages
1. Update `vite.config.js`:
   ```javascript
   export default {
     base: '/your-repo-name/'
   }
   ```
2. Build and deploy:
   ```bash
   npm run build
   git add dist -f
   git commit -m "Deploy"
   git subtree push --prefix dist origin gh-pages
   ```

## 📄 License

This project is open source and available for portfolio demonstration purposes.

## 👨‍💻 Developer

Created as a portfolio demonstration project showcasing modern web development skills with React, Vite, and Tailwind CSS.

---

**Need help?** Feel free to reach out or open an issue!

🌟 **Star this project** if you find it useful for your portfolio!
