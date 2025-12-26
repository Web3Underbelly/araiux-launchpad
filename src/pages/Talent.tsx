import { Helmet } from "react-helmet-async";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { Glasses, Brain, Settings, Database, Shield, Palette, GraduationCap, Check, ArrowRight } from "lucide-react";
import { Layout } from "@/components/layout/Layout";
import { PageHero } from "@/components/shared/PageHero";
import { Button } from "@/components/ui/button";
import { talent, siteConfig } from "@/data/content";

const iconMap: Record<string, React.ElementType> = {
  Glasses,
  Brain,
  Settings,
  Database,
  Shield,
  Palette,
};

const TalentPage = () => {
  return (
    <>
      <Helmet>
        <title>Talent & Training | {siteConfig.name}</title>
        <meta name="description" content={talent.hero.description} />
        <meta property="og:title" content={`Talent & Training | ${siteConfig.name}`} />
        <meta property="og:description" content={talent.hero.description} />
        <link rel="canonical" href="https://araiux.ca/talent" />
      </Helmet>
      <Layout>
        <PageHero
          title={talent.hero.title}
          description={talent.hero.description}
        />

        {/* Roles Grid */}
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
                Available Roles
              </h2>
              <p className="text-muted-foreground text-lg">
                Specialists ready to join your team on a fractional or project basis
              </p>
            </motion.div>

            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {talent.roles.map((role, index) => {
                const Icon = iconMap[role.icon];
                return (
                  <motion.div
                    key={role.title}
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
                      {role.title}
                    </h3>
                    <p className="text-sm text-muted-foreground">
                      {role.description}
                    </p>
                  </motion.div>
                );
              })}
            </div>
          </div>
        </section>

        {/* Academy Section */}
        <section className="py-24 bg-navy-surface">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              <div className="grid lg:grid-cols-2 gap-12 items-center">
                <motion.div
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5 }}
                >
                  <div className="w-16 h-16 rounded-xl bg-primary/10 flex items-center justify-center mb-6">
                    <GraduationCap className="w-8 h-8 text-primary" />
                  </div>
                  <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
                    {talent.academy.title}
                  </h2>
                  <p className="text-muted-foreground text-lg">
                    {talent.academy.description}
                  </p>
                </motion.div>

                <motion.div
                  initial={{ opacity: 0, x: 20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: 0.1 }}
                  className="space-y-4"
                >
                  {talent.academy.programs.map((program, index) => (
                    <div
                      key={index}
                      className="flex items-center gap-3 bg-navy-elevated border border-border rounded-lg p-4"
                    >
                      <Check className="w-5 h-5 text-primary flex-shrink-0" />
                      <span className="text-foreground">{program}</span>
                    </div>
                  ))}
                </motion.div>
              </div>
            </div>
          </div>
        </section>

        {/* CTAs */}
        <section className="py-24 bg-background">
          <div className="container mx-auto px-4">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="max-w-2xl mx-auto text-center"
            >
              <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-8">
                Get Started
              </h2>
              <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
                {talent.ctas.map((cta, index) => (
                  <Button
                    key={cta.label}
                    variant={index === 0 ? "hero" : "heroOutline"}
                    size="xl"
                    asChild
                  >
                    <Link to={cta.href}>
                      {cta.label}
                      <ArrowRight className="w-5 h-5" />
                    </Link>
                  </Button>
                ))}
              </div>
            </motion.div>
          </div>
        </section>
      </Layout>
    </>
  );
};

export default TalentPage;
