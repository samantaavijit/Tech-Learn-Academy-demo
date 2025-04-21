import { Inter } from 'next/font/google';
import './globals.css';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import AnimatedBackground from '@/components/AnimatedBackground';

const inter = Inter({ subsets: ['latin'] });

export const metadata = {
  title: 'Tech Academy - Learn Programming',
  description: 'A modern platform for learning programming languages and web development',
};

import StyledComponentsRegistry from './registry';

export default function RootLayout({ children }) {
  return (
    <html lang="en" className="dark">
      <body suppressHydrationWarning className={`${inter.className} bg-dark-100 text-white`}>
        <StyledComponentsRegistry>
          <AnimatedBackground />
          <Navbar />
          {children}
          <Footer />
        </StyledComponentsRegistry>
      </body>
    </html>
  );
}
