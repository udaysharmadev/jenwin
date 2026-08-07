export interface Project {
  slug: string;
  title: string;
  url: string;
  type: string;
  label?: string;
  tagline: string;
  description: string;
  features: string[];
  stack: string[];
  accent: string;
  bgGradient: string;
  image?: string;
  logoText?: string;
  context?: string;
  problem?: string;
  approach?: string;
  outcome?: string;
}

export const projects: Project[] = [
  {
    slug: "usbro",
    title: "USBro",
    url: "usbro.in",
    type: "Shopify E-Commerce",
    label: "D2C Clothing",
    tagline: "Youth streetwear brand with bold graphic apparel, built to sell.",
    description:
      "USBro is an India-based D2C clothing store targeting Gen Z with oversized tees, hoodies, and graphic streetwear. We built and launched their full Shopify store with custom theme, product catalog, and pan-India shipping integration.",
    features: ["Custom Shopify Theme", "Pan-India Shipping", "Mobile-First Design"],
    stack: ["Shopify", "Liquid", "Custom Theme"],
    accent: "#DC143C",
    bgGradient: "from-[#100303]",
    image: "/work/usbro.png",
    context: "USBro wanted to launch as a serious D2C clothing brand targeting the youth streetwear market in India.",
    problem: "They needed a store that felt premium and on-brand, not like a generic template.",
    approach: "We built a custom Shopify theme from scratch that matched their bold aesthetic and made checkout fast.",
    outcome: "Launched on time with a store that converts well and handles high mobile traffic.",
  },
  {
    slug: "beauty-essence",
    title: "Beauty Essence",
    url: "beautyessence.net.in",
    type: "WordPress E-Commerce",
    label: "Multi-Vendor Beauty",
    tagline: "Mumbai's go-to beauty retailer, now online with a full multi-vendor catalog.",
    description:
      "Beauty Essence is a Mumbai-based beauty and cosmetics retailer with both a physical store and online presence. We built their multi-vendor WooCommerce store curating skincare, haircare, and personal care products from international brands.",
    features: ["Multi-Vendor Setup", "International Brand Catalog", "Enquiry System"],
    stack: ["WordPress", "WooCommerce", "Custom Theme"],
    accent: "#D81B60",
    bgGradient: "from-[#100210]",
    image: "/work/beautyessence.png",
    context:
      "The brand had a physical store in Crawford Market, Mumbai and needed to take their catalog online without losing the premium feel.",
    problem: "Managing multiple brands and vendors in one clean storefront is technically complex.",
    approach: "We set up WooCommerce with a multi-vendor plugin, clean category structure, and custom product pages.",
    outcome: "The store now handles their full catalog online with a consistent brand experience.",
  },
  {
    slug: "emaura",
    title: "Emaura",
    url: "emaura.in",
    type: "Shopify Brand Site",
    label: "Wellness D2C",
    tagline: "Clean beauty supplements brand with a site that sells the science.",
    description:
      "Emaura sells White Tomato Extract effervescent tablets for skin nutrition. We built a focused D2C Shopify store that explains the product clearly, builds trust, and drives conversions through strong copy and clean design.",
    features: ["Single Product Focus", "Trust Building Design", "Fast Checkout"],
    stack: ["Shopify", "Custom Liquid", "Conversion Design"],
    accent: "#10b981",
    bgGradient: "from-[#011009]",
    image: "/work/emaura.png",
    context:
      "Emaura had a unique wellness product but needed a website that could explain it clearly to a skeptical audience.",
    problem: "Supplement products need trust signals and clear science communication to convert.",
    approach: "We focused on clean design, benefit-led copy, and a smooth purchase flow.",
    outcome: "High-converting single product store with strong first impression.",
  },
  {
    slug: "plushiess",
    title: "Plushiess",
    url: "plushiess.com",
    type: "Shopify E-Commerce",
    label: "Toys & Gifting",
    tagline: "Soft, fun, and easy to browse. A plush toy store built for gifting.",
    description:
      "Plushiess sells premium quality soft plush toys and stuffed animals targeted at gifting and children's toy buyers. We built their Shopify store with a playful design, easy browsing, and a product catalog that makes choosing the right gift simple.",
    features: ["Gift-First UX", "Category Browsing", "Mobile Shopping"],
    stack: ["Shopify", "Custom Theme", "Responsive Design"],
    accent: "#8b5cf6",
    bgGradient: "from-[#050110]",
    image: "/work/plushiess.png",
    context: "The founders wanted to build a cute, trustworthy storefront for their growing plush toy business.",
    problem: "Toy stores often feel cluttered or cheap. They needed something that felt quality without being dull.",
    approach: "Soft colors, clean grid layout, and gifting-focused product descriptions.",
    outcome: "Clean, playful store that matches the brand's personality and converts browser to buyer.",
  },
  {
    slug: "kixcures",
    title: "KixCures",
    url: "kixcures.com",
    type: "Shopify E-Commerce",
    label: "Sneaker Care",
    tagline: "For sneakerheads who take care of their kicks. Built to sell shoe cleaning kits.",
    description:
      "KixCures is a sneaker care brand selling shoe cleaning kits to the fast-growing sneakerhead community. We built their D2C Shopify store with a clean, sporty aesthetic and product pages designed to close the sale.",
    features: ["Product-Focused Design", "Community Branding", "Fast Checkout"],
    stack: ["Shopify", "Custom Theme", "D2C Setup"],
    accent: "#0ea5e9",
    bgGradient: "from-[#010810]",
    image: "/work/kixcures.png",
    context: "KixCures had a good product but needed a website that could speak directly to sneaker culture.",
    problem: "Niche communities are hard to market to unless your brand looks like it belongs.",
    approach: "We leaned into the sneaker culture aesthetic with clean whites and bold accents.",
    outcome: "Store launched with strong brand identity and product pages that communicate value fast.",
  },
  {
    slug: "validus-sentinel",
    title: "Validus Sentinel",
    url: "validussentinel.com",
    type: "WordPress Brand Site",
    label: "Security Services",
    tagline: "Professional security services company with a site that builds instant trust.",
    description:
      "Validus Sentinel is an ISO 9001 certified physical security services company providing corporate, residential, and event security. We built their B2B service website with a professional tone, clear service breakdown, and trust signals front and center.",
    features: ["ISO 9001 Certified", "24/7 Service Showcase", "Lead Generation"],
    stack: ["WordPress", "Custom Theme", "SEO Setup"],
    accent: "#3b82f6",
    bgGradient: "from-[#010510]",
    image: "/work/validussentinel.png",
    context:
      "A well-established security company with no strong web presence was losing leads to competitors with better sites.",
    problem: "Security services need to communicate authority and trust within seconds of landing.",
    approach: "Clean corporate design with strong credibility markers, service breakdowns, and fast contact options.",
    outcome: "Professional site that generates qualified B2B leads and reflects the brand's ISO-certified standard.",
  },
  {
    slug: "raja-masale",
    title: "Raja Masale & Dry Fruits",
    url: "rajamasaleanddryfruits.com",
    type: "WordPress E-Commerce",
    label: "Food & Grocery",
    tagline: "Premium dry fruits and masalas, delivered pan-India through a modern WooCommerce store.",
    description:
      "Raja Masale & Dry Fruits needed a serious online store that matched the quality of their products. We built a WooCommerce store with PhonePe payment gateway, Google authentication, and full pan-India shipping support.",
    features: ["PhonePe Payment Gateway", "Google Authentication", "Pan India Shipping"],
    stack: ["WordPress", "WooCommerce", "PhonePe", "Google Auth"],
    accent: "#f59e0b",
    bgGradient: "from-[#100900]",
    image: "/work/rajamasale.png",
    logoText: "RAJA",
    context: "A trusted offline seller with years of reputation wanted to go online without losing trust.",
    problem:
      "Building trust for a food brand online requires careful design, clear product photography, and seamless payments.",
    approach:
      "We set up a clean WooCommerce store with local payment methods and a fast, mobile-friendly product catalog.",
    outcome:
      "Successfully launched with full payment integration, live across India.",
  },
  {
    slug: "glass-india",
    title: "Glass India Company",
    url: "glassindiacompany.com",
    type: "WordPress E-Commerce",
    label: "B2B Products",
    tagline: "Premium glass and mirror products online with product showcase and enquiry system.",
    description:
      "Glass India Company is a premium glass and mirror products business. We built their WooCommerce site with a custom theme focused on product showcase, a help center, and an enquiry system for bulk orders.",
    features: ["Premium Product Showcase", "Enquiry System", "Help Center"],
    stack: ["WordPress", "WooCommerce", "Custom Theme"],
    accent: "#06b6d4",
    bgGradient: "from-[#010a10]",
    image: "/work/glassindia.png",
    context: "A B2B glass supplier needed a product site that could handle both retail and trade enquiries.",
    problem: "Glass products need clear imagery and an easy way for bulk buyers to get in touch.",
    approach: "Custom WooCommerce store with a product showcase grid and an enquiry form for trade customers.",
    outcome: "Clean, professional site that handles both retail and B2B enquiries effectively.",
  },
  {
    slug: "herlyy",
    title: "Herlyy",
    url: "herlyy.com",
    type: "Node.js App",
    label: "Coming Soon",
    tagline: "Female companion app with AI chatbot, period tracking, expert doctors, and community.",
    description:
      "Herlyy is a female wellness companion app combining an AI chatbot, period tracker, expert doctor access, and community support. Currently in development for App Store and Play Store.",
    features: ["AI Chatbot Companion", "Period Tracker", "Coming Soon to App Stores"],
    stack: ["Node.js", "Static Site", "Responsive Design"],
    accent: "#ec4899",
    bgGradient: "from-[#100110]",
    image: "/work/herlyy.png",
    logoText: "HERLYY",
    context: "A founder wanted to build a one-stop wellness app for women that combined tech with real human support.",
    problem: "Wellness apps often feel cold or generic. This one needed to feel personal and safe.",
    approach: "We started with a strong landing page and app architecture designed for trust and retention.",
    outcome: "App in development, landing page live, preparing for App Store launch.",
  },
  {
    slug: "visaovisa",
    title: "VisaOvisa",
    url: "visaovisa.com",
    type: "Node.js App",
    label: "Services Platform",
    tagline: "Real visa stamping, Gulf job recruitment, and attestation platform with 34K+ clients.",
    description:
      "VisaOvisa is a genuine visa stamping, attestation, and Gulf job recruitment platform run by Mohd Faisal Siddique. We built their platform with job application system, WhatsApp lead gen, and a client-facing services portal.",
    features: ["34K+ Clients", "Job Application System", "WhatsApp Lead Gen"],
    stack: ["Node.js", "Static Site", "WhatsApp Integration"],
    accent: "#DC143C",
    bgGradient: "from-[#100303]",
    image: "/work/visaovisa.png",
    logoText: "VISA",
    context:
      "A visa consultant with a huge existing client base needed to scale online and reduce manual coordination.",
    problem:
      "Managing 34,000+ clients with manual WhatsApp coordination was causing friction and missed leads.",
    approach: "Clean service site with WhatsApp integration, job board, and structured service pages.",
    outcome: "Significantly reduced manual coordination with automated lead capture and job application flow.",
  },
  {
    slug: "zaanji-pret",
    title: "Zaanji Pret",
    url: "zaanji.com",
    type: "Node.js + Firebase",
    label: "Fashion E-Commerce",
    tagline: "Full-stack premium Pakistani suits e-commerce with Firebase backend and fast checkout.",
    description:
      "Zaanji Pret is a premium Pakistani suits e-commerce store with Shiprocket logistics, FastCheckout, and multiple payment options. We built the full stack from scratch using Node.js and Firebase.",
    features: ["Shiprocket Logistics", "Fast Checkout", "COD + UPI + Cards"],
    stack: ["Node.js", "Firebase", "Shiprocket", "FastCheckout"],
    accent: "#8b5cf6",
    bgGradient: "from-[#05010f]",
    image: "/work/zaanji.png",
    logoText: "ZAANJI",
    context:
      "A fashion entrepreneur wanted to launch a proper e-commerce business for premium Pakistani suits with fast delivery.",
    problem:
      "Fashion e-commerce needs speed, good product presentation, and flexible payment options to work in India.",
    approach:
      "Full-stack build with Firebase for real-time inventory, Shiprocket for logistics, and multiple checkout options.",
    outcome: "Fully operational e-commerce store handling orders with real-time logistics tracking.",
  },
];

export function getProjectBySlug(slug: string): Project | undefined {
  return projects.find((p) => p.slug === slug);
}

export function getAllProjectSlugs(): string[] {
  return projects.map((p) => p.slug);
}
