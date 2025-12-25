import Header from "@/components/common/Header";
import Footer from "@/components/common/Footer";
import { generateSEO } from "@/components/common/SEO";
import { SITE_CONFIG } from "@/utils/constants";
import Breadcrumb from "@/components/common/Breadcrumb";
import Link from "next/link";

export const metadata = generateSEO({
  title: "Support & Help Center",
  description: `Get expert support from ${SITE_CONFIG.name}. Access our knowledge base, submit tickets, and get help with your IT analytics and BI solutions.`,
  canonical: "/support",
});

// SVG Icon Components
const TicketIcon = () => (
  <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 5v2m0 4v2m0 4v2M5 5a2 2 0 00-2 2v3a2 2 0 110 4v3a2 2 0 002 2h14a2 2 0 002-2v-3a2 2 0 110-4V7a2 2 0 00-2-2H5z" />
  </svg>
);

const EmailIcon = () => (
  <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
  </svg>
);

const BookIcon = () => (
  <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
  </svg>
);

const VideoIcon = () => (
  <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 10l4.553-2.276A1 1 0 0121 8.618v6.764a1 1 0 01-1.447.894L15 14M5 18h8a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v8a2 2 0 002 2z" />
  </svg>
);

const DocumentIcon = () => (
  <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
  </svg>
);

const ChatIcon = () => (
  <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8h2a2 2 0 012 2v6a2 2 0 01-2 2h-2v4l-4-4H9a1.994 1.994 0 01-1.414-.586m0 0L11 14h4a2 2 0 002-2V6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2v4l.586-.586z" />
  </svg>
);

