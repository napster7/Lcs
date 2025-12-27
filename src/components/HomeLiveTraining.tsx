"use client";

import React from 'react';
import { liveTrainingEventsData, LiveTrainingEvent } from '@/data/liveTrainingEvents';
import Image from 'next/image';
import Link from 'next/link';
import EventCard from './EventCard'; // Import EventCard

const HomeLiveTraining = () => {
  const featuredEvents = liveTrainingEventsData.slice(0, 3);

  return (
    <div className="bg-base-100 text-base-content py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-primary">Upcoming Live Training</h2>
          <p className="mt-4 text-lg text-base-content/70">Join our expert-led live sessions from around the world.</p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {featuredEvents.map(event => <EventCard key={event.id} event={event} />)}
        </div>
        <div className="text-center mt-12">
          <Link href="/live-training" className="btn btn-primary btn-lg">
            View All Live Events
          </Link>
        </div>
      </div>
    </div>
  );
};

export default HomeLiveTraining;