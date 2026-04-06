Event Center Website
A responsive, modern web application designed for a premier event venue. This project features a fluid landing page with dynamic background transitions, a custom-built mobile navigation menu, and accessible typography.

🚀 Features
Dynamic Background Slider: A custom-coded image slider with smooth opacity transitions and content scaling.

Responsive Mobile Navigation: A hamburger menu system that shifts to a side-drawer on mobile devices, ensuring a seamless experience across all screen widths.

Fluid Typography: Implemented rem and clamp() units to ensure text scales naturally with the viewport, improving accessibility for all users.

Sticky UI Controls: Media-query-optimized controls that stay anchored to the user's viewport even as the screen shrinks.

Modern CSS Architecture: Built using CSS variables (custom properties) for easy theme management and global styling.

🛠️ Built With
HTML5: Semantic structure for high SEO and accessibility.

CSS3: Featuring Flexbox, fixed positioning, and advanced transitions.

JavaScript: Logic for the background slider and mobile menu toggles.

Google Fonts: Archivo Black, Italianno, and Montserrat.

📂 Project Structure
Plaintext
├── index.html       # Main landing page
├── style.css        # Global styles and responsive media queries
├── script.js       # Navigation and slider logic
└── assets/         # High-resolution venue imagery
🔧 Technical Highlights
Centered Fixed Components
The website uses a robust centering technique for fixed elements (like status messages) to ensure they remain perfectly aligned regardless of content length:

CSS
.message {
  position: fixed;
  left: 50%;
  transform: translateX(-50%);
}
Fluid Sizing
By utilizing relative units, the layout maintains its integrity on ultra-wide monitors and small mobile screens alike, preventing the "squashed" look of traditional pixel-based designs.

🤝 Contributing
Fork the Project

Create your Feature Branch (git checkout -b feature/AmazingFeature)

Commit your changes (git commit -m 'Add some AmazingFeature')

Push to the Branch (git push origin feature/AmazingFeature)

Open a Pull Request

Author: srayoung250
