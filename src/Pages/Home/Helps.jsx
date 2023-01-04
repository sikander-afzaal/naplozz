import {
  faChevronDown,
  faChevronRight,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import GradientButton from "../../Components/GradientButton";

const Helps = () => {
  return (
    <div className="wrapper mt-[80px] lg:mt-[150px]">
      <div className="contain lg:flex-row flex-col justify-between items-start gap-[50px] lg:gap-4">
        <div className="flex justify-start items-center text-center sm:text-left sm:items-start flex-col gap-4">
          <h2 className="gr-text leading-[1.3] text-[35px] sm:text-[50px] lg:text-[72px] font-extrabold">
            Naplozz helps businesses run smoother
          </h2>
          <p className="text-white font-bold text-lg sm:text-2xl">
            by automating the tedious, repetitive tasks{" "}
          </p>
          <p className="text-white font-bold text-lg sm:text-2xl">
            that slow down processes like reporting, auditing, and delegating
            work.
          </p>
          <p className="text-[#B3B3B3] font-normal text-base sm:text-xl">
            The NAP token gives employees an incentive to do their jobs right!
          </p>
        </div>
        <form className="flex justify-start items-center flex-col gap-5 w-full">
          <div className="flex justify-center items-center w-full gap-5">
            <input
              type="text"
              placeholder="First Name"
              className="w-full h-[60px] text-base text-[rgba(163, 163, 163, 0.6)] bg-[rgba(13,13,13,0.5)] rounded-[20px] pl-5 "
            />
            <input
              type="text"
              placeholder="Last Name"
              className="w-full h-[60px] text-base text-[rgba(163, 163, 163, 0.6)] bg-[rgba(13,13,13,0.5)] rounded-[20px] pl-5 "
            />
          </div>
          <input
            type="email"
            placeholder="Email"
            className="w-full h-[60px] text-base text-[rgba(163, 163, 163, 0.6)] bg-[rgba(13,13,13,0.5)] rounded-[20px] pl-5 "
          />
          <textarea
            placeholder="Enter your message here"
            className="w-full h-[100px] pt-5 resize-none text-base text-[rgba(163, 163, 163, 0.6)] bg-[rgba(13,13,13,0.5)] rounded-[20px] pl-5 "
          />
          <GradientButton
            classes="w-[101px] h-[55px] self-end"
            text={
              <>
                Send{" "}
                <FontAwesomeIcon icon={faChevronRight} className="text-sm" />
              </>
            }
          />
        </form>
      </div>
    </div>
  );
};

export default Helps;
