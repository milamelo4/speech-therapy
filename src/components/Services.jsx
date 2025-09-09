import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card.jsx'
import { Badge } from '@/components/ui/badge.jsx'
import { motion } from 'framer-motion'

export default function Services() {
    const services = [
        {
        image: "assets/speech.webp",
        alt: "Photo by Matteo Discardi on Unsplash",
        title: "Speech Evaluation",
        description: "Comprehensive assessment to understand your child's current abilities and communication needs.",
        price: "$150/hr"
        },
        {
        image: "assets/individual-therapy.webp",
        alt: "Photo by Jerry Wang on Unsplash",
        title: "Individual Therapy",
        description: "Personalized one-on-one sessions tailored to your child's specific goals and needs.",
        price: "30min: $50 | 45min: $75 | 60min: $100"
        },
        {
        image: "assets/home-support.webp",
        alt: "Photo by sofatutor on Unsplash1",
        title: "Home Support",
        description: "Parent participation and home practice guidance to reinforce skills in everyday environments.",
        price: "Included in sessions"
        },
        {
        image: "assets/consultation.webp",
        alt: "Photo by sofatutor on Unsplash",
        title: "Free Consultation",
        description: "Initial phone consultation to discuss concerns and determine appropriate next steps.",
        price: "Free"
        }
    ]

    return (
        <section id="services" className="py-16 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-secondary/10 via-muted to-muted">
            <div className="max-w-7xl mx-auto">
                <motion.div
                    className="text-center mb-10"
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

                <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
                    {services.map((service, index) => (
                    <motion.div
                        key={index}
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.2, delay: index * 0.1 }}
                        viewport={{ once: true }}
                        whileHover={{ y: -5 }}
                    >
                        <Card className="h-full flex flex-col overflow-hidden rounded-2xl shadow-md hover:shadow-xl transition-all bg-background pt-0 ">
                            <div className="h-40 w-full overflow-hidden">
                                <img src={service.image} alt={service.alt} className="w-full h-full object-cover" />
                            </div>
                        <CardHeader>
                            <CardTitle className="text-xl">{service.title}</CardTitle>
                            <Badge variant="secondary" className="w-fit bg-secondary/20 text-accent-foreground">{service.price}
                            </Badge>
                        </CardHeader>
                        <CardContent>
                            <CardDescription className="text-foreground">
                            {service.description}
                            </CardDescription>
                        </CardContent>
                        </Card>
                    </motion.div>
                ))}
                </div>

                {/* My Approach */}
                <motion.div
                className="mt-10 md:mt-20 bg-secondary/10 rounded-2xl p-8 text-secondary-foreground"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8 }}
                viewport={{ once: true }}
                >
                <h3 className="text-2xl font-semibold mb-8 text-center">My Approach</h3>
                
                <div className="grid md:grid-cols-3 gap-8 text-center">
                    <div>
                        <h4 className="text-xl font-bold text-primary mb-2">Initial Consultation</h4>
                        <p className="text-sm text-foreground">
                            Free phone consultation to discuss concerns, answer questions, 
                            and plan next steps.
                        </p>
                    </div>
                    <div>
                    <h4 className="text-xl font-bold text-primary mb-2">Comprehensive Assessment</h4>
                    <p className="text-sm text-muted-foreground">
                        In-depth evaluation to understand abilities and communication 
                        needs.
                    </p>
                    </div>

                    <div>
                    <h4 className="text-xl font-bold text-primary mb-2">Individualized Treatment</h4>
                    <p className="text-sm text-muted-foreground">
                        Customized therapy sessions tailored to each child's unique goals.
                    </p>
                    </div>
                </div>


                </motion.div>

            </div>
            
        </section>

    );
}   