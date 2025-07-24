import { motion } from "framer-motion";
import { NavLink } from "react-router-dom";

const TrackOrder = () => {
  return (
    <section className="py-24 bg-gray-50">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl sm:text-5xl font-extrabold text-gray-900 mb-6 tracking-tight">
            Track Your Order
          </h2>
          <p className="text-gray-700 max-w-3xl mx-auto text-lg sm:text-xl leading-relaxed">
            Enter your order details to check the status of your delivery.
          </p>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 60 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, ease: "easeOut" }}
          className="max-w-2xl mx-auto bg-white rounded-2xl shadow-xl p-6 sm:p-8" >
          <div className="mb-8">
            <h3 className="text-3xl font-bold text-gray-900 mb-4">
              Order Details
            </h3>
            <div className="space-y-6">
              <div>
                <label
                  htmlFor="orderId"
                  className="block text-lg font-medium text-gray-700 mb-2"
                >
                  Order ID
                </label>
                <input
                  type="text"
                  id="orderId"
                  name="orderId"
                  value="ORD123456789"
                  readOnly
                  className="w-full px-4 py-3 rounded-lg border border-gray-300 bg-gray-100 text-gray-600 cursor-not-allowed"
                  placeholder="Enter your order ID"
                  aria-describedby="orderId-description"
                />
                <p id="orderId-description" className="text-lg text-gray-500 mt-1">
                  Your order ID can be found in your confirmation email.
                </p>
              </div>
              <div>
                <label
                  htmlFor="email"
                  className="block text-lg font-medium text-gray-700 mb-2"
                >
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value="customer@example.com"
                  readOnly
                  className="w-full px-4 py-3 rounded-lg border border-gray-300 bg-gray-100 text-gray-600 cursor-not-allowed"
                  placeholder="Enter your email"
                  aria-describedby="email-description"
                />
                <p id="email-description" className="text-lg text-gray-500 mt-1">
                  Use the email associated with your order.
                </p>
              </div>
            </div>
          </div>

         
          <div>
            <h3 className="text-3xl font-bold text-gray-900 mb-4">
              Order Status
            </h3>
            <div className="bg-green-100 text-green-700 p-4 rounded-lg">
              <p className="text-2xl font-semibold">Order Shipped</p>
              <p className="text-lg mt-1">
                Your order has been shipped on July 22, 2025, and is expected to arrive by July 27, 2025.
              </p>
              <p className="text-lg mt-2">
                Tracking Number:{" "}
                <NavLink
                  to="/track-details/ORD123456789"
                  className="text-green-600 hover:underline"
                  activeClassName="text-green-800"
                  aria-label="View tracking details for order ORD123456789"
                >
                  TRK987654321
                </NavLink>
              </p>
            </div>
            <div className="mt-6 text-gray-600">
              <p className="text-lg">
                For further assistance, contact us at{" "}
                <NavLink
                  to="/contact"
                  className="text-green-600 hover:underline"
                  activeClassName="text-green-800"
                  aria-label="Visit contact page"
                >
                  support@ecoshop.com
                </NavLink>{" "}
                or call{" "}
                <a
                  href="tel:+1-800-555-1234"
                  className="text-green-600 hover:underline"
                  aria-label="Phone support"
                >
                  +1-800-555-1234
                </a>.
              </p>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default TrackOrder;
