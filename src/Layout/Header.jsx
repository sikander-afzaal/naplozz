import {
  faBars,
  faChevronDown,
  faGlobe,
  faXmark,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useEffect, useState } from "react";

const Header = () => {
  const [headerToggle, setHeaderToggle] = useState(false);
  const [bg, setBg] = useState(false);
  useEffect(() => {
    const showBg = () => {
      if (window.scrollY > 60) {
        setBg(true);
      } else {
        setBg(false);
      }
    };
    window.addEventListener("scroll", showBg);
    return () => {
      window.removeEventListener("scroll", showBg);
    };
  }, []);

  return (
    <div
      className={`wrapper fixed top-0 left-0 z-50 transition-all ${
        bg ? "bg-black" : ""
      }`}
    >
      <div className="contain h-[108px] justify-between items-center">
        <img
          src="/logo.png"
          className="h-[40px] xl:h-[50px] object-contain"
          alt=""
        />
        {headerToggle && (
          <div
            onClick={() => setHeaderToggle(false)}
            className="fixed top-0 left-0 w-full h-full z-[88] bg-black opacity-60"
          ></div>
        )}
        <nav
          className={`border-l-2 lg:border-none border-solid border-white lg:static fixed top-0 transition-all duration-1000 ${
            headerToggle ? "right-0" : "-right-[900px]"
          } h-full lg:w-auto lg:max-w-none w-full max-w-full sm:max-w-[400px] flex justify-start lg:items-center gap-6 overflow-y-auto pt-[7rem] sm:pt-[6rem] px-8 lg:p-0 z-[89] lg:gap-5 xl:gap-[40px] lg:flex-row flex-col items-center sm:items-start bg-[#05050f] lg:bg-transparent`}
        >
          <div className="flex justify-start items-center sm:items-start flex-col lg:flex-row lg:items-center gap-6 xl:gap-8">
            <a
              onClick={() => setHeaderToggle(false)}
              href="#"
              className="no-underline flex justify-start items-center gap-2 text-white text-lg lg:text-base xl:text-lg font-medium"
            >
              Explore{" "}
              <FontAwesomeIcon
                icon={faChevronDown}
                className="text-inherit text-sm"
              />
            </a>
            <a
              onClick={() => setHeaderToggle(false)}
              href="#"
              className="no-underline flex justify-start items-center gap-2 text-white text-lg lg:text-base xl:text-lg font-medium"
            >
              Ecosystem{" "}
              <FontAwesomeIcon
                icon={faChevronDown}
                className="text-inherit text-sm"
              />
            </a>
            <a
              onClick={() => setHeaderToggle(false)}
              href="#"
              className="no-underline flex justify-start items-center gap-2 text-white text-lg lg:text-base xl:text-lg font-medium"
            >
              Industries{" "}
            </a>
            <a
              onClick={() => setHeaderToggle(false)}
              href="#"
              className="no-underline flex justify-start items-center gap-2 text-white text-lg lg:text-base xl:text-lg font-medium"
            >
              Blog
            </a>
            <a
              onClick={() => setHeaderToggle(false)}
              href="#"
              className="no-underline flex justify-start items-center gap-2 text-white text-lg lg:text-base xl:text-lg font-medium"
            >
              Pricing
              <FontAwesomeIcon
                icon={faChevronDown}
                className="text-inherit text-sm"
              />
            </a>
            <a
              onClick={() => setHeaderToggle(false)}
              href="#"
              className="no-underline flex justify-start items-center gap-2 text-white text-lg lg:text-base xl:text-lg font-medium"
            >
              About us
            </a>
            <a
              onClick={() => setHeaderToggle(false)}
              href="#"
              className="no-underline flex justify-start items-center gap-2 text-white text-lg lg:text-base xl:text-lg font-medium"
            >
              Contact
            </a>
          </div>
          <div className="flex justify-start items-center sm:items-start flex-col lg:flex-row lg:items-center  gap-6 lg:gap-2 xl:gap-6">
            <button className="bg-transparent border-[1px] border-solid border-white text-white h-[41px] w-[104px] rounded-full hover:bg-white hover:text-black transition-all duration-500 cursor-pointer text-lg font-medium">
              Sign in
            </button>
            <button className="bg-white border-[1px] border-solid border-white text-black h-[41px] w-[104px] rounded-full hover:bg-transparent hover:text-white transition-all duration-500 cursor-pointer text-lg font-medium">
              Log in
            </button>
            <div className="flex justify-start items-center gap-3">
              <button className="flex justify-start items-center gap-2 cursor-pointer text-white text-base">
                <FontAwesomeIcon icon={faGlobe} />{" "}
                <FontAwesomeIcon icon={faChevronDown} />
              </button>
            </div>
          </div>
        </nav>
        <FontAwesomeIcon
          onClick={() => setHeaderToggle((prev) => !prev)}
          icon={headerToggle ? faXmark : faBars}
          className="relative z-[90] text-white lg:hidden block text-2xl cursor-pointer"
        />
      </div>
    </div>
  );
};

export default Header;
