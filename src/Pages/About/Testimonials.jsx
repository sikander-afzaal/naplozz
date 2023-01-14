import { useRef } from "react";
import { faArrowLeft, faArrowRight } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Splide, SplideSlide } from "@splidejs/react-splide";
import "@splidejs/react-splide/css";

const Testimonials = () => {
  const sliderRef = useRef();
  const PrevArrow = () => {
    if (sliderRef.current) {
      const index = sliderRef.current.splide.Components.Controller.getPrev();
      sliderRef.current.splide.Components.Controller.go(index);
    }
  };
  const NextArrow = () => {
    if (sliderRef.current) {
      const index = sliderRef.current.splide.Components.Controller.getNext();
      sliderRef.current.splide.Components.Controller.go(index);
    }
  };
  const REVIEW_DATA = [
    {
      name: "Patrik Panácz (A Grund)",
      img: "/part3.png",
      desc: `The online logging with Naplozz makes it easier for us to close units and check workflows. The assessment of colleagues and their tasks can be traced.
              Reminding annual / semi-year / quarterly logs to be less frequent greatly reduced our error opportunities.`,
    },
    {
      name: "Patrik Panácz (A Grund)",
      img: "/part3.png",
      desc: `The online logging with Naplozz makes it easier for us to close units and check workflows. The assessment of colleagues and their tasks can be traced.
              Reminding annual / semi-year / quarterly logs to be less frequent greatly reduced our error opportunities.`,
    },
    {
      name: "Patrik Panácz (A Grund)",
      img: "/part3.png",
      desc: `The online logging with Naplozz makes it easier for us to close units and check workflows. The assessment of colleagues and their tasks can be traced.
              Reminding annual / semi-year / quarterly logs to be less frequent greatly reduced our error opportunities.`,
    },
    {
      name: "Patrik Panácz (A Grund)",
      img: "/part3.png",
      desc: `The online logging with Naplozz makes it easier for us to close units and check workflows. The assessment of colleagues and their tasks can be traced.
              Reminding annual / semi-year / quarterly logs to be less frequent greatly reduced our error opportunities.`,
    },
  ];
  return (
    <div className="wrapper mt-[120px] mb-[50px] sm:my-[120px] relative">
      <div className="absolute left-1/2 blur-[120px] -translate-x-1/2 top-[40%] -z-10 bg-[#0262F7] opacity-10 w-full max-w-[1188px] h-[542px]"></div>
      <div className="absolute left-1/2 blur-[120px] -translate-x-1/2 bottom-[80%] -z-10 bg-[#0262F7] opacity-[0.05] w-full max-w-[1188px] h-[542px]"></div>
      <div className="contain gap-10 flex-col justify-start items-start">
        <h2 className="text-white text-[40px] sm:text-[48px] font-bold leading-[1]">
          Testimonials
        </h2>
        <Splide
          options={{
            arrows: false,
            pagination: false,
            width: "100%",
            autoWidth: true,
            focus: "center",
            drag: "true",
            rewind: true,
            gap: "40px",
            breakpoints: {
              1024: {
                autoWidth: false,
                perPage: 1,
              },
            },
          }}
          className="review-slider"
          ref={sliderRef}
        >
          {REVIEW_DATA.map((elem, idx) => {
            return (
              <SplideSlide key={"review" + idx}>
                <ReviewBox
                  {...elem}
                  idx={idx}
                  totalReviews={REVIEW_DATA.length}
                  PrevArrow={PrevArrow}
                  NextArrow={NextArrow}
                />
              </SplideSlide>
            );
          })}
        </Splide>
      </div>
    </div>
  );
};

export default Testimonials;

const ReviewBox = ({
  img,
  name,
  desc,
  PrevArrow,
  NextArrow,
  idx,
  totalReviews,
}) => {
  return (
    <div className="h-full w-full max-w-[420px] lg:max-w-[820px] relative">
      <div className="grid grid-cols-1 lg:grid-cols-[auto__1fr] px-6 pb-[60px] pt-[30px] lg:py-[40px] gap-x-10 relative rounded-[30px] bg-black w-full h-full">
        {/* arrows---------------- */}
        {idx > 0 && (
          <FontAwesomeIcon
            onClick={PrevArrow}
            icon={faArrowLeft}
            className="absolute left-[20px] text-[#B3B3B3] bottom-[20px] text-2xl cursor-pointer"
          />
        )}
        {idx < totalReviews - 1 && (
          <FontAwesomeIcon
            onClick={NextArrow}
            icon={faArrowRight}
            className="absolute right-[20px] text-[#B3B3B3] bottom-[20px] text-2xl cursor-pointer"
          />
        )}
        {/* arrows---------------- */}
        <img className="lg:block hidden" src={img} alt="" />
        <div className="flex justify-start items-center sm:text-left text-center sm:items-start flex-col gap-3">
          <h3 className="text-white text-[23px] font-semibold">{name}</h3>

          <p className="text-white font-medium mt-2 text-base sm:text-lg">
            <span className="text-[42px]">"</span> {desc}{" "}
            <span className="text-[42px]">"</span>
          </p>
        </div>
      </div>
      <div className="absolute -z-10 rounded-[30px] bg-btnGr -inset-[1px]"></div>
    </div>
  );
};
