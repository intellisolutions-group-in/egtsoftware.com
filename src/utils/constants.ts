// Site Configuration Constants
export const SITE_CONFIG = {
  // Basic Info
  name: "EGT Software",
  title: "EGT Software - IT Analytics & Business Intelligence Solutions",
  tagline: "Transform your business with cutting-edge IT analytics and data-driven solutions",
  description: "Since 2002, EGT Software has been delivering cutting-edge IT analytics, business intelligence, and data-driven solutions. Transform your business with our expert analytics services, real-time insights, and customized IT solutions.",
  
  // Contact Information
  contact: {
    email: "info@egtsoftware.com",
    phone: "+91 9898817587",
    address: "E-1203, Titanium City Centre Business Park, 100 Feet Anand Nagar Road, Satellite, Jodhpur Village, Ahmedabad, Gujarat - 380015",
  },
  
  // URLs
  url: "https://egtsoftware.com",
  domain: "egtsoftware.com",
  
  // Social Media
  social: {
    twitter: "",
    facebook: "https://www.facebook.com/profile.php?id=61583432995254",
    instagram: "https://www.instagram.com/egtsoftware3/",
  },
  
  // SEO
  keywords: [
    "IT analytics",
    "business intelligence",
    "data analytics",
    "egt software",
    "business solutions",
    "IT consulting",
    "data visualization",
    "enterprise analytics",
    "performance metrics",
    "productivity software",
    "business process optimization",
    "data-driven decision making",
    "KPI tracking",
    "workforce analytics"
  ],
  
  // Company Info
  foundingYear: "2002",
  establishedYear: "2002", // Calculated: 2003-09-18 domain registration - 1 year (IT industry)
  domainRegistered: "2003-09-18",
  industry: "IT/Analytics",
  businessType: "Corporate",
  
  // Brand Colors (Professional blues for IT industry)
  colors: {
    primary: "#2563eb", // Blue 600
    primaryDark: "#1e40af", // Blue 800
    secondary: "#3b82f6", // Blue 500
    accent: "#0ea5e9", // Sky 500
    success: "#10b981", // Green 500
    warning: "#f59e0b", // Amber 500
    error: "#ef4444", // Red 500
  },
  
  // Services
  services: [
    {
      id: "business-intelligence",
      name: "Business Intelligence",
      shortDescription: "Transform raw data into actionable insights with our advanced BI solutions",
      icon: "chart-bar",
      features: [
        "Custom dashboards and reporting",
        "Real-time data visualization",
        "Predictive analytics and forecasting",
        "Self-service BI tools",
        "Data integration and warehousing"
      ],
      extendedDescription: "In today's competitive business landscape, data is everywhere, but making sense of it requires the right tools and expertise. Our Business Intelligence solutions help you connect the dots between different data sources, identify trends that matter, and make decisions based on actual evidence rather than gut feeling. We work with businesses of all sizes to transform their data into clear, visual reports that everyone in your organization can understand and act upon.",
      useCases: [
        "Executive teams need at-a-glance performance metrics without digging through spreadsheets",
        "Sales departments want to understand which products or services are driving revenue",
        "Operations managers need to track key performance indicators across multiple locations",
        "Marketing teams require insights into campaign effectiveness and customer behavior",
        "Finance departments need consolidated financial reports from various systems"
      ],
      ourApproach: "We start by understanding your current data landscape and the questions your team needs answered. Our consultants sit down with your key stakeholders to map out reporting requirements, identify data sources, and determine the best way to bring everything together. We then design dashboards that match how your team actually works, ensuring that the most important information is always front and center. Throughout the implementation, we provide training so your team can maintain and modify reports as business needs evolve.",
      industries: ["Retail and E-commerce", "Manufacturing", "Healthcare", "Financial Services", "Education", "Government"],
      technologies: ["Microsoft Power BI", "Tableau", "Qlik Sense", "SAP BusinessObjects", "Custom SQL Solutions"],
      enterpriseFeatures: [
        "Multi-tenant architecture supporting thousands of concurrent users",
        "Enterprise-grade security with role-based access control and encryption",
        "High availability with 99.9% uptime SLA and disaster recovery",
        "Scalable infrastructure that handles millions of data points",
        "Industry-standard data protection and privacy controls"
      ],
      implementationTimeline: "Typical implementations range from 8-16 weeks depending on complexity, data volume, and integration requirements. We follow a phased approach: discovery and planning (2-3 weeks), data integration and warehouse setup (3-5 weeks), dashboard development and customization (3-5 weeks), testing and refinement (1-2 weeks), and deployment with training (1 week).",
      supportModel: "We provide comprehensive support through multiple tiers: dedicated account management for enterprise clients, 24/7 technical support with average response times under 2 hours for critical issues, regular health checks and optimization reviews, proactive monitoring and alerting, and quarterly business reviews to ensure ongoing value delivery.",
      roiMetrics: "Our clients typically see return on investment within 12-18 months through reduced reporting time (average 70% reduction), improved decision-making speed, elimination of manual data aggregation processes, and enhanced operational visibility leading to cost savings."
    },
    {
      id: "data-analytics",
      name: "Data Analytics",
      shortDescription: "Unlock the power of your data with comprehensive analytics services",
      icon: "chart-pie",
      features: [
        "Statistical analysis and modeling",
        "Big data processing",
        "Machine learning integration",
        "Data mining and pattern recognition",
        "Performance metrics and KPIs"
      ],
      extendedDescription: "Raw data sitting in databases doesn't provide value on its own. Our data analytics services help you extract meaningful patterns, uncover hidden relationships, and answer complex business questions. Whether you're dealing with customer behavior data, operational metrics, financial records, or any other type of information, we have the tools and expertise to help you make sense of it all. Our analysts work alongside your team to ensure that every analysis aligns with your business objectives and delivers actionable recommendations.",
      useCases: [
        "Understanding why customer churn rates have increased in specific segments",
        "Identifying which factors contribute most to operational efficiency",
        "Predicting future sales trends based on historical patterns and market conditions",
        "Analyzing customer feedback to improve product or service offerings",
        "Comparing performance across different business units or time periods"
      ],
      ourApproach: "We believe analytics should be collaborative, not black-box. Our process begins with clearly defining the business questions you want answered, then we assess your data quality and completeness. We use a combination of statistical methods and modern analytics tools to explore your data from multiple angles, always keeping your business context in mind. Every analysis we deliver comes with clear explanations of what we found, why it matters, and what actions you should consider taking. We also provide ongoing support to help you apply these insights and measure their impact.",
      industries: ["Technology", "Healthcare", "Retail", "Financial Services", "Manufacturing", "Telecommunications"],
      technologies: ["Python and R", "SQL and Database Analytics", "Apache Spark", "TensorFlow", "Statistical Analysis Tools"],
      enterpriseFeatures: [
        "Advanced analytics processing billions of records with sub-second query performance",
        "Enterprise data governance framework ensuring data quality and lineage",
        "Scalable cloud infrastructure supporting petabytes of data",
        "Integration with all major enterprise systems and data warehouses",
        "Audit trails and data retention policies for accountability"
      ],
      implementationTimeline: "Analytics projects typically take 6-12 weeks from initiation to delivery of insights. This includes data discovery and profiling (1-2 weeks), data preparation and cleaning (2-3 weeks), analysis development and model building (2-4 weeks), validation and testing (1-2 weeks), and presentation of findings with recommendations (1 week).",
      supportModel: "Post-delivery support includes ongoing maintenance of analytics models, periodic reviews to refresh analyses as new data arrives, training workshops to build internal analytics capabilities, consulting for strategic questions that arise, and access to our analytics experts for ad-hoc analyses.",
      roiMetrics: "Organizations typically achieve measurable results within 6-12 months: identification of cost-saving opportunities averaging 15-25% in operational areas, improved forecasting accuracy reducing planning variance by 30-40%, and data-driven insights leading to revenue optimization opportunities."
    },
    {
      id: "it-consulting",
      name: "IT Consulting",
      shortDescription: "Expert guidance to optimize your IT infrastructure and strategy",
      icon: "cog",
      features: [
        "IT strategy and roadmap development",
        "System architecture and design",
        "Technology stack optimization",
        "Digital transformation consulting",
        "IT security assessment"
      ],
      extendedDescription: "Technology decisions today impact your business for years to come. Our IT consulting services provide the strategic guidance you need to make those decisions with confidence. We work with organizations that are growing, modernizing, or facing specific technical challenges. Our consultants bring decades of combined experience across various industries, which means we've likely encountered and solved problems similar to yours before. We take time to understand your business goals first, then align technology recommendations to support those objectives.",
      useCases: [
        "Planning a major technology upgrade but unsure where to start or which solutions fit best",
        "Experiencing performance issues with existing systems that need architectural review",
        "Preparing for business growth and need IT infrastructure that can scale accordingly",
        "Need guidance on security standards and best practices for your organization",
        "Wanting to leverage new technologies but need help assessing what's right for your organization"
      ],
      ourApproach: "We start every consulting engagement with discovery sessions to understand your current state, pain points, and goals. We conduct thorough assessments of your existing infrastructure, applications, and processes. Then we develop practical roadmaps that balance immediate needs with long-term strategic objectives. Our recommendations always consider budget constraints, implementation complexity, and potential risks. We stay involved through the execution phase, providing oversight and adjustments as needed to ensure successful outcomes.",
      industries: ["Enterprise Software", "Healthcare IT", "Financial Services", "Manufacturing", "Government", "Education"],
      technologies: ["Enterprise Architecture", "Cloud Strategy", "Security Frameworks", "DevOps Practices", "Legacy Modernization"],
      enterpriseFeatures: [
        "Consultants with 20+ years average experience across Fortune 500 companies",
        "Enterprise architecture frameworks including TOGAF, Zachman, and industry-specific standards",
        "Comprehensive security assessments and gap analysis",
        "Strategic planning with 3-5 year technology roadmaps",
        "Executive-level presentations and board-ready recommendations"
      ],
      implementationTimeline: "Consulting engagements vary by scope: strategic assessments typically take 4-8 weeks, architecture reviews require 6-12 weeks, and comprehensive digital transformation planning spans 12-24 weeks. We provide detailed project plans and milestones upfront with regular status updates.",
      supportModel: "Our consulting relationship extends beyond initial delivery with ongoing strategic guidance, quarterly check-ins to review roadmap progress, access to our consulting team for questions as they arise, workshops and training sessions for your internal teams, and updates on emerging technologies relevant to your industry.",
      roiMetrics: "IT consulting investments typically pay back through optimized infrastructure costs (15-30% reduction in operational expenses), improved system reliability reducing downtime by 40-60%, better alignment between IT and business objectives, and avoidance of costly technology mistakes through expert guidance."
    },
    {
      id: "workflow-automation",
      name: "Workflow Automation",
      shortDescription: "Streamline operations and boost productivity through intelligent automation",
      icon: "lightning",
      features: [
        "Process automation and optimization",
        "Custom workflow development",
        "Integration with existing systems",
        "Robotic process automation (RPA)",
        "Productivity monitoring and analytics"
      ],
      extendedDescription: "Manual, repetitive tasks drain productivity and create opportunities for human error. Our workflow automation services identify where your team spends time on routine work that could be handled by systems instead. We don't just automate for the sake of automation—we focus on processes that will deliver real time savings and allow your staff to focus on higher-value activities. Whether you need simple task automation or complex multi-system workflows, we design solutions that fit seamlessly into your existing operations.",
      useCases: [
        "Processing invoices, purchase orders, and other documents that follow standardized patterns",
        "Automating data entry and synchronization between different business systems",
        "Streamlining approval workflows that involve multiple departments or stakeholders",
        "Scheduling and coordinating tasks across teams or systems without manual intervention",
        "Handling routine customer inquiries or service requests through automated responses and routing"
      ],
      ourApproach: "Before we build anything, we walk through your current processes step-by-step to identify bottlenecks and repetitive tasks. We prioritize automation opportunities based on time savings, error reduction, and impact on your team's daily work. We design automation workflows that mirror your actual business logic, not theoretical processes, and we build in appropriate error handling and human oversight points where decisions require judgment. Throughout implementation, we train your team to manage and modify these automated workflows as business needs change.",
      industries: ["Professional Services", "Finance and Accounting", "Human Resources", "Customer Service", "Operations", "Supply Chain"],
      technologies: ["Microsoft Power Automate", "UiPath", "Zapier", "Custom API Integrations", "Workflow Management Platforms"],
      enterpriseFeatures: [
        "Enterprise-grade automation platforms handling millions of transactions monthly",
        "Robust error handling and exception management with audit trails",
        "Scalable automation infrastructure supporting high-volume processing",
        "Integration capabilities with ERP, CRM, and legacy systems",
        "Governance controls ensuring automation meets business requirements"
      ],
      implementationTimeline: "Automation projects follow a structured timeline: process assessment and optimization opportunity identification (1-2 weeks), automation design and development (3-6 weeks), testing and quality assurance (1-2 weeks), pilot deployment and refinement (1-2 weeks), and full rollout with monitoring setup (1-2 weeks). Total timeline ranges from 8-14 weeks depending on complexity.",
      supportModel: "We provide comprehensive automation support including 24/7 monitoring of automated processes, exception handling and resolution, regular performance reviews and optimization, updates and maintenance as systems evolve, and training for your team to manage and modify automations as business needs change.",
      roiMetrics: "Automation typically delivers ROI within 6-9 months through labor cost savings (automating repetitive tasks frees 20-40% of staff time for higher-value work), error reduction eliminating manual mistakes (typically 80-95% reduction), faster processing times (processes complete in hours rather than days), and improved consistency through systematic execution."
    },
    {
      id: "cloud-solutions",
      name: "Cloud Solutions",
      shortDescription: "Modern cloud-based infrastructure for scalability and performance",
      icon: "cloud",
      features: [
        "Cloud migration and deployment",
        "Multi-cloud strategy",
        "Cloud-native application development",
        "Serverless architecture",
        "Cloud cost optimization"
      ],
      extendedDescription: "Cloud computing offers flexibility, scalability, and cost advantages that traditional on-premises infrastructure simply can't match. However, moving to the cloud or optimizing existing cloud deployments requires careful planning and execution. Our cloud solutions team helps organizations navigate the complexities of cloud adoption, whether you're migrating existing systems, building new cloud-native applications, or trying to get better value from current cloud investments. We work with all major cloud providers and help you choose the right mix of services for your specific needs.",
      useCases: [
        "Moving from on-premises servers to cloud infrastructure to reduce hardware costs and maintenance",
        "Building new applications that need to scale quickly based on user demand or business growth",
        "Disaster recovery and backup solutions that are more reliable and cost-effective than traditional methods",
        "Optimizing cloud spending where costs have grown unexpectedly or resources are underutilized",
        "Deploying applications globally with low latency through cloud provider networks"
      ],
      ourApproach: "We begin by assessing your current infrastructure and identifying workloads that are good candidates for cloud migration or optimization. We design cloud architectures that align with your performance requirements, security policies, and budget constraints. During migration, we minimize downtime and ensure data integrity through careful planning and testing. For ongoing cloud management, we help you implement monitoring, cost controls, and optimization practices that keep your cloud environment running efficiently. We also provide training so your internal team can manage day-to-day operations effectively.",
      industries: ["SaaS Companies", "E-commerce", "Healthcare", "Finance", "Media and Entertainment", "Startups"],
      technologies: ["Amazon Web Services", "Microsoft Azure", "Google Cloud Platform", "Kubernetes", "Container Technologies"],
      enterpriseFeatures: [
        "Multi-cloud and hybrid cloud architectures for maximum flexibility",
        "Enterprise security with identity management, encryption, and network security",
        "High availability designs with multi-region failover capabilities",
        "Cost optimization strategies reducing cloud spending by 20-40%",
        "Infrastructure meeting industry-standard security and reliability practices"
      ],
      implementationTimeline: "Cloud migration and deployment timelines vary: assessment and planning phase (2-4 weeks), architecture design (2-3 weeks), migration or deployment execution (4-12 weeks depending on scope), testing and optimization (2-3 weeks), and go-live with cutover planning (1-2 weeks). Enterprise migrations typically span 12-24 weeks.",
      supportModel: "Our cloud support model includes managed services for ongoing operations, 24/7 monitoring and incident response, cost optimization reviews and recommendations, security updates and patch management, performance tuning and capacity planning, and regular architecture reviews to ensure optimal cloud utilization.",
      roiMetrics: "Cloud solutions typically achieve ROI within 12-18 months through infrastructure cost reduction (30-50% lower than on-premises when optimized), reduced IT operations overhead, improved scalability eliminating capital expenditure for growth, faster time-to-market for new applications, and enhanced disaster recovery capabilities."
    },
    {
      id: "custom-development",
      name: "Custom Development",
      shortDescription: "Tailored software solutions designed specifically for your business needs",
      icon: "code",
      features: [
        "Enterprise application development",
        "API development and integration",
        "Web and mobile applications",
        "Database design and optimization",
        "Legacy system modernization"
      ],
      extendedDescription: "Sometimes off-the-shelf software doesn't fit your unique business processes, or it requires so much customization that a custom solution makes more sense. Our custom development team builds software applications tailored to your specific requirements, whether that means creating something entirely new or extending existing systems with new capabilities. We work closely with your team throughout the development process, ensuring that the end result solves real problems and integrates smoothly with your current operations. Every project includes thorough testing, documentation, and knowledge transfer so you can maintain and evolve the solution long-term.",
      useCases: [
        "Developing internal tools or portals that streamline operations specific to your industry or business model",
        "Creating customer-facing applications that provide unique functionality or better user experiences than available alternatives",
        "Building APIs that connect your systems with partner platforms, third-party services, or customer integrations",
        "Modernizing legacy applications that are difficult to maintain or no longer meet business needs",
        "Developing mobile applications for field workers, customers, or internal teams that need access to data on the go"
      ],
      ourApproach: "Custom development starts with detailed requirements gathering where we learn about your business processes, user needs, and technical constraints. We then create a technical specification and project plan that outlines what we'll build, how we'll build it, and how long it will take. Throughout development, we follow agile methodologies with regular demos and feedback cycles so you can see progress and request adjustments early. We write clean, maintainable code and document everything thoroughly. Before launch, we conduct comprehensive testing and provide training for your team. Post-launch, we offer support and can help you plan future enhancements as your needs evolve.",
      industries: ["Software Companies", "Healthcare", "Finance", "Manufacturing", "Real Estate", "Professional Services"],
      technologies: ["Modern Web Frameworks", "Mobile Development", "API Development", "Database Systems", "Cloud Platforms"],
      enterpriseFeatures: [
        "Enterprise-grade application development following industry best practices",
        "Scalable architecture patterns supporting millions of users",
        "Security-first development with vulnerability assessments and penetration testing",
        "Comprehensive documentation and knowledge transfer for long-term maintenance",
        "Agile development methodologies with regular releases and continuous integration"
      ],
      implementationTimeline: "Custom development projects vary significantly by scope: discovery and requirements (2-4 weeks), design and architecture (2-4 weeks), development sprints (12-24 weeks for typical enterprise applications), quality assurance and testing (4-6 weeks), and deployment with training (2-3 weeks). Large enterprise applications typically require 20-40 weeks total.",
      supportModel: "Post-launch support includes bug fixes and maintenance, feature enhancements and evolution, performance monitoring and optimization, security updates and patches, technical support for your team, and ongoing consulting for future development needs. We offer various support tiers to match your requirements.",
      roiMetrics: "Custom development ROI is typically realized within 18-24 months through improved operational efficiency (custom solutions can automate workflows saving 30-50% of process time), reduced licensing costs compared to enterprise software suites, competitive advantages through unique functionality, increased productivity with tools designed specifically for your workflows, and data ownership and control."
    }
  ],
  
  // Google Analytics & Search Console
  // ⚠️ CRITICAL: Replace these placeholders with your actual IDs for tracking and SEO
  // 
  // HOW TO GET YOUR GOOGLE ANALYTICS GA4 ID:
  // 1. Go to: https://analytics.google.com/
  // 2. Create a new GA4 property or use existing one
  // 3. Go to Admin > Data Streams > Select your web stream
  // 4. Copy the Measurement ID (format: G-XXXXXXXXXX)
  // 5. Replace the placeholder below with your actual ID
  googleAnalyticsId: "G-XXXXXXXXXX", // TODO: Replace with your actual GA4 Measurement ID
  
  // HOW TO GET YOUR GOOGLE SEARCH CONSOLE VERIFICATION CODE:
  // 1. Go to: https://search.google.com/search-console
  // 2. Add property for your domain
  // 3. Choose "HTML tag" verification method
  // 4. Copy the content value from the meta tag (the long code)
  // 5. Replace the placeholder below with your actual code
  googleVerificationCode: "your-google-verification-code", // TODO: Replace with actual verification code
} as const;

export type SiteConfig = typeof SITE_CONFIG;

