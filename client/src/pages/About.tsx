import Layout from "@/components/Layout";
import { CheckCircle } from "lucide-react";

const values = [
  {
    title: "Innovation",
    description: "We push boundaries and explore new possibilities in technology and AI",
  },
  {
    title: "Ethics",
    description: "Responsible AI development with transparency and accountability",
  },
  {
    title: "Education",
    description: "Sharing knowledge and empowering the next generation of innovators",
  },
];

const team = [
  {
    name: "Eng. Ibrahim L.",
    role: "Founder",
    bio: "Keeps teams aligned, goals clear, and every project delivered flawlessly.",
    avatar: "Anonymous.jpg",
  },
  {
    name: "Mr. Hicham",
    role: "Co-Founder",
    bio: "Strives to bridge innovation, functionality, and real-world human needs.",
    avatar: "Anonymous.jpg",
  },
  {
    name: "Eng. Ayoub G.",
    role: "Co-Founder",
    bio: "Innovative engineer solving complex technical challenges with precision and creativity.",
    avatar: "Anonymous.jpg",
  },
];

const timeline = [];
{/*
const timeline = [
  {
    year: "2025",
    title: "Founded",
    description: "HikmaNova was established with a vision to innovate through technology",
  },
  {
    year: "2025",
    title: "First Major Project",
    description: "Delivered AI-powered solution for Fortune 500 company, processing 10M+ records daily",
  },
  {
    year: "2025",
    title: "Team Expansion",
    description: "Grew to 15+ team members across AI, data, and cloud specialties",
  },
  {
    year: "2025",
    title: "Industry Recognition",
    description: "Recognized as top AI innovation studio in the region",
  },
  {
    year: "2025",
    title: "Global Reach",
    description: "Expanded operations internationally with clients across 5 continents",
  },
];
*/}

export default function About() {
  return (
    <Layout>
      {/* Hero */}
      <section className="py-16 md:py-24 bg-card">
        <div className="container">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl font-serif font-bold mb-6">About HikmaNova</h1>
            <p className="text-lg text-muted-foreground">
              We're a team of innovators, engineers, and visionaries dedicated to solving complex problems through cutting-edge technology and artificial intelligence.
            </p>
          </div>
        </div>
      </section>

      {/* Mission */}
      <section className="py-16 md:py-24">
        <div className="container">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl md:text-4xl font-serif font-bold mb-6">Our Mission</h2>
              <p className="text-lg text-muted-foreground mb-4">
                To empower organizations through innovative AI-powered solutions and scalable technology platforms that drive measurable business impact.
              </p>
              <p className="text-lg text-muted-foreground mb-6">
                We believe that technology should be accessible, ethical, and designed with purpose. Every project we undertake is an opportunity to create solutions that matter.
              </p>
              <div className="space-y-3">
                {[
                  "Delivering measurable business value",
                  "Building sustainable and scalable solutions",
                  "Fostering innovation and continuous learning",
                ].map((item, idx) => (
                  <div key={idx} className="flex items-center gap-3">
                    <CheckCircle className="w-5 h-5 text-primary flex-shrink-0" />
                    <span>{item}</span>
                  </div>
                ))}
              </div>
            </div>
            <div className="relative h-96 bg-gradient-to-br from-primary/20 to-accent/20 rounded-lg overflow-hidden">
              <img
                src="https://images.unsplash.com/photo-1552664730-d307ca884978?w=600&h=600&fit=crop"
                alt="Team collaboration"
                className="w-full h-full object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="py-16 md:py-24 bg-card">
        <div className="container">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-serif font-bold mb-4">Our Values</h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              The principles that guide everything we do
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {values.map((value, idx) => (
              <div key={idx} className="p-8 rounded-lg border border-border bg-background">
                <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center mb-4">
                  <span className="text-primary font-serif font-bold text-lg">{idx + 1}</span>
                </div>
                <h3 className="font-serif text-xl font-bold mb-3">{value.title}</h3>
                <p className="text-muted-foreground">{value.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Team */}
      <section className="py-16 md:py-24">
        <div className="container">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-serif font-bold mb-4">Our Team</h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Talented individuals united by a passion for innovation
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {team.map((member, idx) => (
              <div key={idx} className="text-center">
                <div className="mb-4 overflow-hidden rounded-lg h-48">
                  <img
                    src={member.avatar}
                    alt={member.name}
                    className="w-full h-full object-cover"
                  />
                </div>
                <h3 className="font-serif font-bold text-lg mb-1">{member.name}</h3>
                <p className="text-sm text-primary font-semibold mb-2">{member.role}</p>
                <p className="text-sm text-muted-foreground">{member.bio}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Timeline */}
      <section className="py-16 md:py-24 bg-card">
        <div className="container">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-serif font-bold mb-4">Our Journey</h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Key milestones in our growth and evolution
            </p>
          </div>

          <div className="max-w-3xl mx-auto">
            {timeline.map((item, idx) => (
              <div key={idx} className="flex gap-6 mb-8 last:mb-0">
                <div className="flex flex-col items-center">
                  <div className="w-12 h-12 rounded-full bg-primary text-primary-foreground flex items-center justify-center font-serif font-bold">
                    {idx + 1}
                  </div>
                  {idx < timeline.length - 1 && (
                    <div className="w-1 h-24 bg-border mt-4" />
                  )}
                </div>
                <div className="pb-8">
                  <p className="text-sm font-semibold text-primary mb-1">{item.year}</p>
                  <h3 className="font-serif font-bold text-lg mb-2">{item.title}</h3>
                  <p className="text-muted-foreground">{item.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </Layout>
  );
}

