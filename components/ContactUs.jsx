import { useState } from "react";
import { Mail, Phone, MapPin, Send, MessageSquare, Clock, CheckCircle } from "lucide-react";

export default function ContactUs() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    subject: "",
    message: ""
  });
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Simulate form submission
    setIsSubmitted(true);
    setTimeout(() => {
      setIsSubmitted(false);
      setFormData({
        name: "",
        email: "",
        phone: "",
        subject: "",
        message: ""
      });
    }, 3000);
  };

  return (
    <section id="contactus" className="py-16 sm:py-20 lg:py-24 px-4 sm:px-6 lg:px-8 bg-blue-800">
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="text-center mb-12 sm:mb-16">
          <div className="inline-flex items-center gap-2 bg-yellow-400/20 px-4 py-2 rounded-full mb-4">
            <MessageSquare className="w-5 h-5 text-yellow-400" />
            <span className="text-yellow-400 font-semibold text-sm sm:text-base">Get in Touch</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white mb-4">
            Contact <span className="text-yellow-400">GasConnect</span>
          </h2>
          <p className="text-white/90 text-base sm:text-lg lg:text-xl max-w-3xl mx-auto">
            Have questions about biogas systems? Our team of experts is ready to help you find the perfect solution.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 lg:gap-12">
          {/* Contact Information */}
          <div className="lg:col-span-1 space-y-6">
            {/* Contact Cards */}
            <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 hover:bg-white/20 transition-all duration-300">
              <div className="bg-yellow-400 w-12 h-12 rounded-full flex items-center justify-center mb-4">
                <Phone className="w-6 h-6 text-blue-900" />
              </div>
              <h3 className="text-xl font-bold text-white mb-2">Phone</h3>
              <p className="text-white/80 mb-2">Call us for immediate assistance</p>
              <a href="tel:+254712345678" className="text-yellow-400 hover:text-yellow-300 font-semibold">
                +254 712 345 678
              </a>
            </div>

            <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 hover:bg-white/20 transition-all duration-300">
              <div className="bg-yellow-400 w-12 h-12 rounded-full flex items-center justify-center mb-4">
                <Mail className="w-6 h-6 text-blue-900" />
              </div>
              <h3 className="text-xl font-bold text-white mb-2">Email</h3>
              <p className="text-white/80 mb-2">Send us your inquiries</p>
              <a href="mailto:info@gasconnect.co.ke" className="text-yellow-400 hover:text-yellow-300 font-semibold">
                info@gasconnect.co.ke
              </a>
            </div>

            <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 hover:bg-white/20 transition-all duration-300">
              <div className="bg-yellow-400 w-12 h-12 rounded-full flex items-center justify-center mb-4">
                <MapPin className="w-6 h-6 text-blue-900" />
              </div>
              <h3 className="text-xl font-bold text-white mb-2">Location</h3>
              <p className="text-white/80 mb-2">Visit our office</p>
              <p className="text-yellow-400 font-semibold">
                Nairobi, Kenya<br />
                Upper Hill, ABC Place
              </p>
            </div>

            <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 hover:bg-white/20 transition-all duration-300">
              <div className="bg-yellow-400 w-12 h-12 rounded-full flex items-center justify-center mb-4">
                <Clock className="w-6 h-6 text-blue-900" />
              </div>
              <h3 className="text-xl font-bold text-white mb-2">Business Hours</h3>
              <p className="text-white/80 text-sm">
                Monday - Friday: 8:00 AM - 6:00 PM<br />
                Saturday: 9:00 AM - 4:00 PM<br />
                Sunday: Closed
              </p>
            </div>
          </div>

          {/* Contact Form */}
          <div className="lg:col-span-2">
            <div className="bg-white rounded-2xl p-6 sm:p-8 lg:p-10 shadow-2xl">
              {isSubmitted ? (
                <div className="text-center py-12">
                  <div className="bg-green-100 w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-6">
                    <CheckCircle className="w-12 h-12 text-green-600" />
                  </div>
                  <h3 className="text-2xl sm:text-3xl font-bold text-blue-900 mb-3">
                    Message Sent Successfully!
                  </h3>
                  <p className="text-gray-600 text-base sm:text-lg">
                    Thank you for contacting us. We'll get back to you within 24 hours.
                  </p>
                </div>
              ) : (
                <>
                  <h3 className="text-2xl sm:text-3xl font-bold text-blue-900 mb-2">
                    Send us a Message
                  </h3>
                  <p className="text-gray-600 mb-6 sm:mb-8">
                    Fill out the form below and our team will respond as soon as possible.
                  </p>

                  <form onSubmit={handleSubmit} className="space-y-6">
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                      <div>
                        <label htmlFor="name" className="block text-sm font-semibold text-gray-700 mb-2">
                          Full Name *
                        </label>
                        <input
                          type="text"
                          id="name"
                          name="name"
                          required
                          value={formData.name}
                          onChange={handleChange}
                          className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:border-blue-600 focus:ring-2 focus:ring-blue-600/20 outline-none transition-all"
                          placeholder="John Doe"
                        />
                      </div>

                      <div>
                        <label htmlFor="email" className="block text-sm font-semibold text-gray-700 mb-2">
                          Email Address *
                        </label>
                        <input
                          type="email"
                          id="email"
                          name="email"
                          required
                          value={formData.email}
                          onChange={handleChange}
                          className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:border-blue-600 focus:ring-2 focus:ring-blue-600/20 outline-none transition-all"
                          placeholder="john@example.com"
                        />
                      </div>
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                      <div>
                        <label htmlFor="phone" className="block text-sm font-semibold text-gray-700 mb-2">
                          Phone Number
                        </label>
                        <input
                          type="tel"
                          id="phone"
                          name="phone"
                          value={formData.phone}
                          onChange={handleChange}
                          className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:border-blue-600 focus:ring-2 focus:ring-blue-600/20 outline-none transition-all"
                          placeholder="+254 712 345 678"
                        />
                      </div>

                      <div>
                        <label htmlFor="subject" className="block text-sm font-semibold text-gray-700 mb-2">
                          Subject *
                        </label>
                        <select
                          id="subject"
                          name="subject"
                          required
                          value={formData.subject}
                          onChange={handleChange}
                          className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:border-blue-600 focus:ring-2 focus:ring-blue-600/20 outline-none transition-all"
                        >
                          <option value="">Select a subject</option>
                          <option value="general">General Inquiry</option>
                          <option value="product">Product Information</option>
                          <option value="installation">Installation Services</option>
                          <option value="support">Technical Support</option>
                          <option value="partnership">Partnership Opportunities</option>
                        </select>
                      </div>
                    </div>

                    <div>
                      <label htmlFor="message" className="block text-sm font-semibold text-gray-700 mb-2">
                        Message *
                      </label>
                      <textarea
                        id="message"
                        name="message"
                        required
                        value={formData.message}
                        onChange={handleChange}
                        rows="6"
                        className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:border-blue-600 focus:ring-2 focus:ring-blue-600/20 outline-none transition-all resize-none"
                        placeholder="Tell us how we can help you..."
                      ></textarea>
                    </div>

                    <button
                      type="submit"
                      className="w-full bg-blue-600 hover:bg-blue-700 text-white font-bold py-4 rounded-lg transition-all duration-300 hover:scale-105 shadow-lg hover:shadow-xl flex items-center justify-center gap-2"
                    >
                      <Send className="w-5 h-5" />
                      Send Message
                    </button>

                    <p className="text-sm text-gray-500 text-center">
                      We typically respond within 24 hours during business days.
                    </p>
                  </form>
                </>
              )}
            </div>
          </div>
        </div>

        {/* Map or Additional Info Section */}
        <div className="mt-16 bg-gradient-to-r from-yellow-400 to-yellow-500 rounded-2xl p-8 sm:p-12">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
            <div>
              <h3 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-blue-900 mb-4">
                Why Contact Us?
              </h3>
              <ul className="space-y-3 text-blue-900">
                <li className="flex items-start gap-3">
                  <CheckCircle className="w-6 h-6 flex-shrink-0 mt-0.5" />
                  <span className="text-base sm:text-lg">Expert guidance on choosing the right biogas system</span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle className="w-6 h-6 flex-shrink-0 mt-0.5" />
                  <span className="text-base sm:text-lg">Free consultation and site assessment</span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle className="w-6 h-6 flex-shrink-0 mt-0.5" />
                  <span className="text-base sm:text-lg">Technical support for existing customers</span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle className="w-6 h-6 flex-shrink-0 mt-0.5" />
                  <span className="text-base sm:text-lg">Partnership and business inquiries welcome</span>
                </li>
              </ul>
            </div>
            <div className="bg-blue-900 rounded-xl p-8 text-white">
              <h4 className="text-xl sm:text-2xl font-bold mb-4">Emergency Support</h4>
              <p className="mb-4 text-white/90">
                For urgent technical issues with your biogas system, our emergency support team is available 24/7.
              </p>
              <a 
                href="tel:+254700123456"
                className="inline-flex items-center gap-2 bg-yellow-400 text-blue-900 font-bold px-6 py-3 rounded-full hover:bg-yellow-300 transition-all duration-300"
              >
                <Phone className="w-5 h-5" />
                Emergency: +254 700 123 456
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}