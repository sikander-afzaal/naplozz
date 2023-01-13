const Detailed = () => {
  const DETAILED_DATA = [
    {
      text: "Log Templates",
      free: "",
      basic: "check",
      pro: "check",
      premium: "check",
    },
    {
      text: "Custom log",
      free: "Limited",
      basic: "check",
      pro: "check",
      premium: "check",
    },
    {
      text: "Task management assign tasks",
      free: "check",
      basic: "check",
      pro: "check",
      premium: "check",
    },
    {
      text: "Checklist system",
      free: "check",
      basic: "check",
      pro: "check",
      premium: "check",
    },
    {
      text: "Workflow assistance",
      free: "check",
      basic: "check",
      pro: "check",
      premium: "check",
    },
    {
      text: "User and role management",
      free: "",
      basic: "check",
      pro: "check",
      premium: "check",
    },
    {
      text: "Quantity of guest at one time",
      free: "",
      basic: "Up to 3 guests at one time",
      pro: "Up to 5 guests at one time",
      premium: "Unlimited",
    },
    {
      text: "Teamwork assistance",
      free: "",
      basic: "check",
      pro: "check",
      premium: "check",
    },
    {
      text: "Task tree",
      free: "",
      basic: "",
      pro: "check",
      premium: "check",
      soon: true,
    },
    {
      text: "Logging assistance",
      free: "",
      basic: "check",
      pro: "check",
      premium: "check",
    },
    {
      text: "Attendance",
      free: "",
      basic: "check",
      pro: "check",
      premium: "check",
      soon: true,
    },
    {
      text: "Ratings",
      free: "",
      basic: "",
      pro: "",
      premium: "",
      soon: true,
    },
    {
      text: "Chat",
      free: "",
      basic: "Limited",
      pro: "Full",
      premium: "Full",
      soon: true,
    },
    {
      text: "Group Chat",
      free: "",
      basic: "",
      pro: "check",
      premium: "check",
      soon: true,
    },
    {
      text: "Smart chat bot",
      free: "check",
      basic: "check",
      pro: "check",
      premium: "check",
      soon: true,
    },
    {
      text: "Live support",
      free: "",
      basic: "check",
      pro: "",
      premium: "check",
      soon: true,
    },
    {
      text: "Priority support",
      free: "",
      basic: "",
      pro: "check",
      premium: "check",
      soon: true,
    },
    {
      text: "Dedicated consulting manager",
      free: "",
      basic: "",
      pro: "",
      premium: "check",
      soon: true,
    },
    {
      text: "Token reward program",
      free: "",
      basic: "check",
      pro: "check",
      premium: "check",
      soon: true,
    },
    {
      text: "Integrations",
      free: "",
      basic: "",
      pro: "",
      premium: "check",
      soon: true,
    },
    {
      text: "Naplozz Star Program",
      free: "Basic",
      basic: "Accessible",
      pro: "Full",
      premium: "Priority",
    },
    {
      text: "Naplozz Marketplace",
      free: "Basic",
      basic: "Accessible",
      pro: "Full",
      premium: "Priority",
    },
    {
      text: "Naplozz Education Platform and Helpdesk",
      free: "Basic",
      basic: "Accessible",
      pro: "Full",
      premium: "Priority",
    },
    {
      text: "HACCP and assessment order",
      free: "Basic",
      basic: "Accessible",
      pro: "Full",
      premium: "Priority",
    },
  ];
  return (
    <div className="wrapper mt-[70px] xl:mt-[100px] relative">
      <div className="absolute right-0 translate-x-1/2 -top-[8%] -z-10 w-full h-[217px] blur-[130px] bg-bluishGr max-w-[1709px]"></div>
      <div className="absolute left-0 -translate-x-1/2 top-[10%] -z-10 w-full h-[1000px] bg-[#A50498] blur-[250px] opacity-[0.25]  max-w-[1709px]"></div>
      <div className="contain flex-col  justify-start items-center sm:items-start gap-5">
        <h2 className="text-white font-bold mb-5 text-[40px] sm:text-[50px]">
          Detailed Pricing
        </h2>
        <div className="flex roadmap justify-start overflow-x-auto items-start flex-col w-full">
          <div className="grid min-w-[1200px] grid-cols-[1.5fr__1fr__1fr__1fr__1fr] sm:grid-cols-[2.5fr__1fr__1fr__1fr__1fr] w-full">
            <div></div>
            <div className="w-full border-l-[1px] text-white text-2xl font-medium border-b-[1px] border-solid border-[#FFFFFF9E] text-left p-3">
              Free
            </div>
            <div className="w-full border-l-[1px] text-white text-2xl font-medium border-b-[1px] border-solid border-[#FFFFFF9E] text-left p-3">
              Basic
            </div>
            <div className="w-full border-l-[1px] text-white text-2xl font-medium border-b-[1px] border-solid border-[#FFFFFF9E] text-left p-3">
              Pro
            </div>
            <div className="w-full border-l-[1px] text-white text-2xl font-medium border-b-[1px] border-solid border-[#FFFFFF9E] text-left p-3">
              Premium
            </div>
          </div>
          <div className="grid min-w-[1200px] grid-cols-[1.5fr__1fr__1fr__1fr__1fr] sm:grid-cols-[2.5fr__1fr__1fr__1fr__1fr] w-full">
            <div className="border-b-[1px]   border-l-[#FFFFFF9E] border-b-[#FFFFFF1F] border-solid w-full"></div>
            <div className="w-full  border-l-[1px] border-b-[1px] border-solid border-b-[#FFFFFF1F] border-l-[#FFFFFF9E] text-left p-3"></div>
            <div className="w-full border-l-[1px] text-white text-2xl font-medium border-b-[1px] border-solid border-b-[#FFFFFF1F] border-l-[#FFFFFF9E] text-left py-6 px-3">
              <div className="flex justify-start items-start gap-2 flex-col ">
                <div className="flex justify-start  items-end gap-1">
                  <h2 className="text-white font-semibold flex justify-start gap-1 items-center text-[30px] 2xl:text-[40px]">
                    <sup className="text-base font-normal self-start mt-3">
                      $
                    </sup>{" "}
                    3.5
                  </h2>
                  <p className="text-white  text-sm 2xl:text-base  opacity-[0.24]">
                    /user/month*
                  </p>
                </div>
                <p className="text-white text-sm 2xl:text-base   opacity-[0.38]">
                  min. 3 users
                </p>
              </div>
            </div>
            <div className="w-full border-l-[1px]  text-white text-2xl font-medium border-b-[1px] border-solid border-l-[#FFFFFF9E] border-b-[#FFFFFF1F] text-left py-6 px-3">
              <div className="flex justify-start items-start gap-2 flex-col ">
                <div className="flex justify-start items-center gap-1">
                  <h2 className="text-white font-semibold flex justify-start gap-1 items-center text-[30px] 2xl:text-[40px]">
                    <sup className="text-base font-normal self-start mt-3">
                      $
                    </sup>{" "}
                    4.5
                  </h2>
                  <p className="text-white text-sm 2xl:text-base opacity-[0.24]">
                    /user/month*
                  </p>
                </div>
                <p className="text-white text-sm 2xl:text-base opacity-[0.38]">
                  min. 3 users
                </p>
              </div>
            </div>
            <div className="w-full border-l-[1px] text-white text-2xl font-medium border-b-[1px] border-solid  border-l-[#FFFFFF9E] border-b-[#FFFFFF1F] text-left py-6 px-3">
              <div className="flex justify-start items-start gap-2 flex-col ">
                <div className="flex justify-start items-center gap-1">
                  <h2 className="text-white font-semibold flex justify-start gap-1 items-center text-[30px] 2xl:text-[40px]">
                    <sup className="text-base font-normal self-start mt-3">
                      $
                    </sup>{" "}
                    5.5
                  </h2>
                  <p className="text-white text-sm 2xl:text-base opacity-[0.24]">
                    /user/month*
                  </p>
                </div>
                <p className="text-white text-sm 2xl:text-base opacity-[0.38]">
                  min. 3 users
                </p>
              </div>
            </div>
          </div>
          {DETAILED_DATA.map((elem, idx) => {
            return <DetailedRow {...elem} key={idx + "detail"} />;
          })}
        </div>
      </div>
    </div>
  );
};

