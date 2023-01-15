import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";
import { useEffect, useRef, useState } from "react";
import GradientButton from "../../Components/GradientButton";

const Whitepaper = () => {
  //timer
  const [timerDays, setTimerDays] = useState("00");
  const [timerHours, setTimerHours] = useState("00");
  const [timerMinutes, setTimerMinutes] = useState("00");
  const [timerSeconds, setTimerSeconds] = useState("00");
  let interval = useRef();
  const container = useRef();
  const whitepaper = useRef();
  const calculator = useRef();
  const heading = useRef();
  const para = useRef();
  const timer = useRef();
  const startTimer = () => {
    let end = new Date("2/06/2023 3:00 PM");
    interval = setInterval(() => {
      let _second = 1000;
      let _minute = _second * 60;
      let _hour = _minute * 60;
      let _day = _hour * 24;
      let now = new Date();
      let nowUTC = new Date(
        now.getUTCFullYear(),
        now.getUTCMonth(),
        now.getUTCDate(),
        now.getUTCHours(),
        now.getUTCMinutes(),
        now.getUTCSeconds()
      );
      let distance = end - nowUTC;
      var days = Math.floor(distance / _day);
      var hours = Math.floor((distance % _day) / _hour);
      var minutes = Math.floor((distance % _hour) / _minute);
      var seconds = Math.floor((distance % _minute) / _second);
      if (distance < 0) {
        clearInterval(interval.current);
        return;
      } else {
        setTimerDays(days);
        setTimerHours(hours);
        setTimerMinutes(minutes);
        setTimerSeconds(seconds);
      }
    });
  };
  useEffect(() => {
    startTimer();
    return () => {
      clearInterval(interval.current);
    };
  });
  //timer ends

  //animations starts
  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);
    const timeLine = gsap.timeline({
      defaults: { duration: 0.4 },
      scrollTrigger: {
        trigger: container.current,
        start: "top 30%",
      },
    });
    timeLine
      .fromTo(whitepaper.current, { x: -50, opacity: 0 }, { x: 0, opacity: 1 })
      .fromTo(calculator.current, { x: 50, opacity: 0 }, { x: 0, opacity: 1 })
      .fromTo(
        [heading.current, para.current],
        { y: -50, opacity: 0 },
        { y: 0, opacity: 1, stagger: 0.4 }
      )
      .fromTo(timer.current, { x: 50, opacity: 0 }, { x: 0, opacity: 1 });

    return () => {
      timeLine.kill();
    };
  }, []);

  //animations ends

  return (
    <div
      id="whitepaper"
      ref={container}
      className="wrapper mt-[100px]  relative"
    >
      <div className="absolute -right-[20%] -top-[15%] sm:-top-[25%] blur-[250px] bg-[#141338] -z-10 w-full max-w-[720px] h-[1039px]"></div>
      <div className="contain justify-center lg:flex-row flex-col items-center lg:items-start gap-[60px] lg:gap-[30px]">
        <div className="flex justify-start items-start flex-col w-full ">
          <div
            ref={whitepaper}
            className="flex justify-start items-start flex-col w-full bg-[#050505] rounded-[30px] border-[1px] border-sold border-[#b3b3b3] overflow-hidden gap-3"
          >
            <img
              src="/explore/whitepaper.png"
              className="w-full object-contain"
              alt=""
            />
            <div className="flex justify-start items-start p-6 flex-col gap-5">
              <h2 className="gr-text font-bold text-[48px]">White paper</h2>
              <p className="text-xl text-white font-medium">
                Use it to access the documentation for Naplozz
              </p>
              <a
                href="https://docs.naplozz.io/"
                target={"blank"}
                className="bg-transparent grid place-items-center border-[1px] border-solid border-white text-white h-[41px] w-[207px] rounded-full uppercase hover:bg-pink hover:border-pink  transition-all duration-500 cursor-pointer text-sm font-bold leading-[1]"
              >
                Go to Documentation
              </a>
            </div>
          </div>
          <div className="flex justify-start sm:text-left text-center mt-[40px] lg:mt-[70px] xl:mt-[180px] items-start flex-col">
            <h2
              ref={heading}
              className="gr-text font-bold text-[35px] sm:text-[60px] xl:text-[60px] mid:text-[70px] leading-[1.4]"
            >
              The Naplozz ecosystem is designed to grow steadily,
            </h2>
            <p
              ref={para}
              className="text-lg sm:text-[26px] text-white font-bold"
            >
              creating value for the NAP tokens and ensuring they are always in
              use.
            </p>
          </div>
        </div>
        <div className="flex lg:w-auto w-full  justify-start items-center gap-7 flex-col ">
          <div
            ref={calculator}
            className="flex justify-start items-center pb-0 flex-col w-full bg-blackGr2 rounded-[30px] border-[1px] max-w-[500px] py-5 sm:py-[30px] px-5 sm:px-[50px] border-sold border-[#b3b3b3]  gap-[30px]"
          >
            <h2 className="text-white font-semibold text-[26px]">
              Token value calculator
            </h2>
            <div className="flex justify-start items-start flex-col gap-3 w-full">
              <p className="text-xs font-semibold text-white">
                No. of years for the ecosystem pool to run out
              </p>
              <input
                type="text"
                className="w-full border-none h-[54px] bg-black rounded-[10px] outline-none text-white text-base pl-4"
              />
            </div>
            <div className="flex justify-start items-start flex-col gap-3 w-full">
              <p className="text-xs font-semibold text-white">
                Total number of tokens
              </p>
              <input
                type="text"
                className="w-full border-none h-[54px] bg-black rounded-[10px] outline-none text-white text-base pl-4"
              />
            </div>
            <div className="flex justify-start items-start flex-col gap-3 w-full">
              <p className="text-xs font-semibold text-white">
                Number of subscribers
              </p>
              <input
                type="text"
                className="w-full border-none h-[54px] bg-black rounded-[10px] outline-none text-white text-base pl-4"
              />
            </div>
            <div className="flex justify-start items-start flex-col gap-3 w-full">
              <p className="text-xs font-semibold text-white">
                Subscriber pays every month
              </p>
              <input
                type="text"
                className="w-full border-none h-[54px] bg-black rounded-[10px] outline-none text-white text-base pl-4"
              />
            </div>
            <div className="flex justify-start items-start flex-col gap-3 w-full">
              <p className="text-xs font-semibold text-white">
                Price of the token
              </p>
              <input
                type="text"
                className="w-full border-none h-[54px] bg-black rounded-[10px] outline-none text-white text-base pl-4"
              />
            </div>
            <div className="flex justify-center text-center items-center flex-col gap-4">
              <p className="text-white text-xl">Amount</p>
              <h5 className="font-bold text-pink text-2xl">$80</h5>
              <button className="bg-black -mt-[50px] translate-y-[120%] text-white border-none rounded-md h-[40px] w-[172px] text-base font-medium">
                Calculate
              </button>
            </div>
          </div>
          <div
            ref={timer}
            className="relative isolate max-w-[500px] mt-[30px] w-full bg-[#050505] rounded-[30px]  "
          >
            <div className="absolute bg-blueGr -inset-[1px] -z-10 rounded-[30px]"></div>
            <div className="bg-[#050505] flex justify-start items-center gap-5 p-6 flex-col w-full rounded-[30px]">
              <h4 className="text-[#b3b3b3] text-center text-2xl font-bold">
                Sale coming soon
              </h4>
              <div className="w-full justify-between  flex items-center gap-3">
                <div className="flex justify-center sm:w-auto w-full items-center">
                  <div className="h-[45px] sm:h-[64px] w-full flex justify-center items-center sm:min-w-[64px] max-w-[64px] bg-transparent rounded-xl">
                    <p className="gr-text text-[30px] mr-1 sm:m-0 sm:text-[40px] font-bold">
                      {timerDays < 10 ? "0" + timerDays : timerDays}
                    </p>
                  </div>
                  <p className="text-white text-sm mt-[10px] sm:mt-[20px]">
                    Days
                  </p>
                </div>
                <div className="flex justify-center sm:w-auto w-full items-center">
                  <div className="h-[45px] sm:h-[64px] w-full flex justify-center items-center sm:min-w-[64px] max-w-[64px] bg-transparent rounded-xl">
                    <p className="gr-text text-[30px] mr-1 sm:m-0 sm:text-[40px] font-bold">
                      {timerHours < 10 ? "0" + timerHours : timerHours}
                    </p>
                  </div>{" "}
                  <p className="text-white text-sm mt-[10px] sm:mt-[20px]">
                    Hrs
                  </p>
                </div>
                <div className="flex justify-center sm:w-auto w-full items-center">
                  <div className="h-[45px] sm:h-[64px] w-full flex justify-center items-center sm:min-w-[64px] max-w-[64px] bg-transparent rounded-xl">
                    <p className="gr-text text-[30px] mr-1 sm:m-0 sm:text-[40px] font-bold">
                      {timerMinutes < 10 ? "0" + timerMinutes : timerMinutes}
                    </p>
                  </div>{" "}
                  <p className="text-white text-sm mt-[10px] sm:mt-[20px]">
                    Mins
                  </p>
                </div>
                <div className="flex justify-center sm:w-auto w-full items-center">
                  <div className="h-[45px] sm:h-[64px] w-full flex justify-center items-center sm:min-w-[64px] max-w-[64px] bg-transparent rounded-xl">
                    <p className="gr-text text-[30px] mr-1 sm:m-0 sm:text-[40px] font-bold">
                      {timerSeconds < 10 ? "0" + timerSeconds : timerSeconds}
                    </p>
                  </div>{" "}
                  <p className="text-white text-sm mt-[10px] sm:mt-[20px]">
                    Secs
                  </p>
                </div>
              </div>
              <GradientButton
                text="Join Whitelist"
                classes="w-[150px] h-[50px] hover:w-[200px]"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Whitepaper;
