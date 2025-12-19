import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { motion } from "framer-motion";
import { useState } from "react";
import { Input } from "@/components/ui/input";
import { FileText, Search, Info } from "lucide-react";

const documents = [
  { id: 1, name: "ग्रामसभा मिनिट्स - जानेवारी २०२४", date: "१५ जानेवारी २०२४", description: "गावातील ग्रामसभा बैठकीचे अधिकृत मिनिट्स व ठराव" },
  { id: 2, name: "वार्षिक बजेट २०२३-२४", date: "०१ एप्रिल २०२३", description: "ग्रामपंचायतीचे उत्पन्न व खर्चाचा वार्षिक अर्थसंकल्प" },
  { id: 3, name: "जन्म प्रमाणपत्र अर्ज", date: "अपडेटेड", description: "नवजात बालकाच्या जन्माची नोंद करण्यासाठी अर्ज फॉर्म" },
  { id: 4, name: "मृत्यू प्रमाणपत्र अर्ज", date: "अपडेटेड", description: "मृत्यूची नोंद करण्यासाठी आवश्यक अर्ज फॉर्म" },
  { id: 5, name: "रहिवासी दाखला अर्ज", date: "अपडेटेड", description: "गावातील रहिवासाचा पुरावा म्हणून वापरला जाणारा दाखला" },
  { id: 6, name: "उत्पन्न दाखला अर्ज", date: "अपडेटेड", description: "कुटुंबाच्या वार्षिक उत्पन्नाचा दाखला (शासकीय योजनांसाठी)" },
  { id: 7, name: "ग्रामपंचायत नियमावली", date: "२०२०", description: "महाराष्ट्र ग्रामपंचायत अधिनियम व नियमांची माहिती" },
  { id: 8, name: "विकास आराखडा २०२४-२५", date: "०१ एप्रिल २०२४", description: "गावाच्या विकास कामांचा वार्षिक आराखडा व प्रस्तावित प्रकल्प" },
  { id: 9, name: "स्वच्छता अहवाल", date: "मासिक", description: "स्वच्छ भारत अभियानांतर्गत गावातील स्वच्छता स्थिती अहवाल" },
  { id: 10, name: "पाणी पुरवठा अहवाल", date: "तिमाही", description: "जल जीवन मिशन अंतर्गत पाणी पुरवठ्याची स्थिती व प्रगती" },
  { id: 11, name: "थकबाकी नसल्याचे प्रमाणपत्र", date: "अपडेटेड", description: "कर व इतर देयके थकीत नसल्याचा दाखला (नोकरी/योजनांसाठी)" },
  { id: 12, name: "ना हरकत प्रमाणपत्र अर्ज", date: "अपडेटेड", description: "व्यवसाय/बांधकामासाठी ना हरकत प्रमाणपत्र अर्ज" },
  { id: 13, name: "विवाह नोंदणी अर्ज", date: "अपडेटेड", description: "विवाहाची अधिकृत नोंद करण्यासाठी फॉर्म" },
  { id: 14, name: "घरकुल योजना यादी २०२४-२५", date: "२०२४", description: "प्रधानमंत्री आवास योजना (ग्रामीण) अंतर्गत लाभार्थी यादी" },
  { id: 15, name: "कर आकारणी नोटीस", date: "वार्षिक", description: "मालमत्ता/घरकर आकारणीची माहिती व नोटीस" },
];

export default function Documents() {
  const [searchTerm, setSearchTerm] = useState("");

  const filteredDocs = documents.filter(doc =>
    doc.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
    doc.description.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main>
        {/* Hero */}
        <section className="bg-primary text-primary-foreground py-16">
          <div className="container">
            <motion.h1
              className="text-4xl md:text-5xl font-bold mb-4"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
            >
              दस्तऐवज व माहिती
            </motion.h1>
            <motion.p
              className="text-xl opacity-90"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 }}
            >
              ग्रामपंचायतीचे महत्त्वाचे अर्ज, अहवाल, प्रमाणपत्रे व इतर कागदपत्रांची माहिती
            </motion.p>
          </div>
        </section>

        {/* Search */}
        <section className="py-8 border-b border-border">
          <div className="container">
            <div className="relative max-w-md">
              <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-muted-foreground" />
              <Input
                placeholder="दस्तऐवज किंवा माहिती शोधा..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="pl-10"
              />
            </div>
          </div>
        </section>

        {/* Documents List */}
        <section className="py-12">
          <div className="container">
            <div className="space-y-4">
              {filteredDocs.map((doc, index) => (
                <motion.div
                  key={doc.id}
                  className="bg-card rounded-xl border border-border p-6 hover:shadow-md transition-shadow"
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.05 }}
                >
                  <div className="flex items-start gap-4">
                    <FileText className="w-8 h-8 text-primary flex-shrink-0 mt-1" />
                    <div className="flex-1">
                      <h3 className="text-lg font-semibold mb-2">{doc.name}</h3>
                      {doc.date && (
                        <p className="text-sm text-muted-foreground mb-3">
                          तारीख/स्थिती: {doc.date}
                        </p>
                      )}
                      <div className="flex items-start gap-2">
                        <Info className="w-5 h-5 text-primary mt-0.5 flex-shrink-0" />
                        <p className="text-muted-foreground">{doc.description}</p>
                      </div>
                    </div>
                  </div>
                </motion.div>
              ))}
              {filteredDocs.length === 0 && (
                <div className="text-center py-12 text-muted-foreground">
                  कोणतेही दस्तऐवज सापडले नाहीत.
                </div>
              )}
            </div>
          </div>
        </section>

        {/* Additional Info */}
        <section className="py-8 bg-muted/30">
          <div className="container">
            <div className="bg-card rounded-xl border border-border p-6">
              <h3 className="text-lg font-semibold mb-4 flex items-center gap-2">
                <Info className="w-5 h-5 text-primary" />
                महत्त्वाची माहिती
              </h3>
              <ul className="space-y-2 text-muted-foreground">
                <li>• हे सर्व अर्ज व प्रमाणपत्रे ग्रामपंचायत कार्यालयातून उपलब्ध आहेत.</li>
                <li>• अर्ज भरताना आधारकार्ड, पासपोर्ट आकाराचे फोटो आणि आवश्यक पुरावे सोबत ठेवावेत.</li>
                <li>• बहुतेक प्रमाणपत्रे महाराष्ट्र लोकसेवा हक्क कायद्यांतर्गत निश्चित मुदतीत मिळतात.</li>
                <li>• अधिक माहिती किंवा मदतीसाठी ग्रामसेवक किंवा सरपंच यांच्याशी संपर्क साधावा.</li>
              </ul>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}