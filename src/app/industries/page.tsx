import Header from "@/components/common/Header";
import Footer from "@/components/common/Footer";
import { generateSEO } from "@/components/common/SEO";
import { SITE_CONFIG } from "@/utils/constants";
import Link from "next/link";
import React from "react";

export const metadata = generateSEO({
  title: "Industries We Serve",
  description: `${SITE_CONFIG.name} provides specialized IT analytics and business intelligence solutions across multiple industries including finance, healthcare, retail, and manufacturing.`,
  canonical: "/industries",
});

// Industry Icons Component
const IndustryIcon = ({ type }: { type: string }) => {
  const icons: Record<string, React.ReactElement> = {
    financial: (
      <svg className="w-12 h-12" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
      </svg>
    ),
    healthcare: (
      <svg className="w-12 h-12" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
      </svg>
    ),
    retail: (
      <svg className="w-12 h-12" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z" />
      </svg>
    ),
    manufacturing: (
      <svg className="w-12 h-12" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M19.428 15.428a2 2 0 00-1.022-.547l-2.387-.477a6 6 0 00-3.86.517l-.318.158a6 6 0 01-3.86.517L6.05 15.21a2 2 0 00-1.806.547M8 4h8l-1 1v5.172a2 2 0 00.586 1.414l5 5c1.26 1.26.367 3.414-1.415 3.414H4.828c-1.782 0-2.674-2.154-1.414-3.414l5-5A2 2 0 009 10.172V5L8 4z" />
      </svg>
    ),
    telecom: (
      <svg className="w-12 h-12" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M8.111 16.404a5.5 5.5 0 017.778 0M12 20h.01m-7.08-7.071c3.904-3.905 10.236-3.905 14.141 0M1.394 9.393c5.857-5.857 15.355-5.857 21.213 0" />
      </svg>
    ),
    energy: (
      <svg className="w-12 h-12" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M13 10V3L4 14h7v7l9-11h-7z" />
      </svg>
    ),
    logistics: (
      <svg className="w-12 h-12" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M5 8h14M5 8a2 2 0 110-4h14a2 2 0 110 4M5 8v10a2 2 0 002 2h10a2 2 0 002-2V8m-9 4h4" />
      </svg>
    ),
    education: (
      <svg className="w-12 h-12" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
      </svg>
    ),
    realestate: (
      <svg className="w-12 h-12" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
      </svg>
    ),
  };
  return icons[type] || icons.financial;
};

