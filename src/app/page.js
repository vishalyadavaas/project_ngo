import Link from 'next/link';

export default function HomePage() {
  return (
    <div className="min-h-screen bg-slate-900">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-slate-900 via-slate-800 to-emerald-900 text-white py-20 lg:py-32 overflow-hidden">
        {/* Animated background elements */}
        <div className="absolute inset-0">
          <div className="absolute top-1/4 left-1/4 w-64 h-64 bg-emerald-500/20 rounded-full blur-3xl float-animation"></div>
          <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-cyan-500/20 rounded-full blur-3xl float-animation" style={{animationDelay: '1s'}}></div>
        </div>
        
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            {/* Content */}
            <div className="text-center lg:text-left">
              <div className="mb-8">
                <span className="inline-block px-4 py-2 bg-emerald-500/20 border border-emerald-500/30 rounded-full text-emerald-300 text-sm font-medium mb-6">
                  🇮🇳 सेवा परमो धर्मः - Serving Bharat Since 2015
                </span>
              </div>
              
              <h1 className="text-4xl md:text-6xl font-bold mb-8 leading-tight">
                सेवा से समाज का 
                <span className="block bg-gradient-to-r from-emerald-400 via-cyan-400 to-orange-400 bg-clip-text text-transparent">
                  कल्याण
                </span>
              </h1>
              
              <p className="text-xl md:text-2xl mb-12 max-w-4xl mx-auto lg:mx-0 leading-relaxed text-slate-300">
                Join us in transforming lives across Bharat through शिक्षा (education), स्वास्थ्य (healthcare), 
                and sustainable development. Together, we create a prosperous India.
              </p>
              
              <div className="flex flex-col sm:flex-row gap-6 justify-center lg:justify-start items-center">
                <Link 
                  href="/volunteer" 
                  className="group bg-gradient-to-r from-emerald-500 to-cyan-500 text-white px-10 py-5 rounded-full font-semibold text-lg hover:from-emerald-600 hover:to-cyan-600 transition-all duration-300 transform hover:scale-105 shadow-2xl hover:shadow-emerald-500/25 pulse-glow"
                >
                  <span className="flex items-center">
                    Become a Volunteer
                    <svg className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z" clipRule="evenodd" />
                    </svg>
                  </span>
                </Link>
                
                <Link 
                  href="/about" 
                  className="group border-2 border-emerald-400 text-emerald-400 px-10 py-5 rounded-full font-semibold text-lg hover:bg-emerald-400 hover:text-slate-900 transition-all duration-300 backdrop-blur-sm"
                >
                  <span className="flex items-center">
                    Learn More
                    <svg className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7-4a1 1 0 11-2 0 1 1 0 012 0zM9 9a1 1 0 000 2v3a1 1 0 001 1h1a1 1 0 100-2v-3a1 1 0 00-1-1H9z" clipRule="evenodd" />
                    </svg>
                  </span>
                </Link>
              </div>
            </div>
            
            {/* Hero Image */}
            <div className="relative">
              <div className="glass rounded-3xl p-4 backdrop-blur-lg">
                <div className="aspect-[4/3] rounded-2xl overflow-hidden bg-gradient-to-br from-emerald-500/20 to-cyan-500/20 flex items-center justify-center">
                  <div className="text-center p-8">
                    <div className="w-32 h-32 bg-gradient-to-br from-emerald-400 to-cyan-400 rounded-full flex items-center justify-center mx-auto mb-6 float-animation">
                      <svg className="w-16 h-16 text-slate-900" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M3.172 5.172a4 4 0 015.656 0L10 6.343l1.172-1.171a4 4 0 115.656 5.656L10 17.657l-6.828-6.829a4 4 0 010-5.656z" clipRule="evenodd"/>
                      </svg>
                    </div>
                    <p className="text-slate-300 text-lg font-medium">
                      🇮🇳 Unity in Diversity<br/>
                      <span className="text-emerald-400">वसुधैव कुटुम्बकम्</span>
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Mission Section */}
      <section className="py-20 lg:py-32 bg-slate-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-20">
            <span className="inline-block px-4 py-2 bg-emerald-500/20 border border-emerald-500/30 rounded-full text-emerald-300 text-sm font-medium mb-6">
              हमारे कार्यक्षेत्र (Our Impact Areas)
            </span>
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
              समुदायों का रूपांतरण
            </h2>
            <p className="text-xl text-slate-400 max-w-3xl mx-auto">
              Empowering communities across Bharat through sustainable initiatives that create lasting positive change
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Education */}
            <div className="group glass rounded-2xl p-8 text-center hover-lift">
              <div className="w-20 h-20 bg-gradient-to-br from-blue-500 to-cyan-400 rounded-2xl flex items-center justify-center mx-auto mb-8 group-hover:scale-110 transition-transform duration-300">
                <svg className="w-10 h-10 text-white" fill="currentColor" viewBox="0 0 20 20">
                  <path d="M10.394 2.08a1 1 0 00-.788 0l-7 3a1 1 0 000 1.84L5.25 8.051a.999.999 0 01.356-.257l4-1.714a1 1 0 11.788 1.838L7.667 9.088l1.94.831a1 1 0 00.787 0l7-3a1 1 0 000-1.838l-7-3z"/>
                </svg>
              </div>
              <h3 className="text-2xl font-bold text-white mb-6 group-hover:text-cyan-400 transition-colors">शिक्षा (Education)</h3>
              <p className="text-slate-400 leading-relaxed mb-6">
                Providing quality education and learning opportunities to underserved communities across Bharat, 
                ensuring no child is left behind in their journey to success. सर्वे भवन्तु सुखिनः।
              </p>
              <div className="text-cyan-400 font-semibold">25,000+ छात्र प्रभावित (Students Impacted)</div>
            </div>

            {/* Healthcare */}
            <div className="group glass rounded-2xl p-8 text-center hover-lift">
              <div className="w-20 h-20 bg-gradient-to-br from-emerald-500 to-green-400 rounded-2xl flex items-center justify-center mx-auto mb-8 group-hover:scale-110 transition-transform duration-300">
                <svg className="w-10 h-10 text-white" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M3 4a1 1 0 011-1h12a1 1 0 011 1v2a1 1 0 01-1 1H4a1 1 0 01-1-1V4zm12 4a1 1 0 01-1 1H6a1 1 0 01-1-1V7h10v1z" clipRule="evenodd"/>
                  <path d="M4 10a1 1 0 00-1 1v5a1 1 0 001 1h12a1 1 0 001-1v-5a1 1 0 00-1-1H4zm6 2a1 1 0 011 1v2a1 1 0 01-2 0v-2a1 1 0 011-1z"/>
                </svg>
              </div>
              <h3 className="text-2xl font-bold text-white mb-6 group-hover:text-emerald-400 transition-colors">स्वास्थ्य (Healthcare)</h3>
              <p className="text-slate-400 leading-relaxed mb-6">
                Delivering essential healthcare services and wellness programs to rural and urban communities, 
                promoting healthy living and preventive care for all. आरोग्यं भास्करादिच्छेत्।
              </p>
              <div className="text-emerald-400 font-semibold">15,000+ रोगी सेवा (Patients Served)</div>
            </div>

            {/* Sustainable Development */}
            <div className="group glass rounded-2xl p-8 text-center hover-lift">
              <div className="w-20 h-20 bg-gradient-to-br from-orange-500 to-red-400 rounded-2xl flex items-center justify-center mx-auto mb-8 group-hover:scale-110 transition-transform duration-300">
                <svg className="w-10 h-10 text-white" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 6a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 14a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z" clipRule="evenodd"/>
                </svg>
              </div>
              <h3 className="text-2xl font-bold text-white mb-6 group-hover:text-orange-400 transition-colors">सतत विकास (Sustainable Development)</h3>
              <p className="text-slate-400 leading-relaxed mb-6">
                Creating sustainable livelihoods and environmental initiatives that protect our planet 
                while empowering communities. पृथ्वी माता हमारी जननी।
              </p>
              <div className="text-orange-400 font-semibold">50+ समुदाय सशक्त (Communities Empowered)</div>
            </div>
          </div>
        </div>
      </section>

      {/* Statistics Section */}
      <section className="py-20 lg:py-32 bg-slate-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <span className="inline-block px-4 py-2 bg-emerald-500/20 border border-emerald-500/30 rounded-full text-emerald-300 text-sm font-medium mb-6">
              हमारा प्रभाव (Our Impact)
            </span>
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
              Numbers That Matter
            </h2>
          </div>
          
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {[
              { number: "1M+", label: "जीवन बदले गए", subLabel: "Lives Transformed" },
              { number: "500+", label: "गांव सेवित", subLabel: "Villages Served" },
              { number: "1000+", label: "स्वयंसेवक", subLabel: "Active Volunteers" },
              { number: "25+", label: "राज्य", subLabel: "States Covered" }
            ].map((stat, index) => (
              <div key={index} className="text-center glass rounded-2xl p-6 hover-lift">
                <div className="text-4xl md:text-5xl font-bold text-emerald-400 mb-4 pulse-glow">
                  {stat.number}
                </div>
                <div className="text-white font-semibold mb-2">{stat.label}</div>
                <div className="text-slate-400 text-sm">{stat.subLabel}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 lg:py-32 bg-gradient-to-br from-emerald-900 via-slate-900 to-cyan-900">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl md:text-6xl font-bold text-white mb-8">
            Ready to Make a <span className="bg-gradient-to-r from-emerald-400 to-cyan-400 bg-clip-text text-transparent">Difference?</span>
          </h2>
          <p className="text-xl md:text-2xl text-slate-300 mb-12 max-w-3xl mx-auto">
            Join thousands of volunteers across Bharat who are creating positive change in their communities. 
            Your contribution, no matter how small, can transform lives.
          </p>
          <div className="flex flex-col sm:flex-row gap-6 justify-center items-center">
            <Link 
              href="/volunteer" 
              className="bg-gradient-to-r from-emerald-500 to-cyan-500 text-white px-12 py-6 rounded-full font-bold text-xl hover:from-emerald-600 hover:to-cyan-600 transition-all duration-300 transform hover:scale-105 shadow-2xl hover:shadow-emerald-500/25"
            >
              स्वयंसेवक बनें (Become a Volunteer)
            </Link>
            <Link 
              href="/contact" 
              className="border-2 border-emerald-400 text-emerald-400 px-12 py-6 rounded-full font-bold text-xl hover:bg-emerald-400 hover:text-slate-900 transition-all duration-300"
            >
              संपर्क करें (Contact Us)
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
