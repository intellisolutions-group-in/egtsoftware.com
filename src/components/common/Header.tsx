"use client";

import Link from "next/link";
import Image from "next/image";
import { useState, useEffect } from "react";
import { usePathname } from "next/navigation";
import { SITE_CONFIG } from "@/utils/constants";

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);
  const [dropdownTimeout, setDropdownTimeout] = useState<NodeJS.Timeout | null>(null);
  const [mobileOpenDropdowns, setMobileOpenDropdowns] = useState<Set<string>>(new Set());
  const pathname = usePathname();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    if (isMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    return () => {
      document.body.style.overflow = '';
    };
  }, [isMenuOpen]);

  const handleDropdownEnter = (name: string) => {
    if (dropdownTimeout) {
      clearTimeout(dropdownTimeout);
    }
    setActiveDropdown(name);
  };

  const handleDropdownLeave = () => {
    const timeout = setTimeout(() => {
      setActiveDropdown(null);
    }, 150);
    setDropdownTimeout(timeout);
  };

  const toggleMobileDropdown = (name: string) => {
    setMobileOpenDropdowns(prev => {
      const newSet = new Set(prev);
      if (newSet.has(name)) {
        newSet.delete(name);
      } else {
        newSet.add(name);
      }
      return newSet;
    });
  };

  const navigation = [
    { name: "Home", href: "/" },
    { name: "About", href: "/about" },
    { 
      name: "Services", 
      href: "#",
      dropdown: [
        { name: "All Services", href: "/services" },
        ...SITE_CONFIG.services.map((service) => ({
          name: service.name,
          href: `/services/${service.id}`,
        }))
      ]
    },
    { 
      name: "Solutions", 
      href: "#",
      dropdown: [
        { name: "Industries", href: "/industries" },
        { name: "Case Studies", href: "/case-studies" },
      ]
    },
    { 
      name: "Resources", 
      href: "#",
      dropdown: [
        { name: "Blog", href: "/blog" },
        { name: "Testimonials", href: "/testimonials" },
        { name: "Support", href: "/support" },
      ]
    },
    { name: "Contact", href: "/contact" },
  ];

  return (
    <header 
      className={`fixed top-0 left-0 right-0 z-50 w-full transition-all duration-300 ${
        scrolled 
          ? "bg-white shadow-lg border-b border-gray-200" 
          : "bg-white/95 backdrop-blur-md"
      }`}
    >
      <nav className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex h-20 items-center justify-between">
          {/* Logo */}
          <Link 
            href="/" 
            className="flex items-center space-x-3 group"
          >
            <Image 
              src="/assets/logos/EGTSoftwareLogo-02 (1).png" 
              alt={`${SITE_CONFIG.name} Logo`}
              width={150}
              height={60}
              className="h-12 w-auto group-hover:scale-105 transition-all duration-300"
            />
          </Link>

          {/* Desktop Navigation - Moved to Right */}
          <div className="hidden lg:flex items-center space-x-1">
              {navigation.map((item) => {
                let isActive = pathname === item.href || (item.href !== "/" && pathname?.startsWith(item.href));
                
                // Special handling for Services dropdown - check if on service pages
                if (item.name === "Services" && (pathname === "/services" || pathname?.startsWith("/services/"))) {
                  isActive = true;
                }
                
                const hasDropdown = 'dropdown' in item && item.dropdown;
                
                return (
                  <div 
                    key={item.name}
                    className="relative"
                    onMouseEnter={() => hasDropdown && handleDropdownEnter(item.name)}
                    onMouseLeave={() => hasDropdown && handleDropdownLeave()}
                  >
                    {hasDropdown ? (
                      <button
                        className={`px-4 py-2 text-sm font-semibold text-gray-700 hover:text-blue-600 hover:bg-blue-50 rounded-lg transition-all flex items-center gap-1 ${
                          isActive ? 'text-blue-600 underline decoration-2 decoration-blue-600 underline-offset-4' : ''
                        }`}
                      >
                        {item.name}
                        <svg className={`w-4 h-4 transition-transform ${activeDropdown === item.name ? 'rotate-180' : ''}`} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                        </svg>
                      </button>
                    ) : (
                      <Link
                        href={item.href}
                        className={`px-4 py-2 text-sm font-semibold text-gray-700 hover:text-blue-600 hover:bg-blue-50 rounded-lg transition-all ${
                          isActive ? 'text-blue-600 underline decoration-2 decoration-blue-600 underline-offset-4' : ''
                        }`}
                      >
                        {item.name}
                      </Link>
                    )}
                    
                    {/* Dropdown Menu */}
                    {hasDropdown && activeDropdown === item.name && (
                      <div 
                        className="absolute top-full left-0 mt-1 w-56 bg-white rounded-lg shadow-xl border border-gray-200 py-2 z-[60] animate-in fade-in slide-in-from-top-2 duration-200"
                        onMouseEnter={() => handleDropdownEnter(item.name)}
                        onMouseLeave={() => handleDropdownLeave()}
                      >
                        {item.dropdown?.map((dropItem) => {
                          const isDropdownItemActive = pathname === dropItem.href || pathname?.startsWith(`${dropItem.href}/`);
                          return (
                            <Link
                              key={dropItem.name}
                              href={dropItem.href}
                              className={`block px-4 py-2.5 text-sm font-medium transition-all ${
                                isDropdownItemActive 
                                  ? 'text-blue-600 bg-blue-50 underline decoration-2 decoration-blue-600 underline-offset-4 font-semibold' 
                                  : 'text-gray-700 hover:text-blue-600 hover:bg-blue-50'
                              }`}
                              onClick={() => setActiveDropdown(null)}
                            >
                              {dropItem.name}
                            </Link>
                          );
                        })}
                      </div>
                    )}
                  </div>
                );
              })}
          </div>

          {/* Mobile menu button */}
          <div className="lg:hidden">
            <button
              onClick={() => {
                setIsMenuOpen(!isMenuOpen);
                if (isMenuOpen) {
                  setMobileOpenDropdowns(new Set());
                }
              }}
              className="inline-flex items-center justify-center rounded-lg p-2.5 text-gray-700 hover:bg-blue-50 hover:text-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500 transition-all"
              aria-expanded={isMenuOpen}
              aria-label="Toggle menu"
            >
              {!isMenuOpen ? (
                <svg
                  className="h-6 w-6"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth="2"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"
                  />
                </svg>
              ) : (
                <svg
                  className="h-6 w-6"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth="2"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M6 18L18 6M6 6l12 12"
                  />
                </svg>
              )}
            </button>
          </div>
        </div>

        {/* Mobile menu - Full Screen Overlay */}
        <div 
          className={`fixed inset-0 z-[60] lg:hidden transition-all duration-300 ${
            isMenuOpen 
              ? 'opacity-100 pointer-events-auto' 
              : 'opacity-0 pointer-events-none'
          }`}
        >
          {/* Backdrop */}
          <div 
            className={`absolute inset-0 bg-black/50 backdrop-blur-sm transition-opacity duration-300 ${
              isMenuOpen ? 'opacity-100' : 'opacity-0'
            }`}
            onClick={() => {
              setIsMenuOpen(false);
              setMobileOpenDropdowns(new Set());
            }}
          />
          
          {/* Menu Panel */}
          <div 
            className={`absolute right-0 top-0 bottom-0 w-full sm:w-80 bg-white shadow-2xl transform transition-transform duration-300 ease-out flex flex-col h-screen ${
              isMenuOpen ? 'translate-x-0' : 'translate-x-full'
            }`}
          >
            {/* Close Button */}
            <div className="flex items-center justify-between px-6 py-5 border-b border-gray-200 flex-shrink-0">
              <h2 className="text-lg font-bold text-gray-900">Menu</h2>
              <button
                onClick={() => {
                  setIsMenuOpen(false);
                  setMobileOpenDropdowns(new Set());
                }}
                className="p-2 rounded-lg text-gray-600 hover:bg-gray-100 hover:text-gray-900 transition-all"
                aria-label="Close menu"
              >
                <svg
                  className="h-6 w-6"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth="2"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M6 18L18 6M6 6l12 12"
                  />
                </svg>
              </button>
            </div>

            {/* Navigation Items */}
            <div className="flex-1 overflow-y-auto px-4 py-6 space-y-1">
              {navigation.map((item) => {
                let isActive = pathname === item.href || (item.href !== "/" && pathname?.startsWith(item.href));
                
                // Special handling for Services dropdown - check if on service pages
                if (item.name === "Services" && (pathname === "/services" || pathname?.startsWith("/services/"))) {
                  isActive = true;
                }
                
                const hasDropdown = 'dropdown' in item && item.dropdown;
                const isMobileDropdownOpen = mobileOpenDropdowns.has(item.name);
                
                if (hasDropdown) {
                  return (
                    <div key={item.name} className="mb-1">
                      <button
                        onClick={() => toggleMobileDropdown(item.name)}
                        className={`w-full flex items-center justify-between px-4 py-3 text-base font-semibold rounded-lg transition-all ${
                          isActive 
                            ? 'text-blue-600 bg-blue-50 underline decoration-2 decoration-blue-600 underline-offset-4' 
                            : 'text-gray-700 hover:bg-gray-50 hover:text-blue-600'
                        }`}
                      >
                        <span>{item.name}</span>
                        <svg 
                          className={`w-5 h-5 transition-transform duration-200 ${isMobileDropdownOpen ? 'rotate-180' : ''}`} 
                          fill="none" 
                          stroke="currentColor" 
                          viewBox="0 0 24 24"
                        >
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                        </svg>
                      </button>
                      {isMobileDropdownOpen && (
                        <div className="mt-1 space-y-1 animate-in fade-in slide-in-from-top-2 duration-200">
                          {item.dropdown?.map((dropItem) => {
                            const isDropdownItemActive = pathname === dropItem.href || pathname?.startsWith(`${dropItem.href}/`);
                            return (
                              <Link
                                key={dropItem.name}
                                href={dropItem.href}
                                className={`block px-6 py-2.5 text-sm font-medium rounded-lg transition-all ${
                                  isDropdownItemActive 
                                    ? 'text-blue-600 bg-blue-50 underline decoration-2 decoration-blue-600 underline-offset-4 font-semibold' 
                                    : 'text-gray-700 hover:bg-blue-50 hover:text-blue-600'
                                }`}
                                onClick={() => setIsMenuOpen(false)}
                              >
                                {dropItem.name}
                              </Link>
                            );
                          })}
                        </div>
                      )}
                    </div>
                  );
                }
                
                return (
                  <Link
                    key={item.name}
                    href={item.href}
                    className={`block px-4 py-3 text-base font-semibold rounded-lg transition-all ${
                      isActive 
                        ? 'text-blue-600 bg-blue-50' 
                        : 'text-gray-700 hover:bg-gray-50 hover:text-blue-600'
                    }`}
                    onClick={() => setIsMenuOpen(false)}
                  >
                    {item.name}
                  </Link>
                );
              })}
            </div>

            {/* Contact CTA Button */}
            <div className="px-4 pb-6 pt-4 border-t border-gray-200 flex-shrink-0">
              <Link
                href="/contact"
                className="block w-full px-6 py-4 text-base font-semibold text-center text-white bg-gradient-to-r from-blue-600 to-cyan-600 hover:from-blue-700 hover:to-cyan-700 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-[1.02]"
                onClick={() => setIsMenuOpen(false)}
              >
                <span className="flex items-center justify-center gap-2">
                  Contact Us
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                  </svg>
                </span>
              </Link>
            </div>
          </div>
        </div>
      </nav>
    </header>
  );
}
