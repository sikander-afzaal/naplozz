import gsap from "gsap";
import { Draggable } from "gsap/all";
import { useEffect, useRef } from "react";

const Roadmap = () => {
  gsap.registerPlugin(Draggable);
  const shadow = useRef();
  const mainCont = useRef();
  const grid = useRef();
  const list1Dot = useRef();
  const list1Heading = useRef();
  const list1 = useRef();
  const list2Dot = useRef();
  const list2Heading = useRef();
  const list2 = useRef();
  const list3Dot = useRef();
  const list3Heading = useRef();
  const list3 = useRef();
  const list4Dot = useRef();
  const list4Heading = useRef();
  const list4 = useRef();
  const list5Dot = useRef();
  const list5Heading = useRef();
  const list5 = useRef();
  const list6Dot = useRef();
  const list6Heading = useRef();
  const list6 = useRef();
  const line = useRef();
  useEffect(() => {
    const timeline = gsap.timeline({ defaults: { duration: 3 }, repeat: -1 });
    timeline
      //first shadow moves
      //then line moves
      //then the list appears
      .to(shadow.current, { left: "0.5%", opacity: 1 })
      .fromTo(line.current, { width: 0 }, { width: "4%", duration: 1 })
      .fromTo(
        [list1Dot.current, list1Heading.current, list1.current],
        { opacity: 0 },
        { opacity: 1, stagger: 0.4, duration: 1 }
      )
      .to(shadow.current, { left: "17.5%", opacity: 1 })
      .to(line.current, { width: "22.5%", duration: 1 })
      .fromTo(
        [list2Dot.current, list2Heading.current, list2.current],
        { opacity: 0 },
        { opacity: 1, stagger: 0.4, duration: 1 }
      )
      .to(shadow.current, { left: "35%", opacity: 1 })
      .to(line.current, { width: "40%", duration: 1 })
      .fromTo(
        [list3Dot.current, list3Heading.current, list3.current],
        { opacity: 0 },
        { opacity: 1, stagger: 0.4, duration: 1 }
      )
      .to(shadow.current, { left: "52.5%", opacity: 1 })
      .to(line.current, { width: "60.5%", duration: 1 })
      .fromTo(
        [list4Dot.current, list4Heading.current, list4.current],
        { opacity: 0 },
        { opacity: 1, stagger: 0.4, duration: 1 }
      )
      .to(shadow.current, { left: "70%", opacity: 1 })
      .to(line.current, { width: "76%", duration: 1 })
      .fromTo(
        [list5Dot.current, list5Heading.current, list5.current],
        { opacity: 0 },
        { opacity: 1, stagger: 0.4, duration: 1 }
      )
      .to(shadow.current, { left: "87.5%", opacity: 1 })
      .to(line.current, { width: "100%", duration: 1 })
      .fromTo(
        [list6Dot.current, list6Heading.current, list6.current],
        { opacity: 0 },
        { opacity: 1, stagger: 0.4, duration: 1 }
      )
      .to(shadow.current, { opacity: 0, left: "87.5%" });

    Draggable.create(grid.current, {
      type: "x",
      bounds: mainCont.current,
      inertia: true,
      cursor: "initial",
    });
  }, []);

  return (
    <div className="wrapper mt-[100px] lg:mt-[200px] relative">
      <div className="absolute left-1/2 bottom-[50%] -translate-x-1/2 bg-[#a50498] blur-[250px] w-full max-w-[1268px] h-[636px] opacity-[0.15] -z-10"></div>
      <div className="contain flex-col gap-5 justify-start items-center sm:items-start">
        <h2 className="text-white md:text-left text-center text-[40px] sm:text-[48px] font-bold">
          Roadmap
        </h2>
        <div
          ref={mainCont}
          className="overflow-x-scroll roadmap w-full pl-[30px] pt-[30px]"
        >
          <div
            ref={grid}
            className="grid w-max pb-6  grid-cols-6 pl-5 gap-[100px] sm:gap-x-[140px]  pt-4 mt-7 relative"
          >
            <div
              ref={shadow}
              className="absolute bg-[#400091] left-[0.5%] top-[0px] blur-[30px] isolate w-[40px] h-[40px] rounded-full"
            >
              <div className="bg-[#ff519f] w-[60px] h-[60px] -z-10 blur-[15px]"></div>
            </div>
            <div
              ref={line}
              className="absolute top-[23.5px] -z-10 left-0 w-full h-[2px] bg-roadmapLine -translate-y-1/2"
            ></div>
            <div className="flex justify-start min-w-[250px] items-start flex-col gap-7">
              <div
                ref={list1Dot}
                className="rounded-full bg-[#FF519f] w-4 h-4 relative"
              >
                <div className="rounded-full  bg-[#FF519f] w-[22px] -z-10 h-[22px] left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 absolute blur-[12px]"></div>
              </div>
              <h4 ref={list1Heading} className="text-xl text-white font-bold">
                2021
              </h4>
              <ol
                ref={list1}
                className="list-none flex justify-start items-start flex-col gap-3"
              >
                <li className="text-base font-normal text-white">1 Planning</li>
                <li className="text-base font-normal text-white">
                  2 Preparation
                </li>
                <li className="text-base font-normal text-white">
                  3 AUTH, payment int.
                </li>
                <li className="text-base font-normal text-white">
                  4 User, task and log managment
                </li>
                <li className="text-base font-normal text-white">
                  5 Naplozz Wizard
                </li>
              </ol>
            </div>
            <div className="flex justify-start min-w-[250px] items-start flex-col gap-7">
              <div
                ref={list2Dot}
                className="rounded-full bg-[#FF519f] w-4 h-4 relative"
              >
                <div className="rounded-full  bg-[#FF519f] w-[22px] -z-10 h-[22px] left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 absolute blur-[12px]"></div>
              </div>
              <h4 ref={list2Heading} className="text-xl text-white font-bold">
                2022
              </h4>
              <ol
                ref={list2}
                className="list-none flex justify-start items-start flex-col gap-3"
              >
                <li className="text-base font-normal text-white">
                  1 Custom log
                </li>
                <li className="text-base font-normal text-white">
                  2 Site statistics and file archives
                </li>
                <li className="text-base font-normal text-white">
                  3 Admin reguest
                </li>
                <li className="text-base font-normal text-white">
                  4 Admin reguest
                </li>
                <li className="text-base font-normal text-white">
                  5 Inventory log
                </li>
                <li className="text-base font-normal text-white">
                  6 Testing with clients
                </li>
              </ol>
            </div>
            <div className="flex justify-start min-w-[250px] items-start flex-col gap-7">
              <div
                ref={list3Dot}
                className="rounded-full bg-[#FF519f] w-4 h-4 relative"
              >
                <div className="rounded-full  bg-[#FF519f] w-[22px] -z-10 h-[22px] left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 absolute blur-[12px]"></div>
              </div>
              <h4 ref={list3Heading} className="text-xl text-white font-bold">
                2023/1
              </h4>
              <ol
                ref={list3}
                className="list-none flex justify-start items-start flex-col gap-3"
              >
                <li className="text-base font-normal text-white">
                  1 Token creation and integration
                </li>
                <li className="text-base font-normal text-white">
                  2 Mobile app development
                </li>
                <li className="text-base font-normal text-white">
                  3 Audit system
                </li>
                <li className="text-base font-normal text-white">
                  4 Task tree
                </li>
                <li className="text-base font-normal text-white">
                  5 ISO certificate
                </li>
                <li className="text-base font-normal text-white">
                  6 HACCP order system
                </li>
              </ol>
            </div>
            <div className="flex justify-start min-w-[250px] items-start flex-col gap-7">
              <div
                ref={list4Dot}
                className="rounded-full bg-[#FF519f] w-4 h-4 relative"
              >
                <div className="rounded-full  bg-[#FF519f] w-[22px] -z-10 h-[22px] left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 absolute blur-[12px]"></div>
              </div>
              <h4 ref={list4Heading} className="text-xl text-white font-bold">
                2023/2
              </h4>
              <ol
                ref={list4}
                className="list-none flex justify-start items-start flex-col gap-3"
              >
                <li className="text-base font-normal text-white">
                  1 Tutorials and video guideds
                </li>
                <li className="text-base font-normal text-white">
                  2 Naplozz Helpdesk
                </li>
                <li className="text-base font-normal text-white">
                  3 Log integrations
                </li>
                <li className="text-base font-normal text-white">
                  4 Naplozz Educational PL.
                </li>
                <li className="text-base font-normal text-white">
                  5 Crypto payment system
                </li>
              </ol>
            </div>
            <div className="flex justify-start min-w-[250px] items-start flex-col gap-7">
              <div
                ref={list5Dot}
                className="rounded-full bg-[#FF519f] w-4 h-4 relative"
              >
                <div className="rounded-full  bg-[#FF519f] w-[22px] -z-10 h-[22px] left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 absolute blur-[12px]"></div>
              </div>
              <h4 ref={list5Heading} className="text-xl text-white font-bold">
                2024/1
              </h4>
              <ol
                ref={list5}
                className="list-none flex justify-start items-start flex-col gap-3"
              >
                <li className="text-base font-normal text-white">
                  1 Naplozz Marketplace
                </li>
                <li className="text-base font-normal text-white">
                  2 Naplozz Marketplace
                </li>
                <li className="text-base font-normal text-white">
                  3 Working time assistance
                </li>
                <li className="text-base font-normal text-white">
                  4 Naplozz Star Program
                </li>
                <li className="text-base font-normal text-white">
                  5 Exchange listing(s)
                </li>
              </ol>
            </div>
            <div className="flex justify-start min-w-[250px] items-start flex-col gap-7">
              <div
                ref={list6Dot}
                className="rounded-full bg-[#FF519f] w-4 h-4 relative"
              >
                <div className="rounded-full  bg-[#FF519f] w-[22px] -z-10 h-[22px] left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 absolute blur-[12px]"></div>
              </div>
              <h4 ref={list6Heading} className="text-xl text-white font-bold">
                2024/2
              </h4>
              <ol
                ref={list6}
                className="list-none flex justify-start items-start flex-col gap-3"
              >
                <li className="text-base font-normal text-white">
                  1 Software integrations
                </li>
                <li className="text-base font-normal text-white">
                  2 Expanded statistics
                </li>
                <li className="text-base font-normal text-white">
                  3 NAP chain
                </li>
                <li className="text-base font-normal text-white">
                  4 NAP token new utilities
                </li>
                <li className="text-base font-normal text-white">
                  5 NAP chain partnerships
                </li>
              </ol>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Roadmap;
