"use client";

import React from 'react';
import { aboutUsData } from '@/data/aboutUs';
import Image from 'next/image';

const AboutUs = () => {
  const { title, description, sections } = aboutUsData;

  return (
    <div className="bg-base-100 text-base-content py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <h1 className="text-4xl font-bold text-primary">{title}</h1>
          <p className="mt-4 text-lg text-base-content/70">{description}</p>
        </div>

        <div className="mt-16 space-y-16">
          {sections.map((section, index) => (
            <div key={index} className="grid md:grid-cols-2 gap-12 items-center">
              <div className={`${index % 2 === 1 ? 'md:order-2' : ''}`}>
                <Image src={section.image} alt={section.title} className="rounded-lg shadow-lg " />
              </div>
              <div>
                <h2 className="text-3xl lg:text-4xl font-extrabold text-primary">{section.title}</h2>
                <p className="mt-6 text-lg leading-relaxed text-base-content/80">{section.content}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default AboutUs;