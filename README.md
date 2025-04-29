# Alexander Husseini Portfolio Website

A modern, responsive portfolio website built with Next.js, React, and Tailwind CSS.

## Features

- Responsive design for mobile, tablet, and desktop
- Dark/light mode toggle
- Smooth animations and transitions
- Sections for projects, experience, skills, and contact
- Accessibility-focused design
- Fast loading and optimized performance

## Tech Stack

- **Framework**: Next.js (React)
- **Styling**: Tailwind CSS
- **Animations**: Framer Motion
- **Icons**: Material UI Icons
- **Form Handling**: React Hooks
- **Deployment**: Vercel/Netlify

## Getting Started

### Prerequisites

- Node.js (v14 or later)
- npm or yarn

### Installation

1. Clone the repository:
```bash
git clone https://github.com/alexander-husseini/portfolio-website.git
cd portfolio-website
```

2. Install dependencies:
```bash
npm install
# or
yarn install
```

3. Run the development server:
```bash
npm run dev
# or
yarn dev
```

4. Open [http://localhost:3000](http://localhost:3000) in your browser.

## Project Structure

- `app/`: Main application code
  - `components/`: React components
  - `styles/`: Global CSS and component styles
  - `public/`: Static assets (images, PDF files)
  - `layout.jsx`: Root layout component
  - `page.jsx`: Main page component

## Customization

1. Personal Information:
   - Update contact details and social links in `Hero.jsx`, `Contact.jsx`, and `Footer.jsx`
   - Replace the resume PDF in `public/pdf/`

2. Projects:
   - Edit the projects array in `Projects.jsx` to showcase your own work
   - Add project images to `public/images/`

3. Experience:
   - Update the experiences array in `Experience.jsx` with your work history

4. Skills:
   - Modify the skills object in `Skills.jsx` to reflect your technical expertise

5. Styling:
   - Customize colors in `globals.css` and `tailwind.config.js`
   - Adjust animations in component files

## Deployment

The site can be deployed to various platforms:

### Vercel (recommended for Next.js)

```bash
npm install -g vercel
vercel
```

### Netlify

```bash
npm install -g netlify-cli
netlify deploy
```

## License

MIT

## Author

Alexander Husseini 