import { useEffect, useRef } from 'react';
import { BookOpen, GraduationCap, Award, ClipboardCheck, Users, FileText, CheckCircle } from 'lucide-react';

const courses = [
  {
    id: 'school-tuition',
    icon: <BookOpen className="w-8 h-8" />,
    emoji: '🎓',
    title: 'School Tuition',
    titleTamil: 'பள்ளி கல்வி பயிற்சி',
    subtitle: '8th – 12th Standard',
    description:
      'Subject-focused coaching, regular tests and individual attention to help students build strong academic foundations.',
    features: ['8th Standard', '9th Standard', '10th Standard', '11th Standard', '12th Standard'],
    color: 'from-[#063B4C] to-[#087F8C]',
    badge: 'All Standards',
    cta: 'Enquire Now',
    waMsg: 'Hello%20Sri%20Annai%20Tutorial%20College%2C%20I%20am%20interested%20in%20School%20Tuition%20coaching.%20Please%20share%20details.',
  },
  {
    id: 'board-exam',
    icon: <GraduationCap className="w-8 h-8" />,
    emoji: '📚',
    title: 'X, XI & XII Coaching',
    titleTamil: '10, 11, 12 வகுப்பு பயிற்சி',
    subtitle: 'Board Exam Preparation',
    description:
      'Comprehensive board examination preparation with chapter-wise revision, previous question paper practice and doubt clarification.',
    features: [
      'Board examination preparation',
      'Chapter-wise revision',
      'Previous Q-Paper practice',
      'Doubt clarification',
      'Individual attention',
    ],
    color: 'from-[#087F8C] to-[#0a9aaa]',
    badge: 'Most Popular',
    cta: 'Join This Course',
    waMsg: 'Hello%2C%20I%20am%20interested%20in%20X%20XI%20XII%20Board%20Exam%20coaching.%20Please%20share%20course%20details.',
  },
  {
    id: 'sslc-plus2',
    icon: <Award className="w-8 h-8" />,
    emoji: '🏫',
    title: 'SSLC / +2 Pathways',
    titleTamil: 'SSLC / +2 சேர்வழி',
    subtitle: 'Special Admission Support',
    description:
      'Helping students join the right academic level. Special coaching for those joining SSLC from 8th and +2 from SSLC.',
    features: [
      '8th Pass → Join SSLC',
      'SSLC Pass → Join +2',
      '13½ Age → Join 8th',
      'Focused transition coaching',
      'Personalized guidance',
    ],
    color: 'from-[#b8921e] to-[#D6A928]',
    badge: 'Special Program',
    cta: 'Learn More',
    waMsg: 'Hello%2C%20I%20would%20like%20to%20know%20about%20the%20SSLC%20%2B2%20special%20admission%20coaching.',
  },
  {
    id: 'tnpsc',
    icon: <ClipboardCheck className="w-8 h-8" />,
    emoji: '📋',
    title: 'TNPSC Group IV',
    titleTamil: 'TNPSC குழு IV பயிற்சி',
    subtitle: 'Government Exam Coaching',
    description:
      'Expert-led syllabus-focused preparation for TNPSC Group IV with regular mock tests, revision sessions and exam-oriented practice.',
    features: [
      'Syllabus-focused preparation',
      'Regular mock tests',
      'Expert-led classes',
      'Revision sessions',
      'Exam-oriented practice',
    ],
    color: 'from-[#1a5276] to-[#063B4C]',
    badge: 'Govt. Exams',
    cta: 'Enquire for TNPSC',
    waMsg: 'Hello%2C%20I%20am%20interested%20in%20TNPSC%20Group%20IV%20coaching.%20Please%20share%20the%20course%20details.',
  },
];

