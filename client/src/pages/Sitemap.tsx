import Layout from "@/components/Layout";
import { Link } from "wouter";
import { ArrowLeft } from "lucide-react";

export default function Sitemap() {
  const sections = [
    {
      title: "Main Pages",
      links: [
        { label: "Home", href: "/" },
        { label: "About", href: "/about" },
        { label: "Services", href: "/services" },
        { label: "Managed Services", href: "/managed-services" },
      ]
    },
    {
      title: "Projects & Portfolio",
      links: [
        { label: "Projects", href: "/projects" },
        { label: "FIFA Team Monitor", href: "/projects/fifa-team-monitor" },
        { label: "Nusuk Smart Card", href: "/projects/nusuk-smart-card" },
        { label: "Cryptocurrency Investment Platform", href: "/projects/cryptocurrency-investment-platform" },
        { label: "Smart Chatbot", href: "/projects/smart-chatbot-customer-service" },
        { label: "Intervention Vouchers ERP", href: "/projects/intervention-vouchers-erp" },
        { label: "Technological Dependency Research", href: "/projects/technological-dependency-research" },
        { label: "Neural Vision Platform", href: "/projects/neural-vision-platform" },
        { label: "Data Pipeline Architecture", href: "/projects/data-pipeline-architecture" },
        { label: "Cloud Infrastructure Optimization", href: "/projects/cloud-infrastructure-optimization" },
        { label: "Robotics Control System", href: "/projects/robotics-control-system" },
        { label: "E-Commerce Platform", href: "/projects/ecommerce-platform" },
        { label: "Predictive Analytics Engine", href: "/projects/predictive-analytics-engine" },
        { label: "Real-Time Data Warehouse", href: "/projects/realtime-data-warehouse" },
        { label: "Kubernetes Migration", href: "/projects/kubernetes-migration" },
      ]
    },
    {
      title: "Blog & Resources",
      links: [
        { label: "Blog", href: "/blog" },
        { label: "The Future of AI in Enterprise", href: "/blog/future-of-ai-in-enterprise" },
        { label: "Building Scalable Data Pipelines", href: "/blog/building-scalable-data-pipelines" },
        { label: "Cloud Cost Optimization Strategies", href: "/blog/cloud-cost-optimization-strategies" },
        { label: "Machine Learning in Production", href: "/blog/machine-learning-in-production" },
        { label: "Real-Time Analytics with Streaming Data", href: "/blog/realtime-analytics-streaming-data" },
        { label: "Kubernetes Best Practices", href: "/blog/kubernetes-best-practices" },
      ]
    },
    {
      title: "Support & Legal",
      links: [
        { label: "Contact", href: "/contact" },
        { label: "Privacy Policy", href: "/privacy" },
        { label: "Terms of Service", href: "/terms" },
      ]
    }
  ];

  return (
    <Layout>
      {/* Hero */}
      <section className="py-12 md:py-16 border-b border-border">
        <div className="container max-w-3xl">
          <Link href="/">
            <a className="inline-flex items-center gap-2 text-primary hover:opacity-80 transition-opacity mb-6">
              <ArrowLeft className="w-4 h-4" />
              Back to Home
            </a>
          </Link>
          <h1 className="text-4xl md:text-5xl font-serif font-bold mb-4">Sitemap</h1>
          <p className="text-lg text-muted-foreground">Complete directory of all pages on HikmaNova</p>
        </div>
      </section>

      {/* Content */}
      <section className="py-16 md:py-24">
        <div className="container max-w-4xl">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            {sections.map((section, idx) => (
              <div key={idx}>
                <h2 className="text-2xl font-serif font-bold mb-6">{section.title}</h2>
                <ul className="space-y-3">
                  {section.links.map((link) => (
                    <li key={link.href}>
                      <Link href={link.href}>
                        <a className="text-primary hover:text-primary/80 transition-colors flex items-center gap-2">
                          <span className="text-sm">→</span>
                          {link.label}
                        </a>
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>

          {/* Additional Info */}
          <div className="mt-16 p-8 bg-card rounded-lg border border-border">
            <h3 className="text-xl font-serif font-bold mb-4">About This Sitemap</h3>
            <p className="text-muted-foreground leading-relaxed">
              This sitemap provides a complete overview of all pages available on the HikmaNova website. Use this page to navigate to any section of our site. For more information about our services and projects, please visit our main pages or contact us directly.
            </p>
          </div>
        </div>
      </section>
    </Layout>
  );
}
