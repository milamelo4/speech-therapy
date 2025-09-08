import { Card, CardContent,  CardHeader, CardTitle } from '@/components/ui/card.jsx'
import { Clock, FileText  } from 'lucide-react' 
import { motion } from 'framer-motion'

export default function Rates() {
    return (
        <section id="rates" className="py-16 px-4 sm:px-6 lg:px-8 bg-background min-h-screen sm:min-h-[80vh]">
            <div className="max-w-4xl mx-auto">
                <motion.div
                    className="text-center mb-16"
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8 }}
                    viewport={{ once: true }}
                >
                    <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
                    Rates and Payment
                    </h2>
                    <p className="text-xl text-muted-foreground">
                    Therapy cost is private-pay only. Payments can be made via cash, check, or Venmo.
                    </p>
                </motion.div>

                <motion.div
                    className="grid md:grid-cols-2 gap-6"
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8 }}
                    viewport={{ once: true }}
                >
                    <Card className="bg-white rounded-2xl shadow-md hover:shadow-lg transition">
                        <CardHeader>
                            <CardTitle className="flex items-center text-lg font-semibold bg-primary/5 rounded-2xl p-2 text-primary">
                            <Clock className="w-6 h-6 mr-2 text-primary" />
                            Session Rates
                            </CardTitle>
                        </CardHeader>
                        <CardContent className="space-y-4">
                            <div className="flex justify-between items-center py-2 border-b border-border">
                            <span>30-minute session</span>
                            <span className="font-semibold text-primary bg-primary/10 rounded-2xl px-2">$50</span>
                            </div>
                            <div className="flex justify-between items-center py-2 border-b border-border">
                            <span>45-minute session</span>
                            <span className="font-semibold text-primary bg-primary/10 rounded-2xl px-2">$75</span>
                            </div>
                            <div className="flex justify-between items-center py-2 border-b border-border">
                            <span>60-minute session</span>
                            <span className="font-semibold text-primary bg-primary/10 rounded-2xl px-2">$100</span>
                            </div>
                            <div className="flex justify-between items-center py-2">
                            <span>Evaluation</span>
                            <span className="font-semibold text-primary bg-primary/10 rounded-2xl px-2">$150/hr</span>
                            </div>
                        </CardContent>
                    </Card>

                    <Card className="bg-white text-card-foreground rounded-2xl shadow-md hover:shadow-lg transition">
                        <CardHeader>                            
                            <CardTitle className="flex items-center text-lg font-semibold bg-primary/5 rounded-2xl p-2 text-primary">
                                <FileText className="w-6 h-6 mr-2 text-primary" />
                                Payment & Policies                            
                            </CardTitle>
                        </CardHeader>
                        <CardContent className="space-y-4">
                            <div>
                            <h4 className="font-semibold mb-2">Payment Methods</h4>
                            <ul className="text-sm text-foreground space-y-1">
                                <li>• Cash</li>
                                <li>• Check</li>
                                <li>• Venmo</li>
                            </ul>
                            </div>
                            <div>
                            <h4 className="font-semibold mb-2">Cancellation Policy</h4>
                            <p className="text-sm text-foreground">
                                Please provide at least 24 hours' notice if you need to cancel or reschedule
                                an appointment, except in cases of illness or emergencies.
                            </p>
                            </div>
                        </CardContent>
                    </Card>
                </motion.div>
            </div>
        </section>

    );

}