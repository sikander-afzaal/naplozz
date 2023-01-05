import {
  faBars,
  faChevronDown,
  faGlobe,
  faXmark,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { useScrollDirection } from "../hooks/scrollDirection";

const Header = () => {
  const [headerToggle, setHeaderToggle] = useState(false);
  const scrollDirection = useScrollDirection();
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

  useEffect(() => {
    const body = document.querySelector("html");
    if (headerToggle) {
      body.style.overflow = "hidden";
    } else {
      body.style.overflow = "auto";
    }
  }, [headerToggle]);

  return (
    <div
      className={`wrapper fixed top-0 left-0 z-50 transition-all duration-500 ${
        bg ? "bg-headerScroll" : ""
      } ${scrollDirection === "down" ? "-top-24" : "top-0"}`}
    >
      <div className="contain h-[108px] justify-between items-center">
        <Link
          to={"/"}
          className="relative flex justify-start group items-center"
        >
          <svg
            viewBox="0 0 73 50"
            fill="none"
            width="93"
            height="50"
            className="h-[40px] object-contain"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M52.1065 49.3418L52.1016 49.3467H31.2866L31.2668 49.3125L41.6743 33.0374H41.6891L52.1065 49.3418Z"
              fill="url(#paint0_linear_410_8152)"
            />
            <path
              d="M41.961 0.67334L31.257 16.709L20.8396 32.9939L20.8149 33.0379H0.0494193L0 32.9646L10.4124 16.6797L20.6519 0.67334H41.961Z"
              fill="url(#paint1_linear_410_8152)"
            />
            <path
              d="M31.2665 49.3125L31.2418 49.3467H10.4664L10.4269 49.2783L0.0490723 33.0374H20.8689L31.2665 49.3125Z"
              fill="url(#paint2_linear_410_8152)"
            />
            <path
              d="M62.7803 0.67334L52.1604 16.6357L41.9604 0.67334L31.2565 16.709L20.8391 32.9939L20.8688 33.0379L31.2663 49.313L41.6738 33.0379L41.6788 33.0281L41.6886 33.0379L52.106 49.3424L62.5876 32.9548L73 16.6699L62.7803 0.67334Z"
              fill="url(#paint3_linear_410_8152)"
            />
            <path
              d="M62.7808 0.67334L52.1608 16.6357L41.9609 0.67334H62.7808Z"
              fill="url(#paint4_linear_410_8152)"
            />
            <defs>
              <linearGradient
                id="paint0_linear_410_8152"
                x1="31.2668"
                y1="41.1945"
                x2="52.1065"
                y2="41.1945"
                gradientUnits="userSpaceOnUse"
              >
                <stop stop-opacity="0" />
                <stop offset="0.23" stop-color="#003345" stop-opacity="0.27" />
                <stop offset="0.51" stop-color="#016E93" stop-opacity="0.58" />
                <stop offset="0.74" stop-color="#0199CC" stop-opacity="0.81" />
                <stop offset="0.91" stop-color="#01B3F0" stop-opacity="0.95" />
                <stop offset="1" stop-color="#01BDFD" />
              </linearGradient>
              <linearGradient
                id="paint1_linear_410_8152"
                x1="10.6447"
                y1="10.4677"
                x2="28.6585"
                y2="21.8194"
                gradientUnits="userSpaceOnUse"
              >
                <stop stop-opacity="0" />
                <stop offset="0.23" stop-color="#003345" stop-opacity="0.27" />
                <stop offset="0.51" stop-color="#016E93" stop-opacity="0.58" />
                <stop offset="0.74" stop-color="#0199CC" stop-opacity="0.81" />
                <stop offset="0.91" stop-color="#01B3F0" stop-opacity="0.95" />
                <stop offset="1" stop-color="#01BDFD" />
              </linearGradient>
              <linearGradient
                id="paint2_linear_410_8152"
                x1="4.26444"
                y1="45.9939"
                x2="22.9198"
                y2="37.9468"
                gradientUnits="userSpaceOnUse"
              >
                <stop stop-opacity="0" />
                <stop offset="0.23" stop-color="#003345" stop-opacity="0.27" />
                <stop offset="0.51" stop-color="#016E93" stop-opacity="0.58" />
                <stop offset="0.74" stop-color="#0199CC" stop-opacity="0.81" />
                <stop offset="0.91" stop-color="#01B3F0" stop-opacity="0.95" />
                <stop offset="1" stop-color="#01BDFD" />
              </linearGradient>
              <linearGradient
                id="paint3_linear_410_8152"
                x1="28.7164"
                y1="49.5965"
                x2="62.1325"
                y2="3.73645"
                gradientUnits="userSpaceOnUse"
              >
                <stop stop-color="#33FDFF" />
                <stop offset="1" stop-color="#424CFF" />
              </linearGradient>
              <linearGradient
                id="paint4_linear_410_8152"
                x1="41.9609"
                y1="8.65451"
                x2="62.7808"
                y2="8.65451"
                gradientUnits="userSpaceOnUse"
              >
                <stop stop-opacity="0" />
                <stop offset="0.16" stop-color="#011E2C" stop-opacity="0.19" />
                <stop offset="0.46" stop-color="#02537A" stop-opacity="0.53" />
                <stop offset="0.72" stop-color="#037BB3" stop-opacity="0.79" />
                <stop offset="0.9" stop-color="#0493D7" stop-opacity="0.94" />
                <stop offset="1" stop-color="#049CE4" />
              </linearGradient>
            </defs>
          </svg>
          <svg
            // width="146"
            height="13"
            className="-translate-x-1/2 max-w-[120px] -z-20 opacity-0 group-hover:opacity-100 group-hover:-translate-x-[5%] transition-all duration-700"
            viewBox="0 0 166 18"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M150.334 0.706055C148.568 0.706055 147.423 1.78021 147.423 3.19963C147.423 4.41543 148.415 5.36564 150.01 5.36564C151.777 5.36564 152.922 4.31215 152.922 2.7924C152.922 1.57659 151.933 0.706055 150.334 0.706055Z"
              fill="white"
            />
            <path
              d="M145.039 17.3461H149.587L151.789 6.26221H147.241L145.039 17.3461Z"
              fill="white"
            />
            <path
              d="M140.491 12.8611C138.725 12.8611 137.58 13.9352 137.58 15.3547C137.58 16.5705 138.572 17.5207 140.168 17.5207C141.934 17.5207 143.079 16.4672 143.079 14.9474C143.079 13.7316 142.087 12.8611 140.491 12.8611Z"
              fill="white"
            />
            <path
              d="M159.998 6.05908C155.974 6.05908 153.104 8.77398 153.104 12.4214C153.104 15.5229 155.459 17.5472 159.106 17.5472C163.13 17.5472 166 14.8323 166 11.1849C166 8.08345 163.645 6.05908 159.998 6.05908ZM159.371 13.9411C158.338 13.9411 157.732 13.2329 157.732 12.1971C157.732 10.6597 158.541 9.66517 159.733 9.66517C160.764 9.66517 161.37 10.3734 161.37 11.4092C161.37 12.9467 160.563 13.9411 159.371 13.9411Z"
              fill="white"
            />
            <path
              d="M33.5363 0.51123L22.7247 17.5265H28.7619L30.4573 14.5756H36.9331L37.4923 17.5265H43.188L39.1613 0.51123H33.5363ZM32.8092 10.4265L35.3053 6.07677L36.1295 10.4265H32.8092Z"
              fill="white"
            />
            <path
              d="M56.2509 0.51123H48.7097L45.3158 17.5265H51.038L51.8622 13.348H54.8057C60.0157 13.348 63.386 10.456 63.386 6.1535C63.386 2.61233 60.8163 0.517134 56.2598 0.517134M55.0824 8.92446H52.7276L53.5253 4.93769H55.4415C56.7513 4.93769 57.5755 5.44821 57.5755 6.66401C57.5755 8.09819 56.6542 8.92446 55.0765 8.92446"
              fill="white"
            />
            <path
              d="M73.4116 0.51123H67.6894L64.2955 17.5236H77.6767L78.5745 13.0765H70.9155L73.4116 0.51123Z"
              fill="white"
            />
            <path
              d="M91.8587 0.115723C85.6302 0.115723 81.1678 4.2943 81.1678 10.2966C81.1678 14.7703 84.4911 17.9042 89.7747 17.9042C96.0032 17.9042 100.466 13.7256 100.466 7.72333C100.466 3.24966 97.1452 0.115723 91.8587 0.115723ZM90.2604 13.2682C88.1734 13.2682 86.9371 11.9314 86.9371 9.96312C86.9371 7.16855 88.562 4.76351 91.376 4.76351C93.46 4.76351 94.6962 6.1003 94.6962 8.0686C94.6962 10.8632 93.0714 13.2682 90.2604 13.2682Z"
              fill="white"
            />
            <path
              d="M119.154 4.03469L119.857 0.51123H104.899L104.004 4.95835H111.371L101.967 13.9972L101.263 17.5236H116.849L117.747 13.0765H109.747L119.154 4.03469Z"
              fill="white"
            />
            <path
              d="M137.722 0.51123H122.766L121.868 4.95835H129.239L119.831 13.9972L119.128 17.5236H134.717L135.611 13.0765H127.614L137.018 4.03469L137.722 0.51123Z"
              fill="white"
            />
            <path
              d="M21.8324 0.853516L16.9214 8.72128L15.3086 0.853516H10.5525L0 17.7433H5.63835L10.5494 9.87867L12.1621 17.7464H16.9182L27.4708 0.853516H21.8324Z"
              fill="white"
            />
          </svg>
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
