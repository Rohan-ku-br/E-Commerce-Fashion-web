import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Autoplay, Virtual } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";

const baseBrands = [
  { name: "Nike", logo: "https://cdn-icons-png.freepik.com/128/732/732084.png" },
  { name: "US Polo", logo: "https://uspoloassn.in/cdn/shop/files/U.S.-Polo-Assn-Logo-1_bcf8b35c-d03e-4e5f-bd03-117dc39ac27b_600x.png?v=1748760171" },
  { name: "Derma Co", logo: "https://images.thedermaco.com/TheDermaCoLogo2-min.png" },
  { name: "Wow", logo: "https://www.buywow.in/images/buy_WOW_logo_cropped.svg" },
  { name: "Patanjali", logo: "https://www.patanjaliayurved.net/media/images/logo.svg" },
  { name: "Mamaearth", logo: "https://images.mamaearth.in/wysiwyg/mamaearth-logo.png?format=auto&fit=scale" },
  { name: "Wild Stone", logo: "https://www.wildstone.in/cdn/shop/files/Wild_Stone_Logo_973ee566-ce01-45db-8b37-628380b8d85b_200x@2x.png?v=1672557783" },
  { name: "Plum", logo: "https://plumgoodness.com/cdn/shop/files/RGB_Plum_Chemistry_Logo_2nd.png?v=1729503727&width=220" },
];

// Duplicate brands for seamless looping
const brands = [...baseBrands, ...baseBrands];

const Brand = () => {
  return (
    <div className="w-full py-12 px-4 sm:px-6 lg:px-8 bg-gray-50 min-h-[300px]">
      <h2 className="text-3xl font-bold text-center text-gray-800 mb-8">
        Our Brands
      </h2>
      <Swiper
        modules={[Pagination, Autoplay, Virtual]}
        spaceBetween={0}
        slidesPerView={1}
        breakpoints={{
          640: { slidesPerView: 2, spaceBetween: 0 },
          768: { slidesPerView: 3, spaceBetween: 0 },
          1024: { slidesPerView: 5, spaceBetween: 0 },
        }}
        loop={true}
        virtual
        autoplay={{
          delay: 2000,
          disableOnInteraction: false,
          pauseOnMouseEnter: true,
        }}
        pagination={{ clickable: true, dynamicBullets: true }}
        className="w-full"
        onSwiper={(swiper) => {
          // Check if autoplay is available before adding event listeners
          if (swiper.autoplay) {
            swiper.el.addEventListener("mouseenter", () => {
              swiper.autoplay.stop();
            });
            swiper.el.addEventListener("mouseleave", () => {
              swiper.autoplay.start();
            });
          } else {
            console.warn("Swiper Autoplay module is not initialized");
          }
        }}
      >
        {brands.map((brand, index) => (
          <SwiperSlide key={`${brand.name}-${index}`} virtualIndex={index}>
            <div className="flex justify-center items-center h-48 w-48 bg-gray-200 rounded-xl shadow-md transition-all duration-300 ease-in-out hover:scale-105 hover:shadow-xl hover:-translate-y-2 mx-auto">
              <img
                src={brand.logo}
                alt={brand.name}
                className="max-h-28 max-w-full h-auto w-auto object-contain p-4"
                onError={(e) => {
                  e.target.src = "https://via.placeholder.com/150?text=Error";
                  console.warn(`Failed to load image for ${brand.name}: ${brand.logo}`);
                }}
              />
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default Brand;