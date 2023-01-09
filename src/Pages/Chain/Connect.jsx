import { faChevronRight } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const Connect = () => {
  return (
    <div className="wrapper relative  xl:pt-[310px] ">
      <div className="absolute left-1/2 top-[20%] -translate-x-1/2 -translate-y-1/2 bg-[#2BD1FF] blur-[130px] w-full max-w-[1110px] h-[522px] opacity-[0.1] -z-10"></div>
      <div className="absolute left-1/2 top-[50%] -translate-x-1/2 -translate-y-1/2 bg-[#0262F7] blur-[120px] w-full max-w-[1270px] h-[674px] opacity-[0.1] -z-10"></div>
      <div className="contain relative  flex-col justify-start items-center text-center lg:text-left lg:items-start gap-4 lg:gap-1">
        <h3 className="gr-text leading-[1.1] text-[30px] sm:text-[40px] lg:text-[60px] font-bold">
          Want to benefit from the NAP Chain?
        </h3>
        <h2 className="gr-text lg:block flex justify-start items-center gap-3 flex-col font-bold text-center lg:text-left leading-[1.1] text-[40px] sm:text-[60px] lg:text-[90px] max-w-[993px]">
          Let’s Connect.
          <button className="rounded-full border-none lg:-translate-y-[40%] cursor-pointer bg-[#2BD1FF] w-[170px] h-[50px] text-[#141338] font-bold text-base inline-flex justify-center items-center gap-3">
            Get Started{" "}
            <FontAwesomeIcon icon={faChevronRight} className="text-sm" />
          </button>
        </h2>
      </div>
    </div>
  );
};

export default Connect;
