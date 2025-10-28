import Layout from "@/components/Layout";
import { Link } from "wouter";
import { ArrowRight, Calendar, User } from "lucide-react";

const blogPosts = [
  {
    id: 1,
    title: "The Future of AI in Enterprise",
    slug: "future-of-ai-in-enterprise",
    excerpt: "Exploring how artificial intelligence is transforming enterprise operations and creating new opportunities for innovation.",
    content: "Artificial intelligence is no longer a futuristic concept—it's reshaping how enterprises operate today. From automating routine tasks to enabling data-driven decision making, AI is becoming essential for competitive advantage...",
    author: "X",
    date: "2025-10-20",
    category: "AI",
    image: "Image 1.jpg",
    readTime: "8 min read",
  },
  {
    id: 2,
    title: "Building Scalable Data Pipelines",
    slug: "building-scalable-data-pipelines",
    excerpt: "Best practices for designing and implementing data pipelines that can handle massive scale while maintaining reliability.",
    content: "Scalable data pipelines are the backbone of modern data-driven organizations. In this post, we'll explore the key principles and technologies that enable building pipelines capable of processing millions of events per second...",
    author: "X",
    date: "2025-10-15",
    category: "Data",
    image: "Image 2.jpg",
    readTime: "10 min read",
  },
  {
    id: 3,
    title: "Cloud Cost Optimization Strategies",
    slug: "cloud-cost-optimization-strategies",
    excerpt: "Practical strategies to reduce your cloud spending without sacrificing performance or reliability.",
    content: "Cloud costs can spiral out of control if not managed properly. We've helped dozens of companies reduce their cloud spending by 30-50% through strategic optimization. Here's what we've learned...",
    author: "X",
    date: "2025-10-10",
    category: "Cloud",
    image: "Image 3.jpg",
    readTime: "7 min read",
  },
  {
    id: 4,
    title: "Machine Learning in Production",
    slug: "machine-learning-in-production",
    excerpt: "Challenges and solutions for deploying machine learning models in production environments at scale.",
    content: "Deploying machine learning models to production is fundamentally different from building models in notebooks. In this comprehensive guide, we'll cover the key challenges and proven solutions...",
    author: "X",
    date: "2025-10-05",
    category: "AI",
    image: "Image 4.jpg",
    readTime: "12 min read",
  },
  {
    id: 5,
    title: "Real-Time Analytics with Streaming Data",
    slug: "realtime-analytics-streaming-data",
    excerpt: "How to build real-time analytics systems that process streaming data and provide instant insights.",
    content: "Real-time analytics has become critical for businesses that need to make decisions based on current data. This post explores the technologies and architectures that enable real-time insights...",
    author: "X",
    date: "2025-09-30",
    category: "Data",
    image: "Image 5.jpg",
    readTime: "9 min read",
  },
  {
    id: 6,
    title: "Kubernetes Best Practices",
    slug: "kubernetes-best-practices",
    excerpt: "Essential best practices for running Kubernetes in production and avoiding common pitfalls.",
    content: "Kubernetes is powerful but complex. Getting it right requires understanding best practices for security, reliability, and operations. Let's dive into the key practices we recommend...",
    author: "X",
    date: "2025-09-25",
    category: "Cloud",
    image: "Image 6.jpg",
    readTime: "11 min read",
  },

];

