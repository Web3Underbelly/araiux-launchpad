import { motion } from "framer-motion";
import { MapPin, Lock, FileText, Eye } from "lucide-react";
import { trustFactors } from "@/data/content";

const iconMap: Record<string, React.ElementType> = {
  MapPin,
  Lock,
  FileText,
  Eye,
};

export function TrustSection() {
  return (
    <section className="py-24 bg-navy-surface">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="text-3xl md:text-4xl font-bold text-foreground mb-4"
          >
            Trust & Compliance
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="text-muted-foreground text-lg max-w-2xl mx-auto"
          >
            Built for organizations where governance, security, and data sovereignty are non-negotiable
          </motion.p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {trustFactors.map((factor, index) => {
            const Icon = iconMap[factor.icon];
            return (
              <motion.div
                key={factor.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="text-center p-6"
              >
                <div className="w-14 h-14 rounded-xl bg-primary/10 flex items-center justify-center mx-auto mb-4">
                  <Icon className="w-7 h-7 text-primary" />
                </div>
                <h3 className="text-lg font-bold text-foreground mb-2">
                  {factor.title}
                </h3>
                <p className="text-sm text-muted-foreground">
                  {factor.description}
                </p>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
