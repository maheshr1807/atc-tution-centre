import { useState, useEffect } from 'react';
import { Menu, X, GraduationCap, Phone } from 'lucide-react';
import logoImg from '../assets/logo.png';

const navLinks = [
  { label: 'Home', href: '#home' },
  { label: 'About', href: '#about' },
  { label: 'Courses', href: '#courses' },
  { label: 'Features', href: '#features' },
  { label: 'Why Us', href: '#why-us' },
  { label: 'Gallery', href: '#gallery' },
  { label: 'Contact', href: '#contact' },
];

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleNavClick = (href) => {
    setMenuOpen(false);
    const el = document.querySelector(href);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  return (
    <>
      <header
        className="fixed top-0 left-0 right-0 z-50 transition-all duration-300 bg-navy shadow-2xl"
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16 md:h-20">
            {/* Logo */}
            <button
              onClick={() => handleNavClick('#home')}
              className="flex items-center gap-3 group"
              id="header-logo-btn"
            >
              <div className="w-10 h-10 md:w-12 md:h-12 bg-gold rounded-full flex items-center justify-center shadow-lg group-hover:scale-105 transition-transform duration-200 overflow-hidden border-2 border-gold">
                <img src={logoImg} alt="ATC Tuition Centre Madurai Logo - Quality Education" className="w-full h-full object-cover" />
              </div>
              <div className="hidden sm:block">
                <p className="text-white font-bold text-sm md:text-base leading-tight tracking-wide">
                  SRI ANNAI TUTORIAL COLLEGE
                </p>
                <p className="text-gold text-xs leading-tight">Sri A.T.C Tuition Centre</p>
              </div>
            </button>

            {/* Desktop Nav */}
            <nav className="hidden lg:flex items-center gap-1">
              {navLinks.map((link) => (
                <button
                  key={link.href}
                  id={`nav-${link.label.toLowerCase().replace(/\s+/g, '-')}`}
                  onClick={() => handleNavClick(link.href)}
                  className="text-white/80 hover:text-gold transition-colors duration-200 font-medium text-sm tracking-wide px-3 py-2 rounded-lg hover:bg-white/10"
                >
                  {link.label}
                </button>
              ))}
            </nav>

            {/* CTA + Mobile Menu */}
            <div className="flex items-center gap-3">
              <a
                href="tel:9894730585"
                id="header-call-btn"
                className="hidden md:flex items-center gap-2 text-white/80 hover:text-gold transition-colors text-sm font-medium"
              >
                <Phone size={15} />
                <span>98947 30585</span>
              </a>
              <button
                id="header-join-btn"
                onClick={() => handleNavClick('#contact')}
                className="bg-gold hover:bg-gold-light text-navy font-bold text-sm px-4 py-2 md:px-5 md:py-2.5 rounded-full transition-all duration-200 hover:shadow-lg hover:scale-105 active:scale-95 whitespace-nowrap"
              >
                Join Now
              </button>
              <button
                id="header-mobile-menu-btn"
                className="lg:hidden text-white p-1.5 rounded-lg hover:bg-white/10 transition-colors"
                onClick={() => setMenuOpen(!menuOpen)}
                aria-label="Toggle mobile menu"
              >
                {menuOpen ? <X size={22} /> : <Menu size={22} />}
              </button>
            </div>
          </div>
        </div>

        {/* Mobile Menu */}
        <div
          className={`lg:hidden overflow-hidden transition-all duration-300 ${
            menuOpen ? 'max-h-screen opacity-100' : 'max-h-0 opacity-0'
          }`}
        >
          <div className="bg-navy/95 backdrop-blur-md border-t border-white/10 px-4 pb-4 pt-2">
            <div className="flex flex-col gap-1">
              {navLinks.map((link) => (
                <button
                  key={link.href}
                  id={`mobile-nav-${link.label.toLowerCase().replace(/\s+/g, '-')}`}
                  onClick={() => handleNavClick(link.href)}
                  className="text-left text-white/80 hover:text-gold hover:bg-white/10 px-4 py-3 rounded-lg transition-all duration-200 font-medium"
                >
                  {link.label}
                </button>
              ))}
              <div className="flex gap-3 mt-3 pt-3 border-t border-white/10">
                <a
                  href="tel:9894730585"
                  id="mobile-call-btn"
                  className="flex-1 flex items-center justify-center gap-2 bg-teal text-white font-semibold py-3 rounded-full hover:bg-teal-light transition-colors text-sm"
                >
                  <Phone size={16} />
                  Call Us
                </a>
                <a
                  href="https://wa.me/919894730585?text=Hello%20Sri%20Annai%20Tutorial%20College%2C%20I%20would%20like%20to%20know%20more%20about%20your%20tuition%20courses."
                  target="_blank"
                  rel="noopener noreferrer"
                  id="mobile-whatsapp-btn"
                  className="flex-1 flex items-center justify-center gap-2 bg-green-600 text-white font-semibold py-3 rounded-full hover:bg-green-500 transition-colors text-sm"
                >
                  <svg className="w-4 h-4 fill-white" viewBox="0 0 24 24"><path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/></svg>
                  WhatsApp
                </a>
              </div>
            </div>
          </div>
        </div>
      </header>

      {/* Spacer for fixed header */}
      <div className="h-16 md:h-20" />
    </>
  );
}
