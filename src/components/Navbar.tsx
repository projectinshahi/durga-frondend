"use client";
import Link from 'next/link';
import { Menu, X, Phone, Mail } from 'lucide-react';
import { useState } from 'react';
import { usePathname } from 'next/navigation';

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const pathname = usePathname();

  return (
    <>
      {/* Top Bar */}
      <div className="bg-bg-dark text-text-white py-2 text-sm border-b border-dinorah-primary/10 hidden md:block">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex justify-between items-center">
          <div className="flex space-x-8">
            <span className="flex items-center space-x-2">
              <Phone size={14} className="text-gold" />
              <span className="font-medium tracking-wide">+91 7034995428</span>
            </span>
            <span className="flex items-center space-x-2">
              <Mail size={14} className="text-gold" />
              <span className="font-medium tracking-wide">dinorah.work2025@gmail.com</span>
            </span>
          </div>
          <div className="flex space-x-6">
            <a href="#" className="text-white hover:text-gold transition-colors">
              <svg xmlns="http://www.w3.org/http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect width="20" height="20" x="2" y="2" rx="5" ry="5"/><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"/><line x1="17.5" x2="17.51" y1="6.5" y2="6.5"/></svg>
            </a>
            <a href="#" className="text-white hover:text-gold transition-colors">
              <svg xmlns="http://www.w3.org/http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"/></svg>
            </a>
          </div>
        </div>
      </div>

      {/* Main Navbar */}
      <nav className="sticky top-0 z-50 bg-white shadow-sm border-b border-gray-100 pb-1">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between h-[85px] items-center">
            
            {/* Logo */}
            <Link href="/" className="flex flex-col items-center justify-center pt-2 shrink-0">
              <img 
                src="https://sarbas.pythonanywhere.com/static/images/dinorah_llp_new_logo.png" 
                alt="DINORAH" 
                className="h-16 w-auto object-contain" 
              />
            </Link>

            {/* Desktop Nav */}
            <div className="hidden md:flex items-center space-x-10">
              <Link href="/" className={`font-bold relative pb-1 text-[15px] transition-colors ${pathname === '/' ? 'text-dinorah-primary border-b-2 border-dinorah-primary' : 'text-text-secondary hover:text-dinorah-primary'}`}>
                Home
              </Link>
              <Link href="/designs" className={`font-semibold transition-colors text-[15px] ${pathname === '/designs' ? 'text-dinorah-primary border-b-2 border-dinorah-primary pb-1' : 'text-text-secondary hover:text-dinorah-primary'}`}>
                Designs
              </Link>
              <Link href="/about" className={`font-semibold transition-colors text-[15px] ${pathname === '/about' ? 'text-dinorah-primary border-b-2 border-dinorah-primary pb-1' : 'text-text-secondary hover:text-dinorah-primary'}`}>
                About
              </Link>
              <Link href="/contact" className={`font-semibold transition-colors text-[15px] ${pathname === '/contact' ? 'text-dinorah-primary border-b-2 border-dinorah-primary pb-1' : 'text-text-secondary hover:text-dinorah-primary'}`}>
                Contact
              </Link>

              <a 
                href="https://wa.me/917034995428" 
                target="_blank"
                rel="noreferrer"
                className="bg-gradient-to-r gap-2 from-[#25d366] to-[#128c7e] text-white px-6 py-2.5 rounded-full font-bold flex items-center hover:shadow-[0_8px_25px_rgba(37,211,102,0.4)] transition-all ml-4 text-[15px]"
              >
                <svg viewBox="0 0 24 24" fill="currentColor" className="w-[18px] h-[18px]">
                  <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51a12.8 12.8 0 0 0-.57-.01c-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 0 1-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 0 1-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 0 1 2.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0 0 12.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 0 0 5.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 0 0-3.48-8.413z"/>
                </svg>
                Connect Now
              </a>
            </div>

            {/* Mobile menu button */}
            <div className="md:hidden flex items-center">
              <button onClick={() => setIsOpen(!isOpen)} className="text-text-primary focus:outline-none">
                {isOpen ? <X size={28} /> : <Menu size={28} />}
              </button>
            </div>
          </div>
        </div>

        {/* Mobile Nav */}
        {isOpen && (
          <div className="md:hidden bg-bg-card border-t border-[rgba(184,134,11,0.1)] px-4 pt-2 pb-6 space-y-2 shadow-lg">
            <Link onClick={() => setIsOpen(false)} href="/" className={`block px-4 py-3 font-bold rounded-r-md ${pathname === '/' ? 'text-dinorah-primary border-l-4 border-dinorah-primary bg-dinorah-primary/5' : 'text-text-secondary hover:bg-bg-secondary border-l-4 border-transparent'}`}>Home</Link>
            <Link onClick={() => setIsOpen(false)} href="/designs" className={`block px-4 py-3 font-semibold rounded-md ${pathname === '/designs' ? 'text-dinorah-primary border-l-4 border-dinorah-primary bg-dinorah-primary/5' : 'text-text-secondary hover:bg-bg-secondary'}`}>Designs</Link>
            <Link onClick={() => setIsOpen(false)} href="/about" className={`block px-4 py-3 font-semibold rounded-md ${pathname === '/about' ? 'text-dinorah-primary border-l-4 border-dinorah-primary bg-dinorah-primary/5' : 'text-text-secondary hover:bg-bg-secondary'}`}>About</Link>
            <Link onClick={() => setIsOpen(false)} href="/contact" className={`block px-4 py-3 font-semibold rounded-md ${pathname === '/contact' ? 'text-dinorah-primary border-l-4 border-dinorah-primary bg-dinorah-primary/5' : 'text-text-secondary hover:bg-bg-secondary'}`}>Contact</Link>
            
            <a 
              href="https://wa.me/917034995428" 
              target="_blank"
              onClick={() => setIsOpen(false)}
              className="mt-4 bg-gradient-to-r from-[#25d366] to-[#128c7e] text-white px-4 py-3 rounded-md font-bold flex items-center justify-center gap-2"
            >
              <svg viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5">
                <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51a12.8 12.8 0 0 0-.57-.01c-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 0 1-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 0 1-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 0 1 2.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0 0 12.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 0 0 5.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 0 0-3.48-8.413z"/>
              </svg>
              Connect Now
            </a>
          </div>
        )}
      </nav>
    </>
  );
}
