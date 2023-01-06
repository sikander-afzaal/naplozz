import { faChevronRight } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import GradientButton from "../../Components/GradientButton";

const Hero = () => {
  return (
    <div className="wrapper pt-[0px] mid:pt-[50px]  relative isolate">
      <img
        src="/explore/hero-bg.png"
        className="absolute w-full h-full top-0 left-0 object-cover -z-10"
        alt=""
      />
      <div className="contain  flex-col mid:flex-row   justify-between items-center mid:items-start">
        <div className="flex justify-start items-center pt-[150px] text-center mid:text-left mid:items-start mid:max-w-none max-w-[600px] flex-col gap-5">
          <h2 className="font-bold leading-[1.2] mid:leading-[92px] text-[40px] sm:text-[55px] mid:text-[68px] text-white">
            <span className="gr-text">Naplozz App</span> the paperless record
            keeper
          </h2>
          <p className="text-[rgba(255,255,255,0.76)] text-base sm:text-xl max-w-[724px] font-medium">
            The Naplozz App is the paperless record keeper for your business,
            allowing you to take care of all your paperwork in one place. It's
            the perfect solution for anyone who wants to improve productivity,
            increase efficiency and comply to the rules by eliminating the need
            for paper. <span className="text-pink">Just click and swipe!</span>
          </p>
          <GradientButton
            classes={"w-[151px] h-[55px] hover:w-[190px]"}
            text={
              <>
                Get Started
                <FontAwesomeIcon icon={faChevronRight} className="text-sm" />
              </>
            }
          />
        </div>
        <img
          src="/explore/hero-img.png"
          alt=""
          className="max-w-[400px] mid:max-w-[700px] w-full object-contain"
        />
      </div>
    </div>
  );
};

export default Hero;