'use client';

import { motion } from 'framer-motion';
import { Sparkles, Target, TrendingUp, Users } from 'lucide-react';

const services = [
  {
    icon: Sparkles,
    title: 'Personal Brand Building',
    description: 'Craft an authentic online presence that resonates with your audience. Stand out with a unique voice that attracts the right followers and opportunities.',
    span: 'md:col-span-2',
    bg: 'bg-rose-500/5',
    minHeight: 'min-h-[300px]',
  },
  {
    icon: Target,
    title: 'Goal Tracking',
    description: 'Set meaningful milestones and track your growth journey with precision analytics that keep you accountable.',
    span: '',
    bg: 'bg-slate-50',
    minHeight: 'min-h-[300px]',
  },
  {
    icon: TrendingUp,
    title: 'Growth Analytics',
    description: 'Deep insights into your engagement patterns and audience behavior to optimize your content strategy.',
    span: '',
    bg: 'bg-white border border-slate-100',
    minHeight: '',
  },
  {
    icon: Users,
    title: 'Community Connection',
    description: 'Build meaningful relationships with like-minded individuals. Network with creators, entrepreneurs, and thought leaders who elevate your journey.',
    span: 'md:col-span-2',
    bg: 'bg-slate-900',
    minHeight: '',
    dark: true,
  },
];

export default function Services() {
  return (
    <section id="services" className="py-24 md:py-32 bg-white">
      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold tracking-tight leading-[1.2] text-slate-900 mb-6">
            Unlock Your Full Potential
          </h2>
          <p className="text-slate-500 text-lg md:text-xl max-w-2xl mx-auto">
            Everything you need to transform your social presence and accelerate personal growth in one powerful platform.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {services.map((service, index) => (
            <motion.div
              key={service.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1, duration: 0.5 }}
              className={`${service.span} ${service.bg} ${service.minHeight} rounded-3xl p-8 transition-all duration-300 hover:shadow-md hover:-translate-y-1`}
            >
              <div className={`w-14 h-14 rounded-2xl ${service.dark ? 'bg-rose-500/20' : 'bg-rose-500/10'} flex items-center justify-center mb-6`}>
                <service.icon className={`w-7 h-7 ${service.dark ? 'text-rose-400' : 'text-rose-500'}`} />
              </div>
              <h3 className={`text-xl md:text-2xl font-semibold tracking-tight leading-[1.3] mb-3 ${service.dark ? 'text-white' : 'text-slate-900'}`}>
                {service.title}
              </h3>
              <p className={`text-lg ${service.dark ? 'text-slate-300' : 'text-slate-500'}`}>
                {service.description}
              </p>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.4, duration: 0.5 }}
          className="text-center mt-16"
        >
          <a
            href="#pricing"
            className="inline-flex items-center bg-rose-500 hover:bg-rose-600 text-white font-semibold rounded-xl px-8 py-4 transition-all duration-300 shadow-sm hover:shadow-md"
          >
            Start Your Transformation
            <TrendingUp className="w-5 h-5 ml-2" />
          </a>
        </motion.div>
      </div>
    </section>
  );
}