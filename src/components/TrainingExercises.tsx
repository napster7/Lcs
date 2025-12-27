
"use client";
import React, { useState } from 'react';
import { ChevronDown, Users, ExternalLink, Clock, Mail } from 'lucide-react';
import { trainingExercisesData } from '@/data/trainingExercises';
import carouselImage1 from "@/assets/images/training.jpg";

const TrainingExercisesPage = () => {
  const [expandedSections, setExpandedSections] = useState<Record<string, boolean>>({});
  const [expandedFAQs, setExpandedFAQs] = useState<Record<number, boolean>>({});
  const { t, federalEmployeeItems, criticalInfrastructureItems, cybersecurityProfessionalItems, generalPublicItems, exercisePackages, faqItems } = trainingExercisesData;

  const toggleSection = (sectionId: string) => {
    setExpandedSections(prev => ({
      ...prev,
      [sectionId]: !prev[sectionId]
    }));
  };

  const toggleFAQ = (faqId: number) => {
    setExpandedFAQs(prev => ({
      ...prev,
      [faqId]: !prev[faqId]
    }));
  };

  const CollapsibleSection = ({ items, sectionPrefix, title, detailsFunction }: { items: string[], sectionPrefix: string, title: string, detailsFunction: (index: number) => string }) => (
    <div className="mb-12">
      <h2 className="text-3xl font-light mb-8 text-primary">
        {title}
      </h2>
      
      <div className="space-y-1">
        {items.map((item, index) => {
          const sectionKey = `${sectionPrefix}-${index}`;
          const isExpanded = expandedSections[sectionKey];
          
          return (
            <div key={index} className="overflow-hidden border-b border-base-200">
              <button
                onClick={() => toggleSection(sectionKey)}
                className="w-full flex justify-between items-center py-6 px-4 text-left hover:bg-base-200 transition-colors duration-200"
              >
                <span className="font-medium text-base-content">
                  {item}
                </span>
                <ChevronDown className={`w-5 h-5 text-primary transition-transform duration-300 ${
                  isExpanded ? 'transform rotate-180' : ''
                }`} />
              </button>
              
              <div className={`transition-all duration-300 ease-in-out ${
                isExpanded ? 'max-h-40 opacity-100' : 'max-h-0 opacity-0'
              } overflow-hidden`}>
                <div className="px-4 pb-6 text-base-content/70">
                  {detailsFunction ? detailsFunction(index) : t.federalEmployeeDetails}
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );

  const getDetailsBySection = (section: string, index: number) => {
    switch(section) {
      case 'critical':
        return index === 1 ? t.cdmDescription : t.criticalInfraDetails;
      case 'professional':
        return t.professionalDetails;
      case 'public':
        return t.publicDetails;
      default:
        return t.federalEmployeeDetails;
    }
  };

  return (
    <div className="min-h-screen bg-base-100 text-base-content transition-colors duration-300">
      {/* Hero Section */}
      <div className="relative h-96 overflow-hidden">
        <div className="absolute inset-0">
          <img 
            src={carouselImage1.src} 
            alt={t.cybersecurityTrainingAlt} 
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-primary/70"></div>
        </div>
        
        <div className="relative z-10 max-w-7xl mx-auto px-4 h-full flex items-center">
          <div>
            <h1 className="text-5xl font-light text-primary-content mb-4">
              {t.cybersecurityTrainingExercises}
            </h1>
            <p className="text-xl text-primary-content/80 max-w-2xl">
              {t.heroSubtitle}
            </p>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="max-w-7xl mx-auto px-4 py-12">
        {/* Description */}
        <div className="mb-16">
          <p className="text-lg leading-relaxed text-base-content/70">
            {t.mainDescription}
          </p>
        </div>

        {/* Federal Employees Section */}
        <CollapsibleSection 
          items={federalEmployeeItems}
          sectionPrefix="federal"
          title={t.federalEmployees}
          detailsFunction={() => t.federalEmployeeDetails}
        />

        {/* Cybersecurity Exercises Section */}
        <div className="mb-12">
          <h2 className="text-3xl font-light mb-6 text-primary">
            {t.cybersecurityExercises}
          </h2>
          <p className="text-lg mb-12 leading-relaxed text-base-content/70">
            {t.exercisesDescription}
          </p>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
            {exercisePackages.map((exercise, index) => (
              <div 
                key={index} 
                className="card bg-base-200 border border-base-300 transition-colors duration-200 overflow-hidden flex flex-col h-full"
              >
                {/* Photo Header */}
                <div className="relative h-48 flex-shrink-0">
                  <img 
                    src={exercise.image} 
                    alt={exercise.title}
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute inset-0 bg-black bg-opacity-20"></div>
                </div>

                {/* Title and Info */}
                <div className="p-6 border-b border-base-300 flex-shrink-0">
                  <h3 className="text-xl font-semibold text-base-content mb-3 h-14 flex items-center">
                    {exercise.title}
                  </h3>
                  <div className="flex items-center justify-center space-x-4 text-sm text-base-content/70">
                    <div className="flex items-center space-x-1">
                      <Clock className="w-4 h-4" />
                      <span>{exercise.duration}</span>
                    </div>
                    <div className="flex items-center space-x-1">
                      <Users className="w-4 h-4" />
                      <span>{exercise.participants}</span>
                    </div>
                  </div>
                </div>

                {/* Content - Flexible to fill remaining space */}
                <div className="p-6 flex flex-col flex-grow">
                  <p className="text-base-content/70 mb-6 text-sm leading-relaxed flex-grow min-h-[4.5rem]">
                    {exercise.description}
                  </p>
                  
                  {/* Level */}
                  <div className="mb-4">
                    <span className="badge badge-primary badge-outline">
                      {exercise.level}
                    </span>
                  </div>

                  {/* Contact */}
                  <div className="text-sm text-base-content/70 mb-6 flex items-center space-x-2">
                    <Mail className="w-4 h-4 text-primary" />
                    <span>{exercise.contact}</span>
                  </div>

                  {/* Button - Always at bottom */}
                  <button className="btn btn-primary mt-auto">
                    <span>{t.learnMore}</span>
                    <ExternalLink className="w-4 h-4" />
                  </button>
                </div>
              </div>
            ))}
          </div>
          </div>
        </div>

        <div className="max-w-7xl mx-auto px-4 py-12">

        {/* Critical Infrastructure Operators */}
        <CollapsibleSection 
          items={criticalInfrastructureItems}
          sectionPrefix="critical"
          title={t.criticalInfrastructure}
          detailsFunction={(index) => getDetailsBySection('critical', index)}
        />

        {/* Cybersecurity Professionals (Non-Federal) */}
        <CollapsibleSection 
          items={cybersecurityProfessionalItems}
          sectionPrefix="professional"
          title={t.cybersecurityProfessionals}
          detailsFunction={(index) => getDetailsBySection('professional', index)}
        />

        {/* General Public */}
        <CollapsibleSection 
          items={generalPublicItems}
          sectionPrefix="public"
          title={t.generalPublic}
          detailsFunction={(index) => getDetailsBySection('public', index)}
        />
      </div>
      <FAQSection faqItems={faqItems} expandedFAQs={expandedFAQs} toggleFAQ={toggleFAQ} t={t} />
    </div>
  );
};

const FAQSection = ({ faqItems, expandedFAQs, toggleFAQ, t }: { faqItems: { question: string, answer: string }[], expandedFAQs: any, toggleFAQ: (index: number) => void, t: any }) => (
  <div className="max-w-4xl mx-auto py-12">
    <h2 className="text-3xl font-light text-center mb-10 text-primary">
      {t.frequentlyAskedQuestions}
    </h2>
    <div className="space-y-4">
      {faqItems.map((item, index) => (
        <div key={index} className="card bg-base-200 border border-base-300 rounded-lg overflow-hidden">
          <button
            onClick={() => toggleFAQ(index)}
            className="w-full flex justify-between items-center p-5 text-left"
          >
            <span className="font-medium text-base-content">{item.question}</span>
            <ChevronDown className={`w-5 h-5 text-primary transition-transform duration-300 ${
              expandedFAQs[index] ? 'transform rotate-180' : ''
            }`} />
          </button>
          <div className={`transition-all duration-300 ease-in-out ${
            expandedFAQs[index] ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'
          } overflow-hidden`}>
            <div className="p-5 border-t border-base-300">
              <p className="text-base-content/70">{item.answer}</p>
            </div>
          </div>
        </div>
      ))}
    </div>
  </div>
);

export default TrainingExercisesPage;
