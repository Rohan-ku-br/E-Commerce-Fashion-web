import { useState, useEffect } from "react";
import { NavLink } from "react-router-dom";
import { motion } from "framer-motion";

const Home_KitchenProducts = [
  {
    id: 1,
    name: "Ss knife set with chopping board",
    description:
      "Name : ss knife set with chopping board Color : Silver Material : Stainless Steel Net Quantity (N) : Pack Of 6 Product Breadth : 9 Cm Product Height : 1.5 Cm Product Length : 10 Cm Product Weight : 0.2 Type : Kitchen Knife Sets ss knife set with chopping board",
    price: "$29.99",
    oldPrice: "$50.00",
    image:
      "https://images.meesho.com/images/products/354643588/mmxek_512.avif?width=512",
    alt: "Knife ",
  },
  {
    id: 2,
    name: "Compact Chopper with Blades effortlessly Chopping Big Size Kitchen",
    description: "Chopper with Blades effortlessly Chopping Big Size Kitchen set with chopping board",
    price: "$49.99",
    oldPrice: "$80.00",
    image:
      "https://images.meesho.com/images/products/224092807/bjr0t_512.avif?width=512",
    alt: "compact Chopper",
  },
  {
    id: 3,
    name: "WINGER Combo of straight peeler and and 2 vegetable cutter ",
    description: "WINGER Combo of straight peeler and and 2 vegetable cutter 2 in 1 Vegetable & Fruit Multi Cutter & Peeler",
    price: "$99.99",
    oldPrice: "$150.00",
    image:
      "https://images.meesho.com/images/products/331337160/enuzv_512.avif?width=512",
    alt: "cutter",
  },
  {
    id: 4,
    name: "Trendy chopping board/cutting board/wood cutting board",
    description: "Trendy chopping board/cutting board/wood WINGER Combo of straight peeler and and 2 vegetable cutter 2 in 1 Vegetable & Fruit Multi Cutter & Peeler",
    price: "$59.99",
    oldPrice: "$100.00",
    image:
      "https://images.meesho.com/images/products/393940265/dwmqx_512.avif?width=512",
    alt: "cutting board",
  },
];

const Home_Kitchen = () => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        setProducts(Home_KitchenProducts);
        console.log("Products loaded:", Home_KitchenProducts); // Debugging
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
            Discover stylish and high-quality men's fashion tailored to your
            lifestyle.
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
                      onLoad={() =>
                        console.log(`Image loaded: ${product.image}`)
                      } // Debugging
                      onError={(e) => {
                        e.target.src =
                          "https://via.placeholder.com/400x300?text=Product+Not+Found";
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

export default Home_Kitchen;
