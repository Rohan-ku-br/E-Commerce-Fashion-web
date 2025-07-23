import { motion } from "framer-motion";
import { FaTwitter, FaLinkedin, FaInstagram } from "react-icons/fa";

const FounderProfile = () => {
  const founder = {
    name: "Alex Green",
    title: "Founder & Visionary",
    image:
      "https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?q=80&w=687&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    bio: "Alex Green is a dedicated innovator with a mission to revolutionize sustainable living. With 20 years of experience in green technology and product design, Alex founded this company to create eco-friendly solutions that inspire change. Their vision blends cutting-edge innovation with a deep commitment to environmental stewardship.",
    social: {
      twitter: "https://twitter.com/alexgreen",
      linkedin: "https://linkedin.com/in/alexgreen",
      instagram: "https://instagram.com/alexgreen",
    },
  };

  const bioVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.03,
      },
    },
  };

  const letterVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 },
  };

  return (
    <section className="py-16 sm:py-24 bg-gray-50">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.2, ease: "easeOut" }}
          className="max-w-5xl mx-auto bg-white rounded-xl shadow-lg overflow-hidden grid grid-cols-1 md:grid-cols-2"
          role="region"
          aria-label="Founder Profile"
          tabIndex={0}
          onKeyDown={(e) => {
            if (e.key === "Enter" || e.key === " ") {
            }
          }}
        >
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.2, ease: "easeOut" }}
            className="relative h-64 md:h-full overflow-hidden"
          >
            <img
              src={founder.image}
              alt={`Portrait of ${founder.name}, ${founder.title}`}
              className="w-full h-full object-cover transition-transform duration-500 hover:scale-110"
              loading="lazy"
              onError={(e) => {
                e.target.src = "https://via.placeholder.com/400x400?text=Founder+Portrait";
              }}
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent opacity-0 hover:opacity-100 transition-opacity duration-300"></div>
          </motion.div>
          <div className="p-6 sm:p-10 flex flex-col justify-center">
            <motion.h2
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: 0.2 }}
              className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-gray-900 mb-2"
            >
              {founder.name}
            </motion.h2>
            <motion.p
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.3, delay: 0.3 }}
              className="text-lg sm:text-xl text-green-700 mb-4"
            >
              {founder.title}
            </motion.p>
            <motion.p
              variants={bioVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              className="text-gray-600 text-sm sm:text-base leading-relaxed mb-6"
            >
              {founder.bio.split("").map((char, index) => (
                <motion.span key={index} variants={letterVariants}>
                  {char}
                </motion.span>
              ))}
            </motion.p>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.4 }}
              className="flex justify-center md:justify-start space-x-4"
            >
              <a
                href={founder.social.twitter}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Twitter profile"
                className="text-green-700 hover:text-green-500 transition-colors duration-300"
              >
                <FaTwitter className="w-6 h-6" />
              </a>
              <a
                href={founder.social.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="LinkedIn profile"
                className="text-green-700 hover:text-green-500 transition-colors duration-300"
              >
                <FaLinkedin className="w-6 h-6" />
              </a>
              <a
                href={founder.social.instagram}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Instagram profile"
                className="text-green-700 hover:text-green-500 transition-colors duration-300"
              >
                <FaInstagram className="w-6 h-6" />
              </a>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default FounderProfile;  