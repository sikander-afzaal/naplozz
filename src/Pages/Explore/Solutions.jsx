import { useState } from "react";

const Solutions = () => {
  const [tab, setTab] = useState("task");
  const DATA = {
    task: {
      desc: "A simple interface that allows you to track your tasks and assign them to employees. You can create tasks for each department to track what needs to be done and when you need to do it. You can also set deadlines, regularity and alerts for each task so that you know when something is due or overdue.",
      img: "/explore/sol1.png",
    },
    user: {
      desc: "The Naplozz App is designed to minimize bureaucracy and maximize your users’ productivity. Each level has its user level, meaning you can set different privileges for different user groups, allowing you to oversee their access to certain pages or resources on the site.",
      points: ["Admin", "Leader", "Site Manager", "User", "Guest"],
      sub: "The user-level hierarchy is as follows.",
      img: "/explore/sol2.png",
    },
    log: {
      desc: "The Log Manager allows you to organize and monitor your inspection records and logs easily. It is designed to help you keep track of your data. It provides the tools to perform simple tasks like storing data until needed, exporting data into other applications or services, or even converting log entries into investigations.",
      img: "/explore/sol3.png",
    },
    wizard: {
      desc: "Naplozz site wizard is a new way to create workspaces(sites) with compliance friendly environment so that you can start your team from scratch. The site wizard will ask you questions about your company and the purpose of your site. You'll be able to create a whole network of sites by answering questions about location and group size. . You don't need to worry about anything because Naplozz takes care of everything for you!",
      img: "/explore/sol4.png",
    },
    audit: {
      desc: "Naplozz Audit is a tool that helps you manage your inspections. It allows you to create custom protocols and perform any kind of audit. This makes it easy for you to track the progress of your quality measures. Your audit results will be in your report and the summary and the rates will be available for check in your audit statistics. ",
      img: "/explore/sol5.png",
    },
    comms: {
      desc: "Naplozz helps you communicate with your team and understand the motivation of every member. You can communicate in real-time, allowing each member to voice their opinion and move forward. Plus, you’ll be able to see the workload breakdowns of each teammate and understand your tasks better.",
      img: "/explore/sol6.png",
    },
  };
  return (
    <div className="wrapper isolate py-[50px] xl:py-[100px] mt-[20px] relative">
      <img
        src="/explore/side-token1.png"
        className="absolute top-[70%] right-0 -z-30 "
        alt=""
      />
      {/* //top and bottom liness ---------------- */}
      <div className="w-[95%] absolute top-0 left-1/2 -translate-x-1/2 bg-[rgb(179,179,179)] opacity-[0.5]  h-[2px]">
        <div className="absolute left-0 z-20 top-1/2 -translate-y-1/2 xl:-translate-x-1/2 bg-[#B3B3B3]   w-4 h-4 rotate-45 rounded-full"></div>
        <div className="absolute right-0 z-20 top-1/2 -translate-y-1/2 xl:translate-x-1/2 bg-[rgb(179,179,179)]   w-4 h-4 rotate-45 rounded-full"></div>
      </div>
      <div className="w-[95%] absolute bottom-0 opacity-[0.5] left-1/2 -translate-x-1/2 bg-[rgb(179,179,179)]  h-[2px]">
        <div className="absolute left-0 z-20 top-1/2 -translate-y-1/2 xl:-translate-x-1/2 bg-[rgb(179,179,179)]   w-4 h-4 rotate-45 rounded-full"></div>
        <div className="absolute right-0 z-20 top-1/2 -translate-y-1/2 xl:translate-x-1/2 bg-[rgb(179,179,179)]   w-4 h-4 rotate-45 rounded-full"></div>
      </div>
      {/* //top and bottom liness ---------------- */}
      <div className="absolute -left-[30%] -top-[10%] bg-[#A50498] opacity-[0.24] blur-[250px] w-[80%] max-w-[1064px] h-[700px] -z-20"></div>
      <div className="contain flex-col xl:flex-row justify-between gap-10 xl:gap-[100px] items-center xl:items-start">
        <div className="flex justify-start sm:w-auto w-full items-center xl:items-start flex-col gap-10 xl:gap-20">
          <h2 className="text-[50px] font-bold text-white">Solutions</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:flex justify-start  flex-row items-start xl:flex-col gap-5 w-full">
            <div
              onClick={() => setTab("task")}
              className={`flex rounded-full border-2 border-solid cursor-pointer transition-all duration-500 ${
                tab === "task" ? "border-[#544683]" : "border-transparent"
              } px-5 w-full min-w-0 xl:min-w-[460px] h-[72px]  justify-start items-center gap-5`}
            >
              <span className="text-[#FF519F] font-bold text-lg xl:text-[24px]">
                01
              </span>
              <span className="text-[#FF519F] font-bold text-lg xl:text-[24px]">
                -
              </span>
              <span className="text-white font-bold text-lg xl:text-[24px]">
                Task Manager
              </span>
            </div>
            <div
              onClick={() => setTab("user")}
              className={`flex rounded-full border-2 border-solid cursor-pointer transition-all duration-500 ${
                tab === "user" ? "border-[#544683]" : "border-transparent"
              } px-5 w-full min-w-0 xl:min-w-[460px] h-[72px]  justify-start items-center gap-5`}
            >
              <span className="text-[#FF519F] font-bold text-lg xl:text-[24px]">
                02
              </span>
              <span className="text-[#FF519F] font-bold text-lg xl:text-[24px]">
                -
              </span>
              <span className="text-white font-bold text-lg xl:text-[24px]">
                User level hierarchy
              </span>
            </div>
            <div
              onClick={() => setTab("log")}
              className={`flex rounded-full border-2 border-solid cursor-pointer transition-all duration-500 ${
                tab === "log" ? "border-[#544683]" : "border-transparent"
              } px-5 w-full min-w-0 xl:min-w-[460px] h-[72px]  justify-start items-center gap-5`}
            >
              <span className="text-[#FF519F] font-bold text-lg xl:text-[24px]">
                03
              </span>
              <span className="text-[#FF519F] font-bold text-lg xl:text-[24px]">
                -
              </span>
              <span className="text-white font-bold text-lg xl:text-[24px]">
                Log Management
              </span>
            </div>
            <div
              onClick={() => setTab("wizard")}
              className={`flex rounded-full border-2 border-solid cursor-pointer transition-all duration-500 ${
                tab === "wizard" ? "border-[#544683]" : "border-transparent"
              } px-5 w-full min-w-0 xl:min-w-[460px] h-[72px]  justify-start items-center gap-5`}
            >
              <span className="text-[#FF519F] font-bold text-lg xl:text-[24px]">
                04
              </span>
              <span className="text-[#FF519F] font-bold text-lg xl:text-[24px]">
                -
              </span>
              <span className="text-white font-bold text-lg xl:text-[24px]">
                Naplozz Wizard
              </span>
            </div>
            <div
              onClick={() => setTab("audit")}
              className={`flex rounded-full border-2 border-solid cursor-pointer transition-all duration-500 ${
                tab === "audit" ? "border-[#544683]" : "border-transparent"
              } px-5 w-full min-w-0 xl:min-w-[460px] h-[72px]  justify-start items-center gap-5`}
            >
              <span className="text-[#FF519F] font-bold text-lg xl:text-[24px]">
                05
              </span>
              <span className="text-[#FF519F] font-bold text-lg xl:text-[24px]">
                -
              </span>
              <span className="text-white font-bold text-lg xl:text-[24px]">
                Naplozz Audit
              </span>
            </div>
            <div
              onClick={() => setTab("comms")}
              className={`flex rounded-full border-2 border-solid cursor-pointer transition-all duration-500 ${
                tab === "comms" ? "border-[#544683]" : "border-transparent"
              } px-5 w-full min-w-0 xl:min-w-[460px] h-[72px]  justify-start items-center gap-5`}
            >
              <span className="text-[#FF519F] font-bold text-lg xl:text-[24px]">
                06
              </span>
              <span className="text-[#FF519F] font-bold text-lg xl:text-[24px]">
                -
              </span>
              <span className="text-white font-bold text-lg xl:text-[24px]">
                Communication
              </span>
            </div>
            <div className="flex rounded-full border-2 border-solid pointer-events-none border-transparent px-5 w-full min-w-0 xl:min-w-[460px] h-[72px]  justify-start items-center gap-5">
              <span className="text-[rgba(255,81,159,0.3)] font-bold text-lg xl:text-[24px]">
                07
              </span>
              <span className="text-[rgba(255,81,159,0.3)] font-bold text-lg xl:text-[24px]">
                -
              </span>
              <span className="text-[rgba(255,255,255,0.3)] relative font-bold text-lg xl:text-[24px]">
                Naplozz Attendance <br /> Assistant <br />{" "}
                <span className="text-white text-sm absolute top-full left-0">
                  coming soon
                </span>
              </span>
            </div>
          </div>
        </div>
        {/* {tab data -------------------------------} */}
        <div className="flex justify-start items-center xl:items-start pt-[60px] flex-col gap-5 w-full">
          <p className="text-[#B3B3B3] max-w-[900px] xl:max-w-[700px] xl:text-left text-center font-semibold text-lg md:text-[23px] leading-[1.4]">
            {DATA[tab].desc}
          </p>
          {tab === "user" && (
            <>
              <p className="text-[#B3B3B3] max-w-[900px] xl:max-w-[700px] xl:text-left text-center font-semibold text-lg md:text-[23px] leading-[1.4]">
                {DATA[tab].sub}
              </p>
              <ul className="flex flex-wrap list-none justify-start items-center gap-5">
                {DATA.user.points.map((elem, idx) => {
                  return (
                    <li
                      className="text-[#FF866D] font-normal text-xl"
                      key={idx + elem}
                    >
                      ⦁ {elem}
                    </li>
                  );
                })}
              </ul>
            </>
          )}
          <img
            src={DATA[tab].img}
            className="object-contain xl:-ml-[70px] w-full max-w-[900px] xl:max-w-[760px]"
            alt=""
          />
        </div>
      </div>
    </div>
  );
};

export default Solutions;
