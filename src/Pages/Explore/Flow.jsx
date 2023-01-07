import { useRef, useEffect } from "react";
import gsap from "gsap";

const Flow = () => {
  const shadow = useRef();
  useEffect(() => {
    gsap.fromTo(
      shadow.current,
      { opacity: 0.2 },
      { opacity: 0, duration: 2, repeat: -1, yoyo: true }
    );
  }, []);
  return (
    <div className="wrapper mt-[100px] sm:mt-[150px] ">
      <div className="contain flex-col xl:flex-row justify-center items-center gap-[60px] isolate relative">
        <div
          ref={shadow}
          className="absolute w-full  -z-10 left-0 top-0 sm:top-1/2 sm:-translate-y-1/2 bg-pink blur-[115px] opacity-[0.15] max-w-[1130px] h-[600px]"
        ></div>
        <img
          src="/explore/token-flow.png"
          className="w-full max-w-[600px] xl:max-w-[550px] object-contain"
          alt=""
        />
        <div className="flex justify-start items-start flex-col gap-5">
          <h2 className="text-white sm:mb-[30px] text-[40px] sm:text-[48px] font-bold">
            Token Flow
          </h2>
          <p className="text:lg sm:text-xl font-medium text-[#b3b3b3]">
            Your employees are the heart of your company, and they deserve a
            reward for their hard work. With NAP tokens, you can show your team
            that you believe in them and want to help them reach their goals.
          </p>
          <p className="text:lg sm:text-xl font-medium text-[#b3b3b3]">
            After signing up for the service, you'll be able to lock in NAP
            tokens in your account and use them to reward your employees as they
            perform tasks. The more they do, the more tokens they earn.
          </p>
          <p className="text:lg sm:text-xl font-medium text-[#b3b3b3]">
            Once your workspace all together performed well you can unlock
            tokens and incentivize them by sending tokens directly into their
            wallets! It's that easy
          </p>
          <p className="text:lg sm:text-xl font-bold text-white">
            Anyone will be able to track their account balances easily or
            withdraw them to an external wallet anytime.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Flow;
