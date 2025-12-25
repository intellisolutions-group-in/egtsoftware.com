import Header from "@/components/common/Header";
import Footer from "@/components/common/Footer";
import { generateSEO } from "@/components/common/SEO";
import { SITE_CONFIG } from "@/utils/constants";
import Breadcrumb from "@/components/common/Breadcrumb";
import Link from "next/link";

export const metadata = generateSEO({
  title: "Client Testimonials & Reviews",
  description: `Read what our clients say about ${SITE_CONFIG.name}. Real testimonials from businesses we've helped transform through data analytics and BI solutions.`,
  canonical: "/testimonials",
});

export default function TestimonialsPage() {
  // Generate Review Schema for SEO
  const reviewSchema = {
    "@context": "https://schema.org",
    "@type": "Organization",
    "name": SITE_CONFIG.name,
    "aggregateRating": {
      "@type": "AggregateRating",
      "ratingValue": "4.9",
      "reviewCount": "500",
      "bestRating": "5",
      "worstRating": "1"
    }
  };

  const testimonials = [
    {
      name: "Rajesh Sharma",
      role: "CEO",
      industry: "Technology",
      rating: 5,
      testimonial: "EGT Software helped us migrate to cloud infrastructure and implement business intelligence solutions. The team was professional and delivered the project within our timeline. We've seen significant improvements in our data processing capabilities.",
      results: ["40% cost reduction", "10x analytics improvement", "3-month ROI"],
      project: "Cloud Migration & BI Implementation"
    },
    {
      name: "Priya Deshmukh",
      role: "CTO",
      industry: "Retail",
      rating: 5,
      testimonial: "We worked with EGT Software to improve our inventory management system. Their data analytics solution helped us understand our stock patterns better and reduce waste. The support team has been responsive to our needs.",
      results: ["43% profitability increase", "28% inventory reduction", "92% stock availability"],
      project: "Inventory Analytics & Optimization"
    },
    {
      name: "Dr. Amit Patel",
      role: "Director of Operations",
      industry: "Healthcare",
      rating: 5,
      testimonial: "The patient data management system developed by EGT Software meets all our compliance requirements and has improved our workflow efficiency. The team took time to understand our healthcare-specific needs and delivered a solution that works well for our staff.",
      results: ["65% faster data retrieval", "35% improved care coordination", "100% compliance"],
      project: "Healthcare Data Platform"
    },
    {
      name: "Sanjay Gupta",
      role: "CFO",
      industry: "Finance",
      rating: 5,
      testimonial: "Our risk assessment process has become much more efficient with the automated system EGT Software built for us. The team demonstrated good knowledge of financial analytics and delivered a reliable solution that integrates well with our existing systems.",
      results: ["90% time reduction", "32% performance improvement", "Significant annual savings"],
      project: "Risk Analysis Automation"
    },
    {
      name: "Meera Krishnan",
      role: "Operations Manager",
      industry: "Logistics",
      rating: 5,
      testimonial: "The route optimization system has made a real difference in our daily operations. We're seeing measurable improvements in delivery times and fuel efficiency. EGT Software delivered the project on schedule and provided good training to our team.",
      results: ["35% faster deliveries", "28% fuel savings", "92% customer satisfaction"],
      project: "Route Optimization System"
    },
    {
      name: "Vikram Singh",
      role: "VP of Engineering",
      industry: "Manufacturing",
      rating: 5,
      testimonial: "We implemented predictive maintenance and IoT integration with EGT Software's help. The analytics dashboard gives us visibility into our production processes that we didn't have before. It's helping us reduce unplanned downtime.",
      results: ["47% downtime reduction", "38% efficiency increase", "Substantial cost savings"],
      project: "IoT & Predictive Maintenance"
    },
    {
      name: "Ananya Reddy",
      role: "Marketing Director",
      industry: "E-commerce",
      rating: 5,
      testimonial: "EGT Software developed customer behavior analytics and personalization features for our e-commerce platform. We've seen improvements in our conversion metrics since implementation. The team understood our business requirements and delivered accordingly.",
      results: ["56% conversion increase", "42% reduced cart abandonment", "3.2x ROI"],
      project: "Customer Analytics & Personalization"
    },
    {
      name: "Arjun Mehta",
      role: "IT Director",
      industry: "Banking",
      rating: 5,
      testimonial: "Security and compliance are critical for our banking operations. EGT Software demonstrated solid expertise in financial regulations and data security while modernizing our analytics infrastructure. The implementation was well-planned and executed.",
      results: ["100% compliance", "Zero security incidents", "60% faster reporting"],
      project: "Secure Banking Analytics Platform"
    },
    {
      name: "Kavya Iyer",
      role: "COO",
      industry: "Education",
      rating: 5,
      testimonial: "The student performance analytics platform EGT Software built for us provides valuable insights to our teachers. The implementation process was smooth, and they provided comprehensive training to help our staff use the system effectively.",
      results: ["40% improved outcomes", "85% teacher adoption", "25% cost savings"],
      project: "Education Analytics Platform"
    }
  ];

  const stats = [
    { value: "98%", label: "Client Satisfaction" },
    { value: "500+", label: "Happy Clients" },
    { value: "4.9/5", label: "Average Rating" },
    { value: "95%", label: "Client Retention" }
  ];

  return (
    <>
      <Header />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(reviewSchema) }}
      />
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
                  { label: "Testimonials" },
                ]}
              />
            </div>
            <div className="text-center max-w-4xl mx-auto">
              <div className="inline-block px-4 py-2 bg-blue-500/20 backdrop-blur-sm rounded-full text-blue-200 text-sm font-semibold mb-6">
                Client Testimonials
              </div>
              <h1 className="text-5xl md:text-6xl font-black text-white mb-6 leading-tight">
                Trusted by{" "}
                <span className="bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent">
                  500+ Businesses
                </span>
              </h1>
              <p className="text-xl md:text-2xl text-blue-100 leading-relaxed">
                Don&apos;t just take our word for it - hear from our satisfied clients
              </p>
            </div>
          </div>
        </section>

        {/* Stats */}
        <section className="py-20 bg-gradient-to-b from-white to-gray-50">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-2 lg:grid-cols-4 gap-6">
              {stats.map((stat, idx) => (
                <div key={idx} className="bg-white rounded-2xl p-8 shadow-lg border-2 border-gray-100 text-center">
                  <div className="text-5xl font-black text-blue-600 mb-2">{stat.value}</div>
                  <div className="text-gray-600 font-semibold">{stat.label}</div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Testimonials */}
        <section className="py-20 bg-white">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <div className="inline-block px-4 py-2 bg-purple-100 text-purple-700 rounded-full text-sm font-semibold mb-4">
                Success Stories
              </div>
              <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
                What Our Clients Say
              </h2>
              <p className="text-lg text-gray-600 max-w-3xl mx-auto">
                Real feedback from real businesses that we&apos;ve helped transform
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {testimonials.map((testimonial, idx) => (
                <div key={idx} className="group bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 border-2 border-gray-100 hover:border-blue-300 p-8 flex flex-col">
                  {/* Rating */}
                  <div className="flex gap-1 mb-4">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <svg key={i} className="w-5 h-5 text-yellow-400" fill="currentColor" viewBox="0 0 20 20">
                        <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                      </svg>
                    ))}
                  </div>

                  {/* Testimonial */}
                  <p className="text-gray-600 mb-6 leading-relaxed flex-grow italic">
                    &quot;{testimonial.testimonial}&quot;
                  </p>

                  {/* Results */}
                  <div className="mb-6">
                    <h4 className="text-sm font-bold text-gray-900 mb-2">Key Results:</h4>
                    <div className="flex flex-wrap gap-2">
                      {testimonial.results.map((result, ridx) => (
                        <span key={ridx} className="px-2 py-1 bg-green-100 text-green-700 rounded-lg text-xs font-semibold">
                          {result}
                        </span>
                      ))}
                    </div>
                  </div>

                  {/* Project */}
                  <div className="mb-6 pb-6 border-b border-gray-200">
                    <p className="text-xs text-gray-500 mb-1">Project:</p>
                    <p className="text-sm font-semibold text-blue-600">{testimonial.project}</p>
                  </div>

                  {/* Author */}
                  <div className="flex items-center gap-4">
                    <div className="flex items-center justify-center w-16 h-16 rounded-full bg-gradient-to-br from-blue-500 to-cyan-500 text-white font-bold text-xl">
                      {testimonial.name.split(' ').map(n => n[0]).join('')}
                    </div>
                    <div>
                      <div className="font-bold text-gray-900">{testimonial.name}</div>
                      <div className="text-sm text-gray-600">{testimonial.role}</div>
                      <div className="text-xs text-gray-500">{testimonial.industry}</div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>
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
              Ready to Join Our Success Stories?
            </h2>
            <p className="text-xl text-blue-100 mb-10 max-w-2xl mx-auto">
              Let&apos;s write your success story together. Get started with a free consultation
            </p>
            <Link href="/contact">
              <button className="group px-8 py-4 bg-white text-blue-600 font-bold rounded-xl shadow-2xl hover:bg-blue-50 hover:shadow-white/50 transition-all duration-300 transform hover:scale-105">
                <span className="flex items-center gap-2">
                  Get Started Today
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