export default function IndustriesPage() {
  const industries = [
    {
      name: "Financial Services",
      iconType: "financial",
      description: "We help financial institutions navigate complex regulatory landscapes while leveraging data-driven insights. Our solutions empower banks, investment firms, and insurance companies to make smarter decisions, reduce operational risks, and deliver superior customer experiences in an increasingly digital marketplace.",
      services: [
        "Risk Assessment & Management",
        "Fraud Detection Systems",
        "Regulatory Compliance Reporting",
        "Investment Portfolio Analytics",
        "Customer Behavior Analysis"
      ],
      stats: { clients: "50+", improvement: "32%" },
      color: "blue"
    },
    {
      name: "Healthcare",
      iconType: "healthcare",
      description: "Healthcare providers face unique challenges in balancing patient care with operational efficiency. We deliver secure analytics that help hospitals, clinics, and medical practices improve patient outcomes, streamline operations, and maintain the highest standards of data security and privacy.",
      services: [
        "Patient Data Management",
        "Clinical Decision Support",
        "Hospital Operations Analytics",
        "Medical Equipment Tracking",
        "Healthcare Compliance Monitoring"
      ],
      stats: { clients: "75+", improvement: "45%" },
      color: "green"
    },
    {
      name: "Retail & E-commerce",
      iconType: "retail",
      description: "In today's competitive retail landscape, understanding your customers is everything. We provide retailers and e-commerce businesses with actionable insights into buying patterns, inventory trends, and pricing strategies that drive sales growth and enhance the shopping experience across all channels.",
      services: [
        "Inventory Optimization",
        "Customer Journey Analytics",
        "Pricing Strategy Analysis",
        "Supply Chain Management",
        "Sales Forecasting"
      ],
      stats: { clients: "120+", improvement: "56%" },
      color: "purple"
    },
    {
      name: "Manufacturing",
      iconType: "manufacturing",
      description: "Manufacturing success depends on efficiency, quality, and adaptability. Our IoT-enabled analytics solutions help manufacturers optimize production processes, predict equipment failures before they happen, and maintain quality standards while reducing waste and operational costs.",
      services: [
        "Production Line Optimization",
        "Predictive Maintenance",
        "Quality Control Analytics",
        "Supply Chain Visibility",
        "Equipment Performance Monitoring"
      ],
      stats: { clients: "65+", improvement: "47%" },
      color: "orange"
    },
    {
      name: "Telecommunications",
      iconType: "telecom",
      description: "Telecom companies operate in a fast-paced, technology-driven environment. We provide network operators and service providers with real-time performance insights, customer behavior analytics, and infrastructure optimization tools that keep networks running smoothly and customers satisfied.",
      services: [
        "Network Performance Monitoring",
        "Customer Churn Prediction",
        "Service Quality Analytics",
        "Revenue Optimization",
        "Infrastructure Planning"
      ],
      stats: { clients: "40+", improvement: "38%" },
      color: "cyan"
    },
    {
      name: "Energy & Utilities",
      iconType: "energy",
      description: "The energy sector is transforming rapidly with smart grids and renewable sources. We assist utility companies in managing complex distribution networks, forecasting demand patterns, and implementing sustainable practices that balance operational efficiency with environmental responsibility.",
      services: [
        "Smart Grid Analytics",
        "Energy Consumption Forecasting",
        "Asset Performance Management",
        "Demand Response Planning",
        "Sustainability Reporting"
      ],
      stats: { clients: "30+", improvement: "42%" },
      color: "yellow"
    },
    {
      name: "Transportation & Logistics",
      iconType: "logistics",
      description: "Getting products from point A to point B efficiently requires sophisticated coordination. Our logistics analytics help transportation companies optimize delivery routes, manage fleet operations, reduce fuel costs, and provide customers with accurate, real-time tracking information.",
      services: [
        "Route Optimization",
        "Fleet Management Analytics",
        "Warehouse Operations",
        "Delivery Performance Tracking",
        "Supply Chain Visibility"
      ],
      stats: { clients: "55+", improvement: "35%" },
      color: "red"
    },
    {
      name: "Education",
      iconType: "education",
      description: "Educational institutions are embracing data to improve learning outcomes and operational effectiveness. We work with schools, universities, and training organizations to understand student performance trends, allocate resources efficiently, and create learning environments that foster success.",
      services: [
        "Student Performance Analytics",
        "Resource Allocation Optimization",
        "Enrollment Forecasting",
        "Learning Management Systems",
        "Institutional Effectiveness Reporting"
      ],
      stats: { clients: "45+", improvement: "40%" },
      color: "indigo"
    },
    {
      name: "Real Estate",
      iconType: "realestate",
      description: "Real estate decisions involve significant capital and long-term commitments. We provide property developers, investors, and management companies with market intelligence, valuation insights, and portfolio performance data that support confident, informed investment and management decisions.",
      services: [
        "Property Valuation Analytics",
        "Market Trend Analysis",
        "Investment Performance Tracking",
        "Tenant Management Systems",
        "Portfolio Optimization"
      ],
      stats: { clients: "35+", improvement: "33%" },
      color: "pink"
    }
  ];

  const colorClasses = {
    blue: "from-blue-500 to-cyan-500",
    green: "from-green-500 to-emerald-500",
    purple: "from-purple-500 to-pink-500",
    orange: "from-orange-500 to-red-500",
    cyan: "from-cyan-500 to-blue-500",
    yellow: "from-yellow-500 to-orange-500",
    red: "from-red-500 to-pink-500",
    indigo: "from-indigo-500 to-purple-500",
    pink: "from-pink-500 to-rose-500"
  };

  return (
    <>
      <Header />
      <main className="min-h-screen pt-20">
        {/* Hero Section */}
        <section className="relative bg-gradient-to-br from-slate-900 via-blue-900 to-slate-900 py-24 overflow-hidden">
          <div className="absolute inset-0 opacity-20">
            <div className="absolute inset-0" style={{
              backgroundImage: `radial-gradient(circle at 2px 2px, rgba(255,255,255,0.15) 1px, transparent 0)`,
              backgroundSize: '48px 48px'
            }}></div>
          </div>

          <div className="relative z-10 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="text-center max-w-4xl mx-auto">
              <div className="inline-block px-4 py-2 bg-blue-500/20 backdrop-blur-sm rounded-full text-blue-200 text-sm font-semibold mb-6">
                Industries We Serve
              </div>
              <h1 className="text-5xl md:text-6xl font-black text-white mb-6 leading-tight">
                Specialized Solutions for{" "}
                <span className="bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent">
                  Every Industry
                </span>
              </h1>
              <p className="text-xl md:text-2xl text-blue-100 leading-relaxed">
                Industry-specific expertise to address your unique business challenges
              </p>
            </div>
          </div>
        </section>

        {/* Industries Grid */}
        <section className="py-20 bg-gray-50">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {industries.map((industry, idx) => (
                <div 
                  key={idx} 
                  className="group relative bg-white rounded-3xl overflow-hidden transition-all duration-500 hover:shadow-2xl border border-gray-100"
                  style={{
                    boxShadow: '0 4px 6px -1px rgba(0, 0, 0, 0.05), 0 2px 4px -1px rgba(0, 0, 0, 0.03)'
                  }}
                >
                  {/* Colored Top Border */}
                  <div className={`h-1.5 bg-gradient-to-r ${colorClasses[industry.color as keyof typeof colorClasses]}`}></div>
                  
                  {/* Card Content */}
                  <div className="p-8">
                    {/* Icon and Title Section */}
                    <div className="flex items-start gap-4 mb-6">
                      <div className={`flex-shrink-0 w-16 h-16 bg-gradient-to-br ${colorClasses[industry.color as keyof typeof colorClasses]} rounded-2xl flex items-center justify-center shadow-lg group-hover:shadow-xl transition-all duration-300`}>
                        <div className="text-white">
                          <IndustryIcon type={industry.iconType} />
                        </div>
                      </div>
                      <div className="flex-1 min-w-0">
                        <h3 className="text-xl font-bold text-gray-900 mb-2 group-hover:text-blue-600 transition-colors">
                          {industry.name}
                        </h3>
                        <div className="flex flex-wrap gap-2 text-xs">
                          <span className="inline-flex items-center gap-1 px-2.5 py-1 bg-blue-50 text-blue-700 rounded-full font-medium">
                            <svg className="w-3.5 h-3.5" fill="currentColor" viewBox="0 0 20 20">
                              <path d="M9 6a3 3 0 11-6 0 3 3 0 016 0zM17 6a3 3 0 11-6 0 3 3 0 016 0zM12.93 17c.046-.327.07-.66.07-1a6.97 6.97 0 00-1.5-4.33A5 5 0 0119 16v1h-6.07zM6 11a5 5 0 015 5v1H1v-1a5 5 0 015-5z" />
                            </svg>
                            {industry.stats.clients}
                          </span>
                          <span className="inline-flex items-center gap-1 px-2.5 py-1 bg-green-50 text-green-700 rounded-full font-medium">
                            <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" />
                            </svg>
                            +{industry.stats.improvement}
                          </span>
                        </div>
                      </div>
                    </div>

                    {/* Description */}
                    <p className="text-gray-600 text-sm leading-relaxed mb-6">
                      {industry.description}
                    </p>

                    {/* Divider */}
                    <div className="h-px bg-gradient-to-r from-transparent via-gray-200 to-transparent mb-6"></div>

                    {/* Services List */}
                    <div className="mb-6">
                      <h4 className="text-xs font-semibold text-gray-500 uppercase tracking-wider mb-3 flex items-center gap-2">
                        <svg className="w-4 h-4 text-blue-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-6 9l2 2 4-4" />
                        </svg>
                        Key Services
                      </h4>
                      <ul className="space-y-2">
                        {industry.services.map((service, sidx) => (
                          <li key={sidx} className="flex items-start gap-2.5 text-sm text-gray-700">
                            <svg className="w-4 h-4 text-green-500 flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" />
                            </svg>
                            <span>{service}</span>
                          </li>
                        ))}
                      </ul>
                    </div>

                    {/* CTA Button */}
                    <Link href="/contact" className="block">
                      <button className={`w-full group/btn relative px-6 py-3.5 bg-gradient-to-r ${colorClasses[industry.color as keyof typeof colorClasses]} text-white font-semibold rounded-xl overflow-hidden transition-all duration-300 hover:shadow-lg hover:scale-[1.02]`}>
                        <span className="relative z-10 flex items-center justify-center gap-2">
                          Get Started
                          <svg className="w-4 h-4 group-hover/btn:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                          </svg>
                        </span>
                        <div className="absolute inset-0 bg-black opacity-0 group-hover/btn:opacity-10 transition-opacity"></div>
                      </button>
                    </Link>
                  </div>

                  {/* Hover Effect - Corner Accent */}
                  <div className={`absolute top-0 right-0 w-32 h-32 bg-gradient-to-br ${colorClasses[industry.color as keyof typeof colorClasses]} opacity-0 group-hover:opacity-5 blur-3xl transition-opacity duration-500 pointer-events-none`}></div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Why Choose Us */}
        <section className="py-20 bg-white">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <div className="inline-block px-4 py-2 bg-blue-50 text-blue-700 rounded-full text-sm font-semibold mb-4">
                Our Approach
              </div>
              <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
                Why Businesses Trust Our Expertise
              </h2>
              <p className="text-lg text-gray-600 max-w-3xl mx-auto leading-relaxed">
                Every industry has its own challenges and opportunities. We&apos;ve spent years learning what makes each sector unique, and we bring that specialized knowledge to every project we undertake.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
              <div className="text-center group">
                <div className="relative inline-block mb-6">
                  <div className="absolute inset-0 bg-gradient-to-br from-blue-500 to-cyan-500 rounded-2xl blur-xl opacity-20 group-hover:opacity-30 transition-opacity"></div>
                  <div className="relative flex items-center justify-center w-20 h-20 bg-gradient-to-br from-blue-500 to-cyan-500 rounded-2xl shadow-lg group-hover:shadow-2xl transition-all transform group-hover:scale-110 duration-300">
                    <svg className="w-10 h-10 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
                    </svg>
                  </div>
                </div>
                <h3 className="text-2xl font-bold text-gray-900 mb-4">Real-World Experience</h3>
                <p className="text-gray-600 leading-relaxed">
                  We&apos;ve worked alongside professionals in your industry for years, learning the intricacies of what you do. This hands-on experience means we understand your pain points and know how to address them effectively.
                </p>
              </div>

              <div className="text-center group">
                <div className="relative inline-block mb-6">
                  <div className="absolute inset-0 bg-gradient-to-br from-purple-500 to-pink-500 rounded-2xl blur-xl opacity-20 group-hover:opacity-30 transition-opacity"></div>
                  <div className="relative flex items-center justify-center w-20 h-20 bg-gradient-to-br from-purple-500 to-pink-500 rounded-2xl shadow-lg group-hover:shadow-2xl transition-all transform group-hover:scale-110 duration-300">
                    <svg className="w-10 h-10 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M11 4a2 2 0 114 0v1a1 1 0 001 1h3a1 1 0 011 1v3a1 1 0 01-1 1h-1a2 2 0 100 4h1a1 1 0 011 1v3a1 1 0 01-1 1h-3a1 1 0 01-1-1v-1a2 2 0 10-4 0v1a1 1 0 01-1 1H7a1 1 0 01-1-1v-3a1 1 0 00-1-1H4a2 2 0 110-4h1a1 1 0 001-1V7a1 1 0 011-1h3a1 1 0 001-1V4z" />
                    </svg>
                  </div>
                </div>
                <h3 className="text-2xl font-bold text-gray-900 mb-4">Solutions Built for You</h3>
                <p className="text-gray-600 leading-relaxed">
                  There&apos;s no one-size-fits-all in business intelligence. We take time to understand your specific workflows, goals, and constraints, then craft solutions that fit seamlessly into how your team already works.
                </p>
              </div>

              <div className="text-center group">
                <div className="relative inline-block mb-6">
                  <div className="absolute inset-0 bg-gradient-to-br from-green-500 to-emerald-500 rounded-2xl blur-xl opacity-20 group-hover:opacity-30 transition-opacity"></div>
                  <div className="relative flex items-center justify-center w-20 h-20 bg-gradient-to-br from-green-500 to-emerald-500 rounded-2xl shadow-lg group-hover:shadow-2xl transition-all transform group-hover:scale-110 duration-300">
                    <svg className="w-10 h-10 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                    </svg>
                  </div>
                </div>
                <h3 className="text-2xl font-bold text-gray-900 mb-4">Security You Can Trust</h3>
                <p className="text-gray-600 leading-relaxed">
                  Your data security isn&apos;t just a checkbox for us—it&apos;s fundamental to everything we build. We follow industry-specific compliance standards and implement robust security measures because protecting your information is protecting your business.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="relative py-24 overflow-hidden bg-gradient-to-br from-blue-600 via-cyan-600 to-blue-700">
          <div className="absolute inset-0 opacity-10">
            <div className="absolute inset-0" style={{
              backgroundImage: `radial-gradient(circle at 2px 2px, white 1px, transparent 0)`,
              backgroundSize: '32px 32px'
            }}></div>
          </div>

          {/* Animated Background Elements */}
          <div className="absolute top-20 left-10 w-72 h-72 bg-white/10 rounded-full blur-3xl"></div>
          <div className="absolute bottom-20 right-10 w-96 h-96 bg-cyan-400/10 rounded-full blur-3xl"></div>

          <div className="relative z-10 mx-auto max-w-4xl px-4 sm:px-6 lg:px-8 text-center">
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-white/20 backdrop-blur-sm rounded-full text-white text-sm font-semibold mb-6">
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
              </svg>
              Start Your Journey Today
            </div>
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6 leading-tight">
              Let&apos;s Talk About Your Industry Challenges
            </h2>
            <p className="text-xl md:text-2xl text-blue-50 mb-10 max-w-2xl mx-auto leading-relaxed">
              Every business is unique, and yours deserves solutions that truly understand your world. We&apos;re here to listen and help you succeed.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <Link href="/contact">
                <button className="group px-8 py-4 bg-white text-blue-600 font-bold rounded-xl shadow-2xl hover:bg-gray-50 hover:shadow-white/20 transition-all duration-300 transform hover:scale-105 flex items-center gap-3">
                  <span>Schedule a Consultation</span>
                  <svg className="w-5 h-5 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                  </svg>
                </button>
              </Link>
              <Link href="/about">
                <button className="group px-8 py-4 bg-transparent border-2 border-white text-white font-bold rounded-xl hover:bg-white/10 backdrop-blur-sm transition-all duration-300 transform hover:scale-105 flex items-center gap-3">
                  <span>Learn About Our Company</span>
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8h2a2 2 0 012 2v6a2 2 0 01-2 2h-2v4l-4-4H9a1.994 1.994 0 01-1.414-.586m0 0L11 14h4a2 2 0 002-2V6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2v4l.586-.586z" />
                  </svg>
                </button>
              </Link>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}