export default function SupportPage() {
  const supportOptions = [
    {
      title: "Support Ticket System",
      description: "Submit a ticket and track your support requests",
      icon: <TicketIcon />,
      contact: "Submit via Contact Form",
      availability: "Response within 2 hours",
      color: "blue",
      gradient: "from-blue-500 to-blue-600"
    },
    {
      title: "Email Support",
      description: "Send us your questions and get detailed responses",
      icon: <EmailIcon />,
      contact: "info@egtsoftware.com",
      availability: "Response within 4 hours",
      color: "green",
      gradient: "from-green-500 to-green-600"
    },
  ];

  const faqs = [
    {
      category: "Getting Started",
      questions: [
        {
          q: "How do I get started with EGT Software services?",
          a: "Simply contact us for a free consultation. We'll assess your needs and provide a customized solution plan."
        },
        {
          q: "What information do I need to provide for the initial consultation?",
          a: "Basic information about your business, current data infrastructure, and goals. We'll guide you through the rest."
        },
        {
          q: "How long does implementation typically take?",
          a: "Implementation time varies from 2-12 weeks depending on solution complexity and scope."
        }
      ]
    },
    {
      category: "Technical Support",
      questions: [
        {
          q: "What are your support hours?",
          a: "We offer 24/7 support via our ticket system and email. Responses are provided promptly based on priority level."
        },
        {
          q: "How quickly will I get a response?",
          a: "Critical issues: Within 1 hour. High priority: Within 4 hours. Standard: Within 24 hours."
        },
        {
          q: "Do you provide on-site support?",
          a: "Yes, for enterprise clients we offer on-site support. Contact us to discuss your needs."
        }
      ]
    },
    {
      category: "Billing & Pricing",
      questions: [
        {
          q: "What payment methods do you accept?",
          a: "We accept credit cards, bank transfers, and purchase orders from corporate clients."
        },
        {
          q: "Can I upgrade or downgrade my plan?",
          a: "Yes, you can change your plan anytime. Changes take effect at the next billing cycle."
        },
        {
          q: "Do you offer refunds?",
          a: "We offer a 30-day money-back guarantee on all our services (terms and conditions apply)."
        }
      ]
    }
  ];

  const resourceLinks = [
    {
      title: "Knowledge Base",
      description: "Browse our comprehensive library of guides and articles",
      icon: <BookIcon />,
      link: "/resources",
      gradient: "from-indigo-500 to-purple-500"
    },
    {
      title: "Video Tutorials",
      description: "Watch step-by-step video guides",
      icon: <VideoIcon />,
      link: "/resources",
      gradient: "from-pink-500 to-rose-500"
    },
    {
      title: "API Documentation",
      description: "Technical documentation for developers",
      icon: <DocumentIcon />,
      link: "/resources",
      gradient: "from-cyan-500 to-blue-500"
    },
    {
      title: "Community Forum",
      description: "Connect with other users and share knowledge",
      icon: <ChatIcon />,
      link: "/contact",
      gradient: "from-orange-500 to-amber-500"
    }
  ];

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
            {/* Breadcrumb */}
            <div className="mb-8">
              <Breadcrumb
                items={[
                  { label: "Home", href: "/" },
                  { label: "Support" },
                ]}
              />
            </div>
            <div className="text-center max-w-4xl mx-auto">
              <div className="inline-block px-4 py-2 bg-blue-500/20 backdrop-blur-sm rounded-full text-blue-200 text-sm font-semibold mb-6">
                Support & Help Center
              </div>
              <h1 className="text-5xl md:text-6xl font-black text-white mb-6 leading-tight">
                We&apos;re Here to{" "}
                <span className="bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent">
                  Help You Succeed
                </span>
              </h1>
              <p className="text-xl md:text-2xl text-blue-100 leading-relaxed">
                Get expert support whenever you need it, 24/7
              </p>
            </div>
          </div>
        </section>

        {/* Support Options */}
        <section className="py-20 bg-gradient-to-b from-white to-gray-50">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <div className="inline-block px-4 py-2 bg-purple-100 text-purple-700 rounded-full text-sm font-semibold mb-4">
                Contact Support
              </div>
              <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
                How Can We Help?
              </h2>
              <p className="text-lg text-gray-600 max-w-3xl mx-auto">
                Choose the best way to reach our support team
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto">
              {supportOptions.map((option, idx) => (
                <div key={idx} className="group bg-white rounded-2xl shadow-xl hover:shadow-2xl transition-all duration-300 border border-gray-200 hover:border-transparent overflow-hidden hover:-translate-y-1">
                  <div className={`bg-gradient-to-br ${option.gradient} p-8 text-white relative overflow-hidden`}>
                    <div className="absolute top-0 right-0 w-32 h-32 bg-white/10 rounded-full -mr-16 -mt-16"></div>
                    <div className="absolute bottom-0 left-0 w-24 h-24 bg-white/5 rounded-full -ml-12 -mb-12"></div>
                    <div className="relative z-10">
                      <div className="w-16 h-16 bg-white/20 backdrop-blur-sm rounded-xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                        <div className="text-white">
                          {option.icon}
                        </div>
                      </div>
                      <h3 className="text-2xl font-bold mb-2">{option.title}</h3>
                      <p className="text-white/90">{option.description}</p>
                    </div>
                  </div>
                  <div className="p-6 bg-white">
                    <div className="mb-4">
                      <p className="text-sm text-gray-500 mb-2 font-medium">Contact:</p>
                      <p className="text-xl font-bold text-gray-900">{option.contact}</p>
                    </div>
                    <div className="flex items-center gap-2 text-green-600 font-semibold text-sm">
                      <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></div>
                      {option.availability}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* FAQs */}
        <section className="py-20 bg-white">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <div className="inline-block px-4 py-2 bg-green-100 text-green-700 rounded-full text-sm font-semibold mb-4">
                Frequently Asked Questions
              </div>
              <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
                Quick Answers
              </h2>
              <p className="text-lg text-gray-600 max-w-3xl mx-auto">
                Find answers to common questions
              </p>
            </div>

            <div className="max-w-5xl mx-auto space-y-8">
              {faqs.map((section, sidx) => (
                <div key={sidx} className="bg-gradient-to-br from-gray-50 to-white rounded-2xl p-8 shadow-lg border border-gray-200">
                  <h3 className="text-2xl font-bold text-gray-900 mb-6 flex items-center gap-3">
                    <div className="w-1.5 h-8 bg-gradient-to-b from-blue-600 to-cyan-600 rounded-full"></div>
                    {section.category}
                  </h3>
                  <div className="space-y-4">
                    {section.questions.map((faq, fidx) => (
                      <div key={fidx} className="group bg-white rounded-xl p-6 hover:shadow-md transition-all duration-300 border border-gray-100 hover:border-blue-200">
                        <div className="flex items-start gap-3">
                          <div className="flex-shrink-0 w-6 h-6 bg-blue-100 text-blue-600 rounded-lg flex items-center justify-center font-bold text-sm mt-0.5">
                            Q
                          </div>
                          <div className="flex-1">
                            <h4 className="text-lg font-bold text-gray-900 mb-2 group-hover:text-blue-600 transition-colors">{faq.q}</h4>
                            <div className="flex items-start gap-3">
                              <div className="flex-shrink-0 w-6 h-6 bg-green-100 text-green-600 rounded-lg flex items-center justify-center font-bold text-sm">
                                A
                              </div>
                              <p className="text-gray-600 leading-relaxed flex-1">{faq.a}</p>
                            </div>
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Submit Ticket */}
    
        {/* CTA Section */}
        <section className="relative py-20 overflow-hidden bg-gradient-to-r from-blue-600 to-cyan-600">
          <div className="absolute inset-0 opacity-10">
            <div className="absolute inset-0" style={{
              backgroundImage: `radial-gradient(circle at 2px 2px, white 1px, transparent 0)`,
              backgroundSize: '32px 32px'
            }}></div>
          </div>

          <div className="relative z-10 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 text-center">
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
              Still Have Questions?
            </h2>
            <p className="text-xl text-blue-100 mb-10 max-w-2xl mx-auto">
              Our team is ready to help you with anything you need
            </p>
            <Link href="/contact">
              <button className="group px-8 py-4 bg-white text-blue-600 font-bold rounded-xl shadow-2xl hover:bg-blue-50 hover:shadow-white/50 transition-all duration-300 transform hover:scale-105">
                <span className="flex items-center gap-2">
                  Contact Us
                  <svg className="w-5 h-5 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                  </svg>
                </span>
              </button>
            </Link>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}

