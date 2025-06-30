
import { Link } from "react-router-dom";
import { Mail, Phone, MapPin, Linkedin, Twitter, Facebook } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Company Info */}
          <div className="col-span-1 md:col-span-2">
            <div className="text-2xl font-bold bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent mb-4">
              StaffRex
            </div>
            <p className="text-gray-300 mb-6 leading-relaxed">
              Your trusted partner in staffing solutions. We connect talented professionals 
              with exceptional opportunities, helping businesses thrive and careers flourish.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="text-gray-400 hover:text-blue-400 transition-colors duration-300">
                <Linkedin size={20} />
              </a>
              <a href="#" className="text-gray-400 hover:text-blue-400 transition-colors duration-300">
                <Twitter size={20} />
              </a>
              <a href="#" className="text-gray-400 hover:text-blue-400 transition-colors duration-300">
                <Facebook size={20} />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <Link to="/about" className="text-gray-300 hover:text-blue-400 transition-colors duration-300">
                  About Us
                </Link>
              </li>
              <li>
                <Link to="/services" className="text-gray-300 hover:text-blue-400 transition-colors duration-300">
                  Services
                </Link>
              </li>
              <li>
                <Link to="/careers" className="text-gray-300 hover:text-blue-400 transition-colors duration-300">
                  Careers
                </Link>
              </li>
              <li>
                <Link to="/contact" className="text-gray-300 hover:text-blue-400 transition-colors duration-300">
                  Contact
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Contact Info</h3>
            <div className="space-y-3">
              <div className="flex items-center space-x-3">
                <Mail size={16} className="text-blue-400" />
                <a href="mailto:info@staffrex.in" className="text-gray-300 hover:text-blue-400 transition-colors duration-300">
                  info@staffrex.in
                </a>
              </div>
              <div className="flex items-center space-x-3">
                <Phone size={16} className="text-blue-400" />
                <a href="tel:+919876543210" className="text-gray-300 hover:text-blue-400 transition-colors duration-300">
                  +91 98765 43210
                </a>
              </div>
              <div className="flex items-start space-x-3">
                <MapPin size={16} className="text-blue-400 mt-1" />
                <span className="text-gray-300">
                  Bangalore, Karnataka, India
                </span>
              </div>
            </div>
          </div>
        </div>

        <div className="border-t border-gray-800 mt-8 pt-8 text-center">
          <p className="text-gray-400">
            © 2024 StaffRex. All rights reserved. | Designed with ❤️ for connecting talent with opportunity.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
