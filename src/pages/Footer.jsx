import { motion } from "framer-motion";
import { FaTwitter, FaInstagram, FaLinkedin, FaEnvelope } from "react-icons/fa";
import { Link, NavLink } from "react-router-dom";
import { useState } from "react";

const Footer = () => {
  const [email, setEmail] = useState("");
  const handleSubmit = (e) => {
    e.preventDefault();
    alert(`Subscribed with: ${email}`);
    setEmail("");
  };

  return (
    <footer className="bg-gradient-to-r from-green-900 to-gray-800 text-white py-6 lg:py-6 mt-8 sm:mt-12 ">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 sm:gap-12"
        >
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="space-y-4"
          >
            <div className="flex items-center gap-3 jelly-hover">
              <NavLink
                to="/"
                className="flex items-center gap-3 hover:text-purple-600 transition-colors duration-300"
              >
                <motion.img
                  src="/logo.png"
                  alt="Logo"
                  className="w-10 h-10"
                  initial={{ rotate: -10, opacity: 0 }}
                  animate={{ rotate: 0, opacity: 1 }}
                  transition={{
                    type: "spring",
                    stiffness: 200,
                    damping: 10,
                    duration: 0.6,
                  }}
                />
                <motion.span
                  className="text-2xl sm:text-3xl font-bold bg-gradient-to-r from-purple-700 via-pink-600 to-red-400 text-transparent bg-clip-text tracking-wide drop-shadow-sm"
                  initial={{ opacity: 0, y: -6 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.2, duration: 0.6, ease: "easeOut" }}
                >
                  Deenbandhu
                </motion.span>
              </NavLink>
            </div>
            <p className="text-gray-300 text-sm sm:text-base leading-relaxed">
              Deenbandhu is committed to sustainable living, offering eco-friendly
              products that empower a greener future.
            </p>
            <div className="flex space-x-4">
              <Link
                to="https://x.com/ecotrend"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="EcoTrend X"
                className="text-gray-300 hover:text-green-300 transition-colors duration-300"
              >
                <motion.div
                  whileHover={{ scale: 1.2, rotate: 10 }}
                  transition={{ duration: 0.3 }}
                >
                  <FaTwitter className="w-6 h-6" />
                </motion.div>
              </Link>
              <Link
                to="https://instagram.com/ecotrend"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="EcoTrend Instagram"
                className="text-gray-300 hover:text-green-300 transition-colors duration-300"
              >
                <motion.div
                  whileHover={{ scale: 1.2, rotate: 10 }}
                  transition={{ duration: 0.3 }}
                >
                  <FaInstagram className="w-6 h-6" />
                </motion.div>
              </Link>
              <Link
                to="https://linkedin.com/company/ecotrend"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="EcoTrend LinkedIn"
                className="text-gray-300 hover:text-green-300 transition-colors duration-300"
              >
                <motion.div
                  whileHover={{ scale: 1.2, rotate: 10 }}
                  transition={{ duration: 0.3 }}
                >
                  <FaLinkedin className="w-6 h-6" />
                </motion.div>
              </Link>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="space-y-4"
          >
            <h4 className="text-lg sm:text-xl font-semibold text-green-200 mb-4">
              Explore
            </h4>
            <ul className="space-y-2 text-gray-300 text-sm sm:text-base">
              <li>
                <NavLink
                  to="/"
                  className="hover:text-green-300 transition-colors duration-300"
                  aria-label="Home page"
                >
                  Home
                </NavLink>
              </li>
              <li>
                <NavLink
                  to="/productFeatures"
                  className="hover:text-green-300 transition-colors duration-300"
                  aria-label="Shop page"
                >
                  Shop
                </NavLink>
              </li>
              <li>
                <NavLink
                  to="/contact"
                  className="hover:text-green-300 transition-colors duration-300"
                  aria-label="Contact page"
                >
                  Contact
                </NavLink>
              </li>
            </ul>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="space-y-4"
          >
            <h4 className="text-lg sm:text-xl font-semibold text-green-200 mb-4">
              Customer Service
            </h4>
            <ul className="space-y-2 text-gray-300 text-sm sm:text-base">
              <li>
                <NavLink
                  to="/faq"
                  className="hover:text-green-300 transition-colors duration-300"
                  aria-label="Frequently Asked Questions"
                >
                  FAQs
                </NavLink>
              </li>
              <li>
                <NavLink
                  to="/returns"
                  className="hover:text-green-300 transition-colors duration-300"
                  aria-label="Returns and Refunds"
                >
                  Returns
                </NavLink>
              </li>
              <li>
                <NavLink
                  to="/shipping"
                  className="hover:text-green-300 transition-colors duration-300"
                  aria-label="Shipping Information"
                >
                  Shipping
                </NavLink>
              </li>
              <li>
                <NavLink
                  to="/trackOrder"
                  className="hover:text-green-300 transition-colors duration-300"
                  aria-label="Track Your Order"
                >
                  Track Order
                </NavLink>
              </li>
            </ul>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.5 }}
            className="space-y-4"
          >
            <h4 className="text-lg sm:text-xl font-semibold text-green-200 mb-4">
              Stay Connected
            </h4>
            <p className="text-gray-300 text-sm sm:text-base leading-relaxed">
              Subscribe to our newsletter for updates and exclusive offers.
            </p>
            <div className="flex flex-col sm:flex-row">
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Enter your email"
                className="flex-1 p-2 rounded-l-md sm:rounded-r-none bg-white/10 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-green-300"
                aria-label="Email for newsletter"
              />
              <button
                onClick={handleSubmit}
                className="mt-2 sm:mt-0 sm:ml-2 px-4 py-2 jelly-hover bg-green-600 text-white rounded-r-md hover:bg-green-500 transition-colors duration-300"
                aria-label="Subscribe to newsletter"
              >
                <FaEnvelope className="inline mr-2" />
                Subscribe
              </button>
            </div>
            <div className="text-gray-300 text-sm sm:text-base space-y-2">
              <p>Email: support@ecotrend.com</p>
              <p>Phone: +1-234-567-890</p>
              <p>Address: 123 Green St, Eco City, EC 12345</p>
            </div>
          </motion.div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.6 }}
          className="mt-8 sm:mt-12 pt-6 border-t border-gray-700 text-center"
        >
          <p className="text-gray-300 text-sm sm:text-base">
            © 2025 Deenbandhu. All rights reserved.
          </p>
          <div className="flex justify-center space-x-4 mt-4">
            <NavLink
              to="/terms"
              className="text-gray-300 hover:text-green-300 transition-colors duration-300 text-sm sm:text-base"
              aria-label="Terms of Service"
            >
              Terms of Service
            </NavLink>
            <NavLink
              to="/privacy"
              className="text-gray-300 hover:text-green-300 transition-colors duration-300 text-sm sm:text-base"
              aria-label="Privacy Policy"
            >
              Privacy Policy
            </NavLink>
          </div>
        </motion.div>
      </div>
    </footer>
  );
};

export default Footer;