import gsap, { Circ } from "gsap";
import { useEffect, useRef } from "react";

const Hero = ({ loader }) => {
  const heading = useRef();
  const para1 = useRef();
  const para2 = useRef();
  const para3 = useRef();
  const para4 = useRef();
  const img = useRef();
  useEffect(() => {
    const timeLine = gsap.timeline({
      defaults: { duration: 0.4, ease: Circ.easeOut },
      delay: loader ? 6.9 : 0.5,
    });
    timeLine
      .fromTo(heading.current, { x: -20, opacity: 0 }, { x: 0, opacity: 1 })
      .fromTo(
        [para1.current, para2.current, para3.current, para4.current],
        { y: -20, opacity: 0 },
        { stagger: 0.4, y: 0, opacity: 1 }
      )
      .fromTo(img.current, { opacity: 0 }, { opacity: 1 });
    gsap.to(img.current, { y: -40, yoyo: true, repeat: -1, duration: 3 });
    return () => {
      timeLine.kill();
    };
  }, []);

  return (
    <div className="wrapper mt-[130px] relative">
      <div className="absolute -left-[30%] top-[30%] w-full -z-10 max-w-[1064px] h-[700px] opacity-25 bg-[#A50498] blur-[250px]"></div>
      <div className="absolute -left-[30%] top-[10%] w-full -z-10 max-w-[1022px] h-[500px] opacity-10 bg-marketplace blur-[115px]"></div>
      <div className="contain flex-col w-full justify-start items-center">
        <div className="flex xl:flex-row flex-col justify-around w-full items-center gap-5">
          <div className="flex max-w-full xl:max-w-[700px] justify-start items-center text-center sm:text-left sm:items-start flex-col gap-5">
            <h2
              ref={heading}
              className="font-bold text-center sm:text-left leading-[1.2] xl:leading-[88px] text-[35px] sm:text-[55px] xl:text-[63px] mid:text-[68px] "
            >
              <span className="gr-text">Naplozz marketplace</span>{" "}
            </h2>
            <p
              ref={para1}
              className="text-white font-semibold text-lg sm:text-2xl"
            >
              Naplozz Marketplace is a marketplace for finding the best
              suppliers, hiring the coolest employees with the help of the NAP
              token.
            </p>
            <p
              ref={para2}
              className="text-white font-medium text-base sm:text-xl"
            >
              <span className="text-bold text-[#FF519F]">Imagine this:</span>{" "}
              you need to have a service day in an outer event urgently, and you
              need to find someone immediately. Or maybe you have a big project
              coming up and need some extra hands on deck—but you don't know
              where to look. You could spend hours combing through the internet,
              trying to find the right person for the job. But what if there was
              an easier way? What if there was a way that let you find people
              who were already qualified and ready to work?
            </p>
          </div>
          <img
            ref={img}
            src="/market/hero.png"
            className="w-full max-w-[500px]"
            alt=""
          />
        </div>
        <div className="flex justify-center max-w-[1300px] gap-5 items-center md:items-start flex-col mt-[60px] md:mt-[80px] w-full">
          <h2
            ref={para3}
            className="font-bold text-center md:text-left leading-[1.2]  xl:leading-[58px] text-[30px]  md:text-[48px] "
          >
            <span className="gr-text">
              Naplozz Marketplace is exactly that kind of system.
            </span>{" "}
          </h2>
          <p
            ref={para4}
            className="text-white font-semibold text-center md:text-left text-lg md:text-2xl"
          >
            We already have suppliers who would love to join our marketplace, so
            we can connect them with hundreds of clients. With our system, we
            make it easy for businesses like yours to find employees and
            suppliers who meet their exact needs. We even give you access to
            other members' profiles so you can see how they work (and what
            they're looking for in return).
          </p>
        </div>
      </div>
    </div>
  );
};

export default Hero;
