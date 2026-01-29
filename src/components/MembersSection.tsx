import { motion } from "framer-motion";
import { Card, CardContent } from "@/components/ui/card";
import { Phone } from "lucide-react";

const members = [
  {
    name: "सौ. शारदाताई ज्ञानेश्वरजी शिंगारे",
    role: "सरपंच",
    desc: "गाव विकास आणि लोककल्याणासाठी समर्पित",
    image: "/img/team/1.jpeg",
    top: true,
  },
  {
    name: "श्री. उमेशराव नथूलो कावळे",
    role: "उपसरपंच",
    desc: "प्रशासकीय कार्य आणि समन्वय",
    phone: "माहिती उपलब्ध होईल",
    image: "/img/team/2.jpeg",
    top: true,
  },
  {
    name: "सौ. सुहासिनी एम कोल्हे",
    role: "ग्रामपंचायत अधिकारी",
    desc: "प्रशासकीय कामकाज व ग्रामपंचायत व्यवस्थापन",
    image: "/img/team/suhasini-kolhe.png",
    top: true,
  },

  // ====== बाकी सर्व सदस्य ======
  {
    name: "श्री. वेदांत प्रभाकरराव वासाड",
    role: "वार्ड सदस्य",
    desc: "वार्ड प्रतिनिधी",
    image: "/img/team/3.jpeg",
  },
  {
    name: "सौ. मीनाताई निलेशराव डायरे",
    role: "वार्ड सदस्य",
    desc: "वार्ड प्रतिनिधी",
    image: "/img/team/4.jpeg",
  },
  {
    name: "सौ. बबीताताई ताराचंदजी बहादुरे",
    role: "वार्ड सदस्य",
    desc: "वार्ड प्रतिनिधी",
    image: "/img/team/5.jpeg",
  },
  {
    name: "सौ. राजश्रीताई रामदासजी पुंड",
    role: "वार्ड सदस्य",
    desc: "वार्ड प्रतिनिधी",
    image: "/img/team/6.jpeg",
  },
  {
    name: "सौ. अंजनाताई महादेवराव इरपाते",
    role: "वार्ड सदस्य",
    desc: "वार्ड प्रतिनिधी",
    image: "/img/team/7.jpeg",
  },
  {
    name: "सौ. ताराबाई ज्ञानेश्वरजी भगत",
    role: "वार्ड सदस्य",
    desc: "वार्ड प्रतिनिधी",
    image: "/img/team/8.jpeg",
  },
  {
    name: "सौ. अनुराधाताई विजयराव खंगार",
    role: "वार्ड सदस्य",
    desc: "वार्ड प्रतिनिधी",
    image: "/img/team/9.jpeg",
  },
  {
    name: "श्री. चंद्रशेखरराव हरिभाऊजी कावळे",
    role: "वार्ड सदस्य",
    desc: "वार्ड प्रतिनिधी",
    image: "/img/team/10.jpeg",
  },
  {
    name: "सौ. साधनाताई संजयजी मेश्राम",
    role: "वार्ड सदस्य",
    desc: "वार्ड प्रतिनिधी",
    image: "/img/team/11.jpeg",
  },
  {
    name: "कु. कोमलताई दिगांबरजी कटरे",
    role: "वार्ड सदस्य",
    desc: "वार्ड प्रतिनिधी",
    image: "/img/team/12.jpeg",
  },
  {
    name: "सौ. अल्काताई गोपालराव वानखेडे",
    role: "वार्ड सदस्य",
    desc: "वार्ड प्रतिनिधी",
    image: "/img/team/13.jpeg",
  },
  {
    name: "श्री. मधुकरराव किसनजी खोडे",
    role: "वार्ड सदस्य",
    desc: "वार्ड प्रतिनिधी",
    image: "/img/team/14.jpeg",
  },
  {
    name: "सौ. रेखाताई रोहितराव तिवारी",
    role: "वार्ड सदस्य",
    desc: "वार्ड प्रतिनिधी",
    image: "/img/team/15.jpeg",
  },
  {
    name: "श्री. नरेंद्रजी गणपतराव येसनसुरे",
    role: "वार्ड सदस्य",
    desc: "वार्ड प्रतिनिधी",
    image: "/img/team/16.jpeg",
  },
  {
    name: "श्री. चंद्रशेखरराव खुशालराव इंगोले",
    role: "वार्ड सदस्य",
    desc: "वार्ड प्रतिनिधी",
    image: "/img/team/17.jpeg",
  },
  {
    name: "सौ. बेबीताई दिनेशराव राऊत",
    role: "वार्ड सदस्य",
    desc: "वार्ड प्रतिनिधी",
    image: "/img/team/18.jpeg",
  },
];

export function MembersSection() {
  const topMembers = members.filter(m => m.top);
  const otherMembers = members.filter(m => !m.top);

  return (
    <section className="py-16">
      <div className="container">
        <div className="text-center mb-12">
          <h2 className="section-title">ग्रामपंचायत सदस्य</h2>
          <p className="section-subtitle">आमचे निर्वाचित प्रतिनिधी</p>
        </div>

        {/* ===== Top 3 Center ===== */}
        <div className="grid md:grid-cols-3 gap-6 mb-12">
          {topMembers.map((member, i) => (
            <Card key={i} className="text-center border-2 border-primary shadow-lg">
              <CardContent className="p-6">
                <img
                  src={member.image}
                  className="w-28 h-28 rounded-full mx-auto mb-4 object-cover"
                />
                <h3 className="font-bold text-lg">{member.name}</h3>
                <p className="text-primary font-medium">{member.role}</p>
                <p className="text-sm text-muted-foreground">{member.desc}</p>
                {member.phone && (
                  <div className="flex justify-center gap-2 mt-2 text-sm">
                    <Phone size={16} /> {member.phone}
                  </div>
                )}
              </CardContent>
            </Card>
          ))}
        </div>

        {/* ===== बाकी सदस्य ===== */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {otherMembers.map((member, index) => (
            <Card key={index} className="text-center">
              <CardContent className="p-4">
                <img
                  src={member.image}
                  className="w-20 h-20 rounded-full mx-auto mb-3 object-cover"
                />
                <h3 className="font-semibold">{member.name}</h3>
                <p className="text-primary text-sm">{member.role}</p>
                <p className="text-xs text-muted-foreground">{member.desc}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
