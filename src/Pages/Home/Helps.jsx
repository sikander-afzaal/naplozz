import { useRef, useEffect, useState } from "react";
import GradientButton from "../../Components/GradientButton";
import { faChevronRight } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
//gsap
import gsap, { Circ } from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";
import ContactModal from "../../Components/ContactModal";
import axios from "axios";

const Helps = () => {
  //for the form -------------
  const [input, setInput] = useState({
    firstName: "",
    lastName: "",
    email: "",
    description: "",
  });
  const [popup, setPopup] = useState(false);
  //-------------------------------------------
  const container = useRef();
  const heading = useRef();
  const para = useRef();
  const para2 = useRef();
  const para3 = useRef();
  const btn = useRef();
  const form = useRef();

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);
    const timeLine = gsap.timeline({
      defaults: { duration: 0.7, ease: Circ.easeOut },
      scrollTrigger: {
        trigger: container.current,
        start: "top 50%",
      },
    });
    timeLine

      .fromTo(heading.current, { y: -90, opacity: 0 }, { y: 0, opacity: 1 })
      .fromTo(
        [para.current, para2.current, para3.current],
        { y: 90, opacity: 0 },
        { y: 0, opacity: 1, stagger: 0.3 }
      )
      .fromTo(form.current, { x: 90, opacity: 0 }, { x: 0, opacity: 1 })
      .fromTo(
        btn.current,
        { y: 90, opacity: 0, scale: 0 },
        { y: 0, opacity: 1, scale: 1 }
      );
    return () => {
      timeLine.kill();
    };
  }, []);
  //for the form -------
  const changeHandler = (e) => {
    const inputName = e.target.name;
    const value = e.target.value;
    setInput((prev) => {
      return { ...prev, [inputName]: value };
    });
  };
  return (
    <>
      {popup && <ContactModal setModal={setPopup} />}
      <div ref={container} className="wrapper mt-[80px] lg:mt-[150px]">
        <div className="contain lg:flex-row flex-col justify-between items-start gap-[50px] lg:gap-8">
          <div className="flex justify-start items-center text-center sm:text-left sm:items-start flex-col gap-4">
            <h2
              ref={heading}
              className="gr-text leading-[1.3] text-[35px] sm:text-[50px] lg:text-[60px] mid:text-[72px] font-extrabold"
            >
              Naplozz helps businesses run smoother
            </h2>
            <p ref={para} className="text-white font-bold text-lg sm:text-2xl">
              by automating the tedious, repetitive tasks{" "}
            </p>
            <p ref={para2} className="text-white font-bold text-lg sm:text-2xl">
              that slow down processes like reporting, auditing, and delegating
              work.
            </p>
            <p
              ref={para3}
              className="text-[#B3B3B3] font-normal text-base sm:text-xl"
            >
              The NAP token gives employees an incentive to do their jobs right!
            </p>
          </div>
          <form
            onSubmit={(e) => {
              e.preventDefault();
              if (
                input.description &&
                input.email &&
                input.firstName &&
                input.lastName
              ) {
                axios
                  .post("https://apis.naplozz.hu/api/v1/users/sendmail", input)
                  .then(() => setPopup(true))
                  .catch(() => {
                    alert("failed");
                  })
                  .finally(() => {
                    setInput({
                      firstName: "",
                      lastName: "",
                      email: "",
                      description: "",
                    });
                  });
              } else {
                alert("Please fill the form");
              }
            }}
            ref={form}
            className="flex border-solid border-[1px] border-[#b3b3b3] p-5 sm:p-8 rounded-2xl justify-start items-center flex-col gap-5 w-full"
          >
            <div className="flex sm:flex-row flex-col justify-center items-center w-full gap-5">
              <input
                value={input.firstName}
                onChange={changeHandler}
                name="firstName"
                type="text"
                placeholder="First Name"
                className="w-full h-[60px] text-base text-white text-[rgba(163, 163, 163, 0.6)] bg-[rgba(13,13,13,0.5)] rounded-[20px] pl-5 "
              />
              <input
                value={input.lastName}
                onChange={changeHandler}
                name="lastName"
                type="text"
                placeholder="Last Name"
                className="w-full h-[60px] text-base text-white text-[rgba(163, 163, 163, 0.6)] bg-[rgba(13,13,13,0.5)] rounded-[20px] pl-5 "
              />
            </div>
            <input
              value={input.email}
              onChange={changeHandler}
              name="email"
              type="email"
              placeholder="Email"
              className="w-full h-[60px] text-base text-white text-[rgba(163, 163, 163, 0.6)] bg-[rgba(13,13,13,0.5)] rounded-[20px] pl-5 "
            />
            <textarea
              value={input.description}
              onChange={changeHandler}
              name="description"
              placeholder="Enter your message here"
              className="w-full h-[100px] text-white pt-5 resize-none text-base text-[rgba(163, 163, 163, 0.6)] bg-[rgba(13,13,13,0.5)] rounded-[20px] pl-5 "
            />
            <div ref={btn} className="self-end">
              <GradientButton
                classes="w-[101px] h-[55px]  hover:w-[150px]"
                text={
                  <>
                    Send{" "}
                    <FontAwesomeIcon
                      icon={faChevronRight}
                      className="text-sm"
                    />
                  </>
                }
              />
            </div>
          </form>
        </div>
      </div>
    </>
  );
};

export default Helps;
