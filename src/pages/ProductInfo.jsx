import { useParams, Link } from "react-router-dom";
import { motion } from "framer-motion";
import { useState } from "react";

// Sample men's fashion product data (ideally, this should be imported from a shared file or API)
const menProducts = [
  {
    id: 1,
    name: "Men's Classic Shirt",
    description: "A timeless cotton shirt perfect for formal and casual occasions.",
    price: "$29.99",
    oldPrice: "$50.00",
    image: "https://images.unsplash.com/photo-1596755094514-f87e34085b2c?auto=format&fit=crop&w=600&q=80",
    alt: "Men's Classic Shirt",
  },
  {
    id: 2,
    name: "Slim Fit Jeans",
    description: "Comfortable and stylish denim jeans for everyday wear.",
    price: "$49.99",
    oldPrice: "$80.00",
    image: "https://images.unsplash.com/photo-1602293589930-45aad59ba90c?auto=format&fit=crop&w=600&q=80",
    alt: "Slim Fit Jeans",
  },
  {
    id: 3,
    name: "Leather Jacket",
    description: "Premium leather jacket for a bold and rugged look.",
    price: "$99.99",
    oldPrice: "$150.00",
    image: "https://images.unsplash.com/photo-1551028719-6e3c8b6b6f9b?auto=format&fit=crop&w=600&q=80",
    alt: "Leather Jacket",
  },
  {
    id: 4,
    name: "Casual Sneakers",
    description: "Versatile sneakers for comfort and style all day long.",
    price: "$59.99",
    oldPrice: "$100.00",
    image: "https://images.unsplash.com/photo-1549298916-b41d501d3772?auto=format&fit=crop&w=600&q=80",
    alt: "Casual Sneakers",
  },
  {
    id: 5,
    name: "Men's Classic Shirt",
    description: "A timeless cotton shirt perfect for formal and casual occasions.",
    price: "$29.99",
    oldPrice: "$50.00",
    image: "https://images.unsplash.com/photo-1596755094514-f87e34085b2c?auto=format&fit=crop&w=600&q=80",
    alt: "Men's Classic Shirt",
  },
  {
    id: 6,
    name: "Slim Fit Jeans",
    description: "Comfortable and stylish denim jeans for everyday wear.",
    price: "$49.99",
    oldPrice: "$80.00",
    image: "https://images.unsplash.com/photo-1602293589930-45aad59ba90c?auto=format&fit=crop&w=600&q=80",
    alt: "Slim Fit Jeans",
  },
  {
    id: 7,
    name: "Leather Jacket",
    description: "Premium leather jacket for a bold and rugged look.",
    price: "$99.99",
    oldPrice: "$150.00",
    image: "https://images.unsplash.com/photo-1551028719-6e3c8b6b6f9b?auto=format&fit=crop&w=600&q=80",
    alt: "Leather Jacket",
  },
  {
    id: 8,
    name: "Casual Sneakers",
    description: "Versatile sneakers for comfort and style all day long.",
    price: "$59.99",
    oldPrice: "$100.00",
    image: "https://images.unsplash.com/photo-1549298916-b41d501d3772?auto=format&fit=crop&w=600&q=80",
    alt: "Casual Sneakers",
  },
  {
    id: 9,
    name: "Men's Classic Shirt",
    description: "A timeless cotton shirt perfect for formal and casual occasions.",
    price: "$29.99",
    oldPrice: "$50.00",
    image: "https://images.unsplash.com/photo-1596755094514-f87e34085b2c?auto=format&fit=crop&w=600&q=80",
    alt: "Men's Classic Shirt",
  },
  {
    id: 10,
    name: "Slim Fit Jeans",
    description: "Comfortable and stylish denim jeans for everyday wear.",
    price: "$49.99",
    oldPrice: "$80.00",
    image: "https://images.unsplash.com/photo-1602293589930-45aad59ba90c?auto=format&fit=crop&w=600&q=80",
    alt: "Slim Fit Jeans",
  },
  {
    id: 11,
    name: "Leather Jacket",
    description: "Premium leather jacket for a bold and rugged look.",
    price: "$99.99",
    oldPrice: "$150.00",
    image: "https://images.unsplash.com/photo-1551028719-6e3c8b6b6f9b?auto=format&fit=crop&w=600&q=80",
    alt: "Leather Jacket",
  },
  {
    id: 12,
    name: "Casual Sneakers",
    description: "Versatile sneakers for comfort and style all day long.",
    price: "$59.99",
    oldPrice: "$100.00",
    image: "https://images.unsplash.com/photo-1549298916-b41d501d3772?auto=format&fit=crop&w=600&q=80",
    alt: "Casual Sneakers",
  },
  {
    id: 13,
    name: "Men's Classic Shirt",
    description: "A timeless cotton shirt perfect for formal and casual occasions.",
    price: "$29.99",
    oldPrice: "$50.00",
    image: "https://images.unsplash.com/photo-1596755094514-f87e34085b2c?auto=format&fit=crop&w=600&q=80",
    alt: "Men's Classic Shirt",
  },
  {
    id: 14,
    name: "Slim Fit Jeans",
    description: "Comfortable and stylish denim jeans for everyday wear.",
    price: "$49.99",
    oldPrice: "$80.00",
    image: "https://images.unsplash.com/photo-1602293589930-45aad59ba90c?auto=format&fit=crop&w=600&q=80",
    alt: "Slim Fit Jeans",
  },
  {
    id: 15,
    name: "Leather Jacket",
    description: "Premium leather jacket for a bold and rugged look.",
    price: "$99.99",
    oldPrice: "$150.00",
    image: "https://images.unsplash.com/photo-1551028719-6e3c8b6b6f9b?auto=format&fit=crop&w=600&q=80",
    alt: "Leather Jacket",
  },
  {
    id: 16,
    name: "Casual Sneakers",
    description: "Versatile sneakers for comfort and style all day long.",
    price: "$59.99",
    oldPrice: "$100.00",
    image: "https://images.unsplash.com/photo-1549298916-b41d501d3772?auto=format&fit=crop&w=600&q=80",
    alt: "Casual Sneakers",
  },
];

