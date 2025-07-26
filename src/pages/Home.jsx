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
