"use client";

import React from 'react';
import { whyAICybersecurityImportantData } from '@/data/whyAICybersecurityImportant';

const WhyAICybersecurityImportant = () => {
  const { title, cards } = whyAICybersecurityImportantData;

  const backgroundShades = [
    "bg-primary",
    "bg-primary/80",
    "bg-primary",
    "bg-primary/80",
  ];

  return (
    <div className="bg-base-100 text-base-content py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold">{title}</h2>
          <div className="w-24 h-1 bg-primary mx-auto mt-4"></div>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {cards.map((card, index) => (
            <div key={index} className={`card ${backgroundShades[index]} text-primary-content p-8 rounded-lg shadow-lg text-center`}>
              <div className="flex justify-center mb-4">
                <card.icon className="w-12 h-12" />
              </div>
              <h3 className="text-xl font-bold mb-2">{card.heading}</h3>
              <p className="text-base opacity-90">{card.description}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default WhyAICybersecurityImportant;