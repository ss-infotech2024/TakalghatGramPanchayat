import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import { Link } from "react-router-dom"; // जर तुम्ही React Router वापरत असाल तर (Next.js साठी <Link> चा वापर करा)

import g1 from "../assets/gallery/g1.jpg";
import g3 from "@/assets/gallery/g3.jpg";
import g5 from "@/assets/gallery/g5.jpg";
import g8 from "@/assets/gallery/g8.jpg";

const images = [
  { src: g1, title: "आरोग्य मंदिर" },
  { src: g3, title: "माझी वसुंधरा ६.०" },
  { src: g5, title: "ग्रामसभा बैठक" },
  { src: g8, title: "सामुदायिक कार्यक्रम" },
];

export function GalleryPreview() {
  return (
    <section className="py-16 bg-muted/30">
      <div className="container">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="flex flex-col md:flex-row md:items-end md:justify-between mb-8"
        >
          <div>
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-2">
              फोटो गॅलरी
            </h2>
            <p className="text-lg text-muted-foreground">गावातील कार्यक्रम आणि उपक्रम</p>
          </div>
          <Button asChild variant="outline" className="mt-4 md:mt-0 group">
            <Link to="/gallery">
              सर्व पहा
              <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
            </Link>
          </Button>
        </motion.div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          {images.map((image, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: index * 0.1 }}
              className="relative group cursor-pointer overflow-hidden rounded-xl aspect-square shadow-md hover:shadow-xl transition-shadow"
            >
              <img
                src={image.src}
                alt={image.title}
                className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end">
                <div className="p-4 text-white translate-y-4 group-hover:translate-y-0 transition-transform duration-300">
                  <p className="font-semibold text-base">{image.title}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}