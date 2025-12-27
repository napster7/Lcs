
// src/data/executive-education.ts

export const executiveEducationData = {
  introduction: {
    title: "Executive Education",
    description: "Our programs are designed for experienced professionals, senior managers, leaders, and decision-makers seeking to strengthen strategic capabilities. They focus on high-impact, short-duration learning that addresses real-world challenges in cybersecurity, AI, risk management, and technology-driven business strategy.",
    subDescription: "The learning approach is practical, applied, and decision-oriented, helping participants develop confidence in leadership, oversight, and strategic judgment within complex organizational environments. This is an executive-level portfolio, not a general course marketplace.",
  },
  domains: {
    title: "Executive Learning Focus Areas",
    areas: [
      { 
        name: "Cybersecurity Leadership", 
        description: "Develop the strategic oversight required to lead an organization’s cyber defense and risk management posture.",
        imageUrl: "https://images.unsplash.com/photo-1550751827-4bd374c3f58b?q=80&w=2940&auto=format&fit=crop"
      },
      { 
        name: "AI Strategy & Risk Governance", 
        description: "Master the frameworks for deploying AI responsibly and governing its associated risks effectively.",
        imageUrl: "https://images.unsplash.com/photo-1677756119517-756a188d2d94?q=80&w=2832&auto=format&fit=crop"
      },
      { 
        name: "Digital Transformation", 
        description: "Lead complex change initiatives and align emerging technologies with long-term business objectives.",
        imageUrl: "https://images.unsplash.com/photo-1522071820081-009f0129c71c?q=80&w=2940&auto=format&fit=crop"
      },
      { 
        name: "Technology & Business Strategy", 
        description: "Bridge the gap between technology implementation and strategic business outcomes to drive growth.",
        imageUrl: "https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?q=80&w=2940&auto=format&fit=crop"
      },
      { 
        name: "Compliance, Policy & Ethics", 
        description: "Navigate the intricate landscape of technology regulation, policy, and ethical decision-making.",
        imageUrl: "https://images.unsplash.com/photo-1556155092-490a1ba16284?q=80&w=2940&auto=format&fit=crop"
      },
      { 
        name: "Data-Driven Decision Making", 
        description: "Harness the power of data to inform strategy, improve foresight, and create a competitive advantage.",
        imageUrl: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=80&w=2832&auto=format&fit=crop"
      },
    ]
  },
  programs: {
    title: "Explore Executive Programs",
    items: [
        {
            id: "cyber-leadership-program",
            title: "Cybersecurity Leadership for the C-Suite",
            description: "A strategic program for executives responsible for enterprise-wide cybersecurity posture and risk management.",
            targetAudience: "CISOs, CTOs, Senior IT Leaders",
            format: "Online, Blended",
            duration: "3 Weeks",
            level: "Executive",
            domain: "Cybersecurity Leadership",
            detailsUrl: "#",
        },
        {
            id: "ai-governance-program",
            title: "AI Governance & Risk Frameworks",
            description: "Equip your leadership with the knowledge to implement robust AI governance and navigate ethical challenges.",
            targetAudience: "Compliance Officers, Risk Managers, Legal Counsel",
            format: "Online",
            duration: "2 Weeks",
            level: "Senior Leadership",
            domain: "AI Strategy & Risk Governance",
            detailsUrl: "#",
        },
        {
            id: "digital-strategy-program",
            title: "Leading Digital Transformation",
            description: "Develop the strategic skills to lead your organization through complex digital change initiatives.",
            targetAudience: "VPs, Directors, Transformation Leads",
            format: "In-Person",
            duration: "1 Week Intensive",
            level: "Executive",
            domain: "Digital Transformation",
            detailsUrl: "#",
        },
        {
            id: "tech-innovation-program",
            title: "Technology Innovation & Market Strategy",
            description: "For leaders aiming to drive growth by aligning emerging technologies with core business strategy.",
            targetAudience: "Heads of Product, Strategy Leaders",
            format: "Blended",
            duration: "4 Weeks",
            level: "Senior Leadership",
            domain: "Technology & Business Strategy",
            detailsUrl: "#",
        },
    ]
  },
  delivery: {
    title: "Delivery Formats & Flexibility",
    description: "Programs are structured to fit demanding professional schedules while maintaining depth and rigor. We offer a range of formats, including online modules, live virtual sessions, and intensive in-person engagements, to balance convenience with meaningful interaction. Our approach ensures you can gain critical skills without stepping away from your responsibilities for extended periods."
  },
  organizational: {
    title: "Custom Education for Your Organization",
    description: "We partner with enterprises to develop tailored executive education programs that address specific business challenges and strategic goals. Our team can customize curriculum and delivery formats to upskill entire leadership teams, positioning your organization for long-term success.",
    cta: "Request a Consultation",
    ctaLink: "/contact",
    imageUrl: "https://images.unsplash.com/photo-1521737852567-6949f3f9f2b5?q=80&w=2940&auto=format&fit=crop"
  },
  guidance: {
    title: "Guidance & Program Selection Support",
    description: "Choosing the right Executive Education program is crucial. Our programs are designed for leaders facing strategic, not just technical, challenges. We help you determine the appropriate learning focus area, understand expected experience levels, and align programs with your current responsibilities or future leadership aspirations. Our advisors are available to provide support and clarify how these programs differ from standard training or academic courses, ensuring you make a confident decision without pressure."
  },
  closing: {
    title: "Begin Your Leadership Journey",
    description: "We invite you to explore our Executive Education offerings, designed to empower leaders with the strategic insights and capabilities needed to navigate complex challenges and drive organizational success. Take the next step in your professional development at your own pace.",
    cta1: "Explore Executive Programs",
    cta1Link: "#", // Placeholder
    cta2: "View Learning Areas",
    cta2Link: "#", // Placeholder
    cta3: "Request Program Guidance",
    cta3Link: "/contact",
  }
};
