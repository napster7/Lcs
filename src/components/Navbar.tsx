"use client";

import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Menu, X, ChevronDown, ChevronUp, Facebook, Linkedin, Twitter, Bookmark, Search } from "lucide-react";
import logo from "@/assets/images/logo.jpg"; // Assuming logo path is correct
import { navbarData } from "@/data/navbar";
import { trainingPrograms } from '@/data/trainingPrograms';

const ThemeToggle = () => {
  return (
    <label className="flex cursor-pointer gap-2">
      <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="5"/><path d="M12 1v2M12 21v2M4.2 4.2l1.4 1.4M18.4 18.4l1.4 1.4M1 12h2M21 12h2M4.2 19.8l1.4-1.4M18.4 5.6l1.4-1.4"/></svg>
      <input type="checkbox" value="synthwave" className="toggle theme-controller"/>
      <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z"></path></svg>
    </label>
  );
};

const LanguageSelector = () => {
  return (
    <select className="select select-bordered select-xs">
      <option>EN</option>
      <option>ES</option>
    </select>
  );
};

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [trainingDropdownOpen, setTrainingDropdownOpen] = useState(false);
  const [certificationDropdownOpen, setCertificationDropdownOpen] = useState(false);
  const [searchOpen, setSearchOpen] = useState(false);
  
  const pathname = usePathname();

  // Function to generate breadcrumbs based on current route
  const getBreadcrumbs = () => {
    const path = pathname;
    const breadcrumbs = [{ name: navbarData.breadcrumbs.home, path: '/' }]; // Base path for Next.js is '/'

    if (path === '/') {
      return breadcrumbs;
    }

    if (path.includes('/training-exercises')) {
      breadcrumbs.push({ name: 'Training & Exercises', path: '/training-exercises' });
    
    } else if (path.includes('/training/cyber-expert')) {
      breadcrumbs.push({ name: navbarData.breadcrumbs.training, path: "" });
      breadcrumbs.push({ name: navbarData.breadcrumbs.appliedAI, path: '/training/cyber-expert' });
    } else if (path.includes('/certified-cyber-expert')) {
      breadcrumbs.push({ name: navbarData.breadcrumbs.certification, path: "" });
      breadcrumbs.push({ name: 'Certified Cyber Expert', path: '/certified-cyber-expert' });
    }

    return breadcrumbs;
  };

  const breadcrumbs = getBreadcrumbs();
  const currentPage = breadcrumbs[breadcrumbs.length - 1];

  return (
    <>
      <div className="sticky top-0 z-50">
        {/* Top Navigation Bar */}
        <div className="hidden bg-base-300 text-base-content text-xs py-2 transition-colors duration-300">
          <div className="max-w-7xl mx-auto px-4">
            <div className="flex justify-between items-center">
              {/* Left side slogan */}
              <div className="flex items-center">
                <span className="font-medium">Unlocking Potential, Securing the Future.</span>
              </div>
              
              {/* Right side - Theme Toggle, Language Selector */}
              <div className="flex items-center space-x-4">
                <ThemeToggle />
                <LanguageSelector />
              </div>
            </div>
          </div>
        </div>

        {/* Main Navigation Bar */}
        <nav className="bg-primary shadow-lg transition-colors duration-300">
          <div className="max-w-7xl mx-auto px-4">
            <div className="flex justify-between items-center h-15">
              {/* Logo */}
              <div className="flex items-center">
                <Link href="/" className="text-primary-content flex items-center gap-3">
                  <Image src={logo} alt="Cyber School logo" width={50} height={50} />                  
                  <div className="text-lg font-light whitespace-nowrap">
                    <span>{navbarData.brand.line1} </span>
                    <span className="font-semibold">{navbarData.brand.line2}</span>
                  </div>
                </Link>
              </div>

              {/* Desktop Navigation */}
              <div className="hidden lg:flex items-center space-x-8">
                <Link href="/" className="text-primary-content hover:text-secondary-content transition-colors font-medium">
                  {navbarData.mainNav.home}
                </Link>

                <Link href="/about" className="text-primary-content hover:text-secondary-content transition-colors font-medium">
                  {navbarData.mainNav.about}
                </Link>
                
                {/* Training Dropdown */}
                <div className="relative group">
                  <button className="flex items-center gap-1 text-primary-content  hover:text-secondary-content transition-colors font-medium">
                    {navbarData.mainNav.training.main}
                    <ChevronDown className="w-3 h-3" />
                  </button>
                  <div className="absolute hidden group-hover:block top-full left-0 pt-2">
                    <div className="card bg-base-100 shadow-xl rounded-sm border border-base-200 w-80">
                      {navbarData.mainNav.training.items.map((item, index) => (
                        <Link key={index} href={item.href} className="block px-6 py-4 text-base-content hover:bg-base-200 border-b border-base-200 transition-colors">
                          {item.label}
                        </Link>
                      ))}
                    </div>
                  </div>
                </div>

                {/* Certification Dropdown */}
                <div className="relative group">
                  <button className="flex items-center gap-1 text-primary-content  hover:text-secondary-contenttransition-colors font-medium">
                    {navbarData.mainNav.certification.main}
                    <ChevronDown className="w-3 h-3" />
                  </button>
                  <div className="absolute hidden group-hover:block top-full left-0 pt-2">
                    <div className="card bg-base-100 shadow-xl rounded-sm border border-base-200 w-80">
                      {navbarData.mainNav.certification.items.map((item, index) => (
                        <Link key={index} href={item.href} className="block px-6 py-4 text-primary hover:bg-base-200 border-b border-base-200 transition-colors">
                          {item.label}
                        </Link>
                      ))}
                    </div>
                  </div>
                </div>

                <Link href={navbarData.mainNav.executiveEducation.href} className="text-primary-content  hover:text-secondary-content transition-colors font-medium">
                  {navbarData.mainNav.executiveEducation.main}
                </Link>

                

                <Link href="/contact" className="text-primary-content  hover:text-secondary-content transition-colors font-medium">
                  {navbarData.mainNav.contact}
                </Link>
              </div>

              {/* Mobile Menu Button */}
              <div className="lg:hidden">
                <button
                  onClick={() => setMenuOpen(!menuOpen)}
                  className="text-primary-content hover:text-secondary transition-colors"
                >
                  {menuOpen ? <X size={24} /> : <Menu size={24} />}
                </button>
              </div>
            </div>

            {/* Bottom section with dynamic breadcrumb and social icons */}
            <div className="hidden">
              {/* Dynamic Breadcrumb */}
              <div className="flex items-center space-x-2 text-sm">
                {breadcrumbs.map((crumb, index) => (
                  <React.Fragment key={index}>
                    {crumb.path ? (
                      <Link href={crumb.path} className="text-primary-content hover:text-secondary transition-colors">
                        {crumb.name}
                      </Link>
                    ) : (
                      <span className="text-secondary">{crumb.name}</span>
                    )}
                    {index < breadcrumbs.length - 1 && (
                      <span className="text-primary-content">›</span>
                    )}
                  </React.Fragment>
                ))}
              </div>
              
              {/* Social Icons and Save */}
              <div className="flex items-center space-x-4">
                <Link href="#" className="text-primary-content hover:text-secondary transition-colors">
                  <Facebook className="w-4 h-4" />
                </Link>
                <Link href="#" className="text-primary-content hover:text-secondary transition-colors">
                  <Linkedin className="w-4 h-4" />
                </Link>
                <Link href="#" className="text-primary-content hover:text-secondary transition-colors">
                  <Twitter className="w-4 h-4" />
                </Link>
                <button className="flex items-center space-x-2 text-primary-content hover:text-secondary transition-colors text-sm">
                  <Bookmark className="w-4 h-4" />
                  <span>{navbarData.social.saveToProfile}</span>
                </button>
              </div>
            </div>
          </div>

          {/* Mobile Menu */}
          {menuOpen && (
            <div className="lg:hidden bg-base-100 border-t border-base-200">
              <div className="px-4 py-6 space-y-1">
                <Link href="/" className="block text-base-content font-medium py-3 border-b border-base-200 hover:text-primary transition-colors">
                  {navbarData.mainNav.home}
                </Link>

                <Link href="/about" className="block text-base-content font-medium py-3 border-b border-base-200 hover:text-primary transition-colors">
                  {navbarData.mainNav.about}
                </Link>

                {/* Mobile Training Dropdown */}
                <div className="border-b border-base-200">
                  <button
                    onClick={() => setTrainingDropdownOpen(!trainingDropdownOpen)}
                    className="w-full flex justify-between items-center text-base-content font-medium py-3 hover:text-primary transition-colors"
                  >
                    <span>{navbarData.mainNav.training.main}</span>
                    {trainingDropdownOpen ? (
                      <ChevronUp className="w-4 h-4" />
                    ) : (
                      <ChevronDown className="w-4 h-4" />
                    )}
                  </button>
                  {trainingDropdownOpen && (
                    <div className="pl-4 pb-3 space-y-2">
                      {navbarData.mainNav.training.items.map((item, index) => (
                        <Link key={index} href={item.href} className="block text-base-content hover:text-primary py-2 transition-colors">
                          {item.label}
                        </Link>
                      ))}
                    </div>
                  )}
                </div>

                {/* Mobile Certification Dropdown */}
                <div className="border-b border-base-200">
                  <button
                    onClick={() => setCertificationDropdownOpen(!certificationDropdownOpen)}
                    className="w-full flex justify-between items-center text-base-content font-medium py-3 hover:text-primary transition-colors"
                  >
                    <span>{navbarData.mainNav.certification.main}</span>
                    {certificationDropdownOpen ? (
                      <ChevronUp className="w-4 h-4" />
                    ) : (
                      <ChevronDown className="w-4 h-4" />
                    )}
                  </button>
                  {certificationDropdownOpen && (
                    <div className="pl-4 pb-3 space-y-2">
                      {navbarData.mainNav.certification.items.map((item, index) => (
                        <Link key={index} href={item.href} className="block text-base-content hover:text-primary py-2 transition-colors">
                          {item.label}
                        </Link>
                      ))}
                    </div>
                  )}
                </div>

                <Link href={navbarData.mainNav.executiveEducation.href} className="block text-base-content font-medium py-3 border-b border-base-200 hover:text-primary transition-colors">
                  {navbarData.mainNav.executiveEducation.main}
                </Link>

                

                <Link href="/contact" className="block text-base-content font-medium py-3 hover:text-primary transition-colors">
                  {navbarData.mainNav.contact}
                </Link>

                {/* Mobile Theme Toggle and Language Selector */}
                <div className="flex items-center justify-center space-x-6 pt-6 border-t border-base-200">
                  <ThemeToggle />
                  <LanguageSelector />
                </div>

                {/* Mobile Social Links */}
                <div className="flex items-center justify-center space-x-6 pt-6 border-t border-base-200">
                  <Link href="#" className="text-base-content hover:text-primary transition-colors">
                    <Facebook className="w-5 h-5" />
                  </Link>
                  <Link href="#" className="text-base-content hover:text-primary transition-colors">
                    <Linkedin className="w-5 h-5" />
                  </Link>
                  <Link href="#" className="text-base-content hover:text-primary transition-colors">
                    <Twitter className="w-5 h-5" />
                  </Link>
                  <Link href="#" className="text-base-content hover:text-primary transition-colors">
                    <Bookmark className="w-5 h-5" />
                  </Link>
                </div>

                {/* Mobile Breadcrumb */}
                <div className="pt-4 border-t border-base-200 mt-4">
                  <div className="flex items-center space-x-2 text-sm">
                    {breadcrumbs.map((crumb, index) => (
                      <React.Fragment key={index}>
                        {crumb.path ? (
                          <Link href={crumb.path} className="text-base-content hover:text-primary transition-colors">
                            {crumb.name}
                          </Link>
                        ) : (
                          <span className="text-primary">{crumb.name}</span>
                        )}
                        {index < breadcrumbs.length - 1 && (
                          <span className="text-base-content">›</span>
                        )}
                      </React.Fragment>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          )}
        </nav>
      </div>
    </>
  );
};

export default Navbar;