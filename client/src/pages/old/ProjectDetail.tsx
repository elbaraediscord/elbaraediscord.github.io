import Layout from "@/components/Layout";
import { Link, useParams } from "wouter";
import { Button } from "@/components/ui/button";
import { ArrowLeft, ArrowRight } from "lucide-react";

const projectsData: Record<string, any> = {
  "fifa-team-monitor": {
    title: "TeamMonitor - AI-Powered Workforce Tracking & Management",
    category: "AI",
    year: 2025,
    description: "AI-powered workforce tracking platform for real-time monitoring, optimization, and coordination of large-scale field teams",
    image: "../Qatar-World-Cup.jpg",
    context: "During the FIFA World Cup 2022, managing thousands of distributed field personnel across multiple venues created operational complexity, delayed reporting, and limited real-time visibility for decision-makers.",
    approach: "We developed an AI-driven workforce management platform integrating real-time GPS tracking, predictive analytics, automated attendance logging, and performance dashboards. The system leveraged machine learning models to forecast staffing needs and optimize task allocation dynamically.",
    results: [
      "Real-time tracking of 5,000+ field staff",
      "35% improvement in response time to incidents",
      "Automated attendance and shift validation",
      "20% increase in operational efficiency",
      "Centralized command dashboard for live monitoring"
    ],
    gallery: ["../Qatar-1.jpg", "../Qatar-2.jpg", "../Qatar-3.jpg"],
    technologies: ["Python", "TensorFlow", "React", "Node.js", "PostgreSQL", "Docker", "AWS"],
    relatedProjects: ["neural-vision-platform", "data-pipeline-architecture"]
  },
  "nusuk-smart-card": {
    title: "Nusuk Smart Card Enhancement",
    category: "AI",
    year: 2025,
    description: "AI-enhanced smart card system for secure identity verification, crowd management, and service optimization for pilgrims",
    image: "../Nusuk-Card.jpg",
    context: "The existing Nusuk smart card system required modernization to improve identity verification speed, enhance security, and provide better analytics for managing millions of pilgrims efficiently.",
    approach: "We integrated artificial intelligence with biometric verification, real-time validation systems, and predictive crowd analytics. The platform included secure QR/NFC authentication, fraud detection algorithms, and centralized data dashboards for authorities.",
    results: [
      "40% faster identity verification process",
      "Enhanced fraud detection with AI anomaly detection",
      "Real-time crowd flow analytics",
      "Improved pilgrim service coordination",
      "Scalable infrastructure supporting millions of users"
    ],
    gallery: ["../Nusuk-1.jpg", "../Nusuk-2.jpg", "../Nusuk-3.jpg"],
    technologies: ["Python", "TensorFlow", "OpenCV", "Node.js", "PostgreSQL", "Kubernetes", "Docker"],
    relatedProjects: ["predictive-analytics-engine", "cloud-infrastructure-optimization"]
  },

  "neural-vision-platform": {
    title: "Neural Vision Platform",
    category: "AI",
    year: 2025,
    description: "Advanced computer vision system for real-time object detection and classification",
    image: "../Image 1.jpg",
    context: "Our client needed a robust computer vision solution to automate quality control in their manufacturing process. Manual inspection was time-consuming and prone to human error.",
    approach: "We developed a deep learning-based system using state-of-the-art convolutional neural networks (CNNs) trained on thousands of product images. The system was deployed on edge devices for real-time processing with minimal latency.",
    results: [
      "99.2% accuracy in defect detection",
      "50% reduction in inspection time",
      "Eliminated 95% of manual inspection errors",
      "ROI achieved in 6 months",
    ],
    gallery: ["../Image 2.jpg", "../Image 3.jpg", "../Image 4.jpg"],
    technologies: ["Python", "TensorFlow", "PyTorch", "OpenCV", "CUDA", "Docker"],
    relatedProjects: ["predictive-analytics-engine", "data-pipeline-architecture"],
  },
  "data-pipeline-architecture": {
    title: "Data Pipeline Architecture",
    category: "Data",
    year: 2025,
    description: "Scalable ETL pipeline processing millions of records daily",
    image: "../Image 2.jpg",
    context: "The client was struggling with data silos and inconsistent reporting across departments. Their legacy systems couldn't handle the growing data volume.",
    approach: "We designed and implemented a modern data pipeline using Apache Spark and Kafka, enabling real-time data ingestion, transformation, and loading. The system supports both batch and streaming workloads.",
    results: [
      "Process 50M+ records daily",
      "99.99% uptime SLA",
      "Sub-second query latency",
      "60% reduction in data processing costs",
    ],
    gallery: ["../Image 5.jpg", "../Image 6.jpg", "../Image 7.jpg"],
    technologies: ["Apache Spark", "Kafka", "Airflow", "PostgreSQL", "Kubernetes", "Terraform"],
    relatedProjects: ["realtime-data-warehouse", "cloud-infrastructure-optimization"],
  },
  "cloud-infrastructure-optimization": {
    title: "Cloud Infrastructure Optimization",
    category: "Cloud",
    year: 2025,
    description: "Reduced cloud costs by 40% through intelligent optimization",
    image: "../Image 3.jpg",
    context: "The client's cloud spending was spiraling out of control with inefficient resource allocation and underutilized services.",
    approach: "We conducted a comprehensive cloud audit, identified optimization opportunities, and implemented auto-scaling policies, reserved instances, and spot instances. We also consolidated redundant services.",
    results: [
      "40% reduction in cloud costs",
      "Improved application performance",
      "Better resource utilization",
      "Automated cost monitoring",
    ],
    gallery: ["../Image 8.jpg", "../Image 9.jpg", "../Image 10.jpg"],
    technologies: ["AWS", "Terraform", "CloudFormation", "Kubernetes", "Prometheus", "Grafana"],
    relatedProjects: ["kubernetes-migration", "data-pipeline-architecture"],
  },
  "robotics-control-system": {
    title: "Robotics Control System",
    category: "IoT & IIoT",
    year: 2025,
    description: "Autonomous robotics control system with ML-based path planning",
    image: "../Image 4.jpg",
    context: "The client needed an autonomous robotic system for warehouse automation with intelligent navigation and obstacle avoidance.",
    approach: "We developed a comprehensive control system using ROS (Robot Operating System) with machine learning-based path planning algorithms. The system integrates LIDAR, cameras, and IMU sensors.",
    results: [
      "95% autonomous operation",
      "Real-time obstacle detection",
      "30% improvement in warehouse efficiency",
      "Scalable to fleet management",
    ],
    gallery: ["../Image 3.jpg", "../Image 6.jpg", "../Image 11.jpg"],
    technologies: ["ROS", "Python", "C++", "LIDAR", "TensorFlow", "Gazebo"],
    relatedProjects: ["neural-vision-platform", "autonomous-delivery-robot"],
  },
  "ecommerce-platform": {
    title: "E-Commerce Platform",
    category: "Software Engineering",
    year: 2025,
    description: "Full-stack e-commerce platform with AI recommendations",
    image: "../Image 5.jpg",
    context: "The client wanted to launch a modern e-commerce platform with personalized recommendations and real-time inventory management.",
    approach: "We built a full-stack platform using React, Node.js, and PostgreSQL with machine learning-powered recommendation engine. The system handles millions of transactions daily.",
    results: [
      "20% increase in average order value",
      "99.9% uptime",
      "Sub-second page load times",
      "Seamless integration with existing systems",
    ],
    gallery: ["../Image 7.jpg", "../Image 8.jpg", "../Image 12.jpg"],
    technologies: ["React", "Node.js", "PostgreSQL", "Redis", "Elasticsearch", "Docker"],
    relatedProjects: ["data-pipeline-architecture", "predictive-analytics-engine"],
  },
  "predictive-analytics-engine": {
    title: "Predictive Analytics Engine",
    category: "AI",
    year: 2025,
    description: "Machine learning engine for predictive analytics",
    image: "../Image 6.jpg",
    context: "The client needed predictive analytics to forecast demand and identify market trends for better business planning.",
    approach: "We developed an ensemble machine learning model combining multiple algorithms for demand forecasting. The system includes automated feature engineering and model retraining.",
    results: [
      "85% forecast accuracy",
      "Reduced inventory costs",
      "Improved demand planning",
      "Real-time predictions",
    ],
    gallery: ["../Image 4.jpg", "../Image 5.jpg", "../Image 9.jpg"],
    technologies: ["Python", "Scikit-learn", "XGBoost", "Pandas", "FastAPI", "PostgreSQL"],
    relatedProjects: ["neural-vision-platform", "data-pipeline-architecture"],
  },
  "realtime-data-warehouse": {
    title: "Real-Time Data Warehouse",
    category: "Data",
    year: 2025,
    description: "Enterprise data warehouse supporting real-time queries",
    image: "../Image 7.jpg",
    context: "The client needed a data warehouse that could support real-time analytics while maintaining historical data for trend analysis.",
    approach: "We implemented a modern data warehouse using Snowflake with real-time data ingestion pipelines. The system supports complex analytical queries with sub-second response times.",
    results: [
      "Real-time analytics capability",
      "Support for 1000+ concurrent users",
      "Reduced query latency by 90%",
      "Cost-effective scaling",
    ],
    gallery: ["../Image 8.jpg", "../Image 10.jpg", "../Image 12.jpg"],
    technologies: ["Snowflake", "dbt", "Fivetran", "Tableau", "Python", "SQL"],
    relatedProjects: ["data-pipeline-architecture", "cloud-infrastructure-optimization"],
  },
  "kubernetes-migration": {
    title: "Kubernetes Migration",
    category: "Cloud",
    year: 2025,
    description: "Migrated legacy applications to Kubernetes",
    image: "../Image 8.jpg",
    context: "The client's legacy infrastructure was difficult to scale and maintain. They needed to modernize their deployment process.",
    approach: "We containerized their applications, set up a Kubernetes cluster, and implemented CI/CD pipelines. The migration was done with zero downtime.",
    results: [
      "Improved scalability",
      "Reduced operational overhead",
      "Faster deployment cycles",
      "Better resource utilization",
    ],
    gallery: ["../Image 9.jpg", "../Image 10.jpg", "../Image 11.jpg"],
    technologies: ["Kubernetes", "Docker", "Helm", "GitLab CI/CD", "Prometheus", "ELK Stack"],
    relatedProjects: ["cloud-infrastructure-optimization", "data-pipeline-architecture"],
  },
  "autonomous-delivery-robot": {
    title: "Autonomous Delivery Robot",
    category: "IoT & IIoT",
    year: 2025,
    description: "Autonomous delivery robot with computer vision and navigation",
    image: "../Image 9.jpg",
    context: "The client wanted to automate last-mile delivery with autonomous robots for urban environments.",
    approach: "We developed a complete autonomous delivery system with computer vision for navigation, real-time traffic awareness, and secure package handling. The system includes cloud-based fleet management.",
    results: [
      "Autonomous operation in urban environments",
      "Real-time traffic adaptation",
      "99.5% successful deliveries",
      "Scalable fleet management",
    ],
    gallery: ["../Image 10.jpg", "../Image 11.jpg", "../Image 12.jpg"],
    technologies: ["ROS", "Python", "TensorFlow", "GPS/GNSS", "LTE/5G", "Cloud APIs"],
    relatedProjects: ["robotics-control-system", "neural-vision-platform"],
  },
};


