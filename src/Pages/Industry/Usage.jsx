import { faChevronRight } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import gsap, { Circ } from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";
import { useEffect, useRef } from "react";

const Usage = ({ loader }) => {
  const heading = useRef();
  const tab1 = useRef();
  const tab2 = useRef();
  const tab3 = useRef();
  const tab4 = useRef();
  const tab5 = useRef();
  const tab6 = useRef();
  const tab7 = useRef();
  const tab8 = useRef();
  const tab9 = useRef();
  const tab10 = useRef();
  useEffect(() => {
    const timeLine = gsap.timeline({
      defaults: { duration: 0.4, ease: Circ.easeOut },
      delay: loader ? 6.9 : 0.5,
    });
    timeLine
      .fromTo(heading.current, { y: -20, opacity: 0 }, { y: 0, opacity: 1 })
      .fromTo(
        [
          tab1.current,
          tab2.current,
          tab3.current,
          tab4.current,
          tab5.current,
          tab6.current,
          tab7.current,
          tab8.current,
          tab9.current,
          tab10.current,
        ],
        { y: 20, opacity: 0 },
        { stagger: 0.2, y: 0, opacity: 1 }
      );
    return () => {
      timeLine.kill();
    };
  }, []);
  return (
    <div className="wrapper mt-[100px] lg:mt-[130px] relative">
      <img
        src="/explore/ball.png"
        className="absolute right-0 sm:right-[10%] mid:right-[20%] blur-[88px] w-full max-w-[500px] -z-10 top-[3%] sm:top-[5%]"
        alt=""
      />
      <img
        src="/explore/ball.png"
        className="absolute right-[5%] mid:right-[10%] blur-[7.5px] w-full max-w-[100px] sm:max-w-[250px] -z-10 top-[11%]"
        alt=""
      />
      <img
        src="/explore/ball.png"
        className="absolute translate-x-1/2 right-[0%]  blur-[106px] object-contain w-full max-w-[750px] -z-10  top-[26%]"
        alt=""
      />{" "}
      <img
        src="/explore/ball.png"
        className="absolute left-[25%] blur-[90px] w-full max-w-[500px] -z-10 top-[52%]"
        alt=""
      />{" "}
      <img
        src="/industry/side.png"
        className="absolute left-[0%]  -z-10  top-[64%]"
        alt=""
      />{" "}
      {/* //shadows ------------------------ */}
      <div className="absolute w-full max-w-[852px] h-[852px] rounded-full left-0 top-[13%] opacity-[0.24] -z-10 blur-[134px] bg-[#a50498]"></div>
      <div className="absolute w-full max-w-[1110px] h-[360px] rounded-full -translate-x-1/2 left-0 top-[37%] opacity-[0.5] -z-10 blur-[131px] bg-[#2BD1FF]"></div>
      <div className="absolute w-full max-w-[1077px] h-[380px] rounded-full translate-x-1/2 right-0 top-[42.5%] opacity-[0.47] -z-10 blur-[159px] -rotate-[17.61deg] bg-greenishGr"></div>
      <div className="absolute w-full max-w-[1077px] h-[380px] rounded-full translate-x-1/2 right-0 top-[78.5%] opacity-[0.47] -z-10 blur-[159px] -rotate-[17.61deg] bg-greenishGr"></div>
      <div className="absolute w-full max-w-[828px] h-[877px] rounded-full right-0 top-[74.5%] opacity-[0.19] -z-10 blur-[103px]  bg-lightPink"></div>
      <div className="absolute w-full max-w-[946px] h-[242px] rounded-full left-0 -translate-x-[20%] top-[89%] opacity-[0.42] -z-10 blur-[130px]  bg-[#E04ADC]"></div>
      {/* //shadows end ------------------------ */}
      <div className="contain flex-col justify-start items-center gap-5">
        <h2
          ref={heading}
          className="gr-text text-[45px] sm:text-[72px] font-bold text-center"
        >
          Industry Usage
        </h2>
        <div className="sm:flex-wrap sm:overflow-auto overflow-x-scroll w-full roadmap flex justify-start sm:justify-center items-center gap-x-3 gap-y-5 ">
          <a
            ref={tab1}
            href="#catering"
            className="border-[1px] sm:min-w-0 min-w-[200px]  border-solid border-lightPink bg-transparent font-medium text-xl hover:bg-lightPink transition-all duration-500 cursor-pointer no-underline rounded-full px-5 sm:px-12 h-[50px] flex justify-center items-center text-white"
          >
            Catering
          </a>
          <a
            ref={tab2}
            href="#public_catering"
            className="border-[1px] sm:min-w-0 min-w-[200px]  border-solid border-lightPink bg-transparent font-medium text-xl hover:bg-lightPink transition-all duration-500 cursor-pointer no-underline rounded-full px-5 sm:px-12 h-[50px] flex justify-center items-center text-white"
          >
            Public Catering
          </a>
          <a
            ref={tab3}
            href="#accommodation"
            className="border-[1px] sm:min-w-0 min-w-[200px]  border-solid border-lightPink bg-transparent font-medium text-xl hover:bg-lightPink transition-all duration-500 cursor-pointer no-underline rounded-full px-5 sm:px-12 h-[50px] flex justify-center items-center text-white"
          >
            Accommodation
          </a>
          <a
            ref={tab4}
            href="#food_producer"
            className="border-[1px] sm:min-w-0 min-w-[200px]  border-solid border-lightPink bg-transparent font-medium text-xl hover:bg-lightPink transition-all duration-500 cursor-pointer no-underline rounded-full px-5 sm:px-12 h-[50px] flex justify-center items-center text-white"
          >
            Food Producer
          </a>
          <a
            ref={tab5}
            href="#food_retail"
            className="border-[1px] sm:min-w-0 min-w-[200px]  border-solid border-lightPink bg-transparent font-medium text-xl hover:bg-lightPink transition-all duration-500 cursor-pointer no-underline rounded-full px-5 sm:px-12 h-[50px] flex justify-center items-center text-white"
          >
            Food Retail
          </a>
          <a
            ref={tab6}
            href="#retail"
            className="border-[1px] sm:min-w-0 min-w-[200px]  border-solid border-lightPink bg-transparent font-medium text-xl hover:bg-lightPink transition-all duration-500 cursor-pointer no-underline rounded-full px-5 sm:px-12 h-[50px] flex justify-center items-center text-white"
          >
            Retail
          </a>
          <a
            ref={tab7}
            href="#industrial_activity"
            className="border-[1px] sm:min-w-0 min-w-[200px]  border-solid border-lightPink bg-transparent font-medium text-xl hover:bg-lightPink transition-all duration-500 cursor-pointer no-underline rounded-full px-5 sm:px-12 h-[50px] flex justify-center items-center text-white"
          >
            Industrial Activity
          </a>
          <a
            ref={tab8}
            href="#office_activity"
            className="border-[1px] sm:min-w-0 min-w-[200px]  border-solid border-lightPink bg-transparent font-medium text-xl hover:bg-lightPink transition-all duration-500 cursor-pointer no-underline rounded-full px-5 sm:px-12 h-[50px] flex justify-center items-center text-white"
          >
            Office Activity
          </a>
          <a
            ref={tab9}
            href="#health"
            className="border-[1px] sm:min-w-0 min-w-[200px]  border-solid border-lightPink bg-transparent font-medium text-xl hover:bg-lightPink transition-all duration-500 cursor-pointer no-underline rounded-full px-5 sm:px-12 h-[50px] flex justify-center items-center text-white"
          >
            Health Care
          </a>
          <a
            ref={tab10}
            href="#warehouse"
            className="border-[1px] sm:min-w-0 min-w-[200px]  border-solid border-lightPink bg-transparent font-medium text-xl hover:bg-lightPink transition-all duration-500 cursor-pointer no-underline rounded-full px-5 sm:px-12 h-[50px] flex justify-center items-center text-white"
          >
            Warehouse
          </a>
        </div>
        <div className="flex mt-[50px] sm:mt-[60px] lg:mt-[100px] xl:mt-[120px] justify-start items-start flex-col w-full gap-[80px] sm:gap-[100px]  lg:gap-[150px]">
          <IndustryRow
            heading="Catering"
            desc="If you are a catering unit, it will allow you to track all the
          inspections related to activities of your kitchen staff and ensure
          that they follow strict hygiene standards. If there is any deviation
          from these standards, this will alert you immediately so that you can
          take action before it becomes an issue for your customers."
            more
            img="catering"
          />
          <IndustryRow
            heading="Public catering"
            desc="In public catering, Naplozz can monitor the quality of food produced and ensure that every step from HACCP is followed. This helps ensure that customers are getting the highest quality of food possible while also providing a record of all the steps involved in preparing that food so that it can be repeated if necessary."
            order
            img="public_catering"
          />
          <IndustryRow
            heading="Accommodation"
            desc="In the case of Accommodation, Naplozz manages your quality measures that every step from supply to delivery is tracked, allowing you to focus on what matters most—your guests. Whether you're a hotel chain or an independent bed-and-breakfast owner, Naplozz gives you all the tools you need to ensure that your guests get precisely what they paid for—whether it's a clean room or a healthy meal."
            img="accommodation"
          />
          <IndustryRow
            heading="Food producer"
            desc="Naplozz helps businesses manage their quality measures, make sure every step from HACCP is done, and keep track of their product data to stay on top of the latest trends.In the process of producing food items, many factors can affect the quality of your products. Naplozz helps you manage these factors and verify that your products are safe to consume."
            img="food_producer"
            order
          />
          <IndustryRow
            heading="Food Retail"
            desc="In the case of Food retail, Naplozz helps them keep track of all their food preparation processes, from raw materials to finished products. It also allows them to track their inventory levels so they know when it's time for a purchase order by using log management or if something needs fixing up before it goes out."
            img="food_retail"
          />
          <IndustryRow
            heading="Retail"
            desc="With Naplozz, you can track your product's journey through the supply chain and record all testing protocols, product specifications, and suppliers. You can also use Naplozz's task management feature to organize your current projects, so you don't have to search for them when you need them."
            img="retail"
            order
          />
          <IndustryRow
            heading="Industrial activity"
            desc="In the case of Industrial Activity, Naplozz could be used to track logs and production records. It is also ideal for managing tasks and managing log management. With Naplozz, you can keep track of the quality of each step in your manufacturing process using blockchain technology. This ensures that you are always on top of what's happening with your products and can manage it all in one place."
            img="industrial_activity"
          />
          <IndustryRow
            heading="Office activity"
            desc="Naplozz is the perfect solution for companies looking to increase their efficiency and effectiveness in task management, log management, and record keeping.It makes it easy to manage tasks, log activities, and track records from the beginning to the end of an activity or process. This makes certain that you’re constantly being vigilant about your quality measures, so you can be sure that each step in your plan is met."
            order
            img="office_activity"
          />
          <IndustryRow
            heading="Health care"
            desc="In the case of health care, Naplozz can be used to manage tasks, log various data points and track progress on projects. This can be used to confirm that all required information is being captured at all times so that it is readily available for review.Naplozz allows you to manage your quality measures in such a way that it integrates into the workflow process of an organization or business, allowing the employees working on different aspects of it to easily access relevant information about patient care at any given time."
            img="health"
          />
          <IndustryRow
            heading="Warehouse"
            desc="Naplozz helps warehouse managers to manage their quality measures promptly and achieve better results. This is done using blockchains and smart contracts, which provide the flexibility needed to track the performance of every aspect of the warehouse in real-time.Naplozz’s task management module allows users to create tasks that can be assigned to multiple stakeholders (such as customers or employees) and set deadlines and priorities for each task. Once created, these tasks are stored in an immutable database which can be used for tracking purposes. Naplozz also has a log management module that allows users to keep track of essential data such as orders placed by customers, shipments completed by employees, or any other information related to their business that might be important at some point in time later on down the road"
            img="warehouse"
            order
          />
        </div>
      </div>
    </div>
  );
};

