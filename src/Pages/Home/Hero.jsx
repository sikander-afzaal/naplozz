import { useRef, useEffect } from "react";
import GradientButton from "../../Components/GradientButton";
//gsap
import gsap from "gsap";

const Hero = () => {
  const heading = useRef();
  const sub = useRef();
  const para = useRef();
  const btn = useRef();
  const img = useRef();
  useEffect(() => {
    const timeLine = gsap.timeline({ defaults: { duration: 0.6 } });
    timeLine.fromTo(
      heading.current,
      { opacity: 0, x: -80 },
      { opacity: 1, x: 0 }
    );
    timeLine.fromTo(sub.current, { opacity: 0, y: 80 }, { opacity: 1, y: 0 });
    timeLine.fromTo(para.current, { opacity: 0, x: -80 }, { opacity: 1, x: 0 });
    timeLine.fromTo(btn.current, { opacity: 0, y: 80 }, { opacity: 1, y: 0 });
    timeLine.fromTo(img.current, { opacity: 0, x: 80 }, { opacity: 1, x: 0 });
  }, []);

  return (
    <div className="wrapper  mt-[130px] mid:mt-[100px] relative isolate">
      <div className="w-[80%] lg:w-[800px] bg-greenRadial absolute opacity-50 -z-10 blur-[125px] left-0 lg:-left-[400px]  h-[800px] "></div>
      <div className="contain mid:flex-row flex-col justify-between overflow-visible items-center gap-[40px] sm:gap-[60px] mid:gap-5">
        <div className="flex justify-start items-center text-center mid:text-left mid:items-start mid:max-w-[560px] max-w-[600px] flex-col gap-5">
          <h2
            ref={heading}
            className="font-bold leading-[1.2] mid:leading-[88px] text-[40px] sm:text-[55px] mid:text-[68px] text-white"
          >
            Smart Quality{" "}
            <span className="gr-text">
              Management <br /> Powered
            </span>{" "}
            <span ref={sub} className="text-[24px]">
              by the Blockchain
            </span>
          </h2>
          <p
            ref={para}
            className="text-[rgba(255,255,255,0.76)] xl:-mt-7 text-base sm:text-xl font-medium"
          >
            Naplozz is a quality management and data tracking application
            utilizing the innovative technology of the blockchain to help
            businesses function more efficiently.{" "}
          </p>
          <div ref={btn}>
            <GradientButton
              classes={"w-[151px] h-[55px] hover:w-[190px]"}
              text={" Get Started"}
            />
          </div>
        </div>
        <img
          ref={img}
          src="/hero-phone.png"
          className="w-full object-contain max-w-[600px]"
          alt=""
        />
      </div>
    </div>
  );
};

export default Hero;
