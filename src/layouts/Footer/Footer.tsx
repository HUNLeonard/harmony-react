import { useState } from "react";
import { Send, ArrowUp, Instagram, Facebook, Twitter, Youtube, Mail } from "lucide-react";

const Footer = () => {
  const [email, setEmail] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle newsletter subscription
    setEmail("");
    alert("Thanks for subscribing!");
  };

  return (
    <footer className="relative bg-gradient-to-b from-gray-darkest to-[#111] text-gray-300 overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0 overflow-hidden opacity-20 pointer-events-none">
        <div className="absolute -top-24 -left-24 w-64 h-64 bg-blue-600/30 rounded-full blur-3xl"></div>
        <div className="absolute top-1/2 left-1/4 w-96 h-96 bg-purple-600/20 rounded-full blur-3xl"></div>
        <div className="absolute bottom-0 right-0 w-80 h-80 bg-blue-900/30 rounded-full blur-3xl"></div>
      </div>


      {/* Main footer content */}
      <div className="relative container mx-auto px-4">
        {/* Logo and info */}
        <div className="flex flex-col md:flex-row justify-between items-start pt-6 pb-12 border-b border-gray-800">
          <div className="mb-8 md:mb-0 max-w-sm">
            <div className="flex items-center gap-2 mb-4">
              <img src="./harmony.svg" alt="Logo" className="h-12" />
              <h2 className="font-garamond text-2xl font-bold text-white tracking-wide">
                HARMONY
              </h2>
            </div>
            <p className="text-sm text-gray-400 mb-4">
              Elevating your audio experience with cutting-edge technology and minimalist design that harmonizes with your lifestyle.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="text-gray-400 hover:text-white transition-colors duration-200">
                <Instagram size={20} />
              </a>
              <a href="#" className="text-gray-400 hover:text-white transition-colors duration-200">
                <Facebook size={20} />
              </a>
              <a href="#" className="text-gray-400 hover:text-white transition-colors duration-200">
                <Twitter size={20} />
              </a>
              <a href="#" className="text-gray-400 hover:text-white transition-colors duration-200">
                <Youtube size={20} />
              </a>
            </div>
          </div>

          {/* Quick links section */}
          <div className="grid grid-cols-2 md:grid-cols-3 gap-8 w-full md:w-auto">
            <div>
              <h3 className="font-semibold text-white mb-4 relative">
                Products
                <span className="absolute -bottom-1 left-0 w-8 h-0.5 bg-blue-600"></span>
              </h3>
              <ul className="space-y-2">
                <li><a href="#" className="text-gray-400 hover:text-white transition-colors duration-200 hover:translate-x-1 inline-block">Earbuds</a></li>
                <li><a href="#" className="text-gray-400 hover:text-white transition-colors duration-200 hover:translate-x-1 inline-block">Smartwatches</a></li>
                <li><a href="#" className="text-gray-400 hover:text-white transition-colors duration-200 hover:translate-x-1 inline-block">Smart Glasses</a></li>
                <li><a href="#" className="text-gray-400 hover:text-white transition-colors duration-200 hover:translate-x-1 inline-block">Accessories</a></li>
              </ul>
            </div>

            <div>
              <h3 className="font-semibold text-white mb-4 relative">
                Support
                <span className="absolute -bottom-1 left-0 w-8 h-0.5 bg-blue-600"></span>
              </h3>
              <ul className="space-y-2">
                <li><a href="#" className="text-gray-400 hover:text-white transition-colors duration-200 hover:translate-x-1 inline-block">Help Center</a></li>
                <li><a href="#" className="text-gray-400 hover:text-white transition-colors duration-200 hover:translate-x-1 inline-block">Contact Us</a></li>
                <li><a href="#" className="text-gray-400 hover:text-white transition-colors duration-200 hover:translate-x-1 inline-block">Warranty</a></li>
                <li><a href="#" className="text-gray-400 hover:text-white transition-colors duration-200 hover:translate-x-1 inline-block">Returns</a></li>
              </ul>
            </div>

            <div>
              <h3 className="font-semibold text-white mb-4 relative">
                Company
                <span className="absolute -bottom-1 left-0 w-8 h-0.5 bg-blue-600"></span>
              </h3>
              <ul className="space-y-2">
                <li><a href="#" className="text-gray-400 hover:text-white transition-colors duration-200 hover:translate-x-1 inline-block">About Us</a></li>
                <li><a href="#" className="text-gray-400 hover:text-white transition-colors duration-200 hover:translate-x-1 inline-block">Careers</a></li>
                <li><a href="#" className="text-gray-400 hover:text-white transition-colors duration-200 hover:translate-x-1 inline-block">Press</a></li>
                <li><a href="#" className="text-gray-400 hover:text-white transition-colors duration-200 hover:translate-x-1 inline-block">Blog</a></li>
              </ul>
            </div>
          </div>
        </div>

        {/* Newsletter */}
        <div className="py-8 border-b border-gray-800">
          <div className="max-w-lg mx-auto">
            <h3 className="font-semibold text-white text-center mb-2">Stay Connected</h3>
            <p className="text-sm text-gray-400 text-center mb-4">Subscribe to our newsletter for exclusive offers and updates</p>
            <form onSubmit={handleSubmit} className="flex">
              <div className="relative flex-grow">
                <Mail size={16} className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400" />
                <input
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="Your email address"
                  className="w-full pl-10 pr-4 py-3 bg-gray-900 border border-gray-700 rounded-l-lg focus:outline-none focus:border-blue-600 text-gray-300 placeholder-gray-500"
                  required
                />
              </div>
              <button
                type="submit"
                className="bg-blue-600 hover:bg-blue-700 text-white px-4 py-3 rounded-r-lg transition-colors duration-200 flex items-center"
              >
                <Send size={16} className="mr-2" />
                Subscribe
              </button>
            </form>
          </div>
        </div>

        {/* Bottom footer */}
        <div className="py-6 flex flex-col md:flex-row justify-between items-center">
          <p className="text-sm text-gray-500 mb-4 md:mb-0">
            &copy; {new Date().getFullYear()} Harmony. All Rights Reserved.
          </p>
          <div className="flex flex-wrap justify-center gap-4 text-sm text-gray-500">
            <a href="#" className="hover:text-gray-300 transition-colors duration-200">Privacy Policy</a>
            <a href="#" className="hover:text-gray-300 transition-colors duration-200">Terms of Service</a>
            <a href="#" className="hover:text-gray-300 transition-colors duration-200">Cookie Policy</a>
            <p>Design by Attila</p>
          </div>
        </div>
      </div>

      {/* Back to top button */}
      <a
        href="#"
        className="fixed bottom-6 right-6 bg-blue-600 text-white p-2 rounded-full shadow-lg hover:bg-blue-700 transition-colors duration-200 z-50"
      >
        <ArrowUp size={20} />
      </a>
    </footer>
  );
};

export default Footer;