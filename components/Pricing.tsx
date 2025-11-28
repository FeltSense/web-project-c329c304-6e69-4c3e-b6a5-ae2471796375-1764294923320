'use client';

import { motion } from 'framer-motion';
import { Check, Sparkles } from 'lucide-react';

const features = [
  'Unlimited profile analytics & insights',
  'AI-powered content recommendations',
  'Personal growth tracking dashboard',
  'Community access & networking',
  'Weekly mindset coaching sessions',
  'Priority feature updates forever',
];

export default function Pricing() {
  return (
    <section id="pricing" className="py-24 md:py-32 bg-white">
      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="inline-flex items-center gap-2 bg-rose-50 text-rose-500 px-4 py-2 rounded-full text-sm font-semibold mb-6">
            <Sparkles className="w-4 h-4" />
            Limited Time Offer
          </span>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold tracking-tight leading-[1.2] text-slate-900 mb-6">
            Lock In Your Lifetime Access
          </h2>
          <p className="text-lg text-slate-500 max-w-2xl mx-auto">
            Join thousands of early adopters transforming their social presence. 
            Pre-order now and get lifetime access at our lowest price ever.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="max-w-lg mx-auto"
        >
          <div className="relative bg-white rounded-2xl shadow-sm border border-slate-100 p-8 hover:shadow-md transition-all duration-300">
            {/* Most Popular Badge */}
            <div className="absolute -top-4 left-1/2 -translate-x-1/2">
              <span className="bg-rose-500 text-white text-sm font-semibold px-6 py-2 rounded-full shadow-md">
                Most Popular
              </span>
            </div>

            {/* Price Container */}
            <div className="text-center pt-4 pb-8 border-b border-slate-100">
              <div className="flex items-baseline justify-center gap-2">
                <span className="text-slate-400 text-2xl line-through">$99</span>
                <span className="text-6xl font-bold tracking-tight text-slate-900">$29</span>
              </div>
              <span className="text-slate-500 text-lg mt-2 block">Lifetime Access • Pre-order</span>
              <p className="text-cyan-400 font-semibold mt-3">Save 70% — Limited spots remaining</p>
            </div>
            
            {/* Features List */}
            <ul className="space-y-4 py-8">
              {features.map((feature, index) => (
                <li key={index} className="flex items-start gap-3">
                  <div className="flex-shrink-0 w-6 h-6 bg-rose-50 rounded-full flex items-center justify-center mt-0.5">
                    <Check className="w-4 h-4 text-rose-500" />
                  </div>
                  <span className="text-slate-600">{feature}</span>
                </li>
              ))}
            </ul>

            {/* CTA Button */}
            <button
              onClick={() => window.location.href = 'https://buy.stripe.com/test_cNicN778gcvQ2NZ3gV6Ri00'}
              className="w-full bg-rose-500 hover:bg-rose-600 text-white font-semibold rounded-xl px-8 py-4 transition-all duration-300 shadow-sm hover:shadow-md text-lg"
            >
              Pre-Order Now — $29
            </button>

            {/* Trust Badges */}
            <div className="mt-6 flex items-center justify-center gap-6 text-sm text-slate-400">
              <span className="flex items-center gap-1">
                <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M5 9V7a5 5 0 0110 0v2a2 2 0 012 2v5a2 2 0 01-2 2H5a2 2 0 01-2-2v-5a2 2 0 012-2zm8-2v2H7V7a3 3 0 016 0z" clipRule="evenodd" />
                </svg>
                Secure checkout
              </span>
              <span className="flex items-center gap-1">
                <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M4 4a2 2 0 00-2 2v4a2 2 0 002 2V6h10a2 2 0 00-2-2H4zm2 6a2 2 0 012-2h8a2 2 0 012 2v4a2 2 0 01-2 2H8a2 2 0 01-2-2v-4zm6 4a2 2 0 100-4 2 2 0 000 4z" clipRule="evenodd" />
                </svg>
                Money-back guarantee
              </span>
            </div>
          </div>
        </motion.div>

        {/* Social Proof */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="text-center mt-12"
        >
          <p className="text-slate-500">
            <span className="text-rose-500 font-semibold">2,847 people</span> have already pre-ordered
          </p>
        </motion.div>
      </div>
    </section>
  );
}