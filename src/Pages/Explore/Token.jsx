const Token = () => {
  return (
    <div className="wrapper mt-[80px] lg:mt-[120px]">
      <div className="contain flex-col justify-start items-center">
        <div
          id="token"
          className="flex w-full lg:flex-row flex-col gap-[40px] sm:gap-[80px] lg:gap-0 justify-between items-center"
        >
          <div className="relative flex justify-center items-center lg:w-full  isolate">
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2  h-[465px] opacity-10 blur-[125px] bg-[#0262F7] w-full r max-w-[430px] -z-10"></div>
            <img
              src="/explore/token.png"
              className=" 2xl:pr-[200px] lg:w-auto mid:max-w-full max-w-full lg:max-w-[400px]"
              alt=""
            />
          </div>
          <div className="flex justify-start items-center text-center lg:text-left lg:items-start flex-col max-w-[430px]">
            <img
              src="/explore/ball.png"
              className="self-end bead max-w-[70px] lg:max-w-[100px] object-contain"
              alt=""
            />
            <h2 className="text-white text-[40px] sm:text-[48px] font-bold">
              NAP Token
            </h2>
            <p className="text:lg sm:text-xl font-medium text-[#b3b3b3]">
              NAP token is a digital currency that gives you the ability to
              incentivize your employees. You can use it to reward them for
              their hard work, promote a healthy work-life balance, or even
              increase productivity by giving them bonuses on top of their
              salary.
            </p>
          </div>
        </div>
        <div className="flex xl:flex-row flex-col mt-[70px] sm:mt-[110px] justify-between w-full items-start gap-[50px] xl:gap-6">
          <div className="flex justify-start items-center text-center xl:text-left xl:items-start flex-col max-w-[530px]">
            <img
              src="/explore/ball.png"
              className="self-start bead mb-5 ml-5 max-w-[40px] object-contain"
              alt=""
            />
            <h2 className="text-white text-[40px] sm:text-[48px] font-bold">
              NAP Compliance Metric
            </h2>
            <p className="text:lg sm:text-xl font-medium text-[#b3b3b3]">
              The Naplozz Rewards Program is built to reward the quality work
              that goes into every project. The entire user interface is
              designed with metrics that measure all aspects of your workflow,
              including mandatory tasks, attendance records, and record keeping.
            </p>
          </div>
          <div className="flex justify-start items-start flex-col gap-10">
            <div className="flex justify-start items-center gap-5">
              <img
                src="/explore/diamond.png"
                className="w-[80px] object-contain"
                alt=""
              />
              <div className="flex justify-start items-start flex-col">
                <h6 className="font-bold text-xl text-white">
                  Diamond Quality:
                </h6>
                <p className="text-base text-white">
                  95-100% monthly result - 100% of the tokens can be unlocked
                </p>
              </div>
            </div>
            <div className="flex justify-start items-center gap-5">
              <img
                src="/explore/platina.png"
                className="w-[80px] object-contain"
                alt=""
              />
              <div className="flex justify-start items-start flex-col">
                <h6 className="font-bold text-xl text-white">
                  Platina Quality:
                </h6>
                <p className="text-base text-white">
                  90-95% monthly result - 75% of the tokens can be unlocked
                </p>
              </div>
            </div>
            <div className="flex justify-start items-center gap-5">
              <img
                src="/explore/Gold.png"
                className="w-[80px] object-contain"
                alt=""
              />
              <div className="flex justify-start items-start flex-col">
                <h6 className="font-bold text-xl text-white">Gold Quality:</h6>
                <p className="text-base text-white">
                  85-90% monthly result -50% of the tokens can be unlocked
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Token;
