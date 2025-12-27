
// src/components/Certifications.tsx
"use client";

import React, { useMemo } from 'react';
import Link from 'next/link';
import { certifications, Certification } from '@/data/certifications';
import { ChevronRight, Star, MessageCircle, BookOpen, Shield } from 'lucide-react';

// --- Helper Data ---
const testimonials = [
  { quote: "The CCSA certification was a game-changer for my career. The skills I learned were immediately applicable.", name: "Alex R.", role: "SOC Analyst" },
  { quote: "Earning the CxAIRMP credential gave me the confidence to lead our AI governance initiatives.", name: "Priya S.", role: "Risk Manager" },
  { quote: "The CCEH program is intense but incredibly rewarding. It's the gold standard for a reason.", name: "Mike T.", role: "Penetration Tester" },
];

const faqs = [
    { q: "Why is certification important?", a: "Certification validates your skills against industry benchmarks, demonstrates commitment to your profession, and provides measurable proof of competence to employers, enhancing your career opportunities." },
    { q: "How do I choose the right certification?", a: "Consider your current role, career aspirations, and areas of interest. Our role-based roadmaps can help you align our certifications with your professional goals." },
    { q: "What is the time commitment required?", a: "Time commitment varies by certification. Each certification page provides details on recommended study time and exam duration to help you plan accordingly." },
    { q: "Are these certifications recognized globally?", a: "Yes, our certifications are developed based on global industry standards and are recognized by organizations worldwide as a trusted credential for professional excellence." },
    { q: "How long do certifications stay valid?", a: "Most of our certifications are valid for three years. We require continuing education credits to ensure your skills remain current with the evolving landscape." },
];


// --- Sub-components ---

const FeaturedCard = ({ cert }: { cert: Certification }) => (
    <div className="card w-80 bg-base-200 shadow-xl hover:shadow-2xl transition-shadow duration-300 flex-shrink-0 mr-6">
        <div className="card-body">
            <h3 className="card-title">{cert.title}</h3>
            <p className="text-sm h-24">{cert.description}</p>
            <div className="card-actions justify-end">
                <Link href={cert.detailsUrl} className="btn btn-primary btn-sm">
                    Learn More
                </Link>
            </div>
        </div>
    </div>
);

const FaqItem = ({ q, a }: { q: string, a: string }) => (
    <details className="border-b border-base-300 pb-4 group">
        <summary className="font-semibold cursor-pointer list-none flex justify-between items-center">
            {q}
            <span className="group-open:rotate-90 transition-transform"><ChevronRight /></span>
        </summary>
        <p className="mt-2 text-base-content/80">{a}</p>
    </details>
);


// --- Main Component ---

const CertificationsPage = () => {
  const featuredCerts = useMemo(() => certifications.filter(c => c.isFeatured), []);

  return (
    <div className="bg-base-100 text-base-content min-h-screen">
      
      {/* 1. Page Header & Intro */}
      <header className="bg-primary text-primary-content text-center py-20">
        <h1 className="text-5xl font-bold">Certifications</h1>
        <p className="mt-4 text-xl">Validate your skills and advance your career with industry-recognized credentials.</p>
        <div className="mt-8 hidden">
            <Link href="/certification-portal" className="btn btn-secondary">
                Go to Certificate Portal
            </Link>
        </div>
      </header>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* 3. New & Featured Certifications */}
        <section className="py-16">
          <h2 className="text-3xl font-bold text-center mb-8 text-primary">New & Featured Certifications</h2>
          <div className="flex justify-center overflow-x-auto pb-4 -mx-4 px-4">
            {featuredCerts.map(cert => <FeaturedCard key={cert.id} cert={cert} />)}
          </div>
        </section>

      </div>

      {/* 4. & 5. Guidance & Value Sections */}
      <div className="bg-base-200 py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid md:grid-cols-2 gap-12">
          <div>
            <h2 className="text-3xl font-bold mb-4 text-primary">How to Prepare</h2>
            <p className="text-base-content/80 mb-4">Our goal is to ensure you succeed. We provide comprehensive exam preparation resources, including detailed study guides, sample questions, and recommended training courses designed to align with each certification's objectives. Your journey to certification is a partnership.</p>
            <Link href="/training" className="btn btn-primary">Explore Training Courses</Link>
          </div>
          <div>
            <h2 className="text-3xl font-bold mb-4 text-primary">The Value of Certification</h2>
            <p className="text-base-content/80">Being certified means more than just passing an exam; it's a verifiable credential that proves your skills are aligned with industry standards. It demonstrates a commitment to your profession, enhances your credibility, and provides a clear benchmark of your expertise for employers. Our certifications are built on real-world job tasks to ensure you are not just tested, but truly prepared.</p>
          </div>
        </div>
      </div>
      
      {/* 6. & 8. Exam Process & Testimonials */}
      <div className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid md:grid-cols-2 gap-12 items-center">
            <div>
                <h2 className="text-3xl font-bold mb-4 text-primary">The Exam Experience</h2>
                <p className="text-base-content/80 mb-8">Our exams are designed to be a fair and accurate measure of your skills. They are delivered through a secure online platform and feature a mix of question types to assess both theoretical knowledge and practical ability. Most certifications require renewal every three years through continuing education, ensuring your skills remain sharp and relevant.</p>
            </div>
            <div>
                {testimonials.map((t, i) => (
                    <div key={i} className="card bg-base-200 shadow-lg mb-4">
                        <div className="card-body">
                            <p className="italic">"{t.quote}"</p>
                            <p className="mt-4 font-semibold text-right">- {t.name}, {t.role}</p>
                        </div>
                    </div>
                ))}
            </div>
        </div>
      </div>

      {/* 9. FAQs Section */}
      <section className="max-w-4xl mx-auto py-16 px-4">
        <h2 className="text-3xl font-bold text-center mb-8 text-primary">Frequently Asked Questions</h2>
        <div className="space-y-4">
            {faqs.map(faq => <FaqItem key={faq.q} q={faq.q} a={faq.a} />)}
        </div>
      </section>

    </div>
  );
};

export default CertificationsPage;
