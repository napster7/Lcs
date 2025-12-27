"use client";

import React, { useState, useRef, useEffect } from 'react';
import Link from 'next/link';
import { X, Loader2, CheckCircle } from 'lucide-react';

const countries = [
  "United States", "United Kingdom", "Canada", "Australia", "Germany", "France", "India", "Singapore", "Other"
];

const NewsletterSubscription = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [phoneNumber, setPhoneNumber] = useState('');
  const [location, setLocation] = useState('');
  const [status, setStatus] = useState<'idle' | 'loading' | 'success'>('idle');

  const modalRef = useRef<HTMLDialogElement>(null);

  useEffect(() => {
    if (isOpen) {
      modalRef.current?.showModal();
    } else {
      modalRef.current?.close();
    }
  }, [isOpen]);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus('loading');
    // Simulate API call
    await new Promise(resolve => setTimeout(resolve, 1500));
    setStatus('success');
    // Reset form after a delay
    setTimeout(() => {
        setIsOpen(false);
        setStatus('idle');
        setName('');
        setEmail('');
        setPhoneNumber('');
        setLocation('');
    }, 2000);
  };

  return (
    <>
      {/* Inline CTA Section */}
      <div className="bg-base-200 py-20">
        <div className="max-w-4xl mx-auto text-center px-4">
          <h2 className="text-4xl font-bold">Stay Updated on AI & Cybersecurity</h2>
          <p className="mt-4 text-lg text-base-content/80">
            Get insights on upcoming trainings, industry trends, certifications, and live events.
          </p>
          <div className="mt-8">
            <button className="btn btn-primary btn-lg" onClick={() => setIsOpen(true)}>
              Subscribe to Newsletter
            </button>
          </div>
        </div>
      </div>

      {/* Modal */}
      <dialog ref={modalRef} className="modal backdrop-blur-sm">
        <div className="modal-box">
          <button 
            className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2" 
            onClick={() => setIsOpen(false)}
          >
            <X />
          </button>
          
          {status === 'success' ? (
            <div className="text-center p-8">
                <CheckCircle className="w-16 h-16 text-success mx-auto mb-4" />
                <h3 className="font-bold text-2xl">Subscription Confirmed!</h3>
                <p className="py-4">Thank you for subscribing. You'll receive updates from us soon.</p>
            </div>
          ) : (
            <>
              <h3 className="font-bold text-2xl">Subscribe to Our Newsletter</h3>
              <p className="py-4 text-sm text-base-content/70">Get curated updates on AI, cybersecurity training, and professional programs.</p>
              
              <form onSubmit={handleSubmit} className="space-y-4">
                <div>
                  <label className="label">
                    <span className="label-text">Your Name</span>
                  </label>
                  <input 
                    type="text" 
                    placeholder="John Doe" 
                    className="input input-bordered w-full" 
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    required 
                  />
                </div>
                <div>
                  <label className="label">
                    <span className="label-text">Your Email</span>
                  </label>
                  <input 
                    type="email" 
                    placeholder="you@example.com" 
                    className="input input-bordered w-full" 
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    required 
                  />
                </div>
                <div>
                  <label className="label">
                    <span className="label-text">Phone Number</span>
                  </label>
                  <input 
                    type="tel" 
                    placeholder="+1 123 456 7890" 
                    className="input input-bordered w-full" 
                    value={phoneNumber}
                    onChange={(e) => setPhoneNumber(e.target.value)}
                    required 
                  />
                </div>
                <div>
                  <label className="label">
                    <span className="label-text">Location</span>
                  </label>
                  <select 
                    className="select select-bordered w-full"
                    value={location}
                    onChange={(e) => setLocation(e.target.value)}
                    required
                  >
                    <option value="" disabled>Select your country</option>
                    {countries.map(country => (
                      <option key={country} value={country}>{country}</option>
                    ))}
                  </select>
                </div>

                <div className="text-xs text-base-content/60 pt-2">
                  By subscribing, you agree to our data processing terms. Please review our{' '}
                  <Link href="/privacy" className="link link-hover">Privacy Policy</Link>.
                </div>

                <div className="modal-action mt-6">
                  <button 
                    type="submit" 
                    className="btn btn-primary w-full"
                    disabled={!name || !email || !phoneNumber || !location || status === 'loading'}
                  >
                    {status === 'loading' ? (
                      <>
                        <Loader2 className="animate-spin mr-2" />
                        Submitting...
                      </>
                    ) : (
                      'Subscribe'
                    )}
                  </button>
                </div>
              </form>
            </>
          )}
        </div>
        <form method="dialog" className="modal-backdrop">
            <button onClick={() => setIsOpen(false)}>close</button>
        </form>
      </dialog>
    </>
  );
};

export default NewsletterSubscription;