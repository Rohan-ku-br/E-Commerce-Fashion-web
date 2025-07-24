import { motion } from "framer-motion";
import { NavLink } from "react-router-dom";

const Cart = () => {
  // Mock cart items for display purposes
  const cartItems = [
    {
      id: 1,
      name: "Leather jacket",
      price: 99.99,
      quantity: 1,
      image: "https://images.meesho.com/images/products/538291130/ekbjj_512.avif?width=512",
      alt: "Floral Midi Dress",
    },
    {
      id: 2,
      name: "High-Waisted Trousers",
      price: 49.99,
      quantity: 1,
      image: "https://images.meesho.com/images/products/503007534/bt8eo_512.avif?width=512",
      alt: "High-Waisted Trousers",
    },
  ];

  // Mock cart summary calculations
  const subtotal = cartItems.reduce((sum, item) => sum + item.price * item.quantity, 0);
  const shipping = 5.99;
  const total = subtotal + shipping;

  return (
    <section className="py-24 bg-gray-50">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl sm:text-5xl font-extrabold text-gray-900 mb-6 tracking-tight">
            Your Shopping Cart
          </h2>
          <p className="text-gray-700 max-w-3xl mx-auto text-lg sm:text-xl leading-relaxed">
            Review the items in your cart before proceeding to checkout.
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
              Cart Items
            </h3>
            {cartItems.length === 0 ? (
              <p className="text-gray-600 text-center">
                Your cart is empty.{" "}
                <NavLink
                  to="/"
                  className="text-green-600 hover:underline"
                  activeClassName="text-green-800"
                  aria-label="Continue shopping"
                >
                  Start shopping now!
                </NavLink>
              </p>
            ) : (
              <div className="space-y-6">
                {cartItems.map((item) => (
                  <div
                    key={item.id}
                    className="flex items-center border-b border-gray-200 pb-4"
                    role="listitem"
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
                    <div className="ml-4 sm:ml-6 flex-1">
                      <h4 className="text-2xl font-semibold text-gray-900">
                        {item.name}
                      </h4>
                      <p className="text-gray-600 text-lg">
                        Quantity: {item.quantity}
                      </p>
                      <p className="text-green-600 font-bold">
                        ${(item.price * item.quantity).toFixed(2)}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            )}
          </div>

          <div className="border-t border-gray-200 pt-6">
            <h3 className="text-2xl font-bold text-gray-900 mb-4">
              Order Summary
            </h3>
            <div className="space-y-4 text-gray-600">
              <div className="flex justify-between">
                <span>Subtotal</span>
                <span>${subtotal.toFixed(2)}</span>
              </div>
              <div className="flex justify-between">
                <span>Shipping</span>
                <span>${shipping.toFixed(2)}</span>
              </div>
              <div className="flex justify-between font-bold text-gray-900">
                <span>Total</span>
                <span>${total.toFixed(2)}</span>
              </div>
            </div>
            <div className="mt-6 flex flex-col sm:flex-row justify-between gap-4">
              <NavLink
                to="/"
                className="text-center jelly-hover bg-gray-300 text-gray-700 font-semibold py-3 px-6 rounded-lg hover:bg-gray-400 transition-colors duration-300"
                activeClassName="bg-gray-300"
                aria-label="Continue shopping"
              >
                Continue Shopping
              </NavLink>
              <NavLink
                to="/checkout"
                className="text-center jelly-hover bg-green-600 text-white font-semibold py-3 px-6 rounded-lg hover:bg-green-700 transition-colors duration-300"
                activeClassName="bg-green-800"
                aria-label="Proceed to checkout"
              >
                Proceed to Checkout
              </NavLink>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Cart;