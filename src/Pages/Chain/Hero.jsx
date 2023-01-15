import gsap, { Circ } from "gsap";
import { useEffect, useRef } from "react";

const Hero = ({ loader }) => {
  const heading = useRef();
  const underline = useRef();
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
        underline.current,
        { opacity: 0, width: 0 },
        { opacity: 1, width: "100%", duration: 1 }
      )
      .fromTo(
        [para1.current, para2.current, para3.current, para4.current],
        { y: -20, opacity: 0 },
        { stagger: 0.4, y: 0, opacity: 1 }
      )
      .fromTo(img.current, { opacity: 0 }, { opacity: 1 });
    gsap.to(img.current, { y: -20, yoyo: true, repeat: -1, duration: 3 });
    return () => {
      timeLine.kill();
    };
  }, []);
  return (
    <div className="wrapper pb-[100px] relative mt-[130px]">
      <img
        src="/chain-side.png"
        className="absolute top-[20%] right-0 -z-10"
        alt=""
      />
      <img
        src="/explore/ball.png"
        className="absolute -z-10 blur-sm w-[60px] top-[70%] right-[20%] object-contain"
        alt=""
      />
      <img
        src="/explore/ball.png"
        className="absolute -z-10 blur-sm w-[60px] top-[90%] sm:top-[110%] right-[30%] object-contain"
        alt=""
      />
      <img
        src="/explore/ball.png"
        className="absolute -z-10 sm:block hidden w-[160px] top-[85%] right-[15%] object-contain"
        alt=""
      />
      <div className="absolute  w-full max-w-[1064px] h-[700px] bg-[#a50498] opacity-[0.24] blur-[250px] -top-[5%] -z-10 -left-[20%]"></div>
      <div className="contain xl:flex-row flex-col  justify-around items-center xl:items-start">
        <div className="flex max-w-[700px] justify-start flex-col items-center xl:text-left text-center xl:items-start gap-5 sm:gap-8">
          <h2
            ref={heading}
            className="gr-text relative text-[45px] sm:text-[72px] leading-[1] font-bold"
          >
            Naplozz Chain
            <span
              ref={underline}
              className="absolute sm:block hidden left-0 top-full h-[2px] bg-blueGr "
            ></span>{" "}
          </h2>
          <h3
            ref={para1}
            className="text-white font-semibold text-lg sm:text-2xl leading-1.1"
          >
            Naplozz Marketplace is a marketplace for finding the best suppliers,
            hiring the coolest employees with the help of the NAP token.{" "}
          </h3>
          <p
            ref={para2}
            className="text-[#b3b3b3] text-base sm:text-xl leading-[1.1]"
          >
            Imagine this: you need to have a service day in an outer event
            urgently, and you need to find someone immediately. Or maybe you
            have a big project coming up and need some extra hands on deck—but
            you don't know where to look. You could spend hours combing through
            the internet, trying to find the right person for the job. But what
            if there was an easier way? What if there was a way that let you
            find people who were already qualified and ready to work?
          </p>
          <h2
            ref={para3}
            className="gr-text text-[30px] sm:text-[48px] gap-[30px] sm:mt-[60px] leading-[1.1] font-bold"
          >
            Naplozz Marketplace is exactly that kind of system.
          </h2>
          <p
            ref={para4}
            className="text-[#b3b3b3] text-base sm:text-xl leading-[1.1]"
          >
            We already have suppliers who would love to join our marketplace, so
            we can connect them with hundreds of clients. With our system, we
            make it easy for businesses like yours to find employees and
            suppliers who meet their exact needs. We even give you access to
            other members' profiles so you can see how they work (and what
            they're looking for in return).
          </p>
        </div>
        <img
          ref={img}
          src="/chain.png"
          className="w-full max-w-[200px] sm:max-w-[300px] object-contain"
          alt=""
        />
      </div>
    </div>
  );
};

export default Hero;
