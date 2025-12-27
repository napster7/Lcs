
import React from 'react';
import {
  ShieldCheck,
  BrainCog,
  Target,
  Users,
  BookOpenText,
  Award,
  CheckCircle2,
  Globe2,
  Clock,
  MonitorCheck,
  Binary,
  ShieldAlert,
  SearchCheck
} from 'lucide-react';
import Image1 from '@/assets/images/carouselImage1.jpg';
import { aboutData } from '@/data/about';

type IconName = 'BrainCog' | 'SearchCheck' | 'Binary' | 'MonitorCheck' | 'ShieldAlert' | 'BookOpenText' | 'Globe2' | 'Users' | 'Target' | 'Award';

const iconComponents: Record<IconName, React.ReactElement> = {
  BrainCog: <BrainCog className="w-6 h-6" />,
  SearchCheck: <SearchCheck className="w-6 h-6" />,
  Binary: <Binary className="w-6 h-6" />,
  MonitorCheck: <MonitorCheck className="w-6 h-6" />,
  ShieldAlert: <ShieldAlert className="w-6 h-6" />,
  BookOpenText: <BookOpenText className="w-6 h-6" />,
  Globe2: <Globe2 className="w-8 h-8" />,
  Users: <Users className="w-8 h-8" />,
  Target: <Target className="w-8 h-8" />,
  Award: <Award className="w-8 h-8" />,
};

