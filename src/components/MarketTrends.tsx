"use client";

import React from 'react';
import { marketTrendsData } from '@/data/marketTrends';

const MarketTrends = () => {
  const { title, cards } = marketTrendsData;

  return (
    <div className="bg-primary text-neutral-content py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold">{title}</h2>
          <div className="w-24 h-1 bg-primary-content mx-auto mt-4"></div>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {cards.map((card, index) => (
            <div 
              key={index} 
              className="card bg-gradient-to-tr from-primary-content/10 to-primary-content/30 text-primary-content p-8 rounded-2xl shadow-lg backdrop-blur-lg border border-primary-content/20"
            >
              <div className="flex justify-start mb-4">
                <div className="p-3 bg-primary/80 rounded-lg">
                  <card.icon className="w-8 h-8" />
                </div>
              </div>
              <h3 className="text-xl font-bold mb-2 text-left">{card.headline}</h3>
              <p className="text-base opacity-80 mb-4 text-left flex-grow">{card.description}</p>
              {card.emphasis && (
                <div className="mt-auto text-left">
                  <span className="font-semibold text-sm opacity-80 border border-primary-content/50 rounded-full px-3 py-1">
                    {card.emphasis}
                  </span>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default MarketTrends;