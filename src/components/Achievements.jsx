import { useEffect, useRef } from 'react';
import { Star, TrendingUp, Award, CheckCircle } from 'lucide-react';

const achievements = [
  {
    icon: '🏅',
    number: '100/100',
    label: 'Subject Scores',
    desc: 'Students achieving perfect scores in board exams through our targeted coaching.',
    descTa: 'இலக்கு கற்பித்தல் மூலம் பயிற்சி தேர்வில் நூறில் நூறு மதிப்பெண் பெறும் மாணவர்கள்.',
    color: 'from-[#D6A928] to-[#e8c04a]',
  },
  {
    icon: '📈',
    number: 'High Marks',
    label: 'Board Examinations',
    desc: 'Consistent performance of our students in state board examinations over the years.',
    descTa: 'ஆண்டுதோறும் மாநில வாரிய தேர்வுகளில் மாணவர்களின் தொடர்ச்சியான சாதனை.',
    color: 'from-[#087F8C] to-[#063B4C]',
  },
  {
    icon: '✅',
    number: 'Successful',
    label: 'Academic Progress',
    desc: 'Hundreds of students guided successfully through academic transitions and career preparation.',
    descTa: 'நூற்றுக்கணக்கான மாணவர்கள் கல்வி மாற்றங்கள் மூலம் வெற்றிகரமாக வழிநடத்தப்பட்டனர்.',
    color: 'from-[#063B4C] to-[#087F8C]',
  },
  {
    icon: '🎓',
    number: '40+',
    label: 'Years of Legacy',
    desc: 'Four decades of trusted academic coaching in the heart of Madurai.',
    descTa: 'மதுரையின் மையத்தில் நம்பகமான கல்வி பயிற்சியின் நான்கு தசாப்தங்கள்.',
    color: 'from-[#b8921e] to-[#D6A928]',
  },
];

const testimonials = [
  {
    text: 'Sri A.T.C helped my daughter score 490/500 in her 10th board exams. The individual attention made all the difference.',
    author: 'Parent of 10th Std Student',
    stars: 5,
  },
  {
    text: 'The TNPSC coaching here is very structured and exam-focused. The mock tests prepared me very well.',
    author: 'TNPSC Group IV Aspirant',
    stars: 5,
  },
  {
    text: 'My son improved from 60% to 90% in just one year. The teachers here truly care about every student.',
    author: 'Parent of 12th Std Student',
    stars: 5,
  },
];

export default function Achievements() {
  const sectionRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.querySelectorAll('.achieve-reveal').forEach((el, i) => {
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
    if (sectionRef.current) observer.observe(sectionRef.current);
    return () => observer.disconnect();
  }, []);

  return (
    <section id="achievements" ref={sectionRef} className="py-20 md:py-28 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* Header */}
        <div className="text-center mb-14">
          <div className="achieve-reveal" style={{ opacity: 0, transform: 'translateY(20px)', transition: 'all 0.6s ease' }}>
            <span className="inline-block bg-gold/15 text-gold-dark font-bold text-xs uppercase tracking-widest px-4 py-1.5 rounded-full mb-4 border border-gold/30">
              Results & Achievements
            </span>
          </div>
          <div className="achieve-reveal" style={{ opacity: 0, transform: 'translateY(20px)', transition: 'all 0.6s ease 0.1s' }}>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-black text-navy mb-2">
              Student <span className="text-gold">Achievements</span>
            </h2>
            <p className="tamil-text text-navy/60 text-base">எங்கள் மாணவர்களின் சாதனைகள்</p>
          </div>
        </div>

        {/* Achievement Cards */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
          {achievements.map((item, index) => (
            <div
              key={item.label}
              id={`achievement-card-${index + 1}`}
              className="achieve-reveal group text-center bg-cream rounded-2xl p-6 shadow-md hover:shadow-xl hover:-translate-y-2 transition-all duration-300 border border-cream-dark"
              style={{ opacity: 0, transform: 'translateY(30px)', transition: `all 0.6s ease ${0.1 + index * 0.1}s` }}
            >
              <div className={`w-16 h-16 rounded-2xl bg-gradient-to-br ${item.color} flex items-center justify-center text-2xl mx-auto mb-4 shadow-md group-hover:scale-110 transition-transform duration-300`}>
                {item.icon}
              </div>
              <div className="text-3xl font-black text-navy mb-1 group-hover:text-teal transition-colors duration-300">
                {item.number}
              </div>
              <div className="text-gold font-bold text-sm mb-3">{item.label}</div>
              <p className="text-navy/60 text-xs leading-relaxed">{item.desc}</p>
            </div>
          ))}
        </div>

        {/* CTA Banner */}
        <div className="achieve-reveal rounded-3xl overflow-hidden navy-gradient p-8 md:p-12 text-center mb-16"
          style={{ opacity: 0, transform: 'translateY(20px)', transition: 'all 0.6s ease 0.5s' }}>
          <p className="text-gold font-bold text-sm uppercase tracking-widest mb-2">Join Our Success Story</p>
          <h3 className="text-white font-black text-2xl md:text-3xl lg:text-4xl mb-4">
            Your child's achievement starts here
          </h3>
          <p className="tamil-text text-white/70 text-base mb-8">உங்கள் குழந்தையின் வெற்றி இங்கிருந்து தொடங்குகிறது</p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="tel:9894730585"
              id="achievements-call-btn"
              className="inline-flex items-center justify-center gap-2 bg-gold text-navy font-black px-8 py-3.5 rounded-full hover:bg-gold-light hover:shadow-2xl hover:shadow-gold/30 hover:scale-105 transition-all duration-300"
            >
              📞 Call 98947 30585
            </a>
            <a
              href="https://wa.me/919894730585?text=Hello%20Sri%20Annai%20Tutorial%20College%2C%20I%20would%20like%20to%20enquire%20about%20admission."
              target="_blank"
              rel="noopener noreferrer"
              id="achievements-whatsapp-btn"
              className="inline-flex items-center justify-center gap-2 bg-green-500 text-white font-bold px-8 py-3.5 rounded-full hover:bg-green-400 hover:shadow-lg transition-all duration-300"
            >
              WhatsApp Enquiry
            </a>
          </div>
        </div>

        {/* Testimonials */}
        <div className="achieve-reveal" style={{ opacity: 0, transform: 'translateY(20px)', transition: 'all 0.6s ease 0.6s' }}>
          <h3 className="text-center text-2xl font-black text-navy mb-8">What Parents Say</h3>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {testimonials.map((t, index) => (
              <div
                key={index}
                id={`testimonial-${index + 1}`}
                className="bg-cream rounded-2xl p-6 border border-cream-dark hover:shadow-lg transition-shadow duration-300 relative"
              >
                {/* Quote icon */}
                <div className="absolute -top-3 left-6 text-4xl text-gold/30 font-black">"</div>
                {/* Stars */}
                <div className="flex gap-1 mb-3">
                  {[...Array(t.stars)].map((_, i) => (
                    <Star key={i} size={14} className="text-gold fill-gold" />
                  ))}
                </div>
                <p className="text-navy/70 text-sm leading-relaxed mb-4 italic">"{t.text}"</p>
                <div className="flex items-center gap-2">
                  <div className="w-8 h-8 bg-teal rounded-full flex items-center justify-center text-white text-xs font-bold">
                    {t.author.charAt(0)}
                  </div>
                  <span className="text-navy font-semibold text-sm">{t.author}</span>
                </div>
              </div>
            ))}
          </div>
          <p className="text-center text-navy/40 text-xs mt-4">* Representative testimonials. Actual results may vary.</p>
        </div>
      </div>
    </section>
  );
}
