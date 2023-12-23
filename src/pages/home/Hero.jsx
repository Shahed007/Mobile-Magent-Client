import ButtonPrimary from "../../components/button/ButtonPrimary";
import ButtonSecondary from "../../components/button/ButtonSecondary";
import Container from "../../components/container/Container";
import Slider from "../../components/slider/Slider";

const Hero = () => {
  return (
    <section className="py-14  ">
      <Container>
        <div className="grid grid-cols-1 lg:grid-cols-2  gap-8">
          <div className="">
            <div className="flex text-2xl sm:text-4xl xl:text-5xl sm:leading-[60px] font-semibold text-secondary gap-2">
              <span className="flex mt-1 sm:mt-3 lg:mt-2 justify-center h-7 w-7 rounded-full border border-secondary">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={1.5}
                  stroke="currentColor"
                  className="w-6 h-6"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="m8.25 4.5 7.5 7.5-7.5 7.5"
                  />
                </svg>
              </span>
              <h1>
                Explore the Latest <br /> in Mobile{" "}
                <span className="text-black">Technology</span>
              </h1>
            </div>
            <div className="lg:text-lg text-base w-full text-secondary flex mt-5  gap-[18px]">
              <div>
                <span className="h-4 w-4  border bg-black rounded-full inline-block"></span>
              </div>
              <p className="text-justify">
                Discover and shop the latest mobile technology. Elevate your
                mobile experience with our cutting-edge devices and innovations.
              </p>
            </div>
            <div className="flex items-centers gap-4 sm:gap-8 mt-8 ml-8">
              <ButtonPrimary>Pre Order</ButtonPrimary>
              <ButtonSecondary>View video</ButtonSecondary>
            </div>

            <Slider></Slider>
          </div>
          <div className="h-full  hero-frame">jklfkdkfdskf</div>
        </div>
      </Container>
    </section>
  );
};

export default Hero;
