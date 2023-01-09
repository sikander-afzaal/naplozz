import GradientButton from "../../Components/GradientButton";
import { faChevronRight } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const Contact = () => {
  return (
    <div className="wrapper mt-[100px]">
      <div className="contain flex-col justify-start items-start gap-2">
        <h3 className="gr-text font-bold text-[48px]">Contact Us</h3>
        <p className="text-[#b3b3b3] font-medium text-xl">
          Can’t find the answer you are looking for? Contact our friendly team.
        </p>
        <form className="flex max-w-[1057px]  justify-start items-center flex-col gap-5 w-full">
          <div className="flex md:flex-row flex-col justify-center items-center w-full gap-5">
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
            <input
              type="email"
              placeholder="Email"
              className="w-full h-[60px] text-base text-[rgba(163, 163, 163, 0.6)] bg-[rgba(13,13,13,0.5)] rounded-[20px] pl-5 "
            />
          </div>

          <textarea
            placeholder="Enter your message here"
            className="w-full h-[100px] pt-5 resize-none text-base text-[rgba(163, 163, 163, 0.6)] bg-[rgba(13,13,13,0.5)] rounded-[20px] pl-5 "
          />
          <div className="self-start">
            <GradientButton
              classes="w-[101px] h-[55px]  hover:w-[150px]"
              text={
                <>
                  Send{" "}
                  <FontAwesomeIcon icon={faChevronRight} className="text-sm" />
                </>
              }
            />
          </div>
        </form>
      </div>
    </div>
  );
};

export default Contact;
