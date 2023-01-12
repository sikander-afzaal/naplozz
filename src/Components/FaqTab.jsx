import { useState } from "react";

const FaqTab = ({ question, answer, list, note }) => {
  const [active, setActive] = useState(false);
  return (
    <div className="flex relative border-b-[1px] max-w-[800px] border-solid border-black pb-8 pt-8 justify-start items-start flex-col w-full">
      <div className="w-[100%] absolute bottom-0 left-1/2 -translate-x-1/2 opacity-50 bg-[rgb(179,179,179)]  h-[1px]">
        <div className="absolute left-0 z-20 top-1/2 -translate-y-1/2 xl:-translate-x-1/2 bg-[rgb(179,179,179)]   w-2 h-2 rotate-45"></div>
        <div className="absolute right-0 z-20 top-1/2 -translate-y-1/2 xl:translate-x-1/2 bg-[rgb(179,179,179)] rounded-full   w-2 h-2 rotate-45"></div>
      </div>
      <div
        onClick={() => setActive((prev) => !prev)}
        className={`flex ${
          active ? "pb-5" : ""
        } cursor-pointer transition-all duration-500 justify-start items-center gap-5 w-full`}
      >
        <div className="text-black flex justify-center items-center bg-blueGr rounded-full min-w-[33px] min-h-[33px] overflow-hidden">
          {active ? (
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className="w-6 h-6"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M19.5 12h-15"
              />
            </svg>
          ) : (
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className="w-6 h-6"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M12 4.5v15m7.5-7.5h-15"
              />
            </svg>
          )}
        </div>
        <h3 className="text-lg sm:text-2xl font-bold gr-text text-left">
          {question}
        </h3>
      </div>
      <div
        className={`flex justify-start gap-2 flex-col overflow-hidden transition-all duration-500 items-start ${
          active ? "max-h-[5000px]" : "max-h-0"
        }`}
      >
        {answer && (
          <p className="text-base sm:text-xl text-[#B3B3B3] max-w-[800px] opacity-70">
            {answer}
          </p>
        )}
        {list && (
          <ul className="white-dot">
            {list.map((elem, idx) => {
              return (
                <li
                  className="text-base sm:text-xl text-[#B3B3B3] max-w-[800px] opacity-70"
                  key={idx + elem}
                >
                  {elem}
                </li>
              );
            })}
          </ul>
        )}{" "}
        {note && (
          <p className="text-base sm:text-xl text-[#B3B3B3] max-w-[800px] opacity-70">
            {note}
          </p>
        )}
      </div>
    </div>
  );
};

export default FaqTab;
