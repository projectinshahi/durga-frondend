import type { Metadata } from 'next';
import { Poppins, Playfair_Display } from 'next/font/google';
import './globals.css';
import { AuthProvider } from '@/context/AuthContext';
import { Toaster } from 'react-hot-toast';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';

const poppins = Poppins({ subsets: ['latin'], weight: ['300', '400', '500', '600'] });
const playfair = Playfair_Display({ subsets: ['latin'], weight: ['400', '700', '900'], variable: '--font-playfair' });

export const metadata: Metadata = {
  title: 'DINORAH LLP | Boutique Craftsmanship',
  description: 'Premium boutique-grade garment manufacturing & export. Private label, low MOQ.',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={playfair.variable}>
      <body className={`${poppins.className} bg-white text-slate-800 antialiased`}>
        <AuthProvider>
          <Navbar />
          <main className="min-h-screen">
            {children}
          </main>
          <Footer />
          <Toaster position="bottom-right" />
        </AuthProvider>
      </body>
    </html>
  );
}
