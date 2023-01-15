import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";
import { useEffect, useRef, useState } from "react";
import Slider from "react-rangeslider";
import "react-rangeslider/lib/index.css";
import SubscribeBox from "../../Components/SubscribeBox";

const Subscription = () => {
  const container = useRef();
  const heading = useRef();
  const btn = useRef();
  const slider = useRef();
  const box1 = useRef();
  const box2 = useRef();
  const box3 = useRef();
  const box4 = useRef();
  const [planType, setPlanType] = useState("monthly");
  const [users, setUsers] = useState(3);
  const handleChange = (val) => {
    setUsers(val);
  };
  const horizontalLabels = {
    0: "",
    25: "",
    50: "",
    75: "",
    100: "",
  };
  const PLANS__DATA = [
    {
      heading: "Free",
      perks: [
        "No unit",
        "No wizard",
        "No logs",
        "Task and group management",
        "No Attendance",
        "No admin invite",
        "No admin invite",
        "No audit",
        "Basic statistics after the tasks",
      ],
      ref: box1,
    },
    {
      heading: "Basic",
      price: "3.5",
      perks: [
        "One simple unit",
        "Log wizard",
        "Up to 3 guests at once",
        "Unlimited logs",
        "Task and group management",
        "Attendance",
        "No admin invite",
        "No support chat",
        "No audit system",
        "Basic statistics",
      ],
      ref: box2,
    },
    {
      heading: "Pro",
      price: "4.5",
      perks: [
        "Multiple units chain",
        "Log wizard",
        "Up to 5 guests at once",
        "Unlimited logs",
        "Task and group management",
        "Attendance",
        "Up to 3 admin invites at once",
        "Support chat",
        "Up to 5 Audit protocols at once",
        "Detailed statistics",
      ],
      recommended: true,
      ref: box3,
    },
    {
      heading: "Premium",
      price: "5.5",
      perks: [
        "Enterprise/franchise",
        "Log wizard",
        "Unlimited quests",
        "Unlimited logs",
        "Task and group management",
        "Attendance",
        "Unlimited admin invites at once",
        "Dedicated support manager",
        "Unlimited protocols at once",
        "Income tracking and detailed statistics",
      ],
      ref: box4,
    },
  ];
  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);
    const timeline = gsap.timeline({
      defaults: { duration: 0.3 },
      scrollTrigger: {
        trigger: container.current,
        start: "top 50%",
      },
    });
    timeline
      .fromTo(heading.current, { opacity: 0, x: -30 }, { opacity: 1, x: 0 })
      .fromTo(btn.current, { opacity: 0, x: 30 }, { opacity: 1, x: 0 })
      .fromTo(slider.current, { opacity: 0, y: 30 }, { opacity: 1, y: 0 })
      .fromTo(
        [box1.current, box2.current, box3.current, box4.current],
        { opacity: 0, y: 40 },
        { opacity: 1, y: 0, stagger: 0.4 }
      );
    return () => {
      timeline.kill();
    };
  }, []);

  return (
    <div
      ref={container}
      className="wrapper pt-[80px] md:pt-[100px] xl:pt-[300px] relative"
    >
      <div className="bg-btnGr w-full absolute left-1/2 top-0 -translate-x-1/2 max-w-[1709px] h-[533px] opacity-20 blur-[130px] -z-10"></div>
      <div className="contain flex flex-col gap-5 justify-start items-start ">
        <div className="flex justify-between items-center md:flex-row flex-col gap-4 md:mb-0 mb-3 md:gap-2 w-full">
          <h2
            ref={heading}
            className="gr-text font-bold text-[40px] sm:text-left text-center sm:text-[45px] lg:text-[60px] xl:text-[90px]"
          >
            Subscription Model
          </h2>
          <div
            ref={btn}
            className="flex relative justify-between p-[3px] items-center gap-1 w-full rounded-full max-w-[206px] bg-black border-[1px] border-solid border-lightPink h-[48px]"
          >
            <p
              onClick={() => setPlanType("monthly")}
              className={`${
                planType === "monthly"
                  ? "bg-lightPink text-black"
                  : "bg-transparent text-white"
              } rounded-full w-full font-medium h-full flex select-none cursor-pointer transition-all duration-500 justify-center items-center`}
            >
              Monthly
            </p>
            <p
              onClick={() => setPlanType("yearly")}
              className={`${
                planType === "yearly"
                  ? "bg-lightPink text-black"
                  : "bg-transparent text-white"
              } rounded-full w-full font-medium h-full select-none  flex cursor-pointer transition-all duration-500 justify-center items-center`}
            >
              Yearly
            </p>
            {planType === "yearly" && (
              <p className="text-lightPink font-medium text-base absolute top-[120%] left-1/2 -translate-x-1/2">
                20% Discount
              </p>
            )}
          </div>
        </div>
        <div
          ref={slider}
          className="flex justify-start items-start flex-col w-full"
        >
          <p className="text-white opacity-[0.38] text-xl">
            Please select the number of users.
          </p>
          <Slider
            className="w-full"
            min={3}
            max={100}
            labels={horizontalLabels}
            value={users}
            onChange={handleChange}
          />
        </div>
        <div className="xl:flex grid grid-cols-1 sm:grid-cols-2 place-items-center mt-5  gap-10 xl:gap-5 justify-between w-full items-start">
          {PLANS__DATA.map((elem, idx) => {
            return (
              <SubscribeBox
                ref={elem.ref}
                users={users}
                {...elem}
                discount={planType === "yearly" ? true : false}
                key={idx + "plan" + elem.heading}
              />
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default Subscription;
