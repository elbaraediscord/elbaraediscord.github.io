import Layout from "@/components/Layout";
import { Link } from "wouter";
import { Button } from "@/components/ui/button";
import { Brain, Code, Database, Cloud, Zap, Rocket, BarChart3, Shield } from "lucide-react";
import { useLanguage } from "@/contexts/LanguageContext";
import { useTranslation } from "@/lib/translations";

const services = [
  {
    icon: Brain,
    titleKey: "services.telecom.title",
    descriptionKey: "services.telecom.description",
    featuresKey: ["services.telecom.feature1", "services.telecom.feature2", "services.telecom.feature3"],
  },
  {
    icon: Code,
    titleKey: "services.prototyping.title",
    descriptionKey: "services.prototyping.description",
    featuresKey: ["services.prototyping.feature1", "services.prototyping.feature2", "services.prototyping.feature3", "services.prototyping.feature4"],
  },
  {
    icon: Database,
    titleKey: "services.iot.title",
    descriptionKey: "services.iot.description",
    featuresKey: ["services.iot.feature1", "services.iot.feature2", "services.iot.feature3", "services.iot.feature4"],
  },
  {
    icon: Cloud,
    titleKey: "services.aiStrategy.title",
    descriptionKey: "services.aiStrategy.description",
    featuresKey: ["services.aiStrategy.feature1", "services.aiStrategy.feature2", "services.aiStrategy.feature3", "services.aiStrategy.feature4"],
  },
  {
    icon: Rocket,
    titleKey: "services.devops.title",
    descriptionKey: "services.devops.description",
    featuresKey: ["services.devops.feature1", "services.devops.feature2", "services.devops.feature3", "services.devops.feature4", "services.devops.feature5"],
  },
  {
    icon: BarChart3,
    titleKey: "services.workforce.title",
    descriptionKey: "services.workforce.description",
    featuresKey: ["services.workforce.feature1", "services.workforce.feature2", "services.workforce.feature3", "services.workforce.feature4", "services.workforce.feature5"],
  },
  {
    icon: Zap,
    titleKey: "services.analytics.title",
    descriptionKey: "services.analytics.description",
    featuresKey: ["services.analytics.feature1", "services.analytics.feature2", "services.analytics.feature3", "services.analytics.feature4"],
  },
  {
    icon: Shield,
    titleKey: "services.security.title",
    descriptionKey: "services.security.description",
    featuresKey: ["services.security.feature1", "services.security.feature2", "services.security.feature3", "services.security.feature4"],
  },
];

const processSteps = [
  {
    step: "01",
    titleKey: "services.process.discovery.title",
    descriptionKey: "services.process.discovery.description",
  },
  {
    step: "02",
    titleKey: "services.process.strategy.title",
    descriptionKey: "services.process.strategy.description",
  },
  {
    step: "03",
    titleKey: "services.process.design.title",
    descriptionKey: "services.process.design.description",
  },
  {
    step: "04",
    titleKey: "services.process.implementation.title",
    descriptionKey: "services.process.implementation.description",
  },
  {
    step: "05",
    titleKey: "services.process.testing.title",
    descriptionKey: "services.process.testing.description",
  },
  {
    step: "06",
    titleKey: "services.process.deployment.title",
    descriptionKey: "services.process.deployment.description",
  },
];

const whyChooseUs = [
  { titleKey: "services.why.expert.title", descriptionKey: "services.why.expert.description" },
  { titleKey: "services.why.track.title", descriptionKey: "services.why.track.description" },
  { titleKey: "services.why.technology.title", descriptionKey: "services.why.technology.description" },
  { titleKey: "services.why.scalable.title", descriptionKey: "services.why.scalable.description" },
  { titleKey: "services.why.communication.title", descriptionKey: "services.why.communication.description" },
  { titleKey: "services.why.support.title", descriptionKey: "services.why.support.description" },
];

export default function Services() {
  const { language } = useLanguage();
  const { t } = useTranslation(language);

  return (
    <Layout>
      {/* Hero */}
      <section className="py-16 md:py-24 bg-card">
        <div className="container">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl font-serif font-bold mb-6">{t('services.hero.title')}</h1>
            <p className="text-lg text-muted-foreground">
              {t('services.hero.subtitle')}
            </p>
          </div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-16 md:py-24">
        <div className="container">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {services.map((service, idx) => {
              const Icon = service.icon;
              return (
                <div key={idx} className="p-8 rounded-lg border border-border bg-card hover:border-primary transition-colors">
                  <Icon className="w-10 h-10 text-primary mb-4" />
                  <h3 className="font-serif text-2xl font-bold mb-3">{t(service.titleKey)}</h3>
                  <p className="text-muted-foreground mb-6">{t(service.descriptionKey)}</p>
                  <ul className="space-y-2">
                    {service.featuresKey.map((featureKey, fidx) => (
                      <li key={fidx} className="flex items-start gap-2 text-sm">
                        <span className="text-primary font-bold mt-1">•</span>
                        <span>{t(featureKey)}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Process */}
      <section className="py-16 md:py-24 bg-card">
        <div className="container">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-serif font-bold mb-4">{t('services.process.title')}</h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              {t('services.process.subtitle')}
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {processSteps.map((item, idx) => (
              <div key={idx} className="p-6 rounded-lg border border-border bg-background">
                <div className="inline-flex items-center justify-center w-14 h-14 rounded-full bg-primary text-primary-foreground font-serif font-bold text-lg mb-4">
                  {item.step}
                </div>
                <h3 className="font-serif font-bold text-lg mb-3">{t(item.titleKey)}</h3>
                <p className="text-sm text-muted-foreground">{t(item.descriptionKey)}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-16 md:py-24">
        <div className="container">
          <div className="max-w-3xl">
            <h2 className="text-3xl md:text-4xl font-serif font-bold mb-8">{t('services.why.title')}</h2>
            
            <div className="space-y-6">
              {whyChooseUs.map((item, idx) => (
                <div key={idx} className="flex gap-4">
                  <div className="flex-shrink-0">
                    <div className="flex items-center justify-center h-8 w-8 rounded-full bg-primary text-primary-foreground">
                      <span className="text-sm font-bold">✓</span>
                    </div>
                  </div>
                  <div>
                    <h3 className="font-serif font-bold mb-1">{t(item.titleKey)}</h3>
                    <p className="text-muted-foreground">{t(item.descriptionKey)}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 md:py-24 bg-primary text-primary-foreground">
        <div className="container text-center">
          <h2 className="text-3xl md:text-4xl font-serif font-bold mb-6">{t('services.cta.title')}</h2>
          <p className="text-lg mb-8 max-w-2xl mx-auto opacity-90">
            {t('services.cta.subtitle')}
          </p>
          <Link href="/contact">
            <Button size="lg" variant="secondary">
              {t('services.cta.button')}
            </Button>
          </Link>
        </div>
      </section>
    </Layout>
  );
}
