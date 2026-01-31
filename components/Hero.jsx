import { ArrowRight, Zap, Leaf, DollarSign } from "lucide-react";

export default function Hero() {
  return (
    <section 
      className="relative min-h-[70vh] lg:min-h-screen flex items-start lg:items-center pt-20 sm:pt-24 lg:pt-20 px-4 sm:px-6 lg:px-8 overflow-hidden">
      <div className="max-w-7xl mx-auto w-full">
        <div className="relative overflow-hidden rounded-3xl shadow-2xl">

          <div className="absolute 
                          top-1/2 
                          left-6 sm:left-10 lg:left-12 
                          -translate-y-1/2 
                          z-10 
                          uppercase max-w-sm sm:max-w-md lg:max-w-xl 
                          tracking-wide">
            <p className="text-yellow-400 text-sm sm:text-base lg:text-lg font-semibold mb-2 sm:mb-3 animate-in fade-in slide-in-from-left duration-700">
              Start saving today
            </p>
            <h1 className="text-white text-3xl sm:text-5xl lg:text-6xl font-bold leading-tight animate-in fade-in slide-in-from-left duration-700 delay-100">
              Power your life <br />
              with <span className="text-4xl sm:text-6xl lg:text-7xl font-extrabold text-yellow-400">biogas</span>
            </h1>
            <p className="normal-case text-white/90 text-sm sm:text-base lg:text-lg mt-4 sm:mt-6 font-normal tracking-normal max-w-md animate-in fade-in slide-in-from-left duration-700 delay-200">
              Transform organic waste into clean, renewable energy. Join the sustainable revolution.
            </p>
            <a 
              href="#biogaskits"
              className="inline-flex items-center gap-2 mt-6 sm:mt-8 px-6 sm:px-8 py-3 sm:py-4 bg-yellow-400 text-blue-900 font-bold rounded-full hover:bg-yellow-300 transition-all duration-300 hover:scale-105 shadow-lg hover:shadow-xl normal-case text-sm sm:text-base animate-in fade-in slide-in-from-left delay-300">
              Explore Kits
              <ArrowRight className="w-4 h-4 sm:w-5 sm:h-5" />
            </a>
          </div>

          <img 
            src="/Biogas_tube_hero_01.png" 
            alt="Biogas production system"
            className="w-full h-95 sm:h-120 lg:h-145 object-cover" 
          />

          {/* Overlay gradient for better text readability */}
          <div className="absolute inset-0 bg-linear-to-r from-blue-900/80 via-blue-900/40 to-transparent"></div>
        </div>

        {/* Feature Cards Below Hero */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 sm:gap-6 mt-8 sm:mt-12">
          <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 hover:bg-white/20 transition-all duration-300 hover:scale-105">
            <div className="bg-yellow-400 w-12 h-12 rounded-full flex items-center justify-center mb-4">
              <Zap className="w-6 h-6 text-blue-900" />
            </div>
            <h3 className="text-white font-bold text-lg mb-2">Clean Energy</h3>
            <p className="text-white/80 text-sm">Generate renewable energy from organic waste right at home</p>
          </div>

          <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 hover:bg-white/20 transition-all duration-300 hover:scale-105">
            <div className="bg-yellow-400 w-12 h-12 rounded-full flex items-center justify-center mb-4">
              <DollarSign className="w-6 h-6 text-blue-900" />
            </div>
            <h3 className="text-white font-bold text-lg mb-2">Save Money</h3>
            <p className="text-white/80 text-sm">Reduce your energy bills by up to 60% with biogas systems</p>
          </div>

          <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 hover:bg-white/20 transition-all duration-300 hover:scale-105">
            <div className="bg-yellow-400 w-12 h-12 rounded-full flex items-center justify-center mb-4">
              <Leaf className="w-6 h-6 text-blue-900" />
            </div>
            <h3 className="text-white font-bold text-lg mb-2">Eco-Friendly</h3>
            <p className="text-white/80 text-sm">Reduce carbon footprint and contribute to a greener planet</p>
          </div>
        </div>
      </div>
    </section>
  )
}