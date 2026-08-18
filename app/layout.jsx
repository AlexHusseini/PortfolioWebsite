import { Zen_Old_Mincho, Zen_Kaku_Gothic_New, JetBrains_Mono } from 'next/font/google';
import './styles/globals.css';
import Rail from './components/Rail';
import Effects from './components/Effects';

const mincho = Zen_Old_Mincho({
  subsets: ['latin'],
  weight: ['400', '600', '700'],
  variable: '--font-mincho',
});

const gothic = Zen_Kaku_Gothic_New({
  subsets: ['latin'],
  weight: ['300', '400', '500'],
  variable: '--font-gothic',
});

const mono = JetBrains_Mono({
  subsets: ['latin'],
  weight: ['300', '400'],
  variable: '--font-mono',
});

export const metadata = {
  title: 'Alexander Husseini — Software Engineer',
  description:
    'Alexander Husseini — software engineer at WitnessAI, building Go and Rust proxy integrations for an enterprise GenAI security platform.',
  icons: {
    icon: [
      { url: '/favicon.ico', type: 'image/x-icon' },
      { url: '/favicon-32x32.png', sizes: '32x32', type: 'image/png' },
      { url: '/favicon-16x16.png', sizes: '16x16', type: 'image/png' },
    ],
    apple: '/apple-touch-icon.png',
    shortcut: '/favicon.ico',
  },
  manifest: '/site.webmanifest',
};

export default function RootLayout({ children }) {
  return (
    <html
      lang="en"
      className={`${mincho.variable} ${gothic.variable} ${mono.variable}`}
    >
      <head>
        <link rel="preload" as="image" href="/hero-wide.webp" type="image/webp" fetchPriority="high" media="(min-width:860px)" />
        <link rel="preload" as="image" href="/hero-tall.webp" type="image/webp" fetchPriority="high" media="(max-width:859px)" />
        <meta name="theme-color" content="#e7d8bd" />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://alexhusseini.com/" />
        <meta property="og:title" content="Alexander Husseini — Software Engineer" />
        <meta property="og:description" content="Software engineer at WitnessAI. Go and Rust proxy integrations for an enterprise GenAI security platform." />
        <meta property="og:image" content="https://alexhusseini.com/hero-wide.png" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Alexander Husseini — Software Engineer" />
        <meta name="twitter:description" content="Software engineer at WitnessAI. Go and Rust proxy integrations for an enterprise GenAI security platform." />
        <meta name="twitter:image" content="https://alexhusseini.com/hero-wide.png" />
      </head>
      <body className={gothic.className}>
        <a className="skip" href="#experience">Skip to content</a>
        <svg className="grain" aria-hidden="true">
          <filter id="pg">
            <feTurbulence type="fractalNoise" baseFrequency="0.9" numOctaves="4" stitchTiles="stitch" />
          </filter>
          <rect width="100%" height="100%" filter="url(#pg)" />
        </svg>
        <Rail />
        <Effects />
        <main>{children}</main>
      </body>
    </html>
  );
}
