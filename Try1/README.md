# Portfolio Website

This repository contains the portfolio web pages I built to showcase my projects, skills, and contact information. The site is built with React and Vite and includes modern UI components, responsive layouts, and interactive effects.

## 🎨 Features

- **Responsive Design** - Mobile-first approach ensuring perfect display on all devices
- **Smooth Animations** - Engaging transitions and animations with Framer Motion
- **Particle Background** - Dynamic animated particle effects using tsparticles
- **Contact Form** - Fully functional email contact form with EmailJS integration
- **Form Validation** - Client-side form validation for better UX
- **Typing Effect** - Animated text typing effect with react-typed
- **Scroll Animations** - Smooth animations triggered on scroll with react-intersection-observer
- **Icon Support** - Beautiful icons from react-icons library
- **Dark Mode Ready** - Theme context setup for light/dark mode support

## 🛠️ Tech Stack

- **Frontend Framework**: React 18
- **Build Tool**: Vite
- **Animation Library**: Framer Motion
- **Particle Effects**: tsparticles
- **Email Service**: EmailJS
- **Icons**: React Icons
- **Styling**: CSS3

## 📦 Installation

### Prerequisites
- Node.js (v14 or higher)
- npm or yarn package manager

### Setup

1. Clone the repository:
   ```bash
   git clone https://github.com/your-username/portfolio.git
   cd portfolio
   ```

2. Install dependencies:
   ```bash
   npm install
   ```

3. Create a `.env` file in the root directory for EmailJS configuration:
   ```
   VITE_EMAILJS_SERVICE_ID=your_service_id
   VITE_EMAILJS_TEMPLATE_ID=your_template_id
   VITE_EMAILJS_PUBLIC_KEY=your_public_key
   ```

4. Start the development server:
   ```bash
   npm run dev
   ```

The application will be available at `http://localhost:5173`

## 🚀 Build & Deployment

### Build for Production
```bash
npm run build
```

This creates an optimized production build in the `dist` folder.

### Preview Production Build
```bash
npm run preview
```

### Deploy

The project can be deployed to various platforms:

- **Vercel** - Recommended for best performance
  ```bash
  npm i -g vercel
  vercel
  ```

- **Netlify** - Connect your repository directly

- **GitHub Pages** - Update `vite.config.js` with `base: '/portfolio/'` and use GitHub Actions

- **Traditional Hosting** - Upload the `dist` folder contents via FTP/SSH

## 📁 Project Structure

```
portfolio/
├── public/              # Static assets
├── src/
│   ├── components/      # React components
│   │   ├── Hero.jsx
│   │   ├── About.jsx
│   │   ├── Skills.jsx
│   │   ├── Projects.jsx
│   │   ├── Contact.jsx
│   │   ├── Navbar.jsx
│   │   └── ParticlesBackground.jsx
│   ├── context/         # React context
│   │   └── ThemeContext.jsx
│   ├── styles/          # Component styles
│   ├── utils/           # Utility files
│   ├── App.jsx
│   └── main.jsx
├── index.html
├── vite.config.js
└── package.json
```

## ⚙️ Configuration

### EmailJS Setup
1. Sign up at [EmailJS](https://www.emailjs.com/)
2. Create a service and email template
3. Add your credentials to the `.env` file

### Particle Configuration
Edit `src/components/ParticlesBackground.jsx` to customize particle effects.

## 📝 Customization

### Update Personal Information
- Modify component data in `src/utils/constants.jsx`
- Update component content in respective files under `src/components/`

### Styling
- Global styles are in `src/styles/App.css`
- Component-specific styles are in their respective `.css` files

### Theme
- Theme context is configured in `src/context/ThemeContext.jsx`
- Implement theme toggling in `src/components/Navbar.jsx`

## 🤝 Contributing

Feel free to fork this project and customize it for your own portfolio!

## 📄 License

This project is open source and available under the MIT License.

## 🙏 Credits

- Animated background: [tsparticles](https://tsparticles.js.org/)
- Icons: [React Icons](https://react-icons.github.io/react-icons/)
- Animation library: [Framer Motion](https://www.framer.com/motion/)
- Email service: [EmailJS](https://www.emailjs.com/)

## 📧 Contact

For questions or suggestions, feel free to reach out or open an issue on GitHub.

---

**Ready to deploy!** 🚀