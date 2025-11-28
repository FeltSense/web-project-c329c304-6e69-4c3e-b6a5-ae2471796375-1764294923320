'use client';

import Link from 'next/link';
import { Twitter, Instagram, Linkedin, Heart } from 'lucide-react';

const footerLinks = {
  company: [
    { name: 'About', href: '#' },
    { name: 'Services', href: '#services' },
    { name: 'Testimonials', href: '#testimonials' },
  ],
  support: [
    { name: 'Contact', href: '#contact' },
    { name: 'Pricing', href: '#pricing' },
    { name: 'FAQ', href: '#' },
  ],
  resources: [
    { name: 'Blog', href: '#' },
    { name: 'Community', href: '#' },
    { name: 'Growth Tips', href: '#' },
  ],
};

const socialLinks = [
  { name: 'Twitter', href: '#', icon: Twitter },
  { name: 'Instagram', href: '#', icon: Instagram },
  { name: 'LinkedIn', href: '#', icon: Linkedin },
];

export default function Footer() {
  return (
    <footer className="bg-slate-950 pt-24 pb-12">
      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
        {/* Top Section with CTA */}
        <div className="text-center pb-16 border-b border-slate-800">
          <h3 className="text-3xl md:text-4xl font-bold tracking-tight leading-[1.1] text-white mb-4">
            Ready to discover your true self?
          </h3>
          <p className="text-slate-500 text-lg mb-8 max-w-xl mx-auto">
            Join thousands who are already on their journey to self-improvement and authentic connection.
          </p>
          <a 
            href="#contact" 
            className="inline-flex items-center gap-2 bg-rose-500 hover:bg-rose-600 text-white font-semibold rounded-xl px-8 py-4 transition-all duration-300 shadow-sm hover:shadow-md"
          >
            Start Your Journey
            <Heart className="w-5 h-5" />
          </a>
        </div>

        {/* Main Footer Grid */}
        <div className="grid grid-cols-2 md:grid-cols-5 gap-8 py-16">
          {/* Brand Column - Spans 2 columns */}
          <div className="col-span-2">
            <Link href="/" className="text-2xl font-bold tracking-tight text-white inline-block mb-4">
              Ego
            </Link>
            <p className="text-slate-500 mb-6 max-w-xs leading-relaxed">
              Embrace your authentic self. Build confidence. Connect with like-minded individuals on your personal growth journey.
            </p>
            <div className="flex items-center gap-4">
              {socialLinks.map((social) => (
                <a 
                  key={social.name} 
                  href={social.href} 
                  className="w-10 h-10 rounded-full bg-slate-800 flex items-center justify-center text-slate-400 hover:bg-rose-500 hover:text-white transition-all duration-300"
                  aria-label={social.name}
                >
                  <social.icon className="w-5 h-5" />
                </a>
              ))}
            </div>
          </div>

          {/* Company Links */}
          <div className="flex flex-col gap-4">
            <h4 className="text-sm font-semibold text-white uppercase tracking-wider mb-2">Company</h4>
            {footerLinks.company.map((link) => (
              <Link 
                key={link.name} 
                href={link.href} 
                className="text-slate-500 hover:text-rose-500 transition-colors duration-300"
              >
                {link.name}
              </Link>
            ))}
          </div>

          {/* Support Links */}
          <div className="flex flex-col gap-4">
            <h4 className="text-sm font-semibold text-white uppercase tracking-wider mb-2">Support</h4>
            {footerLinks.support.map((link) => (
              <Link 
                key={link.name} 
                href={link.href} 
                className="text-slate-500 hover:text-rose-500 transition-colors duration-300"
              >
                {link.name}
              </Link>
            ))}
          </div>

          {/* Resources Links */}
          <div className="flex flex-col gap-4">
            <h4 className="text-sm font-semibold text-white uppercase tracking-wider mb-2">Resources</h4>
            {footerLinks.resources.map((link) => (
              <Link 
                key={link.name} 
                href={link.href} 
                className="text-slate-500 hover:text-rose-500 transition-colors duration-300"
              >
                {link.name}
              </Link>
            ))}
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 border-t border-slate-800 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-slate-500 text-sm">
            &copy; {new Date().getFullYear()} Ego. All rights reserved.
          </p>
          <div className="flex items-center gap-6 text-sm">
            <Link href="#" className="text-slate-500 hover:text-rose-500 transition-colors duration-300">
              Privacy Policy
            </Link>
            <Link href="#" className="text-slate-500 hover:text-rose-500 transition-colors duration-300">
              Terms of Service
            </Link>
            <Link href="#" className="text-slate-500 hover:text-rose-500 transition-colors duration-300">
              Cookies
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}