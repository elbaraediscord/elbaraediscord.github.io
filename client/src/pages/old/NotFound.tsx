import Layout from "@/components/Layout";
import { Link } from "wouter";
import { Button } from "@/components/ui/button";
import { ArrowLeft, Home } from "lucide-react";

export default function NotFound() {
  return (
    <Layout>
      <section className="min-h-[60vh] flex items-center justify-center py-16 md:py-24">
        <div className="container max-w-2xl text-center">
          <div className="mb-8">
            <h1 className="text-9xl font-serif font-bold text-primary mb-4">404</h1>
            <h2 className="text-4xl md:text-5xl font-serif font-bold mb-4">Page Not Found</h2>
            <p className="text-xl text-muted-foreground mb-8">
              Sorry, the page you're looking for doesn't exist or has been moved.
            </p>
          </div>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/">
              <Button size="lg" className="gap-2">
                <Home className="w-4 h-4" />
                Go Home
              </Button>
            </Link>
            <Link href="/projects">
              <Button size="lg" variant="outline" className="gap-2">
                <ArrowLeft className="w-4 h-4" />
                Back to Projects
              </Button>
            </Link>
          </div>

          {/* Helpful Links */}
          <div className="mt-16 pt-8 border-t border-border">
            <p className="text-muted-foreground mb-6">Here are some helpful links instead:</p>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
              {[
                { label: "Home", href: "/" },
                { label: "About", href: "/about" },
                { label: "Services", href: "/services" },
                { label: "Projects", href: "/projects" },
                { label: "Blog", href: "/blog" },
                { label: "Contact", href: "/contact" },
              ].map((link) => (
                <Link key={link.href} href={link.href}>
                  <a className="text-primary hover:underline transition-colors">
                    {link.label}
                  </a>
                </Link>
              ))}
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
}

