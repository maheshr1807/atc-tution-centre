import { useEffect, useRef, useState } from 'react';
import teaching from '../assets/tecahing img.jpeg';
import video from '../assets/tution intro video.mp4';
import tumbnail from '../assets/tumbnail.jpeg';
import kathi from '../assets/kathiresan.jpeg';


const galleryItems = [
  {
    id: 'gallery-teacher',
    src: teaching,
    alt: 'ATC Tuition Centre Madurai - Expert teachers explaining concepts to students',
    label: 'Expert Teaching',
    span: 'col-span-1 row-span-2 sm:col-span-1',
  },
  {
    id: 'gallery-classroom',
    src: kathi,
    alt: 'ATC Tuition Centre Founder Kathiresan - Quality Education in Madurai',
    label: 'kathiresan',
    span: 'col-span-1 row-span-1',
  },
  {
    id: 'gallery-video',
    src: video,
    poster: tumbnail,
    alt: 'ATC Tuition Centre Madurai - Classroom teaching session video',
    label: 'Our Teaching',
    type: 'video',
    span: 'col-span-1 row-span-1',
  },

];

export default function Gallery() {
  const sectionRef = useRef(null);
  const [selectedVideo, setSelectedVideo] = useState(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.querySelectorAll('.gallery-reveal').forEach((el, i) => {
              setTimeout(() => {
                el.style.opacity = '1';
                el.style.transform = 'scale(1)';
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
    <section id="gallery" ref={sectionRef} className="py-20 md:py-28 bg-navy relative">
      {/* Top cream wave */}
      <div className="absolute top-0 left-0 right-0 overflow-hidden" style={{ height: 40 }}>
        <svg viewBox="0 0 1440 60" className="w-full fill-white" preserveAspectRatio="none" style={{ height: 40, display: 'block', marginTop: -1 }}>
          <path d="M0,30 C360,60 1080,0 1440,30 L1440,0 L0,0 Z" />
        </svg>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-12">
          <div className="gallery-reveal" style={{ opacity: 0, transform: 'scale(0.95)', transition: 'all 0.6s ease' }}>
            <span className="inline-block bg-gold/20 border border-gold/30 text-gold font-bold text-xs uppercase tracking-widest px-4 py-1.5 rounded-full mb-4">
              Our Campus Life
            </span>
          </div>
          <div className="gallery-reveal" style={{ opacity: 0, transform: 'scale(0.95)', transition: 'all 0.6s ease 0.1s' }}>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-black text-white mb-2">
              Photo <span className="text-gold">Gallery</span>
            </h2>
            <p className="tamil-text text-white/60 text-base">எங்கள் கல்வி சூழல்</p>
          </div>
        </div>

        {/* Gallery Grid */}
        <div className="grid grid-cols-2 sm:grid-cols-3 gap-3 md:gap-4">
          {galleryItems.map((item, index) => (
            <div
              key={item.id}
              id={item.id}
              className={`gallery-reveal group relative overflow-hidden rounded-2xl ${item.span} aspect-square`}
              style={{
                opacity: 0,
                transform: 'scale(0.92)',
                transition: `all 0.5s ease ${0.1 + index * 0.1}s`,
              }}
            >
              {item.type === 'video' ? (
                <div
                  className="relative w-full h-full cursor-pointer group"
                  onClick={() => setSelectedVideo(item.src)}
                >
                  <img
                    src={item.poster}
                    alt={item.alt}
                    className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
                  />
                  <div className="absolute bottom-0 left-0 right-0 bg-black/50 p-3 text-white">
                    {item.label}
                  </div>
                </div>
              ) : (
                <img
                  src={item.src}
                  alt={item.alt}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
              )}
              {/* Overlay */}
              <div className="absolute inset-0 pointer-events-none bg-gradient-to-t from-navy/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-4">
                <span className="text-white font-bold text-sm">{item.label}</span>
              </div>
              {/* Gold border on hover */}
              <div className="absolute inset-0 pointer-events-none border-2 border-gold/0 group-hover:border-gold/50 rounded-2xl transition-all duration-300" />
            </div>
          ))}
        </div>

        {/* Bottom Text */}
        <div className="gallery-reveal text-center mt-10" style={{ opacity: 0, transform: 'scale(0.95)', transition: 'all 0.6s ease 0.6s' }}>
          <p className="text-white/50 text-sm mb-4">
            📸 More photos and updates available — follow us on WhatsApp
          </p>
          <a
            href="https://wa.me/919894730585?text=Hello%20Sri%20Annai%20Tutorial%20College%2C%20I%20would%20like%20to%20see%20more%20about%20your%20tuition%20centre."
            target="_blank"
            rel="noopener noreferrer"
            id="gallery-whatsapp-btn"
            className="inline-flex items-center gap-2 bg-green-600 text-white font-bold px-6 py-3 rounded-full hover:bg-green-500 hover:shadow-lg transition-all duration-300"
          >
            <svg className="w-5 h-5 fill-white flex-shrink-0" viewBox="0 0 24 24">
              <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
            </svg>
            Connect on WhatsApp
          </a>
        </div>
      </div>

      {/* Bottom cream wave */}
      <div className="absolute bottom-0 left-0 right-0 overflow-hidden" style={{ height: 40 }}>
        <svg viewBox="0 0 1440 60" className="w-full fill-cream" preserveAspectRatio="none" style={{ height: 40, display: 'block' }}>
          <path d="M0,30 C360,0 1080,60 1440,30 L1440,60 L0,60 Z" />
        </svg>
      </div>

      {/* Video Modal */}
      {selectedVideo && (
        <div
          className="fixed inset-0 z-[60] flex items-center justify-center bg-black/90 p-4"
          onClick={() => setSelectedVideo(null)}
        >
          <div className="relative w-full max-w-4xl aspect-video" onClick={e => e.stopPropagation()}>
            <button
              onClick={() => setSelectedVideo(null)}
              className="absolute -top-12 right-0 text-white hover:text-gold transition-colors text-4xl font-bold"
            >
              &times;
            </button>
            <video
              src={selectedVideo}
              controls
              autoPlay
              className="w-full h-full rounded-xl bg-black"
            />
          </div>
        </div>
      )}
    </section>
  );
}
