'use client';

import { useState } from 'react';

export default function VolunteerPage() {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    age: '',
    location: '',
    interests: [],
    availability: '',
    experience: '',
    motivation: '',
    skills: '',
    emergencyContact: '',
    emergencyPhone: ''
  });

  const [isSubmitted, setIsSubmitted] = useState(false);

  const interestOptions = [
    'Education & Teaching',
    'Healthcare & Medical',
    'Community Development',
    'Environmental Conservation',
    'Disaster Relief',
    'Fundraising & Events',
    'Technology & Digital',
    'Administrative Support',
    'Translation Services',
    'Youth Mentoring'
  ];

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleInterestChange = (interest) => {
    setFormData(prev => ({
      ...prev,
      interests: prev.interests.includes(interest)
        ? prev.interests.filter(i => i !== interest)
        : [...prev.interests, interest]
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Form submitted:', formData);
    setIsSubmitted(true);
  };

  if (isSubmitted) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-slate-900">
        <div className="max-w-md mx-auto glass rounded-3xl p-8 text-center">
          <div className="w-20 h-20 bg-gradient-to-br from-emerald-400 to-cyan-400 rounded-full flex items-center justify-center mx-auto mb-8 pulse-glow">
            <svg className="w-10 h-10 text-slate-900" fill="currentColor" viewBox="0 0 20 20">
              <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
            </svg>
          </div>
          <h2 className="text-3xl font-bold text-white mb-6">Application Submitted!</h2>
          <p className="text-slate-400 mb-8 leading-relaxed">
            Thank you for your interest in volunteering with HopeForAll NGO. 
            We'll review your application and get back to you within 5-7 business days.
          </p>
          <button
            onClick={() => setIsSubmitted(false)}
            className="bg-gradient-to-r from-emerald-500 to-cyan-500 text-white px-8 py-4 rounded-full hover:from-emerald-600 hover:to-cyan-600 transition-all duration-300 transform hover:scale-105 font-semibold"
          >
            Submit Another Application
          </button>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-slate-900">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-slate-900 via-emerald-900 to-cyan-900 text-white py-20 lg:py-32 relative overflow-hidden">
        <div className="absolute inset-0">
          <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-emerald-500/20 rounded-full blur-3xl float-animation"></div>
          <div className="absolute bottom-1/4 right-1/4 w-64 h-64 bg-cyan-500/20 rounded-full blur-3xl float-animation" style={{animationDelay: '1s'}}></div>
        </div>
        
        <div className="relative max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <span className="inline-block px-4 py-2 bg-emerald-500/20 border border-emerald-500/30 rounded-full text-emerald-300 text-sm font-medium mb-6">
            🤝 Join Our Mission
          </span>
          <h1 className="text-4xl md:text-7xl font-bold mb-8">
            Join Our <span className="bg-gradient-to-r from-emerald-400 to-cyan-400 bg-clip-text text-transparent">Volunteer</span> Family
          </h1>
          <p className="text-xl md:text-2xl mb-12 text-slate-300 max-w-4xl mx-auto">
            Make a meaningful impact in communities worldwide. Your skills, passion, and time can change lives.
          </p>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-12">
            {[
              { number: "1200+", label: "Active Volunteers", icon: "👥" },
              { number: "25", label: "Countries", icon: "🌍" },
              { number: "150+", label: "Projects", icon: "🚀" }
            ].map((stat, index) => (
              <div key={index} className="glass rounded-2xl p-6 hover-lift">
                <div className="text-3xl mb-2">{stat.icon}</div>
                <div className="text-3xl font-bold text-emerald-400 mb-2">{stat.number}</div>
                <div className="text-lg text-slate-300">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Volunteer Section */}
      <section className="py-20 bg-slate-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <span className="inline-block px-4 py-2 bg-emerald-500/20 border border-emerald-500/30 rounded-full text-emerald-300 text-sm font-medium mb-6">
              Why Choose Us
            </span>
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
              Why Volunteer With Us?
            </h2>
            <p className="text-xl text-slate-400 max-w-3xl mx-auto">
              Discover the benefits of joining our global community of changemakers
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              {
                icon: "M3.172 5.172a4 4 0 015.656 0L10 6.343l1.172-1.171a4 4 0 115.656 5.656L10 17.657l-6.828-6.829a4 4 0 010-5.656z",
                title: "Make Impact",
                description: "Create lasting change in communities that need it most",
                gradient: "from-red-500 to-pink-500"
              },
              {
                icon: "M13 6a3 3 0 11-6 0 3 3 0 016 0zM18 8a2 2 0 11-4 0 2 2 0 014 0zM14 15a4 4 0 00-8 0v3h8v-3z",
                title: "Build Network",
                description: "Connect with like-minded individuals from around the world",
                gradient: "from-emerald-500 to-cyan-500"
              },
              {
                icon: "M10.394 2.08a1 1 0 00-.788 0l-7 3a1 1 0 000 1.84L5.25 8.051a.999.999 0 01.356-.257l4-1.714a1 1 0 11.788 1.838L7.667 9.088l1.94.831a1 1 0 00.787 0l7-3a1 1 0 000-1.838l-7-3z",
                title: "Develop Skills",
                description: "Gain valuable experience and develop new competencies",
                gradient: "from-purple-500 to-indigo-500"
              },
              {
                icon: "M11.3 1.046A1 1 0 0112 2v5h4a1 1 0 01.82 1.573l-7 10A1 1 0 018 18v-5H4a1 1 0 01-.82-1.573l7-10a1 1 0 011.12-.38z",
                title: "Personal Growth",
                description: "Experience personal fulfillment and broaden your perspective",
                gradient: "from-yellow-500 to-orange-500"
              }
            ].map((benefit, index) => (
              <div key={index} className="text-center group">
                <div className={`w-20 h-20 bg-gradient-to-br ${benefit.gradient} rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300 shadow-2xl`}>
                  <svg className="w-10 h-10 text-white" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d={benefit.icon} clipRule="evenodd"/>
                  </svg>
                </div>
                <h3 className="text-xl font-semibold text-white mb-4 group-hover:text-emerald-400 transition-colors">{benefit.title}</h3>
                <p className="text-slate-400 leading-relaxed">{benefit.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Volunteer Form */}
      <section className="py-20 bg-slate-900">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="glass rounded-3xl p-8 lg:p-12">
            <div className="text-center mb-12">
              <span className="inline-block px-4 py-2 bg-emerald-500/20 border border-emerald-500/30 rounded-full text-emerald-300 text-sm font-medium mb-6">
                Application Form
              </span>
              <h2 className="text-4xl font-bold text-white mb-6">
                Volunteer Application Form
              </h2>
              <p className="text-lg text-slate-400 max-w-2xl mx-auto">
                Fill out the form below to start your journey with us and make a difference in the world
              </p>
            </div>

            <form onSubmit={handleSubmit} className="space-y-8">
              {/* Personal Information */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label htmlFor="firstName" className="block text-sm font-medium text-slate-300 mb-3">
                    First Name *
                  </label>
                  <input
                    type="text"
                    id="firstName"
                    name="firstName"
                    required
                    value={formData.firstName}
                    onChange={handleInputChange}
                    className="w-full px-4 py-4 bg-slate-800 border border-slate-600 rounded-xl text-slate-300 placeholder-slate-500 focus:outline-none focus:border-emerald-500 focus:ring-2 focus:ring-emerald-500/20 transition-all duration-300"
                    placeholder="Enter your first name"
                  />
                </div>
                
                <div>
                  <label htmlFor="lastName" className="block text-sm font-medium text-slate-300 mb-3">
                    Last Name *
                  </label>
                  <input
                    type="text"
                    id="lastName"
                    name="lastName"
                    required
                    value={formData.lastName}
                    onChange={handleInputChange}
                    className="w-full px-4 py-4 bg-slate-800 border border-slate-600 rounded-xl text-slate-300 placeholder-slate-500 focus:outline-none focus:border-emerald-500 focus:ring-2 focus:ring-emerald-500/20 transition-all duration-300"
                    placeholder="Enter your last name"
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-slate-300 mb-3">
                    Email Address *
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    required
                    value={formData.email}
                    onChange={handleInputChange}
                    className="w-full px-4 py-4 bg-slate-800 border border-slate-600 rounded-xl text-slate-300 placeholder-slate-500 focus:outline-none focus:border-emerald-500 focus:ring-2 focus:ring-emerald-500/20 transition-all duration-300"
                    placeholder="your.email@example.com"
                  />
                </div>
                
                <div>
                  <label htmlFor="phone" className="block text-sm font-medium text-slate-300 mb-3">
                    Phone Number *
                  </label>
                  <input
                    type="tel"
                    id="phone"
                    name="phone"
                    required
                    value={formData.phone}
                    onChange={handleInputChange}
                    className="w-full px-4 py-4 bg-slate-800 border border-slate-600 rounded-xl text-slate-300 placeholder-slate-500 focus:outline-none focus:border-emerald-500 focus:ring-2 focus:ring-emerald-500/20 transition-all duration-300"
                    placeholder="+1 (555) 123-4567"
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label htmlFor="age" className="block text-sm font-medium text-slate-300 mb-3">
                    Age *
                  </label>
                  <input
                    type="number"
                    id="age"
                    name="age"
                    required
                    min="16"
                    max="100"
                    value={formData.age}
                    onChange={handleInputChange}
                    className="w-full px-4 py-4 bg-slate-800 border border-slate-600 rounded-xl text-slate-300 placeholder-slate-500 focus:outline-none focus:border-emerald-500 focus:ring-2 focus:ring-emerald-500/20 transition-all duration-300"
                    placeholder="25"
                  />
                </div>
                
                <div>
                  <label htmlFor="location" className="block text-sm font-medium text-slate-300 mb-3">
                    Location (City, Country) *
                  </label>
                  <input
                    type="text"
                    id="location"
                    name="location"
                    required
                    value={formData.location}
                    onChange={handleInputChange}
                    className="w-full px-4 py-4 bg-slate-800 border border-slate-600 rounded-xl text-slate-300 placeholder-slate-500 focus:outline-none focus:border-emerald-500 focus:ring-2 focus:ring-emerald-500/20 transition-all duration-300"
                    placeholder="New York, USA"
                  />
                </div>
              </div>

              {/* Areas of Interest */}
              <div>
                <label className="block text-sm font-medium text-slate-300 mb-6">
                  Areas of Interest * (Select all that apply)
                </label>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  {interestOptions.map((interest) => (
                    <label key={interest} className="flex items-center p-4 bg-slate-800 rounded-xl border border-slate-600 hover:border-emerald-500 transition-all duration-300 cursor-pointer group">
                      <input
                        type="checkbox"
                        checked={formData.interests.includes(interest)}
                        onChange={() => handleInterestChange(interest)}
                        className="h-5 w-5 text-emerald-500 bg-slate-700 border-slate-500 rounded focus:ring-emerald-500 focus:ring-2"
                      />
                      <span className="ml-3 text-slate-300 group-hover:text-emerald-400 transition-colors">{interest}</span>
                    </label>
                  ))}
                </div>
              </div>

              {/* Availability */}
              <div>
                <label htmlFor="availability" className="block text-sm font-medium text-slate-300 mb-3">
                  Availability *
                </label>
                <select
                  id="availability"
                  name="availability"
                  required
                  value={formData.availability}
                  onChange={handleInputChange}
                  className="w-full px-4 py-4 bg-slate-800 border border-slate-600 rounded-xl text-slate-300 focus:outline-none focus:border-emerald-500 focus:ring-2 focus:ring-emerald-500/20 transition-all duration-300"
                >
                  <option value="">Select your availability</option>
                  <option value="weekends">Weekends only</option>
                  <option value="weekdays">Weekdays only</option>
                  <option value="flexible">Flexible schedule</option>
                  <option value="full-time">Full-time commitment</option>
                  <option value="seasonal">Seasonal availability</option>
                </select>
              </div>

              {/* Experience */}
              <div>
                <label htmlFor="experience" className="block text-sm font-medium text-slate-300 mb-3">
                  Previous Volunteer Experience
                </label>
                <textarea
                  id="experience"
                  name="experience"
                  rows={4}
                  value={formData.experience}
                  onChange={handleInputChange}
                  className="w-full px-4 py-4 bg-slate-800 border border-slate-600 rounded-xl text-slate-300 placeholder-slate-500 focus:outline-none focus:border-emerald-500 focus:ring-2 focus:ring-emerald-500/20 transition-all duration-300 resize-none"
                  placeholder="Tell us about any previous volunteer work or relevant experience..."
                />
              </div>

              {/* Skills */}
              <div>
                <label htmlFor="skills" className="block text-sm font-medium text-slate-300 mb-3">
                  Special Skills or Qualifications
                </label>
                <textarea
                  id="skills"
                  name="skills"
                  rows={3}
                  value={formData.skills}
                  onChange={handleInputChange}
                  className="w-full px-4 py-4 bg-slate-800 border border-slate-600 rounded-xl text-slate-300 placeholder-slate-500 focus:outline-none focus:border-emerald-500 focus:ring-2 focus:ring-emerald-500/20 transition-all duration-300 resize-none"
                  placeholder="Languages spoken, technical skills, certifications, etc."
                />
              </div>

              {/* Motivation */}
              <div>
                <label htmlFor="motivation" className="block text-sm font-medium text-slate-300 mb-3">
                  Why do you want to volunteer with us? *
                </label>
                <textarea
                  id="motivation"
                  name="motivation"
                  required
                  rows={4}
                  value={formData.motivation}
                  onChange={handleInputChange}
                  className="w-full px-4 py-4 bg-slate-800 border border-slate-600 rounded-xl text-slate-300 placeholder-slate-500 focus:outline-none focus:border-emerald-500 focus:ring-2 focus:ring-emerald-500/20 transition-all duration-300 resize-none"
                  placeholder="Share your motivation and what you hope to achieve through volunteering..."
                />
              </div>

              {/* Emergency Contact */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label htmlFor="emergencyContact" className="block text-sm font-medium text-slate-300 mb-3">
                    Emergency Contact Name *
                  </label>
                  <input
                    type="text"
                    id="emergencyContact"
                    name="emergencyContact"
                    required
                    value={formData.emergencyContact}
                    onChange={handleInputChange}
                    className="w-full px-4 py-4 bg-slate-800 border border-slate-600 rounded-xl text-slate-300 placeholder-slate-500 focus:outline-none focus:border-emerald-500 focus:ring-2 focus:ring-emerald-500/20 transition-all duration-300"
                    placeholder="Emergency contact full name"
                  />
                </div>
                
                <div>
                  <label htmlFor="emergencyPhone" className="block text-sm font-medium text-slate-300 mb-3">
                    Emergency Contact Phone *
                  </label>
                  <input
                    type="tel"
                    id="emergencyPhone"
                    name="emergencyPhone"
                    required
                    value={formData.emergencyPhone}
                    onChange={handleInputChange}
                    className="w-full px-4 py-4 bg-slate-800 border border-slate-600 rounded-xl text-slate-300 placeholder-slate-500 focus:outline-none focus:border-emerald-500 focus:ring-2 focus:ring-emerald-500/20 transition-all duration-300"
                    placeholder="+1 (555) 123-4567"
                  />
                </div>
              </div>

              {/* Submit Button */}
              <div className="text-center pt-8">
                <button
                  type="submit"
                  className="bg-gradient-to-r from-emerald-500 to-cyan-500 text-white px-12 py-5 rounded-full font-bold text-lg hover:from-emerald-600 hover:to-cyan-600 transition-all duration-300 transform hover:scale-105 shadow-2xl hover:shadow-emerald-500/25 pulse-glow"
                >
                  Submit Application
                </button>
              </div>
            </form>
          </div>
        </div>
      </section>
    </div>
  );
}
