import gsap from "gsap";
import { useEffect, useRef } from "react";
import ScrollTrigger from "gsap/ScrollTrigger";

const Flow = () => {
  const glow = useRef();
  const container2 = useRef();
  const img = useRef();
  const heading = useRef();
  const para = useRef();
  const para2 = useRef();
  const para3 = useRef();
  const para4 = useRef();
  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);
    const timeLine = gsap.timeline({
      defaults: { duration: 0.4 },
      scrollTrigger: {
        trigger: container2.current,
        start: "top 20%",
      },
    });
    timeLine
      .fromTo(img.current, { opacity: 0, x: -50 }, { opacity: 1, x: 0 })
      .fromTo(
        [
          heading.current,
          para.current,
          para2.current,
          para3.current,
          para4.current,
        ],
        { opacity: 0, y: 50 },
        { opacity: 1, y: 0, stagger: 0.4 }
      );

    gsap.fromTo(
      glow.current,
      { opacity: 0 },
      { opacity: 1, duration: 1.4, repeat: -1, yoyo: true }
    );
    return () => {
      timeLine.kill();
    };
  }, []);

  return (
    <div
      id="flow"
      ref={container2}
      className="wrapper mt-[100px] relative sm:mt-[150px] "
    >
      <div className="absolute w-full -z-10 left-[20%] top-0 sm:top-1/2 sm:-translate-y-1/2 bg-pink blur-[115px] opacity-[0.15] max-w-[1130px] h-[600px]"></div>
      <div className="contain flex-col xl:flex-row justify-center items-center xl:items-start gap-[60px] isolate relative">
        <div ref={img} className="relative w-full">
          <img
            src="/explore/token-flow-no-glow.png"
            className="w-full max-w-[600px] opacity-80 xl:max-w-[550px] object-contain"
            alt=""
          />
          <img
            ref={glow}
            src="/explore/token-flow.png"
            className="w-full max-w-[600px] absolute left-0 top-0 -z-10 xl:max-w-[550px] object-contain"
            alt=""
          />
        </div>
        <div className="flex justify-start items-start flex-col gap-5">
          <h2
            ref={heading}
            className="text-white sm:mb-[30px] text-[40px] sm:text-[48px] font-bold"
          >
            Token Flow
          </h2>
          <p
            ref={para}
            className="text-lg mid:text-xl font-medium text-[#b3b3b3]"
          >
            Your employees are the heart of your company, and they deserve a
            reward for their hard work. With NAP tokens, you can show your team
            that you believe in them and want to help them reach their goals.
          </p>
          <p
            ref={para2}
            className="text-lg mid:text-xl font-medium text-[#b3b3b3]"
          >
            After signing up for the service, you'll be able to lock in NAP
            tokens in your account and use them to reward your employees as they
            perform tasks. The more they do, the more tokens they earn.
          </p>
          <p
            ref={para3}
            className="text-lg mid:text-xl font-medium text-[#b3b3b3]"
          >
            Once your workspace all together performed well you can unlock
            tokens and incentivize them by sending tokens directly into their
            wallets! It's that easy
          </p>
          <p ref={para4} className="text-lg mid:text-xl font-bold text-white">
            Anyone will be able to track their account balances easily or
            withdraw them to an external wallet anytime.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Flow;
