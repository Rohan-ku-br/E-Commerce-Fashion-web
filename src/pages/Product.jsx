import { NavLink } from "react-router-dom";
import { motion } from "framer-motion";

const Product = () => {
  const diffProduct = [
    {
      id: "productInfo",
      name: "Single Breasted Formal Blazer",
      image:
        "https://plus.unsplash.com/premium_photo-1661400600986-b7493240cae2?q=80&w=687&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      description:
        "A sleek, sustainable men's blazer crafted for formal elegance.",
      price: "$129.99",
    },
    {
      id: "productInfo",
      name: "Home & Kitchen Eco-Set",
      image:
        "https://images.unsplash.com/photo-1624988991840-2861588dbd6f?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      description: "Eco-friendly essentials to elevate your home experience.",
      price: "$74.99",
    },
    {
      id: "productInfo",
      name: "Women's Elegance Collection",
      image:
        "https://plus.unsplash.com/premium_photo-1673758905770-a62f4309c43c?q=80&w=687&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      description: "Eco-friendly women's wear with a touch of sophistication.",
      price: "$89.99",
    },
    {
      id: "productInfo",
      name: "Kids' Playwear",
      image:
        "https://plus.unsplash.com/premium_photo-1673356301514-2cad91907f74?q=80&w=687&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      description: "Durable and sustainable clothing for active little ones.",
      price: "$49.99",
    },
    {
      id: "productInfo",
      name: "Natural Beauty Essentials",
      image:
        "https://plus.unsplash.com/premium_photo-1690349404224-53f94f20df8f?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      description: "Organic beauty products for a radiant, natural glow.",
      price: "$34.99",
    },
    {
      id: "productInfo",
      name: "Home & Kitchen Eco-Set",
      image:
        "https://media.istockphoto.com/id/1269573617/photo/eco-friendly-cutlery-consisting-of-plates-bowls-trays-wooden-spoon-biodegradable-cutlery-for.jpg?s=2048x2048&w=is&k=20&c=nuGIqfYLj2qLQ9rGu3_teDYkPA2aajEY_2SpLBYw7Ds=",
      description: "Eco-friendly essentials to elevate your home experience.",
      price: "$74.99",
    },
    {
      id: "productInfo",
      name: "Home & Kitchen Eco-Set",
      image:
        "https://images.unsplash.com/photo-1567721913486-6585f069b332?q=80&w=688&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      description: "Eco-friendly essentials to elevate your home experience.",
      price: "$74.99",
    },
    {
      id: "productInfo",
      name: "Home & Kitchen Eco-Set",
      image:
        "https://images.unsplash.com/photo-1527719327859-c6ce80353573?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MjR8fHRzaGlydHxlbnwwfHwwfHx8MA%3D%3D",
      description: "Eco-friendly essentials to elevate your home experience.",
      price: "$74.99",
    },
    {
      id: "productInfo",
      name: "Home & Kitchen Eco-Set",
      image:
        "https://images.unsplash.com/photo-1598554747436-c9293d6a588f?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8d29tZW4lMjBqZWFuc3xlbnwwfHwwfHx8MA%3D%3D",
      description: "Eco-friendly essentials to elevate your home experience.",
      price: "$74.99",
    },
    {
      id: "productInfo",
      name: "Home & Kitchen Eco-Set",
      image:
        "https://images.unsplash.com/photo-1741943716275-2eaf11f4e918?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NzV8fHdvbWVuJTIwamVhbnN8ZW58MHx8MHx8fDA%3D",
      description: "Eco-friendly essentials to elevate your home experience.",
      price: "$74.99",
    },

    {
      id: "productInfo",
      name: "Home & Kitchen Eco-Set",
      image:
        "https://images.unsplash.com/photo-1571115637329-40ce3401d0f3?q=80&w=880&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      description: "Eco-friendly essentials to elevate your home experience.",
      price: "$74.99",
    },

    {
      id: "productInfo",
      name: "Home & Kitchen Eco-Set",
      image:
        "https://images.unsplash.com/photo-1579892876770-461a88bd87df?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      description: "Eco-friendly essentials to elevate your home experience.",
      price: "$74.99",
    },
  ];

  return (
    <section className="py-24 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl sm:text-5xl font-extrabold text-gray-900 mb-6 tracking-tight">
            Shop Sustainable
          </h2>
          <p className="text-gray-700 max-w-3xl mx-auto text-lg sm:text-xl leading-relaxed">
            Discover a world of eco-friendly products tailored to your lifestyle.
          </p>
        </div>
        <div className="grid grid-cols-2 sm:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-12">
          {diffProduct.map((product) => (
            <motion.div
              key={product.id}
              initial={{ opacity: 0, y: 60 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0, ease: "easeOut" }}
              className="relative bg-white rounded-2xl shadow-xl overflow-hidden hover:shadow-2xl hover:border-2 hover:border-green-300 transition-all duration-300 min-h-[350px] sm:min-h-[400px] focus:outline-none focus:ring-2 focus:ring-green-400"
              whileHover={{ scale: 1.03 }}
              onClick={() => (window.location.href = `/products/${product.id}`)}
              tabIndex={0}
              role="link"
              onKeyDown={(e) => {
                if (e.key === "Enter" || e.key === " ") {
                  window.location.href = `/products/${product.id}`;
                }
              }}
            >
              <div className="relative w-full aspect-[4/3] p-4 overflow-hidden border-b border-gray-200 bg-gray-50">
                <img
                  src={product.image}
                  alt={`Image of ${product.name}`}
                  className="w-full h-full object-contain transition-transform duration-300 hover:scale-105"
                  loading="lazy"
                  onError={(e) => {
                    e.target.src = "https://via.placeholder.com/400x300?text=Product+Not+Found";
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
                    $150.00
                  </span>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Product;
