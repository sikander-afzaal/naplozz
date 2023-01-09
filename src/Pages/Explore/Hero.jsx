import GradientButton from "../../Components/GradientButton";
import { faChevronRight } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import gsap from "gsap";
import { useEffect, useRef } from "react";

const Hero = () => {
  const heading = useRef();
  const para = useRef();
  const button = useRef();
  const img = useRef();
  useEffect(() => {
    const timeLine = gsap.timeline({
      defaults: { duration: 0.5 },
    });
    timeLine
      .fromTo(heading.current, { opacity: 0, x: -80 }, { opacity: 1, x: 0 })
      .fromTo(para.current, { opacity: 0, x: -80 }, { opacity: 1, x: 0 })
      .fromTo(button.current, { opacity: 0, x: -80 }, { opacity: 1, x: 0 })
      .fromTo(img.current, { opacity: 0, x: 80 }, { opacity: 1, x: 0 });
    return () => {
      timeLine.kill();
    };
  }, []);

  return (
    <div className="wrapper pt-[0px] min-h-[600px] xl:pt-[50px]  relative ">
      <img
        src="/explore/hero-bg.png"
        className="absolute w-full h-full top-0 left-0 object-cover -z-10"
        alt=""
      />
      <div className="absolute explore -left-[20%] top-0 bg-greenRadial -z-10 w-full max-w-[854px] h-[804px] blur-[111px] mix-blend-screen"></div>
      <div className="contain  flex-col xl:flex-row   justify-around items-center xl:items-start">
        <div className="flex justify-start items-center pt-[150px] text-center xl:text-left xl:items-start xl:max-w-[550px] max-w-[600px] flex-col gap-5">
          <h2
            ref={heading}
            className="font-bold leading-[1.2]  mid:leading-[72px] text-[40px] sm:text-[55px] xl:text-[63px] text-white"
          >
            <span className="gr-text">Naplozz App</span> the paperless record
            keeper
          </h2>
          <p
            ref={para}
            className="text-[rgba(255,255,255,0.76)] text-base sm:text-xl max-w-[724px] font-medium"
          >
            The Naplozz App is the paperless record keeper for your business,
            allowing you to take care of all your paperwork in one place. It's
            the perfect solution for anyone who wants to improve productivity,
            increase efficiency and comply to the rules by eliminating the need
            for paper. <span className="text-pink">Just click and swipe!</span>
          </p>
          <div ref={button}>
            <GradientButton
              classes={"w-[151px] h-[55px] hover:w-[220px]"}
              text={
                <>
                  Get Started
                  <FontAwesomeIcon icon={faChevronRight} className="text-sm" />
                </>
              }
            />
          </div>
        </div>
        <img
          ref={img}
          src="/explore/hero-img.png"
          alt=""
          className="max-w-[400px] xl:max-w-[500px] mid:max-w-[600px] w-full object-contain"
        />
      </div>
    </div>
  );
};

export default Hero;
