import { Link } from "react-router-dom";

const CookiesPopup = ({ setModal }) => {
  return (
    <>
      <div
        onClick={() => setModal(false)}
        className="fixed  top-0 left-0 w-full h-full z-[88] bg-black opacity-60"
      ></div>
      <div className="fixed z-[90] flex rounded-[20px] justify-center items-start flex-col gap-5 px-4 sm:px-8 py-4 top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-black border-[1px] border-solid border-[#B3B3B3] w-[90%] h-full max-w-[450px] max-h-[272px]">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth={1.5}
          stroke="white"
          onClick={() => setModal(false)}
          className="w-6 cursor-pointer h-6 absolute top-3 right-3"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M6 18L18 6M6 6l12 12"
          />
        </svg>

        <img src="/full-logo.png" className="w-[131px] object-contain" alt="" />
        <p className="text-white font-medium text-xl">
          Cookies for personlized content and ads
        </p>
        <p className="font-semibold text-white">
          Please read our{" "}
          <Link
            onClick={() => setModal(false)}
            className="text-[#ff866d]"
            to="/info"
          >
            Privacy policy.
          </Link>
        </p>
        <button
          onClick={() => setModal(false)}
          className="rounded-full bg-[#FF519F] text-white w-[118px] h-[45px] border-[1px] border-solid border-[#FF519F] hover:bg-transparent transition-all duration-300 cursor-pointer text-lg font-medium"
        >
          I Accept
        </button>
      </div>
    </>
  );
};

export default CookiesPopup;
