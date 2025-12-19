import { useEffect, useState, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { Button } from "@/components/ui/button";

import g1 from "@/assets/gallery/g1.jpg";
import g4 from "@/assets/gallery/g4.jpg";
import g7 from "@/assets/gallery/g7.jpg";
import g22 from "@/assets/gallery/g22.jpg";
import sampleVideo from "@/assets/gallery/video1.mp4"; // अपना वीडियो यहाँ डालें

const slides = [
  {
    type: "image" as const,
    media: g1,
    title: "आधुनिक आणि डिजिटल टाकळघाट ग्रामपंचायत",
    subtitle: "आयुष्मान आरोग्य मंदिर - आरोग्य सेवा सर्वांसाठी",
  },
  {
    type: "video" as const,
    media: sampleVideo,
    title: "ग्रामपंचायत कार्यालय",
    subtitle: "डिजिटल भारताच्या दिशेने एक पाऊल पुढे",
  },
  {
    type: "image" as const,
    media: g4,
    title: "स्वच्छ भारत अभियान",
    subtitle: "स्वच्छता आणि पर्यावरण संरक्षणासाठी सामूहिक प्रयत्न",
  },
  {
    type: "image" as const,
    media: g7,
    title: "ग्राम स्वच्छता अभियान",
    subtitle: "स्वच्छता ही सेवा - प्रत्येक नागरिकाचे कर्तव्य",
  },
  {
    type: "image" as const,
    media: g22,
    title: "विकास प्रकल्प",
    subtitle: "ग्रामीण विकास आणि आधुनिकीकरणाच्या दिशेने प्रवास",
  },
];

export function HeroSlider() {
  const [current, setCurrent] = useState(0);
  const timerRef = useRef<NodeJS.Timeout | null>(null);

  const currentSlide = slides[current];

  // ऑटो-स्लाइड केवल इमेज पर काम करेगा
  useEffect(() => {
    // अगर पहले से टाइमर चल रहा है तो क्लियर करो
    if (timerRef.current) {
      clearInterval(timerRef.current);
      timerRef.current = null;
    }

    // केवल इमेज स्लाइड पर ही ऑटो-स्लाइड लगाओ
    if (currentSlide.type === "image") {
      timerRef.current = setInterval(() => {
        setCurrent((prev) => (prev + 1) % slides.length);
      }, 7000);
    }

    // क्लीनअप
    return () => {
      if (timerRef.current) {
        clearInterval(timerRef.current);
      }
    };
  }, [current, currentSlide.type]);

  const prev = () => {
    setCurrent((c) => (c - 1 + slides.length) % slides.length);
  };

  const next = () => {
    setCurrent((c) => (c + 1) % slides.length);
  };

  return (
    <section className="relative h-[500px] md:h-[600px] overflow-hidden">
      <AnimatePresence mode="wait">
        <motion.div
          key={current}
          initial={{ opacity: 0, scale: 1.1 }}
          animate={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0, scale: 0.95 }}
          transition={{ duration: 0.7 }}
          className="absolute inset-0"
        >
          {currentSlide.type === "image" ? (
            <img
              src={currentSlide.media}
              alt={currentSlide.title}
              className="w-full h-full object-cover"
            />
          ) : (
            <video
              src={currentSlide.media}
              autoPlay
              muted
              loop={false} // लूप बंद - वीडियो एक बार पूरा चलेगा
              playsInline
              className="w-full h-full object-cover"
            />
          )}

          <div className="absolute inset-0 bg-black/40" />
        </motion.div>
      </AnimatePresence>

      {/* Text Content */}
      <div className="absolute inset-0 flex items-center justify-center">
        <div className="container text-center text-white">
          <AnimatePresence mode="wait">
            <motion.div
              key={current}
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -30 }}
              transition={{ duration: 0.5, delay: 0.2 }}
            >
              <h2 className="text-3xl md:text-5xl lg:text-6xl font-bold mb-4 drop-shadow-2xl">
                {currentSlide.title}
              </h2>
              <p className="text-lg md:text-xl mb-8 max-w-3xl mx-auto drop-shadow-lg">
                {currentSlide.subtitle}
              </p>
              <Button
                size="lg"
                className="bg-secondary hover:bg-secondary/90 text-secondary-foreground font-semibold px-8 shadow-lg"
              >
                अधिक पहा
              </Button>
            </motion.div>
          </AnimatePresence>
        </div>
      </div>

      {/* Arrows */}
      <button
        onClick={prev}
        className="absolute left-4 top-1/2 -translate-y-1/2 p-3 bg-white/20 hover:bg-white/40 rounded-full text-white backdrop-blur-sm transition-all z-10"
        aria-label="मागील स्लाइड"
      >
        <ChevronLeft className="h-8 w-8" />
      </button>
      <button
        onClick={next}
        className="absolute right-4 top-1/2 -translate-y-1/2 p-3 bg-white/20 hover:bg-white/40 rounded-full text-white backdrop-blur-sm transition-all z-10"
        aria-label="पुढील स्लाइड"
      >
        <ChevronRight className="h-8 w-8" />
      </button>

      {/* Dots */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex gap-3 z-10">
        {slides.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrent(index)}
            className={`h-3 rounded-full transition-all duration-300 ${index === current
              ? "bg-secondary w-10"
              : "bg-white/60 w-3 hover:bg-white/80"
              }`}
            aria-label={`स्लाइड ${index + 1} वर जा`}
          />
        ))}
      </div>
    </section>
  );
}