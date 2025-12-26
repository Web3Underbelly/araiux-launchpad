import { useState, useEffect } from "react";
import { useSearchParams } from "react-router-dom";
import { Helmet } from "react-helmet-async";
import { motion } from "framer-motion";
import { Send, Calendar, CheckCircle, AlertCircle } from "lucide-react";
import { z } from "zod";
import { Layout } from "@/components/layout/Layout";
import { PageHero } from "@/components/shared/PageHero";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { contact, siteConfig } from "@/data/content";

const contactSchema = z.object({
  name: z.string().trim().min(1, "Name is required").max(100, "Name must be less than 100 characters"),
  email: z.string().trim().email("Invalid email address").max(255, "Email must be less than 255 characters"),
  organization: z.string().trim().max(200, "Organization must be less than 200 characters").optional(),
  interest: z.string().min(1, "Please select an interest area"),
  message: z.string().trim().min(1, "Message is required").max(2000, "Message must be less than 2000 characters"),
});

type ContactFormData = z.infer<typeof contactSchema>;

const ContactPage = () => {
  const [searchParams] = useSearchParams();
  const [formData, setFormData] = useState<ContactFormData>({
    name: "",
    email: "",
    organization: "",
    interest: searchParams.get("interest") || "",
    message: "",
  });
  const [errors, setErrors] = useState<Partial<Record<keyof ContactFormData, string>>>({});
  const [status, setStatus] = useState<"idle" | "submitting" | "success" | "error">("idle");

  useEffect(() => {
    const interest = searchParams.get("interest");
    if (interest) {
      setFormData((prev) => ({ ...prev, interest }));
    }
  }, [searchParams]);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
    if (errors[name as keyof ContactFormData]) {
      setErrors((prev) => ({ ...prev, [name]: undefined }));
    }
  };

  const handleSelectChange = (value: string) => {
    setFormData((prev) => ({ ...prev, interest: value }));
    if (errors.interest) {
      setErrors((prev) => ({ ...prev, interest: undefined }));
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setErrors({});

    const result = contactSchema.safeParse(formData);
    if (!result.success) {
      const fieldErrors: Partial<Record<keyof ContactFormData, string>> = {};
      result.error.errors.forEach((err) => {
        if (err.path[0]) {
          fieldErrors[err.path[0] as keyof ContactFormData] = err.message;
        }
      });
      setErrors(fieldErrors);
      return;
    }

    setStatus("submitting");

    // Simulate API call - replace with actual endpoint
    try {
      await new Promise((resolve) => setTimeout(resolve, 1500));
      setStatus("success");
      setFormData({
        name: "",
        email: "",
        organization: "",
        interest: "",
        message: "",
      });
    } catch {
      setStatus("error");
    }
  };

  return (
    <>
      <Helmet>
        <title>Contact | {siteConfig.name}</title>
        <meta name="description" content={contact.description} />
        <meta property="og:title" content={`Contact | ${siteConfig.name}`} />
        <meta property="og:description" content={contact.description} />
        <link rel="canonical" href="https://araiux.ca/contact" />
      </Helmet>
      <Layout>
        <PageHero
          title={contact.title}
          description={contact.description}
        />

        <section className="py-24 bg-background">
          <div className="container mx-auto px-4">
            <div className="grid lg:grid-cols-2 gap-12 max-w-5xl mx-auto">
              {/* Form */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
              >
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid sm:grid-cols-2 gap-6">
                    <div className="space-y-2">
                      <Label htmlFor="name">Name *</Label>
                      <Input
                        id="name"
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                        placeholder="Your name"
                        className={errors.name ? "border-destructive" : ""}
                      />
                      {errors.name && (
                        <p className="text-sm text-destructive">{errors.name}</p>
                      )}
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="email">Email *</Label>
                      <Input
                        id="email"
                        name="email"
                        type="email"
                        value={formData.email}
                        onChange={handleChange}
                        placeholder="you@company.com"
                        className={errors.email ? "border-destructive" : ""}
                      />
                      {errors.email && (
                        <p className="text-sm text-destructive">{errors.email}</p>
                      )}
                    </div>
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="organization">Organization</Label>
                    <Input
                      id="organization"
                      name="organization"
                      value={formData.organization}
                      onChange={handleChange}
                      placeholder="Your company or organization"
                      className={errors.organization ? "border-destructive" : ""}
                    />
                    {errors.organization && (
                      <p className="text-sm text-destructive">{errors.organization}</p>
                    )}
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="interest">I'm interested in *</Label>
                    <Select
                      value={formData.interest}
                      onValueChange={handleSelectChange}
                    >
                      <SelectTrigger
                        className={errors.interest ? "border-destructive" : ""}
                      >
                        <SelectValue placeholder="Select an option" />
                      </SelectTrigger>
                      <SelectContent>
                        {contact.interests.map((interest) => (
                          <SelectItem key={interest.value} value={interest.value}>
                            {interest.label}
                          </SelectItem>
                        ))}
                      </SelectContent>
                    </Select>
                    {errors.interest && (
                      <p className="text-sm text-destructive">{errors.interest}</p>
                    )}
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="message">Message *</Label>
                    <Textarea
                      id="message"
                      name="message"
                      value={formData.message}
                      onChange={handleChange}
                      placeholder="Tell us about your project or inquiry..."
                      rows={5}
                      className={errors.message ? "border-destructive" : ""}
                    />
                    {errors.message && (
                      <p className="text-sm text-destructive">{errors.message}</p>
                    )}
                  </div>

                  {status === "success" && (
                    <div className="flex items-center gap-3 p-4 bg-primary/10 border border-primary/30 rounded-lg">
                      <CheckCircle className="w-5 h-5 text-primary" />
                      <p className="text-foreground">
                        Thank you! We'll be in touch soon.
                      </p>
                    </div>
                  )}

                  {status === "error" && (
                    <div className="flex items-center gap-3 p-4 bg-destructive/10 border border-destructive/30 rounded-lg">
                      <AlertCircle className="w-5 h-5 text-destructive" />
                      <p className="text-foreground">
                        Something went wrong. Please try again.
                      </p>
                    </div>
                  )}

                  <Button
                    type="submit"
                    variant="hero"
                    size="lg"
                    disabled={status === "submitting"}
                    className="w-full"
                  >
                    {status === "submitting" ? (
                      "Sending..."
                    ) : (
                      <>
                        Send Message
                        <Send className="w-4 h-4" />
                      </>
                    )}
                  </Button>
                </form>
              </motion.div>

              {/* Sidebar */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.1 }}
                className="space-y-8"
              >
                {/* Calendly Placeholder */}
                <div className="bg-card-gradient border border-border rounded-2xl p-8">
                  <div className="flex items-center gap-3 mb-4">
                    <Calendar className="w-6 h-6 text-primary" />
                    <h3 className="text-xl font-bold text-foreground">
                      Schedule a Call
                    </h3>
                  </div>
                  <p className="text-muted-foreground mb-6">
                    Prefer to talk directly? Book a time that works for you.
                  </p>
                  <Button variant="heroOutline" className="w-full" asChild>
                    <a
                      href={contact.calendlyPlaceholder}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      Open Scheduling Page
                    </a>
                  </Button>
                </div>

                {/* Contact Info */}
                <div className="bg-navy-surface border border-border rounded-2xl p-8">
                  <h3 className="text-xl font-bold text-foreground mb-4">
                    Contact Information
                  </h3>
                  <div className="space-y-4 text-muted-foreground">
                    <p>
                      <span className="block text-foreground font-medium">Email</span>
                      <a
                        href={`mailto:${siteConfig.email}`}
                        className="hover:text-primary transition-colors"
                      >
                        {siteConfig.email}
                      </a>
                    </p>
                    <p>
                      <span className="block text-foreground font-medium">Location</span>
                      {siteConfig.location}
                    </p>
                  </div>
                </div>
              </motion.div>
            </div>
          </div>
        </section>
      </Layout>
    </>
  );
};

export default ContactPage;