const AboutPage = () => {
  const { modules, features, highlights, t } = aboutData;

  return (
    <div className="min-h-screen bg-base-100 text-base-content transition-colors duration-300">
      {/* Hero Section with Background Image */}
      <div className="relative overflow-hidden">
        <div className="relative h-96 flex items-center justify-center">
          <div className="absolute inset-0 bg-primary/90"></div>
          <div
            className="absolute inset-0 bg-cover bg-center bg-no-repeat opacity-20"
            style={{ backgroundImage: `url(${Image1.src})` }}
          ></div>
          <div className="relative text-center">
            <h1 className="text-6xl font-light mb-6 text-primary-content">
              {t.appliedAI}
            </h1>
            <div className="w-32 h-1 bg-primary-content mx-auto"></div>
          </div>
        </div>
      </div>

      {/* Enhanced Course Description Section */}
      <div className="max-w-7xl mx-auto px-4 py-16">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-light mb-4 text-primary">{t.aboutCourseTitle}</h2>
            <div className="w-20 h-1 bg-primary mx-auto mb-8"></div>
          </div>
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Left Side - Main Description */}
            <div className="space-y-6">
              <div className="card bg-base-200 border border-base-300 rounded-xl p-8 relative overflow-hidden">
                <div className="absolute top-0 right-0 w-20 h-20 bg-primary/5 rounded-full -mr-10 -mt-10"></div>
                <div className="relative">
                  <div className="flex items-center mb-6">
                    <div className="p-3 bg-base-300 rounded-lg mr-4">
                      <Target className="w-6 h-6 text-primary" />
                    </div>
                    <h3 className="text-xl font-semibold text-base-content">{t.courseOverviewTitle}</h3>
                  </div>
                  <p className="text-lg leading-relaxed text-base-content/70 mb-6">
                    {t.courseOverviewDesc}
                  </p>
                  <p className="text-lg leading-relaxed text-base-content/70">
                    {t.courseOverviewDesc2}
                  </p>
                </div>
              </div>
            </div>
            {/* Right Side - Key Outcomes */}
            <div className="space-y-6">
              <div className="card bg-base-200 border border-base-300 rounded-xl p-8 relative overflow-hidden">
                <div className="absolute bottom-0 left-0 w-16 h-16 bg-base-300/50 rounded-full -ml-8 -mb-8"></div>
                <div className="relative">
                  <div className="flex items-center mb-6">
                    <div className="p-3 bg-base-300 rounded-lg mr-4">
                      <Award className="w-6 h-6 text-primary" />
                    </div>
                    <h3 className="text-xl font-semibold text-base-content">{t.whatYouAchieveTitle}</h3>
                  </div>
                  <ul className="space-y-4">
                    <li className="flex items-start space-x-3">
                      <div className="w-2 h-2 bg-primary rounded-full mt-3 flex-shrink-0"></div>
                      <span className="text-base-content/70 text-lg">{t.achievement1}</span>
                    </li>
                    <li className="flex items-start space-x-3">
                      <div className="w-2 h-2 bg-primary rounded-full mt-3 flex-shrink-0"></div>
                      <span className="text-base-content/70 text-lg">{t.achievement2}</span>
                    </li>
                    <li className="flex items-start space-x-3">
                      <div className="w-2 h-2 bg-primary rounded-full mt-3 flex-shrink-0"></div>
                      <span className="text-base-content/70 text-lg">{t.achievement3}</span>
                    </li>
                  </ul>
                </div>
              </div>
              {/* Stats Card */}
              <div className="card bg-base-200 border border-base-300 rounded-xl p-6">
                <div className="grid grid-cols-2 gap-6 text-center">
                  <div>
                    <div className="text-3xl font-bold text-primary mb-2">6</div>
                    <div className="text-sm text-base-content/70">{t.comprehensiveModulesLabel}</div>
                  </div>
                  <div>
                    <div className="text-3xl font-bold text-primary mb-2">40+</div>
                    <div className="text-sm text-base-content/70">{t.hoursOfContentLabel}</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Why This Course Stands Out */}
      <div className="py-16 bg-base-200">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-light mb-4 text-primary">{t.whyThisCourseStandsOut}</h2>
            <div className="w-16 h-1 bg-primary mx-auto"></div>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            {highlights.map((highlight, index) => (
              <div key={index} className="card bg-base-100 p-6 rounded-lg border border-base-300 relative overflow-hidden">
                <div className="absolute top-0 left-0 w-full h-1 bg-primary"></div>
                <div className="flex items-start space-x-4">
                  <div className="p-2 bg-base-300 rounded-lg">
                    <CheckCircle2 className="w-6 h-6 text-primary" />
                  </div>
                  <p className="text-base-content font-medium">{highlight}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Course Modules */}
      <div className="py-16">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-light mb-4 text-primary">{t.detailedCurriculum}</h2>
            <div className="w-16 h-1 bg-primary mx-auto mb-6"></div>
            <p className="text-lg text-base-content/70 max-w-2xl mx-auto">
              {t.comprehensiveModules}
            </p>
          </div>
          <div className="grid lg:grid-cols-2 gap-8">
            {modules.map((module, index) => (
              <div key={index} className="card bg-base-200 border border-base-300 rounded-lg p-6 relative overflow-hidden">
                <div className="absolute top-4 right-4 text-6xl font-bold text-primary/10">
                  {module.number}
                </div>
                <div className="relative">
                  <div className="flex items-center space-x-4 mb-4">
                    <div className="p-3 bg-primary rounded-lg text-primary-content">
                      {iconComponents[module.icon as IconName]}
                    </div>
                    <div>
                      <span className="text-sm font-medium text-primary">Module {module.number}</span>
                      <h3 className="text-xl font-semibold text-base-content">{module.title}</h3>
                    </div>
                  </div>
                  <ul className="space-y-3">
                    {module.items.map((item, itemIndex) => (
                      <li key={itemIndex} className="flex items-start space-x-3">
                        <div className="w-2 h-2 bg-primary rounded-full mt-2 flex-shrink-0"></div>
                        <span className="text-base-content/70">{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Features & Benefits */}
      <div className="py-16 bg-base-200">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-light mb-4 text-primary">{t.whyChooseTraining}</h2>
            <div className="w-16 h-1 bg-primary mx-auto"></div>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {features.slice(0, 3).map((feature, index) => (
              <div key={index} className="card bg-base-100 border border-base-300 rounded-lg p-8 text-center relative overflow-hidden">
                <div className="absolute top-0 left-1/2 transform -translate-x-1/2 w-20 h-1 bg-primary"></div>
                <div className="mb-6">
                  <div className="inline-flex p-4 bg-base-300 rounded-full text-primary mb-4">
                    {iconComponents[feature.icon as IconName]}
                  </div>
                  <h3 className="text-xl font-semibold mb-3 text-base-content">{feature.title}</h3>
                  <p className="text-base-content/70">{feature.description}</p>
                </div>
              </div>
            ))}
          </div>
          <div className="grid md:grid-cols-2 gap-8 mt-8 max-w-4xl mx-auto">
            {features.slice(3).map((feature, index) => (
              <div key={index + 3} className="card bg-base-100 border border-base-300 rounded-lg p-8 text-center relative overflow-hidden">
                <div className="absolute top-0 left-1/2 transform -translate-x-1/2 w-20 h-1 bg-primary"></div>
                <div className="mb-6">
                  <div className="inline-flex p-4 bg-base-300 rounded-full text-primary mb-4">
                    {iconComponents[feature.icon as IconName]}
                  </div>
                  <h3 className="text-xl font-semibold mb-3 text-base-content">{feature.title}</h3>
                  <p className="text-base-content/70">{feature.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutPage;