export default function Blog() {
  return (
    <Layout>
      {/* Hero */}
      <section className="py-16 md:py-24 bg-card">
        <div className="container">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl font-serif font-bold mb-6">Blog</h1>
            <p className="text-lg text-muted-foreground">
              Insights, tutorials, and best practices on AI, data engineering, and cloud technologies
            </p>
          </div>
        </div>
      </section>

      {/* Featured Post */}
      {blogPosts.length > 0 && (
        <section className="py-16 md:py-24 border-b border-border">
          <div className="container">
            <Link href={`/blog/${blogPosts[0].slug}`}>
              <a className="group block">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
                  <div className="rounded-lg overflow-hidden h-96">
                    <img
                      src={blogPosts[0].image}
                      alt={blogPosts[0].title}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                    />
                  </div>
                  <div>
                    <span className="inline-block px-3 py-1 bg-primary text-primary-foreground text-xs font-semibold rounded-full mb-4">
                      Featured
                    </span>
                    <h2 className="text-3xl md:text-4xl font-serif font-bold mb-4 group-hover:text-primary transition-colors">
                      {blogPosts[0].title}
                    </h2>
                    <p className="text-lg text-muted-foreground mb-6">
                      {blogPosts[0].excerpt}
                    </p>
                    <div className="flex flex-wrap gap-4 text-sm text-muted-foreground mb-6">
                      <div className="flex items-center gap-2">
                        <User className="w-4 h-4" />
                        {blogPosts[0].author}
                      </div>
                      <div className="flex items-center gap-2">
                        <Calendar className="w-4 h-4" />
                        {new Date(blogPosts[0].date).toLocaleDateString('en-US', {
                          year: 'numeric',
                          month: 'long',
                          day: 'numeric',
                        })}
                      </div>
                      <span>{blogPosts[0].readTime}</span>
                    </div>
                    <div className="flex items-center gap-2 text-primary font-semibold group-hover:gap-3 transition-all">
                      Read Article
                      <ArrowRight className="w-4 h-4" />
                    </div>
                  </div>
                </div>
              </a>
            </Link>
          </div>
        </section>
      )}

      {/* Blog Grid */}
      <section className="py-16 md:py-24">
        <div className="container">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {blogPosts.slice(1).map((post) => (
              <Link key={post.id} href={`/blog/${post.slug}`}>
                <a className="group card-hover rounded-lg overflow-hidden bg-card border border-border flex flex-col h-full">
                  <div className="relative overflow-hidden h-48 bg-muted">
                    <img
                      src={post.image}
                      alt={post.title}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                    />
                    <div className="absolute top-4 right-4">
                      <span className="inline-block px-3 py-1 bg-primary text-primary-foreground text-xs font-semibold rounded-full">
                        {post.category}
                      </span>
                    </div>
                  </div>
                  <div className="p-6 flex flex-col flex-1">
                    <h3 className="font-serif text-lg font-bold mb-2 group-hover:text-primary transition-colors">
                      {post.title}
                    </h3>
                    <p className="text-sm text-muted-foreground mb-4 flex-1">
                      {post.excerpt}
                    </p>
                    <div className="flex flex-wrap gap-3 text-xs text-muted-foreground pt-4 border-t border-border">
                      <div className="flex items-center gap-1">
                        <User className="w-3 h-3" />
                        {post.author}
                      </div>
                      <div className="flex items-center gap-1">
                        <Calendar className="w-3 h-3" />
                        {new Date(post.date).toLocaleDateString('en-US', {
                          month: 'short',
                          day: 'numeric',
                        })}
                      </div>
                      <span>{post.readTime}</span>
                    </div>
                  </div>
                </a>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Newsletter */}
      <section className="py-16 md:py-24 bg-card">
        <div className="container max-w-2xl">
          <div className="text-center mb-8">
            <h2 className="text-3xl font-serif font-bold mb-4">Subscribe to Our Newsletter</h2>
            <p className="text-muted-foreground">
              Get the latest articles, insights, and updates delivered to your inbox
            </p>
          </div>
          <form className="flex flex-col sm:flex-row gap-3">
            <input
              type="email"
              placeholder="Enter your email"
              className="flex-1 px-4 py-3 rounded-lg border border-border bg-background focus:outline-none focus:ring-2 focus:ring-primary"
              required
            />
            <button
              type="submit"
              className="px-6 py-3 rounded-lg bg-primary text-primary-foreground font-semibold hover:opacity-90 transition-opacity whitespace-nowrap"
            >
              Subscribe
            </button>
          </form>
        </div>
      </section>
    </Layout>
  );
}

