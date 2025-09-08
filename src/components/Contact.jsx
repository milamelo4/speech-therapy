import { Button } from '@/components/ui/button.jsx'
import { useState } from 'react'
import { Input } from '@/components/ui/input.jsx'
import { Textarea } from '@/components/ui/textarea.jsx'
import {
  Phone,
  Mail,
  MapPin,
  Award,
} from 'lucide-react'
import { motion } from 'framer-motion'

export default function Contact() {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        phone: '',
        message: ''
    });
   
    const handleInputChange = (e) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value
        })
    }

    const handleSubmit = (e) => {
        e.preventDefault()
        alert(`Thank you for your message! I'll get back to you soon at ${formData.email}`)
        setFormData({ name: '', email: '', phone: '', message: '' })
    }

  return (
    <section id="contact" className="py-16 px-4 sm:px-6 lg:px-8 bg-primary">
        <div className="max-w-4xl mx-auto">
            <motion.div
                className="text-center mb-12"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8 }}
                viewport={{ once: true }}
            >
                <h2 className="text-3xl md:text-4xl font-bold text-primary-foreground mb-4">
                Ready to Get Started?
                </h2>
                <p className="text-secondary-foreground">
                Contact me today for a free consultation to discuss your child's needs.
                </p>
            </motion.div>

            <div className="grid lg:grid-cols-2 gap-8 w-full max-w-full overflow-x-hidden p-4 rounded-2xl shadow-md">
                <motion.div
                className="bg-background text-foreground backdrop-blur-sm rounded-2xl p-6"
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8 }}
                viewport={{ once: true }}
                >
                    <h3 className="text-2xl font-semibold text-foreground mb-6">Contact Information</h3>
                    <div className="space-y-4">
                        <div className="flex items-center space-x-3 text-foreground">
                        <Phone className="w-5 h-5" />
                        <span>801-577-8521</span>
                        </div>
                        <div className="flex items-center space-x-3 text-foreground">
                        <Mail className="w-5 h-5" />
                        <span>cindgee@me.com</span>
                        </div>
                        <div className="flex items-center space-x-3 text-foreground">
                        <MapPin className="w-5 h-5" />
                        <span>Salt Lake City, UT and surrounding areas</span>
                        </div>
                        <div className="flex items-center space-x-3 text-foreground">
                        <Award className="w-5 h-5" />
                        <span>License # 9142271-4102</span>
                        </div>
                    </div>
                </motion.div>

                <motion.div
                className="bg-white rounded-2xl p-6 text-foreground"
                initial={{ opacity: 0, x: 30 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8 }}
                viewport={{ once: true }}
                >
                    <h3 className="text-2xl font-semibold mb-6">Send a Message</h3>
                    <form onSubmit={handleSubmit} className="space-y-4">
                        <Input
                        name="name"
                        placeholder="Your Name"
                        value={formData.name}
                        onChange={handleInputChange}
                        required
                        className="bg-input text-foreground placeholder:text-muted-foreground border-border"
                        />
                        <Input
                        name="email"
                        type="email"
                        placeholder="Your Email"
                        value={formData.email}
                        onChange={handleInputChange}
                        required
                        className="bg-input text-foreground placeholder:text-muted-foreground border-border"
                        />
                        <Input
                        name="phone"
                        type="tel"
                        placeholder="Your Phone Number"
                        value={formData.phone}
                        onChange={handleInputChange}
                        className="bg-input text-foreground placeholder:text-muted-foreground border-border"
                        />
                        <Textarea
                        name="message"
                        placeholder="Tell me about your child's needs or any questions you have..."
                        rows={4}
                        value={formData.message}
                        onChange={handleInputChange}
                        required
                        className="bg-input text-foreground placeholder:text-muted-foreground border-border"
                        />
                        <Button
                        type="submit"
                        className="w-full bg-primary hover:bg-primary-foreground text-foreground px-8 py-3 rounded-full hover:bg-primary/70 focus:ring-2 focus:ring-[#5FC0D0] transition duration-300 ease-in-out"
                        aria-label="Send message"
                        >
                        Send Message
                        </Button>
                    </form>
                </motion.div>
            </div>
        </div>
    </section>
  )
    
}