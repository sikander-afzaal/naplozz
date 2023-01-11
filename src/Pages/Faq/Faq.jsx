import { faChevronRight } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import FaqTab from "../../Components/FaqTab";
import GradientButton from "../../Components/GradientButton";

const Faq = () => {
  const DATA = [
    {
      question: "What is your return policy?",
      answer:
        "A knowledge base can exist as part of your website, on its own as software, or be integrated into other systems, such as a CRM or help desk ticketing system. Many companies start out with an FAQ section and then, at some point, graduate to a full knowledge base. ",
    },
    {
      question: "What is your return policy?",
      answer:
        "A knowledge base can exist as part of your website, on its own as software, or be integrated into other systems, such as a CRM or help desk ticketing system. Many companies start out with an FAQ section and then, at some point, graduate to a full knowledge base. ",
    },
    {
      question: "What is your return policy?",
      answer:
        "A knowledge base can exist as part of your website, on its own as software, or be integrated into other systems, such as a CRM or help desk ticketing system. Many companies start out with an FAQ section and then, at some point, graduate to a full knowledge base. ",
    },
  ];
  return (
    <div className="wrapper pt-[110px] xl:pt-[220px] relative">
      <div className="absolute top-[100px] -z-10 left-1/2 -translate-x-1/2 bg-marketplace w-full max-w-[1709px] h-[533px] blur-[130.9px] opacity-[0.15]"></div>
      <div className="absolute -bottom-[100px] -z-10 -right-[30%] bg-[#A50498] w-full max-w-[1064px] h-[688px] blur-[250px] opacity-[0.25]"></div>
      <div className="contain flex-col justify-start items-center lg:items-start gap-4">
        <div className="relative">
          <img
            src="/explore/ball.png"
            className="absolute xl:block hidden right-0 bottom-[120%] w-[30px] object-contain"
            alt=""
          />
          <img
            src="/explore/ball.png"
            className="absolute xl:block hidden blur-[2.5px] w-[62px] object-contain -right-[10%] bottom-[60%]"
            alt=""
          />
          <h2 className="gr-text text-[40px] sm:text-[55px] lg:text-[72px] lg:text-left text-center font-bold">
            Frequently Asked Questions
          </h2>
        </div>
        <p className="text-white text-base sm:text-xl font-medium lg:text-left text-center">
          Everything you need to know about naplozz
        </p>
        <div className="flex justify-start items-start flex-col mt-5">
          {DATA.map((elem, idx) => {
            return <FaqTab {...elem} key={idx + "faq"} />;
          })}
        </div>
        <div className="flex mt-[50px] sm:mt-[90px] justify-start items-center lg:items-start flex-col gap-3">
          <h2 className="gr-text text-[32px] sm:text-[35px] md:text-[48px] font-bold lg:text-left text-center">
            Still Have questions? Get in touch
          </h2>
          <p className="text-[#B3B3B3] font-medium text-base sm:text-xl lg:text-left text-center">
            Can’t find the answer you are looking for? Contact our friendly
            team.
          </p>
          <GradientButton
            classes={"w-[145px] h-[55px] hover:w-[170px] mt-2"}
            text={
              <>
                Contact us
                <FontAwesomeIcon icon={faChevronRight} className="text-sm" />
              </>
            }
          />
        </div>
      </div>
    </div>
  );
};
export default Faq;
