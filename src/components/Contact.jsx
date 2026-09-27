import { useState, useRef, useEffect } from 'react';
import { Phone, MapPin, MessageCircle, Send, Navigation, CheckCircle, AlertCircle } from 'lucide-react';

const courses = [
  'School Tuition (8th – 12th)',
  'X, XI & XII Board Coaching',
  'SSLC / +2 Special Admission',
  'TNPSC Group IV',
  'Other / General Enquiry',
];

const classes = ['8th Std', '9th Std', '10th Std (SSLC)', '11th Std', '12th Std (+2)', 'TNPSC Aspirant', 'Parent/Guardian'];

export default function Contact() {
  const sectionRef = useRef(null);
  const [form, setForm] = useState({
    studentName: '',
    parentName: '',
    classStd: '',
    course: '',
    phone: '',
    message: '',
  });
  const [status, setStatus] = useState('idle'); // idle | sending | success | error
  const [errors, setErrors] = useState({});

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.querySelectorAll('.contact-reveal').forEach((el, i) => {
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

  const validate = () => {
    const newErrors = {};
    if (!form.studentName.trim()) newErrors.studentName = 'Student name is required';
    if (!form.phone.trim()) newErrors.phone = 'Phone number is required';
    else if (!/^[6-9]\d{9}$/.test(form.phone.replace(/\s/g, ''))) newErrors.phone = 'Enter a valid 10-digit mobile number';
    if (!form.classStd) newErrors.classStd = 'Please select a class';
    if (!form.course) newErrors.course = 'Please select a course';
    return newErrors;
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm((prev) => ({ ...prev, [name]: value }));
    if (errors[name]) setErrors((prev) => ({ ...prev, [name]: '' }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const newErrors = validate();
    if (Object.keys(newErrors).length > 0) {
      setErrors(newErrors);
      return;
    }

    // Build WhatsApp message with form data
    const msg = encodeURIComponent(
      `Hello Sri Annai Tutorial College,\n\nNew Enquiry:\n` +
      `Student Name: ${form.studentName}\n` +
      `Parent Name: ${form.parentName || 'Not provided'}\n` +
      `Class: ${form.classStd}\n` +
      `Course: ${form.course}\n` +
      `Phone: ${form.phone}\n` +
      `Message: ${form.message || 'No additional message'}`
    );

    setStatus('sending');
    // Redirect to WhatsApp after short delay
    setTimeout(() => {
      window.open(`https://wa.me/919894730585?text=${msg}`, '_blank');
      setStatus('success');
      setForm({ studentName: '', parentName: '', classStd: '', course: '', phone: '', message: '' });
    }, 800);
  };

  const inputClass = (field) =>
    `w-full bg-white/10 border ${errors[field] ? 'border-red-400' : 'border-white/20'} text-white placeholder-white/40 rounded-xl px-4 py-3 text-sm focus:outline-none focus:ring-2 ${errors[field] ? 'focus:ring-red-400' : 'focus:ring-gold'} focus:border-transparent transition-all duration-200`;

  return (
    <section id="contact" ref={sectionRef} className="py-20 md:py-28 bg-cream">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* Header */}
        <div className="text-center mb-14">
          <div className="contact-reveal" style={{ opacity: 0, transform: 'translateY(20px)', transition: 'all 0.6s ease' }}>
            <span className="inline-block bg-teal/10 text-teal font-bold text-xs uppercase tracking-widest px-4 py-1.5 rounded-full mb-4">
              Get In Touch
            </span>
          </div>
          <div className="contact-reveal" style={{ opacity: 0, transform: 'translateY(20px)', transition: 'all 0.6s ease 0.1s' }}>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-black text-navy mb-2">
              Visit <span className="text-teal">Sri Annai</span> Tutorial College
            </h2>
            <p className="tamil-text text-navy/60 text-base">எங்களை தொடர்பு கொள்ளுங்கள்</p>
          </div>
        </div>

        <div className="grid lg:grid-cols-2 gap-10 lg:gap-16">

          {/* Left: Contact Info + Map */}
          <div className="space-y-6">
            {/* Info Card */}
            <div
              className="contact-reveal navy-gradient rounded-3xl p-8 text-white"
              style={{ opacity: 0, transform: 'translateY(30px)', transition: 'all 0.6s ease 0.2s' }}
            >
              <h3 className="text-xl font-black mb-6 text-gold">Contact Information</h3>

              <div className="space-y-5">
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 bg-white/15 rounded-xl flex items-center justify-center flex-shrink-0">
                    <MapPin size={20} className="text-gold" />
                  </div>
                  <div>
                    <p className="font-semibold text-white mb-0.5">Our Location</p>
                    <p className="text-white/70 text-sm leading-relaxed">
                      Arasaradi, Opp. Devaki Scan,<br />Madurai, Tamil Nadu
                    </p>
                  </div>
                </div>

                <div className="flex items-center gap-4">
                  <div className="w-10 h-10 bg-white/15 rounded-xl flex items-center justify-center flex-shrink-0">
                    <Phone size={20} className="text-gold" />
                  </div>
                  <div>
                    <p className="font-semibold text-white mb-0.5">Phone</p>
                    <a href="tel:9894730585" className="text-gold hover:text-gold-light transition-colors font-bold text-lg">
                      98947 30585
                    </a>
                  </div>
                </div>
              </div>

              {/* Action Buttons */}
              <div className="flex flex-col sm:flex-row gap-3 mt-8">
                <a
                  href="tel:9894730585"
                  id="contact-call-btn"
                  className="flex-1 flex items-center justify-center gap-2 bg-gold text-navy font-bold py-3 px-4 rounded-xl hover:bg-gold-light hover:shadow-lg transition-all duration-200 text-sm"
                >
                  <Phone size={16} />
                  Call Now
                </a>
                <a
                  href="https://wa.me/919894730585?text=Hello%20Sri%20Annai%20Tutorial%20College%2C%20I%20would%20like%20to%20enquire%20about%20admission."
                  target="_blank"
                  rel="noopener noreferrer"
                  id="contact-whatsapp-btn"
                  className="flex-1 flex items-center justify-center gap-2 bg-green-600 text-white font-bold py-3 px-4 rounded-xl hover:bg-green-500 hover:shadow-lg transition-all duration-200 text-sm"
                >
                  <svg className="w-4 h-4 fill-white" viewBox="0 0 24 24">
                    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
                  </svg>
                  WhatsApp
                </a>
                <a
                  href="https://maps.google.com/?q=Arasaradi,+Madurai,+Tamil+Nadu"
                  target="_blank"
                  rel="noopener noreferrer"
                  id="contact-directions-btn"
                  className="flex-1 flex items-center justify-center gap-2 bg-white/15 backdrop-blur border border-white/30 text-white font-bold py-3 px-4 rounded-xl hover:bg-white/25 transition-all duration-200 text-sm"
                >
                  <Navigation size={16} />
                  Directions
                </a>
              </div>
            </div>

            {/* Google Maps Embed */}
            <div
              className="contact-reveal rounded-3xl overflow-hidden shadow-xl border-4 border-white"
              style={{ opacity: 0, transform: 'translateY(30px)', transition: 'all 0.6s ease 0.3s' }}
            >
              <iframe
                title="Sri Annai Tutorial College Location"
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3930.9847!2d78.1198!3d9.9252!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3b00c5b26000000%3A0x0!2sArasaradi%2C+Madurai%2C+Tamil+Nadu!5e0!3m2!1sen!2sin!4v1720000000000!5m2!1sen!2sin"
                width="100%"
                height="260"
                style={{ border: 0 }}
                allowFullScreen=""
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              />
            </div>
          </div>

          {/* Right: Enquiry Form */}
          <div
            className="contact-reveal"
            style={{ opacity: 0, transform: 'translateY(30px)', transition: 'all 0.6s ease 0.3s' }}
          >
            <div className="navy-gradient rounded-3xl p-8">
              <h3 className="text-xl font-black text-white mb-2">Send an Enquiry</h3>
              <p className="tamil-text text-white/60 text-sm mb-6">விசாரணை அனுப்புங்கள்</p>

              <form id="enquiry-form" onSubmit={handleSubmit} className="space-y-4">
                {/* Student Name */}
                <div>
                  <label className="text-white/70 text-xs font-semibold uppercase tracking-wide mb-1.5 block">
                    Student Name *
                  </label>
                  <input
                    id="form-student-name"
                    type="text"
                    name="studentName"
                    value={form.studentName}
                    onChange={handleChange}
                    placeholder="Enter student's name"
                    className={inputClass('studentName')}
                  />
                  {errors.studentName && <p className="text-red-400 text-xs mt-1">{errors.studentName}</p>}
                </div>

                {/* Parent Name */}
                <div>
                  <label className="text-white/70 text-xs font-semibold uppercase tracking-wide mb-1.5 block">
                    Parent / Guardian Name
                  </label>
                  <input
                    id="form-parent-name"
                    type="text"
                    name="parentName"
                    value={form.parentName}
                    onChange={handleChange}
                    placeholder="Enter parent's name"
                    className={inputClass('parentName')}
                  />
                </div>

                {/* Class + Course in 2 cols */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="text-white/70 text-xs font-semibold uppercase tracking-wide mb-1.5 block">
                      Class / Standard *
                    </label>
                    <select
                      id="form-class"
                      name="classStd"
                      value={form.classStd}
                      onChange={handleChange}
                      className={`${inputClass('classStd')} appearance-none cursor-pointer`}
                    >
                      <option value="" className="bg-navy text-white">Select class</option>
                      {classes.map((c) => (
                        <option key={c} value={c} className="bg-navy text-white">{c}</option>
                      ))}
                    </select>
                    {errors.classStd && <p className="text-red-400 text-xs mt-1">{errors.classStd}</p>}
                  </div>
                  <div>
                    <label className="text-white/70 text-xs font-semibold uppercase tracking-wide mb-1.5 block">
                      Course Interested *
                    </label>
                    <select
                      id="form-course"
                      name="course"
                      value={form.course}
                      onChange={handleChange}
                      className={`${inputClass('course')} appearance-none cursor-pointer`}
                    >
                      <option value="" className="bg-navy text-white">Select course</option>
                      {courses.map((c) => (
                        <option key={c} value={c} className="bg-navy text-white">{c}</option>
                      ))}
                    </select>
                    {errors.course && <p className="text-red-400 text-xs mt-1">{errors.course}</p>}
                  </div>
                </div>

                {/* Phone */}
                <div>
                  <label className="text-white/70 text-xs font-semibold uppercase tracking-wide mb-1.5 block">
                    Phone Number *
                  </label>
                  <input
                    id="form-phone"
                    type="tel"
                    name="phone"
                    value={form.phone}
                    onChange={handleChange}
                    placeholder="Enter your mobile number"
                    className={inputClass('phone')}
                  />
                  {errors.phone && <p className="text-red-400 text-xs mt-1">{errors.phone}</p>}
                </div>

                {/* Message */}
                <div>
                  <label className="text-white/70 text-xs font-semibold uppercase tracking-wide mb-1.5 block">
                    Message (Optional)
                  </label>
                  <textarea
                    id="form-message"
                    name="message"
                    value={form.message}
                    onChange={handleChange}
                    rows={3}
                    placeholder="Any specific questions or requirements..."
                    className={`${inputClass('message')} resize-none`}
                  />
                </div>

                {/* Submit */}
                <button
                  id="form-submit-btn"
                  type="submit"
                  disabled={status === 'sending'}
                  className="w-full bg-gold hover:bg-gold-light text-navy font-black py-4 rounded-xl transition-all duration-300 hover:shadow-2xl hover:shadow-gold/30 hover:scale-[1.02] active:scale-95 flex items-center justify-center gap-2 text-base disabled:opacity-70 disabled:cursor-not-allowed"
                >
                  {status === 'sending' ? (
                    <>
                      <div className="w-5 h-5 border-2 border-navy/30 border-t-navy rounded-full animate-spin" />
                      Sending via WhatsApp...
                    </>
                  ) : (
                    <>
                      <Send size={18} />
                      Submit Enquiry via WhatsApp
                    </>
                  )}
                </button>

                {/* Success Message */}
                {status === 'success' && (
                  <div className="flex items-center gap-2 bg-green-500/20 border border-green-400/30 text-green-300 text-sm p-3 rounded-xl">
                    <CheckCircle size={16} />
                    Enquiry sent! We'll contact you soon.
                  </div>
                )}
              </form>

              <p className="text-white/30 text-xs mt-4 text-center">
                * Submitting will open WhatsApp with your details pre-filled.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
