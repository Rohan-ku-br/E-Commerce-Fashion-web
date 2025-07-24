import { motion } from "framer-motion";
import { NavLink } from "react-router-dom";
const ProductFeatures = () => {
  const categories = [
    {
      id: "men",
      name: "Men",
      image:
        "https://images.unsplash.com/photo-1516257984-b1b4d707412e?auto=format&fit=crop&q=80&w=500",
      description: "Shop sustainable men's fashion",
    },
    {
      id: "women",
      name: "Women",
      image:
        "https://plus.unsplash.com/premium_photo-1690349404224-53f94f20df8f?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      description: "Discover eco-friendly women's wear",
    },
    {
      id: "kids",
      name: "Kids",
      image:
        "https://images.unsplash.com/photo-1503944583220-79d8926ad5e2?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Njl8fGtpZHN8ZW58MHx8MHx8fDA%3D",
      description: "Sustainable fashion for little ones",
    },
    {
      id: "beauty",
      name: "Beauty",
      image:
        "https://images.unsplash.com/photo-1612817288484-6f916006741a?auto=format&fit=crop&q=80&w=500",
      description: "Natural and organic beauty products",
    },
    {
      id: "home&kitchen",
      name: "Home & Kitchen",
      image:
        "https://images.unsplash.com/photo-1556911220-bff31c812dba?auto=format&fit=crop&q=80&w=500",
      description: "Eco-friendly home essentials",
    },
  ];

  return (
    <section className="py-5 bg-gray-50 ">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">
            Shop by Category
          </h2>
          <p className="text-gray-600 text-xl max-w-2xl mx-auto">
            Explore our wide range of sustainable products across different
            categories
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {categories.map((category) => (
            <motion.div
              key={category.id}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="group relative overflow-hidden rounded-lg shadow-lg aspect-[4/3]"
            >
              <img
                src={category.image}
                alt={category.name}
                className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-500"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-black/30 flex flex-col justify-end p-6 text-white">
                <h3 className="text-2xl font-bold mb-2">{category.name}</h3>
                <p className="text-lg mb-4 opacity-90">
                  {category.description}
                </p>
                <NavLink
                  to={`/${category.id}`}
                  className="inline-block bg-white/20 backdrop-blur-sm text-white px-4 py-2 rounded-md hover:bg-white/30 transition-colors duration-300 jelly-hover"
                >
                  Shop Now
                </NavLink>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProductFeatures;
