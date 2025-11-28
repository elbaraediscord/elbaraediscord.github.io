import Layout from "@/components/Layout";
import { useEffect, useState } from "react";
import { solutions, skills, expertiseSummary } from "@/data/managedServices";
import { Brain, Zap, Lightbulb, Radio, Code, Activity, ChevronDown, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";

const iconMap: Record<string, React.ReactNode> = {
  Brain: <Brain className="w-8 h-8" />,
  Zap: <Zap className="w-8 h-8" />,
  Lightbulb: <Lightbulb className="w-8 h-8" />,
  Radio: <Radio className="w-8 h-8" />,
  Code: <Code className="w-8 h-8" />,
  Activity: <Activity className="w-8 h-8" />,
};

export default function ManagedServices() {
  const [expandedSkillCategory, setExpandedSkillCategory] = useState<string | null>(null);
  const [visibleSolutions, setVisibleSolutions] = useState<Set<string>>(new Set());

  // Animate solutions on mount
  useEffect(() => {
    solutions.forEach((solution, index) => {
      setTimeout(() => {
        setVisibleSolutions((prev) => {
          const newSet = new Set(prev);
          newSet.add(solution.id);
          return newSet;
        });
      }, index * 100);
    });
  }, []);

  // Add schema.org structured data
  useEffect(() => {
    const schema = {
      "@context": "https://schema.org",
      "@type": "Service",
      name: "Managed Services",
      provider: {
        "@type": "Organization",
        name: "HikmaNova",
        url: "https://hikmanova.com",
      },
      description: "Comprehensive managed services and outsourcing solutions for AI, IoT, mobile, and cloud infrastructure",
      areaServed: "Worldwide",
      serviceType: [
        "AI Strategy",
        "MLOps",
        "Product Prototyping",
        "IoT Solutions",
        "Software Development",
        "API Testing",
      ],
    };

    const script = document.createElement("script");
    script.type = "application/ld+json";
    script.textContent = JSON.stringify(schema);
    document.head.appendChild(script);

    return () => {
      document.head.removeChild(script);
    };
  }, []);

  // Update page title and meta
  useEffect(() => {
    document.title = "Managed Services | HikmaNova";
    const metaDescription = document.querySelector('meta[name="description"]');
    if (metaDescription) {
      metaDescription.setAttribute(
        "content",
        "Outsourced managed services for AI, IoT, mobile, and cloud solutions. Expert team with deep technical expertise across all modern technologies."
      );
    }
  }, []);

  return (
    <Layout>
      {/* Hero Section */}
      <section className="py-16 md:py-24 bg-gradient-to-br from-primary/5 via-background to-accent/5">
        <div className="container">
          <div className="max-w-4xl mx-auto text-center animate-fade-in">
            <h1 className="text-4xl md:text-6xl font-serif font-bold mb-6 leading-tight">
              Managed Services
            </h1>
            <p className="text-lg md:text-xl text-muted-foreground mb-8 leading-relaxed">
              Comprehensive solutions for your innovation needs. Leverage our deep technical expertise across AI, IoT, mobile, and cloud infrastructure.
            </p>
            {/* Hero Section 
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/projects">
              <Button size="lg" className="gap-2">
                Explore Our Expertise <ArrowRight className="w-4 h-4" />
              </Button>
              </Link>
              <Link href="/projects">
              <Button size="lg" variant="outline">
                Schedule Consultation
              </Button>
              </Link>
            </div> */}
          </div>
        </div>
      </section>

      {/* Solutions Grid */}
      <section className="py-16 md:py-24 border-b border-border">
        <div className="container">
          <div className="max-w-3xl mx-auto mb-12">
            <h2 className="text-3xl md:text-4xl font-serif font-bold mb-4">Our Solutions</h2>
            <p className="text-muted-foreground">
              We provide end-to-end managed services across six core solution areas, each backed by years of production experience.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {solutions.map((solution) => {
              const isVisible = visibleSolutions.has(solution.id);
              return (
                <div
                  key={solution.id}
                  className={`group relative p-6 rounded-lg border border-border bg-card hover:border-primary transition-all duration-300 transform ${
                    isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
                  }`}
                  style={{
                    transitionDelay: `${solutions.indexOf(solution) * 50}ms`,
                  }}
                >
                  {/* Gradient background on hover */}
                  <div className="absolute inset-0 rounded-lg bg-gradient-to-br from-primary/5 to-accent/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

                  <div className="relative z-10">
                    <div className="text-primary mb-4 group-hover:scale-110 transition-transform duration-300">
                      {iconMap[solution.icon]}
                    </div>
                    <h3 className="text-xl font-serif font-bold mb-3">{solution.title}</h3>
                    <p className="text-muted-foreground text-sm leading-relaxed">{solution.description}</p>

                    <div className="mt-4 pt-4 border-t border-border/50 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                      <a href="/contact" className="text-primary text-sm font-medium hover:underline flex items-center gap-2">
                        Learn More <ArrowRight className="w-3 h-3" />
                      </a>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section className="py-16 md:py-24">
        <div className="container">
          <div className="max-w-3xl mx-auto mb-12">
            <h2 className="text-3xl md:text-4xl font-serif font-bold mb-4">Technical Expertise</h2>
            <p className="text-muted-foreground">
              Deep expertise across all modern technology stacks. Click on any category to explore specific skills and tools.
            </p>
          </div>

          <div className="space-y-4">
            {skills.map((skillGroup, idx) => (
              <div
                key={idx}
                className="border border-border rounded-lg overflow-hidden bg-card hover:border-primary/50 transition-colors duration-300 animate-fade-in"
                style={{ animationDelay: `${idx * 50}ms` }}
              >
                <button
                  onClick={() =>
                    setExpandedSkillCategory(
                      expandedSkillCategory === skillGroup.category ? null : skillGroup.category
                    )
                  }
                  className="w-full px-6 py-4 flex items-center justify-between hover:bg-muted/50 transition-colors duration-200"
                  aria-expanded={expandedSkillCategory === skillGroup.category}
                  aria-controls={`skills-${idx}`}
                >
                  <h3 className="text-lg font-serif font-bold text-left">{skillGroup.category}</h3>
                  <ChevronDown
                    className={`w-5 h-5 transition-transform duration-300 ${
                      expandedSkillCategory === skillGroup.category ? "rotate-180" : ""
                    }`}
                  />
                </button>

                {expandedSkillCategory === skillGroup.category && (
                  <div
                    id={`skills-${idx}`}
                    className="px-6 py-4 border-t border-border/50 bg-muted/30 animate-slide-down"
                  >
                    <div className="space-y-6">
                      {skillGroup.subcategories.map((subcat, subIdx) => (
                        <div key={subIdx}>
                          <h4 className="font-semibold text-sm text-primary mb-3">{subcat.name}</h4>
                          <div className="flex flex-wrap gap-2">
                            {subcat.items.map((item, itemIdx) => (
                              <span
                                key={itemIdx}
                                className="px-3 py-1.5 rounded-full bg-primary/10 text-primary text-sm hover:bg-primary/20 transition-colors duration-200 border border-primary/20"
                              >
                                {item}
                              </span>
                            ))}
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Expertise Summary */}
      <section className="py-16 md:py-24 bg-card border-y border-border">
        <div className="container">
          <h2 className="text-3xl md:text-4xl font-serif font-bold mb-12 text-center">High-Level Expertise Summary</h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {Object.entries(expertiseSummary).map(([key, value]) => (
              <div
                key={key}
                className="p-6 rounded-lg border border-border bg-background hover:border-primary/50 transition-colors duration-300 group"
              >
                <h3 className="text-lg font-serif font-bold capitalize mb-3 text-primary group-hover:text-accent transition-colors duration-300">
                  {key.replace(/([A-Z])/g, " $1").trim()}
                </h3>
                <p className="text-muted-foreground text-sm leading-relaxed">{value}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-16 md:py-24">
        <div className="container max-w-3xl">
          <h2 className="text-3xl md:text-4xl font-serif font-bold mb-12 text-center">Why Choose HikmaNova</h2>

          <div className="space-y-6">
            {[
              {
                title: "Production-Ready Expertise",
                description: "Every technology listed has been used in production environments, solving real business challenges at scale.",
              },
              {
                title: "Full-Stack Capabilities",
                description: "From embedded IoT systems to cloud infrastructure, from mobile apps to AI/ML pipelines—we handle it all.",
              },
              {
                title: "Modern Best Practices",
                description: "We follow industry standards for security, performance, scalability, and maintainability in every project.",
              },
              {
                title: "Flexible Engagement Models",
                description: "Whether you need dedicated teams, project-based work, or consulting, we adapt to your needs.",
              },
              {
                title: "Proven Track Record",
                description: "Our portfolio spans startups to enterprises across fintech, energy, healthcare, and technology sectors.",
              },
              {
                title: "Continuous Learning",
                description: "We stay current with emerging technologies and best practices to deliver cutting-edge solutions.",
              },
            ].map((item, idx) => (
              <div
                key={idx}
                className="p-6 rounded-lg border border-border bg-card hover:border-primary/50 transition-all duration-300 group"
              >
                <h3 className="text-lg font-serif font-bold mb-2 group-hover:text-primary transition-colors duration-300">
                  {item.title}
                </h3>
                <p className="text-muted-foreground text-sm">{item.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 md:py-24 bg-primary text-primary-foreground">
        <div className="container text-center">
          <h2 className="text-3xl md:text-4xl font-serif font-bold mb-6">Ready to Outsource Your Project?</h2>
          <p className="text-lg mb-8 max-w-2xl mx-auto opacity-90">
            Let's discuss how our managed services can accelerate your innovation and reduce time-to-market.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/contact">
            <Button size="lg" variant="secondary" className="gap-2">
              Schedule a Consultation <ArrowRight className="w-4 h-4" />
            </Button>
            </Link>
            <Link href="/projects">
            <Button size="lg" variant="outline" className="text-primary-foreground border-primary-foreground hover:bg-primary-foreground hover:text-primary">
              View Case Studies
            </Button>
            </Link>
          </div>
        </div>
      </section>
    </Layout>
  );
}
