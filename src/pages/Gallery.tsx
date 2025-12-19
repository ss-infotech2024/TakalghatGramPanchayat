import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { motion } from "framer-motion";
import { useEffect, useState } from "react";
import { Button } from "@/components/ui/button";
import { X, Play } from "lucide-react";

// Dynamic imports for all images and video
// This avoids build-time "file not found" errors due to case sensitivity or missing files
const importAllImages = import.meta.glob("@/assets/gallery/*.{jpg,jpeg,png,webp,JPG,JPEG,PNG,WEBP}", {
  eager: false,
  import: "default",
});

const videoImport = import.meta.glob("@/assets/gallery/*.mp4", {
  eager: false,
  import: "default",
});

// Define gallery items using filenames (make sure these match EXACT file names in your folder)
const galleryItems = [
  { type: "image", file: "g1.jpg", category: "प्रकल्प", title: "आयुष्मान आरोग्य मंदिर" },
  { type: "image", file: "g2.jpg", category: "उत्सव", title: "ग्रामोत्सव" },
  { type: "image", file: "g3.jpg", category: "प्रकल्प", title: "विकास कार्य" },
  { type: "image", file: "g4.jpg", category: "स्वच्छता", title: "स्वच्छ भारत अभियान" },
  { type: "image", file: "g5.jpg", category: "प्रकल्प", title: "ग्राम विकास" },
  { type: "image", file: "g6.jpg", category: "पायाभूत", title: "उद्यान विकास" },
  { type: "image", file: "g7.jpg", category: "स्वच्छता", title: "ग्राम स्वच्छता" },
  { type: "image", file: "g8.jpg", category: "लोक", title: "ग्रामस्थ" },
  { type: "image", file: "g10.jpg", category: "उत्सव", title: "सांस्कृतिक कार्यक्रम" },
  { type: "video", file: "video1.mp4", category: "उत्सव", title: "ग्रामपंचायत व्हिडिओ" },
  { type: "image", file: "g11.jpg", category: "प्रकल्प", title: "पाणी पुरवठा योजना" },
  { type: "image", file: "g12.jpg", category: "स्वच्छता", title: "कचरा व्यवस्थापन" },
  { type: "image", file: "g13.jpg", category: "पायाभूत", title: "रस्ता बांधकाम" },
  { type: "image", file: "g14.jpg", category: "लोक", title: "ग्रामसभेचे फोटो" },
  { type: "image", file: "g15.jpg", category: "प्रकल्प", title: "आरोग्य शिबिर" },
  { type: "image", file: "g16.jpg", category: "उत्सव", title: "गणेशोत्सव" },
  { type: "image", file: "g17.jpg", category: "प्रकल्प", title: "डिजिटल ग्रामपंचायत" },
  { type: "image", file: "g18.jpg", category: "स्वच्छता", title: "ओडीएफ गाव" },
  { type: "image", file: "g19.jpg", category: "पायाभूत", title: "विजेचे खांब" },
  { type: "image", file: "g20.jpg", category: "लोक", title: "महिला बचत गट" },
  { type: "image", file: "g21.jpg", category: "प्रकल्प", title: "शौचालय बांधकाम" },
  { type: "image", file: "g22.jpg", category: "प्रकल्प", title: "विकास प्रकल्प" },
  { type: "image", file: "g23.jpg", category: "उत्सव", title: "दिवाळी सजावट" },
  { type: "image", file: "g24.jpg", category: "स्वच्छता", title: "नाला सफाई" },
  { type: "image", file: "g25.jpg", category: "पायाभूत", title: "पाण्याची टाकी" },
  { type: "image", file: "g26.jpg", category: "लोक", title: "युवा मंडळ" },
  { type: "image", file: "g27.jpg", category: "प्रकल्प", title: "सौर ऊर्जा" },
  { type: "image", file: "g28.jpg", category: "उत्सव", title: "होळी उत्सव" },
  { type: "image", file: "g29.jpg", category: "स्वच्छता", title: "प्लास्टिक मुक्त गाव" },
  { type: "image", file: "g30.jpg", category: "पायाभूत", title: "खेळाचे मैदान" },
  { type: "image", file: "g31.jpg", category: "लोक", title: "शाळेतील कार्यक्रम" },
  { type: "image", file: "g32.jpg", category: "प्रकल्प", title: "रोजगार हमी योजना" },
  { type: "image", file: "g33.jpg", category: "उत्सव", title: "स्वातंत्र्य दिन" },
  { type: "image", file: "g34.jpg", category: "स्वच्छता", title: "झाडे लावणी" },
  { type: "image", file: "g35.jpg", category: "पायाभूत", title: "ग्रामपंचायत इमारत" },
  { type: "image", file: "g36.jpg", category: "लोक", title: "आरोग्य तपासणी" },
  { type: "image", file: "g37.jpg", category: "प्रकल्प", title: "पशुधन विकास" },
  { type: "image", file: "g39.jpg", category: "स्वच्छता", title: "स्वच्छ गाव स्पर्धा" },
  { type: "image", file: "g40.jpg", category: "पायाभूत", title: "सीसीटीव्ही बसवणे" },
  { type: "image", file: "g41.jpg", category: "लोक", title: "बालवाडी" },
  { type: "image", file: "g42.jpg", category: "प्रकल्प", title: "कृषी मार्गदर्शन" },
  { type: "image", file: "g43.jpg", category: "उत्सव", title: "मकर संक्रांत" },
  { type: "image", file: "g44.jpg", category: "स्वच्छता", title: "पाणी शुद्धीकरण" },
  { type: "image", file: "g45.jpg", category: "पायाभूत", title: "वाय-फाय झोन" },
  { type: "image", file: "g46.jpg", category: "लोक", title: "वरिष्ठ नागरिक" },
  { type: "image", file: "g47.jpg", category: "प्रकल्प", title: "माती परीक्षण" },
  { type: "image", file: "g48.jpg", category: "उत्सव", title: "गुरुपौर्णिमा" },
  { type: "image", file: "g49.jpg", category: "स्वच्छता", title: "कंपोस्ट खत" },
  { type: "image", file: "g50.jpg", category: "पायाभूत", title: "लाइब्ररी" },
  { type: "image", file: "g51.jpg", category: "लोक", title: "महिला दिन" },
  { type: "image", file: "g52.jpg", category: "प्रकल्प", title: "स्मार्ट व्हिलेज" },
  { type: "image", file: "g53.jpg", category: "उत्सव", title: "रक्षाबंधन" },
  { type: "image", file: "g54.jpg", category: "स्वच्छता", title: "रिसायकलिंग" },
  { type: "image", file: "g55.jpg", category: "पायाभूत", title: "सौर दिवे" },
];

