import { useState, useRef, useEffect } from 'react';
import { ChevronDown, ChevronUp } from 'lucide-react';

const faqs = [
  {
    question: 'What classes do you offer coaching for?',
    answer: 'We offer coaching for 8th to 12th standard students, including specialized board exam preparation for 10th, 11th, and 12th. We also provide TNPSC Group IV coaching.'
  },
  {
    question: 'Do you provide individual attention?',
    answer: 'Yes, our teaching approach ensures that every student gets individual attention to clarify doubts and understand concepts thoroughly.'
  },
  {
    question: 'What are your class timings?',
    answer: 'We have regular weekday classes and full-day sessions on Sundays to ensure comprehensive syllabus coverage and revision.'
  },
  {
    question: 'How do you track student progress?',
    answer: 'We conduct regular periodic tests and chapter-wise revisions to monitor each student\'s progress and identify areas for improvement.'
  }
];

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState(null);
  const sectionRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.querySelectorAll('.faq-reveal').forEach((el, i) => {
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
    <section id="faq" ref={sectionRef} className="py-20 md:py-28 bg-white">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center mb-14">
          <div className="faq-reveal" style={{ opacity: 0, transform: 'translateY(20px)', transition: 'all 0.6s ease' }}>
            <span className="inline-block bg-teal/10 text-teal font-bold text-xs uppercase tracking-widest px-4 py-1.5 rounded-full mb-4">
              Queries
            </span>
          </div>
          <div className="faq-reveal" style={{ opacity: 0, transform: 'translateY(20px)', transition: 'all 0.6s ease 0.1s' }}>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-black text-navy mb-2">
              Frequently Asked <span className="text-gold">Questions</span>
            </h2>
          </div>
        </div>

        {/* Accordion */}
        <div className="space-y-4">
          {faqs.map((faq, index) => (
            <div 
              key={index} 
              className="faq-reveal border border-gray-200 rounded-xl overflow-hidden"
              style={{ opacity: 0, transform: 'translateY(20px)', transition: `all 0.6s ease ${0.2 + index * 0.1}s` }}
            >
              <button
                className="w-full px-6 py-4 flex items-center justify-between bg-cream hover:bg-gray-50 transition-colors"
                onClick={() => setOpenIndex(openIndex === index ? null : index)}
              >
                <span className="font-bold text-navy text-left">{faq.question}</span>
                {openIndex === index ? (
                  <ChevronUp className="text-gold flex-shrink-0" size={20} />
                ) : (
                  <ChevronDown className="text-gold flex-shrink-0" size={20} />
                )}
              </button>
              
              {/* Answer */}
              <div 
                className={`px-6 overflow-hidden transition-all duration-300 ${openIndex === index ? 'py-4 max-h-40' : 'max-h-0'}`}
              >
                <p className="text-navy/70 text-sm leading-relaxed">{faq.answer}</p>
              </div>
            </div>
          ))}
        </div>
        
      </div>
    </section>
  );
}
