"use client";

import Link from "next/link";
import Image from "next/image";
import { SITE_CONFIG } from "@/utils/constants";

export default function Footer() {
  const currentYear = new Date().getFullYear();
  
  // Check if any social media links are provided
  const hasSocialMedia = !!(
    SITE_CONFIG.social.twitter ||
    SITE_CONFIG.social.facebook ||
    SITE_CONFIG.social.instagram
  );

  return (
    <footer className="relative bg-gradient-to-br from-slate-900 via-gray-900 to-slate-900 text-white overflow-hidden">
      {/* Animated Background Elements */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute inset-0" style={{
          backgroundImage: `radial-gradient(circle at 20% 50%, rgba(59, 130, 246, 0.3) 0%, transparent 50%),
                           radial-gradient(circle at 80% 80%, rgba(6, 182, 212, 0.3) 0%, transparent 50%)`,
        }}></div>
        <div className="absolute inset-0" style={{
          backgroundImage: `linear-gradient(rgba(255,255,255,0.05) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.05) 1px, transparent 1px)`,
          backgroundSize: '60px 60px'
        }}></div>
      </div>

      <div className="relative z-10 mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8">
        {/* Top Section */}
        <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-6 pb-10 border-b border-gray-800/50">
          {/* Company Info */}
          <div className="lg:col-span-1">
            <Link href="/" className="inline-block group mb-4">
              <Image 
                src="/assets/logos/EGTSoftwareLogo-03 (1).png" 
                alt={`${SITE_CONFIG.name} Logo`}
                width={200}
                height={60}
                className="h-12 w-auto object-contain object-left brightness-0 invert group-hover:scale-105 transition-all duration-300 filter"
              />
            </Link>
            <p className="text-sm text-gray-400 mb-6 leading-relaxed">
              Transform your business with cutting-edge IT analytics and data-driven solutions.
            </p>
            
            {/* Social Media Icons */}
            {hasSocialMedia && (
              <div className="flex items-center gap-2">
                {SITE_CONFIG.social.twitter && (
                  <a
                    href={SITE_CONFIG.social.twitter}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center justify-center w-9 h-9 rounded-lg bg-gray-800/50 text-gray-400 border border-gray-700/50 hover:bg-blue-500 hover:border-blue-500 hover:text-white transition-all"
                    aria-label="Twitter"
                  >
                    <svg className="h-4 w-4" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M23.953 4.57a10 10 0 01-2.825.775 4.958 4.958 0 002.163-2.723c-.951.555-2.005.959-3.127 1.184a4.92 4.92 0 00-8.384 4.482C7.69 8.095 4.067 6.13 1.64 3.162a4.822 4.822 0 00-.666 2.475c0 1.71.87 3.213 2.188 4.096a4.904 4.904 0 01-2.228-.616v.06a4.923 4.923 0 003.946 4.827 4.996 4.996 0 01-2.212.085 4.936 4.936 0 004.604 3.417 9.867 9.867 0 01-6.102 2.105c-.39 0-.779-.023-1.17-.067a13.995 13.995 0 007.557 2.209c9.053 0 13.998-7.496 13.998-13.985 0-.21 0-.42-.015-.63A9.935 9.935 0 0024 4.59z" />
                    </svg>
                  </a>
                )}
                {SITE_CONFIG.social.facebook && (
                  <a
                    href={SITE_CONFIG.social.facebook}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center justify-center w-9 h-9 rounded-lg bg-gray-800/50 text-gray-400 border border-gray-700/50 hover:bg-blue-600 hover:border-blue-600 hover:text-white transition-all"
                    aria-label="Facebook"
                  >
                    <svg className="h-4 w-4" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
                    </svg>
                  </a>
                )}
                {SITE_CONFIG.social.instagram && (
                  <a
                    href={SITE_CONFIG.social.instagram}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center justify-center w-9 h-9 rounded-lg bg-gray-800/50 text-gray-400 border border-gray-700/50 hover:bg-gradient-to-br hover:from-purple-600 hover:to-pink-600 hover:border-purple-500 hover:text-white transition-all"
                    aria-label="Instagram"
                  >
                    <svg className="h-4 w-4" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
                    </svg>
                  </a>
                )}
              </div>
            )}
          </div>

          {/* Contact Information */}
          <div className="lg:col-span-1">
            <h4 className="text-sm font-semibold uppercase tracking-wider mb-4 text-white">
              Contact Us
            </h4>
            <div className="space-y-3">
              {SITE_CONFIG.contact.email && (
                <a 
                  href={`mailto:${SITE_CONFIG.contact.email}`}
                  className="flex items-start gap-2 text-sm text-gray-400 hover:text-blue-400 transition-colors group"
                >
                  <svg 
                    className="w-4 h-4 text-blue-400 mt-0.5 flex-shrink-0" 
                    fill="none" 
                    stroke="currentColor" 
                    viewBox="0 0 24 24"
                  >
                    <path 
                      strokeLinecap="round" 
                      strokeLinejoin="round" 
                      strokeWidth={2} 
                      d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" 
                    />
                  </svg>
                  <span className="group-hover:underline break-words">{SITE_CONFIG.contact.email}</span>
                </a>
              )}
              
              <a 
                href="tel:9898817587"
                className="flex items-center gap-2 text-sm text-gray-400 hover:text-blue-400 transition-colors group"
              >
                <svg 
                  className="w-4 h-4 text-blue-400 flex-shrink-0" 
                  fill="none" 
                  stroke="currentColor" 
                  viewBox="0 0 24 24"
                >
                  <path 
                    strokeLinecap="round" 
                    strokeLinejoin="round" 
                    strokeWidth={2} 
                    d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" 
                  />
                </svg>
                <span className="group-hover:underline font-medium">+91 9898817587</span>
              </a>
              
              <div className="flex items-start gap-2 text-sm text-gray-400">
                <svg 
                  className="w-4 h-4 text-blue-400 mt-0.5 flex-shrink-0" 
                  fill="none" 
                  stroke="currentColor" 
                  viewBox="0 0 24 24"
                >
                  <path 
                    strokeLinecap="round" 
                    strokeLinejoin="round" 
                    strokeWidth={2} 
                    d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" 
                  />
                  <path 
                    strokeLinecap="round" 
                    strokeLinejoin="round" 
                    strokeWidth={2} 
                    d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" 
                  />
                </svg>
                <div className="leading-relaxed">
                  <div>E-1203, Titanium City Centre Business Park,</div>
                  <div>100 Feet Anand Nagar Road, Satellite,</div>
                  <div>Jodhpur Village, Ahmedabad,</div>
                  <div>Gujarat - 380015</div>
                </div>
              </div>
            </div>
          </div>

          {/* Quick Links */}
          <div className="lg:col-span-1">
            <h4 className="text-sm font-semibold uppercase tracking-wider mb-4 text-white">
              Quick Links
            </h4>
            <ul className="space-y-2.5">
              {[
                { name: 'Home', href: '/' },
                { name: 'About Us', href: '/about' },
                { name: 'Services', href: '/services' },
                { name: 'Blog', href: '/blog' },
                { name: 'Contact', href: '/contact' }
              ].map((link) => (
                <li key={link.name}>
                  <Link 
                    href={link.href} 
                    className="text-sm text-gray-400 hover:text-blue-400 transition-colors"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Services & Resources */}
          <div className="lg:col-span-1">
            <h4 className="text-sm font-semibold uppercase tracking-wider mb-4 text-white">
              Services
            </h4>
            <ul className="space-y-2.5 mb-6">
              {[
                { name: 'Business Intelligence', id: 'business-intelligence' },
                { name: 'Data Analytics', id: 'data-analytics' },
                { name: 'IT Consulting', id: 'it-consulting' },
                { name: 'Cloud Solutions', id: 'cloud-solutions' }
              ].map((service) => (
                <li key={service.id}>
                  <Link 
                    href={`/services/${service.id}`} 
                    className="text-sm text-gray-400 hover:text-blue-400 transition-colors"
                  >
                    {service.name}
                  </Link>
                </li>
              ))}
              <li>
                <Link 
                  href="/services" 
                  className="text-sm text-gray-400 hover:text-blue-400 transition-colors"
                >
                  View All Service
                </Link>
              </li>
            </ul>
            
            <h4 className="text-sm font-semibold uppercase tracking-wider mb-4 text-white">
              Resources
            </h4>
            <ul className="space-y-2.5">
              {[
                { name: 'Blog', href: '/blog' },
                { name: 'Testimonials', href: '/testimonials' },
                { name: 'Support', href: '/support' },
              ].map((link) => (
                <li key={link.name}>
                  <Link 
                    href={link.href} 
                    className="text-sm text-gray-400 hover:text-blue-400 transition-colors"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Solutions */}
          <div className="lg:col-span-1">
            <h4 className="text-sm font-semibold uppercase tracking-wider mb-4 text-white">
              Solutions
            </h4>
            <ul className="space-y-2.5">
              <li>
                <Link 
                  href="/industries" 
                  className="text-sm text-gray-400 hover:text-blue-400 transition-colors"
                >
                  Industries
                </Link>
              </li>
              <li>
                <Link 
                  href="/case-studies" 
                  className="text-sm text-gray-400 hover:text-blue-400 transition-colors"
                >
                  Case Studies
                </Link>
              </li>
            </ul>
          </div>

          {/* Branches */}
          <div className="lg:col-span-1">
            <h4 className="text-sm font-semibold uppercase tracking-wider mb-4 text-white">
              Branches
            </h4>
            <ul className="space-y-2.5">
              <li>
              <span className="text-sm text-gray-400">Vadodara</span>
              </li>
              <li>
                <span className="text-sm text-gray-400">Pune</span>
              </li>
              <li>
                <span className="text-sm text-gray-400">Mumbai</span>
              </li>
              <li>
                <span className="text-sm text-gray-400">Kolkata</span>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="pt-8">
          <div className="flex flex-col md:flex-row items-center justify-between gap-4">
            {/* Copyright */}
            <div className="text-center md:text-left">
              <p className="text-sm text-gray-400">
                © {SITE_CONFIG.establishedYear}–{currentYear} <span className="font-semibold text-white">{SITE_CONFIG.name}</span>. All rights reserved.
              </p>
            </div>
            
            {/* Legal Links */}
            <div className="flex items-center gap-6">
              <Link href="/privacy" className="text-sm text-gray-400 hover:text-blue-400 transition-colors">
                Privacy Policy
              </Link>
              <Link href="/terms" className="text-sm text-gray-400 hover:text-blue-400 transition-colors">
                Terms of Service
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
