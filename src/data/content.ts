// ARAIUX Content File - Edit this file to update website content
// All text, CTAs, and configuration are centralized here

export const ENABLE_SPEECH_ASSISTANT = false;

export const siteConfig = {
  name: "ARAIUX",
  fullName: "Augmented Reality Artificially Intelligent User Experiences",
  tagline: "Canada‑Resident AI Infrastructure + AR/VR Studio + Talent Pipeline",
  description: "We help Atlantic organizations build, run, and govern AI systems without relocating to larger provinces.",
  location: "Moncton, New Brunswick, Canada",
  email: "hello@araiux.ca",
  phone: "+1 (506) 555-0123",
  social: {
    linkedin: "https://linkedin.com/company/araiux",
    twitter: "https://twitter.com/araiux",
    github: "https://github.com/araiux",
  },
};

export const navigation = [
  { name: "Home", href: "/" },
  { name: "Infrastructure", href: "/infrastructure" },
  { name: "AgentOps", href: "/agentops" },
  { name: "AR/VR Studio", href: "/studio" },
  { name: "Talent", href: "/talent" },
  { name: "Impact", href: "/impact" },
  { name: "About", href: "/about" },
  { name: "Contact", href: "/contact" },
];

export const hero = {
  headline: "Canada‑Resident AI Infrastructure",
  subheadline: "AR/VR Studio + Talent Pipeline",
  description: "We help Atlantic organizations build, run, and govern AI systems without relocating to larger provinces.",
  primaryCTA: { label: "Book a Studio Tour", href: "/contact?interest=tour" },
  secondaryCTA: { label: "Request a Quote", href: "/contact?interest=quote" },
  tertiaryCTA: { label: "Partner With Us", href: "/contact?interest=partner" },
};

export const pillars = [
  {
    id: "compute",
    title: "Compute & Platforms",
    subtitle: "Canada-Resident",
    description: "GPU/CPU clusters, secure enclaves, and hybrid cloud bursting—all within Canadian borders.",
    icon: "Server",
    href: "/infrastructure",
  },
  {
    id: "agentops",
    title: "AgentOps & Governance",
    subtitle: "Built-in Guardrails",
    description: "Human-in-the-loop approvals, audit trails, and policy engines for compliant AI operations.",
    icon: "Shield",
    href: "/agentops",
  },
  {
    id: "studio",
    title: "AR/VR Studio",
    subtitle: "Hardware Rental",
    description: "Apple Vision Pro workstations, green-room collaboration, and mixed-reality dev gear—rent, don't buy.",
    icon: "Glasses",
    href: "/studio",
  },
];

export const industries = [
  {
    title: "Logistics & Transportation",
    description: "Optimize routes, predict maintenance, and enhance driver safety with AI-powered insights.",
    icon: "Truck",
  },
  {
    title: "Public Sector & Regulated Orgs",
    description: "Secure, auditable AI deployments that meet government compliance requirements.",
    icon: "Building2",
  },
  {
    title: "SMBs Modernizing Operations",
    description: "Right-sized AI solutions to automate workflows without enterprise-level complexity.",
    icon: "Briefcase",
  },
  {
    title: "Education & Research Labs",
    description: "High-performance compute access for academic research and student projects.",
    icon: "GraduationCap",
  },
];

export const whyMoncton = {
  title: "Why Moncton & New Brunswick?",
  description: "Strategic location, emerging talent, and a vision for Atlantic Canada as an AI hub.",
  points: [
    "Retain local talent instead of losing them to larger provinces",
    "Lower operational costs than major metro areas",
    "Growing tech ecosystem with university partnerships",
    "Strategic time zone for North American and European clients",
    "Provincial government support for innovation initiatives",
  ],
};

export const trustFactors = [
  {
    title: "Data Residency",
    description: "All compute and storage remains within Canadian borders—no cross-border data flows.",
    icon: "MapPin",
  },
  {
    title: "Least Privilege",
    description: "Role-based access control and just-in-time permissions for every operation.",
    icon: "Lock",
  },
  {
    title: "Audit Trails",
    description: "Complete logging and traceability for compliance, investigations, and governance.",
    icon: "FileText",
  },
  {
    title: "Privacy-First",
    description: "Designed for PIPEDA compliance and provincial privacy regulations.",
    icon: "Eye",
  },
];

