import { faSearch } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useState } from "react";
import BlogCard from "../../Components/BlogCard";

const AllBlogs = () => {
  const [searchInput, setSearchInput] = useState("");
  const BLOGS = [
    {
      img: "/blogs/hero-bg.png",
      desc: "Financial markets evolve and evolve rapidly. The crypto market is no different...",
      head: "Crypto tokens and the blockchain: special new use cases",
      date: "Dec 15, 2022",
      id: 1,
    },
    {
      img: "/blogs/blog2.webp",
      desc: "I think many people have already asked this question. How to make money more efficiently with less work...",
      head: "How do we optimize our work tasks?",
      date: "Jul 23, 2022",
      id: 2,
    },
  ];
  const [selectedTab, setSelectedTab] = useState("All");
  return (
    <div className="wrapper mt-[60px] relative">
      <div className="absolute top-[5%] left-0 -translate-x-1/2 bg-[#A50498] blur-[250px] w-[1064px] h-[688px] opacity-[0.24] -z-10"></div>
      <div className="absolute top-[25%] right-0 translate-x-1/2 bg-[#A50498] blur-[250px] w-[1064px] h-[688px] opacity-[0.24] -z-10"></div>
      <div className="absolute bottom-0 right-0 translate-x-1/2 bg-[#0262F7] blur-[250px] w-[1064px] h-[688px] opacity-[0.1] -z-10"></div>
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
              value={searchInput}
              onChange={(e) => setSearchInput(e.target.value)}
              type="text"
              placeholder="Search"
              className="w-full border-0 outline-0 h-full bg-transparent text-[#B3B3B3] text-xl font-normal"
            />
          </div>
        </div>
        <div className="grid w-full mt-[40px] grid-cols-1 md:grid-cols-2 place-items-center xl:grid-cols-3 auto-rows-fr gap-[40px]">
          {BLOGS.filter((elem) => {
            return elem.head.toLowerCase().includes(searchInput.toLowerCase());
          }).map((elem, idx) => {
            return <BlogCard {...elem} key={idx + "bloc"} />;
          })}
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
