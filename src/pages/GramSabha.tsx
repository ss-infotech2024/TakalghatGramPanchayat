import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { motion } from "framer-motion";
import { Calendar, Clock, Users, FileText } from "lucide-react";

const pastMeetings = [
  {
    id: 1,
    date: "२६ जानेवारी २०२५",
    agenda: "प्रजासत्ताक दिन व वार्षिक अहवाल समीक्षा",
    attendees: 92,
    keyDecisions: "गाव स्वच्छता अभियानाला प्राधान्य, नवीन रस्ते प्रस्ताव मंजूर",
  },
  {
    id: 2,
    date: "०१ मे २०२५",
    agenda: "महाराष्ट्र दिन व कामगार योजना चर्चा",
    attendees: 78,
    keyDecisions: "MGNREGA कामांची यादी तयार, महिला बचत गटांना प्रोत्साहन",
  },
  {
    id: 3,
    date: "१५ ऑगस्ट २०२५",
    agenda: "स्वातंत्र्य दिन व जलजीवन मिशन प्रगती",
    attendees: 115,
    keyDecisions: "प्रत्येक घरात नळ जोडणी पूर्ण करण्याचे उद्दिष्ट, पाणी समिती स्थापना",
  },
];

const upcomingMeeting = {
  date: "२६ जानेवारी २०२६",
  time: "सकाळी १०:३० वाजता",
  venue: "ग्रामपंचायत कार्यालय (मुख्य हॉल)",
  agenda: [
    "प्रजासत्ताक दिन कार्यक्रम आयोजन",
    "२०२५-२६ चा वार्षिक विकास आराखडा व बजेट चर्चा",
    "स्वच्छ भारत अभियान व ODF प्लस स्थिती समीक्षा",
    "नागरिकांच्या सूचना व तक्रारी",
    "इतर विषय (परवानगीने)",
  ],
};

export default function GramSabha() {
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
              ग्रामसभा
            </motion.h1>
            <motion.p
              className="text-xl opacity-90"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 }}
            >
              गावाच्या विकासातील नागरिकांचा थेट सहभाग – ग्रामसभा बैठका व माहिती
            </motion.p>
          </div>
        </section>

        {/* Upcoming Meeting */}
        <section className="py-12 bg-muted/30">
          <div className="container">
            <motion.div
              className="bg-card p-8 md:p-10 rounded-xl border border-border max-w-4xl mx-auto"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
            >
              <h2 className="text-2xl md:text-3xl font-bold mb-8 text-primary">आगामी ग्रामसभा</h2>
              <div className="grid md:grid-cols-3 gap-6 mb-8">
                <div className="flex items-center gap-4">
                  <Calendar className="w-8 h-8 text-primary" />
                  <div>
                    <p className="text-sm text-muted-foreground">तारीख</p>
                    <p className="text-lg font-semibold">{upcomingMeeting.date}</p>
                  </div>
                </div>
                <div className="flex items-center gap-4">
                  <Clock className="w-8 h-8 text-primary" />
                  <div>
                    <p className="text-sm text-muted-foreground">वेळ</p>
                    <p className="text-lg font-semibold">{upcomingMeeting.time}</p>
                  </div>
                </div>
                <div className="flex items-center gap-4">
                  <Users className="w-8 h-8 text-primary" />
                  <div>
                    <p className="text-sm text-muted-foreground">स्थळ</p>
                    <p className="text-lg font-semibold">{upcomingMeeting.venue}</p>
                  </div>
                </div>
              </div>

              <h3 className="text-xl font-semibold mb-4">प्रस्तावित कार्यसूची</h3>
              <ul className="space-y-3">
                {upcomingMeeting.agenda.map((item, i) => (
                  <li key={i} className="flex items-start gap-3 text-muted-foreground">
                    <span className="w-2 h-2 bg-primary rounded-full mt-2 flex-shrink-0" />
                    <span className="text-base">{item}</span>
                  </li>
                ))}
              </ul>

              <p className="mt-8 text-sm text-muted-foreground">
                सर्व गावकरी व मतदारांना ग्रामसभेत उपस्थित राहून गावाच्या विकासात सहभागी व्हावे. तुमच्या सूचना व मुद्दे बैठकीत मांडता येतील.
              </p>
            </motion.div>
          </div>
        </section>

        {/* Past Meetings */}
        <section className="py-12">
          <div className="container">
            <h2 className="text-2xl md:text-3xl font-bold mb-8 text-center">मागील ग्रामसभा बैठका (२०२५)</h2>
            <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
              {pastMeetings.map((meeting, index) => (
                <motion.div
                  key={meeting.id}
                  className="bg-card rounded-xl border border-border p-6 hover:shadow-lg transition-shadow"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.1 }}
                >
                  <div className="flex items-center gap-3 mb-4">
                    <Calendar className="w-6 h-6 text-primary" />
                    <span className="text-lg font-semibold">{meeting.date}</span>
                  </div>
                  <h3 className="text-lg font-medium mb-3">{meeting.agenda}</h3>
                  <div className="flex items-center gap-2 text-muted-foreground mb-4">
                    <Users className="w-5 h-5" />
                    <span>{meeting.attendees} नागरिक उपस्थित</span>
                  </div>
                  <div className="bg-muted/30 rounded-lg p-4">
                    <p className="text-sm font-medium text-primary mb-2">मुख्य ठराव / निर्णय</p>
                    <p className="text-sm text-muted-foreground">{meeting.keyDecisions}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Additional Info */}
        <section className="py-12 bg-muted/30">
          <div className="container max-w-4xl mx-auto">
            <div className="bg-card rounded-xl border border-border p-8">
              <h3 className="text-xl font-semibold mb-6">ग्रामसभा विषयी महत्त्वाची माहिती</h3>
              <ul className="space-y-4 text-muted-foreground">
                <li>• महाराष्ट्रात वर्षातून किमान ४ ग्रामसभा घेणे बंधनकारक आहे (२६ जानेवारी, १ मे, १५ ऑगस्ट व नवीन आर्थिक वर्षापूर्वी बजेट सभा).</li>
                <li>• ग्रामसभा ही गावातील सर्व मतदारांची सभा असते – येथे विकास कामे, बजेट, योजना व तक्रारींवर चर्चा होते.</li>
                <li>• ग्रामसभेचे ठराव ग्रामपंचायतीला बंधनकारक असतात.</li>
                <li>• सर्व नागरिकांना ग्रामसभेत बोलण्याचा व सूचना मांडण्याचा अधिकार आहे.</li>
                <li>• ग्रामसभेत उपस्थित राहून गावाच्या विकासात थेट सहभाग घ्या!</li>
              </ul>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}