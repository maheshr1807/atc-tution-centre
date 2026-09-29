import { useEffect, useRef } from 'react';

const stats = [
  { number: '40+', label: 'Years of Educational Service', sublabel: 'தொடர்ந்து 40 ஆண்டுகள் சேவை' },
  { number: '100', label: 'Target Score Approach', sublabel: 'சிறந்த கல்வி இலக்கு' },
  { number: '∞', label: 'Regular Tests & Revision', sublabel: 'உடனுக்குடன் தேர்வு' },
  { number: '1:1', label: 'Individual Attention', sublabel: 'தனிப்பட்ட கவனம்' },
];

function useInView(ref, threshold = 0.2) {
  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && ref.current) {
          ref.current.classList.add('in-view');
        }
      },
      { threshold }
    );
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, [ref, threshold]);
}

export default function About() {
  const sectionRef = useRef(null);
  const textRef = useRef(null);
  const statsRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.querySelectorAll('.reveal-item').forEach((el, i) => {
              setTimeout(() => {
                el.style.opacity = '1';
                el.style.transform = 'translateY(0)';
              }, i * 100);
            });
          }
        });
      },
      { threshold: 0.15 }
    );
    if (sectionRef.current) observer.observe(sectionRef.current);
    return () => observer.disconnect();
  }, []);

  return (
    <section id="about" ref={sectionRef} className="py-20 md:py-28 bg-cream">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* Section Label */}
        <div className="reveal-item" style={{ opacity: 0, transform: 'translateY(20px)', transition: 'all 0.6s ease' }}>
          <span className="inline-block bg-teal/10 text-teal font-bold text-xs uppercase tracking-widest px-4 py-1.5 rounded-full mb-4">
            About Us
          </span>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">

          {/* Left: Text Content */}
          <div className="space-y-6">
            <div className="reveal-item" style={{ opacity: 0, transform: 'translateY(20px)', transition: 'all 0.6s ease 0.1s' }}>
              <h2 className="text-3xl sm:text-4xl md:text-5xl font-black text-navy leading-tight">
                About <span className="text-teal">Sri Annai</span>
                <br />Tutorial College
              </h2>
            </div>

            <div className="reveal-item" style={{ opacity: 0, transform: 'translateY(20px)', transition: 'all 0.6s ease 0.2s' }}>
              <div className="w-16 h-1.5 bg-gold rounded-full" />
            </div>

            <div className="reveal-item" style={{ opacity: 0, transform: 'translateY(20px)', transition: 'all 0.6s ease 0.3s' }}>
              <p className="text-navy/80 text-base md:text-lg leading-relaxed">
                Sri Annai Tutorial College <strong>(ATC)</strong> is a tuition centre located in Arasaradi, Madurai, providing tuition and academic support for students. Our approach combines experienced teaching,
                individual attention, regular assessments and easy-to-understand study materials to help
                students improve their academic performance.
              </p>
            </div>

            <div className="reveal-item" style={{ opacity: 0, transform: 'translateY(20px)', transition: 'all 0.6s ease 0.4s' }}>
              <p className="tamil-text text-navy/70 text-base leading-relaxed">
                புரியும்படி பாடங்களைக் கற்பித்தல், தரமான தனிப்பட்ட கவனம் மற்றும் வழக்கமான மதிப்பீடுகள் — இவையே எங்கள் அடிப்படைக் கொள்கைகள்.
              </p>
            </div>

            <div className="reveal-item flex flex-wrap gap-3" style={{ opacity: 0, transform: 'translateY(20px)', transition: 'all 0.6s ease 0.5s' }}>
              <button
                onClick={() => document.querySelector('#courses')?.scrollIntoView({ behavior: 'smooth' })}
                id="about-explore-courses-btn"
                className="bg-navy text-cream font-bold px-6 py-3 rounded-full hover:bg-teal hover:shadow-lg transition-all duration-300 hover:scale-105"
              >
                Explore Courses
              </button>
              <a
                href="tel:9894730585"
                id="about-call-btn"
                className="flex items-center gap-2 bg-transparent border-2 border-navy text-navy font-bold px-6 py-3 rounded-full hover:bg-navy hover:text-white transition-all duration-300"
              >
                Call Now
              </a>
            </div>
          </div>

          {/* Right: Stats Grid */}
          <div className="grid grid-cols-2 gap-4">
            {stats.map((stat, index) => (
              <div
                key={stat.label}
                className="reveal-item bg-white rounded-2xl p-6 shadow-md hover:shadow-xl hover:-translate-y-1 transition-all duration-300 border border-cream-dark group"
                style={{ opacity: 0, transform: 'translateY(20px)', transition: `all 0.6s ease ${0.2 + index * 0.1}s` }}
              >
                <div className="text-4xl md:text-5xl font-black text-teal group-hover:text-gold transition-colors duration-300 mb-2">
                  {stat.number}
                </div>
                <div className="text-navy font-semibold text-sm md:text-base mb-1">{stat.label}</div>
                <div className="tamil-text text-navy/50 text-xs">{stat.sublabel}</div>
              </div>
            ))}
          </div>
        </div>

        {/* Bottom Banner */}
        <div
          className="reveal-item mt-16 rounded-3xl overflow-hidden"
          style={{ opacity: 0, transform: 'translateY(20px)', transition: 'all 0.6s ease 0.6s' }}
        >
          <div className="navy-gradient p-8 md:p-10 flex flex-col md:flex-row items-center justify-between gap-6 text-white">
            <div>
              <p className="text-gold font-bold text-lg mb-1">Special Academic Pathways</p>
              <h3 className="text-2xl md:text-3xl font-black">Join Your Next Academic Level</h3>
              <p className="tamil-text text-white/70 mt-1">உங்கள் அடுத்த கல்வி நிலைக்கு சேருங்கள்</p>
            </div>
            <div className="flex flex-wrap gap-3 shrink-0">
              {[
                { from: '8th Pass', to: 'Join SSLC', arrow: '→' },
                { from: 'SSLC Pass', to: 'Join +2', arrow: '→' },
                { from: '13½ Age', to: 'Join 8th', arrow: '→' },
              ].map((path) => (
                <div key={path.from} className="glass-card flex items-center gap-2 text-sm font-semibold py-2 px-4">
                  <span className="text-cream">{path.from}</span>
                  <span className="text-gold font-bold">{path.arrow}</span>
                  <span className="text-gold">{path.to}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
