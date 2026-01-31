import { Target, Users, Award, TrendingUp, Leaf } from "lucide-react";

export default function AboutUs() {
  return (
    <section id="features" className="py-16 sm:py-20 lg:py-24 px-4 sm:px-6 lg:px-8 bg-linear-to-b from-blue-600 to-blue-700">
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="text-center mb-12 sm:mb-16">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white mb-4">
            About <span className="text-yellow-400">GasConnect</span>
          </h2>
          <p className="text-white/90 text-base sm:text-lg lg:text-xl max-w-3xl mx-auto">
            We're on a mission to make renewable energy accessible to everyone. 
            GasConnect brings together communities, suppliers, and technology to create a sustainable future.
          </p>
        </div>

        {/* Main Content Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 mb-12 sm:mb-16">
          {/* Left Column - Image and Stats */}
          <div className="space-y-6">
            <div className="rounded-2xl overflow-hidden shadow-2xl">
              <img 
                src="/biogas-plant.jpg" 
                alt="Biogas production facility"
                className="w-full h-64 sm:h-80 lg:h-96 object-cover"
                onError={(e) => {
                  e.target.style.display = 'none';
                  e.target.nextSibling.style.display = 'flex';
                }}
              />
              <div 
                className="hidden w-full h-64 sm:h-80 lg:h-96 bg-linear-to-br from-yellow-400 to-yellow-600 items-center justify-center"
              >
                <div className="text-center">
                  <Leaf className="w-20 h-20 text-blue-900 mx-auto mb-4" />
                  <p className="text-blue-900 font-bold text-xl">Biogas Innovation</p>
                </div>
              </div>
            </div>

            {/* Stats Grid */}
            <div className="grid grid-cols-2 gap-4">
              <div className="bg-white/10 backdrop-blur-sm rounded-xl p-4 sm:p-6 text-center">
                <p className="text-3xl sm:text-4xl font-bold text-yellow-400 mb-1">500+</p>
                <p className="text-white/90 text-sm sm:text-base">Happy Customers</p>
              </div>
              <div className="bg-white/10 backdrop-blur-sm rounded-xl p-4 sm:p-6 text-center">
                <p className="text-3xl sm:text-4xl font-bold text-yellow-400 mb-1">50+</p>
                <p className="text-white/90 text-sm sm:text-base">Biogas Kits</p>
              </div>
            </div>
          </div>

          {/* Right Column - Mission and Values */}
          <div className="space-y-6">
            <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 sm:p-8">
              <div className="flex items-start gap-4 mb-4">
                <div className="bg-yellow-400 w-12 h-12 rounded-full flex items-center justify-center shrink-0">
                  <Target className="w-6 h-6 text-blue-900" />
                </div>
                <div>
                  <h3 className="text-xl sm:text-2xl font-bold text-white mb-2">Our Mission</h3>
                  <p className="text-white/90 text-sm sm:text-base">
                    To democratize access to clean energy by connecting communities with affordable, 
                    efficient biogas solutions that transform waste into valuable resources.
                  </p>
                </div>
              </div>
            </div>

            <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 sm:p-8">
              <div className="flex items-start gap-4 mb-4">
                <div className="bg-yellow-400 w-12 h-12 rounded-full flex items-center justify-center shrink-0">
                  <Users className="w-6 h-6 text-blue-900" />
                </div>
                <div>
                  <h3 className="text-xl sm:text-2xl font-bold text-white mb-2">Community First</h3>
                  <p className="text-white/90 text-sm sm:text-base">
                    We believe in the power of communities working together. Our marketplace 
                    connects suppliers, installers, and users to build a sustainable ecosystem.
                  </p>
                </div>
              </div>
            </div>

            <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 sm:p-8">
              <div className="flex items-start gap-4 mb-4">
                <div className="bg-yellow-400 w-12 h-12 rounded-full flex items-center justify-center shrink-0">
                  <Award className="w-6 h-6 text-blue-900" />
                </div>
                <div>
                  <h3 className="text-xl sm:text-2xl font-bold text-white mb-2">Quality Assured</h3>
                  <p className="text-white/90 text-sm sm:text-base">
                    Every biogas kit on our platform is vetted for quality, safety, and efficiency. 
                    We only partner with certified suppliers and manufacturers.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Why Choose Us Section */}
        <div className="bg-linear-to-r from-yellow-400 to-yellow-500 rounded-2xl p-8 sm:p-12">
          <div className="text-center mb-8">
            <h3 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-blue-900 mb-3">
              Why Choose GasConnect?
            </h3>
            <p className="text-blue-900/80 text-base sm:text-lg max-w-2xl mx-auto">
              We're more than just a marketplace. We're your partner in the renewable energy journey.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="text-center">
              <div className="bg-blue-900 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <TrendingUp className="w-8 h-8 text-yellow-400" />
              </div>
              <h4 className="font-bold text-blue-900 mb-2">Best Prices</h4>
              <p className="text-blue-900/80 text-sm">Competitive pricing with transparent cost breakdown</p>
            </div>

            <div className="text-center">
              <div className="bg-blue-900 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <Users className="w-8 h-8 text-yellow-400" />
              </div>
              <h4 className="font-bold text-blue-900 mb-2">Expert Support</h4>
              <p className="text-blue-900/80 text-sm">24/7 customer support and technical assistance</p>
            </div>

            <div className="text-center">
              <div className="bg-blue-900 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <Award className="w-8 h-8 text-yellow-400" />
              </div>
              <h4 className="font-bold text-blue-900 mb-2">Certified Products</h4>
              <p className="text-blue-900/80 text-sm">All kits meet international quality standards</p>
            </div>

            <div className="text-center">
              <div className="bg-blue-900 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <Leaf className="w-8 h-8 text-yellow-400" />
              </div>
              <h4 className="font-bold text-blue-900 mb-2">Eco Impact</h4>
              <p className="text-blue-900/80 text-sm">Track your environmental contribution</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}