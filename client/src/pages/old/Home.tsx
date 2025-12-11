import { Link } from "wouter";
import { Button } from "@/components/ui/button";
import { ArrowRight, Zap, Brain, Code, Rocket } from "lucide-react";
import Layout from "@/components/Layout";

const featuredProjects = [
  {
    id: 1,
    title: "Neural Vision Platform",
    category: "AI",
    description: "Advanced computer vision system for real-time object detection and classification",
    image: "Image 1.jpg",
    slug: "neural-vision-platform",
  },
  {
    id: 2,
    title: "Data Pipeline Architecture",
    category: "Data",
    description: "Scalable ETL pipeline processing millions of records daily with real-time analytics",
    image: "Image 2.jpg",
    slug: "data-pipeline-architecture",
  },
  {
    id: 3,
    title: "Cloud Infrastructure Optimization",
    category: "Cloud",
    description: "Reduced cloud costs by 40% through intelligent resource allocation and auto-scaling",
    image: "Image 3.jpg",
    slug: "cloud-infrastructure-optimization",
  },
];

const testimonials = [
  {
    id: 1,
    name: "Sarah Chen",
    role: "CTO, TechCorp",
    content: "HikmaNova transformed our AI infrastructure. Their expertise in machine learning and cloud architecture was instrumental to our success.",
    avatar: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=100&h=100&fit=crop",
  },
  {
    id: 2,
    name: "Marcus Johnson",
    role: "VP Engineering, DataFlow Inc",
    content: "The team's approach to data pipeline design was innovative and production-ready. Highly recommended for enterprise solutions.",
    avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=100&h=100&fit=crop",
  },
  {
    id: 3,
    name: "Elena Rodriguez",
    role: "Founder, CloudStart",
    content: "Working with HikmaNova was a game-changer. Their prototyping and product development expertise accelerated our time-to-market.",
    avatar: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=100&h=100&fit=crop",
  },
];

const services = [
  {
    icon: Brain,
    title: "End-to-End Software Development",
    description: "Complete software solutions including mobile apps, web applications, backend systems, and cloud infrastructure",
  },
  {
    icon: Code,
    title: "AI Strategy",
    description: "Develop comprehensive AI strategies tailored to your business goals",
  },
  {
    icon: Zap,
    title: "Product Prototyping",
    description: "Rapid prototyping and MVP development for innovative ideas",
  },
  {
    icon: Rocket,
    title: "IoT Solutions",
    description: "Design and deploy end-to-end IoT & IIoT systems, from device integration to cloud platforms and real-time data visualization",
  },
];

export default function Home() {
  return (
    <Layout>
      {/* Hero Section */}
      <section className="relative overflow-hidden py-20 md:py-32">
        {/* Background gradient */}
        <div className="absolute inset-0 hero-gradient opacity-10 -z-10" />
        
        <div className="container">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-4xl md:text-6xl font-serif font-bold mb-6 leading-tight">
              Innovation Through Technology
            </h1>
            <p className="text-lg md:text-xl text-muted-foreground mb-8 leading-relaxed">
              We build cutting-edge AI-powered solutions, scalable data platforms, and innovative products that drive real business impact.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/projects">
                <Button size="lg" className="gap-2">
                  Explore Projects
                  <ArrowRight className="w-4 h-4" />
                </Button>
              </Link>
              <Link href="/contact">
                <Button size="lg" variant="outline">
                  Get In Touch
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Projects */}
      <section className="py-16 md:py-24 bg-card">
        <div className="container">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-serif font-bold mb-4">Featured Projects</h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Showcasing our latest work in AI, data engineering, and cloud infrastructure
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {featuredProjects.map((project) => (
              <Link key={project.id} href={`/projects/${project.slug}`}>
                <a className="group card-hover rounded-lg overflow-hidden bg-background border border-border">
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
                  <div className="p-6">
                    <h3 className="font-serif text-lg font-bold mb-2 group-hover:text-primary transition-colors">
                      {project.title}
                    </h3>
                    <p className="text-sm text-muted-foreground">
                      {project.description}
                    </p>
                  </div>
                </a>
              </Link>
            ))}
          </div>

          <div className="text-center mt-12">
            <Link href="/projects">
              <Button variant="outline" size="lg" className="gap-2">
                View All Projects
                <ArrowRight className="w-4 h-4" />
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* How We Work */}
      <section className="py-16 md:py-24">
        <div className="container">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-serif font-bold mb-4">How We Work</h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Our proven process for delivering innovative solutions
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
            {[
              { step: "01", title: "Discovery", desc: "Understand your goals and challenges" },
              { step: "02", title: "Strategy", desc: "Develop tailored solutions and roadmaps" },
              { step: "03", title: "Development", desc: "Build with cutting-edge technologies" },
              { step: "04", title: "Deploy", desc: "Launch and optimize for success" },
            ].map((item, idx) => (
              <div key={idx} className="text-center">
                <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-primary text-primary-foreground font-serif font-bold text-xl mb-4">
                  {item.step}
                </div>
                <h3 className="font-serif font-bold text-lg mb-2">{item.title}</h3>
                <p className="text-sm text-muted-foreground">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
      
      {/* Services */}
      <section className="py-16 md:py-24 bg-card">
        <div className="container">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-serif font-bold mb-4">Our Services</h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Comprehensive solutions for your innovation needs
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {services.map((service, idx) => {
              const Icon = service.icon;
              return (
                <div key={idx} className="p-6 rounded-lg border border-border bg-background hover:border-primary transition-colors">
                  <Icon className="w-8 h-8 text-primary mb-4" />
                  <h3 className="font-serif font-bold mb-2">{service.title}</h3>
                  <p className="text-sm text-muted-foreground">{service.description}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Testimonials 
      <section className="py-16 md:py-24">
        <div className="container">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-serif font-bold mb-4">What Clients Say</h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Trusted by leading companies worldwide
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {testimonials.map((testimonial) => (
              <div key={testimonial.id} className="p-6 rounded-lg border border-border bg-card">
                <div className="flex items-center gap-4 mb-4">
                  <img
                    src={testimonial.avatar}
                    alt={testimonial.name}
                    className="w-12 h-12 rounded-full object-cover"
                  />
                  <div>
                    <h4 className="font-semibold">{testimonial.name}</h4>
                    <p className="text-sm text-muted-foreground">{testimonial.role}</p>
                  </div>
                </div>
                <p className="text-sm text-foreground italic">"{testimonial.content}"</p>
              </div>
            ))}
          </div>
        </div>
      </section>
      */}

      {/* CTA Section */}
      <section className="py-16 md:py-24 bg-primary text-primary-foreground">
        <div className="container text-center">
          <h2 className="text-3xl md:text-4xl font-serif font-bold mb-6">Ready to Innovate?</h2>
          <p className="text-lg mb-8 max-w-2xl mx-auto opacity-90">
            Let's work together to bring your next big idea to life
          </p>
          <Link href="/contact">
            <Button size="lg" variant="secondary" className="gap-2">
              Start Your Project
              <ArrowRight className="w-4 h-4" />
            </Button>
          </Link>
        </div>
      </section>
    </Layout>
  );
}

