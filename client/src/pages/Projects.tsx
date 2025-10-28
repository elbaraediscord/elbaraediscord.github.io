import Layout from "@/components/Layout";
import { Link } from "wouter";
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";

const allProjects = [
  {
    id: 1,
    title: "Neural Vision Platform",
    category: "AI",
    description: "Advanced computer vision system for real-time object detection and classification using state-of-the-art deep learning models",
    image: "https://images.unsplash.com/photo-1677442d019cecf8d9f6c4e4e4e4e4e?w=500&h=300&fit=crop",
    slug: "neural-vision-platform",
    year: 2024,
  },
  {
    id: 2,
    title: "Data Pipeline Architecture",
    category: "Data",
    description: "Scalable ETL pipeline processing millions of records daily with real-time analytics and data quality monitoring",
    image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=500&h=300&fit=crop",
    slug: "data-pipeline-architecture",
    year: 2024,
  },
  {
    id: 3,
    title: "Cloud Infrastructure Optimization",
    category: "Cloud",
    description: "Reduced cloud costs by 40% through intelligent resource allocation, auto-scaling, and infrastructure optimization",
    image: "https://images.unsplash.com/photo-1560493676-04071c5f467b?w=500&h=300&fit=crop",
    slug: "cloud-infrastructure-optimization",
    year: 2023,
  },
  {
    id: 4,
    title: "Robotics Control System",
    category: "Robotics",
    description: "Autonomous robotics control system with machine learning-based path planning and obstacle avoidance",
    image: "https://images.unsplash.com/photo-1517694712202-14dd9538aa97?w=500&h=300&fit=crop",
    slug: "robotics-control-system",
    year: 2023,
  },
  {
    id: 5,
    title: "E-Commerce Platform",
    category: "Web",
    description: "Full-stack e-commerce platform with AI-powered recommendations and real-time inventory management",
    image: "https://images.unsplash.com/photo-1460925895917-adf4e565db18?w=500&h=300&fit=crop",
    slug: "ecommerce-platform",
    year: 2023,
  },
  {
    id: 6,
    title: "Predictive Analytics Engine",
    category: "AI",
    description: "Machine learning engine for predictive analytics, forecasting demand and identifying market trends",
    image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=500&h=300&fit=crop",
    slug: "predictive-analytics-engine",
    year: 2024,
  },
  {
    id: 7,
    title: "Real-Time Data Warehouse",
    category: "Data",
    description: "Enterprise data warehouse supporting real-time queries and complex analytical workloads",
    image: "https://images.unsplash.com/photo-1517694712202-14dd9538aa97?w=500&h=300&fit=crop",
    slug: "realtime-data-warehouse",
    year: 2023,
  },
  {
    id: 8,
    title: "Kubernetes Migration",
    category: "Cloud",
    description: "Migrated legacy applications to Kubernetes, improving scalability and reducing operational overhead",
    image: "https://images.unsplash.com/photo-1560493676-04071c5f467b?w=500&h=300&fit=crop",
    slug: "kubernetes-migration",
    year: 2023,
  },
  {
    id: 9,
    title: "Autonomous Delivery Robot",
    category: "Robotics",
    description: "Autonomous delivery robot with computer vision, GPS navigation, and real-time traffic awareness",
    image: "https://images.unsplash.com/photo-1517694712202-14dd9538aa97?w=500&h=300&fit=crop",
    slug: "autonomous-delivery-robot",
    year: 2024,
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
              { label: "Projects Completed", value: "50+" },
              { label: "Clients Served", value: "30+" },
              { label: "Team Members", value: "25+" },
              { label: "Years Experience", value: "15+" },
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

