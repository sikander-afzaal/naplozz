import { useRef, useEffect, useLayoutEffect } from "react";
import GradientButton from "../../Components/GradientButton";
//gsap
import gsap, { Circ } from "gsap";

const Hero = ({ loader }) => {
  const heading = useRef();
  const sub = useRef();
  const para = useRef();
  const btn = useRef();
  const img = useRef();
  const shadow = useRef();
  useLayoutEffect(() => {
    const timeLine = gsap.timeline({
      defaults: { duration: 0.5, ease: Circ.easeOut },
      delay: loader ? 6.9 : 0.5,
    });
    timeLine.fromTo(
      heading.current,
      { opacity: 0, x: -80 },
      { opacity: 1, x: 0 }
    );
    timeLine.fromTo(sub.current, { opacity: 0, y: 80 }, { opacity: 1, y: 0 });
    timeLine.fromTo(para.current, { opacity: 0, x: -80 }, { opacity: 1, x: 0 });
    timeLine.fromTo(btn.current, { opacity: 0, y: 80 }, { opacity: 1, y: 0 });
    timeLine.fromTo(img.current, { opacity: 0, x: 80 }, { opacity: 1, x: 0 });

    gsap.fromTo(
      shadow.current,
      { scale: 1 },
      {
        scale: 0.8,
        yoyo: true,
        repeat: -1,
        duration: 2,
      }
    );
    return () => {
      timeLine.kill();
    };
  }, []);

  return (
    <div className="wrapper  mt-[130px] xl:min-h-screen min-h-[600px] xl:mt-[100px] relative isolate">
      <div
        ref={shadow}
        className="w-[80%] lg:w-[800px] bg-greenRadial absolute opacity-50 -z-10 blur-[125px] left-0 lg:-left-[400px]  h-[800px] "
      ></div>
      <div className="contain xl:flex-row flex-col justify-around overflow-visible items-center gap-[40px] sm:gap-[60px] xl:gap-5">
        <div className="flex xl:-mt-[130px] justify-start items-center text-center xl:text-left xl:items-start xl:max-w-[560px] max-w-[600px] flex-col gap-5">
          <h2
            ref={heading}
            className="font-bold opacity-0 leading-[1.2] xl:leading-[88px] text-[40px] sm:text-[55px] xl:text-[63px] mid:text-[68px] text-white"
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
            className="opacity-0 text-[rgba(255,255,255,0.76)] xl:-mt-7 text-base sm:text-xl font-medium"
          >
            Naplozz is a quality management and data tracking application
            utilizing the innovative technology of the blockchain to help
            businesses function more efficiently.{" "}
          </p>
          <div ref={btn} className="opacity-0">
            <GradientButton
              classes={"w-[151px] h-[55px] hover:w-[190px]"}
              text={" Get Started"}
            />
          </div>
        </div>
        <img
          ref={img}
          src="/hero-phone.gif"
          className="w-full opacity-0 object-contain max-w-[650px] mid:max-w-[700px]"
          alt=""
        />
      </div>
    </div>
  );
};

export default Hero;
