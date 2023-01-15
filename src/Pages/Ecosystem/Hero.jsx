import gsap, { Circ } from "gsap";
import { useEffect, useRef } from "react";
//typewriter
import { Typewriter } from "react-simple-typewriter";

const Hero = ({ loader }) => {
  const heading = useRef();
  const underline = useRef();
  const smallHead = useRef();
  const sub1 = useRef();
  const para1 = useRef();
  const sub2 = useRef();
  const para2 = useRef();
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
      .fromTo(smallHead.current, { opacity: 0 }, { opacity: 1 })
      .fromTo(
        [sub1.current, para1.current, sub2.current, para2.current],
        { y: -20, opacity: 0 },
        { stagger: 0.4, y: 0, opacity: 1 }
      )
      .fromTo(img.current, { opacity: 0 }, { opacity: 1 });
    gsap.to(img.current, { y: -40, yoyo: true, repeat: -1, duration: 7 });
    return () => {
      timeLine.kill();
    };
  }, []);

  return (
    <div className="wrapper mt-[130px] relative">
      <div className="absolute -left-[20%] top-[0%] xl:top-[17%] w-full -z-10 max-w-[1064px] h-[700px] opacity-25 bg-[#A50498] blur-[250px]"></div>
      <div className="absolute -right-[20%]  top-[60%] w-full -z-10 max-w-[1110px] h-[550px]  bg-[#2BD1FF] opacity-20 blur-[130px]"></div>
      <div className="contain flex-col justify-start items-start">
        <h2
          ref={heading}
          className="font-bold text-center sm:text-left leading-[1.2] xl:leading-[88px] text-[35px] sm:text-[55px] xl:text-[63px] mid:text-[68px]  text-white"
        >
          <span className="relative">
            {" "}
            Naplozz Star Program{" "}
            <span
              ref={underline}
              className="absolute sm:block hidden left-0 top-full h-[2px] bg-blueGr "
            ></span>{" "}
          </span>
          <br className="sm:block hidden" />
          <span className="gr-text">
            is the first and only social <br className="sm:block hidden" /> and
            market feed
          </span>{" "}
          <span ref={smallHead} className="text-lg sm:text-[24px]">
            <Typewriter
              words={["based on the Naplozz Compliance Metric."]}
              loop
              cursor
              delaySpeed={8000}
              cursorBlinking
            />
          </span>
        </h2>
        <div className="flex xl:flex-row gap-[40px] xl:gap-0 flex-col mt-[30px] sm:mt-[60px] justify-between items-center sm:items-start w-full ">
          <div className="flex max-w-full xl:max-w-[650px] justify-start items-center text-center sm:text-left sm:items-start flex-col gap-5">
            <p ref={sub1} className="text-white font-bold text-lg sm:text-2xl">
              Members of the Naplozz community can get awards through the
              Naplozz Star System.{" "}
            </p>
            <p
              ref={para1}
              className="text-white font-medium text-base sm:text-xl"
            >
              It is based on the evaluation of the Naplozz Compliance Metric and
              is a part of our social feed. By exchanging a certain number of
              tokens, the quality of work can be validated, making it visible to
              all of our members.
            </p>
            <p ref={sub2} className="text-white font-bold text-lg sm:text-2xl">
              By showcasing their skills, they will encourage more people to
              join us, and as a result of this program, they will create
              connections with potential new clients.
            </p>
            <p
              ref={para2}
              className="text-white font-medium text-base sm:text-xl"
            >
              It's simple: You submit your work for certification and then
              redeem a specific amount of tokens in exchange for being
              recognized as an A-tier member of our community.
            </p>
          </div>
          <img
            ref={img}
            src="/eco.png"
            className="w-full max-w-[600px]"
            alt=""
          />
        </div>
        <h2 className="font-bold mt-[40px] sm:mt-[60px] text-center sm:text-left leading-[1.2]  text-[30px] sm:text-[45px]  mid:text-[50px]  text-white">
          You'll be able to show off your work, earn recognition,{" "}
          <br className="xl:block hidden" /> and connect{" "}
          <span className="text-base sm:text-[24px] font-semibold">
            with hundreds of new members all at once—that's just the beginning!
          </span>
        </h2>
      </div>
    </div>
  );
};

export default Hero;
