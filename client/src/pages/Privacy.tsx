import Layout from "@/components/Layout";
import { Link } from "wouter";
import { ArrowLeft } from "lucide-react";

export default function Privacy() {
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
          <h1 className="text-4xl md:text-5xl font-serif font-bold mb-4">Privacy Policy</h1>
          <p className="text-lg text-muted-foreground">Last updated: May 2025</p>
        </div>
      </section>

      {/* Content */}
      <section className="py-16 md:py-24">
        <div className="container max-w-3xl">
          <div className="prose prose-invert max-w-none space-y-6">
            <div>
              <h2 className="text-2xl font-serif font-bold mb-4">1. Introduction</h2>
              <p className="text-muted-foreground leading-relaxed">
                HikmaNova ("we", "us", "our") operates the hikmanova.com website (the "Service"). This page informs you of our policies regarding the collection, use, and disclosure of personal data when you use our Service and the choices you have associated with that data.
              </p>
            </div>

            <div>
              <h2 className="text-2xl font-serif font-bold mb-4">2. Information Collection and Use</h2>
              <p className="text-muted-foreground leading-relaxed mb-4">
                We collect several different types of information for various purposes to provide and improve our Service to you.
              </p>
              <h3 className="text-xl font-semibold mb-2">Types of Data Collected:</h3>
              <ul className="list-disc list-inside space-y-2 text-muted-foreground">
                <li>Personal Data: Name, email address, phone number, and other contact information</li>
                <li>Usage Data: Browser type, IP address, pages visited, and time spent on pages</li>
                <li>Cookies and Tracking: Information collected through cookies and similar technologies</li>
              </ul>
            </div>

            <div>
              <h2 className="text-2xl font-serif font-bold mb-4">3. Use of Data</h2>
              <p className="text-muted-foreground leading-relaxed mb-4">
                HikmaNova uses the collected data for various purposes:
              </p>
              <ul className="list-disc list-inside space-y-2 text-muted-foreground">
                <li>To provide and maintain our Service</li>
                <li>To notify you about changes to our Service</li>
                <li>To provide customer support</li>
                <li>To gather analysis or valuable information so that we can improve our Service</li>
                <li>To monitor the usage of our Service</li>
                <li>To detect, prevent and address technical issues</li>
              </ul>
            </div>

            <div>
              <h2 className="text-2xl font-serif font-bold mb-4">4. Security of Data</h2>
              <p className="text-muted-foreground leading-relaxed">
                The security of your data is important to us but remember that no method of transmission over the Internet or method of electronic storage is 100% secure. While we strive to use commercially acceptable means to protect your Personal Data, we cannot guarantee its absolute security.
              </p>
            </div>

            <div>
              <h2 className="text-2xl font-serif font-bold mb-4">5. Changes to This Privacy Policy</h2>
              <p className="text-muted-foreground leading-relaxed">
                We may update our Privacy Policy from time to time. We will notify you of any changes by posting the new Privacy Policy on this page and updating the "Last updated" date at the top of this Privacy Policy.
              </p>
            </div>

            <div>
              <h2 className="text-2xl font-serif font-bold mb-4">6. Contact Us</h2>
              <p className="text-muted-foreground leading-relaxed">
                If you have any questions about this Privacy Policy, please contact us at:
              </p>
              <div className="mt-4 text-muted-foreground">
                <p>Email: info@hikmanova.com</p>
                {/* <p>Phone: +213 553 84 33 33</p> */}
                <p>Address: Algiers, Algeria</p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
}
