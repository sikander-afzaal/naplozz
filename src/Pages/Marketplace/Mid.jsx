import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";
import { useEffect, useRef } from "react";

const Mid = () => {
  const container = useRef();
  const line1 = useRef();
  const line2 = useRef();
  const para1 = useRef();
  const para2 = useRef();

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);
    const timeline = gsap.timeline({
      defaults: { duration: 0.4 },
      scrollTrigger: {
        trigger: container.current,
        start: "top 50%",
      },
    });
    timeline
      .fromTo(
        line1.current,
        { width: 0, opacity: 0 },
        { width: "95%", opacity: 1 }
      )
      .fromTo(
        [para1.current, para2.current],
        { y: -20, opacity: 0 },
        { y: 0, opacity: 1 }
      )
      .fromTo(
        line2.current,
        { width: 0, opacity: 0 },
        { width: "95%", opacity: 1 }
      );
    return () => {
      timeline.kill();
    };
  }, []);

  return (
    <div ref={container} className="wrapper mt-[80px] md:mt-[150px]  ">
      <div className="contain flex-col text-center justify-center items-center gap-12 relative py-[50px] md:py-[90px]">
        {/* //top and bottom liness ---------------- */}
        <div
          ref={line1}
          className="w-[95%] absolute top-0 left-1/2 -translate-x-1/2 bg-[rgb(179,179,179)] opacity-[0.5]  h-[2px]"
        >
          <div className="absolute left-0 z-20 top-1/2 -translate-y-1/2 xl:-translate-x-1/2 bg-[#B3B3B3]   w-4 h-4 rotate-45 rounded-full"></div>
          <div className="absolute right-0 z-20 top-1/2 -translate-y-1/2 xl:translate-x-1/2 bg-[rgb(179,179,179)]   w-4 h-4 rotate-45 rounded-full"></div>
        </div>
        <div
          ref={line2}
          className="w-[95%] absolute bottom-0 opacity-[0.5] left-1/2 -translate-x-1/2 bg-[rgb(179,179,179)]  h-[2px]"
        >
          <div className="absolute left-0 z-20 top-1/2 -translate-y-1/2 xl:-translate-x-1/2 bg-[rgb(179,179,179)]   w-4 h-4 rotate-45 rounded-full"></div>
          <div className="absolute right-0 z-20 top-1/2 -translate-y-1/2 xl:translate-x-1/2 bg-[rgb(179,179,179)]   w-4 h-4 rotate-45 rounded-full"></div>
        </div>
        {/* //top and bottom liness ---------------- */}
        <h3
          ref={para1}
          className="text-white max-w-[850px] font-bold text-[24px] sm:text-[30px] md:text-[40px] leading-[1.1]"
        >
          We know how hard it is out there to find qualified help when you need
          it most
        </h3>
        <h3
          ref={para2}
          className="gr-text font-bold max-w-[850px] text-[24px] sm:text-[30px] md:text-[40px] leading-[1.1]"
        >
          that's why we've developed Naplozz Marketplace o help solve this
          problem once and for all!
        </h3>
      </div>
    </div>
  );
};

export default Mid;
