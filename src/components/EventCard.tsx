"use client";

import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { LiveTrainingEvent } from '@/data/liveTrainingEvents'; // Import the type

const EventCard = ({ event }: { event: LiveTrainingEvent }) => (
    <div className="card bg-base-200 shadow-lg hover:shadow-xl transition-shadow duration-300 overflow-hidden">
        <figure><Image src={event.imageUrl} alt={event.title} width={400} height={225} className="object-cover" /></figure>
        <div className="card-body">
            <h2 className="card-title">{event.title}</h2>
            <p>{event.summary}</p>
            <div className="flex flex-wrap gap-4 mt-4 text-sm text-base-content opacity-80">
                <div className="flex items-center gap-2">
                    <span><strong>Date:</strong> {event.date}</span>
                </div>
                <div className="flex items-center gap-2">
                    <span><strong>Duration:</strong> {event.duration}</span>
                </div>
                <div className="flex items-center gap-2">
                    <span><strong>Schedule:</strong> {event.schedule}</span>
                </div>
                <div className="flex items-center gap-2">
                    <span><strong>City:</strong> {event.city}</span>
                </div>
                <div className="flex items-center gap-2">
                    <span><strong>Topic:</strong> {event.topicArea}</span>
                </div>
            </div>
            <div className="card-actions justify-end mt-4">
                <Link href={`/live-training/${event.slug}`} className="btn btn-primary">
                    View Details
                </Link>
            </div>
        </div>
    </div>
);

export default EventCard;
