import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card.jsx'
import {
  Heart,
  CheckCircle,
  Award,
} from 'lucide-react'
import { motion } from 'framer-motion'

export default function About() {
  return (
    <section id="about" className="py-16 px-4 sm:px-6 lg:px-8 bg-muted relative">
        <div className="max-w-7xl mx-auto">
            <motion.div
            className="text-center mb-4"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
        >
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-10">
                About Me
            </h2>
            </motion.div>
        
            <div className="relative flex flex-col lg:flex-row items-center">
                <div className="hidden lg:block absolute top-10 right-40 z-10 w-190 h-100 bg-primary/10 shadow-lg rounded-2xl"></div>
                <motion.div
                    initial={{ opacity: 0, x: 30 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.8 }}
                    viewport={{ once: true }}
                    className="mb-6 lg:mb-10 lg:ml-60 rounded-2xl relative z-20"
                    >
                        <img
                            src="assets/profile.webp"
                            alt="About Cindy"
                            className="w-70 h-70 object-cover rounded-full shadow-lg border-4 border-white "
                        />                   
                </motion.div>

                <motion.div
                    initial={{ opacity: 0, x: -30 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.8 }}
                    viewport={{ once: true }}
                    className="relative z-10"
                >
                <div className="bg-primary-darker rounded-2xl p-8 lg:p-10 text-background max-w-xl min-h-[300px] lg:min-h-[350px] lg:ml-[-30px] shadow-xl">
                    {/* <Heart className="w-12 h-12 text-primary mb-4" /> */}
                    <h3 className="text-2xl font-semibold mb-4">My Journey</h3>
                    <p className="mb-4">
                        I was born in Brazil and moved to Utah during middle school. Learning English as a second language gave me a unique perspective on the power of communication. That experience sparked my passion for speech-language pathology and continues to inspire me to help others find their voice.
                    </p>
                    <p>
                        In 2013, I earned a Master's degree in Speech-Language Pathology from the University of Utah. Since then, Ive had the privilege of working with children from diverse linguistic and communication backgrounds, supporting them as they grow in confidence and communication.
                    </p>
                </div>
                
                </motion.div>
            </div>
             <motion.div
                    initial={{ opacity: 0, x: 30 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.8 }}
                    viewport={{ once: true }}
                    className="mx-auto rounded-2xl mt-20"
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
    </section>

  );
}   
        