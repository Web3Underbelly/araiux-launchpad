import { Helmet } from "react-helmet-async";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { Cpu, Zap, ShieldCheck, ArrowRight, Check } from "lucide-react";
import { Layout } from "@/components/layout/Layout";
import { PageHero } from "@/components/shared/PageHero";
import { CTASection } from "@/components/shared/CTASection";
import { Button } from "@/components/ui/button";
import { infrastructure, siteConfig } from "@/data/content";

const iconMap: Record<string, React.ElementType> = {
  Cpu,
  Zap,
  ShieldCheck,
};

const InfrastructurePage = () => {
  return (
    <>
      <Helmet>
        <title>Infrastructure | {siteConfig.name}</title>
        <meta name="description" content={infrastructure.hero.description} />
        <meta property="og:title" content={`Infrastructure | ${siteConfig.name}`} />
        <meta property="og:description" content={infrastructure.hero.description} />
        <link rel="canonical" href="https://araiux.ca/infrastructure" />
      </Helmet>
      <Layout>
        <PageHero
          title={infrastructure.hero.title}
          description={infrastructure.hero.description}
        />

        {/* Products Section */}
        <section className="py-24 bg-background">
          <div className="container mx-auto px-4">
            <div className="grid lg:grid-cols-3 gap-8">
              {infrastructure.products.map((product, index) => {
                const Icon = iconMap[product.icon];
                return (
                  <motion.div
                    key={product.title}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                    className="bg-card-gradient border border-border rounded-2xl p-8 hover:border-primary/30 transition-all"
                  >
                    <div className="w-14 h-14 rounded-xl bg-primary/10 flex items-center justify-center mb-6">
                      <Icon className="w-7 h-7 text-primary" />
                    </div>
                    <h3 className="text-xl font-bold text-foreground mb-3">
                      {product.title}
                    </h3>
                    <p className="text-muted-foreground mb-6">
                      {product.description}
                    </p>
                    <ul className="space-y-3">
                      {product.features.map((feature, i) => (
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

        {/* Comparison Table */}
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
                Compare Options
              </h2>
              <p className="text-muted-foreground">
                Choose the model that fits your workload patterns
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="max-w-3xl mx-auto overflow-hidden rounded-2xl border border-border"
            >
              <table className="w-full">
                <thead>
                  <tr className="bg-navy-elevated">
                    {infrastructure.comparison.headers.map((header, index) => (
                      <th
                        key={header}
                        className={`px-6 py-4 text-left text-foreground font-semibold ${
                          index === 0 ? "" : "text-center"
                        }`}
                      >
                        {header}
                      </th>
                    ))}
                  </tr>
                </thead>
                <tbody>
                  {infrastructure.comparison.rows.map((row, rowIndex) => (
                    <tr
                      key={rowIndex}
                      className={rowIndex % 2 === 0 ? "bg-navy-base" : "bg-navy-surface"}
                    >
                      {row.map((cell, cellIndex) => (
                        <td
                          key={cellIndex}
                          className={`px-6 py-4 ${
                            cellIndex === 0
                              ? "text-foreground font-medium"
                              : "text-center text-muted-foreground"
                          }`}
                        >
                          {cell}
                        </td>
                      ))}
                    </tr>
                  ))}
                </tbody>
              </table>
            </motion.div>
          </div>
        </section>

        <CTASection cta={infrastructure.cta} />
      </Layout>
    </>
  );
};

export default InfrastructurePage;
