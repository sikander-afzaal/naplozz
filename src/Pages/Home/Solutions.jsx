import { useRef, useEffect } from "react";
//gsap
import gsap, { Circ } from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";
const Features = () => {
  const container = useRef();
  const container2 = useRef();
  const container3 = useRef();
  const heading = useRef();
  const para = useRef();
  const para2 = useRef();
  const para3 = useRef();
  const video = useRef();
  const bead = useRef();
  const box1 = useRef();
  const box2 = useRef();
  const feat1 = useRef();
  const feat2 = useRef();
  const feat3 = useRef();
  const feat4 = useRef();
  const feat5 = useRef();
  const featHead = useRef();

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);
    const timeLine = gsap.timeline({
      defaults: { duration: 0.5, ease: Circ.easeOut },
      scrollTrigger: {
        trigger: container.current,
        start: "top 50%",
      },
    });
    //for mid boxes
    const timeLine2 = gsap.timeline({
      defaults: { duration: 1, ease: Circ.easeOut },
      scrollTrigger: {
        trigger: container2.current,
        start: "top 50%",
      },
    });
    //for feature boxes
    const timeLine3 = gsap.timeline({
      defaults: { duration: 0.5, ease: Circ.easeOut },
      scrollTrigger: {
        trigger: container3.current,
        start: "top 50%",
      },
    });
    //////////////////////////
    timeLine
      .fromTo(heading.current, { opacity: 0, y: -90 }, { opacity: 1, y: 0 })
      .fromTo(
        [para.current, para2.current, para3.current],
        { opacity: 0, x: -90 },
        { opacity: 1, x: 0, stagger: 0.5 }
      )
      .fromTo(
        [video.current, bead.current],
        { opacity: 0, x: 90 },
        { opacity: 1, x: 0, stagger: 0.5 }
      );
    /////////////////////////////
    timeLine2.fromTo(
      [box1.current, box2.current],
      { opacity: 0, x: -90 },
      { opacity: 1, x: 0, stagger: 0.5 }
    );
    ///////////////////
    timeLine3
      .fromTo(featHead.current, { opacity: 0, y: -90 }, { opacity: 1, y: 0 })
      .fromTo(
        [
          feat1.current,
          feat2.current,
          feat3.current,
          feat4.current,
          feat5.current,
        ],
        { opacity: 0, y: 90 },
        { opacity: 1, y: 0, stagger: 0.3 }
      );
  }, []);

  return (
    <div ref={container} className="wrapper mt-[190px] sm:mt-[240px] ">
      <div className="contain flex-col justify-start items-center">
        <div className="flex  w-full xl:flex-row flex-col justify-center relative isolate items-center gap-[50px] xl:gap-[100px]">
          <div className="absolute bg-blueRadial opacity-10 hidden head:block blur-[115px] -z-10 w-[1130px] h-[600px] -translate-x-1/2 left-1/2 top-0"></div>
          <div className="flex justify-start items-start flex-col gap-5">
            <h2
              ref={heading}
              className="text-white text-[40px] sm:text-[48px] font-bold leading-[1]"
            >
              Solutions
            </h2>
            <p
              ref={para}
              className="text-[rgba(255,255,255,0.62)] text-lg sm:text-[20px] font-medium  leading-[1.3]"
            >
              Naplozz is a quality management and data tracking application
              utilizing technologies like blockchain.
            </p>
            <h3
              ref={para2}
              className="text-white text-xl sm:text-[24px] font-bold leading-[1]"
            >
              It logs, manages, tracks, and analyzes your employees work
            </h3>
            <p
              ref={para3}
              className="text-[rgba(255,255,255,0.62)] text-lg sm:text-[20px] font-medium  leading-[1.3]"
            >
              Naplozz has been designed to be flexible for every company size
              and stage
            </p>
          </div>
          <img
            ref={bead}
            src="/set2.png"
            className="absolute max-w-[110px] right-0 bottom-full -z-10"
            alt=""
          />
          <img
            ref={video}
            src="/vid.png"
            className="w-full max-w-[720px] object-contain"
            alt=""
          />
        </div>
        <div
          ref={container2}
          className="flex justify-start gap-8 mt-[40px] xl:mt-[80px] items-center flex-col xl:flex-row xl:items-stretch w-full "
        >
          <div
            ref={box1}
            className="flex group justify-center max-w-none w-full xl:max-w-[520px]  items-center relative isolate rounded-[40px]"
          >
            <ul className="w-full bg-black list-none p-5 h-full flex justify-start rounded-[40px] items-start flex-col gap-4">
              <li className="text-[#f9f9f9]  font-medium text-base sm:text-xl">
                <span className="gr-text">⦁</span> Easily track all the
                mandatory work happening in your business with a single click{" "}
              </li>

              <li className="text-[#f9f9f9] font-medium text-base sm:text-xl">
                <span className="gr-text">⦁</span> Create inner protocols or
                send protocols to other businesses
              </li>
              <li className="text-[#f9f9f9] font-medium text-base sm:text-xl">
                <span className="gr-text">⦁</span> Track your employees working
                time
              </li>
              <li className="text-[#f9f9f9] font-medium text-base sm:text-xl">
                <span className="gr-text">⦁</span> Stand out with your result
                through our social feed
              </li>
              <li className="text-[#f9f9f9] font-medium text-base sm:text-xl">
                <span className="gr-text">⦁</span> Easily order HACCP or other
                assessments
              </li>
            </ul>
            <div className="absolute -inset-[1px] bg-blueGr -z-20 rounded-[40px] group-hover:opacity-0 transition-all duration-500"></div>
            <div className="absolute -inset-[1px] bg-btnGr opacity-0 -z-20 rounded-[40px] group-hover:opacity-100 transition-all duration-500"></div>
          </div>
          <div
            ref={box2}
            className="flex group max-w-none w-full xl:max-w-[520px] justify-center  items-center relative isolate rounded-[40px]"
          >
            <ul className="w-full bg-black list-none p-5 h-full flex justify-start rounded-[40px] items-start flex-col gap-4">
              <li className="text-[#f9f9f9]  font-medium text-base sm:text-xl">
                <span className="gr-text">⦁</span> Create a flexible dashboard
                for your team that enables them to see how they are performing
                across all their projects
              </li>
              <li className="text-[#f9f9f9] font-medium text-base sm:text-xl">
                <span className="gr-text">⦁</span> Manage tasks so that they are
                done on time, and no one misses out due to a lack of
                communication
              </li>
              <li className="text-[#f9f9f9] font-medium text-base sm:text-xl">
                <span className="gr-text">⦁</span> Reward your employees with
                NAP Tokens for their hard work
              </li>
              <li className="text-[#f9f9f9] font-medium text-base sm:text-xl">
                <span className="gr-text">⦁</span> Get educational certificates
                after completing our tests
              </li>
            </ul>
            <div className="absolute -inset-[1px] bg-blueGr -z-20 rounded-[40px] group-hover:opacity-0 transition-all duration-500"></div>
            <div className="absolute -inset-[1px] bg-btnGr opacity-0 -z-20 rounded-[40px] group-hover:opacity-100 transition-all duration-500"></div>
          </div>
        </div>
        <div
          ref={container3}
          className=" flex relative w-full flex-col justify-start items-center sm:items-start gap-10 mt-[80px] sm:mt-[100px]"
        >
          <div className="absolute bg-[#0262f7] h-[680px] -z-10 blur-[120px] opacity-10 w-full -top-[10%] left-1/2 -translate-x-1/2 max-w-[1320px]"></div>
          <h2
            ref={featHead}
            className="text-white text-center text-[38px] sm:text-[48px] font-bold leading-[1]"
          >
            Our main features
          </h2>
          <div className="w-full grid-cols-1 sm:grid-cols-2 md:grid-cols-3 place-items-center xl:grid-cols-5 grid gap-6 xl:gap-5">
            <div
              ref={feat1}
              className="flex group justify-center items-center w-full sm:max-w-none max-w-[240px] relative rounded-[30px]"
            >
              <div className="flex min-h-[200px] min-w-[200px]  flex-col  gap-2 justify-center items-center w-full h-full bg-black rounded-[30px]">
                <img src="/feat1.png" alt="" />
                <h6 className="text-white text-2xl font-medium">
                  Task Manager
                </h6>
              </div>
              <div className="flex justify-start group-hover:opacity-100 duration-500 transition-all group-hover:bottom-0 items-center w-full p-5 bg-black rounded-[30px] h-full absolute left-0 opacity-0 -bottom-[100px]">
                <p className="text-white text-lg">
                  A simple interface that allows you to track your tasks and
                  assign them to your employees
                </p>
              </div>
              <div className="absolute rounded-[30px] -inset-[1px] bg-btnGr -z-20 "></div>
            </div>
            <div
              ref={feat2}
              className="flex group justify-center items-center w-full sm:max-w-none max-w-[240px] relative rounded-[30px]"
            >
              <div className="flex min-h-[200px] min-w-[200px]  flex-col  gap-2 justify-center items-center w-full h-full bg-black rounded-[30px]">
                <img src="/feat2.png" alt="" />
                <h6 className="text-white text-2xl font-medium">User Levels</h6>
              </div>{" "}
              <div className="flex justify-start group-hover:opacity-100 duration-500 transition-all group-hover:bottom-0 items-center w-full p-5 bg-black rounded-[30px] h-full absolute left-0 opacity-0 -bottom-[100px]">
                <p className="text-white text-lg">
                  The Naplozz App is designed to minimize bureaucracy and
                  maximize your users’ productivity.
                </p>
              </div>
              <div className="absolute rounded-[30px] -inset-[1px] bg-btnGr -z-20 "></div>
            </div>
            <div
              ref={feat3}
              className="flex group justify-center items-center w-full sm:max-w-none max-w-[240px] relative rounded-[30px]"
            >
              <div className="flex min-h-[200px] min-w-[200px]  flex-col  gap-2 justify-center items-center w-full h-full bg-black rounded-[30px]">
                <img src="/feat3.png" alt="" />
                <h6 className="text-white text-2xl font-medium">Log Manager</h6>
              </div>{" "}
              <div className="flex justify-start group-hover:opacity-100 duration-500 transition-all group-hover:bottom-0 items-center w-full p-5 bg-black rounded-[30px] h-full absolute left-0 opacity-0 -bottom-[100px]">
                <p className="text-white text-lg">
                  The Log Manager allows you to organize and monitor your
                  inspection records and logs easily.
                </p>
              </div>
              <div className="absolute rounded-[30px] -inset-[1px] bg-btnGr -z-20 "></div>
            </div>
            <div
              ref={feat4}
              className="flex group justify-center items-center w-full sm:max-w-none max-w-[240px] relative rounded-[30px]"
            >
              <div className="flex min-h-[200px] min-w-[200px]  flex-col  gap-2 justify-center items-center w-full h-full bg-black rounded-[30px]">
                <img src="/feat4.png" alt="" />
                <h6 className="text-white text-2xl font-medium">Attendance</h6>
              </div>{" "}
              <div className="flex justify-start group-hover:opacity-100 duration-500 transition-all group-hover:bottom-0 items-center w-full p-5 bg-black rounded-[30px] h-full absolute left-0 opacity-0 -bottom-[100px]">
                <p className="text-white text-lg">
                  Attendance Assistant is a tool to accurately track, record,
                  and report the attendance of your workers around the clock.
                </p>
              </div>
              <div className="absolute rounded-[30px] -inset-[1px] bg-btnGr -z-20 "></div>
            </div>
            <div
              ref={feat5}
              className="flex group justify-center items-center w-full sm:max-w-none max-w-[240px] relative rounded-[30px]"
            >
              <div className="flex min-h-[200px] min-w-[200px]  flex-col  gap-2 justify-center items-center w-full h-full bg-black rounded-[30px]">
                <img src="/feat5.png" alt="" />
                <h6 className="text-white text-2xl font-medium">Communicate</h6>
              </div>{" "}
              <div className="flex justify-start group-hover:opacity-100 duration-500 transition-all group-hover:bottom-0 items-center w-full p-5 bg-black rounded-[30px] h-full absolute left-0 opacity-0 -bottom-[100px]">
                <p className="text-white text-lg">
                  You can communicate in real-time, allowing each member to
                  voice their opinion and move forward.
                </p>
              </div>
              <div className="absolute rounded-[30px] -inset-[1px] bg-btnGr -z-20 "></div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Features;
