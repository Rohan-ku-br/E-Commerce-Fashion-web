import React, { useEffect, useState } from "react";
import { useAnimation } from "framer-motion";
import ProductFeatures from "./ProductFeatures";
import Brand from "./Brand";
import Product from "./Product";
import SalePoster from "./SalePoster";
import FounderProfile from "./FounderBio";

const Home = () => {
  const [isHovered, setIsHovered] = useState(false);
  const controls = useAnimation();

  // Animation controls for rotating items
  useEffect(() => {
    if (isHovered) {
      controls.start({
        rotate: 0,
      });
    } else {
      controls.start({
        rotate: 360,
        transition: { duration: 10, repeat: Infinity, ease: "linear" },
      });
    }
  }, [isHovered, controls]);

  // const navItems = [
  //   {
  //     to: '/men',
  //     label: "Men",
  //     image:
  //       "https://images.unsplash.com/photo-1593032468001-4b0b08b8181b?q=80&w=2070&auto=format&fit=crop",
  //   },
  //   {
  //     to: '/women',
  //     label: "Women",
  //     image:
  //       "https://images.unsplash.com/photo-1583391733981-8b530b760f86?q=80&w=2070&auto=format&fit=crop",
  //   },
  //   {
  //     to: "/kids",
  //     label: "Kids",
  //     image:
  //       "https://images.unsplash.com/photo-1596627117747-8b9e159d7916?q=80&w=2070&auto=format&fit=crop",
  //   },
  //   {
  //     to: "/beauty",
  //     label: "Beauty",
  //     image:
  //       "https://images.unsplash.com/photo-1596462502278-27bfdc403348?q=80&w=2080&auto=format&fit=crop",
  //   },
  //   {
  //     to: "/home&kitchen",
  //     label: "Home & Kitchen",
  //     image:
  //       "https://images.unsplash.com/photo-1556911220-bff31c812dba?q=80&w=2068&auto=format&fit=crop",
  //   },
  // ];

  return (
    <div className=" bg-gray-50 relative">
      <SalePoster />
      
      <ProductFeatures />
      <Brand />
      <Product />
      <FounderProfile/>
        

    </div>
  );
};

export default Home;
