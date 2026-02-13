# AIWorldWideWorkforce - HTML/CSS Version

This is a static HTML/CSS/JavaScript version of the AIWorldWideWorkforce website, converted from React for deployment on Framer or any static hosting platform.

## Files Included

- `index.html` - Main HTML file with all sections and content
- `styles.css` - Complete CSS with responsive design, dark mode, and animations
- `script.js` - JavaScript for interactivity (mobile menu, theme toggle, language switcher)
- `README.md` - This file

## Features

### ✅ Fully Responsive
- Mobile-first design with breakpoints at 640px, 768px, 1024px, and 1280px
- Optimized typography and spacing for all screen sizes
- Touch-friendly mobile navigation

### ✅ Dark Mode
- Toggle between light and dark themes
- Persistent theme preference (localStorage)
- Smooth transitions between themes

### ✅ Multi-language Support
- English and German languages
- Language preference saved in localStorage
- All content dynamically updates

### ✅ Interactive Elements
- Animated background blobs in hero section
- Smooth scroll navigation
- Hover effects on cards and buttons
- Mobile menu with slide animation
- Package cards with scale effects

### ✅ Accessibility
- Semantic HTML5 structure
- ARIA labels and roles
- Keyboard navigation support
- Focus indicators
- Reduced motion support

### ✅ Performance
- Optimized CSS with custom properties
- Minimal JavaScript (no external dependencies)
- Efficient animations using CSS transforms
- Lazy loading ready structure

## Sections Included

1. **Header** - Navigation with logo, theme toggle, and language switcher
2. **Hero** - Main call-to-action with animated background
3. **Benefits** - Three key benefits with icons
4. **Packages** - Three pricing tiers (Starter, Growth, Enterprise)
5. **CTA** - Final call-to-action section
6. **Footer** - Company information and contact details

## Deployment Instructions

### For Framer

1. **Upload Files**: Drag and drop all files (`index.html`, `styles.css`, `script.js`) into your Framer project
2. **Set Homepage**: Make sure `index.html` is set as your homepage
3. **Test Links**: Verify all navigation links work properly
4. **Check Responsiveness**: Test on different screen sizes in Framer preview

### For Other Static Hosting

1. **Upload Files**: Upload all files to your hosting provider's root directory
2. **Verify Paths**: Ensure all file paths are correct
3. **Test Functionality**: Check all interactive elements work

## Customization

### Colors
Edit the CSS variables in `:root`:
```css
:root {
    --primary: #f59e0b;        /* Main brand color */
    --primary-foreground: #1a1a1a;
    --background: #ffffff;
    --foreground: #1a1a1a;
    /* ... other variables */
}
```

### Typography
Change the font family in the `body` selector:
```css
body {
    font-family: 'YourFont', sans-serif;
}
```

### Content
Edit text content directly in `index.html` or update the `translations` object in `script.js` for dynamic content.

## Browser Support

- Chrome 60+
- Firefox 55+
- Safari 12+
- Edge 79+

## Notes

- Images use placeholder URLs - replace with actual logo images
- Form submissions are simulated - replace with actual form handling
- External links open in new tabs for security
- All animations respect `prefers-reduced-motion`

## Support

For questions or issues:
- 📧 Email: admin@aiworldwideworkforce.com
- 🌐 Web: https://aiworldwideworkforce.com