// Infrastructure Page
export const infrastructure = {
  hero: {
    title: "Canada-Resident Compute Infrastructure",
    description: "GPU clusters, secure enclaves, and hybrid cloud bursting—all within Canadian borders. Scale from prototype to production without sovereignty concerns.",
  },
  products: [
    {
      title: "Compute Pod (Reserved Capacity)",
      description: "Dedicated GPU/CPU allocation for predictable workloads. Best for production AI systems requiring consistent performance.",
      features: ["Guaranteed SLA", "Fixed monthly pricing", "Priority support", "Custom configurations"],
      icon: "Cpu",
    },
    {
      title: "Burst Capacity (On-Demand)",
      description: "Scale up for training runs, peak loads, or experimentation. Pay only for what you use.",
      features: ["Per-hour billing", "Auto-scaling", "No commitment", "Instant provisioning"],
      icon: "Zap",
    },
    {
      title: "Secure Data Room (Canada-Only)",
      description: "Air-gapped environments for sensitive workloads. Perfect for regulated industries and government contracts.",
      features: ["Network isolation", "Hardware security modules", "Compliance certifications", "Dedicated tenancy"],
      icon: "ShieldCheck",
    },
  ],
  comparison: {
    headers: ["Feature", "Reserved", "On-Demand"],
    rows: [
      ["Pricing Model", "Fixed monthly", "Per-hour"],
      ["GPU Availability", "Guaranteed", "Best-effort"],
      ["Best For", "Production workloads", "Experimentation"],
      ["Minimum Commitment", "1 month", "None"],
      ["Support Level", "Priority", "Standard"],
      ["Custom Hardware", "Available", "Limited"],
    ],
  },
  cta: { label: "Request a Capacity Plan", href: "/contact?interest=infrastructure" },
};

// AgentOps Page
export const agentops = {
  hero: {
    title: "AgentOps & Governance Platform",
    description: "Deploy AI agents with confidence. Built-in guardrails, human-in-the-loop approvals, and complete audit trails for enterprise compliance.",
  },
  features: [
    {
      title: "Policy Engine",
      description: "Define rules for what agents can and cannot do. Enforce constraints at runtime.",
      icon: "Scale",
    },
    {
      title: "Human-in-the-Loop",
      description: "Require approvals for high-stakes decisions. Escalate automatically when thresholds are exceeded.",
      icon: "Users",
    },
    {
      title: "Audit Trails",
      description: "Complete logging of every agent action, decision, and data access for compliance.",
      icon: "FileSearch",
    },
    {
      title: "Evaluation Framework",
      description: "Continuous testing and monitoring to ensure agent outputs meet quality standards.",
      icon: "CheckCircle",
    },
  ],
  workflow: [
    { step: "Request", description: "User or system initiates agent task" },
    { step: "IAM/RBAC", description: "Verify permissions and roles" },
    { step: "Policy Engine", description: "Check against defined guardrails" },
    { step: "Agent Runtime", description: "Execute with sandboxed access" },
    { step: "Tool Calls", description: "Controlled external integrations" },
    { step: "Logs & Monitoring", description: "Record everything for audit" },
  ],
  cta: { label: "Book a Governance Workshop", href: "/contact?interest=agentops" },
};

// AR/VR Studio Page
export const studio = {
  hero: {
    title: "AR/VR Studio & Equipment Rental",
    description: "Apple Vision Pro workstations, green-room collaboration space, and mixed-reality dev gear. Rent what you need—capex is prohibitive, we make it accessible.",
  },
  offerings: [
    {
      title: "Studio Rental",
      subtitle: "Daily / Weekly",
      description: "Fully equipped space for development, demos, and collaboration. Includes workstations, capture systems, and presentation setup.",
      features: ["4K capture setup", "Spatial audio", "Green room", "High-speed connectivity"],
      icon: "Building",
    },
    {
      title: "Equipment Rental",
      subtitle: "Project-Based",
      description: "Take hardware off-site for your team. Apple Vision Pro, Quest 3, and development kits available.",
      features: ["Vision Pro units", "Quest 3 headsets", "Dev kits", "Accessories included"],
      icon: "Headphones",
    },
    {
      title: "Build Sprints",
      subtitle: "2–6 Weeks",
      description: "End-to-end project support with studio access, hardware, and optional ARAIUX talent integration.",
      features: ["Dedicated time blocks", "Technical support", "Team access", "Demo prep"],
      icon: "Rocket",
    },
  ],
  cta: { label: "Book Studio Time", href: "/contact?interest=studio" },
};

