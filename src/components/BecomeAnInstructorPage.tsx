'use client';

import React, { useState } from 'react';
import { becomeAnInstructorData } from '@/data/becomeAnInstructor';
import { CheckCircle } from 'lucide-react';

const BecomeAnInstructorPage = () => {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    bio: '',
    resume: null,
  });

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files) {
      setFormData((prev) => ({ ...prev, resume: e.target.files[0] }));
    }
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission logic here
    console.log(formData);
  };

  return (
    <div className="bg-base-100">
      {/* Hero Section */}
      <section
        className="relative bg-cover bg-center py-20 text-primary-content"
        style={{ backgroundImage: becomeAnInstructorData.hero.backgroundImage }}
      >
        <div className="absolute inset-0 bg-black opacity-50"></div>
        <div className="relative max-w-4xl mx-auto text-center">
          <h1 className="text-4xl md:text-5xl font-bold">{becomeAnInstructorData.hero.title}</h1>
          <p className="mt-4 text-lg md:text-xl text-primary-content/80">{becomeAnInstructorData.hero.subtitle}</p>
          <a href="#apply" className="btn btn-secondary btn-lg mt-8">
            {becomeAnInstructorData.hero.cta}
          </a>
        </div>
      </section>

      {/* Why Teach With Us Section */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">{becomeAnInstructorData.whyTeachWithUs.title}</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {becomeAnInstructorData.whyTeachWithUs.points.map((point, index) => (
              <div key={index} className="card bg-base-200 shadow-lg">
                <div className="card-body">
                  <h3 className="card-title">{point.title}</h3>
                  <p>{point.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Who We're Looking For Section */}
      <section className="bg-base-200 py-20">
        <div className="max-w-4xl mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-4">{becomeAnInstructorData.whoWeAreLookingFor.title}</h2>
          <p className="text-lg text-center text-base-content/80 mb-12">{becomeAnInstructorData.whoWeAreLookingFor.description}</p>
          <ul className="space-y-4">
            {becomeAnInstructorData.whoWeAreLookingFor.points.map((point, index) => (
              <li key={index} className="flex items-start">
                <CheckCircle className="w-6 h-6 text-success mr-4 mt-1 flex-shrink-0" />
                <span>{point}</span>
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* Our Process Section */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">{becomeAnInstructorData.ourProcess.title}</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {becomeAnInstructorData.ourProcess.steps.map((step, index) => (
              <div key={index} className="card bg-base-200 shadow-lg">
                <div className="card-body">
                  <h3 className="card-title">{step.title}</h3>
                  <p>{step.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Apply Section */}
      <section id="apply" className="bg-base-200 py-20">
        <div className="max-w-4xl mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-4">{becomeAnInstructorData.apply.title}</h2>
          <p className="text-lg text-center text-base-content/80 mb-12">{becomeAnInstructorData.apply.description}</p>
          <form onSubmit={handleSubmit} className="space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <input
                type="text"
                name="firstName"
                value={formData.firstName}
                onChange={handleInputChange}
                placeholder={becomeAnInstructorData.apply.form.firstName}
                className="input input-bordered w-full"
                required
              />
              <input
                type="text"
                name="lastName"
                value={formData.lastName}
                onChange={handleInputChange}
                placeholder={becomeAnInstructorData.apply.form.lastName}
                className="input input-bordered w-full"
                required
              />
            </div>
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleInputChange}
              placeholder={becomeAnInstructorData.apply.form.email}
              className="input input-bordered w-full"
              required
            />
            <textarea
              name="bio"
              value={formData.bio}
              onChange={handleInputChange}
              className="textarea textarea-bordered w-full"
              placeholder={becomeAnInstructorData.apply.form.bio}
              rows={4}
              required
            ></textarea>
            <div>
              <label className="label">
                <span className="label-text">{becomeAnInstructorData.apply.form.resume}</span>
              </label>
              <input
                type="file"
                name="resume"
                onChange={handleFileChange}
                className="file-input file-input-bordered w-full"
                required
              />
            </div>
            <div className="text-center">
              <button type="submit" className="btn btn-primary btn-lg">
                {becomeAnInstructorData.apply.cta}
              </button>
            </div>
          </form>
        </div>
      </section>
    </div>
  );
};

export default BecomeAnInstructorPage;
