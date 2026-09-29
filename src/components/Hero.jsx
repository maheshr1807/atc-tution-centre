import { useEffect, useRef } from 'react';
import { Phone, MapPin, MessageCircle, ChevronDown } from 'lucide-react';
import heroBg from '../assets/hero_classroom.jpg';

export default function Hero() {
  const headingRef = useRef(null);
  const subtitleRef = useRef(null);
  const ctaRef = useRef(null);
  const infoRef = useRef(null);

  useEffect(() => {
    // Staggered fade-in animations
    const elements = [headingRef.current, subtitleRef.current, ctaRef.current, infoRef.current];
    elements.forEach((el, i) => {
      if (el) {
        el.style.opacity = '0';
        el.style.transform = 'translateY(30px)';
        setTimeout(() => {
          if (el) {
            el.style.transition = 'opacity 0.7s ease, transform 0.7s ease';
            el.style.opacity = '1';
            el.style.transform = 'translateY(0)';
          }
        }, 200 + i * 200);
      }
    });
  }, []);

  const handleNavClick = (href) => {
    const el = document.querySelector(href);
    if (el) el.scrollIntoView({ behavior: 'smooth', block: 'start' });
  };

  return (
    <section
      id="home"
      className="relative min-h-[92vh] flex flex-col justify-center overflow-hidden"
    >
      {/* Background Image */}
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: `url(${heroBg})` }}
      />
      {/* Gradient Overlay — navy-dominant for text readability */}
      <div className="absolute inset-0 bg-navy/80" />
      <div className="absolute inset-0 bg-gradient-to-t from-navy via-navy/50 to-transparent" />
      {/* Dot pattern overlay */}
      <div className="absolute inset-0 dots-pattern opacity-30" />

      {/* Gold accent bar top */}
      <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-transparent via-gold to-transparent" />

      {/* Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 md:py-20 flex flex-col items-center text-center">

        {/* Badge */}
        <div ref={headingRef} className="mb-6">
          <span className="inline-flex items-center gap-2 bg-gold/20 border border-gold/40 text-gold px-4 py-1.5 rounded-full text-sm font-semibold mb-8 backdrop-blur-sm">
            ✦ 40+ Years of Educational Excellence ✦
          </span>

          {/* Main Heading */}
          <h1 className="text-white font-black leading-none text-shadow-lg">
            <span className="block text-4xl sm:text-5xl md:text-6xl lg:text-7xl tracking-tight">
              Sri Annai Tutorial College
            </span>
            <span className="block text-2xl sm:text-3xl md:text-4xl tracking-widest text-gold mt-2">
              – Tuition Centre in Madurai
            </span>
          </h1>
        </div>

        {/* Tamil Subtitle */}
        <div ref={subtitleRef} className="mb-8 max-w-2xl">
          <p className="tamil-text text-cream text-base sm:text-lg md:text-xl leading-relaxed font-medium text-shadow opacity-90">
            மாணவர்களின் கல்வி முன்னேற்றத்திற்கும் வெற்றிக்கும் சிறந்த பயிற்சி
          </p>
          <p className="text-white/70 text-sm sm:text-base mt-3 font-medium">
            Quality Education • Individual Attention • Better Results
          </p>

          {/* Feature Pills */}
          <div className="flex flex-wrap justify-center gap-2 mt-5">
            {['School Tuition', 'Exam Preparation', 'TNPSC Coaching'].map((pill) => (
              <span
                key={pill}
                className="bg-white/15 backdrop-blur-sm border border-white/25 text-white px-4 py-1.5 rounded-full text-sm font-semibold"
              >
                {pill}
              </span>
            ))}
          </div>
        </div>

        {/* CTA Buttons */}
        <div ref={ctaRef} className="flex flex-col sm:flex-row gap-3 sm:gap-4 mb-10">
          <button
            id="hero-join-btn"
            onClick={() => handleNavClick('#contact')}
            className="bg-gold hover:bg-gold-light text-navy font-black px-8 py-3.5 rounded-full transition-all duration-300 hover:shadow-2xl hover:shadow-gold/30 hover:scale-105 active:scale-95 text-base"
          >
            🎓 Join Now
          </button>
          <a
            id="hero-call-btn"
            href="tel:9894730585"
            className="flex items-center justify-center gap-2 bg-white/15 backdrop-blur-sm border-2 border-white/50 text-white font-bold px-8 py-3.5 rounded-full transition-all duration-300 hover:bg-white hover:text-navy hover:border-white hover:shadow-lg active:scale-95 text-base"
          >
            <Phone size={18} />
            Call Us
          </a>
          <a
            id="hero-whatsapp-btn"
            href="https://wa.me/919894730585?text=Hello%20Sri%20Annai%20Tutorial%20College%2C%20I%20would%20like%20to%20know%20more%20about%20your%20tuition%20courses."
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center justify-center gap-2 bg-green-600 hover:bg-green-500 text-white font-bold px-8 py-3.5 rounded-full transition-all duration-300 hover:shadow-lg hover:scale-105 active:scale-95 text-base"
          >
            <svg className="w-5 h-5 fill-white flex-shrink-0" viewBox="0 0 24 24">
              <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
            </svg>
            WhatsApp Us
          </a>
        </div>

        {/* Location & Phone Info Bar */}
        <div ref={infoRef} className="flex flex-col sm:flex-row gap-4 sm:gap-8 items-center text-white/80 text-sm">
          <a href="https://maps.google.com/?q=Arasaradi,Madurai" target="_blank" rel="noopener noreferrer"
            className="flex items-center gap-2 hover:text-gold transition-colors group">
            <MapPin size={16} className="text-gold flex-shrink-0" />
            <span>Arasaradi, Opp. Devaki Scan, Madurai</span>
          </a>
          <a href="tel:9894730585" className="flex items-center gap-2 hover:text-gold transition-colors">
            <Phone size={16} className="text-gold flex-shrink-0" />
            <span>98947 30585</span>
          </a>
        </div>
      </div>

      {/* Scroll Down Indicator */}
      <button
        onClick={() => handleNavClick('#about')}
        className="absolute bottom-6 left-1/2 -translate-x-1/2 z-10 text-white/60 hover:text-gold transition-colors flex flex-col items-center gap-1 animate-bounce"
        aria-label="Scroll down"
      >
        <span className="text-xs font-medium tracking-widest uppercase">Explore</span>
        <ChevronDown size={20} />
      </button>

      {/* Gold bottom accent */}
      <div className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-transparent via-gold to-transparent" />
    </section>
  );
}
