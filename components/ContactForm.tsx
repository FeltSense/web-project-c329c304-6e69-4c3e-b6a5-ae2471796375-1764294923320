'use client';

import { useState, FormEvent } from 'react';
import { motion } from 'framer-motion';
import { Send, CheckCircle } from 'lucide-react';

export default function ContactForm() {
  const [status, setStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle');

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setStatus('loading');
    
    const formData = new FormData(e.currentTarget);
    const data = {
      name: formData.get('name'),
      email: formData.get('email'),
      phone: formData.get('phone'),
    };

    try {
      const response = await fetch('https://deep-api-server-2moiw.kinsta.app/api/form_submissions', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          form_id: 'contact_form',
          form_data: data,
          project_id: 'c329c304-6e69-4c3e-b6a5-ae2471796375',
          founder_id: 'da8f8cc2-a622-4d24-9b3f-e136f1b4225b',
        }),
      });

      if (response.ok) {
        setStatus('success');
        e.currentTarget.reset();
      } else {
        setStatus('error');
      }
    } catch (error) {
      setStatus('error');
    }
  };

  return (
    <section id="contact" className="bg-slate-900 py-24 md:py-32 relative overflow-hidden">
      {/* Subtle decorative elements */}
      <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-slate-700 to-transparent" />
      <div className="absolute bottom-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-slate-700 to-transparent" />
      
      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="inline-block text-rose-500 font-semibold text-sm uppercase tracking-wider mb-4">Start Your Journey</span>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold tracking-tight leading-[1.2] text-white mb-6">Unlock Your Full Potential</h2>
          <p className="text-slate-400 text-lg md:text-xl max-w-2xl mx-auto">Join thousands who are already transforming their lives. Get early access to Ego and start building the best version of yourself.</p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="max-w-xl mx-auto"
        >
          {status === 'success' ? (
            <div className="bg-white rounded-2xl shadow-sm border border-slate-100 p-12 text-center">
              <div className="w-16 h-16 bg-rose-50 rounded-full flex items-center justify-center mx-auto mb-6">
                <CheckCircle className="w-8 h-8 text-rose-500" />
              </div>
              <h3 className="text-xl md:text-2xl font-semibold tracking-tight leading-[1.3] text-slate-900 mb-3">You&apos;re on the list!</h3>
              <p className="text-slate-500">We&apos;ll reach out soon with exclusive early access to Ego. Get ready to level up.</p>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="bg-white rounded-2xl shadow-sm border border-slate-100 p-8 md:p-10 space-y-6">
              <div className="space-y-2">
                <label htmlFor="name" className="block text-sm font-medium text-slate-900">Name</label>
                <input 
                  type="text" 
                  id="name" 
                  name="name" 
                  required 
                  className="w-full rounded-xl border border-slate-200 focus:ring-2 py-4 px-5 focus:border-rose-500 focus:ring-rose-500 focus:outline-none transition-all duration-300 text-slate-900 placeholder:text-slate-400" 
                  placeholder="Your name" 
                />
              </div>
              <div className="space-y-2">
                <label htmlFor="email" className="block text-sm font-medium text-slate-900">Email</label>
                <input 
                  type="email" 
                  id="email" 
                  name="email" 
                  required 
                  className="w-full rounded-xl border border-slate-200 focus:ring-2 py-4 px-5 focus:border-rose-500 focus:ring-rose-500 focus:outline-none transition-all duration-300 text-slate-900 placeholder:text-slate-400" 
                  placeholder="you@example.com" 
                />
              </div>
              <div className="space-y-2">
                <label htmlFor="phone" className="block text-sm font-medium text-slate-900">Phone <span className="text-slate-400 font-normal">(optional)</span></label>
                <input 
                  type="tel" 
                  id="phone" 
                  name="phone" 
                  className="w-full rounded-xl border border-slate-200 focus:ring-2 py-4 px-5 focus:border-rose-500 focus:ring-rose-500 focus:outline-none transition-all duration-300 text-slate-900 placeholder:text-slate-400" 
                  placeholder="+1 (555) 000-0000" 
                />
              </div>
              <button 
                type="submit" 
                disabled={status === 'loading'} 
                className="w-full bg-rose-500 hover:bg-rose-600 text-white font-semibold rounded-xl px-8 py-4 transition-all duration-300 shadow-sm hover:shadow-md disabled:opacity-70 disabled:cursor-not-allowed flex items-center justify-center group"
              >
                {status === 'loading' ? (
                  <span className="flex items-center">
                    <svg className="animate-spin -ml-1 mr-3 h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                      <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                      <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                    </svg>
                    Submitting...
                  </span>
                ) : (
                  <>
                    Get Early Access
                    <Send className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform duration-300" />
                  </>
                )}
              </button>
              
              {status === 'error' && (
                <p className="text-center text-red-500 text-sm">Something went wrong. Please try again.</p>
              )}
              
              <p className="text-center text-slate-400 text-sm">
                Join <span className="text-cyan-400 font-medium">10,000+</span> people already on the waitlist
              </p>
            </form>
          )}
        </motion.div>
      </div>
    </section>
  );
}