export default Usage;

const IndustryRow = ({ heading, desc, more, order, img }) => {
  const container = useRef();
  const headingRef = useRef();
  const para = useRef();
  const imageRef = useRef();
  const link = useRef();
  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);
    const timeline = gsap.timeline({
      defaults: { duration: 0.3 },
      scrollTrigger: {
        trigger: container.current,
        start: "top 50%",
      },
    });
    if (order) {
      timeline
        .fromTo(headingRef.current, { x: 20, opacity: 0 }, { x: 0, opacity: 1 })
        .fromTo(para.current, { y: 20, opacity: 0 }, { y: 0, opacity: 1 })
        .fromTo(imageRef.current, { x: -20, opacity: 0 }, { x: 0, opacity: 1 });
    } else {
      timeline
        .fromTo(
          headingRef.current,
          { x: -20, opacity: 0 },
          { x: 0, opacity: 1 }
        )
        .fromTo(para.current, { y: 20, opacity: 0 }, { y: 0, opacity: 1 })
        .fromTo(imageRef.current, { x: 20, opacity: 0 }, { x: 0, opacity: 1 });
    }
    if (more) {
      timeline.fromTo(
        link.current,
        { y: 20, opacity: 0 },
        { y: 0, opacity: 1 }
      );
    }
    return () => {
      timeline.kill();
    };
  }, []);

  return (
    <div
      ref={container}
      id={img}
      className={`w-full  ${
        order ? "flex-col lg:flex-row-reverse" : "flex-col lg:flex-row"
      } flex justify-between items-center gap-8 lg:gap-5`}
    >
      <div className="flex lg:text-left text-center w-full max-w-[583px] justify-start items-center lg:items-start flex-col gap-2 lg:gap-5">
        <h3
          ref={headingRef}
          className="text-white font-bold text-[40px] sm:text-[48px]"
        >
          {heading}
        </h3>
        <p
          ref={para}
          className="text-base sm:text-xl text-white font-medium opacity-[0.62]"
        >
          {desc}
        </p>
        {more && (
          <a
            ref={link}
            className="text-[#2BD1FF] text-xl flex justify-start items-center gap-2 font-medium no-underline"
            href="#cateringDesc"
          >
            More <FontAwesomeIcon icon={faChevronRight} className="text-sm" />
          </a>
        )}
      </div>
      <div className="w-full lg:w-1/2 flex justify-center items-center">
        <img
          ref={imageRef}
          src={`/industry/${img}.png`}
          className=" max-w-[400px] sm:w-auto w-[80%] sm:max-h-max max-h-[250px] sm:max-w-[500px] object-contain"
          alt=""
        />
      </div>
    </div>
  );
};
