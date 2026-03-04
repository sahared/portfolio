# Portfolio v2

A modern, responsive personal portfolio website built with React, TypeScript, Vite, and Tailwind CSS. This project showcases your professional experience, projects, and contact information in a clean and visually appealing format.

<br>

## Features

- **Home Page:** Hero section, tech stack, and featured projects.
- **About Page:** Academic background, certifications, experience, research, and volunteer work.
- **Projects Page:** Detailed previews of various projects with images and descriptions.
- **Contact Page:** Contact form and call-to-action for collaboration.
- **Responsive Design:** Fully responsive and mobile-friendly layout.
- **Modern UI:** Built with Tailwind CSS for fast and customizable styling.
- **Error Boundaries:** Robust error handling for better user experience.

<br>

## Tech Stack

- [React](https://react.dev/)
- [TypeScript](https://www.typescriptlang.org/)
- [Vite](https://vitejs.dev/)
- [Tailwind CSS](https://tailwindcss.com/)

<br>

## Project Structure

```
├── public/
│   ├── images/           # Profile, logos, and photography
│   └── projects/         # Project images
├── src/
│   ├── components/       # UI and section components
│   ├── data/             # Data for photos and projects
│   ├── pages/            # Page components (Home, About, Projects, Contact)
│   └── types/            # TypeScript types
├── index.html
├── package.json
├── tailwind.config.js
├── vite.config.ts
└── ...
```

<br>

## Getting Started

1. **Clone the repository:**
   ```sh
   git clone https://github.com/sahared/portfolio.git
   cd portfolio
   ```
2. **Install dependencies:**
   ```sh
   npm install
   ```
3. **Set up environment variables:**
   Create a `.env` file in the root directory and add your Web3Forms API key:
   ```env
   VITE_WEB3FORMS_ACCESS_KEY=your_api_key_here
   ```
   
   Alternatively, you can copy the example file:
   ```sh
   cp .env.example .env
   ```
   Then replace the placeholder with your actual Web3Forms key from [https://web3forms.com/](https://web3forms.com/)
4. **Start the development server:**
   ```sh
   npm run dev
   ```
5. **Build for production:**
   ```sh
   npm run build
   ```

<br>

## Deployment

This project is ready to deploy on platforms like [Netlify](https://www.netlify.com/) or [Vercel](https://vercel.com/). Configuration files like `netlify.toml` are included for easy deployment.

### Deploying to Netlify

1. Connect your GitHub repository to Netlify
2. In the Netlify dashboard, go to your site settings
3. Under "Build & deploy" → "Environment", add the following environment variable:
   - `VITE_WEB3FORMS_ACCESS_KEY`
4. Make sure the build settings are:
   - Build command: `npm run build`
   - Publish directory: `dist`

This environment variable is required for the contact form to work properly.

<br>

## Contributing

Contributions are welcome! Please open an issue or submit a pull request for any improvements or bug fixes.

<br>

## 🙋‍♂️ Author

- **Diksha Sahare**  
  Email: [sahare.d@northeastern.edu](mailto:sahare.d@northeastern.edu)  
  LinkedIn: [https://www.linkedin.com/in/dikshasahare/](https://www.linkedin.com/in/dikshasahare/)  
  GitHub: [https://github.com/sahared](https://github.com/sahared)

<br>

---

<p align="center">
  ⭐ <b>Found this useful? Star the repo &amp; Let’s automate the world together! 🌍</b>
</p>

---
