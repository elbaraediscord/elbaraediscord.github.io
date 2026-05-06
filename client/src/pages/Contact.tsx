import Layout from "@/components/Layout";
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Mail, Phone, MapPin, Send } from "lucide-react";
import { toast } from "sonner";
import { useLanguage } from "@/contexts/LanguageContext";
import { useTranslation } from "@/lib/translations";

export default function Contact() {
  const { language } = useLanguage();
  const { t } = useTranslation(language);

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    // Validation
    if (!formData.name.trim()) {
      toast.error(t('contact.validation.name'));
      return;
    }
    if (!formData.email.trim() || !formData.email.includes("@")) {
      toast.error(t('contact.validation.email'));
      return;
    }
    if (!formData.subject.trim()) {
      toast.error(t('contact.validation.subject'));
      return;
    }
    if (!formData.message.trim()) {
      toast.error(t('contact.validation.message'));
      return;
    }

    setIsSubmitting(true);

    try {
      const response = await fetch("https://formspree.io/f/mkglzgqd", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          name: formData.name,
          email: formData.email,
          subject: formData.subject,
          message: formData.message,
        }),
      });

      if (response.ok) {
        toast.success(t('contact.success'));
        setFormData({
          name: "",
          email: "",
          subject: "",
          message: "",
        });
      } else {
        toast.error(t('contact.error'));
      }
    } catch (error) {
      toast.error(t('contact.errorOccurred'));
    } finally {
      setIsSubmitting(false);
    }
  };

  const faqs = [
    { qKey: "contact.faq.timeline.q", aKey: "contact.faq.timeline.a" },
    { qKey: "contact.faq.support.q", aKey: "contact.faq.support.a" },
    { qKey: "contact.faq.technologies.q", aKey: "contact.faq.technologies.a" },
    { qKey: "contact.faq.confidentiality.q", aKey: "contact.faq.confidentiality.a" },
    { qKey: "contact.faq.pricing.q", aKey: "contact.faq.pricing.a" },
    { qKey: "contact.faq.remote.q", aKey: "contact.faq.remote.a" },
  ];

  return (
    <Layout>
      {/* Hero */}
      <section className="py-16 md:py-24 bg-card">
        <div className="container">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl font-serif font-bold mb-6">{t('contact.hero.title')}</h1>
            <p className="text-lg text-muted-foreground">
              {t('contact.hero.subtitle')}
            </p>
          </div>
        </div>
      </section>

      {/* Contact Info */}
      <section className="py-16 md:py-24 border-b border-border">
        <div className="container">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="inline-flex items-center justify-center w-12 h-12 rounded-full bg-primary/10 mb-4">
                <Mail className="w-6 h-6 text-primary" />
              </div>
              <h3 className="font-serif font-bold text-lg mb-2">{t('contact.info.email.label')}</h3>
              <a
                href="mailto:info@hikmanova.com"
                className="text-muted-foreground hover:text-primary transition-colors"
              >
                info@hikmanova.com
              </a>
            </div>

            {/* Phone section commented out
            <div className="text-center">
              <div className="inline-flex items-center justify-center w-12 h-12 rounded-full bg-primary/10 mb-4">
                <Phone className="w-6 h-6 text-primary" />
              </div>
              <h3 className="font-serif font-bold text-lg mb-2">{t('contact.info.phone.label')}</h3>
              <a
                href="tel:+213553843333"
                className="text-muted-foreground hover:text-primary transition-colors"
              >
                +213 553 84 33 33
              </a>
            </div>
            */

            <div className="text-center">
              <div className="inline-flex items-center justify-center w-12 h-12 rounded-full bg-primary/10 mb-4">
                <MapPin className="w-6 h-6 text-primary" />
              </div>
              <h3 className="font-serif font-bold text-lg mb-2">{t('contact.info.location.label')}</h3>
              <p className="text-muted-foreground">
                {t('contact.info.location.city')}<br />
                {t('contact.info.location.country')}
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Form */}
      <section className="py-16 md:py-24">
        <div className="container max-w-2xl">
          <div className="mb-12">
            <h2 className="text-3xl font-serif font-bold mb-4">{t('contact.form.title')}</h2>
            <p className="text-muted-foreground">
              {t('contact.form.subtitle')}
            </p>
          </div>

          <form onSubmit={handleSubmit} className="space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <label htmlFor="name" className="block text-sm font-semibold mb-2">
                  {t('contact.form.name')}
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  placeholder={t('contact.form.namePlaceholder')}
                  className="w-full px-4 py-3 rounded-lg border border-border bg-background focus:outline-none focus:ring-2 focus:ring-primary"
                  required
                />
              </div>

              <div>
                <label htmlFor="email" className="block text-sm font-semibold mb-2">
                  {t('contact.form.email')}
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  placeholder={t('contact.form.emailPlaceholder')}
                  className="w-full px-4 py-3 rounded-lg border border-border bg-background focus:outline-none focus:ring-2 focus:ring-primary"
                  required
                />
              </div>
            </div>
          
            <div>
              <label htmlFor="subject" className="block text-sm font-semibold mb-2">
                {t('contact.form.subject')}
              </label>
              <input
                type="text"
                id="subject"
                name="subject"
                value={formData.subject}
                onChange={handleChange}
                placeholder={t('contact.form.subjectPlaceholder')}
                className="w-full px-4 py-3 rounded-lg border border-border bg-background focus:outline-none focus:ring-2 focus:ring-primary"
                required
              />
            </div>

            <div>
              <label htmlFor="message" className="block text-sm font-semibold mb-2">
                {t('contact.form.message')}
              </label>
              <textarea
                id="message"
                name="message"
                value={formData.message}
                onChange={handleChange}
                placeholder={t('contact.form.messagePlaceholder')}
                rows={6}
                className="w-full px-4 py-3 rounded-lg border border-border bg-background focus:outline-none focus:ring-2 focus:ring-primary resize-none"
                required
              />
            </div>

            <Button
              type="submit"
              size="lg"
              disabled={isSubmitting}
              className="w-full gap-2"
            >
              {isSubmitting ? (
                <>
                  <span>{t('contact.form.sending')}</span>
                </>
              ) : (
                <>
                  <Send className="w-4 h-4" />
                  {t('contact.form.send')}
                </>
              )}
            </Button>
          </form>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-16 md:py-24 bg-card">
        <div className="container max-w-3xl">
          <h2 className="text-3xl font-serif font-bold mb-8">{t('contact.faq.title')}</h2>

          <div className="space-y-6">
            {faqs.map((item, idx) => (
              <div key={idx} className="p-6 rounded-lg border border-border bg-background">
                <h3 className="font-serif font-bold text-lg mb-3">{t(item.qKey)}</h3>
                <p className="text-muted-foreground">{t(item.aKey)}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </Layout>
  );
}
