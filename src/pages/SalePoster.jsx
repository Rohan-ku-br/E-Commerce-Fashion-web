import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";

// Sample sale poster data (replace with your actual poster images)
const salePosters = [
  {
    id: 1,
    image: "https://images.meesho.com/images/marketing/1752653288288.webp",
    alt: "Summer Sale Poster",
    title: "Summer Sale",
    description: "Up to 50% off on all summer collections!",
  },
  {
    id: 2,
    image: "https://images-eu.ssl-images-amazon.com/images/G/31/sthaneka/Alphonsa/desktop/Unrec/high-res_1._CB789029460_.jpg",
    alt: "Winter Clearance Poster",
    title: "Winter Clearance",
    description: "Grab the best deals before they're gone!",
  },
  {
    id: 3,
    image: "https://images-eu.ssl-images-amazon.com/images/G/31/img21/MA2025/GW/BAU/Unrec/PC/934044815._CB551384116_.jpg",
    alt: "Festive Offers Poster",
    title: "Festive Offers",
    description: "Exclusive discounts for the festive season!",
  },
];

const posters = [...salePosters, ...salePosters];

const SalePosterSwiper = () => {
  console.log("SalePosterSwiper rendered"); 
  return (
    <div className="w-full max-w-full py-5 px-4 lg:pt-25 sm:px-6 lg:px-8 bg-gray-50">
      
      <Swiper
        modules={[Pagination, Autoplay]}
        spaceBetween={20}
        slidesPerView={1}
        loop={true}
        autoplay={{
          delay: 3000,
          disableOnInteraction: false,
          pauseOnMouseEnter: true,
        }}
        pagination={{ clickable: true, dynamicBullets: true }}
        className="w-full"
        onSwiper={(swiper) => console.log("Swiper initialized")} 
        onSlideChange={() => console.log("Slide changed")}
      >
        {posters.map((poster) => (
          <SwiperSlide key={`poster-${poster.id}`}>
            <div className="relative overflow-hidden h-[400px]">
              <img
                src={poster.image}
                alt={poster.alt}
                className="w-full h-full max-w-full object-contain"
                onLoad={() => console.log(`Image loaded: ${poster.image}`)} 
                onError={(e) => {
                  e.target.src = "https://via.placeholder.com/1350x500?text=Image+Not+Found";
                  console.warn(`Failed to load image: ${poster.image}`);
                }}
              />
            
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default SalePosterSwiper;