import React from 'react';
import { motion } from "framer-motion";
import { NavLink } from "react-router-dom";

const Wishlist = () => {
  // Mock wishlisted items for display purposes
  const wishlistItems = [
    {
      id: 1,
      name: "Organic Cotton T-Shirt",
      category: "Men",
      price: 29.99,
      image: "https://images.meesho.com/images/products/541117151/iwy7q_512.avif?width=512",
      alt: "Organic Cotton T-Shirt",
    },
    {
      id: 2,
      name: "Men Denim Slim Fit Stretchable Jeans",
      category: "Women",
      price: 49.99,
      image: "https://images.meesho.com/images/products/229299286/klpbs_512.avif?width=512",
      alt: "Eco-Friendly Handbag",
    },
    {
      id: 3,
      name: "Black Kurti",
      category: "Beauty",
      price: 9.99,
      image: "https://images.meesho.com/images/products/397953982/lq6a2_512.avif?width=512",
      alt: "Natural Lip Balm",
    },
  ];

  return (
    <section className="py-24 bg-gray-50">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl sm:text-5xl font-extrabold text-gray-900 mb-6 tracking-tight">
            Your Wishlist
          </h2>
          <p className="text-gray-700 max-w-3xl mx-auto text-lg sm:text-xl leading-relaxed">
            Browse your favorite eco-friendly products saved for later.
          </p>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 60 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, ease: "easeOut" }}
          className="max-w-4xl mx-auto bg-white rounded-2xl shadow-xl p-6 sm:p-8"
        >
          <div className="mb-8">
            <h3 className="text-2xl font-bold text-gray-900 mb-4">
              Your Favorites
            </h3>
            {wishlistItems.length === 0 ? (
              <p className="text-gray-600 text-center">
                Your wishlist is empty.{" "}
                <NavLink
                  to="/"
                  className="text-green-600 hover:underline"
                  activeClassName="text-green-800"
                  aria-label="Continue shopping"
                >
                  Start exploring now!
                </NavLink>
              </p>
            ) : (
              <div className="space-y-6">
                {wishlistItems.map((item) => (
                  <motion.div
                    key={item.id}
                    className="flex items-center border-b border-gray-200 pb-4 hover:bg-gray-50 transition-colors duration-300"
                    role="listitem"
                    whileHover={{ scale: 1.02 }}
                    tabIndex={0}
                    onKeyDown={(e) => {
                      if (e.key === "Enter" || e.key === " ") {
                        window.location.href = `/productInfo/${item.id}`;
                      }
                    }}
                  >
                    <div className="w-24 h-24 sm:w-32 sm:h-32 flex-shrink-0">
                      <img
                        src={item.image}
                        alt={item.alt}
                        className="w-full h-full object-contain rounded-lg"
                        loading="lazy"
                        onError={(e) => {
                          e.target.src = "https://via.placeholder.com/150?text=Image+Not+Found";
                        }}
                      />
                    </div>
                    <div className="ml-4 sm:ml-6  flex-1">
                      <NavLink
                        to={`/productInfo/${item.id}`}
                        className="text-lg font-semibold text-gray-900 hover:text-green-600"
                        activeClassName="text-green-800"
                        aria-label={`View details for ${item.name}`}
                      >
                        {item.name}
                      </NavLink>
                      <p className="text-gray-600 text-sm">
                        Category: {item.category}
                      </p>
                      <p className="text-green-600 font-bold">
                        ${item.price.toFixed(2)}
                      </p>
                    </div>
                  </motion.div>
                ))}
              </div>
            )}
          </div>

          <div className="flex flex-col sm:flex-row justify-between gap-4">
            <NavLink
              to="/"
              className="text-center bg-gray-200 jelly-hover text-gray-700 font-semibold py-3 px-6 rounded-lg hover:bg-gray-300 transition-colors duration-300"
              activeClassName="bg-gray-300"
              aria-label="Continue shopping"
            >
              Continue Shopping
            </NavLink>
            <NavLink
              to="/cart"
              className="text-center bg-green-600 jelly-hover text-white font-semibold py-3 px-6 rounded-lg hover:bg-green-700 transition-colors duration-300"
              activeClassName="bg-green-800"
              aria-label="View cart"
            >
              View Cart
            </NavLink>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Wishlist;