import { useState, useEffect, useRef } from 'react';

const features = [
  {
    emoji: '📚',
    titleEn: 'Easy-to-Understand Teaching',
    titleTa: 'புரியும்படி பாடங்களை கற்பித்தல்',
    descEn: 'Complex concepts are broken down into simple, easy-to-follow lessons tailored for every student.',
    descTa: 'சிக்கலான கருத்துகளை எளிமையாக விளக்கி, எளிதான பாடங்களாகப் பிரித்துக் கற்பிக்கிறோம்.',
    color: 'from-[#063B4C] to-[#087F8C]',
  },
  {
    emoji: '🎯',
    titleEn: 'Individual Attention',
    titleTa: 'தரமான தனிப்பட்ட கவனம்',
    descEn: 'Every student receives personal attention, ensuring their unique learning needs are met.',
    descTa: 'ஒவ்வொரு மாணவரும் தனிப்பட்ட கவனம் பெறுகிறார்.',
    color: 'from-[#D6A928] to-[#e8c04a]',
  },
  {
    emoji: '⏱',
    titleEn: 'Regular Tests',
    titleTa: 'உடனுக்குடன் தேர்வு நடத்தப்படும்',
    descEn: 'Frequent assessments to track progress and identify areas needing improvement.',
    descTa: 'முன்னேற்றத்தை கண்காணிக்க அடிக்கடி மதிப்பீடுகள்.',
    color: 'from-[#087F8C] to-[#0a9aaa]',
  },
  {
    emoji: '📝',
    titleEn: 'Best Study Notes',
    titleTa: 'சிறந்த கல்வி குறிப்புகள்',
    descEn: 'Carefully prepared study materials and notes that make revision easy and effective.',
    descTa: 'திரும்பிப் படிப்பதை எளிதாக்கும் வகையில் கவனமாகத் தயாரிக்கப்பட்ட குறிப்புகள்.',
    color: 'from-[#b8921e] to-[#D6A928]',
  },
  {
    emoji: '👨‍🏫',
    titleEn: 'Experienced Teachers',
    titleTa: 'அனுபவமிக்க ஆசிரியர்கள்',
    descEn: 'Seasoned educators with deep subject knowledge and a passion for student success.',
    descTa: 'ஆழமான பாட அறிவும் மாணவர் வெற்றியில் ஆர்வமும் கொண்ட அனுபவமிக்க ஆசிரியர்கள்.',
    color: 'from-[#1a5276] to-[#063B4C]',
  },
  {
    emoji: '📅',
    titleEn: 'Regular Classes',
    titleTa: 'ஞாயிற்றுக்கிழமை முழுநேர வகுப்புகள்',
    descEn: 'Consistent class schedules including full-day Sunday sessions for comprehensive coverage.',
    descTa: 'ஞாயிற்றுக்கிழமை முழுநேர வகுப்புகள் உட்பட வழக்கமான வகுப்பு அட்டவணை.',
    color: 'from-[#087F8C] to-[#063B4C]',
  },
];

export default function Features() {
  const [lang, setLang] = useState('en');
  const sectionRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.querySelectorAll('.feature-reveal').forEach((el, i) => {
              setTimeout(() => {
                el.style.opacity = '1';
                el.style.transform = 'translateY(0) scale(1)';
              }, i * 80);
            });
          }
        });
      },
      { threshold: 0.1 }
    );
    if (sectionRef.current) observer.observe(sectionRef.current);
    return () => observer.disconnect();
  }, []);

  return (
    <section id="features" ref={sectionRef} className="py-20 md:py-28 bg-cream">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* Header */}
        <div className="text-center mb-12">
          <div className="feature-reveal" style={{ opacity: 0, transform: 'translateY(20px)', transition: 'all 0.6s ease' }}>
            <span className="inline-block bg-teal/10 text-teal font-bold text-xs uppercase tracking-widest px-4 py-1.5 rounded-full mb-4">
              Why We're Different
            </span>
          </div>
          <div className="feature-reveal" style={{ opacity: 0, transform: 'translateY(20px)', transition: 'all 0.6s ease 0.1s' }}>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-black text-navy mb-2">
              Our Special <span className="text-teal">Features</span>
            </h2>
            <p className="tamil-text text-navy/60 text-base mb-6">எங்களின் தனிச்சிறப்புகள்</p>
          </div>

          {/* Language Toggle */}
          <div className="feature-reveal inline-flex rounded-full overflow-hidden border-2 border-navy/20 shadow-sm" style={{ opacity: 0, transform: 'translateY(20px)', transition: 'all 0.6s ease 0.2s' }}>
            <button
              id="features-lang-en"
              onClick={() => setLang('en')}
              className={`px-5 py-2 font-bold text-sm transition-all duration-200 ${lang === 'en'
                ? 'bg-navy text-white'
                : 'bg-transparent text-navy hover:bg-navy/10'
                }`}
            >
              English
            </button>
            <button
              id="features-lang-ta"
              onClick={() => setLang('ta')}
              className={`tamil-text px-5 py-2 font-bold text-sm transition-all duration-200 ${lang === 'ta'
                ? 'bg-teal text-white'
                : 'bg-transparent text-navy hover:bg-teal/10'
                }`}
            >
              தமிழ்
            </button>
          </div>
        </div>

        {/* Feature Cards */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {features.map((feature, index) => (
            <div
              key={feature.titleEn}
              id={`feature-card-${index + 1}`}
              className="feature-reveal group bg-white rounded-2xl p-6 shadow-md hover:shadow-xl hover:-translate-y-1.5 transition-all duration-300 border border-cream-dark flex flex-col"
              style={{
                opacity: 0,
                transform: 'translateY(30px) scale(0.97)',
                transition: `all 0.5s ease ${0.1 + index * 0.08}s`,
              }}
            >
              {/* Icon */}
              <div className={`w-14 h-14 rounded-2xl bg-gradient-to-br ${feature.color} flex items-center justify-center text-2xl mb-4 shadow-md group-hover:scale-110 transition-transform duration-300`}>
                {feature.emoji}
              </div>

              {/* Animated title switch */}
              <div className="mb-2 min-h-[52px] flex flex-col justify-center">
                <h3 className={`font-bold text-navy text-lg leading-tight transition-all duration-300 ${lang === 'en' ? 'opacity-100' : 'opacity-0 absolute'}`}>
                  {lang === 'en' ? feature.titleEn : ''}
                </h3>
                <h3 className={`tamil-text font-bold text-navy text-lg leading-tight transition-all duration-300 ${lang === 'ta' ? 'opacity-100' : 'opacity-0 absolute'}`}>
                  {lang === 'ta' ? feature.titleTa : ''}
                </h3>
                {lang === 'en' && <p className="tamil-text text-navy/40 text-xs mt-0.5">{feature.titleTa}</p>}
                {lang === 'ta' && <p className="text-navy/40 text-xs mt-0.5">{feature.titleEn}</p>}
              </div>

              {/* Gold divider */}
              <div className="w-10 h-0.5 bg-gold rounded-full mb-3" />

              {/* Description */}
              <p className={`text-navy/70 text-sm leading-relaxed flex-1 transition-all duration-300 ${lang === 'ta' ? 'tamil-text' : ''}`}>
                {lang === 'en' ? feature.descEn : feature.descTa}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
