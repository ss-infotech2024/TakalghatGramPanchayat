import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { motion } from "framer-motion";
import { useState } from "react";
import { X } from "lucide-react";

// Load images + videos
const mediaFiles = import.meta.glob(
  "/src/assets/gallery/*.{jpg,jpeg,png,webp,mp4}",
  {
    eager: true,
    import: "default",
  }
);

// Convert to array with type detection
const mediaList = Object.entries(mediaFiles).map(([path, src]) => {
  const filename = path.split("/").pop() || "";
  const ext = filename.split(".").pop()?.toLowerCase();

  return {
    path,
    src: src as string,
    filename,
    type: ext === "mp4" ? "video" : "image",
  };
});

export default function Gallery() {
  const [selectedMedia, setSelectedMedia] = useState<{
    src: string;
    type: "image" | "video";
  } | null>(null);

  return (
    <div className="min-h-screen bg-background">
      <Header />

      <main className="container py-12">
        <h1 className="text-4xl font-bold mb-2">फोटो गॅलरी</h1>
        <p className="text-muted-foreground mb-8">
          टाकळघाट ग्रामपंचायत
        </p>

        {/* Gallery Grid */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
          {mediaList.map((item, index) => (
            <motion.div
              key={item.path}
              className="aspect-square rounded-lg overflow-hidden cursor-pointer bg-black"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: index * 0.03 }}
              onClick={() =>
                setSelectedMedia({ src: item.src, type: item.type as "image" | "video" })
              }
            >
              {item.type === "image" ? (
                <img
                  src={item.src}
                  alt={item.filename}
                  loading="lazy"
                  className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
                />
              ) : (
                <video
                  src={item.src}
                  muted
                  preload="metadata"
                  className="w-full h-full object-cover"
                />
              )}
            </motion.div>
          ))}
        </div>

        {/* Lightbox */}
        {selectedMedia && (
          <div
            className="fixed inset-0 bg-black/95 z-50 flex items-center justify-center p-4"
            onClick={() => setSelectedMedia(null)}
          >
            <button
              className="absolute top-4 right-4 text-white p-2"
              onClick={() => setSelectedMedia(null)}
            >
              <X size={32} />
            </button>

            {selectedMedia.type === "image" ? (
              <img
                src={selectedMedia.src}
                alt="Full view"
                className="max-w-full max-h-[90vh] rounded-lg"
                onClick={(e) => e.stopPropagation()}
              />
            ) : (
              <video
                src={selectedMedia.src}
                controls
                autoPlay
                className="max-w-full max-h-[90vh] rounded-lg"
                onClick={(e) => e.stopPropagation()}
              />
            )}
          </div>
        )}
      </main>

      <Footer />
    </div>
  );
}
