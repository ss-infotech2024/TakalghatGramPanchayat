import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { motion } from "framer-motion";
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { X, Play } from "lucide-react";

// सभी इमेजेस इम्पोर्ट करें
import g1 from "@/assets/gallery/g1.jpg";
import g2 from "@/assets/gallery/g2.jpg";
import g3 from "@/assets/gallery/g3.jpg";
import g4 from "@/assets/gallery/g4.jpg";
import g5 from "@/assets/gallery/g5.jpg";
import g6 from "@/assets/gallery/g6.jpg";
import g7 from "@/assets/gallery/g7.jpg";
import g8 from "@/assets/gallery/g8.jpg";
import g9 from "@/assets/gallery/g9.jpg";
import g10 from "@/assets/gallery/g10.jpg";
import g11 from "@/assets/gallery/g11.jpg";
import g12 from "@/assets/gallery/g12.jpg";
import g13 from "@/assets/gallery/g13.jpg";
import g14 from "@/assets/gallery/g14.jpg";
import g15 from "@/assets/gallery/g15.jpg";
import g16 from "@/assets/gallery/g16.jpg";
import g17 from "@/assets/gallery/g17.jpg";
import g18 from "@/assets/gallery/g18.jpg";
import g19 from "@/assets/gallery/g19.jpg";
import g20 from "@/assets/gallery/g20.jpg";
import g21 from "@/assets/gallery/g21.jpg";
import g22 from "@/assets/gallery/g22.jpg";
import g23 from "@/assets/gallery/g23.jpg";
import g24 from "@/assets/gallery/g24.jpg";
import g25 from "@/assets/gallery/g25.jpg";
import g26 from "@/assets/gallery/g26.jpg";
import g27 from "@/assets/gallery/g27.jpg";
import g28 from "@/assets/gallery/g28.jpg";
import g29 from "@/assets/gallery/g29.jpg";
import g30 from "@/assets/gallery/g30.jpg";
import g31 from "@/assets/gallery/g31.jpg";
import g32 from "@/assets/gallery/g32.jpg";
import g33 from "@/assets/gallery/g33.jpg";
import g34 from "@/assets/gallery/g34.jpg";
import g35 from "@/assets/gallery/g35.jpg";
import g36 from "@/assets/gallery/g36.jpg";
import g37 from "@/assets/gallery/g37.jpg";

import g39 from "@/assets/gallery/g39.jpg";
import g40 from "@/assets/gallery/g40.jpg";
import g41 from "@/assets/gallery/g41.jpg";
import g42 from "@/assets/gallery/g42.jpg";
import g43 from "@/assets/gallery/g43.jpg";
import g44 from "@/assets/gallery/g44.jpg";
import g45 from "@/assets/gallery/g45.jpg";
import g46 from "@/assets/gallery/g46.jpg";
import g47 from "@/assets/gallery/g47.jpg";
import g48 from "@/assets/gallery/g48.jpg";
import g49 from "@/assets/gallery/g49.jpg";
import g50 from "@/assets/gallery/g50.jpg";
import g51 from "@/assets/gallery/g51.jpg";
import g52 from "@/assets/gallery/g52.jpg";
import g53 from "@/assets/gallery/g53.jpg";
import g54 from "@/assets/gallery/g54.jpg";
import g55 from "@/assets/gallery/g55.jpg";

// वीडियो इम्पोर्ट
import video1 from "@/assets/gallery/video1.mp4";

