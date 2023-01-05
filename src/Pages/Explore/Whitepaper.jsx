const Whitepaper = () => {
  return (
    <div className="wrapper mt-[100px]  relative">
      <div className="absolute -right-[20%] -top-[15%] sm:-top-[25%] blur-[250px] bg-[#141338] -z-10 w-full max-w-[720px] h-[1039px]"></div>
      <div className="contain justify-center lg:flex-row flex-col items-center lg:items-start gap-[60px] lg:gap-[30px]">
        <div className="flex justify-start items-start flex-col w-full ">
          <div className="flex justify-start items-start flex-col w-full bg-[#050505] rounded-[30px] border-[1px] border-sold border-[#b3b3b3] overflow-hidden gap-3">
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
              <button className="bg-transparent border-[1px] border-solid border-white text-white h-[41px] w-[207px] rounded-full uppercase hover:bg-pink hover:border-pink  transition-all duration-500 cursor-pointer text-sm font-bold leading-[1]">
                Go to Documentation
              </button>
            </div>
          </div>
          <div className="flex justify-start sm:text-left text-center mt-[40px] lg:mt-[70px] xl:mt-[220px] items-start flex-col">
            <h2 className="gr-text font-bold text-[35px] sm:text-[60px] xl:text-[70px] leading-[1.4]">
              The Naplozz ecosystem is designed to grow steadily,
            </h2>
            <p className="text-lg sm:text-[26px] text-white font-bold">
              creating value for the NAP tokens and ensuring they are always in
              use.
            </p>
          </div>
        </div>
        <div className="flex justify-start items-center gap-7 flex-col ">
          <div className="relative isolate max-w-[500px] w-full bg-[#050505] rounded-[30px]  ">
            <div className="absolute bg-blueGr -inset-[1px] -z-10 rounded-[30px]"></div>
            <div className="bg-[#050505] flex justify-start items-start gap-5 p-6 flex-col w-full rounded-[30px]">
              <h4 className="text-[#b3b3b3] text-2xl font-bold">
                Sale coming soon
              </h4>
              <div className="w-full justify-between  flex items-center gap-3">
                <div className="flex justify-center sm:w-auto w-full items-stretch gap-2">
                  <div className="h-[45px] sm:h-[64px] w-full sm:min-w-[64px] max-w-[64px] bg-[#b3b3b3] rounded-xl"></div>
                  <div className="h-[45px] sm:h-[64px] w-full sm:min-w-[64px] max-w-[64px] bg-[#b3b3b3] rounded-xl"></div>
                </div>
                <div className="flex justify-center sm:w-auto w-full items-stretch gap-2">
                  <div className="h-[45px] sm:h-[64px] w-full sm:min-w-[64px] max-w-[64px] bg-[#b3b3b3] rounded-xl"></div>
                  <div className="h-[45px] sm:h-[64px] w-full sm:min-w-[64px] max-w-[64px] bg-[#b3b3b3] rounded-xl"></div>
                </div>
                <div className="flex justify-center sm:w-auto w-full items-stretch gap-2">
                  <div className="h-[45px] sm:h-[64px] w-full sm:min-w-[64px] max-w-[64px] bg-[#b3b3b3] rounded-xl"></div>
                  <div className="h-[45px] sm:h-[64px] w-full sm:min-w-[64px] max-w-[64px] bg-[#b3b3b3] rounded-xl"></div>
                </div>
              </div>
              <p className="text-[#b3b3b3] text-lg font-medium">
                Sed vitae orci vitae felis elementum lobortis.{" "}
              </p>
            </div>
          </div>
          <div className="flex justify-start items-center pb-0 flex-col w-full bg-blackGr2 rounded-[30px] border-[1px] max-w-[500px] py-5 sm:py-[30px] px-5 sm:px-[50px] border-sold border-[#b3b3b3]  gap-[30px]">
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
              <button className="bg-black -mt-[20px] translate-y-1/2 text-white border-none rounded-md h-[40px] w-[172px] text-base font-medium">
                Calculate
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Whitepaper;
