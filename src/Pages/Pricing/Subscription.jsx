import { useState } from "react";
import Slider from "react-rangeslider";
import "react-rangeslider/lib/index.css";

const Subscription = () => {
  const [planType, setPlanType] = useState("monthly");
  const [value, setValue] = useState(0);
  const handleChange = (val) => {
    setValue(val);
  };
  const horizontalLabels = {
    0: "",
    25: "",
    50: "",
    75: "",
    100: "",
  };
  return (
    <div className="wrapper mt-[100px] relative">
      <div className="contain flex flex-col gap-5 justify-start items-start ">
        <div className="flex justify-between items-center gap-2 w-full">
          <h2 className="gr-text font-bold text-[90px]">Subscription Model</h2>
          <div className="flex justify-between p-[3px] items-center gap-1 w-full rounded-full max-w-[206px] bg-black border-[1px] border-solid border-[#FF519F] h-[48px]">
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
          </div>
        </div>
        <div className="flex justify-start items-start flex-col w-full">
          <p className="text-white opacity-[0.38] text-xl">
            Please select the number of users.
          </p>
          <Slider
            className="w-full"
            min={0}
            max={100}
            labels={horizontalLabels}
            value={value}
            onChange={handleChange}
          />
        </div>
      </div>
    </div>
  );
};

export default Subscription;
