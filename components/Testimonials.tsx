'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';

const testimonials = [
  {
    name: 'Marcus Chen',
    role: 'Content Creator',
    company: 'TechFlow Media',
    companyLogo: 'TF',
    quote: 'Ego transformed how I present myself online. My engagement tripled in just 3 months, and I finally feel like my digital presence matches who I really am.',
    avatar: 'https://i.pravatar.cc/150?img=11',
  },
  {
    name: 'Sophia Williams',
    role: 'Life Coach',
    company: 'Mindset Academy',
    companyLogo: 'MA',
    quote: 'The personal branding tools are incredible. I went from 2K to 50K followers while staying authentic. Ego helped me find my voice and amplify it.',
    avatar: 'https://i.pravatar.cc/150?img=5',
  },
  {
    name: 'Jordan Rivera',
    role: 'Entrepreneur',
    company: 'Venture Labs',
    companyLogo: 'VL',
    quote: 'Building a personal brand felt overwhelming until I found Ego. Now I have a clear strategy, consistent content, and a community that actually engages.',
    avatar: 'https://i.pravatar.cc/150?img=12',
  },
];

export default function Testimonials() {
  return (
    <section id="testimonials" className="py-24 md:py-32 bg-slate-50">
      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <span className="inline-block text-rose-500 font-semibold text-sm uppercase tracking-wider mb-4">Success Stories</span>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold tracking-tight leading-[1.2] text-slate-900 mb-6">Real People. Real Transformations.</h2>
          <p className="text-lg md:text-xl text-slate-500 max-w-2xl mx-auto">See how Ego has helped thousands build authentic personal brands that stand out.</p>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={testimonial.name}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="bg-white rounded-2xl shadow-sm border border-slate-100 p-8 hover:shadow-md hover:-translate-y-1 transition-all duration-300 flex flex-col"
            >
              {/* Company Logo */}
              <div className="flex items-center justify-between mb-6">
                <div className="w-12 h-12 rounded-xl bg-rose-50 flex items-center justify-center">
                  <span className="text-rose-500 font-bold text-lg">{testimonial.companyLogo}</span>
                </div>
                <div className="flex gap-1">
                  {[...Array(5)].map((_, i) => (
                    <svg key={i} className="w-5 h-5 text-cyan-400" fill="currentColor" viewBox="0 0 20 20">
                      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                    </svg>
                  ))}
                </div>
              </div>

              {/* Quote */}
              <blockquote className="text-slate-600 text-lg leading-relaxed flex-grow mb-8">
                "{testimonial.quote}"
              </blockquote>

              {/* Person Info */}
              <div className="flex items-center gap-4 pt-6 border-t border-slate-100">
                <div className="relative w-14 h-14 rounded-full overflow-hidden ring-2 ring-rose-100">
                  <Image
                    src={testimonial.avatar}
                    alt={testimonial.name}
                    fill
                    className="object-cover"
                  />
                </div>
                <div>
                  <h4 className="font-semibold text-slate-900">{testimonial.name}</h4>
                  <p className="text-slate-500 text-sm">{testimonial.role}</p>
                  <p className="text-rose-500 text-sm font-medium">{testimonial.company}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Trust Indicators */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.4 }}
          className="mt-16 text-center"
        >
          <p className="text-slate-500 mb-6">Trusted by leading brands and creators worldwide</p>
          <div className="flex flex-wrap justify-center items-center gap-8 md:gap-12">
            {['Forbes', 'TechCrunch', 'Wired', 'Fast Company'].map((brand) => (
              <span key={brand} className="text-slate-400 font-bold text-xl tracking-tight hover:text-slate-600 transition-colors duration-300">
                {brand}
              </span>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
