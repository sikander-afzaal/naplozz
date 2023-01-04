import GradientButton from "../../Components/GradientButton";

const Hero = () => {
  return (
    <div className="wrapper mt-[130px] mid:mt-[100px] relative isolate">
      <div className="w-[800px] bg-greenRadial absolute opacity-50 -z-10 blur-[125px] left-0 -translate-x-1/2 h-[800px] "></div>
      <div className="contain mid:flex-row flex-col justify-between overflow-visible items-center gap-[40px] sm:gap-[60px] mid:gap-5">
        <div className="flex justify-start items-center text-center mid:text-left mid:items-start mid:max-w-none max-w-[600px] flex-col gap-5">
          <h2 className="font-bold leading-[1.2] mid:leading-[92px] text-[40px] sm:text-[55px] mid:text-[68px] text-white">
            Smart Quality <span className="gr-text">Management Powered</span>{" "}
            <span className="text-[24px]">by the Blockchain</span>
          </h2>
          <p className="text-[rgba(255,255,255,0.76)] text-base sm:text-xl font-medium">
            Naplozz is a quality management and data tracking application
            utilizing the innovative technology of the blockchain to help
            businesses function more efficiently.{" "}
          </p>
          <GradientButton
            classes={"w-[151px] h-[55px]"}
            text={" Get Started"}
          />
        </div>
        <img
          src="/hero-img.png"
          className="w-full object-contain max-w-[800px]"
          alt=""
        />
      </div>
    </div>
  );
};

export default Hero;
