import {
  faDiscord,
  faFacebook,
  faLinkedin,
  faMedium,
  faTelegram,
  faTwitter,
  faYoutube,
} from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Link } from "react-router-dom";
import { HashLink } from "react-router-hash-link";

const Footer = () => {
  return (
    <div className="wrapper mt-[60px] lg:mt-[100px] relative">
      <div className="contain pt-[40px] sm:pt-[60px] pb-5 justify-start items-center flex-col">
        <footer className="w-full grid grid-cols-2 grid-rows-2 sm:flex sm:flex-col lg:flex-row justify-between items-center sm:items-start gap-5">
          <svg
            width="329"
            height="77"
            viewBox="0 0 329 77"
            fill="none"
            className="col-span-2 justify-self-center"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M52.1065 48.6685L52.1016 48.6734H31.2866L31.2668 48.6392L41.6743 32.364H41.6891L52.1065 48.6685Z"
              fill="url(#paint0_linear_724_2965)"
            />
            <path
              d="M41.961 0L31.257 16.0357L20.8396 32.3206L20.8149 32.3646H0.0494193L0 32.2912L10.4124 16.0063L20.6519 0H41.961Z"
              fill="url(#paint1_linear_724_2965)"
            />
            <path
              d="M31.2665 48.6392L31.2418 48.6734H10.4664L10.4269 48.6049L0.0490723 32.364H20.8689L31.2665 48.6392Z"
              fill="url(#paint2_linear_724_2965)"
            />
            <path
              d="M62.7803 0L52.1604 15.9623L41.9604 0L31.2565 16.0357L20.8391 32.3206L20.8688 32.3646L31.2663 48.6397L41.6738 32.3646L41.6788 32.3548L41.6886 32.3646L52.106 48.669L62.5876 32.2815L73 15.9966L62.7803 0Z"
              fill="url(#paint3_linear_724_2965)"
            />
            <path
              d="M62.7808 0L52.1608 15.9623L41.9609 0H62.7808Z"
              fill="url(#paint4_linear_724_2965)"
            />
            <path
              d="M304.342 22.929C301.562 22.929 299.76 24.6197 299.76 26.854C299.76 28.7677 301.321 30.2634 303.832 30.2634C306.612 30.2634 308.415 28.6051 308.415 26.213C308.415 24.2992 306.858 22.929 304.342 22.929Z"
              fill="white"
            />
            <path
              d="M296.007 49.1221H303.165L306.631 31.6755H299.472L296.007 49.1221Z"
              fill="white"
            />
            <path
              d="M288.848 42.0618C286.068 42.0618 284.266 43.7525 284.266 45.9868C284.266 47.9005 285.828 49.3962 288.339 49.3962C291.119 49.3962 292.921 47.7379 292.921 45.3458C292.921 43.432 291.36 42.0618 288.848 42.0618Z"
              fill="white"
            />
            <path
              d="M319.553 31.355C313.219 31.355 308.702 35.6284 308.702 41.3696C308.702 46.2515 312.408 49.4379 318.149 49.4379C324.483 49.4379 329 45.1645 329 39.4233C329 34.5414 325.293 31.355 319.553 31.355ZM318.566 43.7618C316.94 43.7618 315.985 42.647 315.985 41.0166C315.985 38.5965 317.259 37.0312 319.136 37.0312C320.757 37.0312 321.712 38.146 321.712 39.7764C321.712 42.1964 320.442 43.7618 318.566 43.7618Z"
              fill="white"
            />
            <path
              d="M120.495 22.6223L103.477 49.4053H112.98L115.648 44.7603H125.841L126.722 49.4053H135.687L129.349 22.6223H120.495ZM119.35 38.2295L123.279 31.3828L124.577 38.2295H119.35Z"
              fill="white"
            />
            <path
              d="M156.249 22.6223H144.379L139.037 49.4053H148.044L149.341 42.828H153.975C162.175 42.828 167.48 38.2759 167.48 31.5035C167.48 25.9296 163.436 22.6316 156.263 22.6316M154.41 35.8652H150.703L151.959 29.5898H154.975C157.037 29.5898 158.334 30.3934 158.334 32.3071C158.334 34.5646 156.884 35.8652 154.401 35.8652"
              fill="white"
            />
            <path
              d="M183.261 22.6223H174.254L168.912 49.4007H189.975L191.388 42.4007H179.332L183.261 22.6223Z"
              fill="white"
            />
            <path
              d="M212.298 22C202.494 22 195.47 28.5773 195.47 38.0252C195.47 45.067 200.701 50 209.017 50C218.821 50 225.845 43.4227 225.845 33.9748C225.845 26.933 220.619 22 212.298 22ZM209.782 42.7027C206.497 42.7027 204.551 40.5985 204.551 37.5003C204.551 33.1015 207.109 29.3159 211.538 29.3159C214.818 29.3159 216.764 31.42 216.764 34.5182C216.764 38.9171 214.207 42.7027 209.782 42.7027Z"
              fill="white"
            />
            <path
              d="M255.262 28.1684L256.369 22.6223H232.823L231.415 29.6223H243.012L228.208 43.8499L227.101 49.4007H251.634L253.047 42.4007H240.454L255.262 28.1684Z"
              fill="white"
            />
            <path
              d="M284.488 22.6223H260.947L259.534 29.6223H271.135L256.328 43.8499L255.22 49.4007H279.758L281.166 42.4007H268.578L283.381 28.1684L284.488 22.6223Z"
              fill="white"
            />
            <path
              d="M102.073 23.1609L94.3424 35.5452L91.8038 23.1609H84.3175L67.7073 49.7463H76.5823L84.3126 37.367L86.8511 49.7512H94.3374L110.948 23.1609H102.073Z"
              fill="white"
            />
            <defs>
              <linearGradient
                id="paint0_linear_724_2965"
                x1="31.2668"
                y1="40.5211"
                x2="52.1065"
                y2="40.5211"
                gradientUnits="userSpaceOnUse"
              >
                <stop stopOpacity="0" />
                <stop offset="0.23" stopColor="#003345" stopOpacity="0.27" />
                <stop offset="0.51" stopColor="#016E93" stopOpacity="0.58" />
                <stop offset="0.74" stopColor="#0199CC" stopOpacity="0.81" />
                <stop offset="0.91" stopColor="#01B3F0" stopOpacity="0.95" />
                <stop offset="1" stopColor="#01BDFD" />
              </linearGradient>
              <linearGradient
                id="paint1_linear_724_2965"
                x1="10.6447"
                y1="9.79441"
                x2="28.6585"
                y2="21.146"
                gradientUnits="userSpaceOnUse"
              >
                <stop stopOpacity="0" />
                <stop offset="0.23" stopColor="#003345" stopOpacity="0.27" />
                <stop offset="0.51" stopColor="#016E93" stopOpacity="0.58" />
                <stop offset="0.74" stopColor="#0199CC" stopOpacity="0.81" />
                <stop offset="0.91" stopColor="#01B3F0" stopOpacity="0.95" />
                <stop offset="1" stopColor="#01BDFD" />
              </linearGradient>
              <linearGradient
                id="paint2_linear_724_2965"
                x1="4.26444"
                y1="45.3206"
                x2="22.9198"
                y2="37.2735"
                gradientUnits="userSpaceOnUse"
              >
                <stop stopOpacity="0" />
                <stop offset="0.23" stopColor="#003345" stopOpacity="0.27" />
                <stop offset="0.51" stopColor="#016E93" stopOpacity="0.58" />
                <stop offset="0.74" stopColor="#0199CC" stopOpacity="0.81" />
                <stop offset="0.91" stopColor="#01B3F0" stopOpacity="0.95" />
                <stop offset="1" stopColor="#01BDFD" />
              </linearGradient>
              <linearGradient
                id="paint3_linear_724_2965"
                x1="28.7164"
                y1="48.9232"
                x2="62.1325"
                y2="3.06311"
                gradientUnits="userSpaceOnUse"
              >
                <stop stopColor="#33FDFF" />
                <stop offset="1" stopColor="#424CFF" />
              </linearGradient>
              <linearGradient
                id="paint4_linear_724_2965"
                x1="41.9609"
                y1="7.98117"
                x2="62.7808"
                y2="7.98117"
                gradientUnits="userSpaceOnUse"
              >
                <stop stopOpacity="0" />
                <stop offset="0.16" stopColor="#011E2C" stopOpacity="0.19" />
                <stop offset="0.46" stopColor="#02537A" stopOpacity="0.53" />
                <stop offset="0.72" stopColor="#037BB3" stopOpacity="0.79" />
                <stop offset="0.9" stopColor="#0493D7" stopOpacity="0.94" />
                <stop offset="1" stopColor="#049CE4" />
              </linearGradient>
            </defs>
          </svg>

          {/* <img src="/foot-logo.png" alt="" /> */}
          <div className=" flex justify-start items-center sm:items-start flex-col gap-5">
            <Link
              to="/ecosystem"
              className="text-white text-base font-semibold"
            >
              Ecosystem
            </Link>
            <Link to="/blogs" className="text-white text-base font-semibold">
              Blog
            </Link>
            <Link to="pricing" className="text-white text-base font-semibold">
              Pricing
            </Link>
            <Link to="/about" className="text-white text-base font-semibold">
              About Us
            </Link>
            <Link to="/faq" className="text-white text-base font-semibold">
              FAQ
            </Link>
          </div>
          <div className="sm:flex hidden justify-start items-center sm:items-start flex-col gap-5">
            <HashLink
              to="/explore#solutions"
              className="text-white text-base font-semibold"
            >
              Naplozz App
            </HashLink>
            <HashLink
              to="/explore#solutions"
              className="text-white text-base font-semibold"
            >
              Naplozz Wizard
            </HashLink>
            <HashLink
              to="/explore#solutions"
              className="text-white text-base font-semibold"
            >
              Task management
            </HashLink>
            <HashLink
              to="/explore#solutions"
              className="text-white text-base font-semibold"
            >
              Log management
            </HashLink>
            <HashLink
              to="/explore#solutions"
              className="text-white text-base font-semibold"
            >
              Naplozz Audit
            </HashLink>
            <HashLink
              to="/explore#solutions"
              className="text-white text-base font-semibold"
            >
              Naplozz Attendance
            </HashLink>
          </div>
          <div className=" flex justify-start items-center sm:items-start flex-col gap-5">
            <HashLink to="/" className="text-white text-base font-semibold">
              How it works
            </HashLink>
            <HashLink
              to="/explore#flow"
              className="text-white text-base font-semibold"
            >
              Token flow
            </HashLink>
            <HashLink
              to="/explore#tokenomics"
              className="text-white text-base font-semibold"
            >
              Tokenomics
            </HashLink>
            <HashLink
              to="/explore#whitepaper"
              className="text-white text-base font-semibold"
            >
              White paper
            </HashLink>
          </div>
          <div className=" sm:flex hidden justify-start items-center sm:items-start flex-col gap-5">
            <HashLink
              to="/industry#catering"
              className="text-white text-base font-semibold"
            >
              Catering
            </HashLink>
            <HashLink
              to="/industry#public_catering"
              className="text-white text-base font-semibold"
            >
              Public catering
            </HashLink>
            <HashLink
              to="/industry#accommodation"
              className="text-white text-base font-semibold"
            >
              Accommodation
            </HashLink>
            <HashLink
              to="/industry#food_producer"
              className="text-white text-base font-semibold"
            >
              Food producer
            </HashLink>
            <HashLink
              to="/industry#food_retail"
              className="text-white text-base font-semibold"
            >
              Food retail
            </HashLink>
            <HashLink
              to="/industry#industrial_activity"
              className="text-white text-base font-semibold"
            >
              Industrial activity
            </HashLink>
            <HashLink
              onClick={() => window.scrollTo(0, 0)}
              to="/industry"
              className="text-white text-base font-semibold"
            >
              See All
            </HashLink>
          </div>
        </footer>
        <div className="flex flex-col w-full justify-center items-center gap-5 mt-14 sm:mt-5">
          <div className="flex justify-center items-center flex-wrap gap-5">
            <a href="#" target={"blank"}>
              <FontAwesomeIcon
                className="text-white text-2xl"
                icon={faFacebook}
              />
            </a>
            <a href="https://twitter.com/naplozz" target={"blank"}>
              <FontAwesomeIcon
                className="text-white text-2xl"
                icon={faTwitter}
              />
            </a>
            <a
              href="https://www.linkedin.com/company/naplozz-io/"
              target={"blank"}
            >
              <FontAwesomeIcon
                className="text-white text-2xl"
                icon={faLinkedin}
              />
            </a>
            <a href="#" target={"blank"}>
              <FontAwesomeIcon
                className="text-white text-2xl"
                icon={faTelegram}
              />
            </a>
            <a href="#" target={"blank"}>
              <FontAwesomeIcon
                className="text-white text-2xl"
                icon={faDiscord}
              />
            </a>
            <a href="#" target={"blank"}>
              <FontAwesomeIcon
                className="text-white text-2xl"
                icon={faYoutube}
              />
            </a>
            <a href="https://medium.com/@naplozzio" target={"blank"}>
              <FontAwesomeIcon
                className="text-white text-2xl"
                icon={faMedium}
              />
            </a>
          </div>
          <div className="justify-center flex  items-center w-full gap-5">
            <a href="#" className="text-sm sm:text-base text-pink font-normal">
              © Naplozz 2022
            </a>
            <a href="#" className="text-sm sm:text-base text-pink font-normal">
              Privacy Policy
            </a>
            <a href="#" className="text-sm sm:text-base text-pink font-normal">
              Terms of Use
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
