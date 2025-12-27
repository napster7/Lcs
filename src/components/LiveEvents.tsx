"use client";

import React from 'react';
import { eventsAndCoursesData } from '@/data/eventsAndCourses';
import { Calendar } from 'lucide-react';

const LiveEvents = () => {
  const { events, t } = eventsAndCoursesData;

  return (
    <div className="py-16 bg-base-200">
      <div className="max-w-7xl mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-light mb-4 text-primary">Upcoming Events</h2>
          <div className="w-20 h-1 bg-primary mx-auto"></div>
        </div>
        <div className="max-w-2xl mx-auto">
          <div>
            <div className="space-y-6">
              {events.map((event, index) => (
                <div key={index} className="card bg-base-100 shadow-lg">
                  <div className="card-body">
                    <h4 className="card-title">{event.title}</h4>
                    <p className="text-base-content/70">{event.date}</p>
                    <p>{event.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LiveEvents;