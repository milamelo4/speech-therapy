import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card.jsx'
import { Badge } from '@/components/ui/badge.jsx'
import {
  Phone,
  Users,
  MessageCircle,
  Home
} from 'lucide-react'
import { motion } from 'framer-motion'

export default function Services() {
    const services = [
        {
        icon: <MessageCircle className="w-8 h-8" />,
        title: "Speech Evaluation",
        description: "Comprehensive assessment to understand your child's current abilities and communication needs.",
        price: "$150/hr"
        },
        {
        icon: <Users className="w-8 h-8" />,
        title: "Individual Therapy",
        description: "Personalized one-on-one sessions tailored to your child's specific goals and needs.",
        price: "30min: $50 | 45min: $75 | 60min: $100"
        },
        {
        icon: <Home className="w-8 h-8" />,
        title: "Home Support",
        description: "Parent participation and home practice guidance to reinforce skills in everyday environments.",
        price: "Included in sessions"
        },
        {
        icon: <Phone className="w-8 h-8" />,
        title: "Free Consultation",
        description: "Initial phone consultation to discuss concerns and determine appropriate next steps.",
        price: "Free"
        }
    ]

    return (
        <section id="services" className="py-16 px-4 sm:px-6 lg:px-8 bg-muted">
            <div className="max-w-7xl mx-auto">
                <motion.div
                    className="text-center mb-16"
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8 }}
                    viewport={{ once: true }}
                >
                    <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
                    Services
                    </h2>
                    <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
                    I offer comprehensive speech-language pathology services tailored to each child's unique needs.
                    </p>
                </motion.div>

                <div className="grid md:grid-cols-2 gap-8">
                    {services.map((service, index) => (
                    <motion.div
                        key={index}
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8, delay: index * 0.1 }}
                        viewport={{ once: true }}
                        whileHover={{ y: -5 }}
                    >
                        <Card className="h-full bg-card text-card-foreground hover:shadow-lg transition-shadow duration-300">
                        <CardHeader>
                            <div className="w-12 h-12 bg-secondary rounded-lg flex items-center justify-center text-primary mb-4">
                            {service.icon}
                            </div>
                            <CardTitle className="text-xl">{service.title}</CardTitle>
                            <Badge variant="secondary" className="w-fit bg-accent text-accent-foreground">{service.price}</Badge>
                        </CardHeader>
                        <CardContent>
                            <CardDescription className="text-muted-foreground">
                            {service.description}
                            </CardDescription>
                        </CardContent>
                        </Card>
                    </motion.div>
                ))}
                </div>

                <motion.div
                    className="mt-12 bg-secondary rounded-2xl p-8 text-secondary-foreground"
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8 }}
                    viewport={{ once: true }}
                >
                    <h3 className="text-2xl font-semibold mb-4 text-center">My Approach</h3>
                    <div className="grid md:grid-cols-2 gap-6">
                    <div>
                        <h4 className="font-semibold mb-2">Initial Consultation</h4>
                        <p className="text-sm">
                        I offer a free initial phone consultation to discuss your concerns, answer questions,
                        and determine appropriate next steps.
                        </p>
                    </div>
                    <div>
                        <h4 className="font-semibold mb-2">Comprehensive Assessment</h4>
                        <p className="text-sm">
                        If an evaluation is recommended, we'll begin with a comprehensive assessment to
                        better understand your child's current abilities and needs.
                        </p>
                    </div>
                    <div>
                        <h4 className="font-semibold mb-2">Individualized Treatment</h4>
                        <p className="text-sm">
                        This information will help guide the development of an individualized treatment plan
                        tailored to your child's specific goals.
                        </p>
                    </div>
                    <div>
                        <h4 className="font-semibold mb-2">Family Involvement</h4>
                        <p className="text-sm">
                        Home practice is expected, and parents are welcome to participate in sessions.
                        Your support at home is vital to the therapy process.
                        </p>
                    </div>
                    </div>
                </motion.div>
            </div>
        </section>

    );
}   