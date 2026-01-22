import { motion } from "framer-motion";
import { Card, CardContent } from "@/components/ui/card";
import { Phone, Mail } from "lucide-react";

const members = [
  {
    name: "सौ. शारदाताई ज्ञानेश्वरजी शिंगारे",
    role: "सरपंच",
    desc: "गाव विकास आणि लोककल्याणासाठी समर्पित",
    image: "/img/team/1.jpeg",
    featured: true,
  },
  {
    name: "श्री. उमेशराव नथूलो कावळे",
    role: "उपसरपंच",
    desc: "प्रशासकीय कार्य आणि समन्वय",
    phone: "माहिती उपलब्ध होईल",
    image: "/img/team/2.jpeg",
    featured: false,
  },
  {
    name: "श्री. वेदांत प्रभाकरराव वासाड",
    role: "वार्ड सदस्य",
    desc: "वार्ड प्रतिनिधी",
    image: "/img/team/3.jpeg",
    featured: false,
  },
  {
    name: "सौ. मीनाताई निलेशराव डायरे",
    role: "वार्ड सदस्य",
    desc: "वार्ड प्रतिनिधी",
    image: "/img/team/4.jpeg",
    featured: false,
  },
  {
    name: "सौ. बाबेताताई ताराचंदजी बहादुर",
    role: "वार्ड सदस्य",
    desc: "वार्ड प्रतिनिधी",
    image: "/img/team/5.jpeg",
    featured: false,
  },
  {
    name: "सौ. राजश्रीताई रामदासजी पुठे",
    role: "वार्ड सदस्य",
    desc: "वार्ड प्रतिनिधी",
    image: "/img/team/6.jpeg",
    featured: false,
  },
  {
    name: "सौ. अंजनाताई महादेवराव इरपाते",
    role: "वार्ड सदस्य",
    desc: "वार्ड प्रतिनिधी",
    image: "/img/team/7.jpeg",
    featured: false,
  },
  {
    name: "सौ. ताराबाई ज्ञानेश्वरजी भगत",
    role: "वार्ड सदस्य",
    desc: "वार्ड प्रतिनिधी",
    image: "/img/team/8.jpeg",
    featured: false,
  },
  {
    name: "सौ. अनुराधाताई विजयराव खगार",
    role: "वार्ड सदस्य",
    desc: "वार्ड प्रतिनिधी",
    image: "/img/team/9.jpeg",
    featured: false,
  },
  {
    name: "श्री. चंद्रशेखरराव हरिभाऊजी कावळे",
    role: "वार्ड सदस्य",
    desc: "वार्ड प्रतिनिधी",
    image: "/img/team/10.jpeg",
    featured: false,
  },
  {
    name: "सौ. साधनाताई संजयजी मेश्रम",
    role: "वार्ड सदस्य",
    desc: "वार्ड प्रतिनिधी",
    image: "/img/team/11.jpeg",
    featured: false,
  },
  {
    name: "कु. कोमलताई दिगांबरजी कटरे",
    role: "वार्ड सदस्य",
    desc: "वार्ड प्रतिनिधी",
    image: "/img/team/12.jpeg",
    featured: false,
  },
  {
    name: "सौ. अल्काताई गोपालराव वानखेडे",
    role: "वार्ड सदस्य",
    desc: "वार्ड प्रतिनिधी",
    image: "/img/team/13.jpeg",
    featured: false,
  },
  {
    name: "श्री. मधुकरराव किसनजी खोडे",
    role: "वार्ड सदस्य",
    desc: "वार्ड प्रतिनिधी",
    image: "/img/team/14.jpeg",
    featured: false,
  },
  {
    name: "सौ. रेखाताई राहोतराव तिवारी",
    role: "वार्ड सदस्य",
    desc: "वार्ड प्रतिनिधी",
    image: "/img/team/15.jpeg",
    featured: false,
  },
  {
    name: "श्री. नरेंद्रजी गणपतराव यसनसुरे",
    role: "वार्ड सदस्य",
    desc: "वार्ड प्रतिनिधी",
    image: "/img/team/16.jpeg",
    featured: false,
  },
  {
    name: "श्री. चंद्रशेखरराव खुशालराव इगोल",
    role: "वार्ड सदस्य",
    desc: "वार्ड प्रतिनिधी",
    image: "/img/team/17.jpeg",
    featured: false,
  },
  {
    name: "सौ.बेबीताई दिनेशराव राऊत",
    role: "वार्ड सदस्य",
    desc: "वार्ड प्रतिनिधी",
    image: "/img/team/18.jpeg",
    featured: false,
  },
];

export function MembersSection() {
  return (
    <section className="py-16">
      <div className="container">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h2 className="section-title">ग्रामपंचायत सदस्य</h2>
          <p className="section-subtitle">आमचे निर्वाचित प्रतिनिधी</p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {members.map((member, index) => (
            <motion.div
              key={member.name + index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: index * 0.05 }}
            >
              <Card className={`card-hover h-full group ${member.featured ? "border-2 border-primary" : ""}`}>
                <CardContent className="p-6">
                  <div className="flex flex-col items-center text-center gap-4">
                    <div className={`w-24 h-24 rounded-full flex-shrink-0 overflow-hidden border-2 ${member.featured ? "border-primary" : "border-accent"}`}>
                      <img
                        src={member.image}
                        alt={member.name}
                        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                        onError={(e) => {
                          const target = e.target as HTMLImageElement;
                          target.src = `https://ui-avatars.com/api/?name=${encodeURIComponent(member.name)}&background=random&color=fff&size=96`;
                        }}
                      />
                    </div>
                    <div className="flex-1">
                      <div className="flex flex-col items-center gap-2 mb-2">
                        <h3 className="font-semibold text-foreground text-lg">{member.name}</h3>
                        {member.featured && (
                          <span className="px-3 py-1 bg-primary/10 text-primary text-sm rounded-full border border-primary/20">
                            सरपंच
                          </span>
                        )}
                      </div>
                      <p className="text-primary font-medium mb-2">{member.role}</p>
                      <p className="text-sm text-muted-foreground mb-3">{member.desc}</p>
                      {member.phone && (
                        <div className="flex items-center justify-center gap-2 text-sm text-muted-foreground">
                          <Phone className="h-4 w-4" />
                          <span>{member.phone}</span>
                        </div>
                      )}
                    </div>
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}