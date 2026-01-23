import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { motion } from "framer-motion";
import { useState } from "react";
import { X } from "lucide-react";

// Load images
const images = import.meta.glob("/src/assets/gallery/*.{jpg,jpeg,png,webp,mp4}", {
  eager: true,
  import: "default",
});

// Convert to array
const imageList = Object.entries(images).map(([path, src]) => ({
  path,
  src: src as string,
  filename: path.split('/').pop() || 'image'
}));

export default function Gallery() {
  const [selectedImage, setSelectedImage] = useState<string | null>(null);

  return (
    <div className="min-h-screen bg-background">
      <Header />

      <main className="container py-12">
        <h1 className="text-4xl font-bold mb-2">फोटो गॅलरी</h1>
        <p className="text-muted-foreground mb-8">टाकळघाट ग्रामपंचायत</p>

        {/* Gallery Grid */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
          {imageList.map((image, index) => (
            <motion.div
              key={image.path}
              className="aspect-square rounded-lg overflow-hidden cursor-pointer"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: index * 0.05 }}
              onClick={() => setSelectedImage(image.src)}
            >
              <img
                src={image.src}
                alt="Gallery"
                className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
              />
            </motion.div>
          ))}
        </div>

        {/* Lightbox */}
        {selectedImage && (
          <div
            className="fixed inset-0 bg-black/95 z-50 flex items-center justify-center p-4"
            onClick={() => setSelectedImage(null)}
          >
            <button
              className="absolute top-4 right-4 text-white p-2"
              onClick={() => setSelectedImage(null)}
            >
              <X size={32} />
            </button>
            <img
              src={selectedImage}
              alt="Full size"
              className="max-w-full max-h-[90vh] rounded-lg"
              onClick={(e) => e.stopPropagation()}
            />
          </div>
        )}
      </main>

      <Footer />
    </div>
  );
}