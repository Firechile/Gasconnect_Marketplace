import { useState } from "react";
import { ShoppingCart, Star, CheckCircle, Info } from "lucide-react";

export default function BiogasKits() {
  const [selectedCategory, setSelectedCategory] = useState("all");

  const kits = [
    {
      id: 1,
      name: "HomeBio Standard",
      category: "home",
      price: 85000,
      rating: 4.5,
      reviews: 127,
      capacity: "6 m³/day",
      features: ["Perfect for small households", "Handles 10kg organic waste daily", "Easy installation"],
      image: "/kit-basic.jpg",
      popular: false
    },
    {
      id: 2,
      name: "HomeBio Pro X-Large Model",
      category: "home",
      price: 100000,
      rating: 4.8,
      reviews: 203,
      capacity: "18 m³/day",
      features: ["Ideal for medium households", "Handles 15-25kg organic waste daily", "Advanced monitoring"],
      image: "/kit-pro.jpg",
      popular: true
    },
    {
      id: 3,
      name: "Large Capacity T-15",
      category: "farm",
      price: 300000,
      rating: 4.7,
      reviews: 89,
      capacity: "15 m³/day",
      features: ["Perfect for small farms", "Handles and crop waste", "Durable construction"],
      image: "/kit-farm.jpg",
      popular: false
    },
    {
      id: 4,
      name: "Large Capacity T-25 ",
      category: "commercial",
      price: 357000,
      rating: 4.9,
      reviews: 45,
      capacity: "25 m³/day",
      features: ["Large scale operations", "Automated waste processing", "Remote monitoring"],
      image: "/kit-commercial.jpg",
      popular: true
    },
    {
      id: 5,
      name: "Large Capacity T-50",
      category: "farm",
      price: 450000,
      rating: 4.6,
      reviews: 67,
      capacity: "50 m³/day",
      features: ["Medium to large farms", "Multi-chamber design", "High efficiency"],
      image: "/kit-farm-advanced.jpg",
      popular: false
    },
    {
      id: 6,
      name: "Large Capacity T-100",
      category: "commercial",
      price: 750000,
      rating: 4.3,
      reviews: 156,
      capacity: "100 m³/day",
      features: ["High heat energy demands", "Large volumes of organic waste", "Low maintenance"],
      image: "/kit-compact.jpg",
      popular: false
    }
  ];

  const categories = [
    { id: "all", name: "All Kits" },
    { id: "home", name: "Home" },
    { id: "farm", name: "Farm" },
    { id: "commercial", name: "Commercial" }
  ];

  const filteredKits = selectedCategory === "all" 
    ? kits 
    : kits.filter(kit => kit.category === selectedCategory);

  return (
    <section id="biogaskits" className="py-16 sm:py-20 lg:py-24 px-4 sm:px-6 lg:px-8 bg-blue-700">
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="text-center mb-12 sm:mb-16">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white mb-4">
            Our <span className="text-yellow-400">Biogas Kits</span>
          </h2>
          <p className="text-white/90 text-base sm:text-lg lg:text-xl max-w-3xl mx-auto">
            Choose from our range of certified biogas systems designed for homes, farms, and commercial applications.
          </p>
        </div>

        {/* Category Filter */}
        <div className="flex flex-wrap justify-center gap-3 sm:gap-4 mb-12">
          {categories.map(category => (
            <button
              key={category.id}
              onClick={() => setSelectedCategory(category.id)}
              className={`px-6 sm:px-8 py-2 sm:py-3 rounded-full font-semibold transition-all duration-300 text-sm sm:text-base ${
                selectedCategory === category.id
                  ? 'bg-yellow-400 text-blue-900 shadow-lg scale-105'
                  : 'bg-white/10 text-white hover:bg-white/20'
              }`}
            >
              {category.name}
            </button>
          ))}
        </div>

        {/* Kits Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {filteredKits.map(kit => (
            <div 
              key={kit.id}
              className="bg-white rounded-2xl overflow-hidden shadow-xl hover:shadow-2xl transition-all duration-300 hover:scale-105 flex flex-col"
            >
              {/* Popular Badge */}
              {kit.popular && (
                <div className="bg-yellow-400 text-blue-900 text-xs sm:text-sm font-bold px-4 py-2 text-center">
                  ⭐ MOST POPULAR
                </div>
              )}

              {/* Image */}
              <div className="relative h-48 sm:h-56 bg-gradient-to-br from-blue-100 to-blue-200 overflow-hidden">
                <img 
                  src={kit.image}
                  alt={kit.name}
                  className="w-full h-full object-cover"
                  onError={(e) => {
                    e.target.style.display = 'none';
                    e.target.nextSibling.style.display = 'flex';
                  }}
                />
                <div 
                  className="hidden w-full h-full items-center justify-center"
                >
                  <div className="text-center">
                    <ShoppingCart className="w-16 h-16 text-blue-400 mx-auto mb-2" />
                    <p className="text-blue-600 font-semibold">{kit.name}</p>
                  </div>
                </div>
              </div>

              {/* Content */}
              <div className="p-6 flex-grow flex flex-col">
                <div className="flex items-start justify-between mb-3">
                  <h3 className="text-xl sm:text-2xl font-bold text-blue-900">{kit.name}</h3>
                  <span className="bg-blue-100 text-blue-900 text-xs font-semibold px-2 py-1 rounded-full uppercase">
                    {kit.category}
                  </span>
                </div>

                {/* Rating */}
                <div className="flex items-center gap-2 mb-3">
                  <div className="flex">
                    {[...Array(5)].map((_, i) => (
                      <Star
                        key={i}
                        className={`w-4 h-4 ${
                          i < Math.floor(kit.rating)
                            ? 'fill-yellow-400 text-yellow-400'
                            : 'text-gray-300'
                        }`}
                      />
                    ))}
                  </div>
                  <span className="text-sm text-gray-600">
                    {kit.rating} ({kit.reviews} reviews)
                  </span>
                </div>

                {/* Capacity */}
                <div className="bg-blue-50 rounded-lg p-3 mb-4">
                  <p className="text-sm text-gray-600 mb-1">Gas Production Capacity</p>
                  <p className="text-lg font-bold text-blue-900">{kit.capacity}</p>
                </div>

                {/* Features */}
                <div className="space-y-2 mb-6 flex-grow">
                  {kit.features.map((feature, index) => (
                    <div key={index} className="flex items-start gap-2">
                      <CheckCircle className="w-5 h-5 text-green-500 flex-shrink-0 mt-0.5" />
                      <p className="text-sm text-gray-700">{feature}</p>
                    </div>
                  ))}
                </div>

                {/* Price and CTA */}
                <div className="border-t pt-4">
                  <div className="flex items-center justify-between mb-4">
                    <div>
                      <p className="text-sm text-gray-600">Starting from</p>
                      <p className="text-2xl sm:text-3xl font-bold text-blue-900">
                        KES {kit.price.toLocaleString()}
                      </p>
                    </div>
                  </div>
                  <div className="flex gap-2">
                    <button className="flex-1 bg-blue-600 hover:bg-blue-700 text-white font-semibold py-3 rounded-lg transition-all duration-300 flex items-center justify-center gap-2 text-sm sm:text-base">
                      <ShoppingCart className="w-4 h-4 sm:w-5 sm:h-5" />
                      Add to Cart
                    </button>
                    <button className="bg-gray-100 hover:bg-gray-200 text-blue-900 font-semibold px-4 rounded-lg transition-all duration-300">
                      <Info className="w-5 h-5" />
                    </button>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Bottom CTA */}
        <div className="mt-16 text-center">
          <div className="bg-gradient-to-r from-yellow-400 to-yellow-500 rounded-2xl p-8 sm:p-12">
            <h3 className="text-2xl sm:text-3xl font-bold text-blue-900 mb-4">
              Need Help Choosing?
            </h3>
            <p className="text-blue-900/80 text-base sm:text-lg mb-6 max-w-2xl mx-auto">
              Our experts are ready to help you find the perfect biogas kit for your needs. 
              Get a free consultation today!
            </p>
            <a
              href="#contactus"
              className="inline-block bg-blue-900 hover:bg-blue-800 text-white font-bold px-8 py-4 rounded-full transition-all duration-300 hover:scale-105 shadow-lg"
            >
              Get Free Consultation
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}