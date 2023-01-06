import { useRef, useEffect } from "react";
//gsap
import gsap, { Circ } from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";

const Partners = () => {
  const container = useRef();
  const heading = useRef();
  const para = useRef();
  const partners = useRef();
  const line1 = useRef();
  const line2 = useRef();

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);
    const timeLine = gsap.timeline({
      defaults: { duration: 0.7, ease: Circ.easeOut },
      scrollTrigger: {
        trigger: container.current,
        start: "top 50%",
      },
    });
    timeLine
      .fromTo(
        [line1.current, line2.current],
        { width: 0, overflow: "hidden" },
        { width: "95%", overflow: "visible" }
      )
      .fromTo(heading.current, { y: -90, opacity: 0 }, { y: 0, opacity: 1 })
      .fromTo(para.current, { y: 90, opacity: 0 }, { y: 0, opacity: 1 })
      .fromTo(partners.current, { y: 90, opacity: 0 }, { y: 0, opacity: 1 });
  }, []);

  return (
    <div ref={container} className="wrapper mt-[80px] sm:mt-[150px]">
      <div className="contain py-[60px] flex-col justify-start relative items-start gap-[80px]">
        <div
          ref={line1}
          className="w-[95%] absolute top-0 left-1/2 -translate-x-1/2 bg-[rgb(179,179,179)] opacity-40 h-[2px]"
        >
          <div className="absolute left-0 z-20 top-1/2 -translate-y-1/2 xl:-translate-x-1/2 bg-[rgb(179,179,179)]   w-4 h-4 rotate-45"></div>
          <div className="absolute right-0 z-20 top-1/2 -translate-y-1/2 xl:translate-x-1/2 bg-[rgb(179,179,179)]   w-4 h-4 rotate-45"></div>
        </div>
        <div
          ref={line2}
          className="w-[95%] absolute bottom-0 left-1/2 -translate-x-1/2 opacity-40 bg-[rgb(179,179,179)]  h-[2px]"
        >
          <div className="absolute left-0 z-20 top-1/2 -translate-y-1/2 xl:-translate-x-1/2 bg-[rgb(179,179,179)]   w-4 h-4 rotate-45"></div>
          <div className="absolute right-0 z-20 top-1/2 -translate-y-1/2 xl:translate-x-1/2 bg-[rgb(179,179,179)]   w-4 h-4 rotate-45"></div>
        </div>
        <div className="flex justify-start items-start flex-col gap-5">
          <h2
            ref={heading}
            className="text-white text-[40px] sm:text-[48px] font-bold leading-[1]"
          >
            Our Partners
          </h2>
          <p
            ref={para}
            className="text-[rgba(255,255,255,0.62)]  max-w-[500px] text-lg sm:text-[20px] font-medium  leading-[1.3]"
          >
            Our Partners are on board with our vision and have shown interest in
            working together as we develop new business solutions.
          </p>
        </div>
        <div
          ref={partners}
          className="flex justify-center items-center max-w-[700px] self-center gap-[50px] flex-wrap w-full"
        >
          <img src="/part1.png" className="hover:brightness-200" alt="" />
          <img src="/part2.png" className="hover:brightness-200" alt="" />
          <img src="/part3.png" className="hover:brightness-200" alt="" />
          <img src="/part4.png" className="hover:brightness-200" alt="" />
          <img src="/part5.png" className="hover:brightness-200" alt="" />
          <img src="/part6.png" className="hover:brightness-200" alt="" />
          <img src="/part7.png" className="hover:brightness-200" alt="" />
          <img src="/part8.png" className="hover:brightness-200" alt="" />
          <img src="/part9.png" className="hover:brightness-200" alt="" />
          <img src="/part10.png" className="hover:brightness-200" alt="" />
        </div>
      </div>
    </div>
  );
};

export default Partners;
