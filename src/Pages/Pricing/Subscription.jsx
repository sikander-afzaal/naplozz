import { useState } from "react";
import Slider from "react-rangeslider";
import "react-rangeslider/lib/index.css";
import SubscribeBox from "../../Components/SubscribeBox";

const Subscription = () => {
  const [planType, setPlanType] = useState("monthly");
  const [users, setUsers] = useState(0);
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
    },
  ];
  return (
    <div className="wrapper pt-[80px] md:pt-[100px] xl:pt-[300px] relative">
      <div className="bg-btnGr w-full absolute left-1/2 top-0 -translate-x-1/2 max-w-[1709px] h-[533px] opacity-20 blur-[130px] -z-10"></div>
      <div className="contain flex flex-col gap-5 justify-start items-start ">
        <div className="flex justify-between items-center md:flex-row flex-col gap-4 md:mb-0 mb-3 md:gap-2 w-full">
          <h2 className="gr-text font-bold text-[40px] sm:text-left text-center sm:text-[45px] lg:text-[60px] xl:text-[90px]">
            Subscription Model
          </h2>
          <div className="flex relative justify-between p-[3px] items-center gap-1 w-full rounded-full max-w-[206px] bg-black border-[1px] border-solid border-[#FF519F] h-[48px]">
            <p
              onClick={() => setPlanType("monthly")}
              className={`${
                planType === "monthly"
                  ? "bg-[#FF519F] text-black"
                  : "bg-transparent text-white"
              } rounded-full w-full font-medium h-full flex select-none cursor-pointer transition-all duration-500 justify-center items-center`}
            >
              Monthly
            </p>
            <p
              onClick={() => setPlanType("yearly")}
              className={`${
                planType === "yearly"
                  ? "bg-[#FF519F] text-black"
                  : "bg-transparent text-white"
              } rounded-full w-full font-medium h-full select-none  flex cursor-pointer transition-all duration-500 justify-center items-center`}
            >
              Yearly
            </p>
            {planType === "yearly" && (
              <p className="text-[#FF519F] font-medium text-base absolute top-[120%] left-1/2 -translate-x-1/2">
                20% Discount
              </p>
            )}
          </div>
        </div>
        <div className="flex justify-start items-start flex-col w-full">
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
                users={users}
                {...elem}
                discount={planType === "yearly" ? true : false}
                key={idx + "plan" + elem.heading}
              />
            );
          })}
        </div>
        <p className="text-center text-[#FF519F] self-center mt-3">
          *Plus 20% NAP token will be bought from the open market of each of the
          payments by the subscriber.
        </p>
      </div>
    </div>
  );
};

export default Subscription;
