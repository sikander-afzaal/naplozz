import { useState } from "react";

const DATA = {
  restaurant: {
    heading: "Restaurant:",
    desc: "The Naplozz system integrates with your system, so you can manage the quality measures that every step from HACCP must go through to ensure food safety and hygene.  It also provides a comprehensive analytics platform that lets you see where your business spends and loses money.",
  },
  bistro: {
    heading: "Bistro:",
    desc: "A Bistro could use Naplozz to keep track of each aspect of their day-to-day operations - from ordering supplies to make sure they're using the correct equipment- and then analyze those data points to make specific improvements where necessary.",
  },
  pub: {
    heading: "Pub:",
    desc: "In the case of Pub, Naplozz can be used to manage your quality measures, and every step from HACCP to Sanitation Management should go through this system. You can track your staff's duties and keep a record of all the required documents.",
  },
  street: {
    heading: "Street Food:",
    desc: "Naplozz is also an excellent tool for managing your street food business. It lets you track each order, customer, and vendor details in real time. This helps in reducing wastage by eliminating unnecessary manual processes like filling up orders manually on paper and sending them off at once.",
  },
  cafe: {
    heading: "Cafe:",
    desc: "If you are into the cafe business, then Naplozz will be very helpful for you as well. With its easy-to-use interface, you can manage all the mandatory tracking work at one place in a short, easy and safe way.",
  },
  confectionery: {
    heading: "Confectionery:",
    desc: "In the case of Confectionery, Naplozz can be used to manage quality measures like the traceability of ingredients. This helps ensure the product's safety and reduces the risk of contamination.",
  },
  bakery: {
    heading: "Bakery:",
    desc: "Naplozz can be used by bakeries to track the flow of ingredients and finished goods through the supply chain, which can help them optimize production processes. This way, it helps bakeries manage their costs and ensure that they deliver the goods to their customers in the most efficient manner possible.",
  },
  brasserie: {
    heading: "Brasserie:",
    desc: "In the case of the brasserie, Naplozz can track all time and cost information about the items used during the preparation and service stages. This will help owners save money on waste due to improper storage methods and improper handling of items.",
  },
  food: {
    heading: "Food bar:",
    desc: "Naplozz allows businesses to manage their quality measures, from HACCP, food safety, and quality systems to food production, packaging, storage, and transportation. It provides tools for tracking all of these critical processes. This allows the company to ensure they meet their quality standards while saving time on tedious tasks that would otherwise be required.",
  },
  buffet: {
    heading: "Buffet:",
    desc: "In the case of Buffet, it can be used to track the history of food safety issues that may have occurred in their buffet restaurant. The restaurant would use Naplozz to track these incidents, so they know when to take action to prevent further problems.",
  },
  club: {
    heading: "Club:",
    desc: "In the case of Club, Naplozz can be used to manage tasks and records related to the club. You must have an efficient system in place so that employees understand what needs to be done and when. Using Naplozz, you can gain insight into your business’s performance, which will help lead to better customer service.",
  },
};

const Description = () => {
  const [tab, setTab] = useState("restaurant");

  return (
    <div id="cateringDesc" className="wrapper mt-[80px]">
      <div className="contain flex-col  justify-start items-center sm:items-start">
        <h2 className="gr-text font-bold text-[60px] sm:text-[72px]">
          Catering
        </h2>
        <div className="sm:flex-wrap sm:mt-0 mt-3 sm:pl-0 pl-2 sm:overflow-auto py-5 overflow-x-scroll w-full roadmap flex justify-start sm:justify-center items-center gap-x-3 gap-y-5 ">
          <DescBtn
            setTab={setTab}
            set="restaurant"
            active={tab === "restaurant"}
            name="Restaurant"
          />
          <DescBtn
            setTab={setTab}
            set="bistro"
            active={tab === "bistro"}
            name="Bistro"
          />
          <DescBtn
            setTab={setTab}
            set="pub"
            active={tab === "pub"}
            name="Pub"
          />
          <DescBtn
            setTab={setTab}
            set="street"
            active={tab === "street"}
            name="Street Food"
          />
          <DescBtn
            setTab={setTab}
            set="cafe"
            active={tab === "cafe"}
            name="Cafe"
          />
          <DescBtn
            setTab={setTab}
            set="confectionery"
            active={tab === "confectionery"}
            name="Confectionary"
          />
          <DescBtn
            setTab={setTab}
            set="bakery"
            active={tab === "bakery"}
            name="Bakery"
          />
          <DescBtn
            setTab={setTab}
            set="brasserie"
            active={tab === "brasserie"}
            name="Brasserie"
          />
          <DescBtn
            setTab={setTab}
            set="food"
            active={tab === "food"}
            name="Food bar"
          />
          <DescBtn
            setTab={setTab}
            set="buffet"
            active={tab === "buffet"}
            name="Buffet"
          />
          <DescBtn
            setTab={setTab}
            set="club"
            active={tab === "club"}
            name="Club"
          />
        </div>
        <div className="flex justify-center self-center items-center flex-col gap-2 mt-4 sm:mt-8 max-w-[750px] text-center">
          <h3 className="text-white font-bold text-[35px] sm:text-[40px]">
            {DATA[tab].heading}
          </h3>
          <p className="text-white text-base sm:text-xl font-normal">
            {DATA[tab].desc}
          </p>
        </div>
      </div>
    </div>
  );
};

export default Description;

const DescBtn = ({ name, active, setTab, set }) => {
  return (
    <button
      onClick={() => setTab(set)}
      className=" h-[50px] flex justify-center items-center relative rounded-full"
    >
      <p
        className={`w-full  h-full ${
          active ? "bg-transparent" : "bg-black"
        } sm:min-w-0 min-w-[200px] font-medium text-xl hover:bg-transparent transition-all duration-500 cursor-pointer rounded-full px-5 sm:px-12 flex justify-center items-center text-white`}
      >
        {name}
      </p>
      <div className="bg-blueGr absolute -inset-[1px] -z-10  rounded-full"></div>
    </button>
  );
};
