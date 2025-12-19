import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { motion } from "framer-motion";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const schemes = [
  {
    id: "mgnrega",
    title: "महात्मा गांधी राष्ट्रीय ग्रामीण रोजगार हमी योजना",
    shortName: "MGNREGA",
    description: "ग्रामीण कुटुंबांना वर्षातून किमान १०० दिवसांच्या वेतनाधारित रोजगाराची कायदेशीर हमी. मुख्यतः जलसंधारण, रस्ते, शेततळे इत्यादी सार्वजनिक कामे.",
    eligibility: [
      "ग्रामीण भागातील १८ वर्षांवरील कोणतीही व्यक्ती",
      "जॉब कार्ड धारक कुटुंब",
      "अकुशल मजुरी करण्यास तयार असणे",
    ],
    benefits: [
      "वर्षातून किमान १०० दिवस रोजगार (गरज असल्यास १५० दिवसांपर्यंत वाढ)",
      "महाराष्ट्रात सध्या ₹३००+ दररोज वेतन (२०२५ नुसार)",
      "१५ दिवसांत काम न मिळाल्यास बेरोजगारी भत्ता",
      "DBT द्वारे थेट बँक खात्यात पैसे",
      "महिला व अपंगांसाठी प्राधान्य",
    ],
    howToApply: "ग्रामपंचायत किंवा तालुका कार्यालयात जॉब कार्डसाठी अर्ज करावा. आधार व बँक खाते आवश्यक.",
  },
  {
    id: "swachh",
    title: "स्वच्छ भारत मिशन (ग्रामीण) - फेज २",
    shortName: "SBM-G",
    description: "ग्रामीण भागात स्वच्छता टिकवणे, घन व द्रव कचरा व्यवस्थापन आणि ODF प्लस गावे बनवणे.",
    eligibility: [
      "सर्व ग्रामीण कुटुंबे (विशेषतः शौचालय नसलेली किंवा नव्याने वाढलेली)",
      "BPL/APL सर्वांसाठी उपलब्ध",
    ],
    benefits: [
      "वैयक्तिक शौचालय बांधकामासाठी ₹१२,००० अनुदान",
      "घनकचरा व्यवस्थापन (कचरा कुंड्या, कंपोस्ट पिट)",
      "द्रवकचरा व्यवस्थापन (सोक पिट, लीच पिट)",
      "ODF प्लस दर्जा मिळालेल्या गावांना प्रोत्साहन",
    ],
    howToApply: "ग्रामपंचायत किंवा स्वच्छ भारत मिशन पोर्टलवर अर्ज. आधार आवश्यक.",
  },
  {
    id: "jaljeevan",
    title: "जलजीवन मिशन",
    shortName: "JJM",
    description: "प्रत्येक ग्रामीण घरात नळाद्वारे स्वच्छ पिण्याचे पाणी पुरवठा (५५ लिटर प्रति व्यक्ति प्रति दिन).",
    eligibility: [
      "सर्व ग्रामीण कुटुंबे",
      "नळ कनेक्शन नसलेली घरे प्राधान्य",
    ],
    benefits: [
      "मोफत घरगुती नळ कनेक्शन",
      "स्वच्छ व पुरेसे पिण्याचे पाणी (नियमित पुरवठा)",
      "पाणी गुणवत्ता तपासणी व स्रोत टिकाव",
      "महिला व मुलींना पाणी आणण्याची वेळ वाचते",
    ],
    howToApply: "ग्रामपंचायत किंवा JJM पोर्टलवर नोंदणी. सर्व कुटुंबे आपोआप पात्र.",
  },
  {
    id: "pmay",
    title: "प्रधानमंत्री आवास योजना (ग्रामीण)",
    shortName: "PMAY-G",
    description: "ग्रामीण गरीब कुटुंबांना पक्के घर बांधण्यासाठी आर्थिक मदत (२०२९ पर्यंत विस्तारित).",
    eligibility: [
      "BPL कुटुंबे किंवा SECC २०११ यादीत नाव",
      "पक्के घर नसलेले किंवा कच्चे/खराब घर असलेले",
      "SC/ST, अल्पसंख्याक, विधवा, अपंग प्राधान्य",
    ],
    benefits: [
      "मैदानी भागात ₹१.२० लाख ते ₹१.३० लाख अनुदान (डोंगराळ भागात जास्त)",
      "शौचालयासाठी अतिरिक्त ₹१२,००० (SBM शी संलग्न)",
      "MGNREGA शी जोडून ९०-९५ दिवस मजुरी",
      "बँक खात्यात थेट हस्तांतरण",
    ],
    howToApply: "ग्रामपंचायतात अर्ज किंवा PMAY-G पोर्टलवर यादी तपासा. ग्रामसभा मंजूरी आवश्यक.",
  },
  {
    id: "nrlm",
    title: "राष्ट्रीय ग्रामीण आजीविका मिशन (महिला बचत गट)",
    shortName: "DAY-NRLM / SHG",
    description: "ग्रामीण महिलांना बचत गटाद्वारे स्वयंरोजगार व आर्थिक सशक्तीकरण.",
    eligibility: [
      "ग्रामीण भागातील १८-६५ वर्षे महिला",
      "गरीब किंवा मध्यम कुटुंब (BPL प्राधान्य)",
      "बचत गटाची सदस्य",
    ],
    benefits: [
      "कमी व्याजदरात बँक कर्ज (₹३ लाखापर्यंत सबसिडी सह)",
      "व्यवसाय प्रशिक्षण व कौशल्य विकास",
      "बाजारपेठ जोडणी व उत्पादन विक्री सहाय्य",
      "लाखपती दीदी योजना अंतर्गत ₹१ लाख+ वार्षिक उत्पन्न लक्ष्य",
    ],
    howToApply: "ग्रामपंचायत किंवा NRLM कार्यालयात बचत गटात सामील व्हा.",
  },
  {
    id: "pmkisan",
    title: "प्रधानमंत्री किसान सन्मान निधी",
    shortName: "PM-KISAN",
    description: "शेतकरी कुटुंबांना वार्षिक आर्थिक मदत.",
    eligibility: [
      "लहान व अल्पभूधारक शेतकरी (२ हेक्टरपर्यंत जमीन)",
      "कुटुंबाची एकूण जमीन मर्यादा",
    ],
    benefits: [
      "वर्षातून ₹६,००० (तीन हप्त्यात ₹२,००० प्रत्येक)",
      "थेट बँक खात्यात हस्तांतरण",
    ],
    howToApply: "PM-KISAN पोर्टल किंवा ग्रामपंचायतात नोंदणी.",
  },
];

