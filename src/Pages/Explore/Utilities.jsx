import { useEffect, useRef } from "react";
import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";

const Utilities = () => {
  const container = useRef();
  const line1 = useRef();
  const line2 = useRef();
  const line3 = useRef();
  const line4 = useRef();
  const line5 = useRef();
  const line6 = useRef();
  const line7 = useRef();
  const line8 = useRef();
  const line9 = useRef();
  const line10 = useRef();
  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);
    const timeLine = gsap.timeline({
      scrollTrigger: {
        trigger: container.current,
        start: "top 25%",
        end: "+=2000",
        scrub: 1,
      },
    });
    timeLine
      .fromTo(line1.current, { scaleY: 0 }, { scaleY: 1 })
      .fromTo(line2.current, { scaleY: 0 }, { scaleY: 1 })
      .fromTo(
        line3.current,
        { scaleX: 0, transformOrigin: "left" },
        { scaleX: 1 }
      )
      .fromTo(line4.current, { scaleY: 0 }, { scaleY: 1 })
      .fromTo(
        line5.current,
        { scaleX: 0, transformOrigin: "right" },
        { scaleX: 1 }
      )
      .fromTo(line6.current, { scaleY: 0 }, { scaleY: 1 })
      .fromTo(
        line7.current,
        { scaleX: 0, transformOrigin: "left" },
        { scaleX: 1 }
      )
      .fromTo(line8.current, { scaleY: 0 }, { scaleY: 1 })
      .fromTo(line9.current, { scaleY: 0 }, { scaleY: 1 })
      .fromTo(
        line10.current,
        { scaleX: 0, transformOrigin: "left" },
        { scaleX: 1 }
      );
  }, []);

  return (
    <div ref={container} className="wrapper relative mt-[80px] md:mt-[160px]">
      <div className="absolute opacity-10 w-full left-1/2 -translate-x-1/2 top-[40%] -z-10 blur-[250px] bg-[#a50498] max-w-[1028px] h-[1028px]"></div>
      <div className="contain flex-col gap-[60px] md:gap-[0px] justify-start items-center  md:items-start">
        <h2 className="gr-text text-[40px] sm:text-[48px] md:m-0 -mb-5 font-bold">
          Token utilities
        </h2>
        <img
          ref={line1}
          src="/explore/line1.png"
          className="md:block hidden"
          alt=""
        />
        <h2 className="gr-text text-[35px] sm:text-[50px] lg:text-[55px] mid:text-[72px] font-bold md:text-left text-center">
          Business owners and managers.
        </h2>
        <div className=" mb-5 justify-start items-center md:flex hidden">
          <img ref={line2} src="/explore/line2.png" alt="" />
          <img ref={line3} src="/explore/line3.png" alt="" />
        </div>
        <div className="w-full justify-start md:flex-row flex-col items-start gap-[40px] md:gap-[150px] flex">
          <div className="flex group justify-center max-w-none w-full xl:max-w-[515px]  items-center relative isolate rounded-[40px]">
            <ul className="w-full bg-black list-none p-5 h-full flex justify-start rounded-[40px] items-start flex-col gap-4">
              <li className="text-[#f9f9f9]  font-medium text-base sm:text-xl">
                <span className="gr-text">⦁</span> Easily and openly incentivise
                employees and inspire the workspace for better performance -
                employee of the month badge, token allocation and so on.
              </li>
              <li className="text-[#f9f9f9] font-medium text-base md:text-lg lg:text-xl">
                <span className="gr-text">⦁</span> Use our platform with
                discount or for free.
              </li>
              <li className="text-[#f9f9f9] font-medium text-base md:text-lg lg:text-xl">
                <span className="gr-text">⦁</span> Stake and get more tokens
                while using our platform.
              </li>
              <li className="text-[#f9f9f9] font-medium text-base md:text-lg lg:text-xl">
                <span className="gr-text">⦁</span> Participate in Naplozz Star
                Program with your tokens and get your certificate be shown to
                the community.
              </li>
            </ul>
            <div className="absolute -inset-[1px] bg-blueGr -z-20 rounded-[40px] group-hover:opacity-0 transition-all duration-500"></div>
            <div className="absolute -inset-[1px] bg-btnGr opacity-0 -z-20 rounded-[40px] group-hover:opacity-100 transition-all duration-500"></div>
          </div>
          <div className="flex group justify-center max-w-none w-full xl:max-w-[515px]  items-center relative isolate rounded-[40px]">
            <ul className="w-full bg-black list-none p-5 h-full flex justify-start rounded-[40px] items-start flex-col gap-4">
              <li className="text-[#f9f9f9]  font-medium text-base sm:text-xl">
                <span className="gr-text">⦁</span> Redeem the token for goodies.
              </li>
              <li className="text-[#f9f9f9] font-medium text-base md:text-lg lg:text-xl">
                <span className="gr-text">⦁</span> Get HACCP and documents with
                a discount
              </li>
              <li className="text-[#f9f9f9] font-medium text-base md:text-lg lg:text-xl">
                <span className="gr-text">⦁</span> Order with discount from the
                suppliers participating in the Naplozz Marketplace.
              </li>
              <li className="text-[#f9f9f9] font-medium text-base md:text-lg lg:text-xl">
                <span className="gr-text">⦁</span> Easily buy more tokens via
                our platform.
              </li>
            </ul>
            <div className="absolute -inset-[1px] bg-blueGr -z-20 rounded-[40px] group-hover:opacity-0 transition-all duration-500"></div>
            <div className="absolute -inset-[1px] bg-btnGr opacity-0 -z-20 rounded-[40px] group-hover:opacity-100 transition-all duration-500"></div>
          </div>
        </div>
        <img
          ref={line4}
          src="/explore/line1.png"
          className="self-end 2xl:-translate-x-[300px] md:block hidden -translate-x-[100px] mid:-translate-x-[200px] -translate-y-[140px] -mb-[90px]"
          alt=""
        />
        <div className="w-full justify-start md:flex-row flex-col-reverse items-center gap-[40px] md:gap-[70px] flex">
          <div className="flex group justify-center max-w-none w-full xl:max-w-[515px]  items-center relative isolate rounded-[40px]">
            <ul className="w-full bg-black list-none p-5 h-full flex justify-start rounded-[40px] items-start flex-col gap-4">
              <li className="text-[#f9f9f9]  font-medium text-base sm:text-xl">
                <span className="gr-text">⦁</span> Hold and stake tokens to earn
                more.
              </li>
              <li className="text-[#f9f9f9] font-medium text-base md:text-lg lg:text-xl">
                <span className="gr-text">⦁</span> Redeem tokens for
                equipment/order things with your token.
              </li>
              <li className="text-[#f9f9f9] font-medium text-base md:text-lg lg:text-xl">
                <span className="gr-text">⦁</span> Use tokens as coupons for
                having discounts in restaurants and pubs that part of the
                Naplozz ecosystem.
              </li>
              <li className="text-[#f9f9f9] font-medium text-base md:text-lg lg:text-xl">
                <span className="gr-text">⦁</span> Exchange tokens easily.
              </li>
              <li className="text-[#f9f9f9] font-medium text-base md:text-lg lg:text-xl">
                <span className="gr-text">⦁</span> Employees will be able to
                participate in Naplozz Star Program and Naplozz Marketplace.
              </li>
            </ul>
            <div className="absolute -inset-[1px] bg-blueGr -z-20 rounded-[40px] group-hover:opacity-0 transition-all duration-500"></div>
            <div className="absolute -inset-[1px] bg-btnGr opacity-0 -z-20 rounded-[40px] group-hover:opacity-100 transition-all duration-500"></div>
          </div>
          <h2 className="gr-text leading-[1.1] lg:leading-[70px] relative max-w-[600px]  text-[35px] sm:text-[50px] lg:text-[55px] mid:text-[72px] font-bold md:text-right text-center">
            Employees invited by the owners or managers
            <img
              ref={line5}
              src="/explore/line4.png"
              className="absolute top-[70%] md:block hidden w-[45%] right-[60%]"
              alt=""
            />
          </h2>
        </div>
        <img
          ref={line6}
          src="/explore/line1.png"
          className="-mt-7 mb-6 md:block hidden"
          alt=""
        />
        <div className="w-full justify-start md:flex-row flex-col items-center gap-[40px] md:gap-[120px] flex">
          <h2 className="gr-text leading-[1.1] lg:leading-[73px] relative max-w-[600px]  text-[35px] sm:text-[50px] lg:text-[55px] mid:text-[72px] font-bold md:text-left text-center">
            For the people without Naplozz subscription
            <img
              ref={line7}
              src="/explore/line5.png"
              className="absolute top-[65%] md:block hidden  w-[45%] left-[70%]"
              alt=""
            />
          </h2>
          <div className="flex group justify-center max-w-none w-full xl:max-w-[515px]  items-center relative isolate rounded-[40px]">
            <ul className="w-full bg-black list-none p-5 h-full flex justify-start rounded-[40px] items-start flex-col gap-4">
              <li className="text-[#f9f9f9]  font-medium text-base sm:text-xl">
                <span className="gr-text">⦁</span> They can use Naplozz staking
                wallet.
              </li>
              <li className="text-[#f9f9f9] font-medium text-base md:text-lg lg:text-xl">
                <span className="gr-text">⦁</span> Participate in Naplozz
                Marketplace.
              </li>
              <li className="text-[#f9f9f9] font-medium text-base md:text-lg lg:text-xl">
                <span className="gr-text">⦁</span> They can use the Naplozz
                educational platform.
              </li>
              <li className="text-[#f9f9f9] font-medium text-base md:text-lg lg:text-xl">
                <span className="gr-text">⦁</span> They can use the Naplozz help
                desk.
              </li>
            </ul>
            <div className="absolute -inset-[1px] bg-blueGr -z-20 rounded-[40px] group-hover:opacity-0 transition-all duration-500"></div>
            <div className="absolute -inset-[1px] bg-btnGr opacity-0 -z-20 rounded-[40px] group-hover:opacity-100 transition-all duration-500"></div>
          </div>
        </div>
        <img
          ref={line8}
          src="/explore/line6.png"
          className=" mb-6 md:block hidden"
          alt=""
        />
        <h2 className="text-white text-[35px] sm:text-[50px] lg:text-[55px] mid:text-[72px] font-bold md:text-left text-center">
          Naplozz Marketplace usages:
        </h2>
        <div className="md:flex hidden mb-5 justify-start items-center">
          <img ref={line9} src="/explore/line7.png" alt="" />
          <img ref={line10} src="/explore/line8.png" alt="" />
        </div>
        <div className="w-full justify-start md:flex-row flex-col items-stretch gap-[40px] md:gap-[150px] flex">
          <div className="flex group justify-center max-w-none w-full xl:max-w-[515px]  items-center relative isolate rounded-[40px]">
            <ul className="w-full bg-black list-none p-5 h-full flex justify-start rounded-[40px] items-start flex-col gap-4">
              <li className="text-[#f9f9f9]  font-medium text-base sm:text-xl">
                <span className="gr-text">⦁</span> Get HACCP and documents with
                a discount.
              </li>
              <li className="text-[#f9f9f9] font-medium text-base md:text-lg lg:text-xl">
                <span className="gr-text">⦁</span> Naplozz Star program - Show
                the world how good are you.
              </li>
              <li className="text-[#f9f9f9] font-medium text-base md:text-lg lg:text-xl">
                <span className="gr-text">⦁</span> Use the app for free just by
                holding tokens.
              </li>
            </ul>
            <div className="absolute -inset-[1px] bg-blueGr -z-20 rounded-[40px] group-hover:opacity-0 transition-all duration-500"></div>
            <div className="absolute -inset-[1px] bg-btnGr opacity-0 -z-20 rounded-[40px] group-hover:opacity-100 transition-all duration-500"></div>
          </div>
          <div className="flex group justify-center max-w-none w-full xl:max-w-[515px]  items-center relative isolate rounded-[40px]">
            <ul className="w-full bg-black list-none p-5 h-full flex justify-start rounded-[40px] items-start flex-col gap-4">
              <li className="text-[#f9f9f9]  font-medium text-base sm:text-xl">
                <span className="gr-text">⦁</span> Find easily employees by
                holding tokens.
              </li>
              <li className="text-[#f9f9f9] font-medium text-base md:text-lg lg:text-xl">
                <span className="gr-text">⦁</span> Find easily suppliers by
                buying and holding tokens.
              </li>
              <li className="text-[#f9f9f9] font-medium text-base md:text-lg lg:text-xl">
                <span className="gr-text">⦁</span> Make a good deal via our
                system by buying and holding tokens.
              </li>
            </ul>
            <div className="absolute -inset-[1px] bg-blueGr -z-20 rounded-[40px] group-hover:opacity-0 transition-all duration-500"></div>
            <div className="absolute -inset-[1px] bg-btnGr opacity-0 -z-20 rounded-[40px] group-hover:opacity-100 transition-all duration-500"></div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Utilities;
