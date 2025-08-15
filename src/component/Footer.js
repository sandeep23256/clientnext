import React from "react";
import {
  FaFacebookF,
  FaTwitter,
  FaInstagram,
  FaYoutube,
  FaLinkedin,
} from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white px-6 pt-12 pb-6">
      <div className="max-w-7xl mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8">
        {/* About Us */}
        <div>
          <h2 className="text-xl font-semibold mb-4">PNINFOSYS COMPANY GWALIOR</h2>
          <p className="text-sm text-gray-300">
            PN INFOSYS is a leading global business consulting and IT service company. We provides a full range of maintenance and compliance services for Government and Commercial facilities both large and small. Whether you need to run your business more efficiently or accelerate revenue growth, PN INFOSYS can get you there.
          </p>
        </div>

        {/* Services */}
        <div>
          <h2 className="text-xl font-semibold mb-4">Services</h2>
          <ul className="space-y-2 text-sm text-gray-300">
            <li>Web Development</li>
            <li>Web Designing</li>
            <li>Data Analyst</li>
            <li>python</li>
          </ul>
        </div>

        {/* Quick Links */}
        <div>
          <h2 className="text-xl font-semibold mb-4">Quick Links</h2>
          <ul className="space-y-2 text-sm text-gray-300">
            <li><a href="/" className="hover:text-white">Home</a></li>
            <li><a href="about" className="hover:text-white">About</a></li>
            <li><a href="services" className="hover:text-white">Services</a></li>
            <li><a href="contact" className="hover:text-white">Contact</a></li>
            <li><a href="training" className="hover:text-white">Training</a></li>
            <li><a href="mpctCollege" className="hover:text-white">Workshop</a></li>
            <li><a href="placementDesk" className="hover:text-white">Placement</a></li>
            <li><a href="studentBirthday" className="hover:text-white">Events</a></li>

          </ul>
        </div>

        {/* Contact & Social */}
        <div>
          <h2 className="text-xl font-semibold mb-4">Contact</h2>
          <p className="text-sm text-gray-300 mb-4">
            Email: support@pninfosys.com<br />
            Phone: +91 7000846823 <br />
            Phone: +91 7415289378
          </p>
          <div className="flex space-x-4">
            <a href="https://www.facebook.com/pninfosys/" target="blank" className="text-gray-400 hover:text-blue-500 transition">
              <FaFacebookF className="text-lg" />
            </a>
            <a href="https://www.twitter.com/pninfosys/" target="blank" className="text-gray-400 hover:text-blue-500 transition">
              <FaTwitter className="text-lg" />
            </a>
            <a href="https://www.linkedin.com/company/pninfosys/" target="blank" className="text-gray-400 hover:text-sky-400 transition">
              <FaLinkedin className="text-lg" />
            </a>
            <a href="#" className="text-gray-400 hover:text-pink-500 transition">
              <FaInstagram className="text-lg" />
            </a>
            <a href="https://www.youtube.com/@pninfosys" target="blank" className="text-gray-400 hover:text-red-600 transition">
              <FaYoutube className="text-lg" />
            </a>
          </div>
        </div>
      </div>

      <div className="text-center text-sm text-gray-500 mt-10 border-t border-gray-700 pt-4">
        © 2025 PNINFOSYS IT COMPANY IN GWALIOR. All rights reserved.
      </div>
    </footer>
  );
};

export default Footer;