const ProductInfo = () => {
  const { id } = useParams(); // Get product ID from URL
  const product = menProducts.find((p) => p.id === parseInt(id));
  
  // State for handling button interactions (e.g., adding to cart)
  const [isAddedToCart, setIsAddedToCart] = useState(false);

  // Handle Add to Cart
  const handleAddToCart = () => {
    setIsAddedToCart(true);
    // Add your cart logic here (e.g., update context or local storage)
    setTimeout(() => setIsAddedToCart(false), 2000); // Reset button state after 2s
  };

  // Handle Buy Now
  const handleBuyNow = () => {
    // Add your buy now logic here (e.g., redirect to checkout)
    console.log(`Buying ${product.name}`);
  };

  // If product not found
  if (!product) {
    return (
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5 }}
        className="min-h-screen bg-gray-50 flex items-center justify-center"
      >
        <div className="text-center">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">Product Not Found</h2>
          <p className="text-gray-600 text-xl mb-6">The product you're looking for doesn't exist.</p>
          <Link
            to="/men"
            className="inline-block jelly-hover bg-blue-500 text-white px-6 py-3 rounded-lg hover:bg-blue-600 transition-colors duration-300"
          >
            Back to the Collection
          </Link>
        </div>
      </motion.div>
    );
  }

  return (
    <motion.section
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
      className="min-h-screen bg-gray-50 py-16 px-4 sm:px-6 lg:px-8"
    >
      <div className="container mx-auto max-w-5xl">
        <Link
          to="/men"
          className="inline-block text-blue-500 hover:text-blue-600 font-medium mb-6 transition-colors duration-300"
        >
          &larr; Back to the Collection
        </Link>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12">
          {/* Product Image */}
          <motion.div
            initial={{ x: -50, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ duration: 0.6, ease: "easeOut" }}
            className="relative w-full aspect-[4/3] rounded-2xl overflow-hidden shadow-lg"
          >
            <img
              src={product.image}
              alt={product.alt}
              className="w-full h-full object-contain bg-gray-100"
              loading="lazy"
              onError={(e) => {
                e.target.src = "https://via.placeholder.com/600x450?text=Product+Not+Found";
                console.warn(`Failed to load image: ${product.image}`);
              }}
            />
            <motion.div
              className="absolute inset-0 bg-black/10 flex items-center justify-center opacity-0 hover:opacity-100 transition-opacity duration-300"
              whileHover={{ opacity: 1 }}
            >
              <span className="text-white text-lg font-medium">Zoom In</span>
            </motion.div>
          </motion.div>

          {/* Product Details */}
          <motion.div
            initial={{ x: 50, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ duration: 0.6, ease: "easeOut", delay: 0.2 }}
            className="flex flex-col justify-between"
          >
            <div>
              <h1 className="text-3xl sm:text-4xl font-extrabold text-gray-900 mb-4">
                {product.name}
              </h1>
              <p className="text-gray-600 text-lg sm:text-xl mb-6 leading-relaxed">
                {product.description}
              </p>
              <div className="flex items-center gap-4 mb-6">
                <span className="text-2xl sm:text-3xl font-bold text-green-600">
                  {product.price}
                </span>
                <span className="text-lg text-gray-500 line-through">{product.oldPrice}</span>
              </div>
            </div>
            <div className="flex flex-col sm:flex-row gap-4">
              <motion.button
                onClick={handleBuyNow}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="bg-blue-500 text-white px-6 py-3 rounded-lg font-medium hover:bg-blue-600 transition-colors duration-300"
              >
                Buy Now
              </motion.button>
              <motion.button
                onClick={handleAddToCart}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className={`${
                  isAddedToCart ? "bg-green-500" : "bg-gray-800"
                } text-white px-6 py-3 rounded-lg font-medium hover:bg-gray-900 transition-colors duration-300 flex items-center justify-center`}
                disabled={isAddedToCart}
              >
                {isAddedToCart ? (
                  <>
                    <svg
                      className="w-5 h-5 mr-2"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M5 13l4 4L19 7"
                      />
                    </svg>
                    Added to Cart
                  </>
                ) : (
                  "Add to Cart"
                )}
              </motion.button>
            </div>
          </motion.div>
        </div>
      </div>
    </motion.section>
  );
};

export default ProductInfo;