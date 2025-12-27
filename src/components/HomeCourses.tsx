"use client";

import React from 'react';
import { trainingPrograms } from '@/data/trainingPrograms';
import { Book, Clock, BarChart, Tag } from 'lucide-react';
import Link from 'next/link';
import Image from 'next/image';

const HomeCourses = () => {
  return (
    <div className="bg-base-100 text-base-content py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-primary">Our Training Programs</h2>
          <p className="mt-4 text-lg text-base-content/70">Explore our comprehensive list of training programs.</p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {trainingPrograms.map(program => (
            <div key={program.title} className="card bg-base-200 shadow-xl hover:shadow-2xl transition-shadow duration-300">
              <figure><Image src={program.imageUrl} alt={program.title} width={400} height={225} className="object-cover" /></figure>
              <div className="card-body">
                <h2 className="card-title">{program.title}</h2>
                <p>{program.description}</p>
                <div className="flex flex-wrap gap-4 mt-4 text-sm text-base-content opacity-80">
                  <div className="flex items-center gap-2">
                    <BarChart className="w-4 h-4" />
                    <span>{program.difficulty}</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Clock className="w-4 h-4" />
                    <span>{program.duration}</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Tag className="w-4 h-4" />
                    <span>{program.category}</span>
                  </div>
                </div>
                <div className="card-actions justify-end mt-4">
                  <Link href={program.link} className="btn btn-primary">
                    View Training
                  </Link>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default HomeCourses;