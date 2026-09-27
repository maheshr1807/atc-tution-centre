import { useEffect, useRef } from 'react';
import { Target, BookOpen, Clock, User, Trophy } from 'lucide-react';

const stats = [
  { number: '40+', label: 'Years of Service', icon: '🏆', sublabel: 'Decades of trust' },
  { number: '100', label: 'Target Score', icon: '🎯', sublabel: 'Exam-focused approach' },
  { number: '∞', label: 'Tests & Revision', icon: '📝', sublabel: 'Regular assessments' },
  { number: '1:1', label: 'Attention Per Student', icon: '👤', sublabel: 'Personalized guidance' },
];

const steps = [
  {
    number: '01',
    title: 'Understand',
    titleTa: 'புரிந்துகொள்',
    desc: 'Concept-based teaching in an easy-to-understand manner.',
    descTa: 'புரியும்படி கருத்துகளை கற்பித்தல்.',
    icon: <BookOpen className="w-6 h-6" />,
  },
  {
    number: '02',
    title: 'Practice',
    titleTa: 'பயிற்சி',
    desc: 'Regular exercises and question-paper practice.',
    descTa: 'தினசரி பயிற்சிகள் மற்றும் கேள்வித்தாள் பயிற்சி.',
    icon: <Target className="w-6 h-6" />,
  },
  {
    number: '03',
    title: 'Test',
    titleTa: 'தேர்வு',
    desc: 'Periodic tests to identify strengths and areas for improvement.',
    descTa: 'பலம் மற்றும் மேம்பட வேண்டிய பகுதிகளை கண்டறிய தேர்வுகள்.',
    icon: <Clock className="w-6 h-6" />,
  },
  {
    number: '04',
    title: 'Improve',
    titleTa: 'மேம்பாடு',
    desc: 'Individual guidance and doubt clarification.',
    descTa: 'தனிப்பட்ட வழிகாட்டுதல் மற்றும் சந்தேகங்களை நீக்குதல்.',
    icon: <User className="w-6 h-6" />,
  },
  {
    number: '05',
    title: 'Achieve',
    titleTa: 'வெற்றி',
    desc: 'Focused preparation towards academic goals and exam excellence.',
    descTa: 'கல்வி இலக்குகள் மற்றும் தேர்வு சிறப்பை நோக்கி கவனமான தயாரிப்பு.',
    icon: <Trophy className="w-6 h-6" />,
  },
];