const galleryItems = [
  { type: "image", src: g1, category: "प्रकल्प", title: "आयुष्मान आरोग्य मंदिर" },
  { type: "image", src: g2, category: "उत्सव", title: "ग्रामोत्सव" },
  { type: "image", src: g3, category: "प्रकल्प", title: "विकास कार्य" },
  { type: "image", src: g4, category: "स्वच्छता", title: "स्वच्छ भारत अभियान" },
  { type: "image", src: g5, category: "प्रकल्प", title: "ग्राम विकास" },
  { type: "image", src: g6, category: "पायाभूत", title: "उद्यान विकास" },
  { type: "image", src: g7, category: "स्वच्छता", title: "ग्राम स्वच्छता" },
  { type: "image", src: g8, category: "लोक", title: "ग्रामस्थ" },
  { type: "image", src: g9, category: "प्रकल्प", title: "नवीन प्रकल्प" },
  { type: "image", src: g10, category: "उत्सव", title: "सांस्कृतिक कार्यक्रम" },
  { type: "video", src: video1, category: "उत्सव", title: "ग्रामपंचायत व्हिडिओ" },
  // बाकी सभी इमेजेस (आप बाद में सही टाइटल/कैटेगरी बदल सकते हैं)
  { type: "image", src: g11, category: "प्रकल्प", title: "पाणी पुरवठा योजना" },
  { type: "image", src: g12, category: "स्वच्छता", title: "कचरा व्यवस्थापन" },
  { type: "image", src: g13, category: "पायाभूत", title: "रस्ता बांधकाम" },
  { type: "image", src: g14, category: "लोक", title: "ग्रामसभेचे फोटो" },
  { type: "image", src: g15, category: "प्रकल्प", title: "आरोग्य शिबिर" },
  { type: "image", src: g16, category: "उत्सव", title: "गणेशोत्सव" },
  { type: "image", src: g17, category: "प्रकल्प", title: "डिजिटल ग्रामपंचायत" },
  { type: "image", src: g18, category: "स्वच्छता", title: "ओडीएफ गाव" },
  { type: "image", src: g19, category: "पायाभूत", title: "विजेचे खांब" },
  { type: "image", src: g20, category: "लोक", title: "महिला बचत गट" },
  { type: "image", src: g21, category: "प्रकल्प", title: "शौचालय बांधकाम" },
  { type: "image", src: g22, category: "प्रकल्प", title: "विकास प्रकल्प" },
  { type: "image", src: g23, category: "उत्सव", title: "दिवाळी सजावट" },
  { type: "image", src: g24, category: "स्वच्छता", title: "नाला सफाई" },
  { type: "image", src: g25, category: "पायाभूत", title: "पाण्याची टाकी" },
  { type: "image", src: g26, category: "लोक", title: "युवा मंडळ" },
  { type: "image", src: g27, category: "प्रकल्प", title: "सौर ऊर्जा" },
  { type: "image", src: g28, category: "उत्सव", title: "होळी उत्सव" },
  { type: "image", src: g29, category: "स्वच्छता", title: "प्लास्टिक मुक्त गाव" },
  { type: "image", src: g30, category: "पायाभूत", title: "खेळाचे मैदान" },
  { type: "image", src: g31, category: "लोक", title: "शाळेतील कार्यक्रम" },
  { type: "image", src: g32, category: "प्रकल्प", title: "रोजगार हमी योजना" },
  { type: "image", src: g33, category: "उत्सव", title: "स्वातंत्र्य दिन" },
  { type: "image", src: g34, category: "स्वच्छता", title: "झाडे लावणी" },
  { type: "image", src: g35, category: "पायाभूत", title: "ग्रामपंचायत इमारत" },
  { type: "image", src: g36, category: "लोक", title: "आरोग्य तपासणी" },
  { type: "image", src: g37, category: "प्रकल्प", title: "पशुधन विकास" },
  { type: "image", src: g39, category: "स्वच्छता", title: "स्वच्छ गाव स्पर्धा" },
  { type: "image", src: g40, category: "पायाभूत", title: "सीसीटीव्ही बसवणे" },
  { type: "image", src: g41, category: "लोक", title: "बालवाडी" },
  { type: "image", src: g42, category: "प्रकल्प", title: "कृषी मार्गदर्शन" },
  { type: "image", src: g43, category: "उत्सव", title: "मकर संक्रांत" },
  { type: "image", src: g44, category: "स्वच्छता", title: "पाणी शुद्धीकरण" },
  { type: "image", src: g45, category: "पायाभूत", title: "वाय-फाय झोन" },
  { type: "image", src: g46, category: "लोक", title: "वरिष्ठ नागरिक" },
  { type: "image", src: g47, category: "प्रकल्प", title: "माती परीक्षण" },
  { type: "image", src: g48, category: "उत्सव", title: "गुरुपौर्णिमा" },
  { type: "image", src: g49, category: "स्वच्छता", title: "कंपोस्ट खत" },
  { type: "image", src: g50, category: "पायाभूत", title: "लाइब्ररी" },
  { type: "image", src: g51, category: "लोक", title: "महिला दिन" },
  { type: "image", src: g52, category: "प्रकल्प", title: "स्मार्ट व्हिलेज" },
  { type: "image", src: g53, category: "उत्सव", title: "रक्षाबंधन" },
  { type: "image", src: g54, category: "स्वच्छता", title: "रिसायकलिंग" },
  { type: "image", src: g55, category: "पायाभूत", title: "सौर दिवे" },
];

