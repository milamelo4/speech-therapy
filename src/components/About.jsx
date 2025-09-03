import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card.jsx'
import {
  Heart,
  CheckCircle,
  Award,
} from 'lucide-react'
import { motion } from 'framer-motion'

export default function About() {
  return (
    <section id="about" className="py-16 px-4 sm:px-6 lg:px-8 bg-card">
        <div className="max-w-7xl mx-auto">
            <motion.div
            className="text-center mb-16"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            >
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
                About Me
            </h2>
            </motion.div>

            <div className="grid lg:grid-cols-2 gap-12 items-center">
                <motion.div
                    initial={{ opacity: 0, x: -30 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.8 }}
                    viewport={{ once: true }}
                >
                <div className="bg-secondary rounded-2xl p-8 text-secondary-foreground">
                    <Heart className="w-12 h-12 text-primary mb-4" />
                    <h3 className="text-2xl font-semibold mb-4">My Journey</h3>
                    <p className="mb-4">
                        Originally from Brazil, I moved to Utah during middle school. Growing up learning
                        English as a second language gave me a unique perspective on the power of communication.
                        That experience shaped my passion for this field and continues to fuel my commitment
                        to helping others find their voice.
                    </p>
                    <p>
                        I earned my Master's degree in Speech-Language Pathology from the University of Utah
                        in 2013. Since then, I've had the privilege of working with children from diverse
                        linguistic and communication backgrounds.
                    </p>
                </div>
                </motion.div>

                <motion.div
                    initial={{ opacity: 0, x: 30 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.8 }}
                    viewport={{ once: true }}
                >
                    <Card className="bg-card text-card-foreground">
                        <CardHeader>
                            <CardTitle className="flex items-center">
                            <Award className="w-6 h-6 mr-2 text-primary" />
                            Credentials
                            </CardTitle>
                        </CardHeader>
                        <CardContent className="space-y-4">
                            <div className="flex items-start space-x-3">
                                <CheckCircle className="w-5 h-5 text-accent mt-0.5" />
                                <div>
                                    <p className="font-medium">Master's Degree</p>
                                    <p className="text-sm text-muted-foreground">Speech-Language Pathology, University of Utah (2013)</p>
                                </div>
                            </div>
                            <div className="flex items-start space-x-3">
                                <CheckCircle className="w-5 h-5 text-accent mt-0.5" />
                                <div>
                                    <p className="font-medium">ASHA Certified</p>
                                    <p className="text-sm text-muted-foreground">Certificate of Clinical Competence</p>
                                </div>
                            </div>
                            <div className="flex items-start space-x-3">
                                <CheckCircle className="w-5 h-5 text-accent mt-0.5" />
                                <div>
                                    <p className="font-medium">Licensed in Utah</p>
                                    <p className="text-sm text-muted-foreground">License # 9142271-4102</p>
                                </div>
                            </div>
                            <div className="flex items-start space-x-3">
                                <CheckCircle className="w-5 h-5 text-accent mt-0.5" />
                                <div>
                                    <p className="font-medium">Multilingual Background</p>
                                    <p className="text-sm text-muted-foreground">Native Portuguese, fluent English</p>
                                </div>
                            </div>
                        </CardContent>
                    </Card>
                </motion.div>
            </div>
        </div>
    </section>

  );
}   
        