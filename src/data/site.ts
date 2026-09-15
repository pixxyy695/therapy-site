
export const site = {
  name: "Grow My Therapy",
  therapistName: "Dr. Maya Reynolds",
  credentials: "PsyD",
  title: "Licensed Clinical Psychologist",
  location: "Santa Monica, California",
  tagline: "Therapy for Anxiety, Trauma & Burnout in Santa Monica",
  metaDescription:
    "Dr. Maya Reynolds, PsyD, is a licensed clinical psychologist in Santa Monica, CA offering in-person and telehealth therapy for adults navigating anxiety, panic, trauma, and burnout.",
};

export const office = {
  addressLine1: "123th Street 45 W",
  addressLine2: "Santa Monica, CA 90401",
  mapsQuery: "123th Street 45 W, Santa Monica, CA 90401",
};

export const nav = [
  { label: "About", href: "#about" },
  { label: "Approach", href: "#approach" },
  { label: "Services", href: "#services" },
  { label: "Our Office", href: "#office" },
  { label: "FAQ", href: "#faq" },
  { label: "Contact", href: "#contact" },
];

// Truthful, action-matching label: this button always scrolls to the
// Contact section, whose only real action is "Get Directions" (no booking
// system exists), so the label describes exactly that outcome.
export const ctaLabel = "Visit the Office";

export const hero = {
  eyebrow: "In-Person in Santa Monica · Telehealth Across California",
  headline: "Therapy for Anxiety, Trauma & Burnout in Santa Monica",
  subheadline:
    "A warm, collaborative space for adults who feel overwhelmed by anxiety, stress, or the lingering effects of past experiences and are ready to feel more grounded.",
  primaryCta: ctaLabel,
  secondaryCta: "Learn About Maya",
};

export const introBelief = {
  kicker: "You don't have to keep pushing through it alone.",
  heading:
    "You've been carrying more than you let on and it's time to set some of it down.",
  body: "Many of the people I work with are high-achieving, thoughtful, and self-aware but internally feel exhausted, stuck in overthinking, or emotionally on edge. If you're feeling \u201cfunctional\u201d on the outside while quietly struggling with constant worry, tension in your body, or a sense that you're always bracing for something to go wrong, you're not alone, and this is a space to be honest about it.",
};

export const whoIHelp = [
  {
    title: "High-Achieving Adults",
    description:
      "Thoughtful, self-aware adults who feel exhausted, stuck in overthinking, or emotionally on edge beneath a functional exterior.",
    image: "/assets/images/woman.png",
    alt: "Calm, sunlit living-room style therapy space with soft seating and tall windows",
  },
  {
    title: "Adults Navigating Trauma",
    description:
      "Clients working through single-incident trauma or complex, long-standing patterns from childhood, relationships, or chronic stress.",
    image: "/assets/images/adult1.png",
    alt: "Quiet therapy office with a bookshelf, soft rug, and natural light",
  },
  {
    title: "Entrepreneurs & Creatives",
    description:
      "Professionals dealing with burnout, perfectionism, and high internal pressure who feel disconnected from themselves after years of pushing through stress.",
    image: "/assets/images/creative.png",
    alt: "Dr. Maya Reynolds, PsyD, licensed clinical psychologist",
  },
];

export const focusAreas = [
  "Anxiety",
  "Panic",
  "Trauma",
  "Burnout",
  "Perfectionism",
  "EMDR",
  "CBT",
  "Mindfulness",
  "Body-Oriented Work",
  "High Internal Pressure",
  "Chronic Stress",
];


