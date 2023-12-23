import img1 from "../../assets/slider/iphone-15-black-dimond.webp";
import img2 from "../../assets/slider/samsung-s23.avif";
import img3 from "../../assets/slider/xiaomi-12.webp";
import { Swiper, SwiperSlide } from "swiper/react";
import osIcon from "../../assets/icon/os.svg";

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

// import required modules
import { Navigation, Pagination } from "swiper/modules";

const slider = [
  {
    title: "iPhone 15 Pro Max",
    img: img1,
    back_camera: ["48MP Main", "12MP ultrawide"],
    front_camera: "12MP TrueDepth",
    battery: "4441mAh",
    ram: "12GB",
    chip: "A17 Bionic chip",
    storage: "1TB",
    os: "iOS 17",
    price: 1399,
  },
  {
    title: "Samsung Galaxy S23 Ultra",
    img: img2,
    back_camera: ["200MP main", "12MP ultrawide"],
    front_camera: "10MP front-facing",
    battery: "5000mAh",
    ram: "12GB",
    chip: "Snapdragon 8 Gen 2",
    storage: "1TB",
    os: "Android 13",
    price: 1199,
  },
  {
    title: "Xiaomi Redmi Note 12",
    img: img3,
    back_camera: ["50MP main", "8MP ultrawide"],
    front_camera: "13MP front-facing",
    battery: "5000mAh",
    ram: "8GB",
    chip: "Snapdragon 685",
    storage: "120GB",
    os: "Android 12",
    price: 179,
  },
];

const Exclusive = () => {
  return (
    <div className="h-full ">
      <Swiper
        navigation={true}
        pagination={(true, { clickable: true })}
        modules={[Navigation, Pagination]}
        className="h-full flex items-center"
      >
        {slider.map(
          (
            {
              img,
              title,
              price,
              back_camera,
              front_camera,
              battery,
              ram,
              storage,
              os,
              chip,
            },
            idx
          ) => (
            <SwiperSlide className="h-full w-full flex items-center" key={idx}>
              <div className="flex sm:flex-row flex-col-reverse h-full  gap-1 items-center justify-center">
                <div className="h-full flex-1 flex  mb-8 items-center ml-0 sm:ml-14">
                  <ul className="w-full flex-col gap-2">
                    <li className="flex  gap-2 items-center">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        strokeWidth={1.5}
                        stroke="currentColor"
                        className="w-8 h-8 "
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          d="M6.827 6.175A2.31 2.31 0 0 1 5.186 7.23c-.38.054-.757.112-1.134.175C2.999 7.58 2.25 8.507 2.25 9.574V18a2.25 2.25 0 0 0 2.25 2.25h15A2.25 2.25 0 0 0 21.75 18V9.574c0-1.067-.75-1.994-1.802-2.169a47.865 47.865 0 0 0-1.134-.175 2.31 2.31 0 0 1-1.64-1.055l-.822-1.316a2.192 2.192 0 0 0-1.736-1.039 48.774 48.774 0 0 0-5.232 0 2.192 2.192 0 0 0-1.736 1.039l-.821 1.316Z"
                        />
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          d="M16.5 12.75a4.5 4.5 0 1 1-9 0 4.5 4.5 0 0 1 9 0ZM18.75 10.5h.008v.008h-.008V10.5Z"
                        />
                      </svg>

                      <div className=" w-full">
                        <p className="space-x-1">
                          {back_camera.slice(0, 2).map((item, idx) => (
                            <span key={idx} className="text-[12px]">
                              {item},
                            </span>
                          ))}
                        </p>
                        <p className="h-[2px]  bg-secondary w-full"></p>
                        <span className="text-[12px]">{front_camera}</span>
                      </div>
                    </li>
                    <li className="flex gap-2 items-center">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        strokeWidth={1.5}
                        stroke="currentColor"
                        className="w-8 h-8 mt-2"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          d="M21 10.5h.375c.621 0 1.125.504 1.125 1.125v2.25c0 .621-.504 1.125-1.125 1.125H21M4.5 10.5H18V15H4.5v-4.5ZM3.75 18h15A2.25 2.25 0 0 0 21 15.75v-6a2.25 2.25 0 0 0-2.25-2.25h-15A2.25 2.25 0 0 0 1.5 9.75v6A2.25 2.25 0 0 0 3.75 18Z"
                        />
                      </svg>

                      <div className="w-full ">
                        <span className="text-[12px]">{battery}</span>
                        <p className="h-[2px]  bg-secondary w-full"></p>
                      </div>
                    </li>
                    <li className="flex items-center gap-2">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        strokeWidth={1.5}
                        stroke="currentColor"
                        className="w-8 h-8 mt-2"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          d="M8.25 3v1.5M4.5 8.25H3m18 0h-1.5M4.5 12H3m18 0h-1.5m-15 3.75H3m18 0h-1.5M8.25 19.5V21M12 3v1.5m0 15V21m3.75-18v1.5m0 15V21m-9-1.5h10.5a2.25 2.25 0 0 0 2.25-2.25V6.75a2.25 2.25 0 0 0-2.25-2.25H6.75A2.25 2.25 0 0 0 4.5 6.75v10.5a2.25 2.25 0 0 0 2.25 2.25Zm.75-12h9v9h-9v-9Z"
                        />
                      </svg>
                      <div className="w-full ">
                        <span className="text-[12px]">{chip}</span>
                        <p className="h-[2px]  bg-secondary w-full"></p>
                      </div>
                    </li>
                  </ul>
                </div>
                <div className="h-full flex-1 flex flex-col justify-center items-center">
                  <div className="pr-2">
                    <h2 className="text-lg font-semibold capitalize">
                      {title}
                    </h2>
                    <h4 className="bold text-secondary">{price} USD</h4>
                  </div>
                  <img
                    className="sm:h-[350px] h-72 w-full "
                    src={img}
                    alt={title}
                  />
                </div>
              </div>
            </SwiperSlide>
          )
        )}
      </Swiper>
    </div>
  );
};

export default Exclusive;
