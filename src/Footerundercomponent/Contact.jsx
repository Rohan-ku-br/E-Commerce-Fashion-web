import { motion } from "framer-motion";

const Contact = () => {
  return (
    <section className="py-24 bg-gray-50">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl sm:text-5xl font-extrabold text-gray-900 mb-6 tracking-tight">
            Contact Us
          </h2>
          <p className="text-gray-700 max-w-3xl mx-auto text-lg sm:text-xl leading-relaxed">
            We're here to assist you! Reach out for inquiries about our eco-friendly products.
          </p>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 60 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, ease: "easeOut" }}
          className="max-w-3xl mx-auto bg-white rounded-2xl shadow-xl p-6 sm:p-8"
        >
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {/* Contact Information */}
            <div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">
                Get in Touch
              </h3>
              <ul className="space-y-4 text-gray-600">
                <li className="flex items-center">
                  <svg
                    className="w-6 h-6 text-green-600 mr-3"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                    aria-hidden="true"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                    />
                  </svg>
                  <span>
                    Email:{" "}
                    <a
                      href="mailto:support@ecoshop.com"
                      className="text-green-600 hover:underline"
                      aria-label="Email support"
                    >
                      support@ecoshop.com
                    </a>
                  </span>
                </li>
                <li className="flex items-center">
                  <svg
                    className="w-6 h-6 text-green-600 mr-3"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                    aria-hidden="true"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
                    />
                  </svg>
                  <span>
                    Phone:{" "}
                    <a
                      href="tel:+1-800-555-1234"
                      className="text-green-600 hover:underline"
                      aria-label="Phone support"
                    >
                      +1-800-555-1234
                    </a>
                  </span>
                </li>
                <li className="flex items-center">
                  <svg
                    className="w-6 h-6 text-green-600 mr-3"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                    aria-hidden="true"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
                    />
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
                    />
                  </svg>
                  <span>Address: 123 Eco Street, Green City, CA 90210</span>
                </li>
              </ul>
            </div>

            {/* Social Media Links */}
            <div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">
                Connect With Us
              </h3>
              <ul className="space-y-4 text-gray-600">
                <li className="flex items-center">
                  <svg
                    className="w-6 h-6 text-green-600 mr-3"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                    aria-hidden="true"
                  >
                    <path d="M22 12h-4l-3 9L9 3l-3 9H2" />
                  </svg>
                  <a
                    href="https://twitter.com/ecoshop"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-green-600 hover:underline"
                    aria-label="Follow us on Twitter"
                  >
                    Twitter
                  </a>
                </li>
                <li className="flex items-center">
                  <svg
                    className="w-6 h-6 text-green-600 mr-3"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                    aria-hidden="true"
                  >
                    <path
                      fillRule="evenodd"
                      d="M12 2C6.477 2 2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.879v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12c0-5.523-4.477-10-10-10z"
                      clipRule="evenodd"
                    />
                  </svg>
                  <a
                    href="https://facebook.com/ecoshop"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-green-600 hover:underline"
                    aria-label="Follow us on Facebook"
                  >
                    Facebook
                  </a>
                </li>
                <li className="flex items-center">
                  <svg
                    className="w-6 h-6 text-green-600 mr-3"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                    aria-hidden="true"
                  >
                    <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm3.36 14.36c-.29.29-.68.44-1.09.44s-.8-.15-1.09-.44l-5.64-5.64c-.61-.61-.61-1.6 0-2.21l1.41-1.41c.61-.61 1.6-.61 2.21 0L12 9.79l4.24-4.24c.61-.61 1.6-.61 2.21 0l1.41 1.41c.61.61.61 1.6 0 2.21l-5.64 5.64z" />
                  </svg>
                  <a
                    href="https://instagram.com/ecoshop"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-green-600 hover:underline"
                    aria-label="Follow us on Instagram"
                  >
                    Instagram
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Contact;