export default function AboutPage() {
  return (
    <div className="min-h-screen bg-slate-900">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-slate-900 via-emerald-900 to-cyan-900 text-white py-20 lg:py-32 relative overflow-hidden">
        <div className="absolute inset-0">
          <div className="absolute top-1/4 right-1/4 w-96 h-96 bg-emerald-500/20 rounded-full blur-3xl float-animation"></div>
          <div className="absolute bottom-1/4 left-1/4 w-64 h-64 bg-cyan-500/20 rounded-full blur-3xl float-animation" style={{animationDelay: '2s'}}></div>
        </div>
        
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <span className="inline-block px-4 py-2 bg-emerald-500/20 border border-emerald-500/30 rounded-full text-emerald-300 text-sm font-medium mb-6">
            🌟 Our Story
          </span>
          <h1 className="text-4xl md:text-7xl font-bold mb-8">
            About <span className="bg-gradient-to-r from-emerald-400 to-cyan-400 bg-clip-text text-transparent">HopeForAll</span>
          </h1>
          <p className="text-xl md:text-2xl max-w-4xl mx-auto text-slate-300">
            Learn about our journey, mission, and the passionate team working to create positive change worldwide.
          </p>
        </div>
      </section>

      {/* Our Story */}
      <section className="py-20 lg:py-32 bg-slate-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div>
              <span className="inline-block px-4 py-2 bg-emerald-500/20 border border-emerald-500/30 rounded-full text-emerald-300 text-sm font-medium mb-6">
                Since 2015
              </span>
              <h2 className="text-4xl md:text-5xl font-bold text-white mb-8">
                Our Journey
              </h2>
              <div className="space-y-6 text-lg text-slate-400 leading-relaxed">
                <p>
                  Founded in 2015, HopeForAll NGO began with a simple vision: to create lasting positive change 
                  in communities around the world. What started as a small group of passionate volunteers has 
                  grown into a global movement dedicated to addressing some of humanity&apos;s most pressing challenges.
                </p>
                <p>
                  Our journey began when our founder, inspired by witnessing the resilience of communities facing 
                  adversity, decided to channel compassion into action. Today, we work across 25 countries, 
                  touching the lives of over 50,000 individuals through our comprehensive programs.
                </p>
                <p>
                  We believe that sustainable change comes from empowering communities from within, providing 
                  the tools, education, and support needed for long-term growth and self-sufficiency.
                </p>
              </div>
            </div>
            
            <div className="glass rounded-3xl p-8 lg:p-12">
              <div className="grid grid-cols-2 gap-8">
                <div className="text-center">
                  <div className="w-20 h-20 bg-gradient-to-br from-blue-500 to-cyan-400 rounded-2xl flex items-center justify-center mx-auto mb-4">
                    <span className="text-3xl font-bold text-white">2015</span>
                  </div>
                  <div className="text-slate-400 font-medium">Founded</div>
                </div>
                <div className="text-center">
                  <div className="w-20 h-20 bg-gradient-to-br from-emerald-500 to-green-400 rounded-2xl flex items-center justify-center mx-auto mb-4">
                    <span className="text-2xl font-bold text-white">50K+</span>
                  </div>
                  <div className="text-slate-400 font-medium">Lives Impacted</div>
                </div>
                <div className="text-center">
                  <div className="w-20 h-20 bg-gradient-to-br from-purple-500 to-pink-400 rounded-2xl flex items-center justify-center mx-auto mb-4">
                    <span className="text-3xl font-bold text-white">25</span>
                  </div>
                  <div className="text-slate-400 font-medium">Countries</div>
                </div>
                <div className="text-center">
                  <div className="w-20 h-20 bg-gradient-to-br from-orange-500 to-yellow-400 rounded-2xl flex items-center justify-center mx-auto mb-4">
                    <span className="text-xl font-bold text-white">1.2K+</span>
                  </div>
                  <div className="text-slate-400 font-medium">Volunteers</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Mission, Vision, Values */}
      <section className="py-20 lg:py-32 bg-slate-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-20">
            <span className="inline-block px-4 py-2 bg-emerald-500/20 border border-emerald-500/30 rounded-full text-emerald-300 text-sm font-medium mb-6">
              Our Foundation
            </span>
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
              Guiding Principles
            </h2>
            <p className="text-xl text-slate-400 max-w-3xl mx-auto">
              The core values and beliefs that drive everything we do
            </p>
          </div>
          
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {/* Mission */}
            <div className="glass rounded-3xl p-8 hover-lift group">
              <div className="w-16 h-16 bg-gradient-to-br from-blue-500 to-cyan-400 rounded-2xl flex items-center justify-center mb-8 group-hover:scale-110 transition-transform duration-300">
                <svg className="w-8 h-8 text-white" fill="currentColor" viewBox="0 0 20 20">
                  <path d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"/>
                </svg>
              </div>
              <h3 className="text-2xl font-bold text-white mb-6 group-hover:text-cyan-400 transition-colors">Mission</h3>
              <p className="text-slate-400 leading-relaxed">
                To empower underserved communities worldwide through sustainable education, healthcare, 
                and development programs that create lasting positive change and foster self-sufficiency.
              </p>
            </div>

            {/* Vision */}
            <div className="glass rounded-3xl p-8 hover-lift group">
              <div className="w-16 h-16 bg-gradient-to-br from-emerald-500 to-green-400 rounded-2xl flex items-center justify-center mb-8 group-hover:scale-110 transition-transform duration-300">
                <svg className="w-8 h-8 text-white" fill="currentColor" viewBox="0 0 20 20">
                  <path d="M10 12a2 2 0 100-4 2 2 0 000 4z"/>
                  <path fillRule="evenodd" d="M.458 10C1.732 5.943 5.522 3 10 3s8.268 2.943 9.542 7c-1.274 4.057-5.064 7-9.542 7S1.732 14.057.458 10zM14 10a4 4 0 11-8 0 4 4 0 018 0z" clipRule="evenodd"/>
                </svg>
              </div>
              <h3 className="text-2xl font-bold text-white mb-6 group-hover:text-emerald-400 transition-colors">Vision</h3>
              <p className="text-slate-400 leading-relaxed">
                A world where every individual has access to quality education, healthcare, and opportunities 
                to thrive, regardless of their geographical location or socioeconomic background.
              </p>
            </div>

            {/* Values */}
            <div className="glass rounded-3xl p-8 hover-lift group">
              <div className="w-16 h-16 bg-gradient-to-br from-purple-500 to-pink-400 rounded-2xl flex items-center justify-center mb-8 group-hover:scale-110 transition-transform duration-300">
                <svg className="w-8 h-8 text-white" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M3.172 5.172a4 4 0 015.656 0L10 6.343l1.172-1.171a4 4 0 115.656 5.656L10 17.657l-6.828-6.829a4 4 0 010-5.656z" clipRule="evenodd"/>
                </svg>
              </div>
              <h3 className="text-2xl font-bold text-white mb-6 group-hover:text-pink-400 transition-colors">Values</h3>
              <div className="text-slate-400 space-y-3">
                <div className="flex items-center">
                  <div className="w-2 h-2 bg-emerald-400 rounded-full mr-3"></div>
                  <span><strong className="text-white">Compassion:</strong> Acting with empathy and care</span>
                </div>
                <div className="flex items-center">
                  <div className="w-2 h-2 bg-cyan-400 rounded-full mr-3"></div>
                  <span><strong className="text-white">Integrity:</strong> Maintaining transparency and honesty</span>
                </div>
                <div className="flex items-center">
                  <div className="w-2 h-2 bg-purple-400 rounded-full mr-3"></div>
                  <span><strong className="text-white">Sustainability:</strong> Creating long-term solutions</span>
                </div>
                <div className="flex items-center">
                  <div className="w-2 h-2 bg-pink-400 rounded-full mr-3"></div>
                  <span><strong className="text-white">Collaboration:</strong> Working together for greater impact</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="py-20 lg:py-32 bg-slate-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-20">
            <span className="inline-block px-4 py-2 bg-emerald-500/20 border border-emerald-500/30 rounded-full text-emerald-300 text-sm font-medium mb-6">
              Leadership Team
            </span>
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
              Meet Our Team
            </h2>
            <p className="text-xl text-slate-400 max-w-3xl mx-auto">
              Passionate individuals dedicated to making a difference in the world
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Team Member 1 */}
            <div className="glass rounded-3xl overflow-hidden hover-lift group">
              <div className="h-64 bg-gradient-to-br from-blue-500 via-purple-500 to-pink-500 relative">
                <div className="absolute inset-0 bg-black/20"></div>
                <div className="absolute bottom-4 left-4 right-4">
                  <div className="w-16 h-16 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center text-white font-bold text-xl mb-3">
                    SJ
                  </div>
                </div>
              </div>
              <div className="p-8">
                <h3 className="text-xl font-bold text-white mb-2">Sarah Johnson</h3>
                <p className="text-emerald-400 font-semibold mb-4">Executive Director</p>
                <p className="text-slate-400 text-sm leading-relaxed">
                  With over 15 years in international development, Sarah leads our global initiatives 
                  with passion and strategic vision for sustainable change.
                </p>
              </div>
            </div>

            {/* Team Member 2 */}
            <div className="glass rounded-3xl overflow-hidden hover-lift group">
              <div className="h-64 bg-gradient-to-br from-emerald-500 via-cyan-500 to-blue-500 relative">
                <div className="absolute inset-0 bg-black/20"></div>
                <div className="absolute bottom-4 left-4 right-4">
                  <div className="w-16 h-16 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center text-white font-bold text-xl mb-3">
                    MC
                  </div>
                </div>
              </div>
              <div className="p-8">
                <h3 className="text-xl font-bold text-white mb-2">Dr. Michael Chen</h3>
                <p className="text-cyan-400 font-semibold mb-4">Healthcare Director</p>
                <p className="text-slate-400 text-sm leading-relaxed">
                  A dedicated physician who oversees our healthcare programs and ensures quality 
                  medical care reaches those who need it most around the globe.
                </p>
              </div>
            </div>

            {/* Team Member 3 */}
            <div className="glass rounded-3xl overflow-hidden hover-lift group">
              <div className="h-64 bg-gradient-to-br from-purple-500 via-pink-500 to-orange-500 relative">
                <div className="absolute inset-0 bg-black/20"></div>
                <div className="absolute bottom-4 left-4 right-4">
                  <div className="w-16 h-16 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center text-white font-bold text-xl mb-3">
                    ER
                  </div>
                </div>
              </div>
              <div className="p-8">
                <h3 className="text-xl font-bold text-white mb-2">Emily Rodriguez</h3>
                <p className="text-pink-400 font-semibold mb-4">Education Coordinator</p>
                <p className="text-slate-400 text-sm leading-relaxed">
                  Emily develops and implements our educational programs, ensuring quality learning 
                  opportunities for children in underserved communities worldwide.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-20 lg:py-32 bg-gradient-to-r from-emerald-600 via-cyan-600 to-blue-600 relative overflow-hidden">
        <div className="absolute inset-0">
          <div className="absolute top-0 right-0 w-96 h-96 bg-white/10 rounded-full blur-3xl"></div>
          <div className="absolute bottom-0 left-0 w-64 h-64 bg-yellow-400/20 rounded-full blur-3xl"></div>
        </div>
        
        <div className="relative max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl md:text-6xl font-bold mb-8 text-white">
            Join Our Mission
          </h2>
          <p className="text-xl md:text-2xl mb-12 text-white/90 max-w-3xl mx-auto">
            Be part of our story and help us write the next chapter of positive change in communities worldwide.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-6 justify-center">
            <a 
              href="/volunteer" 
              className="group bg-white text-blue-600 px-10 py-5 rounded-full font-bold text-lg hover:bg-slate-100 transition-all duration-300 transform hover:scale-105 shadow-2xl"
            >
              <span className="flex items-center justify-center">
                Become a Volunteer
                <svg className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z" clipRule="evenodd" />
                </svg>
              </span>
            </a>
            
            <button className="group border-2 border-white text-white px-10 py-5 rounded-full font-bold text-lg hover:bg-white hover:text-blue-600 transition-all duration-300 backdrop-blur-sm">
              <span className="flex items-center justify-center">
                Support Our Cause
                <svg className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M3.172 5.172a4 4 0 015.656 0L10 6.343l1.172-1.171a4 4 0 115.656 5.656L10 17.657l-6.828-6.829a4 4 0 010-5.656z" clipRule="evenodd"/>
                </svg>
              </span>
            </button>
          </div>
        </div>
      </section>
    </div>
  );
}
