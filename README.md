# GasConnect - Biogas Marketplace Website

A modern, fully responsive biogas marketplace website built with React and Tailwind CSS.

## 🚀 Features

- **Fully Responsive Design**: Optimized for mobile, tablet, and desktop devices
- **Modern UI/UX**: Clean, professional design with smooth animations and transitions
- **Complete Sections**:
  - Hero Section with call-to-action
  - About Us with mission and values
  - Biogas Kits marketplace with filtering
  - Articles/Blog section with featured content
  - Contact form with validation
  - Comprehensive footer with newsletter subscription

## 📱 Responsive Breakpoints

The website is fully responsive with the following breakpoints:
- **Mobile**: < 640px (sm)
- **Tablet**: 640px - 1024px (sm - lg)
- **Desktop**: > 1024px (lg)

All components use responsive classes like:
- Text sizes: `text-sm sm:text-base lg:text-xl`
- Spacing: `py-4 sm:py-6 lg:py-8`
- Grid layouts: `grid-cols-1 sm:grid-cols-2 lg:grid-cols-3`

## 🎨 Design Features

### Color Scheme
- Primary: Blue (#2563eb shades)
- Accent: Yellow (#facc15)
- Background gradients for depth
- Backdrop blur effects for modern look

### Typography
- Responsive font sizes across all sections
- Bold headings with accent colors
- Readable body text with proper contrast

### Animations
- Smooth hover effects on cards and buttons
- Scale transformations on interactive elements
- Fade-in animations for content
- Backdrop blur for depth

## 📦 Component Structure

```
components/
├── Navbar.jsx          - Responsive navigation with mobile menu
├── Hero.jsx            - Landing section with CTA and feature cards
├── AboutUs.jsx         - Company information and values
├── BiogasKits.jsx      - Product catalog with filtering
├── Articles.jsx        - Blog/resources section
├── ContactUs.jsx       - Contact form and information
└── Footer.jsx          - Footer with links and newsletter
```

## 🔧 Setup Instructions

1. **Install Dependencies**
   ```bash
   npm install lucide-react
   ```

2. **Copy Components**
   - Place all component files in `src/components/` directory
   - Replace `src/App.jsx` with the provided App.jsx

3. **Add Images**
   Place the following images in your `public/` folder:
   - `/logo.png` - Company logo
   - `/Biogas_tube_hero_01.png` - Hero background image
   - `/biogas-plant.jpg` - About section image (optional)
   - Product images for kits (optional - fallback provided)
   - Article images (optional - fallback provided)

4. **Run the Application**
   ```bash
   npm run dev
   ```

## 🖼️ Image Placeholders

All components include fallback displays for missing images:
- Hero section shows gradient overlay
- About section shows icon-based placeholder
- Product cards show shopping cart icon
- Article cards show book icon

This ensures the site looks good even without images.

## ✨ Key Features by Section

### Hero Section
- Full-width responsive hero with overlay text
- Animated call-to-action button
- Three feature cards highlighting benefits
- Smooth scroll navigation

### About Us
- Company mission and values
- Statistics showcase
- Responsive grid layout
- Highlighted "Why Choose Us" section

### Biogas Kits
- Filterable product catalog (All, Home, Farm, Commercial)
- Product cards with:
  - Images with fallbacks
  - Star ratings
  - Capacity information
  - Feature lists
  - Pricing
  - Add to cart functionality
- "Most Popular" badges
- Expert consultation CTA

### Articles
- Featured articles section
- Regular articles grid
- Article metadata (author, date, read time)
- Category tags
- Newsletter subscription form

### Contact Us
- Contact information cards (Phone, Email, Location, Hours)
- Full contact form with validation
- Success message animation
- Emergency support section

### Footer
- Company information
- Quick links navigation
- Product/service links
- Contact details
- Social media links
- Newsletter subscription
- Copyright and legal links
- Scroll to top button

## 🎯 Interactive Elements

1. **Navigation**
   - Sticky header with blur effect
   - Mobile hamburger menu
   - Smooth scroll to sections

2. **Buttons & Links**
   - Hover scale effects
   - Color transitions
   - Shadow enhancements

3. **Cards**
   - Hover lift effects
   - Background opacity changes
   - Smooth transitions

4. **Forms**
   - Input focus states
   - Form validation
   - Success/error messaging

## 📱 Mobile Optimization

- Touch-friendly button sizes (min 44px height)
- Readable text sizes (min 14px)
- Adequate spacing for touch targets
- Mobile-optimized navigation menu
- Stack layouts on mobile
- Optimized images for mobile

## 🔍 SEO Considerations

- Semantic HTML structure
- Proper heading hierarchy (h1, h2, h3)
- Alt text for images
- Descriptive link text
- Meta information ready

## ♿ Accessibility

- Keyboard navigation support
- ARIA labels on interactive elements
- Sufficient color contrast
- Focus states on interactive elements
- Responsive text sizing

## 🚀 Performance Tips

1. **Images**: 
   - Use WebP format for better compression
   - Implement lazy loading for images
   - Optimize image sizes for different devices

2. **Code Splitting**:
   - Components are already separated
   - Consider lazy loading for below-fold sections

3. **Animations**:
   - CSS-based animations for better performance
   - Reduced motion support ready

## 📝 Customization Guide

### Colors
Update the color scheme in component classes:
- Blue shades: `bg-blue-600`, `text-blue-900`, etc.
- Yellow accents: `bg-yellow-400`, `text-yellow-400`, etc.

### Content
- Product data in BiogasKits.jsx `kits` array
- Article data in Articles.jsx `articles` array
- Contact info in ContactUs.jsx and Footer.jsx

### Layout
- Adjust `max-w-7xl` container width as needed
- Modify grid columns for different layouts
- Adjust spacing with padding/margin utilities

## 🐛 Browser Support

- Modern browsers (Chrome, Firefox, Safari, Edge)
- Mobile browsers (iOS Safari, Chrome Mobile)
- Tailwind CSS v3+ required

## 📄 License

All rights reserved - GasConnect 2026

## 🤝 Contributing

To add new features or sections:
1. Create component in `components/` folder
2. Import in App.jsx
3. Add navigation link in Navbar.jsx
4. Ensure mobile responsiveness

## 📞 Support

For technical support or questions about implementation:
- Email: info@gasconnect.co.ke
- Phone: +254 712 345 678
