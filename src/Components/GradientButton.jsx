const GradientButton = ({ text, classes, link }) => {
  return link ? (
    <a
      href={link}
      target="blank"
      className={`no-underline transition-all duration-700 origin-left rounded-full flex justify-center items-center bg-btnBg relative isolate border-none text-white cursor-pointer group font-semibold text-base ${classes}`}
    >
      <p className="w-full h-full gap-2 bg-btnBg rounded-full group-hover:bg-[#302a8f] transition-all duration-700 flex justify-center items-center">
        {text}
      </p>
      <div className="absolute -inset-[2px] bg-btnGr -z-10 rounded-full"></div>
    </a>
  ) : (
    <button
      className={` transition-all duration-700 origin-left rounded-full flex justify-center items-center bg-btnBg relative isolate border-none text-white cursor-pointer group font-semibold text-base ${classes}`}
    >
      <p className="w-full h-full gap-2 bg-btnBg rounded-full group-hover:bg-[#302a8f] transition-all duration-700 flex justify-center items-center">
        {text}
      </p>
      <div className="absolute -inset-[2px] bg-btnGr -z-10 rounded-full"></div>
    </button>
  );
};

export default GradientButton;
