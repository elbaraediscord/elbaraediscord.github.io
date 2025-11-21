import Layout from "@/components/Layout";
import { Link } from "wouter";
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";

const allProjects = [
    {
    id: 1,
    title: "Cryptocurrency Investment Platform",
    category: "Web",
    description: "Comprehensive cryptocurrency exchange platform designed to help agencies manage customer portfolios with real-time trading, secure wallets, and advanced analytics",
    image: "cryptocurrency-investment-platform.jpg",
    slug: "cryptocurrency-investment-platform",
    year: 2023,
  },
  {
    id: 2,
    title: "Smart Chatbot for Customer Service",
    category: "AI",
    description: "AI-powered chatbot system that handles thousands of customer service requests on social media platforms with natural language processing and automated responses",
    image: "smart-chatbot-ai.jpg",
    slug: "smart-chatbot-customer-service",
    year: 2023,
  },
  {
    id: 3,
    title: "Intervention Vouchers ERP System",
    category: "Web",
    description: "Enterprise resource planning solution built on Axonaut for managing artisan intervention vouchers, scheduling, and work order tracking with customer management",
    image: "intervention-vouchers-erp.jpg",
    slug: "intervention-vouchers-erp",
    year: 2023,
  },
  {
    id: 4,
    title: "Cybersecurity Consulting & Audit Services",
    category: "Web",
    description: "Comprehensive cybersecurity consulting platform offering organizational audits, compliance evaluation, penetration testing, and security solution deployment",
    image: "cybersecurity-consulting.jpg",
    slug: "cybersecurity-consulting-audit",
    year: 2024,
  },
  {
    id: 5,
    title: "Technological Dependency Research Series",
    category: "Data",
    description: "Educational webinar and conference series exploring technological dependency in software development, cybersecurity solutions, and the role of expertise in innovation",
    image: "technological-dependency-series.jpg",
    slug: "technological-dependency-research",
    year: 2024,
  },
  {
    id: 10,
    title: "Neural Vision Platform",
    category: "AI",
    description: "Advanced computer vision system for real-time object detection and classification using state-of-the-art deep learning models",
    image: "Image 1.jpg",
    slug: "neural-vision-platform",
    year: 2025,
  },
  {
    id: 11,
    title: "Data Pipeline Architecture",
    category: "Data",
    description: "Scalable ETL pipeline processing millions of records daily with real-time analytics and data quality monitoring",
    image: "Image 2.jpg",
    slug: "data-pipeline-architecture",
    year: 2025,
  },
  {
    id: 12,
    title: "Cloud Infrastructure Optimization",
    category: "Cloud",
    description: "Reduced cloud costs by 40% through intelligent resource allocation, auto-scaling, and infrastructure optimization",
    image: "Image 3.jpg",
    slug: "cloud-infrastructure-optimization",
    year: 2025,
  },
  {
    id: 13,
    title: "Robotics Control System",
    category: "Robotics",
    description: "Autonomous robotics control system with machine learning-based path planning and obstacle avoidance",
    image: "Image 4.jpg",
    slug: "robotics-control-system",
    year: 2025,
  },
  {
    id: 5,
    title: "E-Commerce Platform",
    category: "Web",
    description: "Full-stack e-commerce platform with AI-powered recommendations and real-time inventory management",
    image: "Image 5.jpg",
    slug: "ecommerce-platform",
    year: 2025,
  },
  {
    id: 6,
    title: "Predictive Analytics Engine",
    category: "AI",
    description: "Machine learning engine for predictive analytics, forecasting demand and identifying market trends",
    image: "Image 6.jpg",
    slug: "predictive-analytics-engine",
    year: 2025,
  },
  {
    id: 7,
    title: "Real-Time Data Warehouse",
    category: "Data",
    description: "Enterprise data warehouse supporting real-time queries and complex analytical workloads",
    image: "Image 7.jpg",
    slug: "realtime-data-warehouse",
    year: 2025,
  },
  {
    id: 8,
    title: "Kubernetes Migration",
    category: "Cloud",
    description: "Migrated legacy applications to Kubernetes, improving scalability and reducing operational overhead",
    image: "Image 8.jpg",
    slug: "kubernetes-migration",
    year: 2025,
  },
  {
    id: 9,
    title: "Autonomous Delivery Robot",
    category: "Robotics",
    description: "Autonomous delivery robot with computer vision, GPS navigation, and real-time traffic awareness",
    image: "Image 9.jpg",
    slug: "autonomous-delivery-robot",
    year: 2025,
  },
];


const categories = ["All", "AI", "Data", "Cloud", "Web", "Robotics"];

export default function Projects() {
  const [selectedCategory, setSelectedCategory] = useState("All");

  const filteredProjects = selectedCategory === "All"
    ? allProjects
    : allProjects.filter((p) => p.category === selectedCategory);

  return (
    <Layout>
      {/* Hero */}
      <section className="py-16 md:py-24 bg-card">
        <div className="container">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl font-serif font-bold mb-6">Our Projects</h1>
            <p className="text-lg text-muted-foreground">
              Explore our portfolio of innovative solutions across AI, data, cloud, web, and robotics
            </p>
          </div>
        </div>
      </section>

      {/* Filter */}
      <section className="py-8 border-b border-border">
        <div className="container">
          <div className="flex flex-wrap gap-3 justify-center">
            {categories.map((category) => (
              <Button
                key={category}
                variant={selectedCategory === category ? "default" : "outline"}
                onClick={() => setSelectedCategory(category)}
                className="rounded-full"
              >
                {category}
              </Button>
            ))}
          </div>
        </div>
      </section>

      {/* Projects Grid */}
      <section className="py-16 md:py-24">
        <div className="container">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredProjects.map((project) => (
              <Link key={project.id} href={`/projects/${project.slug}`}>
                <a className="group card-hover rounded-lg overflow-hidden bg-card border border-border h-full flex flex-col">
                  <div className="relative overflow-hidden h-48 bg-muted">
                    <img
                      src={project.image}
                      alt={project.title}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                    />
                    <div className="absolute top-4 right-4">
                      <span className="inline-block px-3 py-1 bg-primary text-primary-foreground text-xs font-semibold rounded-full">
                        {project.category}
                      </span>
                    </div>
                  </div>
                  <div className="p-6 flex flex-col flex-1">
                    <h3 className="font-serif text-lg font-bold mb-2 group-hover:text-primary transition-colors">
                      {project.title}
                    </h3>
                    <p className="text-sm text-muted-foreground mb-4 flex-1">
                      {project.description}
                    </p>
                    <div className="flex items-center justify-between pt-4 border-t border-border">
                      <span className="text-xs text-muted-foreground">{project.year}</span>
                      <ArrowRight className="w-4 h-4 text-primary group-hover:translate-x-1 transition-transform" />
                    </div>
                  </div>
                </a>
              </Link>
            ))}
          </div>

          {filteredProjects.length === 0 && (
            <div className="text-center py-12">
              <p className="text-muted-foreground">No projects found in this category.</p>
            </div>
          )}
        </div>
      </section>

      {/* Stats */}
      <section className="py-16 md:py-24 bg-card">
        <div className="container">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8 text-center">
            {[
              { label: "Projects Completed", value: "9+" },
              { label: "Clients Served", value: "X" }, 
              { label: "Team Members", value: "5+" },
              { label: "Years Experience", value: "X" }, 
            ].map((stat, idx) => (
              <div key={idx}>
                <div className="text-4xl md:text-5xl font-serif font-bold text-primary mb-2">
                  {stat.value}
                </div>
                <p className="text-muted-foreground">{stat.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </Layout>
  );
}

