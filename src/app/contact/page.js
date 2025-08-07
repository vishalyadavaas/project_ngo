'use client';

import { useState } from 'react';

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });

  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Contact form submitted:', formData);
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
          <h2 className="text-3xl font-bold text-white mb-6">Message Sent!</h2>
          <p className="text-slate-400 mb-8 leading-relaxed">
            Thank you for reaching out to us. We'll get back to you within 24 hours.
          </p>
          <button
            onClick={() => setIsSubmitted(false)}
            className="bg-gradient-to-r from-emerald-500 to-cyan-500 text-white px-8 py-4 rounded-full hover:from-emerald-600 hover:to-cyan-600 transition-all duration-300 transform hover:scale-105 font-semibold"
          >
            Send Another Message
          </button>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-slate-900">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-slate-900 via-purple-900 to-pink-900 text-white py-20 lg:py-32 relative overflow-hidden">
        <div className="absolute inset-0">
          <div className="absolute top-1/4 right-1/4 w-96 h-96 bg-purple-500/20 rounded-full blur-3xl float-animation"></div>
          <div className="absolute bottom-1/4 left-1/4 w-64 h-64 bg-pink-500/20 rounded-full blur-3xl float-animation" style={{animationDelay: '2s'}}></div>
        </div>
        
        <div className="relative max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <span className="inline-block px-4 py-2 bg-purple-500/20 border border-purple-500/30 rounded-full text-purple-300 text-sm font-medium mb-6">
            📞 Contact Us
          </span>
          <h1 className="text-4xl md:text-7xl font-bold mb-8">
            Get in <span className="bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">Touch</span>
          </h1>
          <p className="text-xl md:text-2xl text-slate-300 max-w-3xl mx-auto">
            We'd love to hear from you. Send us a message and we'll respond as soon as possible.
          </p>
        </div>
      </section>

      {/* Contact Information & Form */}
      <section className="py-20 lg:py-32 bg-slate-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
            {/* Contact Information */}
            <div>
              <span className="inline-block px-4 py-2 bg-emerald-500/20 border border-emerald-500/30 rounded-full text-emerald-300 text-sm font-medium mb-8">
                Contact Information
              </span>
              <h2 className="text-4xl font-bold text-white mb-12">Let's Connect</h2>
              
              <div className="space-y-8">
                {[
                  {
                    icon: "M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z",
                    title: "मुख्यालय पता (Head Office)",
                    content: ["Plot No. 45, Sector 12", "Dwarka, New Delhi - 110075", "भारत (India)"],
                    gradient: "from-blue-500 to-cyan-400"
                  },
                  {
                    icon: "M2 3a1 1 0 011-1h2.153a1 1 0 01.986.836l.74 4.435a1 1 0 01-.54 1.06l-1.548.773a11.037 11.037 0 006.105 6.105l.774-1.548a1 1 0 011.059-.54l4.435.74a1 1 0 01.836.986V17a1 1 0 01-1 1h-2C7.82 18 2 12.18 2 5V3z",
                    title: "संपर्क नंबर (Contact Numbers)",
                    content: ["मुख्य कार्यालय: +91 98765 43210", "आपातकाल: +91 98765 43211", "टोल फ्री: 1800-123-4567"],
                    gradient: "from-emerald-500 to-green-400"
                  },
                  {
                    icon: "M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z",
                    title: "ईमेल पता (Email Address)",
                    content: ["सामान्य: info@sevaforall.org", "स्वयंसेवक: volunteer@sevaforall.org", "मीडिया: media@sevaforall.org"],
                    gradient: "from-purple-500 to-pink-400"
                  },
                  {
                    icon: "M10 18a8 8 0 100-16 8 8 0 000 16zm1-12a1 1 0 10-2 0v4a1 1 0 00.293.707l2.828 2.829a1 1 0 101.415-1.415L11 9.586V6z",
                    title: "कार्यालय समय (Office Hours)",
                    content: ["सोमवार - शुक्रवार: सुबह 9:00 - शाम 6:00", "शनिवार: सुबह 10:00 - दोपहर 4:00", "रविवार: बंद (Closed)"],
                    gradient: "from-orange-500 to-yellow-400"
                  }
                ].map((contact, index) => (
                  <div key={index} className="flex items-start group">
                    <div className={`w-16 h-16 bg-gradient-to-br ${contact.gradient} rounded-2xl flex items-center justify-center mr-6 flex-shrink-0 group-hover:scale-110 transition-transform duration-300`}>
                      <svg className="w-8 h-8 text-white" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d={contact.icon} clipRule="evenodd" />
                      </svg>
                    </div>
                    <div>
                      <h3 className="text-xl font-semibold text-white mb-4 group-hover:text-emerald-400 transition-colors">{contact.title}</h3>
                      <div className="space-y-1">
                        {contact.content.map((line, idx) => (
                          <p key={idx} className="text-slate-400 leading-relaxed">{line}</p>
                        ))}
                      </div>
                    </div>
                  </div>
                ))}
              </div>

              {/* Social Media */}
              <div className="mt-12 pt-8 border-t border-slate-700">
                <h3 className="text-xl font-semibold text-white mb-6">Follow Us</h3>
                <div className="flex space-x-4">
                  {[
                    { name: "Facebook", gradient: "from-blue-600 to-blue-700" },
                    { name: "Twitter", gradient: "from-blue-400 to-blue-500" },
                    { name: "Instagram", gradient: "from-pink-500 to-rose-500" },
                    { name: "LinkedIn", gradient: "from-blue-700 to-blue-800" }
                  ].map((social, index) => (
                    <a
                      key={index}
                      href="#"
                      className={`w-14 h-14 bg-gradient-to-br ${social.gradient} rounded-2xl flex items-center justify-center text-white hover:scale-110 transition-all duration-300 shadow-lg hover:shadow-xl`}
                    >
                      <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M20 10c0-5.523-4.477-10-10-10S0 4.477 0 10c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V10h2.54V7.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V10h2.773l-.443 2.89h-2.33v6.988C16.343 19.128 20 14.991 20 10z" clipRule="evenodd" />
                      </svg>
                    </a>
                  ))}
                </div>
              </div>
            </div>

            {/* Contact Form */}
            <div className="glass rounded-3xl p-8 lg:p-12">
              <span className="inline-block px-4 py-2 bg-purple-500/20 border border-purple-500/30 rounded-full text-purple-300 text-sm font-medium mb-6">
                Send Message
              </span>
              <h2 className="text-3xl font-bold text-white mb-8">Send us a Message</h2>
              
              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-slate-300 mb-3">
                    Full Name *
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    required
                    value={formData.name}
                    onChange={handleInputChange}
                    className="w-full px-4 py-4 bg-slate-800 border border-slate-600 rounded-xl text-slate-300 placeholder-slate-500 focus:outline-none focus:border-purple-500 focus:ring-2 focus:ring-purple-500/20 transition-all duration-300"
                    placeholder="Your full name"
                  />
                </div>

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
                    className="w-full px-4 py-4 bg-slate-800 border border-slate-600 rounded-xl text-slate-300 placeholder-slate-500 focus:outline-none focus:border-purple-500 focus:ring-2 focus:ring-purple-500/20 transition-all duration-300"
                    placeholder="your.email@example.com"
                  />
                </div>

                <div>
                  <label htmlFor="subject" className="block text-sm font-medium text-slate-300 mb-3">
                    Subject *
                  </label>
                  <input
                    type="text"
                    id="subject"
                    name="subject"
                    required
                    value={formData.subject}
                    onChange={handleInputChange}
                    className="w-full px-4 py-4 bg-slate-800 border border-slate-600 rounded-xl text-slate-300 placeholder-slate-500 focus:outline-none focus:border-purple-500 focus:ring-2 focus:ring-purple-500/20 transition-all duration-300"
                    placeholder="What is this about?"
                  />
                </div>

                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-slate-300 mb-3">
                    Message *
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    required
                    rows={6}
                    value={formData.message}
                    onChange={handleInputChange}
                    className="w-full px-4 py-4 bg-slate-800 border border-slate-600 rounded-xl text-slate-300 placeholder-slate-500 focus:outline-none focus:border-purple-500 focus:ring-2 focus:ring-purple-500/20 transition-all duration-300 resize-none"
                    placeholder="Your message..."
                  />
                </div>

                <div className="pt-4">
                  <button
                    type="submit"
                    className="w-full bg-gradient-to-r from-purple-500 to-pink-500 text-white py-5 px-8 rounded-xl font-bold text-lg hover:from-purple-600 hover:to-pink-600 transition-all duration-300 transform hover:scale-105 shadow-2xl hover:shadow-purple-500/25"
                  >
                    Send Message
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </section>

      {/* Map Section */}
      <section className="py-20 bg-slate-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <span className="inline-block px-4 py-2 bg-emerald-500/20 border border-emerald-500/30 rounded-full text-emerald-300 text-sm font-medium mb-6">
              Find Us
            </span>
            <h2 className="text-4xl font-bold text-white mb-6">Visit Our Office</h2>
            <p className="text-xl text-slate-400">
              Come see us in person or schedule a virtual meeting
            </p>
          </div>
          
          <div className="glass rounded-3xl p-2 h-96">
            <div className="w-full h-full bg-gradient-to-br from-slate-700 to-slate-800 rounded-2xl flex items-center justify-center">
              <div className="text-center">
                <div className="w-24 h-24 bg-gradient-to-br from-emerald-400 to-cyan-400 rounded-full flex items-center justify-center mx-auto mb-6">
                  <svg className="w-12 h-12 text-slate-900" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z" clipRule="evenodd" />
                  </svg>
                </div>
                <h3 className="text-2xl font-bold text-white mb-4">Interactive Map Coming Soon</h3>
                <p className="text-slate-400">
                  We're working on integrating an interactive map to help you find us easily.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
