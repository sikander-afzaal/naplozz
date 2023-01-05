import {
  faBars,
  faChevronDown,
  faGlobe,
  faXmark,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

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
        bg ? "bg-headerScroll" : ""
      }`}
    >
      <div className="contain h-[108px] justify-between items-center">
        <Link
          to={"/"}
          className="relative flex justify-start group items-center"
        >
          <img src="/logo.png" className="h-[40px] object-contain" alt="" />
          <img
            src="/logo-text.png"
            className="-translate-x-1/2 max-w-[120px] -z-20 opacity-0 group-hover:opacity-100 group-hover:translate-x-0 transition-all duration-700"
            alt=""
          />
        </Link>
        {headerToggle && (
          <div
            onClick={() => setHeaderToggle(false)}
            className="fixed top-0 left-0 w-full h-full z-[88] bg-black opacity-60"
          ></div>
        )}
        <nav
          className={`border-l-2 head:border-none border-solid border-white head:static fixed top-0 transition-all duration-1000 ${
            headerToggle ? "right-0" : "-right-[900px]"
          } h-full head:w-auto head:max-w-none w-full max-w-full sm:max-w-[400px] flex justify-start head:items-center gap-6 overflow-y-auto pt-[7rem] sm:pt-[6rem] px-8 head:p-0 z-[89] head:gap-5  xl:gap-[40px] head:flex-row flex-col items-center sm:items-start bg-[#05050f] head:bg-transparent`}
        >
          <div className="flex justify-start items-center sm:items-start flex-col head:flex-row head:items-center gap-6 mid:gap-4 xl:gap-5">
            <Link
              onClick={() => setHeaderToggle(false)}
              to="/explore"
              className="no-underline flex justify-start items-center gap-2 text-white text-lg head:text-base xl:text-base font-medium"
            >
              Explore{" "}
              <FontAwesomeIcon
                icon={faChevronDown}
                className="text-inherit text-xs"
              />
            </Link>
            <a
              onClick={() => setHeaderToggle(false)}
              href="#"
              className="no-underline flex justify-start items-center gap-2 text-white text-lg head:text-base xl:text-base font-medium"
            >
              Ecosystem{" "}
              <FontAwesomeIcon
                icon={faChevronDown}
                className="text-inherit text-xs"
              />
            </a>
            <a
              onClick={() => setHeaderToggle(false)}
              href="#"
              className="no-underline flex justify-start items-center gap-2 text-white text-lg head:text-base xl:text-base font-medium"
            >
              Industries{" "}
            </a>
            <a
              onClick={() => setHeaderToggle(false)}
              href="#"
              className="no-underline flex justify-start items-center gap-2 text-white text-lg head:text-base xl:text-base font-medium"
            >
              Blog
            </a>
            <a
              onClick={() => setHeaderToggle(false)}
              href="#"
              className="no-underline flex justify-start items-center gap-2 text-white text-lg head:text-base xl:text-base font-medium"
            >
              Pricing
              <FontAwesomeIcon
                icon={faChevronDown}
                className="text-inherit text-xs"
              />
            </a>
            <a
              onClick={() => setHeaderToggle(false)}
              href="#"
              className="no-underline flex justify-start items-center gap-2 text-white text-lg head:text-base xl:text-base font-medium"
            >
              About us
            </a>
            <a
              onClick={() => setHeaderToggle(false)}
              href="#"
              className="no-underline flex justify-start items-center gap-2 text-white text-lg head:text-base xl:text-base font-medium"
            >
              Contact
            </a>
          </div>
          <div className="flex justify-start items-center sm:items-start flex-col head:flex-row head:items-center  gap-6 head:gap-2 xl:gap-6">
            <button className="bg-transparent border-[1px] border-solid border-white text-white h-[41px] w-[104px] rounded-full hover:bg-pink hover:border-pink  transition-all duration-500 cursor-pointer text-lg font-medium">
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
          className="relative z-[90] text-white head:hidden block text-2xl cursor-pointer"
        />
      </div>
    </div>
  );
};

export default Header;