export default Detailed;

const DetailedRow = ({ text, free, basic, pro, premium, soon }) => {
  return (
    <div className="grid min-w-[1200px] grid-cols-[1.5fr__1fr__1fr__1fr__1fr] sm:grid-cols-[2.5fr__1fr__1fr__1fr__1fr] w-full">
      <div className="flex  justify-start items-center leading-[1] w-full text-white text-sm sm:text-lg font-medium border-b-[1px] border-solid border-b-[#FFFFFF1F]  text-left py-4 px-3">
        {text} {soon && <span className="text-[#FF519F]"> (Coming Soon)</span>}
      </div>
      <div className="w-full border-l-[1px] flex justify-center items-center text-white text-lg font-medium border-b-[1px] border-solid border-b-[#FFFFFF1F] border-l-[#FFFFFF9E] text-center py-4 px-6">
        {free && free !== "check" ? (
          free
        ) : free === "check" ? (
          <img src="/check.png" className="w-[36px] object-contain" alt="" />
        ) : (
          <div className="w-[36px] h-[1px] bg-[#414148]"></div>
        )}
      </div>
      <div className="w-full border-l-[1px] flex justify-center items-center text-white text-lg font-medium border-b-[1px] border-solid border-b-[#FFFFFF1F] border-l-[#FFFFFF9E] text-center py-4 px-6">
        {basic && basic !== "check" ? (
          basic
        ) : basic === "check" ? (
          <img src="/check.png" className="w-[36px] object-contain" alt="" />
        ) : (
          <div className="w-[36px] h-[1px] bg-[#414148]"></div>
        )}
      </div>
      <div className="w-full border-l-[1px] flex justify-center items-center text-white text-lg font-medium border-b-[1px] border-solid border-b-[#FFFFFF1F] border-l-[#FFFFFF9E] text-center py-4 px-6">
        {pro && pro !== "check" ? (
          pro
        ) : pro === "check" ? (
          <img src="/check.png" className="w-[36px] object-contain" alt="" />
        ) : (
          <div className="w-[36px] h-[1px] bg-[#414148]"></div>
        )}
      </div>
      <div className="w-full border-l-[1px] flex justify-center items-center text-white text-lg font-medium border-b-[1px] border-solid border-b-[#FFFFFF1F] border-l-[#FFFFFF9E] text-center py-4 px-6">
        {premium && premium !== "check" ? (
          premium
        ) : premium === "check" ? (
          <img src="/check.png" className="w-[36px] object-contain" alt="" />
        ) : (
          <div className="w-[36px] h-[1px] bg-[#414148]"></div>
        )}
      </div>
    </div>
  );
};
