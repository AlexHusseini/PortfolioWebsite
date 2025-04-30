import { Inter } from 'next/font/google';
import './styles/globals.css';
import ThemeProvider from './components/ThemeProvider';
import Navbar from './components/Navbar';
import AnimatedBackground from './components/AnimatedBackground';

const inter = Inter({ subsets: ['latin'] });

export const metadata = {
  title: 'Alexander Husseini | Portfolio',
  description: 'My Work Portfolio',
  icons: {
    icon: [
      { url: '/favicon.ico', type: 'image/x-icon' },
      { url: '/favicon-32x32.png', sizes: '32x32', type: 'image/png' },
      { url: '/favicon-16x16.png', sizes: '16x16', type: 'image/png' },
      { url: '/android-chrome-192x192.png', sizes: '192x192', type: 'image/png' },
      { url: '/android-chrome-512x512.png', sizes: '512x512', type: 'image/png' },
    ],
    apple: '/apple-touch-icon.png',
    shortcut: '/favicon.ico',
  },
  manifest: '/site.webmanifest',
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <link rel="icon" type="image/x-icon" href="/favicon.ico" />
        <link rel="icon" type="image/png" sizes="32x32" href="/favicon-32x32.png" />
        <link rel="icon" type="image/png" sizes="16x16" href="/favicon-16x16.png" />
        <link rel="apple-touch-icon" sizes="180x180" href="/apple-touch-icon.png" />
        <link rel="icon" type="image/png" sizes="192x192" href="/android-chrome-192x192.png" />
        <link rel="icon" type="image/png" sizes="512x512" href="/android-chrome-512x512.png" />
        <link rel="manifest" href="/site.webmanifest" />
        <meta property="og:title" content="Alexander Husseini | Portfolio" />
        <meta property="og:description" content="My Work Portfolio" />
        <meta property="og:image" content="/android-chrome-512x512.png" />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://portfolio-d040a.web.app/" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Alexander Husseini | Portfolio" />
        <meta name="twitter:description" content="My Work Portfolio" />
        <meta name="twitter:image" content="/android-chrome-512x512.png" />
      </head>
      <body className={`${inter.className} antialiased`}>
        <ThemeProvider>
          <AnimatedBackground />
          <Navbar />
          <main className="relative z-10">
            {children}
          </main>
        </ThemeProvider>
      </body>
    </html>
  );
} 