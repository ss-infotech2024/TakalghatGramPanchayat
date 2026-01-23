import { motion } from "framer-motion";
import { Droplets, Trash2, Users, Monitor, Route, Leaf } from "lucide-react";
import g6 from "@/assets/gallery/g6.jpg";
import g7 from "@/assets/gallery/ISO.png";

const developmentPoints = [
  {
    icon: Droplets,
    title: "पाण्याची सोय",
    desc: "जलजीवन मिशनद्वारे सुधारित पाणीपुरवठा, नवीन पाईपलाइन आणि टँकर्स",
  },
  {
    icon: Leaf,
    title: "ग्राम स्वच्छता अभियान",
    desc: "स्वच्छ भारत अभियान अंतर्गत गाव स्वच्छता, कचरा उचल आणि कंपोस्टिंग",
  },
  {
    icon: Trash2,
    title: "कचरा व्यवस्थापन",
    desc: "कचरा संकलन, प्लास्टिक बॅन आणि रिसायकलिंग प्रोग्राम",
  },
  {
    icon: Users,
    title: "महिला शाश्वत विकास",
    desc: "महिला बचत गट, लघु उद्योग प्रशिक्षण आणि लोन स्कीम्स",
  },
  {
    icon: Monitor,
    title: "डिजिटल ग्रामपंचायत",
    desc: "ई-गव्हर्नन्स, ऑनलाइन सर्टिफिकेट्स आणि पेमेंट गेटवे",
  },
  {
    icon: Route,
    title: "रस्ते व पायाभूत सुविधा",
    desc: "रस्ते दुरुस्ती, सोलर लाइट्स आणि ब्रिजेस बिल्डिंग",
  },
];

export function DevelopmentSection() {
  return (
    <section className="py-16">
      <div className="container grid lg:grid-cols-2 gap-12 items-start">

        {/* Left Content */}
        <motion.div
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="section-title">आमची महत्त्वाकांक्षी गाव विकास योजना</h2>
          <p className="section-subtitle">
            टाकळघाट ग्रामपंचायत विकास, लोककल्याण आणि शाश्वत प्रगतीसाठी कटिबद्ध
          </p>

          <div className="space-y-4">
            {developmentPoints.map((point, index) => (
              <motion.div
                key={point.title}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: index * 0.1 }}
                className="flex gap-4 p-4 rounded-lg hover:bg-muted/50 transition-colors group"
              >
                <div className="flex-shrink-0 w-12 h-12 rounded-lg bg-gradient-to-br from-primary to-primary/80 flex items-center justify-center text-primary-foreground">
                  <point.icon className="h-6 w-6" />
                </div>
                <div>
                  <h3 className="font-semibold">{point.title}</h3>
                  <p className="text-sm text-muted-foreground">{point.desc}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Right Images One Below Another */}
        <motion.div
          initial={{ opacity: 0, x: 30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="space-y-8"
        >
          {/* First Image */}
          <div className="relative rounded-2xl overflow-hidden shadow-lg">
            <img
              src={g6}
              alt="माझी वसुंधरा अभियान"
              className="w-full h-[350px] object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-primary/60 to-transparent" />
            <div className="absolute bottom-4 left-4 text-primary-foreground">
              <h3 className="text-xl font-bold">माझी वसुंधरा अभियान</h3>
              <p className="text-sm">पर्यावरण संरक्षण व वृक्षारोपण मोहीम</p>
            </div>
          </div>

          {/* Second Image (ISO Certificate) */}
          <div className="relative rounded-2xl overflow-hidden shadow-lg bg-white p-4">
            <img
              src={g7}
              alt="ISO प्रमाणपत्र"
              className="w-full h-auto max-h-[400px] object-contain"
            />
            <div className="mt-3 text-center">
              <h3 className="font-bold text-lg">ISO प्रमाणपत्र</h3>
              <p className="text-sm text-muted-foreground">
                गुणवत्ता व्यवस्थापन आणि सेवा मानकांचे अधिकृत प्रमाणन
              </p>
            </div>
          </div>
        </motion.div>

      </div>
    </section>
  );
}