export default function ProjectDetail() {
  const { slug } = useParams();
  const project = projectsData[slug || ""];

  if (!project) {
    return (
      <Layout>
        <div className="min-h-screen flex items-center justify-center">
          <div className="text-center">
            <h1 className="text-3xl font-serif font-bold mb-4">Project Not Found</h1>
            <p className="text-muted-foreground mb-6">The project you're looking for doesn't exist.</p>
            <Link href="/projects">
              <Button>Back to Projects</Button>
            </Link>
          </div>
        </div>
      </Layout>
    );
  }

  const relatedProjects = project.relatedProjects
    .map((slug: string) => ({ slug, ...projectsData[slug] } as any))
    .slice(0, 3);

  return (
    <Layout>
      {/* Hero */}
      <section className="py-12 md:py-16 border-b border-border">
        <div className="container">
          <Link href="/projects">
            <a className="inline-flex items-center gap-2 text-primary hover:opacity-80 transition-opacity mb-6">
              <ArrowLeft className="w-4 h-4" />
              Back to Projects
            </a>
          </Link>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
            <div>
              <span className="inline-block px-3 py-1 bg-primary text-primary-foreground text-xs font-semibold rounded-full mb-4">
                {project.category}
              </span>
              <h1 className="text-4xl md:text-5xl font-serif font-bold mb-4">{project.title}</h1>
              <p className="text-lg text-muted-foreground mb-6">{project.description}</p>
              <p className="text-sm text-muted-foreground">Completed in {project.year}</p>
            </div>
            <div className="rounded-lg overflow-hidden h-96">
              <img
                src={project.image}
                alt={project.title}
                className="w-full h-full object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Context */}
      <section className="py-16 md:py-24 bg-card">
        <div className="container max-w-3xl">
          <h2 className="text-3xl font-serif font-bold mb-6">Context</h2>
          <p className="text-lg text-muted-foreground leading-relaxed">{project.context}</p>
        </div>
      </section>

      {/* Approach */}
      <section className="py-16 md:py-24">
        <div className="container max-w-3xl">
          <h2 className="text-3xl font-serif font-bold mb-6">Our Approach</h2>
          <p className="text-lg text-muted-foreground leading-relaxed">{project.approach}</p>
        </div>
      </section>

      {/* Results */}
      <section className="py-16 md:py-24 bg-card">
        <div className="container max-w-3xl">
          <h2 className="text-3xl font-serif font-bold mb-8">Results</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {project.results.map((result: string, idx: number) => (
              <div key={idx} className="flex items-start gap-4">
                <div className="flex-shrink-0">
                  <div className="flex items-center justify-center h-8 w-8 rounded-full bg-primary text-primary-foreground">
                    <span className="text-sm font-bold">✓</span>
                  </div>
                </div>
                <p className="text-lg">{result}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Gallery */}
      <section className="py-16 md:py-24">
        <div className="container">
          <h2 className="text-3xl font-serif font-bold mb-8">Gallery</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {project.gallery.map((image: string, idx: number) => (
              <div key={idx} className="rounded-lg overflow-hidden h-64">
                <img
                  src={image}
                  alt={`Gallery ${idx + 1}`}
                  className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
                />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Technologies */}
      <section className="py-16 md:py-24 bg-card">
        <div className="container max-w-3xl">
          <h2 className="text-3xl font-serif font-bold mb-8">Technologies Used</h2>
          <div className="flex flex-wrap gap-3">
            {project.technologies.map((tech: string, idx: number) => (
              <span
                key={idx}
                className="px-4 py-2 rounded-full bg-primary/10 text-primary font-semibold text-sm"
              >
                {tech}
              </span>
            ))}
          </div>
        </div>
      </section>

      {/* Related Projects */}
      {relatedProjects.length > 0 && (
        <section className="py-16 md:py-24">
          <div className="container">
            <h2 className="text-3xl font-serif font-bold mb-8">Related Projects</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {relatedProjects.map((related: any) => (
                <Link key={related.slug} href={`/projects/${related.slug}`}>
                  <a className="group card-hover rounded-lg overflow-hidden bg-card border border-border">
                    <div className="relative overflow-hidden h-48 bg-muted">
                      <img
                        src={related.image}
                        alt={related.title}
                        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                      />
                    </div>
                    <div className="p-6">
                      <h3 className="font-serif text-lg font-bold mb-2 group-hover:text-primary transition-colors">
                        {related.title}
                      </h3>
                      <p className="text-sm text-muted-foreground">
                        {related.description}
                      </p>
                    </div>
                  </a>
                </Link>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* CTA */}
      <section className="py-16 md:py-24 bg-primary text-primary-foreground">
        <div className="container text-center">
          <h2 className="text-3xl md:text-4xl font-serif font-bold mb-6">Interested in a Similar Project?</h2>
          <p className="text-lg mb-8 max-w-2xl mx-auto opacity-90">
            Let's discuss how we can help you achieve your goals
          </p>
          <Link href="/contact">
            <Button size="lg" variant="secondary" className="gap-2">
              Get In Touch
              <ArrowRight className="w-4 h-4" />
            </Button>
          </Link>
        </div>
      </section>
    </Layout>
  );
}

