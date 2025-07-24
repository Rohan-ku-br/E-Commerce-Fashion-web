import { useState, useEffect } from "react";
import { NavLink } from "react-router-dom";
import { motion } from "framer-motion";

const womenProducts = [
  {
    id: 1,
    name: "Fabfairy Women Viscose Rayon Kurta Pant Dupatta Set",
    description: "A timeless cotton shirt perfect for formal and casual occasions.",
    price: "$29.99",
    oldPrice: "$50.00",
    image: "https://images.meesho.com/images/products/441070939/rzuyp_512.avif?width=512",
    alt: "Women's Classic Shirt",
  },
  {
    id: 2,
    name: "KURTI",
    description: "Comfortable and stylish denim jeans for everyday wear.",
    price: "$49.99",
    oldPrice: "$80.00",
    image: "https://images.meesho.com/images/products/191005346/mocgn_512.avif?width=360",
    alt: "Slim Fit Jeans",
  },
  {
    id: 3,
    name: "Rayon Printed Kurta Set With Dupatta",
    description: "Premium leather jacket for a bold and rugged look.",
    price: "$99.99",
    oldPrice: "$150.00",
    image: "https://images.meesho.com/images/products/519996287/y5mid_512.avif?width=512",
    alt: "Leather Jacket",
  },
  {
    id: 4,
    name: "Casual Sneakers",
    description: "Versatile sneakers for comfort and style all day long.",
    price: "$59.99",
    oldPrice: "$100.00",
    image: "https://images.meesho.com/images/products/397953982/lq6a2_512.avif?width=512",
    alt: "Casual Sneakers",
  },
];

const Women = () => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        setProducts(womenProducts);
        console.log("Products loaded:", womenProducts); 
      } catch (error) {
        console.error("Error fetching men's products:", error);
      }
    };
    fetchProducts();
  }, []);

  return (
    <section className="py-24 bg-gray-50">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl sm:text-5xl font-extrabold text-gray-900 mb-6 tracking-tight">
            Men's Fashion Collection
          </h2>
          <p className="text-gray-700 max-w-3xl mx-auto text-lg sm:text-xl leading-relaxed">
            Discover stylish and high-quality men's fashion tailored to your lifestyle.
          </p>
        </div>
        {products.length === 0 ? (
          <p className="text-center text-gray-600">Loading products...</p>
        ) : (
          <div className="grid grid-cols-2 sm:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-12">
            {products.map((product) => (
              <motion.div
                key={product.id}
                initial={{ opacity: 0, y: 60 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0, ease: "easeOut" }}
                className="relative bg-white rounded-2xl shadow-xl overflow-hidden hover:shadow-2xl hover:border-2 hover:border-green-300 transition-all duration-300 min-h-[350px] sm:min-h-[400px] focus:outline-none focus:ring-2 focus:ring-green-400"
                whileHover={{ scale: 1.03 }}
                tabIndex={0}
                role="link"
                onKeyDown={(e) => {
                  if (e.key === "Enter" || e.key === " ") {
                    window.location.href = `/product/${product.id}`;
                  }
                }}
              >
                <NavLink to={`/product/${product.id}`} className="block">
                  <div className="relative w-full aspect-[4/3] p-4 overflow-hidden border-b border-gray-200 bg-gray-50">
                    <img
                      src={product.image}
                      alt={`Image of ${product.name}`}
                      className="w-full h-full object-contain transition-transform duration-300 hover:scale-105"
                      loading="lazy"
                      onLoad={() => console.log(`Image loaded: ${product.image}`)} 
                      onError={(e) => {
                        e.target.src = "https://via.placeholder.com/400x300?text=Product+Not+Found";
                        console.warn(`Failed to load image: ${product.image}`);
                      }}
                    />
                    <div className="absolute inset-0 bg-black/10 flex items-center justify-center opacity-0 hover:opacity-100 transition-opacity duration-300">
                      <span className="text-white text-sm sm:text-base font-medium">
                        View Details
                      </span>
                    </div>
                  </div>
                  <div className="p-4 sm:p-6 flex flex-col justify-between flex-grow">
                    <div>
                      <h3 className="text-base sm:text-xl font-bold text-gray-900 mb-2 line-clamp-1">
                        {product.name}
                      </h3>
                      <p className="text-gray-600 text-sm sm:text-base mb-4 line-clamp-2">
                        {product.description}
                      </p>
                    </div>
                    <div className="flex justify-between items-center">
                      <span className="text-base sm:text-lg font-bold text-green-600">
                        {product.price}
                      </span>
                      <span className="text-xs sm:text-sm text-gray-500 line-through">
                        {product.oldPrice}
                      </span>
                    </div>
                  </div>
                </NavLink>
              </motion.div>
            ))}
          </div>
        )}
      </div>
    </section>
  );
};

export default Women;