// Talent Page
export const talent = {
  hero: {
    title: "Talent & Training",
    description: "On-demand teams, fractional roles, and a co-op pipeline. Get the specialists you need without long-term headcount commitments.",
  },
  roles: [
    { title: "AR/VR Developer", description: "Unity, Unreal, and spatial computing specialists", icon: "Glasses" },
    { title: "ML Engineer", description: "Model development, training, and optimization", icon: "Brain" },
    { title: "MLOps / LLMOps", description: "Production deployment and monitoring", icon: "Settings" },
    { title: "Data Engineer", description: "Pipeline architecture and data infrastructure", icon: "Database" },
    { title: "Security / IAM", description: "Access control and compliance implementation", icon: "Shield" },
    { title: "Product Designer", description: "UX for AI-first and spatial experiences", icon: "Palette" },
  ],
  academy: {
    title: "ARAIUX Academy",
    description: "Partnerships with universities and colleges to build the next generation of AI/AR/VR talent in Atlantic Canada.",
    programs: [
      "Co-op and internship placements",
      "Micro-credential programs",
      "Industry mentorship",
      "Capstone project sponsorship",
    ],
  },
  ctas: [
    { label: "Hire Talent", href: "/contact?interest=hire" },
    { label: "Join Our Talent Network", href: "/contact?interest=join" },
  ],
};

// Impact Page
export const impact = {
  hero: {
    title: "ARAIUX Access",
    subtitle: "Accessibility & Equity Initiative",
    description: "AI should not be a class divider. We're building programs to ensure everyone can participate in the AI-powered economy.",
  },
  programs: [
    {
      title: "Drop-In Learning Centers",
      description: "Physical spaces where youth and young adults can explore AI, AR/VR, and emerging tech with guidance.",
      icon: "Home",
    },
    {
      title: "Subsidized Compute Access",
      description: "Reduced-cost or free compute for non-profits, community organizations, and underrepresented founders.",
      icon: "DollarSign",
    },
    {
      title: "Device Lending Library",
      description: "Borrow AR/VR headsets and development hardware for learning and experimentation.",
      icon: "Package",
    },
    {
      title: "Public Workshops",
      description: "Partner-sponsored sessions on AI literacy, career paths, and hands-on skill building.",
      icon: "Users",
    },
  ],
  note: "Incorporation model and funding partners to be finalized. Our intent is measurable outcomes: skills developed, careers launched, and barriers removed.",
  cta: { label: "Partner on Access Programs", href: "/contact?interest=impact" },
};

// About Page
export const about = {
  mission: "To establish Atlantic Canada as a globally competitive hub for AI infrastructure, while ensuring local talent can build careers without leaving the region.",
  vision: "A Canada where AI innovation happens everywhere—not just in major metros. Where organizations of all sizes can access enterprise-grade infrastructure. Where technology creates opportunity, not division.",
  values: [
    { title: "Canada-First", description: "Data sovereignty, local talent, and regional economic development." },
    { title: "Accessible Innovation", description: "Right-sized solutions for every organization, not just enterprises." },
    { title: "Responsible AI", description: "Governance, transparency, and human oversight are non-negotiable." },
    { title: "Community Impact", description: "Success means lifting the region, not extracting from it." },
  ],
  team: {
    title: "Our Team",
    description: "Leadership profiles coming soon. We're building a diverse team of AI infrastructure veterans, AR/VR pioneers, and community builders.",
  },
};

// Contact Page
export const contact = {
  title: "Let's Build Together",
  description: "Whether you need infrastructure, talent, studio access, or want to partner on our access initiatives—we're ready to talk.",
  interests: [
    { value: "tour", label: "Book a Studio Tour" },
    { value: "quote", label: "Request a Quote" },
    { value: "infrastructure", label: "Infrastructure / Compute" },
    { value: "agentops", label: "AgentOps Platform" },
    { value: "studio", label: "AR/VR Studio Rental" },
    { value: "hire", label: "Hire Talent" },
    { value: "join", label: "Join Talent Network" },
    { value: "partner", label: "Partner With Us" },
    { value: "impact", label: "Access / Equity Programs" },
    { value: "other", label: "Other" },
  ],
  calendlyPlaceholder: "https://calendly.com/araiux",
};

