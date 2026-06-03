'use client'

import { motion } from 'framer-motion'
import Image from 'next/image'
import { Button } from '@/components/ui/button'
import { TradingStatsDisplay } from '@/components/dashboard/TradingStatsDisplay'
import { ArrowRight, Play, Youtube, Instagram, Twitter, Linkedin } from 'lucide-react'

const demoStats = {
  totalTrades: 1247,
  winRate: 68.5,
  accountSize: 125000,
  riskReward: 2.3,
  totalPnL: 87500,
  profitFactor: 2.45,
}

export default function HomePage() {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative pt-32 pb-20 overflow-hidden">
        {/* Background gradient */}
        <div className="absolute inset-0 bg-gradient-to-br from-primary/20 via-background to-background" />
        
        <div className="container mx-auto px-4 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center max-w-4xl mx-auto"
          >
            <div className="relative w-40 h-40 mx-auto mb-8">
              <div className="absolute inset-0 rounded-full bg-gradient-to-r from-primary to-purple-500 blur-xl opacity-50" />
              <Image
                src="/placeholder-avatar.jpg"
                alt="Trader Profile"
                width={160}
                height={160}
                className="rounded-full border-4 border-primary/50 relative z-10 object-cover"
              />
            </div>
            
            <h1 className="text-5xl md:text-7xl font-bold mb-6">
              <span className="gradient-text">John Doe</span>
            </h1>
            
            <p className="text-xl md:text-2xl text-muted-foreground mb-4">
              Professional Forex & Crypto Trader
            </p>
            
            <p className="text-lg text-muted-foreground mb-8 max-w-2xl mx-auto">
              Specializing in Smart Money Concepts and Price Action trading. 
              Helping traders achieve consistency through disciplined risk management 
              and proven strategies.
            </p>
            
            <div className="flex flex-wrap justify-center gap-4">
              <Button size="lg" className="gap-2">
                View Dashboard <ArrowRight className="h-5 w-5" />
              </Button>
              <Button size="lg" variant="outline" className="gap-2">
                <Play className="h-5 w-5" /> Watch Introduction
              </Button>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Trading <span className="gradient-text">Performance</span>
            </h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Real-time statistics and performance metrics from my trading journey
            </p>
          </motion.div>
          
          <TradingStatsDisplay stats={demoStats} />
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 bg-secondary/30">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              What I <span className="gradient-text">Offer</span>
            </h2>
          </motion.div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                title: 'Trade Journal',
                description: 'Detailed analysis of every trade with screenshots and notes',
                icon: '📊',
              },
              {
                title: 'Educational Content',
                description: 'Free YouTube tutorials on ICT, SMC, and Price Action',
                icon: '🎓',
              },
              {
                title: 'Verified Results',
                description: 'Transparent performance tracking with third-party verification',
                icon: '✅',
              },
            ].map((feature, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="glass-card p-8 rounded-lg text-center hover:scale-105 transition-transform"
              >
                <div className="text-5xl mb-4">{feature.icon}</div>
                <h3 className="text-xl font-bold mb-2">{feature.title}</h3>
                <p className="text-muted-foreground">{feature.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Social Links Section */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Connect With <span className="gradient-text">Me</span>
            </h2>
          </motion.div>
          
          <div className="flex justify-center gap-6 flex-wrap">
            {[
              { icon: Youtube, label: 'YouTube', href: '#' },
              { icon: Instagram, label: 'Instagram', href: '#' },
              { icon: Twitter, label: 'Twitter', href: '#' },
              { icon: Linkedin, label: 'LinkedIn', href: '#' },
            ].map((social, index) => (
              <motion.a
                key={index}
                href={social.href}
                initial={{ opacity: 0, scale: 0.5 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.3, delay: index * 0.1 }}
                viewport={{ once: true }}
                whileHover={{ scale: 1.1 }}
                className="glass-card p-4 rounded-full hover:bg-primary/20 transition-colors"
              >
                <social.icon className="h-8 w-8" />
              </motion.a>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-primary/20 to-purple-500/20">
        <div className="container mx-auto px-4 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              Ready to Start Your <span className="gradient-text">Journey?</span>
            </h2>
            <p className="text-muted-foreground mb-8 max-w-2xl mx-auto">
              Join thousands of traders who are improving their skills with my content and tools.
            </p>
            <Button size="lg" className="gap-2">
              Get Started Now <ArrowRight className="h-5 w-5" />
            </Button>
          </motion.div>
        </div>
      </section>
    </div>
  )
}
