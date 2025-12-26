import { Helmet } from "react-helmet-async";
import { motion } from "framer-motion";
import { Building, Headphones, Rocket, Check, Image } from "lucide-react";
import { Layout } from "@/components/layout/Layout";
import { PageHero } from "@/components/shared/PageHero";
import { CTASection } from "@/components/shared/CTASection";
import { studio, siteConfig } from "@/data/content";

const iconMap: Record<string, React.ElementType> = {
  Building,
  Headphones,
  Rocket,
};

const StudioPage = () => {
  return (
    <>
      <Helmet>
        <title>AR/VR Studio | {siteConfig.name}</title>
        <meta name="description" content={studio.hero.description} />
        <meta property="og:title" content={`AR/VR Studio | ${siteConfig.name}`} />
        <meta property="og:description" content={studio.hero.description} />
        <link rel="canonical" href="https://araiux.ca/studio" />
      </Helmet>
      <Layout>
        <PageHero
          title={studio.hero.title}
          description={studio.hero.description}
        />

        {/* Offerings Section */}
        <section className="py-24 bg-background">
          <div className="container mx-auto px-4">
            <div className="grid lg:grid-cols-3 gap-8">
              {studio.offerings.map((offering, index) => {
                const Icon = iconMap[offering.icon];
                return (
                  <motion.div
                    key={offering.title}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                    className="bg-card-gradient border border-border rounded-2xl p-8 hover:border-primary/30 transition-all"
                  >
                    <div className="flex items-center justify-between mb-6">
                      <div className="w-14 h-14 rounded-xl bg-primary/10 flex items-center justify-center">
                        <Icon className="w-7 h-7 text-primary" />
                      </div>
                      <span className="text-sm font-medium text-primary bg-primary/10 px-3 py-1 rounded-full">
                        {offering.subtitle}
                      </span>
                    </div>
                    <h3 className="text-xl font-bold text-foreground mb-3">
                      {offering.title}
                    </h3>
                    <p className="text-muted-foreground mb-6">
                      {offering.description}
                    </p>
                    <ul className="space-y-3">
                      {offering.features.map((feature, i) => (
                        <li key={i} className="flex items-center gap-3">
                          <Check className="w-4 h-4 text-primary flex-shrink-0" />
                          <span className="text-sm text-foreground">{feature}</span>
                        </li>
                      ))}
                    </ul>
                  </motion.div>
                );
              })}
            </div>
          </div>
        </section>

        {/* Gallery Placeholder */}
        <section className="py-24 bg-navy-surface">
          <div className="container mx-auto px-4">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="text-center mb-12"
            >
              <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
                Studio Gallery
              </h2>
              <p className="text-muted-foreground">
                A glimpse inside our AR/VR development space
              </p>
            </motion.div>

            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {[1, 2, 3, 4, 5, 6].map((item) => (
                <motion.div
                  key={item}
                  initial={{ opacity: 0, scale: 0.95 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: item * 0.05 }}
                  className="aspect-video bg-navy-elevated border border-border rounded-xl flex items-center justify-center"
                >
                  <div className="text-center">
                    <Image className="w-12 h-12 text-muted-foreground/50 mx-auto mb-2" />
                    <span className="text-sm text-muted-foreground">Studio Image {item}</span>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        <CTASection cta={studio.cta} />
      </Layout>
    </>
  );
};

export default StudioPage;