export default function WhyUs() {
  const sectionRef = useRef(null);
  const methodRef = useRef(null);

  useEffect(() => {
    const observeSection = (ref, className) => {
      const observer = new IntersectionObserver(
        (entries) => {
          entries.forEach((entry) => {
            if (entry.isIntersecting) {
              entry.target.querySelectorAll(`.${className}`).forEach((el, i) => {
                setTimeout(() => {
                  el.style.opacity = '1';
                  el.style.transform = 'translateY(0)';
                }, i * 100);
              });
            }
          });
        },
        { threshold: 0.1 }
      );
      if (ref.current) observer.observe(ref.current);
      return observer;
    };

    const obs1 = observeSection(sectionRef, 'why-reveal');
    const obs2 = observeSection(methodRef, 'method-reveal');
    return () => {
      obs1.disconnect();
      obs2.disconnect();
    };
  }, []);

  return (
    <>
      {/* ===== WHY CHOOSE US SECTION ===== */}
      <section id="why-us" ref={sectionRef} className="py-20 md:py-28 bg-navy relative overflow-hidden">
        {/* Subtle radial glow */}
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_rgba(8,127,140,0.15)_0%,_transparent_70%)]" />

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Header */}
          <div className="text-center mb-14">
            <div className="why-reveal" style={{ opacity: 0, transform: 'translateY(20px)', transition: 'all 0.6s ease' }}>
              <span className="inline-block bg-gold/20 border border-gold/30 text-gold font-bold text-xs uppercase tracking-widest px-4 py-1.5 rounded-full mb-4">
                Why Students Choose Us
              </span>
            </div>
            <div className="why-reveal" style={{ opacity: 0, transform: 'translateY(20px)', transition: 'all 0.6s ease 0.1s' }}>
              <h2 className="text-3xl sm:text-4xl md:text-5xl font-black text-white mb-2">
                Our <span className="text-gold">Goal</span> is Your
                <span className="text-teal"> Achievement</span>
              </h2>
              <p className="text-white/60 text-base max-w-2xl mx-auto mt-4">
                We focus on helping every student understand concepts clearly, improve confidence and prepare effectively for examinations.
              </p>
            </div>
          </div>

          {/* Stats Grid */}
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6">
            {stats.map((stat, index) => (
              <div
                key={stat.label}
                id={`why-stat-${index + 1}`}
                className="why-reveal group text-center bg-white/5 border border-white/10 rounded-2xl p-6 hover:bg-white/10 hover:-translate-y-1 hover:border-gold/30 transition-all duration-300"
                style={{ opacity: 0, transform: 'translateY(30px)', transition: `all 0.6s ease ${0.1 + index * 0.1}s` }}
              >
                <div className="text-3xl mb-3">{stat.icon}</div>
                <div className="text-4xl md:text-5xl font-black text-gold mb-2 group-hover:scale-110 transition-transform duration-300">
                  {stat.number}
                </div>
                <div className="text-white font-semibold text-sm mb-1">{stat.label}</div>
                <div className="text-white/40 text-xs">{stat.sublabel}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ===== TEACHING METHODOLOGY SECTION ===== */}
      <section ref={methodRef} className="py-20 md:py-28 bg-cream relative overflow-hidden">
        {/* Decorative background circles */}
        <div className="absolute top-0 right-0 w-64 h-64 bg-teal/5 rounded-full -translate-y-1/2 translate-x-1/2" />
        <div className="absolute bottom-0 left-0 w-48 h-48 bg-gold/5 rounded-full translate-y-1/2 -translate-x-1/2" />

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-14">
            <div className="method-reveal" style={{ opacity: 0, transform: 'translateY(20px)', transition: 'all 0.6s ease' }}>
              <span className="inline-block bg-teal/10 text-teal font-bold text-xs uppercase tracking-widest px-4 py-1.5 rounded-full mb-4">
                Our Approach
              </span>
            </div>
            <div className="method-reveal" style={{ opacity: 0, transform: 'translateY(20px)', transition: 'all 0.6s ease 0.1s' }}>
              <h2 className="text-3xl sm:text-4xl md:text-5xl font-black text-navy mb-2">
                How We <span className="text-teal">Help Students</span>
              </h2>
              <p className="tamil-text text-navy/60 text-base">நாங்கள் மாணவர்களுக்கு எவ்வாறு உதவுகிறோம்</p>
            </div>
          </div>

          {/* Steps */}
          <div className="relative">
            {/* Connecting line (desktop) */}
            <div className="hidden lg:block absolute top-12 left-0 right-0 h-0.5 bg-gradient-to-r from-transparent via-gold/30 to-transparent" style={{ top: '2.75rem' }} />

            <div className="grid sm:grid-cols-2 lg:grid-cols-5 gap-6">
              {steps.map((step, index) => (
                <div
                  key={step.number}
                  id={`method-step-${step.number}`}
                  className="method-reveal group flex flex-col items-center text-center"
                  style={{ opacity: 0, transform: 'translateY(30px)', transition: `all 0.6s ease ${0.1 + index * 0.12}s` }}
                >
                  {/* Step Number Circle */}
                  <div className="relative mb-5">
                    <div className="w-20 h-20 rounded-full navy-gradient flex items-center justify-center shadow-xl group-hover:shadow-2xl group-hover:scale-110 transition-all duration-300 border-4 border-cream">
                      <span className="text-white">{step.icon}</span>
                    </div>
                    <div className="absolute -bottom-2 -right-2 w-8 h-8 bg-gold rounded-full flex items-center justify-center text-navy font-black text-xs shadow-md">
                      {step.number}
                    </div>
                  </div>

                  <h3 className="text-navy font-black text-lg mb-0.5">{step.title}</h3>
                  <p className="tamil-text text-teal text-xs font-semibold mb-2">{step.titleTa}</p>
                  <p className="text-navy/60 text-sm leading-relaxed">{step.desc}</p>
                  <p className="tamil-text text-navy/60 text-xs mt-1 leading-relaxed">{step.descTa}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Flow indicator */}
          <div className="method-reveal text-center mt-10" style={{ opacity: 0, transform: 'translateY(20px)', transition: 'all 0.6s ease 0.7s' }}>
            <div className="inline-flex items-center gap-2 bg-navy/5 border border-navy/15 rounded-full px-6 py-3 text-sm font-semibold text-navy">
              <span>LEARN</span>
              <span className="text-gold">→</span>
              <span>PRACTICE</span>
              <span className="text-gold">→</span>
              <span>TEST</span>
              <span className="text-gold">→</span>
              <span>IMPROVE</span>
              <span className="text-gold">→</span>
              <span className="text-teal">ACHIEVE</span>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