const categories = ["सर्व", "प्रकल्प", "उत्सव", "स्वच्छता", "पायाभूत", "लोक"];

export default function Gallery() {
  const [activeCategory, setActiveCategory] = useState("सर्व");
  const [selectedItem, setSelectedItem] = useState<any | null>(null);

  const filteredItems = activeCategory === "सर्व"
    ? galleryItems
    : galleryItems.filter(item => item.category === activeCategory);

  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main>
        {/* Hero Section */}
        <section className="bg-primary text-primary-foreground py-16">
          <div className="container">
            <motion.h1
              className="text-4xl md:text-5xl font-bold mb-4"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
            >
              फोटो गॅलरी
            </motion.h1>
            <motion.p
              className="text-xl opacity-90"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 }}
            >
              टाकळघाट ग्रामपंचायतातील विविध कार्यक्रम, प्रकल्प आणि उत्सवांचे फोटो व व्हिडिओ
            </motion.p>
          </div>
        </section>

        {/* Category Filters */}
        <section className="py-8 border-b border-border">
          <div className="container">
            <div className="flex flex-wrap gap-3">
              {categories.map((category) => (
                <Button
                  key={category}
                  variant={activeCategory === category ? "default" : "outline"}
                  onClick={() => setActiveCategory(category)}
                >
                  {category}
                </Button>
              ))}
            </div>
          </div>
        </section>

        {/* Gallery Grid */}
        <section className="py-12">
          <div className="container">
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
              {filteredItems.map((item, index) => (
                <motion.div
                  key={index}
                  className="relative group aspect-square rounded-xl overflow-hidden cursor-pointer shadow-lg"
                  initial={{ opacity: 0, scale: 0.9 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.05 }}
                  onClick={() => setSelectedItem(item)}
                >
                  {item.type === "image" ? (
                    <img
                      src={item.src}
                      alt={item.title}
                      className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                    />
                  ) : (
                    <video
                      src={item.src}
                      muted
                      loop
                      className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                    />
                  )}

                  {/* Play Icon for Video */}
                  {item.type === "video" && (
                    <div className="absolute inset-0 flex items-center justify-center">
                      <div className="bg-black/50 rounded-full p-4 backdrop-blur-sm">
                        <Play className="w-12 h-12 text-white" fill="white" />
                      </div>
                    </div>
                  )}

                  {/* Hover Overlay */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end">
                    <div className="p-4 text-white">
                      <p className="font-semibold text-lg">{item.title}</p>
                      <p className="text-sm opacity-90">{item.category}</p>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Lightbox Modal */}
        {selectedItem && (
          <motion.div
            className="fixed inset-0 z-50 bg-black/95 flex items-center justify-center p-4"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            onClick={() => setSelectedItem(null)}
          >
            <button
              className="absolute top-4 right-4 p-3 bg-white/20 hover:bg-white/40 rounded-full text-white backdrop-blur-sm transition"
              onClick={() => setSelectedItem(null)}
            >
              <X className="w-8 h-8" />
            </button>

            {selectedItem.type === "image" ? (
              <motion.img
                src={selectedItem.src}
                alt={selectedItem.title}
                className="max-w-full max-h-[90vh] rounded-xl shadow-2xl"
                initial={{ scale: 0.8, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                onClick={(e) => e.stopPropagation()}
              />
            ) : (
              <motion.video
                src={selectedItem.src}
                autoPlay
                muted={false}
                controls
                loop
                className="max-w-full max-h-[90vh] rounded-xl shadow-2xl"
                initial={{ scale: 0.8, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                onClick={(e) => e.stopPropagation()}
              />
            )}

            <div className="absolute bottom-8 left-1/2 -translate-x-1/2 text-center text-white">
              <p className="text-2xl font-bold drop-shadow-lg">{selectedItem.title}</p>
              <p className="text-lg opacity-90">{selectedItem.category}</p>
            </div>
          </motion.div>
        )}
      </main>
      <Footer />
    </div>
  );
}