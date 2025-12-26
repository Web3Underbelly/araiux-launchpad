import { Helmet } from "react-helmet-async";
import { motion } from "framer-motion";
import { Scale, Users, FileSearch, CheckCircle, ArrowRight } from "lucide-react";
import { Layout } from "@/components/layout/Layout";
import { PageHero } from "@/components/shared/PageHero";
import { CTASection } from "@/components/shared/CTASection";
import { agentops, siteConfig } from "@/data/content";

const iconMap: Record<string, React.ElementType> = {
  Scale,
  Users,
  FileSearch,
  CheckCircle,
};

const AgentOpsPage = () => {
  return (
    <>
      <Helmet>
        <title>AgentOps & Governance | {siteConfig.name}</title>
        <meta name="description" content={agentops.hero.description} />
        <meta property="og:title" content={`AgentOps & Governance | ${siteConfig.name}`} />
        <meta property="og:description" content={agentops.hero.description} />
        <link rel="canonical" href="https://araiux.ca/agentops" />
      </Helmet>
      <Layout>
        <PageHero
          title={agentops.hero.title}
          description={agentops.hero.description}
        />

        {/* Features Grid */}
        <section className="py-24 bg-background">
          <div className="container mx-auto px-4">
            <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
              {agentops.features.map((feature, index) => {
                const Icon = iconMap[feature.icon];
                return (
                  <motion.div
                    key={feature.title}
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
                      {feature.title}
                    </h3>
                    <p className="text-sm text-muted-foreground">
                      {feature.description}
                    </p>
                  </motion.div>
                );
              })}
            </div>
          </div>
        </section>

        {/* Workflow Diagram */}
        <section className="py-24 bg-navy-surface">
          <div className="container mx-auto px-4">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="text-center mb-16"
            >
              <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
                How It Works
              </h2>
              <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
                Every agent action passes through our governance framework
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="max-w-5xl mx-auto"
            >
              {/* Workflow Steps */}
              <div className="flex flex-wrap justify-center gap-4">
                {agentops.workflow.map((item, index) => (
                  <div key={item.step} className="flex items-center">
                    <div className="bg-navy-elevated border border-border rounded-xl p-4 min-w-[140px] text-center hover:border-primary/30 transition-all">
                      <div className="w-8 h-8 rounded-full bg-primary/10 flex items-center justify-center mx-auto mb-2">
                        <span className="text-primary font-bold text-sm">{index + 1}</span>
                      </div>
                      <h4 className="font-semibold text-foreground text-sm mb-1">
                        {item.step}
                      </h4>
                      <p className="text-xs text-muted-foreground">
                        {item.description}
                      </p>
                    </div>
                    {index < agentops.workflow.length - 1 && (
                      <ArrowRight className="w-6 h-6 text-primary/50 mx-2 hidden md:block" />
                    )}
                  </div>
                ))}
              </div>
            </motion.div>
          </div>
        </section>

        <CTASection cta={agentops.cta} />
      </Layout>
    </>
  );
};

export default AgentOpsPage;
