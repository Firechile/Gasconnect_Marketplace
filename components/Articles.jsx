import { Calendar, User, ArrowRight, BookOpen, TrendingUp } from "lucide-react";

export default function Articles() {
  const articles = [
    {
      id: 1,
      title: "Getting Started with Biogas: A Beginner's Guide",
      excerpt: "Learn the basics of biogas production, how it works, and why it's becoming the future of renewable energy for households and businesses.",
      author: "Sarah Kimani",
      date: "Jan 28, 2026",
      category: "Guide",
      readTime: "5 min read",
      image: "/article-guide.jpg",
      featured: true
    },
    {
      id: 2,
      title: "5 Ways Biogas Can Reduce Your Energy Bills",
      excerpt: "Discover proven strategies to maximize your savings with biogas systems and reduce dependency on traditional energy sources.",
      author: "John Ochieng",
      date: "Jan 25, 2026",
      category: "Finance",
      readTime: "4 min read",
      image: "/article-savings.jpg",
      featured: false
    },
    {
      id: 3,
      title: "The Environmental Impact of Biogas Technology",
      excerpt: "Explore how biogas production helps reduce greenhouse gas emissions and contributes to fighting climate change.",
      author: "Grace Mwangi",
      date: "Jan 22, 2026",
      category: "Environment",
      readTime: "6 min read",
      image: "/article-environment.jpg",
      featured: true
    },
    {
      id: 4,
      title: "Biogas for Farmers: Turning Waste into Profit",
      excerpt: "How agricultural waste can be transformed into valuable biogas, creating additional revenue streams for farmers.",
      author: "David Kipchoge",
      date: "Jan 20, 2026",
      category: "Agriculture",
      readTime: "7 min read",
      image: "/article-farming.jpg",
      featured: false
    },
    {
      id: 5,
      title: "Maintenance Tips for Your Biogas System",
      excerpt: "Essential maintenance practices to ensure your biogas kit operates efficiently and lasts for years to come.",
      author: "Mary Wanjiru",
      date: "Jan 18, 2026",
      category: "Maintenance",
      readTime: "5 min read",
      image: "/article-maintenance.jpg",
      featured: false
    },
    {
      id: 6,
      title: "Success Stories: Communities Powered by Biogas",
      excerpt: "Real stories from Kenyan communities that have transformed their lives through biogas adoption.",
      author: "Peter Kamau",
      date: "Jan 15, 2026",
      category: "Community",
      readTime: "8 min read",
      image: "/article-community.jpg",
      featured: true
    }
  ];

  const featuredArticles = articles.filter(article => article.featured);
  const regularArticles = articles.filter(article => !article.featured);

  return (
    <section id="articles" className="py-16 sm:py-20 lg:py-24 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-blue-700 to-blue-800">
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="text-center mb-12 sm:mb-16">
          <div className="inline-flex items-center gap-2 bg-yellow-400/20 px-4 py-2 rounded-full mb-4">
            <BookOpen className="w-5 h-5 text-yellow-400" />
            <span className="text-yellow-400 font-semibold text-sm sm:text-base">Knowledge Center</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white mb-4">
            Latest <span className="text-yellow-400">Articles & Guides</span>
          </h2>
          <p className="text-white/90 text-base sm:text-lg lg:text-xl max-w-3xl mx-auto">
            Stay informed with expert insights, practical guides, and success stories from the biogas community.
          </p>
        </div>

        {/* Featured Articles */}
        <div className="mb-12 sm:mb-16">
          <div className="flex items-center gap-2 mb-6">
            <TrendingUp className="w-6 h-6 text-yellow-400" />
            <h3 className="text-xl sm:text-2xl font-bold text-white">Featured Articles</h3>
          </div>
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 sm:gap-8">
            {featuredArticles.map(article => (
              <article 
                key={article.id}
                className="bg-white rounded-2xl overflow-hidden shadow-xl hover:shadow-2xl transition-all duration-300 hover:scale-105 flex flex-col group"
              >
                {/* Image */}
                <div className="relative h-48 sm:h-56 bg-gradient-to-br from-yellow-100 to-yellow-200 overflow-hidden">
                  <img 
                    src={article.image}
                    alt={article.title}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                    onError={(e) => {
                      e.target.style.display = 'none';
                      e.target.nextSibling.style.display = 'flex';
                    }}
                  />
                  <div 
                    className="hidden w-full h-full items-center justify-center"
                  >
                    <BookOpen className="w-16 h-16 text-yellow-600" />
                  </div>
                  <div className="absolute top-4 left-4">
                    <span className="bg-yellow-400 text-blue-900 text-xs font-bold px-3 py-1 rounded-full">
                      {article.category}
                    </span>
                  </div>
                </div>

                {/* Content */}
                <div className="p-6 flex-grow flex flex-col">
                  <h3 className="text-xl sm:text-2xl font-bold text-blue-900 mb-3 group-hover:text-blue-700 transition-colors">
                    {article.title}
                  </h3>
                  <p className="text-gray-600 mb-4 flex-grow text-sm sm:text-base">
                    {article.excerpt}
                  </p>

                  {/* Meta Info */}
                  <div className="flex items-center justify-between text-sm text-gray-500 mb-4 pb-4 border-b">
                    <div className="flex items-center gap-4">
                      <div className="flex items-center gap-1">
                        <User className="w-4 h-4" />
                        <span>{article.author}</span>
                      </div>
                      <div className="flex items-center gap-1">
                        <Calendar className="w-4 h-4" />
                        <span>{article.date}</span>
                      </div>
                    </div>
                  </div>

                  <div className="flex items-center justify-between">
                    <span className="text-sm font-semibold text-blue-600">{article.readTime}</span>
                    <button className="text-blue-600 hover:text-blue-800 font-semibold flex items-center gap-2 group-hover:gap-3 transition-all">
                      Read More
                      <ArrowRight className="w-4 h-4" />
                    </button>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </div>

        {/* Regular Articles */}
        <div>
          <h3 className="text-xl sm:text-2xl font-bold text-white mb-6">More Articles</h3>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
            {regularArticles.map(article => (
              <article 
                key={article.id}
                className="bg-white/10 backdrop-blur-sm rounded-xl p-6 hover:bg-white/20 transition-all duration-300 hover:scale-105 group"
              >
                <div className="flex items-start justify-between mb-3">
                  <span className="bg-yellow-400 text-blue-900 text-xs font-bold px-3 py-1 rounded-full">
                    {article.category}
                  </span>
                  <span className="text-white/70 text-xs">{article.readTime}</span>
                </div>

                <h3 className="text-lg sm:text-xl font-bold text-white mb-2 group-hover:text-yellow-400 transition-colors">
                  {article.title}
                </h3>
                <p className="text-white/80 mb-4 text-sm sm:text-base">
                  {article.excerpt}
                </p>

                <div className="flex items-center justify-between text-sm text-white/70 mb-4">
                  <div className="flex items-center gap-1">
                    <User className="w-4 h-4" />
                    <span>{article.author}</span>
                  </div>
                  <div className="flex items-center gap-1">
                    <Calendar className="w-4 h-4" />
                    <span>{article.date}</span>
                  </div>
                </div>

                <button className="text-yellow-400 hover:text-yellow-300 font-semibold flex items-center gap-2 group-hover:gap-3 transition-all text-sm">
                  Read Article
                  <ArrowRight className="w-4 h-4" />
                </button>
              </article>
            ))}
          </div>
        </div>

        {/* Newsletter Subscription */}
        <div className="mt-16 bg-gradient-to-r from-yellow-400 to-yellow-500 rounded-2xl p-8 sm:p-12">
          <div className="max-w-3xl mx-auto text-center">
            <h3 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-blue-900 mb-4">
              Stay Updated with Biogas Insights
            </h3>
            <p className="text-blue-900/80 text-base sm:text-lg mb-6">
              Subscribe to our newsletter and get the latest articles, tips, and exclusive offers delivered to your inbox.
            </p>
            <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 max-w-xl mx-auto">
              <input 
                type="email"
                placeholder="Enter your email address"
                className="flex-1 px-6 py-4 rounded-full text-blue-900 placeholder-blue-900/50 focus:outline-none focus:ring-2 focus:ring-blue-600"
              />
              <button className="bg-blue-900 hover:bg-blue-800 text-white font-bold px-8 py-4 rounded-full transition-all duration-300 hover:scale-105 shadow-lg whitespace-nowrap">
                Subscribe Now
              </button>
            </div>
            <p className="text-blue-900/60 text-sm mt-4">
              We respect your privacy. Unsubscribe at any time.
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}