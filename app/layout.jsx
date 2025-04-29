import { Inter } from 'next/font/google';
import './styles/globals.css';
import ThemeProvider from './components/ThemeProvider';

const inter = Inter({ subsets: ['latin'] });

export const metadata = {
  title: 'Alexander Husseini | Portfolio',
  description: 'Professional portfolio showcasing projects, skills, and experience of Alexander Husseini',
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={inter.className}>
        <ThemeProvider>
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
} 