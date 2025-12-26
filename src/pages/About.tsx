import { Helmet } from "react-helmet-async";
import { motion } from "framer-motion";
import { Users, Sparkles } from "lucide-react";
import { Layout } from "@/components/layout/Layout";
import { PageHero } from "@/components/shared/PageHero";
import { about, siteConfig } from "@/data/content";

const AboutPage = () => {
  return (
    <>
      <Helmet>
        <title>About | {siteConfig.name}</title>
        <meta name="description" content={about.mission} />
        <meta property="og:title" content={`About | ${siteConfig.name}`} />
        <meta property="og:description" content={about.mission} />
        <link rel="canonical" href="https://araiux.ca/about" />
      </Helmet>
      <Layout>
        <PageHero
          title="About ARAIUX"
          description={about.mission}
        />

        {/* Vision Section */}
        <section className="py-24 bg-background">
          <div className="container mx-auto px-4">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="max-w-3xl mx-auto"
            >
              <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-6">
                Our Vision
              </h2>
              <p className="text-lg text-muted-foreground leading-relaxed">
                {about.vision}
              </p>
            </motion.div>
          </div>
        </section>

        {/* Values Section */}
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
                Our Values
              </h2>
            </motion.div>

            <div className="grid sm:grid-cols-2 gap-6 max-w-4xl mx-auto">
              {about.values.map((value, index) => (
                <motion.div
                  key={value.title}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className="bg-navy-elevated border border-border rounded-xl p-6"
                >
                  <div className="flex items-center gap-3 mb-3">
                    <Sparkles className="w-5 h-5 text-primary" />
                    <h3 className="text-lg font-bold text-foreground">
                      {value.title}
                    </h3>
                  </div>
                  <p className="text-muted-foreground">
                    {value.description}
                  </p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Team Section Placeholder */}
        <section className="py-24 bg-background">
          <div className="container mx-auto px-4">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="max-w-3xl mx-auto text-center"
            >
              <div className="w-16 h-16 rounded-xl bg-primary/10 flex items-center justify-center mx-auto mb-6">
                <Users className="w-8 h-8 text-primary" />
              </div>
              <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
                {about.team.title}
              </h2>
              <p className="text-muted-foreground text-lg">
                {about.team.description}
              </p>
            </motion.div>
          </div>
        </section>
      </Layout>
    </>
  );
};

export default AboutPage;
