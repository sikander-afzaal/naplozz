import { faChevronRight } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const SignUp = () => {
  return (
    <div className="wrapper mt-[100px] xl:mt-[150px] relative">
      <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 bg-[#0262F7] blur-[120px] w-full max-w-[1270px] h-[674px] opacity-[0.1] -z-10"></div>
      <div className="contain xl:flex-row flex-col justify-start items-center gap-[80px] lg:gap-10">
        <h2 className="gr-text lg:block flex justify-start items-center gap-3 flex-col font-bold text-center lg:text-left text-[40px] sm:text-[60px] lg:text-[70px] mid:text-[90px] max-w-[993px]">
          Sign up now, and let's get started!{" "}
          <a
            href="http://app.naplozz.io/"
            target={"blank"}
            className="rounded-full border-none lg:-translate-y-1/2 cursor-pointer bg-[#2BD1FF] w-[170px] h-[50px] text-[#141338] font-bold text-base inline-flex justify-center items-center gap-3"
          >
            Get Started{" "}
            <FontAwesomeIcon icon={faChevronRight} className="text-sm" />
          </a>
        </h2>
        <img src="/explore/sign-up.png" className="xl:mb-[140px] " alt="" />
      </div>
    </div>
  );
};

export default SignUp;
