import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";

interface CTASectionProps {
  title?: string;
  description?: string;
  cta: {
    label: string;
    href: string;
  };
}

export function CTASection({ 
  title = "Ready to Get Started?", 
  description = "Let's discuss how ARAIUX can support your AI and immersive technology initiatives.",
  cta 
}: CTASectionProps) {
  return (
    <section className="py-24 bg-background">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="max-w-3xl mx-auto text-center"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            {title}
          </h2>
          <p className="text-muted-foreground text-lg mb-8">
            {description}
          </p>
          <Button variant="hero" size="xl" asChild>
            <Link to={cta.href}>
              {cta.label}
              <ArrowRight className="w-5 h-5" />
            </Link>
          </Button>
        </motion.div>
      </div>
    </section>
  );
}
