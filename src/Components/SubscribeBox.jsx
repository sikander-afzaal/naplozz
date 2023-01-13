const SubscribeBox = ({ heading, price, perks, recommended }) => {
  return (
    <div className="w-full max-w-full xl:max-w-[266px] xl:h-auto h-full mid:max-w-[306px] rounded-[30px]  relative">
      <div
        className={`absolute bg-blueGr ${
          recommended ? "-inset-[3px]" : "-inset-[1px]"
        } rounded-[30px] -z-10`}
      ></div>
      {recommended && (
        <div className="absolute top-0 left-1/2 -translate-x-1/2 bg-pinkGr w-[134px] h-[40px] text-white rounded-[10px] flex justify-center items-center -translate-y-1/2 text-base font-bold">
          Recommended
        </div>
      )}
      <div className="flex justify-start xl:h-auto h-full gap-4 bg-black  px-3 py-4 items-start rounded-[30px] flex-col">
        <h3 className="text-white font-medium text-2xl">{heading}</h3>
        {price && (
          <div className="flex justify-start items-start flex-col ">
            <div className="flex justify-start items-center gap-1">
              <h2 className="text-white font-semibold flex justify-start gap-1 items-center text-[40px]">
                <sup className="text-base font-normal self-start mt-3">$</sup>{" "}
                {price}
              </h2>
              <p className="text-white opacity-[0.24]">/user/month*</p>
            </div>
            <p className="text-white opacity-[0.38]">min. 3 users</p>
          </div>
        )}
        <div className="flex justify-start items-start flex-col gap-4 w-full">
          {perks.map((elem, idx) => {
            return (
              <p
                key={idx + price + heading}
                className="flex text-white justify-start items-center gap-2 w-full"
              >
                <img
                  className="w-[14px] object-contain"
                  src="/check.png"
                  alt=""
                />{" "}
                {elem}
              </p>
            );
          })}
        </div>
        <p className="font-semibold cursor-pointer text-[#ff519f] mt-2">
          View Detailed Pricing
        </p>
        <button className="rounded-full text-[#141338] font-bold flex justify-center items-center gap-2 bg-[#2BD1FF] w-[170px] h-[51px] border-2 border-solid border-[#2BD1FF] hover:bg-transparent hover:text-white transition-all duration-500 cursor-pointer mt-5">
          Get started{" "}
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={1.5}
            stroke="currentColor"
            className="w-6 h-6"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M8.25 4.5l7.5 7.5-7.5 7.5"
            />
          </svg>
        </button>
      </div>
    </div>
  );
};

export default SubscribeBox;
