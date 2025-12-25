import Header from "@/components/common/Header";
import Footer from "@/components/common/Footer";
import { generateSEO } from "@/components/common/SEO";
import { SITE_CONFIG } from "@/utils/constants";
import Link from "next/link";

export const metadata = generateSEO({
  title: "Case Studies - Success Stories",
  description: `Discover how ${SITE_CONFIG.name} has helped businesses transform through data analytics and business intelligence. Real client success stories and results.`,
  canonical: "/case-studies",
});

export default function CaseStudiesPage() {
  const caseStudies = [
    {
      id: 1,
      title: "Retail Chain Increases Profitability by 43%",
      industry: "Retail",
      client: "Major Australian Retail Chain",
      challenge: "Struggling with inventory management and declining sales across 150+ stores nationwide",
      solution: "Implemented comprehensive BI dashboard with real-time inventory tracking, predictive analytics for demand forecasting, and automated reordering system",
      results: [
        "43% increase in overall profitability",
        "28% reduction in inventory carrying costs",
        "92% improvement in stock availability",
        "15% increase in customer satisfaction"
      ],
      technologies: ["Power BI", "Azure SQL", "Python", "Machine Learning"],
      timeframe: "6 months",
      color: "blue"
    },
    {
      id: 2,
      title: "Healthcare Provider Streamlines Patient Data Management",
      industry: "Healthcare",
      client: "Private Hospital Network",
      challenge: "Fragmented patient data across multiple systems leading to inefficiencies and compliance risks",
      solution: "Developed unified patient data platform with advanced analytics, automated reporting, and secure data protection measures",
      results: [
        "65% reduction in data retrieval time",
        "100% compliance with healthcare regulations",
        "35% improvement in patient care coordination",
        "50% decrease in administrative overhead"
      ],
      technologies: ["AWS", "PostgreSQL", "React", "Node.js"],
      timeframe: "8 months",
      color: "green"
    },
    {
      id: 3,
      title: "Financial Services Firm Automates Risk Assessment",
      industry: "Finance",
      client: "Investment Management Company",
      challenge: "Manual risk assessment processes taking days to complete, limiting investment opportunities",
      solution: "Built automated risk analysis system with real-time market data integration and AI-powered predictive models",
      results: [
        "90% reduction in risk assessment time",
        "32% improvement in investment performance",
        "99.7% accuracy in risk predictions",
        "Significant annual cost reduction"
      ],
      technologies: ["Python", "TensorFlow", "Kafka", "Elasticsearch"],
      timeframe: "10 months",
      color: "purple"
    },
    {
      id: 4,
      title: "Manufacturing Company Optimizes Production Efficiency",
      industry: "Manufacturing",
      client: "Industrial Equipment Manufacturer",
      challenge: "High downtime costs and inefficient production scheduling across multiple facilities",
      solution: "Implemented IoT-enabled monitoring system with predictive maintenance and optimized production scheduling algorithms",
      results: [
        "47% reduction in equipment downtime",
        "38% increase in production efficiency",
        "55% decrease in maintenance costs",
        "Substantial operational savings"
      ],
      technologies: ["Azure IoT", "Power BI", "Time Series Analysis", "SQL Server"],
      timeframe: "12 months",
      color: "orange"
    },
    {
      id: 5,
      title: "E-commerce Platform Boosts Conversion by 56%",
      industry: "E-commerce",
      client: "Online Retail Marketplace",
      challenge: "Low conversion rates and high cart abandonment despite significant traffic",
      solution: "Developed customer behavior analytics platform with personalization engine and A/B testing framework",
      results: [
        "56% increase in conversion rate",
        "42% reduction in cart abandonment",
        "68% improvement in customer lifetime value",
        "3.2x ROI within first year"
      ],
      technologies: ["Google Analytics", "BigQuery", "React", "Machine Learning"],
      timeframe: "5 months",
      color: "pink"
    },
    {
      id: 6,
      title: "Logistics Company Reduces Delivery Times by 35%",
      industry: "Logistics",
      client: "National Courier Service",
      challenge: "Inefficient route planning and delivery delays affecting customer satisfaction",
      solution: "Created AI-powered route optimization system with real-time traffic integration and dynamic scheduling",
      results: [
        "35% reduction in average delivery time",
        "28% decrease in fuel costs",
        "45% improvement in on-time delivery rate",
        "92% customer satisfaction score"
      ],
      technologies: ["Google Maps API", "Python", "MongoDB", "AWS Lambda"],
      timeframe: "7 months",
      color: "cyan"
    }
  ];

  const colorClasses = {
    blue: "from-blue-500 to-cyan-500",
    green: "from-green-500 to-emerald-500",
    purple: "from-purple-500 to-pink-500",
    orange: "from-orange-500 to-red-500",
    pink: "from-pink-500 to-rose-500",
    cyan: "from-cyan-500 to-blue-500"
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
                Client Success Stories
              </div>
              <h1 className="text-5xl md:text-6xl font-black text-white mb-6 leading-tight">
                Proven Success{" "}
                <span className="bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent">
                  Stories
                </span>
              </h1>
              <p className="text-xl md:text-2xl text-blue-100 leading-relaxed">
                Discover how we&apos;ve helped businesses across industries achieve remarkable transformations
              </p>
            </div>
          </div>
        </section>

        {/* Stats Overview */}
        <section className="py-20 bg-gradient-to-b from-white to-gray-50">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
              <div className="text-center">
                <div className="text-5xl font-black text-blue-600 mb-2">500+</div>
                <div className="text-gray-600 font-semibold">Successful Projects</div>
              </div>
              <div className="text-center">
                <div className="text-5xl font-black text-green-600 mb-2">98%</div>
                <div className="text-gray-600 font-semibold">Client Satisfaction</div>
              </div>
              <div className="text-center">
                <div className="text-5xl font-black text-purple-600 mb-2">85%</div>
                <div className="text-gray-600 font-semibold">Average ROI Improvement</div>
              </div>
              <div className="text-center">
                <div className="text-5xl font-black text-orange-600 mb-2">15+</div>
                <div className="text-gray-600 font-semibold">Industries Served</div>
              </div>
            </div>
          </div>
        </section>

        {/* Case Studies */}
        <section className="py-20 bg-white">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="space-y-16">
              {caseStudies.map((study) => (
                <div key={study.id} className="group bg-white rounded-3xl shadow-2xl hover:shadow-3xl transition-all duration-300 overflow-hidden border-2 border-gray-100">
                  <div className="grid grid-cols-1 lg:grid-cols-2 gap-0">
                    {/* Left Side - Details */}
                    <div className="p-8 lg:p-12">
                      <div className="flex items-center gap-3 mb-6">
                        <span className="px-4 py-2 bg-gray-100 text-gray-700 rounded-full text-sm font-semibold">
                          {study.industry}
                        </span>
                        <span className="px-4 py-2 bg-blue-100 text-blue-700 rounded-full text-sm font-semibold">
                          {study.timeframe}
                        </span>
                      </div>
                      
                      <h3 className="text-3xl font-bold text-gray-900 mb-4 group-hover:text-blue-600 transition-colors">
                        {study.title}
                      </h3>
                      
                      <div className="space-y-6">
                        <div>
                          <h4 className="text-lg font-bold text-gray-900 mb-2 flex items-center gap-2">
                            <svg className="w-5 h-5 text-red-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z" />
                            </svg>
                            Challenge
                          </h4>
                          <p className="text-gray-600">{study.challenge}</p>
                        </div>
                        
                        <div>
                          <h4 className="text-lg font-bold text-gray-900 mb-2 flex items-center gap-2">
                            <svg className="w-5 h-5 text-blue-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
                            </svg>
                            Solution
                          </h4>
                          <p className="text-gray-600">{study.solution}</p>
                        </div>
                        
                        <div>
                          <h4 className="text-lg font-bold text-gray-900 mb-3">Technologies Used</h4>
                          <div className="flex flex-wrap gap-2">
                            {study.technologies.map((tech, tidx) => (
                              <span key={tidx} className="px-3 py-1 bg-blue-50 text-blue-700 rounded-lg text-sm font-medium">
                                {tech}
                              </span>
                            ))}
                          </div>
                        </div>
                      </div>
                    </div>
                    
                    {/* Right Side - Results */}
                    <div className={`bg-gradient-to-br ${colorClasses[study.color as keyof typeof colorClasses]} p-8 lg:p-12 text-white flex flex-col justify-center`}>
                      <h4 className="text-2xl font-bold mb-6 flex items-center gap-2">
                        <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946.806 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-3.138-3.138 3.42 3.42 0 00-.806-1.946 3.42 3.42 0 010-4.438 3.42 3.42 0 00.806-1.946 3.42 3.42 0 013.138-3.138z" />
                        </svg>
                        Results Achieved
                      </h4>
                      <ul className="space-y-4">
                        {study.results.map((result, ridx) => (
                          <li key={ridx} className="flex items-start gap-3">
                            <svg className="w-6 h-6 flex-shrink-0 mt-1" fill="currentColor" viewBox="0 0 20 20">
                              <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                            </svg>
                            <span className="text-lg font-semibold">{result}</span>
                          </li>
                        ))}
                      </ul>
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
              Ready to Write Your Success Story?
            </h2>
            <p className="text-xl text-blue-100 mb-10 max-w-2xl mx-auto">
              Let&apos;s discuss how we can help you achieve similar results for your business
            </p>
            <Link href="/contact">
              <button className="group px-8 py-4 bg-white text-blue-600 font-bold rounded-xl shadow-2xl hover:bg-blue-50 hover:shadow-white/50 transition-all duration-300 transform hover:scale-105">
                <span className="flex items-center gap-2">
                  Start Your Transformation
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

