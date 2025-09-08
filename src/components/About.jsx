import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card.jsx'
import {
  CheckCircle,
  Award,
} from 'lucide-react'
import { motion } from 'framer-motion'

export default function About() {
  return (
    <section id="about" className="py-16 px-4 sm:px-6 lg:px-10 bg-muted relative">
        <div className="absolute -top-6 -left-6 w-80 h-80 bg-primary/10 rounded-full blur-2xl"></div>
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
                <div className="absolute inset-0 rounded-2xl bg-black/5 shadow-lg -mb-6"></div>                
                <motion.div
                    initial={{ opacity: 0, x: 30 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.8 }}
                    viewport={{ once: true }}
                    className="self-center -mb-6 lg:self-start lg:mb-10 rounded-2xl relative z-20"
                    >
                        <img
                            src="assets/profile.webp"
                            alt="About Cindy Melo Rodgerson"
                            className="w-60 h-60 object-cover rounded-full shadow-2xl border-4 border-white"
                        />                   
                </motion.div>

                {/* My Journey */}
                <motion.div
                    initial={{ opacity: 0, x: -30 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.8 }}
                    viewport={{ once: true }}
                    className="relative z-10"
                >
                    <div className='shadow-2xl rounded-2xl self-center ml-auto lg:-ml-7'>
                    <div className="bg-primary rounded-2xl p-8 lg:p-10 text-foreground max-w-xl min-h-[300px] lg:min-h-[400px] lg:shadow-2xl">
                        {/* <Heart className="w-12 h-12 text-primary mb-4" /> */}
                        <h3 className="text-2xl font-semibold mb-4">My Journey</h3>
                        <p className="mb-4">
                            I was born in Brazil and moved to Utah during middle school. Learning English as a second language gave me a unique perspective on the power of communication. That experience sparked my passion for speech-language pathology and continues to inspire me to help others find their voice.
                        </p>
                        <p>
                            In 2013, I earned a Master's degree in Speech-Language Pathology from the University of Utah. Since then, Ive had the privilege of working with children from diverse linguistic and communication backgrounds, supporting them as they grow in confidence and communication.
                        </p>
                    </div>
                </div>               
                </motion.div>

                {/* Credentials */}                
                <div className="mt-4 lg:mt-0 l-8 w-full max-w-md px-0 lg:px-6">                    
                    <motion.div
                        initial={{ opacity: 0, x: 30 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.8 }}
                        viewport={{ once: true }}
                        className="rounded-2xl"
                    >
                        <Card className="bg-background text-card-foreground rounded-2xl shadow-md">
                            <CardHeader>
                                <CardTitle className="flex items-center text-lg font-semibold text-card-foreground">
                                <Award className="w-7 h-7 mr-1 text-card-foreground font-semibold" />
                                Credentials
                                </CardTitle>
                            </CardHeader>
                            <CardContent className="divide-y divide-border/50">

                                <div className="flex items-start space-x-3 py-3">
                                    <div className="flex items-center justify-center w-8 h-8 rounded-full bg-secondary/10 text-secondary">
                                        <CheckCircle className="w-5 h-5" />
                                    </div>
                                    <div>
                                        <p className="font-medium">Master's Degree</p>
                                        <p className="text-sm text-muted-foreground">
                                        Speech-Language Pathology, University of Utah (2013)
                                        </p>
                                    </div>
                                </div>
                                <div className="flex items-start space-x-3 py-3">
                                    <div className="flex items-center justify-center w-8 h-8 rounded-full bg-secondary/10 text-secondary">
                                        <CheckCircle className="w-5 h-5" />
                                    </div>
                                    <div>
                                        <p className="font-medium">ASHA Certified</p>
                                        <p className="text-sm text-muted-foreground">Certificate of Clinical Competence</p>
                                    </div>
                                </div>
                                <div className="flex items-start space-x-3 py-3">
                                    <div className="flex items-center justify-center w-8 h-8 rounded-full bg-secondary/10 text-secondary">
                                        <CheckCircle className="w-5 h-5" />
                                    </div>
                                    <div>
                                        <p className="font-medium">Licensed in Utah</p>
                                        <p className="text-sm text-muted-foreground">License # 9142271-4102</p>
                                    </div>
                                </div>
                                <div className="flex items-start space-x-3 pt-3">
                                    <div className="flex items-center justify-center w-8 h-8 rounded-full bg-secondary/10 text-secondary">
                                        <CheckCircle className="w-5 h-5" />
                                    </div>
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
        </div>
    </section>

  );
}   
        