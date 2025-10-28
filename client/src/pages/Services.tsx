import Layout from "@/components/Layout";
import { Link } from "wouter";
import { Button } from "@/components/ui/button";
import { Brain, Code, Database, Cloud, Zap, Rocket, BarChart3, Shield } from "lucide-react";

const services = [
  {
    icon: Brain,
    title: "AI Strategy & Consulting",
    description: "Develop comprehensive AI strategies tailored to your business goals and market positioning",
    features: [
      "AI capability assessment",
      "Use case identification",
      "Technology roadmap planning",
      "Risk and compliance analysis",
    ],
  },
  {
    icon: Code,
    title: "MLOps & Model Deployment",
    description: "Build and deploy machine learning models at scale with production-grade infrastructure",
    features: [
      "Model training pipelines",
      "Automated testing & validation",
      "Continuous deployment",
      "Performance monitoring",
    ],
  },
  {
    icon: Database,
    title: "Data Platforms",
    description: "Design robust data infrastructure for analytics, ML, and real-time insights",
    features: [
      "Data warehouse design",
      "ETL/ELT pipelines",
      "Real-time analytics",
      "Data governance",
    ],
  },
  {
    icon: Cloud,
    title: "Cloud Architecture",
    description: "Scalable, secure, and cost-optimized cloud infrastructure solutions",
    features: [
      "Cloud migration",
      "Infrastructure as Code",
      "Multi-cloud strategy",
      "Cost optimization",
    ],
  },
  {
    icon: Rocket,
    title: "Product Prototyping",
    description: "Rapid MVP development and proof-of-concept for innovative ideas",
    features: [
      "Concept validation",
      "Rapid prototyping",
      "User testing",
      "Go-to-market strategy",
    ],
  },
  {
    icon: BarChart3,
    title: "Analytics & Insights",
    description: "Transform data into actionable insights with advanced analytics solutions",
    features: [
      "Business intelligence",
      "Predictive analytics",
      "Custom dashboards",
      "Data visualization",
    ],
  },
  {
    icon: Zap,
    title: "Performance Optimization",
    description: "Optimize existing systems for speed, efficiency, and cost",
    features: [
      "System auditing",
      "Performance tuning",
      "Scalability improvements",
      "Cost reduction",
    ],
  },
  {
    icon: Shield,
    title: "Security & Compliance",
    description: "Secure your AI and data systems with enterprise-grade security practices",
    features: [
      "Security assessment",
      "Compliance implementation",
      "Data privacy",
      "Threat detection",
    ],
  },
];

const processSteps = [
  {
    step: "01",
    title: "Discovery & Assessment",
    description: "We begin by understanding your business, challenges, and goals through comprehensive discovery sessions.",
  },
  {
    step: "02",
    title: "Strategy & Planning",
    description: "Develop a detailed strategy and roadmap aligned with your business objectives and technical requirements.",
  },
  {
    step: "03",
    title: "Design & Architecture",
    description: "Create scalable, secure architectures designed for your specific use cases and future growth.",
  },
  {
    step: "04",
    title: "Implementation",
    description: "Build and deploy solutions using best practices, modern technologies, and agile methodologies.",
  },
  {
    step: "05",
    title: "Testing & Validation",
    description: "Rigorous testing ensures quality, performance, and reliability before production deployment.",
  },
  {
    step: "06",
    title: "Deployment & Support",
    description: "Seamless deployment with ongoing support, monitoring, and optimization for long-term success.",
  },
];

export default function Services() {
  return (
    <Layout>
      {/* Hero */}
      <section className="py-16 md:py-24 bg-card">
        <div className="container">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl font-serif font-bold mb-6">Our Services</h1>
            <p className="text-lg text-muted-foreground">
              Comprehensive solutions for your innovation and technology needs
            </p>
          </div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-16 md:py-24">
        <div className="container">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {services.map((service, idx) => {
              const Icon = service.icon;
              return (
                <div key={idx} className="p-8 rounded-lg border border-border bg-card hover:border-primary transition-colors">
                  <Icon className="w-10 h-10 text-primary mb-4" />
                  <h3 className="font-serif text-2xl font-bold mb-3">{service.title}</h3>
                  <p className="text-muted-foreground mb-6">{service.description}</p>
                  <ul className="space-y-2">
                    {service.features.map((feature, fidx) => (
                      <li key={fidx} className="flex items-start gap-2 text-sm">
                        <span className="text-primary font-bold mt-1">•</span>
                        <span>{feature}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Process */}
      <section className="py-16 md:py-24 bg-card">
        <div className="container">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-serif font-bold mb-4">Our Process</h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              A proven methodology for delivering successful projects
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {processSteps.map((item, idx) => (
              <div key={idx} className="p-6 rounded-lg border border-border bg-background">
                <div className="inline-flex items-center justify-center w-14 h-14 rounded-full bg-primary text-primary-foreground font-serif font-bold text-lg mb-4">
                  {item.step}
                </div>
                <h3 className="font-serif font-bold text-lg mb-3">{item.title}</h3>
                <p className="text-sm text-muted-foreground">{item.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-16 md:py-24">
        <div className="container">
          <div className="max-w-3xl">
            <h2 className="text-3xl md:text-4xl font-serif font-bold mb-8">Why Choose HikmaNova</h2>
            
            <div className="space-y-6">
              {[
                {
                  title: "Expert Team",
                  description: "Years of combined experience in AI, data engineering, and cloud architecture",
                },
                {
                  title: "Proven Track Record",
                  description: "Successfully delivered projects to multiple companies",
                },
                {
                  title: "Cutting-Edge Technology",
                  description: "We stay at the forefront of AI and technology trends to deliver modern solutions",
                },
                {
                  title: "Scalable Solutions",
                  description: "Our architectures are designed to grow with your business needs",
                },
                {
                  title: "Transparent Communication",
                  description: "Regular updates, clear milestones, and collaborative partnership approach",
                },
                {
                  title: "Long-Term Support",
                  description: "Ongoing maintenance, optimization, and support after project launch",
                },
              ].map((item, idx) => (
                <div key={idx} className="flex gap-4">
                  <div className="flex-shrink-0">
                    <div className="flex items-center justify-center h-8 w-8 rounded-full bg-primary text-primary-foreground">
                      <span className="text-sm font-bold">✓</span>
                    </div>
                  </div>
                  <div>
                    <h3 className="font-serif font-bold mb-1">{item.title}</h3>
                    <p className="text-muted-foreground">{item.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 md:py-24 bg-primary text-primary-foreground">
        <div className="container text-center">
          <h2 className="text-3xl md:text-4xl font-serif font-bold mb-6">Ready to Get Started?</h2>
          <p className="text-lg mb-8 max-w-2xl mx-auto opacity-90">
            Let's discuss how our services can help you achieve your innovation goals
          </p>
          <Link href="/contact">
            <Button size="lg" variant="secondary">
              Schedule a Consultation
            </Button>
          </Link>
        </div>
      </section>
    </Layout>
  );
}

