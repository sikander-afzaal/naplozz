import { faChevronRight } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import axios from "axios";
import { useState } from "react";
import ContactModal from "../../Components/ContactModal";
import GradientButton from "../../Components/GradientButton";

const Contact = () => {
  const [popUp, setPopUp] = useState(false);
  const [input, setInput] = useState({
    firstName: "",
    lastName: "",
    email: "",
    description: "",
  });
  const changeHandler = (e) => {
    const inputName = e.target.name;
    const value = e.target.value;
    setInput((prev) => {
      return { ...prev, [inputName]: value };
    });
  };
  return (
    <>
      {popUp && <ContactModal setModal={setPopUp} />}
      <div className="wrapper mt-[130px]">
        <div className="contain flex-col justify-center items-center gap-2">
          <h2 className="gr-text text-[50px] sm:text-[72px] font-bold">
            Contact Us
          </h2>
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
                  .then(() => setPopUp(true))
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
            className="flex max-w-[1000px] border-solid border-[1px] border-[#b3b3b3] p-5 sm:p-8 rounded-2xl justify-start items-center flex-col gap-5 w-full"
          >
            <div className="flex sm:flex-row flex-col justify-center items-center w-full gap-5">
              <input
                value={input.firstName}
                onChange={changeHandler}
                name="firstName"
                type="text"
                placeholder="First Name"
                className="w-full h-[60px] text-white text-base text-[rgba(163, 163, 163, 0.6)] bg-[rgba(13,13,13,0.5)] rounded-[20px] pl-5 "
              />
              <input
                value={input.lastName}
                onChange={changeHandler}
                name="lastName"
                type="text"
                placeholder="Last Name"
                className="w-full h-[60px] text-white text-base text-[rgba(163, 163, 163, 0.6)] bg-[rgba(13,13,13,0.5)] rounded-[20px] pl-5 "
              />
            </div>
            <input
              type="email"
              value={input.email}
              onChange={changeHandler}
              name="email"
              placeholder="Email"
              className="w-full h-[60px] text-white text-base text-[rgba(163, 163, 163, 0.6)] bg-[rgba(13,13,13,0.5)] rounded-[20px] pl-5 "
            />
            <textarea
              value={input.description}
              onChange={changeHandler}
              name="description"
              placeholder="Enter your message here"
              className="w-full h-[150px] text-white pt-5 resize-none text-base text-[rgba(163, 163, 163, 0.6)] bg-[rgba(13,13,13,0.5)] rounded-[20px] pl-5 "
            />
            <div className="self-center">
              <GradientButton
                classes="w-[151px] h-[55px]  hover:w-[190px]"
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

export default Contact;
