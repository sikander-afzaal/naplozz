import { faSearch } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useState } from "react";

const AllBlogs = () => {
  const [selectedTab, setSelectedTab] = useState("All");
  return (
    <div className="wrapper mt-[60px]">
      <div className="contain flex-col justify-start items-start gap-7">
        <div className="flex xl:flex-row flex-col justify-between items-center gap-8 xl:gap-0 w-full">
          <div className="flex lg:flex-nowrap flex-wrap justify-center md:justify-start lg:justify-around xl:w-auto w-full xl:justify-start items-center gap-4">
            <FilterBtn tab={selectedTab} setTab={setSelectedTab} text="All" />
            <FilterBtn
              tab={selectedTab}
              setTab={setSelectedTab}
              text="BlockChain"
            />
            <FilterBtn
              tab={selectedTab}
              setTab={setSelectedTab}
              text="Databases"
            />
            <FilterBtn
              tab={selectedTab}
              setTab={setSelectedTab}
              text="Log management"
            />
            <FilterBtn
              tab={selectedTab}
              setTab={setSelectedTab}
              text="Blog post"
            />
          </div>
          <div className="flex w-full pb-2  xl:max-w-[240px] border-b-[1px] border-solid border-[#B3B3B3] justify-start items-center gap-3 pl-2">
            <FontAwesomeIcon
              icon={faSearch}
              className="text-[#B3B3B3] text-base"
            />
            <input
              type="text"
              placeholder="Search"
              className="w-full border-0 outline-0 h-full bg-transparent text-[#B3B3B3] text-xl font-normal"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default AllBlogs;

const FilterBtn = ({ text, setTab, tab }) => {
  return (
    <button
      onClick={() => setTab(text)}
      className="rounded-full sm:w-auto w-full h-[45px]  border-[1px] border-white isolate border-solid relative"
    >
      <div
        className={`absolute -inset-[1px] transition-all duration-500 rounded-full -z-10 bg-btnGr ${
          tab === text ? "opacity-100" : "opacity-0"
        }`}
      ></div>
      <p
        className={` cursor-pointer transition-all duration-500 ${
          tab === text ? "bg-btnBg" : "bg-transparent"
        } text-xl rounded-full w-full px-[30px] h-full text-white flex justify-center items-center`}
      >
        {text}
      </p>
    </button>
  );
};
