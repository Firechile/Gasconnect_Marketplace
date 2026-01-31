import { useState } from "react";
import { Menu, X } from "lucide-react";

export default function Navbar() {
  const [mobileMenuIsOpen, setMobileMenuIsOpen] = useState(false);

  return <nav className="fixed top-0 w-full z-50 transition-all duration-300 bg-blue-600/20 backdrop-blur-sm">
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-14 sm:h-16 md:h-20">
            <div className="flex items-center space-x-1 group cursor-pointer">
                <div>
                    <img 
                    src="/logo.png" 
                    alt="GasConnect Logo"
                    className="w-6 h-6 sm:w-8 sm:h-8" />
                </div>
                <span className="text-lg sm:text-xl md:text-2xl font-medium">
                    <span className="text-white">Gas</span>
                    <span className="text-yellow-400">Connect</span>
                </span>
            </div>

            {/* Nav Links */}
            <div className="hidden md:flex items-center space-x-6 lg:space-x-8">
                <a 
                    href="#features" 
                    className="text-white hover:text-yellow-400 text-sm lg:text-base">
                        About Us
                    </a>

                <a 
                    href="#biogaskits" 
                    className="text-white hover:text-yellow-400 text-sm lg:text-base">
                        Biogas Kits
                    </a>

                <a 
                    href="#articles" 
                    className="text-white hover:text-yellow-400 text-sm lg:text-base">
                        Articles
                    </a>
                    
                <a 
                    href="#contactus" 
                    className="text-white hover:text-yellow-400 text-sm lg:text-base">
                        Contact Us
                    </a>
            </div>

            {/* Small screen menu button */}
            <button 
                className="md:hidden p-2 text-white hover:text-yellow-400" 
                onClick={() => setMobileMenuIsOpen((prev) => !prev)}>

            { mobileMenuIsOpen ? (
                <X className="w-5 h-5 sm:w-6 sm:h-6"  />
            ) : (
                <Menu className="w-5 h-5 sm:w-6 sm:h-6" />
            )}
            </button>
        </div>
    </div>
    {mobileMenuIsOpen && (<div className="md:hidden bg-blue-100/20 backdrop-blur-lg border-t border-blue-500 animate-in slide-in-from-top duration-300">
        <div className="px-4 py-4 sm:py-6 space-y-3 sm:space-y-4 ">
        <a 
            href="#features" 
            onClick={() => setMobileMenuIsOpen(false)}
            className="block text-white hover:text-yellow-400 text-sm lg:text-base">
                About Us
            </a>        

        <a 
            href="#biogaskits" 
            onClick={() => setMobileMenuIsOpen(false)}
            className="block text-white hover:text-yellow-400 text-sm lg:text-base">            
                Biogas Kits
        </a>

        <a 
            href="#articles" 
            onClick={() => setMobileMenuIsOpen(false)}
            className="block text-white hover:text-yellow-400 text-sm lg:text-base">
                Articles
            </a>
                    
        <a 
            href="#contactus"
            onClick={() => setMobileMenuIsOpen(false)} 
            className="block text-white hover:text-yellow-400 text-sm lg:text-base">
                Contact Us
            </a>
        </div>
    </div> 
    )}
  </nav>
}
