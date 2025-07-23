import { useState } from "react";
import { NavLink } from "react-router-dom";
import {
  MagnifyingGlassIcon,
  HeartIcon,
  ShoppingCartIcon,
  UserIcon,
  Bars3Icon,
  XMarkIcon,
} from "@heroicons/react/24/solid";
import { motion } from "framer-motion";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <div className="w-full fixed bg-gray-300  flex justify-between py-5 px-4 sm:px-8 lg:px-16 items-center  z-10 shadow-xl">
      {/* Logo */}
      <div className="flex items-center gap-3 jelly-hover">
        <NavLink
          to="/"
          className="flex items-center gap-3 hover:text-purple-600 transition-colors duration-300"
        >
          <motion.img
            src="/logo.png"
            alt="Logo"
            className="w-10 h-10"
            initial={{ rotate: -10, opacity: 0 }}
            animate={{ rotate: 0, opacity: 1 }}
            transition={{
              type: "spring",
              stiffness: 200,
              damping: 10,
              duration: 0.6,
            }}
          />

          <motion.span
            className="text-2xl sm:text-3xl font-bold bg-gradient-to-r from-purple-700 via-pink-600 to-red-400 text-transparent bg-clip-text tracking-wide drop-shadow-sm"
            initial={{ opacity: 0, y: -6 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2, duration: 0.6, ease: "easeOut" }}
          >
            Deenbandhu
          </motion.span>
        </NavLink>
      </div>

      {/* Hamburger Menu Button for Mobile/Tablet */}
      <button
        className="lg:hidden text-black focus:outline-none"
        onClick={toggleMenu}
        aria-label="Toggle menu"
      >
        {isMenuOpen ? (
          <XMarkIcon className="h-8 w-8" />
        ) : (
          <Bars3Icon className="h-8 w-8" />
        )}
      </button>

      <div className="hidden lg:flex gap-10 text-black z-10">
        <NavLink
          className={(e) =>
            e.isActive ? "text-blue-500" : "hover:text-blue-400"
          }
          to="/men"
        >
          Men
        </NavLink>
        <NavLink
          className={(e) =>
            e.isActive ? "text-blue-500" : "hover:text-blue-400"
          }
          to="/women"
        >
          Women
        </NavLink>
        <NavLink
          className={(e) =>
            e.isActive ? "text-blue-500" : "hover:text-blue-400"
          }
          to="/kids"
        >
          Kids
        </NavLink>
        <NavLink
          className={(e) =>
            e.isActive ? "text-blue-500" : "hover:text-blue-400"
          }
          to="/beauty"
        >
          Beauty
        </NavLink>
        <NavLink
          className={(e) =>
            e.isActive ? "text-blue-500" : "hover:text-blue-400"
          }
          to="/home&kitchen"
        >
          Home & Kitchen
        </NavLink>
      </div>

      {/* Right Side Icons - Desktop */}
      <div className="hidden lg:flex gap-4 items-center">
        <motion.form
          className="relative jelly-hover"
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{
            opacity: 1,
            scale: 1,
            transition: { type: "spring", stiffness: 100, damping: 10 },
          }}
          transition={{ duration: 0.8 }}
        >
          <motion.input
            type="text"
            placeholder="Search products..."
            className="w-full pl-12 pr-6 py-2 sm:py-3 bg-white text-lg sm:text-xl rounded-full border border-gray-300 focus:border-purple-500 focus:ring-2 focus:ring-purple-200 transition-all duration-300 shadow-sm hover:shadow-lg"
            whileFocus={{
              scale: 1.05,
              borderColor: "#a855f7",
              boxShadow: "0 0 0 4px rgba(168, 85, 247, 0.2)",
            }}
            transition={{ duration: 0.3, type: "spring", stiffness: 120 }}
          />
          <motion.div
            className="absolute left-4 top-1/2 transform -translate-y-1/2"
            initial={{ opacity: 0, rotate: -180 }}
            animate={{ opacity: 1, rotate: 0 }}
            whileFocus={{
              rotate: [0, 15, 0],
              transition: {
                duration: 0.5,
                repeat: Infinity,
                repeatType: "reverse",
              },
            }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <MagnifyingGlassIcon className="h-5 w-5 sm:h-6 sm:w-6 text-gray-600 hover:text-gray-800 transition-colors duration-200" />
          </motion.div>
        </motion.form>
        <NavLink to="/wishlist" className="jelly-hover">
          <HeartIcon className="h-7 w-7" />
        </NavLink>

        <NavLink to="/auth" className="jelly-hover">
          <UserIcon className="h-7 w-7" />
        </NavLink>

        <NavLink
          to="/cart"
          className="flex items-center jelly-hover bg-blue-400 text-white px-4 py-2 rounded-lg hover:bg-blue-500 transition-all"
        >
          <ShoppingCartIcon className="h-5 w-5 mr-2" />
          <span>0</span>
        </NavLink>
      </div>

      {/* Mobile/Tablet Menu */}
      <div
        className={`fixed top-0 right-0 h-full w-64 bg-gray-300 z-20 transform transition-transform duration-300 ease-in-out ${
          isMenuOpen ? "translate-x-0" : "translate-x-full"
        } lg:hidden`}
      >
        <div className="flex flex-col p-5 gap-6">
          <button
            className="self-end text-black"
            onClick={toggleMenu}
            aria-label="Close menu"
          >
            <XMarkIcon className="h-8 w-8" />
          </button>

          <form className="relative">
            <input
              type="text"
              placeholder="Search products..."
              className="w-full pl-10 pr-4 py-2 bg-gray-100 text-xl rounded-full border border-gray-200 focus:border-blue-500 focus:ring-1 focus:ring-blue-500 transition-colors"
            />
            <MagnifyingGlassIcon className="h-5 w-5 text-gray-400 absolute left-3 top-1/2 transform -translate-y-1/2" />
          </form>

          <NavLink
            className={(e) =>
              e.isActive ? "text-blue-500" : "hover:text-blue-400"
            }
            to="/men"
            onClick={toggleMenu}
          >
            Men
          </NavLink>
          <NavLink
            className={(e) =>
              e.isActive ? "text-blue-500" : "hover:text-blue-400"
            }
            to="/women"
            onClick={toggleMenu}
          >
            Women
          </NavLink>
          <NavLink
            className={(e) =>
              e.isActive ? "text-blue-500" : "hover:text-blue-400"
            }
            to="/kids"
            onClick={toggleMenu}
          >
            Kids
          </NavLink>
          <NavLink
            className={(e) =>
              e.isActive ? "text-blue-500" : "hover:text-blue-400"
            }
            to="/beauty"
            onClick={toggleMenu}
          >
            Beauty
          </NavLink>
          <NavLink
            className={(e) =>
              e.isActive ? "text-blue-500" : "hover:text-blue-400"
            }
            to="/home&kitchen"
            onClick={toggleMenu}
          >
            Home & Kitchen
          </NavLink>

          <NavLink to="/wishlist" className="jelly-hover" onClick={toggleMenu}>
            <HeartIcon className="h-7 w-7" />
          </NavLink>

          <NavLink to="/auth" className="jelly-hover" onClick={toggleMenu}>
            <UserIcon className="h-7 w-7" />
          </NavLink>

          <NavLink
            to="/cart"
            className="flex items-center jelly-hover bg-blue-400 text-white px-4 py-2 rounded-lg hover:bg-blue-500 transition-all"
            onClick={toggleMenu}
          >
            <ShoppingCartIcon className="h-5 w-5 mr-2" />
            <span>0</span>
          </NavLink>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