export default function Courses() {
  const sectionRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.querySelectorAll('.course-reveal').forEach((el, i) => {
              setTimeout(() => {
                el.style.opacity = '1';
                el.style.transform = 'translateY(0)';
              }, i * 120);
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
    <section id="courses" ref={sectionRef} className="py-20 md:py-28 bg-navy">
      {/* Top wave */}
      <div className="w-full overflow-hidden -mt-1">
        <svg viewBox="0 0 1440 60" className="w-full fill-cream" preserveAspectRatio="none" style={{ height: 40, display: 'block', marginTop: -40 }}>
          <path d="M0,30 C360,60 1080,0 1440,30 L1440,0 L0,0 Z" />
        </svg>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* Header */}
        <div className="text-center mb-14">
          <div className="course-reveal" style={{ opacity: 0, transform: 'translateY(20px)', transition: 'all 0.6s ease' }}>
            <span className="inline-block bg-gold/20 border border-gold/30 text-gold font-bold text-xs uppercase tracking-widest px-4 py-1.5 rounded-full mb-4">
              What We Offer
            </span>
          </div>
          <div className="course-reveal" style={{ opacity: 0, transform: 'translateY(20px)', transition: 'all 0.6s ease 0.1s' }}>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-black text-white mb-3">
              Our <span className="text-gold">Courses</span>
            </h2>
            <p className="tamil-text text-white/60 text-base">எங்கள் பாடங்கள் மற்றும் பயிற்சிகள்</p>
          </div>
        </div>

        {/* Course Cards */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {courses.map((course, index) => (
            <div
              key={course.id}
              id={`course-card-${course.id}`}
              className="course-reveal group bg-white/5 border border-white/10 rounded-2xl overflow-hidden hover:bg-white/10 transition-all duration-300 hover:-translate-y-2 hover:shadow-2xl hover:shadow-gold/10 flex flex-col"
              style={{ opacity: 0, transform: 'translateY(30px)', transition: `all 0.6s ease ${0.15 + index * 0.1}s` }}
            >
              {/* Card top gradient bar */}
              <div className={`h-1.5 bg-gradient-to-r ${course.color}`} />

              {/* Card body */}
              <div className="p-6 flex flex-col flex-1">
                {/* Icon + Badge */}
                <div className="flex items-start justify-between mb-4">
                  <div className={`w-14 h-14 rounded-xl bg-gradient-to-br ${course.color} flex items-center justify-center text-white course-icon`}>
                    {course.icon}
                  </div>
                  <span className="bg-gold/20 text-gold text-xs font-bold px-2.5 py-1 rounded-full border border-gold/30">
                    {course.badge}
                  </span>
                </div>

                {/* Title */}
                <h3 className="text-white font-bold text-lg mb-0.5">{course.title}</h3>
                <p className="tamil-text text-white/50 text-xs mb-2">{course.titleTamil}</p>
                <p className="text-teal-light text-xs font-semibold uppercase tracking-wide mb-3">{course.subtitle}</p>

                {/* Description */}
                <p className="text-white/70 text-sm leading-relaxed mb-4">{course.description}</p>

                {/* Features */}
                <ul className="space-y-1.5 mb-6 flex-1">
                  {course.features.map((f) => (
                    <li key={f} className="flex items-center gap-2 text-white/70 text-sm">
                      <CheckCircle size={14} className="text-gold flex-shrink-0" />
                      {f}
                    </li>
                  ))}
                </ul>

                {/* CTA */}
                <a
                  href={`https://wa.me/919894730585?text=${course.waMsg}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  id={`course-cta-${course.id}`}
                  className={`block text-center bg-gradient-to-r ${course.color} text-white font-bold py-2.5 px-4 rounded-xl hover:opacity-90 hover:shadow-lg transition-all duration-200 text-sm`}
                >
                  {course.cta}
                </a>
              </div>
            </div>
          ))}
        </div>

        {/* Bottom CTA */}
        <div className="course-reveal text-center mt-12" style={{ opacity: 0, transform: 'translateY(20px)', transition: 'all 0.6s ease 0.6s' }}>
          <p className="text-white/60 mb-4">Not sure which course is right for you?</p>
          <a
            href="tel:9894730585"
            id="courses-call-guidance-btn"
            className="inline-flex items-center gap-2 bg-gold text-navy font-black px-8 py-3.5 rounded-full hover:bg-gold-light hover:shadow-xl hover:shadow-gold/30 hover:scale-105 transition-all duration-300"
          >
            📞 Call for Free Guidance — 98947 30585
          </a>
        </div>
      </div>

      {/* Bottom wave */}
      <div className="w-full overflow-hidden mt-16">
        <svg viewBox="0 0 1440 60" className="w-full fill-cream" preserveAspectRatio="none" style={{ height: 40, display: 'block' }}>
          <path d="M0,30 C360,0 1080,60 1440,30 L1440,60 L0,60 Z" />
        </svg>
      </div>
    </section>
  );
}
