import { faChevronRight } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const Contact = () => {
  return (
    <div className="wrapper relative mt-[70px] lg:mt-[130px] ">
      <img
        src="/explore/ball.png"
        className="absolute blur-[2px] md:block hidden -z-10  max-w-[120px] -right-[2%] top-[30%]"
        alt=""
      />
      <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 bg-[#0262F7] blur-[120px] w-full max-w-[1270px] h-[674px] opacity-[0.05] -z-10"></div>
      <div className="contain relative  flex-col justify-start items-center text-center lg:text-left lg:items-start gap-4 lg:gap-1">
        <img
          src="/explore/ball.png"
          className="absolute blur-sm md:block hidden -z-10 max-w-[60px]  right-[22%] 2xl:right-[32%] top-[25%]"
          alt=""
        />
        <img
          src="/explore/ball.png"
          className="absolute blur-sm md:block hidden -z-10 max-w-[60px]  right-[0%] 2xl:right-[12%] top-[0%]"
          alt=""
        />

        <h3 className="gr-text leading-[1.1] text-[30px] sm:text-[40px] lg:text-[60px] font-bold">
          Want to be a part of our marketplace ?
        </h3>
        <h2 className="gr-text lg:block flex justify-start items-center gap-3 flex-col font-bold text-center lg:text-left leading-[1.1] text-[40px] sm:text-[60px] lg:text-[90px] max-w-[993px]">
          Contact Us <br /> for partnership{" "}
          <a
            target="blank"
            href="http://app.naplozz.io/"
            className="rounded-full border-none lg:-translate-y-[40%] cursor-pointer bg-[#2BD1FF] w-[170px] h-[50px] text-[#141338] font-bold text-base inline-flex justify-center items-center gap-3"
          >
            Get Started{" "}
            <FontAwesomeIcon icon={faChevronRight} className="text-sm" />
          </a>
        </h2>
      </div>
    </div>
  );
};

export default Contact;
