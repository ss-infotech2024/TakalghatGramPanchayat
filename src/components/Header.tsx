import { useState } from "react";
import { Link } from "react-router-dom";
import { Menu, Search, Facebook, Youtube, Instagram, Twitter } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { motion } from "framer-motion";

const navItems = [
  { name: "गृहपृष्ठ", href: "/" },
  { name: "आमच्याबद्दल", href: "/about" },
  { name: "प्रकल्प", href: "/projects" },
  { name: "योजना", href: "/schemes" },
  { name: "दस्तऐवज", href: "/documents" },
  { name: "गॅलरी", href: "/gallery" },
  { name: "ग्रामसभा", href: "/gramsabha" },
  { name: "डाउनलोड्स", href: "/downloads" },
  { name: "बातम्या", href: "/news" },
  { name: "संपर्क", href: "/contact" },
];

const socialLinks = [
  { icon: Facebook, href: "#", label: "Facebook" },
  { icon: Youtube, href: "#", label: "YouTube" },
  { icon: Instagram, href: "#", label: "Instagram" },
  { icon: Twitter, href: "#", label: "X" },
];

export function Header() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 w-full bg-card/95 backdrop-blur supports-[backdrop-filter]:bg-card/80 border-b border-border">
      {/* Top bar */}
      <div className="bg-primary text-primary-foreground py-2">
        <div className="container flex justify-between items-center text-sm">
          <span>टाकळघाट ग्रामपंचायत | ता. हिंगणा, जि. नागपूर</span>
          <div className="hidden md:flex items-center gap-4">
            <span>📞 ०७१०४-२३६५०१</span>
            <span>📧 grampanchayattakalghat@gmail.com</span>
          </div>
        </div>
      </div>

      {/* Main header */}
      <div className="container py-3">
        <div className="flex items-center justify-between">
          {/* Left Logo */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            className="flex items-center gap-6"
          >
            {/* Left Logo (logo1.jpeg) */}
            <div className="hidden md:block">
              <img
                src="/logo1.jpeg"
                alt="ग्रामपंचायत लोगो"
                className="w-16 h-16 object-contain"
              />
            </div>

            {/* Center Logo/Title */}
            <Link to="/" className="flex items-center gap-3">

              <div>
                <h1 className="text-xl font-bold text-primary leading-tight">ग्रामपंचायत टाकळघाट</h1>
                <p className="text-xs text-muted-foreground">ता. हिंगणा, जि. नागपूर, महाराष्ट्र</p>
              </div>
            </Link>
          </motion.div>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center gap-1">
            {navItems.slice(0, 7).map((item, index) => (
              <motion.div
                key={item.name}
                initial={{ opacity: 0, y: -10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.3, delay: index * 0.05 }}
              >
                <Link to={item.href} className="nav-link px-3 py-2 text-sm font-medium">
                  {item.name}
                </Link>
              </motion.div>
            ))}
          </nav>

          {/* Right side with Right Logo */}
          <div className="flex items-center gap-3">
            {/* Right Logo (logo2.jpeg) */}
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5 }}
              className="hidden md:block"
            >
              <img
                src="/logo2.jpeg"
                alt="ग्रामपंचायत लोगो"
                className="w-16 h-16 object-contain"
              />
            </motion.div>

            {/* Mobile menu */}
            <Sheet open={isOpen} onOpenChange={setIsOpen}>
              <SheetTrigger asChild className="lg:hidden">
                <Button variant="ghost" size="icon">
                  <Menu className="h-6 w-6" />
                </Button>
              </SheetTrigger>
              <SheetContent side="right" className="w-80">
                <nav className="flex flex-col gap-2 mt-8">
                  {navItems.map((item, index) => (
                    <motion.div
                      key={item.name}
                      initial={{ opacity: 0, x: 20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ duration: 0.3, delay: index * 0.05 }}
                    >
                      <Link
                        to={item.href}
                        className="block px-4 py-3 text-lg font-medium hover:bg-muted rounded-lg transition-colors"
                        onClick={() => setIsOpen(false)}
                      >
                        {item.name}
                      </Link>
                    </motion.div>
                  ))}
                </nav>
                <div className="flex items-center gap-3 mt-8 px-4">
                  {socialLinks.map((social) => (
                    <a
                      key={social.label}
                      href={social.href}
                      className="p-2 bg-muted rounded-full hover:bg-primary hover:text-primary-foreground transition-colors"
                    >
                      <social.icon className="h-5 w-5" />
                    </a>
                  ))}
                </div>
              </SheetContent>
            </Sheet>
          </div>
        </div>
      </div>
    </header>
  );
}