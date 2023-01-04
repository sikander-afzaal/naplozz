const Features = () => {
  return (
    <div className="wrapper mt-[190px] sm:mt-[240px] ">
      <div className="contain flex-col justify-start items-center">
        <div className="flex w-full xl:flex-row flex-col justify-center relative isolate items-center gap-[50px] xl:gap-[100px]">
          <div className="flex justify-start items-start flex-col gap-5">
            <h2 className="text-white text-[40px] sm:text-[48px] font-bold leading-[1]">
              Main features
            </h2>
            <p className="text-[rgba(255,255,255,0.62)] text-lg sm:text-[20px] font-medium  leading-[1.3]">
              Naplozz is a quality management and data tracking application
              utilizing technologies like blockchain.
            </p>
            <h3 className="text-white text-xl sm:text-[24px] font-bold leading-[1]">
              It logs, manages, tracks, and analyzes your employees work
            </h3>
            <p className="text-[rgba(255,255,255,0.62)] text-lg sm:text-[20px] font-medium  leading-[1.3]">
              Naplozz has been designed to be flexible for every company size
              and stage
            </p>
          </div>
          <img
            src="/set2.png"
            className="absolute max-w-[110px] right-0 bottom-full -z-10"
            alt=""
          />
          <img
            src="/vid.png"
            className="w-full max-w-[720px] object-contain"
            alt=""
          />
        </div>
        <div className="flex justify-start gap-8 mt-[40px] xl:mt-[80px] items-center flex-col xl:flex-row xl:items-stretch w-full ">
          <div className="flex justify-center max-w-none w-full xl:max-w-[520px]  items-center relative isolate rounded-[40px]">
            <ul className="w-full bg-black list-none p-5 h-full flex justify-start rounded-[40px] items-start flex-col gap-4">
              <li className="text-[#f9f9f9]  font-medium text-base sm:text-xl">
                ⦁ Easily track all the mandatory work happening in your business
                with a single click{" "}
              </li>

              <li className="text-[#f9f9f9] font-medium text-base sm:text-xl">
                ⦁ Create inner protocols or send protocols to other businesses
              </li>
              <li className="text-[#f9f9f9] font-medium text-base sm:text-xl">
                ⦁ Track your employees working time
              </li>
              <li className="text-[#f9f9f9] font-medium text-base sm:text-xl">
                ⦁ Stand out with your result through our social feed
              </li>
              <li className="text-[#f9f9f9] font-medium text-base sm:text-xl">
                ⦁ Easily order HACCP or other assessments
              </li>
            </ul>
            <div className="absolute -inset-[1px] bg-blueGr -z-20 rounded-[40px]"></div>
          </div>
          <div className="flex max-w-none w-full xl:max-w-[520px] justify-center  items-center relative isolate rounded-[40px]">
            <ul className="w-full bg-black list-none p-5 h-full flex justify-start rounded-[40px] items-start flex-col gap-4">
              <li className="text-[#f9f9f9]  font-medium text-base sm:text-xl">
                ⦁ Create a flexible dashboard for your team that enables them to
                see how they are performing across all their projects
              </li>
              <li className="text-[#f9f9f9] font-medium text-base sm:text-xl">
                ⦁ Manage tasks so that they are done on time, and no one misses
                out due to a lack of communication
              </li>
              <li className="text-[#f9f9f9] font-medium text-base sm:text-xl">
                ⦁ Reward your employees with NAP Tokens for their hard work
              </li>
              <li className="text-[#f9f9f9] font-medium text-base sm:text-xl">
                ⦁ Get educational certificates after completing our tests
              </li>
            </ul>
            <div className="absolute -inset-[1px] bg-blueGr -z-20 rounded-[40px]"></div>
          </div>
        </div>
        <div className=" flex w-full flex-col justify-start items-center sm:items-start gap-10 mt-[80px] sm:mt-[100px]">
          <h2 className="text-white text-center text-[38px] sm:text-[48px] font-bold leading-[1]">
            Our main features
          </h2>
          <div className="w-full flex-wrap flex justify-center lg:justify-between items-stretch gap-5">
            <div className="flex group justify-center items-center w-full max-w-[240px] relative rounded-[30px]">
              <div className="flex min-h-[200px] min-w-[200px]  flex-col  gap-2 justify-center items-center w-full h-full bg-black rounded-[30px]">
                <img src="/feat1.png" alt="" />
                <h6 className="text-white text-2xl font-medium">
                  Task Manager
                </h6>
              </div>
              <div className="flex justify-start group-hover:opacity-100 duration-500 transition-all group-hover:bottom-0 items-center w-full p-5 bg-black rounded-[30px] h-full absolute left-0 opacity-0 -bottom-[100px]">
                <p className="text-white text-lg">
                  A simple interface that allows you to track your tasks and
                  assign them to your employees
                </p>
              </div>
              <div className="absolute rounded-[30px] -inset-[1px] bg-blueGr -z-20 "></div>
            </div>
            <div className="flex group justify-center items-center w-full max-w-[240px] relative rounded-[30px]">
              <div className="flex min-h-[200px] min-w-[200px]  flex-col  gap-2 justify-center items-center w-full h-full bg-black rounded-[30px]">
                <img src="/feat2.png" alt="" />
                <h6 className="text-white text-2xl font-medium">User Levels</h6>
              </div>{" "}
              <div className="flex justify-start group-hover:opacity-100 duration-500 transition-all group-hover:bottom-0 items-center w-full p-5 bg-black rounded-[30px] h-full absolute left-0 opacity-0 -bottom-[100px]">
                <p className="text-white text-lg">
                  A simple interface that allows you to track your tasks and
                  assign them to your employees
                </p>
              </div>
              <div className="absolute rounded-[30px] -inset-[1px] bg-blueGr -z-20 "></div>
            </div>
            <div className="flex group justify-center items-center w-full max-w-[240px] relative rounded-[30px]">
              <div className="flex min-h-[200px] min-w-[200px]  flex-col  gap-2 justify-center items-center w-full h-full bg-black rounded-[30px]">
                <img src="/feat3.png" alt="" />
                <h6 className="text-white text-2xl font-medium">Log Manager</h6>
              </div>{" "}
              <div className="flex justify-start group-hover:opacity-100 duration-500 transition-all group-hover:bottom-0 items-center w-full p-5 bg-black rounded-[30px] h-full absolute left-0 opacity-0 -bottom-[100px]">
                <p className="text-white text-lg">
                  A simple interface that allows you to track your tasks and
                  assign them to your employees
                </p>
              </div>
              <div className="absolute rounded-[30px] -inset-[1px] bg-blueGr -z-20 "></div>
            </div>
            <div className="flex group justify-center items-center w-full max-w-[240px] relative rounded-[30px]">
              <div className="flex min-h-[200px] min-w-[200px]  flex-col  gap-2 justify-center items-center w-full h-full bg-black rounded-[30px]">
                <img src="/feat4.png" alt="" />
                <h6 className="text-white text-2xl font-medium">Attendance</h6>
              </div>{" "}
              <div className="flex justify-start group-hover:opacity-100 duration-500 transition-all group-hover:bottom-0 items-center w-full p-5 bg-black rounded-[30px] h-full absolute left-0 opacity-0 -bottom-[100px]">
                <p className="text-white text-lg">
                  A simple interface that allows you to track your tasks and
                  assign them to your employees
                </p>
              </div>
              <div className="absolute rounded-[30px] -inset-[1px] bg-blueGr -z-20 "></div>
            </div>
            <div className="flex group justify-center items-center w-full max-w-[240px] relative rounded-[30px]">
              <div className="flex min-h-[200px] min-w-[200px]  flex-col  gap-2 justify-center items-center w-full h-full bg-black rounded-[30px]">
                <img src="/feat5.png" alt="" />
                <h6 className="text-white text-2xl font-medium">Communicate</h6>
              </div>{" "}
              <div className="flex justify-start group-hover:opacity-100 duration-500 transition-all group-hover:bottom-0 items-center w-full p-5 bg-black rounded-[30px] h-full absolute left-0 opacity-0 -bottom-[100px]">
                <p className="text-white text-lg">
                  A simple interface that allows you to track your tasks and
                  assign them to your employees
                </p>
              </div>
              <div className="absolute rounded-[30px] -inset-[1px] bg-blueGr -z-20 "></div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Features;
