import { motion } from "framer-motion";
import { MapPin, Phone, Mail } from "lucide-react";

const services = [
  "जन्म प्रमाणपत्र",
  "मृत्यू प्रमाणपत्र",
  "रहिवासी प्रमाणपत्र",
  "उत्पन्न प्रमाणपत्र",
  "जात प्रमाणपत्र",
  "नमुना ८ अ",
];

export function Footer() {
  return (
    <footer className="bg-foreground text-background">
      {/* Main footer */}
      <div className="container py-12">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Contact Information */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h3 className="text-lg font-bold mb-4 text-secondary">संपर्क माहिती</h3>
            <div className="space-y-4 text-background/80">
              <div className="flex items-start gap-3">
                <MapPin className="h-5 w-5 flex-shrink-0 mt-0.5 text-secondary" />
                <p>
                  टाकळघाट,<br />
                  तालुका: हिंगणा,<br />
                  जिल्हा: नागपूर,<br />
                  महाराष्ट्र - पिनकोड: ४४११२२
                </p>
              </div>
              <div className="flex items-center gap-3">
                <Phone className="h-5 w-5 text-secondary" />
                <span>०७१०४ - २३६५०१</span>
              </div>
              <div className="flex items-center gap-3">
                <Mail className="h-5 w-5 text-secondary" />
                <span className="text-sm break-all">grampanchayattakalghat@gmail.com</span>
              </div>
            </div>
          </motion.div>

          {/* Important Sections */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
          >
            <h3 className="text-lg font-bold mb-4 text-secondary">महत्त्वाचे विभाग</h3>
            <ul className="space-y-2 text-background/80">
              <li>योजना</li>
              <li>अर्ज फॉर्म</li>
              <li>कागदपत्रे</li>
              <li>विकास प्रकल्प</li>
              <li>ग्रामसभा</li>
              <li>डाउनलोड्स</li>
            </ul>
          </motion.div>

          {/* Gram Panchayat Services */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
          >
            <h3 className="text-lg font-bold mb-4 text-secondary">उपलब्ध प्रमाणपत्रे व सेवा</h3>
            <ul className="space-y-2 text-background/80">
              {services.map((service) => (
                <li key={service}>{service}</li>
              ))}
            </ul>
          </motion.div>

          {/* Office Info */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.3 }}
          >
            <h3 className="text-lg font-bold mb-4 text-secondary">कार्यालय वेळ</h3>
            <p className="text-background/80 mb-4">
              सोमवार ते शनिवार<br />
              सकाळी १०:०० ते सायंकाळी ५:००<br />
              <span className="text-sm">(दुसरा व चौथा शनिवार सुट्टी)</span>
            </p>
            <p className="text-sm text-background/70">
              रविवार व शासकीय सुट्ट्या: बंद
            </p>
          </motion.div>
        </div>
      </div>

      {/* Bottom bar */}
      <div className="border-t border-background/10">
        <div className="container py-6 text-center text-sm text-background/60">
          <p>© २०२५ टाकळघाट ग्रामपंचायत, नागपूर | सर्व हक्क राखीव</p>
          <p className="mt-2 text-xs">
            ही वेबसाइट गावकऱ्यांसाठी माहितीपूर्ण उद्देशाने तयार करण्यात आली आहे.
          </p>
        </div>
      </div>
    </footer>
  );
}