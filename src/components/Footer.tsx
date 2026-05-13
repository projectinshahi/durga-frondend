import Link from 'next/link';

export default function Footer() {
  return (
    <footer className="bg-bg-dark text-text-white py-12 border-t border-[rgba(184,134,11,0.2)]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div className="col-span-1 md:col-span-1">
            <Link href="/" className="mb-4 inline-block">
              <span className="font-serif font-bold text-2xl tracking-wider text-white">DINORAH</span>
            </Link>
            <p className="text-sm text-text-white/70 mt-2 leading-relaxed">
              Boutique Craftsmanship. Global Manufacturing Standards.
              Premium garment manufacturing partner for designers, boutiques, D2C brands and international buyers.
            </p>
          </div>
          
          <div>
            <h4 className="text-dinorah-primary font-serif font-semibold mb-4 tracking-wider text-lg">Quick Links</h4>
            <ul className="space-y-2 text-sm text-text-white/80">
              <li><Link href="/" className="hover:text-gold transition-colors">Home</Link></li>
              <li><Link href="/about" className="hover:text-gold transition-colors">About Us</Link></li>
              <li><Link href="/contact" className="hover:text-gold transition-colors">Contact</Link></li>
            </ul>
          </div>
          
          <div>
            <h4 className="text-dinorah-primary font-serif font-semibold mb-4 tracking-wider text-lg">Services</h4>
            <ul className="space-y-2 text-sm text-text-white/80">
              <li>Boutique Garment Manufacturing</li>
              <li>Private Label Production</li>
              <li>Sampling & Pattern Making</li>
              <li>Export Ready Apparel</li>
            </ul>
          </div>
          
          <div>
            <h4 className="text-dinorah-primary font-serif font-semibold mb-4 tracking-wider text-lg">Contact</h4>
            <ul className="space-y-2 text-sm text-text-white/80">
              <li>9/110-2, Mulloor, Punnathura West</li>
              <li>Kottayam, Kerala - 686631</li>
              <li className="mt-2 text-gold">+91 7034995428</li>
              <li>dinorah.work2025@gmail.com</li>
            </ul>
          </div>
        </div>
        
        <div className="border-t border-[rgba(184,134,11,0.2)] mt-12 pt-8 flex flex-col md:flex-row justify-between items-center text-sm text-text-white/60">
          <p>&copy; {new Date().getFullYear()} DINORAH LLP. All Rights Reserved.</p>
          <div className="flex space-x-4 mt-4 md:mt-0">
            <a href="#" className="hover:text-gold transition-colors">Instagram</a>
            <a href="#" className="hover:text-gold transition-colors">Facebook</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
