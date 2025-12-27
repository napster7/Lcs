export type LiveTrainingEvent = {
  id: string;
  slug: string; // Added slug
  title: string;
  summary: string;
  eventType: 'Training' | 'Workshop' | 'Bootcamp' | 'Executive Program';
  topicArea: 'AI Security' | 'Risk Management' | 'Cloud Security' | 'Governance';
  deliveryMode: 'Live Online' | 'In-Person' | 'Hybrid';
  region: 'Asia-Pacific' | 'Global' | 'EMEA' | 'North America' | 'UK';
  date: string;
  duration: string;
  isNew?: boolean;
  isPopular?: boolean;
  detailsLink: string;
  imageUrl: string;
  schedule: string;
  city: string;
};

export const liveTrainingEventsData: LiveTrainingEvent[] = [
  {
    id: '1',
    slug: 'ai-governance-london-june-2026',
    title: 'AI Governance',
    summary: 'A comprehensive training on the principles and practices of AI governance in London.',
    eventType: 'Training',
    topicArea: 'Governance',
    deliveryMode: 'In-Person',
    region: 'UK',
    date: 'June 2026',
    duration: '4 Days',
    detailsLink: '#',
    imageUrl: 'https://images.unsplash.com/photo-1513635269975-59663e0ac1ad?q=80&w=2940&auto=format&fit=crop', // London (working)
    schedule: 'Mon-Thu, 9am-5pm',
    city: 'London',
  },
  {
    id: '2',
    slug: 'ai-governance-riyadh-november-2026',
    title: 'AI Governance',
    summary: 'A comprehensive training on the principles and practices of AI governance in Riyadh.',
    eventType: 'Training',
    topicArea: 'Governance',
    deliveryMode: 'In-Person',
    region: 'EMEA',
    date: 'November 2026',
    duration: '4 Days',
    detailsLink: '#',
    imageUrl: 'https://images.unsplash.com/photo-1586724237569-f3d0c1dee8c6?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D', // Riyadh (new)
    schedule: 'Sun-Wed',
    city: 'Riyadh',
  },
  {
    id: '3',
    slug: 'ai-governance-kuala-lumpur-september-2026',
    title: 'AI Governance',
    summary: 'A comprehensive training on the principles and practices of AI governance in Kuala Lumpur.',
    eventType: 'Training',
    topicArea: 'Governance',
    deliveryMode: 'In-Person',
    region: 'Asia-Pacific',
    date: 'September 2026',
    duration: '4 Days',
    detailsLink: '#',
    imageUrl: 'https://plus.unsplash.com/premium_photo-1733317259780-343b78c9a297?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    schedule: 'Mon-Thu',
    city: 'Kuala Lumpur',
  },
  {
    id: '4',
    slug: 'ai-governance-dubai-october-2026',
    title: 'AI Governance',
    summary: 'A comprehensive training on the principles and practices of AI governance in Dubai.',
    eventType: 'Training',
    topicArea: 'Governance',
    deliveryMode: 'In-Person',
    region: 'EMEA',
    date: 'October 2026',
    duration: '4 Days',
    detailsLink: '#',
    imageUrl: 'https://images.unsplash.com/photo-1512453979798-5ea266f8880c?q=80&w=2940&auto=format&fit=crop', // Dubai (working)
    schedule: 'Mon-Thu',
    city: 'Dubai',
  },
  {
    id: '5',
    slug: 'ai-governance-manchester-august-2026',
    title: 'AI Governance',
    summary: 'A comprehensive training on the principles and practices of AI governance in Manchester.',
    eventType: 'Training',
    topicArea: 'Governance',
    deliveryMode: 'In-Person',
    region: 'UK',
    date: 'August 2026',
    duration: '4 Days',
    detailsLink: '#',
    imageUrl: 'https://images.unsplash.com/photo-1496568816309-51d7c20e3b21?q=80&w=1931&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D', // Manchester (new)
    schedule: 'Mon-Thu',
    city: 'Manchester',
  },
];

export const filterOptions = {
  eventType: ['All', 'Training', 'Workshop', 'Bootcamp', 'Executive Program'],
  topicArea: ['All', 'AI Security', 'Risk Management', 'Cloud Security', 'Governance'],
  deliveryMode: ['All', 'Live Online', 'In-Person', 'Hybrid'],
  region: ['All', 'Asia-Pacific', 'Global', 'EMEA', 'North America', 'UK'],
};