const categories = ["सर्व", "प्रकल्प", "उत्सव", "स्वच्छता", "पायाभूत", "लोक"];

// Component to lazily load image/video source
function GalleryItem({ item }: { item: any }) {
  const [src, setSrc] = useState<string | null>(null);

  useEffect(() => {
    const loadAsset = async () => {
      try {
        if (item.type === "image") {
          const path = `@/assets/gallery/${item.file}`;
          const importFn = importAllImages[path] as (() => Promise<{ default: string }>) | undefined;
          if (importFn) {
            const module = await importFn();
            setSrc(module.default);
          }
        } else if (item.type === "video") {
          const path = `@/assets/gallery/${item.file}`;
          const importFn = videoImport[path] as (() => Promise<{ default: string }>) | undefined;
          if (importFn) {
            const module = await importFn();
            setSrc(module.default);
          }
        }
      } catch (err) {
        console.error(`Failed to load ${item.file}:`, err);
      }
    };

    loadAsset();
  }, [item]);

  if (!src) {
    return (
      <div className="aspect-square bg-muted rounded-xl animate-pulse flex items-center justify-center">
        <span className="text-muted-foreground">लोड होत आहे...</span>
      </div>
    );
  }

  return item.type === "image" ? (
    <img
      src={src}
      alt={item.title}
      className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
    />
  ) : (
    <video
      src={src}
      muted
      loop
      className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
    />
  );
}

export default function Gallery() {
  const [activeCategory, setActiveCategory] = useState("सर्व");
  const [selectedItem, setSelectedItem] = useState<any | null>(null);
  const [selectedSrc, setSelectedSrc] = useState<string | null>(null);

  const filteredItems = activeCategory === "सर्व"
    ? galleryItems
    : galleryItems.filter((item) => item.category === activeCategory);

  const openLightbox = async (item: any) => {
    if (item.type === "image") {
      const path = `@/assets/gallery/${item.file}`;
      const importFn = importAllImages[path] as (() => Promise<{ default: string }>) | undefined;
      if (importFn) {
        const module = await importFn();
        setSelectedSrc(module.default);
      }
    } else if (item.type === "video") {
      const path = `@/assets/gallery/${item.file}`;
      const importFn = videoImport[path] as (() => Promise<{ default: string }>) | undefined;
      if (importFn) {
        const module = await importFn();
        setSelectedSrc(module.default);
      }
    }
    setSelectedItem(item);
  };

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
                  key={`${item.file}-${index}`}
                  className="relative group aspect-square rounded-xl overflow-hidden cursor-pointer shadow-lg"
                  initial={{ opacity: 0, scale: 0.9 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.05 }}
                  onClick={() => openLightbox(item)}
                >
                  <GalleryItem item={item} />

                  {/* Play Icon for Video */}
                  {item.type === "video" && (
                    <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
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
        {selectedItem && selectedSrc && (
          <motion.div
            className="fixed inset-0 z-50 bg-black/95 flex items-center justify-center p-4"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            onClick={() => {
              setSelectedItem(null);
              setSelectedSrc(null);
            }}
          >
            <button
              className="absolute top-4 right-4 p-3 bg-white/20 hover:bg-white/40 rounded-full text-white backdrop-blur-sm transition"
              onClick={() => {
                setSelectedItem(null);
                setSelectedSrc(null);
              }}
            >
              <X className="w-8 h-8" />
            </button>

            {selectedItem.type === "image" ? (
              <motion.img
                src={selectedSrc}
                alt={selectedItem.title}
                className="max-w-full max-h-[90vh] rounded-xl shadow-2xl"
                initial={{ scale: 0.8, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                onClick={(e) => e.stopPropagation()}
              />
            ) : (
              <motion.video
                src={selectedSrc}
                autoPlay
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