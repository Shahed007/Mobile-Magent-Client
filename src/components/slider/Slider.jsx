import { Swiper, SwiperSlide } from "swiper/react";
import ads1 from "../../assets/addvertise-ment/iPhone-15-color-variant.webp";
import ads2 from "../../assets/addvertise-ment/samsung-s23-ultra.webp";
import ads3 from "../../assets/addvertise-ment/xiomi-note-12.webp";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";

// import required modules
// import { Pagination } from "swiper/modules";

const items = [
  {
    title: "iPhone 15 color variant",
    img: ads1,
  },
  {
    title: "Samsung galaxy s23 color varian",
    img: ads2,
  },
  {
    title: "Xaiomi note 12 color variant",
    img: ads3,
  },
];

const Slider = () => {
  return (
    <div className="h-[200px] w-full lg:block hidden">
      <Swiper
        pagination={{
          clickable: true,
        }}
        modules={[]}
        className="h-full w-full"
      >
        {items.map(({ title, img }, idx) => (
          <SwiperSlide
            key={idx}
            className="h-full w-full relative "
          >
            <img className="h-full w-full " src={img} alt={title} />
            <h3 className="text-lg font-bold uppercase drop-shadow-lg absolute w-full top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 flex justify-center items-center">
              {title}
            </h3>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default Slider;
