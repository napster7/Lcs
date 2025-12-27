
// src/components/ExecutiveEducation.tsx
"use client";

import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { executiveEducationData } from '@/data/executive-education';
import { trainingPrograms } from '@/data/trainingPrograms'; // Re-import trainingPrograms
import { ChevronRight, Users, Clock, BarChart, Tag } from 'lucide-react'; // Re-import necessary icons

const ExecutiveEducationPage = () => {
  const { introduction, domains, delivery, organizational, guidance, closing } = executiveEducationData;
  const heroImageUrl = "https://images.unsplash.com/photo-1556761175-5973dc0f32e7?q=80&w=2832&auto=format&fit=crop";

  return (
    <div className="bg-base-100 text-base-content">

      {/* Section 1: Executive Education Introduction */}
      <div className="relative">
        <header className="bg-primary text-primary-content pt-16 md:pt-24 pb-32 md:pb-48">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
              <div className="text-center md:text-left">
                <h1 className="text-4xl md:text-5xl font-bold">{introduction.title}</h1>
                <p className="mt-6 text-lg md:text-xl text-primary-content/90">{introduction.description}</p>
                <p className="mt-4 text-md text-primary-content/70">{introduction.subDescription}</p>
              </div>
            </div>
          </div>
        </header>
        <div className="absolute top-0 right-0 w-full md:w-1/2 h-full">
          <div className="relative w-full h-full">
            <Image
              src={heroImageUrl}
              alt="Executive Education"
              fill
              className="object-cover"
            />
            <div className="absolute inset-0 bg-primary opacity-30"></div>
          </div>
        </div>
      </div>

      {/* Section 2: Executive Learning Focus Areas */}
      <section className="bg-base-200 -mt-24 relative z-10 rounded-t-2xl py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-primary">{domains.title}</h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {domains.areas.map((area) => (
              <div key={area.name} className="card bg-base-100 shadow-lg transition-shadow hover:shadow-2xl">
                <figure className="h-64 relative">
                  <Image
                    src={area.imageUrl}
                    alt={area.name}
                    fill
                    className="object-cover"
                  />
                </figure>
                <div className="card-body">
                  <h3 className="card-title">{area.name}</h3>
                  <p className="text-base-content/70 text-sm">{area.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Section 5: Delivery Formats and Flexibility */}
      <section className="py-20 bg-base-200">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h2 className="text-3xl font-bold text-primary">{delivery.title}</h2>
            <p className="mt-4 max-w-3xl mx-auto text-lg text-base-content/80">{delivery.description}</p>
          </div>
        </div>
      </section>

      {/* Section 7: Organizational and Custom Executive Education */}
      <section className="py-20 bg-base-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            {/* Text and CTA */}
            <div className="text-center md:text-left">
              <h2 className="text-3xl font-bold text-primary mb-4">{organizational.title}</h2>
              <p className="text-lg text-base-content/80 mb-6">{organizational.description}</p>
              <Link href={organizational.ctaLink} className="btn btn-primary btn-lg">
                {organizational.cta}
              </Link>
            </div>
            {/* Image */}
            <div className="flex justify-center md:justify-end">
              <div className="w-full max-w-md h-64 md:h-80 relative rounded-lg shadow-xl overflow-hidden">
                <Image
                  src={organizational.imageUrl}
                  alt={organizational.title}
                  fill
                  className="object-cover"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Other sections will be added here based on subsequent prompts */}

      <section className="py-20 bg-base-200">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h2 className="text-3xl font-bold text-primary">{guidance.title}</h2>
            <p className="mt-4 max-w-3xl mx-auto text-lg text-base-content/80">{guidance.description}</p>
          </div>
        </div>
      </section>

      <section className="py-20 bg-primary text-primary-content">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold mb-6">{closing.title}</h2>
          <p className="text-lg max-w-3xl mx-auto mb-8">{closing.description}</p>
          <div className="flex flex-wrap justify-center gap-4">
            <Link href={closing.cta1Link} className="btn btn-secondary btn-lg">{closing.cta1}</Link>
            <Link href={closing.cta2Link} className="btn btn-ghost btn-lg">{closing.cta2}</Link>
            <Link href={closing.cta3Link} className="btn btn-ghost btn-lg">{closing.cta3}</Link>
          </div>
        </div>
      </section>

    </div>
  );
};

export default ExecutiveEducationPage;
