import { Button } from '@/components/ui/button.jsx'
import { Badge } from '@/components/ui/badge.jsx'
import {
  Phone,
  Mail,
  MapPin,
  Award,
  Book,
} from 'lucide-react'
import { motion} from 'framer-motion'
import { useEffect, useState } from 'react'

export default function HeroSection() {
    const [offset, setOffset] = useState(0);
    const MotionLink = motion("a");

  useEffect(() => {
    const handleScroll = () => setOffset(window.scrollY * 0.4);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div className="bg-background">
        {/* Hero Section */}
      <section 
      className="relative min-h-screen sm:min-h-[80vh] pt-35 sm:pt-24 pb-16 px-4 sm:px-6 lg:px-8 overflow-hidden" 
      id="hero">
        <div
        className="absolute inset-0 bg-[url('/assets/kids.webp')] bg-cover bg-top"
        style={{ transform: `translateY(${offset}px)` }}
        />
        <div className="absolute inset-0 bg-white/80 "></div>
        <div className="max-w-7xl mx-auto relative">
          <div className="text-center">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
            >
            <Badge className="mb-6 px-4 py-1.5 rounded-full bg-muted/10 text-primary text-sm font-medium shadow-sm">
              <Award className="!w-5 !h-5 mr-1 text-primary" />
              Licensed & ASHA-Certified
            </Badge>
            <h1 className="text-4xl md:text-6xl font-bold text-foreground mb-10">                
              Speech-
              <span className="text-primary">
                Language {" "} 
              </span>
              Pathologist
            </h1>
            <p className="text-xl text-foreground mb-10 max-w-3xl mx-auto sm:bg-transparent bg-card/30 px-8 py-4 rounded-lg sm:shadow-none shadow-sm backdrop-blur-sm backdrop-saturate-100">
              Helping children find their voice and reach their communication potential.
              Serving Salt Lake City and surrounding areas with personalized,
              evidence-based speech therapy services.
            </p>
            </motion.div>

            <motion.div
              className="flex flex-col sm:flex-row gap-4 justify-center items-center"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
            <Button
              size="lg"
              className="w-48 bg-primary hover:bg-primary-foreground text-foreground px-8 py-3 rounded-full hover:bg-primary/70 focus:ring-2 focus:ring-[#5FC0D0] transition duration-300 ease-in-out"
              onClick={() => document.getElementById('contact').scrollIntoView({ behavior: 'smooth' })}  
              aria-label="Call to schedule a free consultation">
              <Phone className="mr-0.2 w-4 h-4" />
              Free Consultation
            </Button>

            <Button                
              size="lg"
              className="w-48 bg-primary hover:bg-primary-foreground text-foreground px-8 py-3 rounded-full hover:bg-primary/70 hover:border-primary hover:text-foreground focus:ring-2 focus:ring-[#5FC0D0] transition duration-300 ease-in-out"
              onClick={() => document.getElementById('about').scrollIntoView({ behavior: 'smooth' })} 
              aria-label="Learn more about Cindy Melo Rodgerson">
              <Book className="mr-0.2 w-4 h-4" />
              Learn More
            </Button>
            </motion.div>
          </div>

          <motion.div className="flex flex-col">
            <motion.div
                className="mt-16 grid md:grid-cols-3 gap-4 sm:gap-8 max-w-2xl mx-auto justify-center items-center"
                initial={{ opacity: 0, y: 50 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 1, delay: 0.4 }}
              >
                {/* Phone */}
                <MotionLink
                  href="tel:801-577-8521"
                  className="w-40 h-40 flex flex-col items-center justify-center rounded-full
                  bg-white/70 backdrop-blur-md shadow-md p-2 border border-primary border-dashed
                  hover:shadow-lg hover:bg-secondary/20 hover:text-foreground transition"
                  whileHover={{ scale: 1.05 }}
                >
                  <Phone className="w-8 h-8 text-primary mb-2" />
                  <h3 className="font-semibold text-base">Phone</h3>
                  <p className="text-sm text-muted-foreground">801-577-8521</p>
                </MotionLink>
                
                {/* Email */}
                <MotionLink
                  href="mailto:cindgee@me.com"
                  className="w-40 h-40 flex flex-col items-center justify-center rounded-full
                            bg-white/70 backdrop-blur-md shadow-md p-2 border border-primary border-dashed
                            hover:shadow-lg hover:bg-secondary/20 hover:text-foreground transition"
                  whileHover={{ scale: 1.05 }}
                >
                  <Mail className="w-8 h-8 text-primary mb-2" />
                  <h3 className="font-semibold text-base">Email</h3>
                  <p className="text-sm text-muted-foreground">cindgee@me.com</p>
                </MotionLink>

                {/* Location */}
                <MotionLink
                href="https://www.google.com/maps/place/Salt+Lake+City,+UT/"
                target="_blank"
                rel="noopener noreferrer"
                  className="w-40 h-40 flex flex-col items-center justify-center rounded-full
                            bg-white/70 backdrop-blur-md shadow-md p-2 border border-primary border-dashed
                            hover:shadow-lg hover:bg-secondary/20 hover:text-foreground transition"
                  whileHover={{ scale: 1.05 }}
                >
                  <MapPin className="w-8 h-8 text-primary mb-2" />
                  <h3 className="font-semibold text-base">Location</h3>
                  <p className="text-sm text-muted-foreground">Salt Lake City, UT</p>
                </MotionLink>
            </motion.div>
         </motion.div>
        </div>
      </section>
    </div>
  );
}
