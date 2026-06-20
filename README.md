# Amritha Portfolio

A modern portfolio website built with **React** and **Vite**, featuring dark/light theme toggle, smooth animations, and responsive design.

## 🚀 Features

- ⚡ **Vite** - Lightning-fast build tool
- ⚛️ **React 18** - Modern React with hooks
- 🎨 **Dark/Light Theme** - Toggle between themes with localStorage persistence
- 📱 **Fully Responsive** - Works seamlessly on mobile, tablet, and desktop
- ✨ **Smooth Animations** - Beautiful transitions and hover effects
- 🧭 **React Router** - Client-side routing
- 🎯 **SEO Friendly** - Proper semantic HTML

## 📁 Project Structure

```
src/
├── components/
│   ├── Navbar.jsx      # Navigation bar with theme toggle
│   ├── Navbar.css
│   ├── Footer.jsx      # Footer with social links
│   └── Footer.css
├── pages/
│   ├── Home.jsx        # Hero section landing page
│   ├── Home.css
│   ├── About.jsx       # About page with carousel
│   ├── About.css
│   ├── Projects.jsx    # Projects grid showcase
│   ├── Projects.css
│   ├── Contact.jsx     # Contact form
│   └── Contact.css
├── App.jsx             # Main app with routing
├── App.css
├── index.css           # Global styles & themes
└── main.jsx            # React entry point
```

## 🛠️ Installation

### Prerequisites
- Node.js 16+ 
- npm or yarn

### Setup

1. **Navigate to the project directory:**
```bash
cd amrithaportfolio
```

2. **Install dependencies:**
```bash
npm install
```

3. **Start the development server:**
```bash
npm run dev
```

The app will open at `http://localhost:5173`

## 📦 Build for Production

```bash
npm run build
```

This generates an optimized build in the `dist/` folder.

### Preview Production Build

```bash
npm run preview
```

## 🎨 Customization

### Colors & Theme

Edit the CSS variables in `src/index.css`:

```css
:root {
  --bg-color: #fcfcfc;
  --text-main: #1a1a1a;
  --accent: #2563eb;
  /* ... more variables */
}

[data-theme="dark"] {
  --bg-color: #0d0d0d;
  /* ... dark theme colors */
}
```

### Content Updates

- **Home**: Edit [src/pages/Home.jsx](src/pages/Home.jsx)
- **About**: Update experience data in [src/pages/About.jsx](src/pages/About.jsx)
- **Projects**: Modify projects array in [src/pages/Projects.jsx](src/pages/Projects.jsx)
- **Contact**: Update info in [src/pages/Contact.jsx](src/pages/Contact.jsx)

## 📝 Contact Form

The contact form is frontend-only. To send emails, integrate one of these services:

- **EmailJS** - No backend required
- **Formspree** - Simple form handling
- **Custom Backend** - Node.js/Express endpoint

## 🚀 Deployment

### Deploy to Netlify

```bash
npm run build
```

Then drag the `dist/` folder to [Netlify](https://netlify.com)

### Deploy to Vercel

```bash
npm i -g vercel
vercel
```

### Deploy to GitHub Pages

Update `vite.config.js`:
```js
export default {
  base: '/repository-name/',
  // ...
}
```

Then push `dist/` folder to `gh-pages` branch.

## 🔧 Available Scripts

| Command | Description |
|---------|-------------|
| `npm run dev` | Start development server |
| `npm run build` | Build for production |
| `npm run preview` | Preview production build |
| `npm run lint` | Run ESLint |

## 📦 Dependencies

- **react** (^18.2.0) - UI library
- **react-dom** (^18.2.0) - React DOM rendering
- **react-router-dom** (^6.20.0) - Client-side routing

## 🎓 Learning Resources

- [React Documentation](https://react.dev)
- [Vite Guide](https://vitejs.dev/guide/)
- [React Router](https://reactrouter.com)
- [CSS Grid & Flexbox](https://developer.mozilla.org/en-US/docs/Web/CSS)

## 📄 License

This project is open source and available under the MIT License.

## 👨‍💻 Author

**Amritha** - [Your Portfolio](https://amritha-portfolio.vercel.app)

---

**Happy coding!** 🚀
