import { Phone, MapPin, Heart } from 'lucide-react';
import logoImg from '../assets/logo.png';

const quickLinks = [
  { label: 'Home', href: '#home' },
  { label: 'About Us', href: '#about' },
  { label: 'Courses', href: '#courses' },
  { label: 'Special Features', href: '#features' },
  { label: 'Why Choose Us', href: '#why-us' },
  { label: 'Gallery', href: '#gallery' },
  { label: 'Contact', href: '#contact' },
];

const courseLinks = [
  'School Tuition (8–12)',
  'X, XI & XII Coaching',
  'SSLC / +2 Pathways',
  'TNPSC Group IV',
];

export default function Footer() {
  const handleNavClick = (href) => {
    const el = document.querySelector(href);
    if (el) el.scrollIntoView({ behavior: 'smooth', block: 'start' });
  };

  return (
    <footer className="bg-[#021f28] text-white">
      {/* Gold top border */}
      <div className="h-1 bg-gradient-to-r from-transparent via-gold to-transparent" />

      {/* Main Footer Content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 md:py-16">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10">

          {/* Brand Column */}
          <div className="sm:col-span-2 lg:col-span-1">
            {/* Logo */}
            <div className="flex items-center gap-3 mb-5">
              <div className="w-12 h-12 bg-gold rounded-full flex items-center justify-center shadow-lg flex-shrink-0 overflow-hidden border-2 border-gold">
                <img src={logoImg} alt="ATC Tuition Centre Madurai Logo - Quality Education" className="w-full h-full object-cover" />
              </div>
              <div>
                <p className="text-white font-bold text-sm leading-tight">SRI ANNAI TUTORIAL COLLEGE</p>
                <p className="text-gold text-xs">Sri A.T.C Tuition Centre</p>
              </div>
            </div>
            <p className="text-white/50 text-sm leading-relaxed mb-5">
              Quality Education • Individual Attention • Better Results
            </p>
            <p className="tamil-text text-white/40 text-xs leading-relaxed">
              மாணவர்களின் கல்வி முன்னேற்றத்திற்கும் வெற்றிக்கும் சிறந்த பயிற்சி
            </p>

            {/* Social/Contact Icons */}
            <div className="flex gap-3 mt-6">
              <a
                href="tel:9894730585"
                id="footer-call-icon"
                className="w-10 h-10 bg-white/10 hover:bg-gold hover:text-navy rounded-xl flex items-center justify-center transition-all duration-200 group"
                aria-label="Call us"
              >
                <Phone size={18} className="text-white group-hover:text-navy" />
              </a>
              <a
                href="https://wa.me/919894730585?text=Hello%20Sri%20Annai%20Tutorial%20College%2C%20I%20would%20like%20to%20know%20more%20about%20your%20tuition%20courses."
                target="_blank"
                rel="noopener noreferrer"
                id="footer-whatsapp-icon"
                className="w-10 h-10 bg-white/10 hover:bg-green-600 rounded-xl flex items-center justify-center transition-all duration-200"
                aria-label="WhatsApp"
              >
                <svg className="w-5 h-5 fill-white" viewBox="0 0 24 24">
                  <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
                </svg>
              </a>
              <a
                href="https://maps.google.com/?q=Arasaradi,+Madurai,+Tamil+Nadu"
                target="_blank"
                rel="noopener noreferrer"
                id="footer-maps-icon"
                className="w-10 h-10 bg-white/10 hover:bg-teal rounded-xl flex items-center justify-center transition-all duration-200"
                aria-label="Google Maps"
              >
                <MapPin size={18} className="text-white" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-gold font-bold text-sm uppercase tracking-widest mb-5">Quick Links</h4>
            <ul className="space-y-2.5">
              {quickLinks.map((link) => (
                <li key={link.href}>
                  <button
                    id={`footer-link-${link.label.toLowerCase().replace(/\s+/g, '-')}`}
                    onClick={() => handleNavClick(link.href)}
                    className="text-white/60 hover:text-gold text-sm transition-colors duration-200 flex items-center gap-2 group"
                  >
                    <span className="w-1.5 h-1.5 bg-gold/0 group-hover:bg-gold rounded-full transition-all duration-200" />
                    {link.label}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Courses */}
          <div>
            <h4 className="text-gold font-bold text-sm uppercase tracking-widest mb-5">Our Courses</h4>
            <ul className="space-y-2.5">
              {courseLinks.map((course) => (
                <li key={course}>
                  <button
                    onClick={() => handleNavClick('#courses')}
                    className="text-white/60 hover:text-gold text-sm transition-colors duration-200 text-left flex items-center gap-2 group"
                  >
                    <span className="w-1.5 h-1.5 bg-gold/0 group-hover:bg-gold rounded-full transition-all duration-200 flex-shrink-0" />
                    {course}
                  </button>
                </li>
              ))}
            </ul>

            <div className="mt-6 pt-6 border-t border-white/10">
              <p className="text-white/40 text-xs mb-2 uppercase tracking-wide">Operating Hours</p>
              <p className="text-white/60 text-sm">Mon – Sat: Regular Classes</p>
              <p className="text-white/60 text-sm">Sunday: Full Day Sessions</p>
            </div>
          </div>

          {/* Contact */}
          <div>
            <h4 className="text-gold font-bold text-sm uppercase tracking-widest mb-5">Contact Us</h4>

            <div className="space-y-4">
              <div className="flex items-start gap-3">
                <Phone size={16} className="text-gold mt-0.5 flex-shrink-0" />
                <div>
                  <a href="tel:9894730585" className="text-white hover:text-gold transition-colors font-bold text-base">
                    98947 30585
                  </a>
                  <p className="text-white/40 text-xs mt-0.5">Call / WhatsApp</p>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <MapPin size={16} className="text-gold mt-0.5 flex-shrink-0" />
                <div>
                  <p className="text-white/70 text-sm leading-relaxed">
                    Arasaradi,<br />
                    Opp. Devaki Scan,<br />
                    Madurai, Tamil Nadu
                  </p>
                </div>
              </div>
            </div>

            {/* CTA */}
            <div className="mt-6">
              <button
                id="footer-join-btn"
                onClick={() => handleNavClick('#contact')}
                className="w-full bg-gold hover:bg-gold-light text-navy font-black py-3 px-4 rounded-xl text-sm transition-all duration-200 hover:shadow-lg hover:scale-105"
              >
                🎓 Join Now
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-white/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-5 flex flex-col sm:flex-row items-center justify-between gap-3">
          <p className="text-white/30 text-xs text-center sm:text-left">
            © 2026 Sri Annai Tutorial College. All Rights Reserved.
          </p>
          <p className="text-white/30 text-xs flex items-center gap-1">
            Made with for quality education in Madurai
          </p>
        </div>
      </div>
    </footer>
  );
}