export default function Schemes() {
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
              सरकारी योजना
            </motion.h1>
            <motion.p
              className="text-xl opacity-90"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 }}
            >
              ग्रामपंचायत मार्फत उपलब्ध प्रमुख केंद्रीय व राज्य सरकारी योजनांची सविस्तर माहिती (२०२५ नुसार)
            </motion.p>
          </div>
        </section>

        {/* Schemes Accordion */}
        <section className="py-12">
          <div className="container max-w-5xl">
            <Accordion type="single" collapsible className="space-y-4">
              {schemes.map((scheme, index) => (
                <motion.div
                  key={scheme.id}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.1 }}
                >
                  <AccordionItem
                    value={scheme.id}
                    className="bg-card border border-border rounded-xl overflow-hidden"
                  >
                    <AccordionTrigger className="px-6 py-4 hover:no-underline hover:bg-muted/50">
                      <div className="flex items-center gap-4 text-left">
                        <span className="bg-primary text-primary-foreground px-3 py-1 rounded text-sm font-medium">
                          {scheme.shortName}
                        </span>
                        <span className="font-bold text-lg">{scheme.title}</span>
                      </div>
                    </AccordionTrigger>
                    <AccordionContent className="px-6 pb-8 pt-4">
                      <p className="text-muted-foreground mb-6 leading-relaxed">{scheme.description}</p>

                      <div className="grid md:grid-cols-2 gap-8">
                        <div>
                          <h4 className="font-semibold mb-4 text-primary text-lg">पात्रता</h4>
                          <ul className="space-y-3">
                            {scheme.eligibility.map((item, i) => (
                              <li key={i} className="flex items-start gap-3 text-base">
                                <span className="w-2 h-2 bg-accent rounded-full mt-1.5 flex-shrink-0" />
                                <span>{item}</span>
                              </li>
                            ))}
                          </ul>
                        </div>
                        <div>
                          <h4 className="font-semibold mb-4 text-primary text-lg">लाभ</h4>
                          <ul className="space-y-3">
                            {scheme.benefits.map((item, i) => (
                              <li key={i} className="flex items-start gap-3 text-base">
                                <span className="w-2 h-2 bg-secondary rounded-full mt-1.5 flex-shrink-0" />
                                <span>{item}</span>
                              </li>
                            ))}
                          </ul>
                        </div>
                      </div>

                      <div className="mt-8 bg-muted/30 rounded-lg p-5">
                        <h4 className="font-semibold mb-3 text-primary">अर्ज कसा करावा?</h4>
                        <p className="text-muted-foreground leading-relaxed">{scheme.howToApply}</p>
                        <p className="text-sm text-muted-foreground mt-4">
                          अधिक माहितीसाठी ग्रामपंचायत कार्यालय, ग्रामसेवक किंवा तालुका कार्यालयाशी संपर्क साधावा.
                        </p>
                      </div>
                    </AccordionContent>
                  </AccordionItem>
                </motion.div>
              ))}
            </Accordion>

            {/* Additional Info */}
            <div className="mt-12 bg-muted/30 rounded-xl p-8 border border-border">
              <h3 className="text-xl font-semibold mb-6">महत्त्वाची सूचना</h3>
              <ul className="space-y-4 text-muted-foreground">
                <li>• सर्व योजनांसाठी आधारकार्ड व बँक खाते लिंक करणे आवश्यक आहे.</li>
                <li>• अर्ज ग्रामपंचायत मार्फतच करावेत – ग्रामसभा मंजूरी आवश्यक असते.</li>
                <li>• योजना नियम व अनुदान रक्कम वेळोवेळी बदलू शकतात – नवीनतम माहिती ग्रामपंचायत किंवा अधिकृत पोर्टलवर तपासावी.</li>
                <li>• कोणत्याही प्रकारची फी किंवा दलाली देऊ नये – सरकारी योजना मोफत आहेत.</li>
              </ul>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}