// Guided Journey
export const guidedJourney = {
  title: "Find Your Path",
  description: "Answer a few questions and we'll point you to the right place.",
  questions: {
    sector: {
      label: "What sector are you in?",
      options: [
        { value: "enterprise", label: "Enterprise / Corporation" },
        { value: "public", label: "Public Sector / Government" },
        { value: "smb", label: "SMB / Startup" },
        { value: "education", label: "Education / Research" },
        { value: "nonprofit", label: "Non-Profit / Community" },
      ],
    },
    goal: {
      label: "What's your primary goal?",
      options: [
        { value: "compute", label: "Access compute infrastructure" },
        { value: "agents", label: "Deploy AI agents safely" },
        { value: "studio", label: "Build AR/VR experiences" },
        { value: "talent", label: "Find AI/AR/VR talent" },
        { value: "learn", label: "Learn and upskill" },
      ],
    },
    sensitivity: {
      label: "How sensitive is your data?",
      options: [
        { value: "high", label: "Highly regulated / Government" },
        { value: "medium", label: "Business-sensitive" },
        { value: "low", label: "Public / Non-sensitive" },
      ],
    },
  },
  recommendations: {
    compute: { page: "/infrastructure", cta: "Explore Infrastructure" },
    agents: { page: "/agentops", cta: "See AgentOps Platform" },
    studio: { page: "/studio", cta: "View Studio Options" },
    talent: { page: "/talent", cta: "Browse Talent Services" },
    learn: { page: "/impact", cta: "Explore Access Programs" },
  },
};

// Testimonials (Placeholders)
export const testimonials = [
  {
    quote: "ARAIUX helped us deploy our ML models on Canadian soil without compromising performance. The governance features gave our compliance team peace of mind.",
    author: "Director of Innovation",
    company: "Atlantic Logistics Corp",
  },
  {
    quote: "The AR/VR studio rental saved us hundreds of thousands in equipment costs. We prototyped our training simulation in weeks, not months.",
    author: "VP of Operations",
    company: "Regional Healthcare Authority",
  },
  {
    quote: "Finding ML engineers in Atlantic Canada was impossible until we connected with ARAIUX's talent network. Now we have a full team.",
    author: "CTO",
    company: "Moncton-Based SaaS Startup",
  },
];

// FAQ
export const faq = [
  {
    question: "Is my data guaranteed to stay in Canada?",
    answer: "Yes. All ARAIUX infrastructure is physically located in Canada. We do not use cloud regions outside Canadian borders, and our legal structure ensures no cross-border data transfers without explicit consent.",
  },
  {
    question: "Can I try before committing to a long-term contract?",
    answer: "Absolutely. Our on-demand compute and studio rental options have no minimum commitment. Start with what you need and scale from there.",
  },
  {
    question: "What compliance certifications do you have?",
    answer: "We're working toward SOC 2 Type II and are designed for PIPEDA compliance. For specific regulatory requirements (healthcare, government), contact us to discuss your needs.",
  },
  {
    question: "How does the talent model work?",
    answer: "You can engage specialists on a fractional basis (part-time), project-based, or as embedded team members. We handle the sourcing and vetting; you get outcomes.",
  },
  {
    question: "What's the difference between your studio and a coworking space?",
    answer: "Our studio is purpose-built for AR/VR development with specialized equipment, capture systems, and high-performance hardware. It's not a general workspace—it's a production environment.",
  },
];

// Footer
export const footer = {
  newsletter: {
    title: "Stay Updated",
    description: "Get news on AI infrastructure, studio availability, and talent opportunities.",
    placeholder: "Enter your email",
    button: "Subscribe",
  },
  links: [
    {
      title: "Services",
      items: [
        { label: "Infrastructure", href: "/infrastructure" },
        { label: "AgentOps", href: "/agentops" },
        { label: "AR/VR Studio", href: "/studio" },
        { label: "Talent", href: "/talent" },
      ],
    },
    {
      title: "Company",
      items: [
        { label: "About", href: "/about" },
        { label: "Impact", href: "/impact" },
        { label: "Contact", href: "/contact" },
      ],
    },
    {
      title: "Legal",
      items: [
        { label: "Privacy Policy", href: "#" },
        { label: "Terms of Service", href: "#" },
      ],
    },
  ],
  copyright: `© ${new Date().getFullYear()} ARAIUX. All rights reserved.`,
};
