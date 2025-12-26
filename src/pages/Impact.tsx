import { Helmet } from "react-helmet-async";
import { motion } from "framer-motion";
import { Home, DollarSign, Package, Users, AlertCircle } from "lucide-react";
import { Layout } from "@/components/layout/Layout";
import { PageHero } from "@/components/shared/PageHero";
import { CTASection } from "@/components/shared/CTASection";
import { impact, siteConfig } from "@/data/content";

const iconMap: Record<string, React.ElementType> = {
  Home,
  DollarSign,
  Package,
  Users,
};

const ImpactPage = () => {
  return (
    <>
      <Helmet>
        <title>Impact | {siteConfig.name}</title>
        <meta name="description" content={impact.hero.description} />
        <meta property="og:title" content={`Impact | ${siteConfig.name}`} />
        <meta property="og:description" content={impact.hero.description} />
        <link rel="canonical" href="https://araiux.ca/impact" />
      </Helmet>
      <Layout>
        <PageHero
          subtitle={impact.hero.subtitle}
          title={impact.hero.title}
          description={impact.hero.description}
        />

        {/* Programs Grid */}
        <section className="py-24 bg-background">
          <div className="container mx-auto px-4">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="text-center mb-12"
            >
              <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
                Our Programs
              </h2>
              <p className="text-muted-foreground text-lg">
                Initiatives to democratize access to AI and immersive technologies
              </p>
            </motion.div>

            <div className="grid sm:grid-cols-2 gap-6 max-w-4xl mx-auto">
              {impact.programs.map((program, index) => {
                const Icon = iconMap[program.icon];
                return (
                  <motion.div
                    key={program.title}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                    className="bg-card-gradient border border-border rounded-xl p-6 hover:border-primary/30 transition-all"
                  >
                    <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center mb-4">
                      <Icon className="w-6 h-6 text-primary" />
                    </div>
                    <h3 className="text-lg font-bold text-foreground mb-2">
                      {program.title}
                    </h3>
                    <p className="text-sm text-muted-foreground">
                      {program.description}
                    </p>
                  </motion.div>
                );
              })}
            </div>
          </div>
        </section>

        {/* Note Section */}
        <section className="py-12 bg-navy-surface">
          <div className="container mx-auto px-4">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="max-w-3xl mx-auto bg-navy-elevated border border-border rounded-xl p-6"
            >
              <div className="flex gap-4">
                <AlertCircle className="w-6 h-6 text-primary flex-shrink-0 mt-0.5" />
                <p className="text-muted-foreground">
                  {impact.note}
                </p>
              </div>
            </motion.div>
          </div>
        </section>

        <CTASection cta={impact.cta} />
      </Layout>
    </>
  );
};

export default ImpactPage;