export const howIWork = {
  about: {
    kicker: "About Dr. Reynolds",
    heading: "A warm, collaborative, and grounded approach to therapy.",
    paragraphs: [
      "Dr. Maya Reynolds, PsyD, is a licensed clinical psychologist based in Santa Monica, California, offering therapy for adults who feel overwhelmed by anxiety, stress, or the lingering effects of past experiences.",
      "Many of the people she works with are high-achieving, thoughtful, and self-aware but internally feel exhausted, stuck in overthinking, or emotionally on edge beneath a functional exterior.",
    ],
  },
  approach: {
    kicker: "How I Work",
    heading: "Practical tools, paired with depth-oriented work.",
    body: "Sessions are structured enough to feel supportive, while still leaving space for reflection and depth. Dr. Reynolds integrates evidence based methods to help clients understand both the emotional and physiological sides of what they're experiencing. Trauma work in particular is paced carefully, with an emphasis on safety, stabilization, and helping clients feel more regulated in daily life not just during sessions.",
    methods: ["CBT", "EMDR", "Mindfulness Based Practices", "Body-Oriented Techniques"],
    cta: { label: "Explore Services", href: "#services" },
  },
  image: "/assets/images/maya-portrait.png",
  imageAlt: "Portrait of Dr. Maya Reynolds, PsyD, Licensed Clinical Psychologist",
};

export const services = [
  {
    title: "Anxiety & Panic",
    description:
      "For the constant worry, tension in your body, difficulty sleeping, or the sense that you're always bracing for something to go wrong.",
  },
  {
    title: "Trauma & EMDR",
    description:
      "Support for single-incident trauma and more complex, long-standing patterns paced carefully, with a focus on safety and stabilization.",
  },
  {
    title: "Burnout & Perfectionism",
    description:
      "For entrepreneurs, creatives, and professionals feeling disconnected from themselves after years of pushing through stress and high internal pressure.",
  },
];

export const ourOffice = {
  kicker: "Our Office",
  heading: "A calm space for healing.",
  body: "The office is a quiet, private space designed to feel calm and grounding, with natural light and a comfortable, uncluttered environment. Clients often share that the space itself helps them feel more at ease when they arrive.",
  points: [
    "Quiet, private setting",
    "Natural light throughout",
    "Comfortable, uncluttered environment",
    "In-person sessions in Santa Monica",
  ],
  images: [
    {
      src: "/assets/images/office-1.jpg",
      alt: "Sunlit therapy office seating area with soft armchair and large windows",
    },
    {
      src: "/assets/images/office-2.jpg",
      alt: "Therapy office with couch, bookshelf, and warm natural light",
    },
  ],
};

export const faqs = [
  {
    question: "Who does Dr. Reynolds work with?",
    answer:
      "Dr. Reynolds works with adults often high-achieving, thoughtful, and self aware people who feel exhausted, stuck in overthinking, or emotionally on edge, including entrepreneurs, creatives, and professionals.",
  },
  {
    question: "What concerns does she help with?",
    answer:
      "Her work focuses on anxiety, panic, trauma, and burnout, as well as professional burnout, perfectionism, and high internal pressure.",
  },
  {
    question: "Does she offer in-person therapy?",
    answer:
      "Yes. Dr. Reynolds offers in-person therapy from her Santa Monica office, a quiet, private space with natural light and a comfortable, uncluttered environment.",
  },
  {
    question: "Does she offer telehealth?",
    answer:
      "Yes. In addition to in-person sessions, Dr. Reynolds offers secure telehealth sessions for clients located anywhere in California.",
  },
  {
    question: "Where is the office located?",
    answer: "The office is located at 123th Street 45 W, Santa Monica, CA 90401.",
  },
  {
    question: "What therapeutic approaches does she use?",
    answer:
      "Dr. Reynolds integrates evidence-based methods including cognitive behavioral therapy (CBT), EMDR, mindfulness based practices, and body oriented techniques.",
  },
  {
    question: "Does she work with trauma?",
    answer:
      "Yes, trauma work is an important part of her practice. She works with adults who have experienced single incident trauma as well as more complex, long standing patterns that may stem from childhood, relationships, or chronic stress, paced carefully with an emphasis on safety and stabilization.",
  },
];

export const finalCta = {
  kicker: "Plan Your Visit",
  heading: "Ready to begin your therapy journey?",
  body: "Currently offering in-person sessions in Santa Monica and secure telehealth for clients throughout California.",
};

export const footer = {
  navigate: nav,
  blurb:
    "In-person therapy in Santa Monica and secure telehealth for clients located throughout California.",
};
