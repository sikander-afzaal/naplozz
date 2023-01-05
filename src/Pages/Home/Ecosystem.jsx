import { useRef, useEffect } from "react";
//gsap
import gsap, { Circ } from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";

const Ecosystem = () => {
  const container = useRef();
  const container2 = useRef();
  const heading = useRef();
  const bead = useRef();
  const para = useRef();
  const eco1 = useRef();
  const eco2 = useRef();
  const eco3 = useRef();
  const eco4 = useRef();
  const eco5 = useRef();
  const eco6 = useRef();
  const centerEco = useRef();
  const leftBox = useRef();
  const rightBox = useRef();

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);
    const timeLine = gsap.timeline({
      defaults: { duration: 0.6, ease: Circ.easeOut },
      scrollTrigger: {
        trigger: container.current,
        start: "top 30%",
      },
    });
    const timeLine2 = gsap.timeline({
      defaults: { duration: 0.6, ease: Circ.easeOut },
      scrollTrigger: {
        trigger: container2.current,
        start: "top 50%",
      },
    });
    timeLine
      .fromTo(heading.current, { opacity: 0, x: -80 }, { opacity: 1, x: 0 })
      .fromTo(para.current, { opacity: 0, x: -80 }, { opacity: 1, x: 0 })
      .fromTo(bead.current, { opacity: 0 }, { opacity: 1 })
      .fromTo(
        [
          centerEco.current,
          eco1.current,
          eco2.current,
          eco3.current,
          eco4.current,
          eco5.current,
          eco6.current,
        ],
        { opacity: 0 },
        { opacity: 1, stagger: 0.3, duration: 0.2 }
      );
    timeLine2
      .fromTo(leftBox.current, { opacity: 0, x: -80 }, { opacity: 1, x: 0 })
      .fromTo(rightBox.current, { opacity: 0, x: 80 }, { opacity: 1, x: 0 });
  }, []);
  return (
    <div
      ref={container}
      className="wrapper mt-[60px]  sm:mt-[100px] isolate relative"
    >
      <div className="absolute -left-[20%] lg:block hidden opacity-70 w-[1064px] h-[700px] -z-10 -top-[10%] bg-[#360D39] blur-[250px]"></div>
      <div className="contain flex-col items-start justify-start">
        <div className="flex item-center sm:text-left gap-2 text-center justify-start sm:max-w-[530px] sm:items-start flex-col">
          <img
            ref={bead}
            src="/set1.png"
            className="mb-[50px] max-w-[100px]"
            alt=""
          />
          <h2
            ref={heading}
            className="gr-text text-[40px] leading-[1.1]  sm:text-[48px] font-bold"
          >
            Naplozz Ecosystem
          </h2>
          <p ref={para} className="text-white font-medium text-xl">
            Naplozz not just offers quality management and data tracking but it
            is a whole ecosystem of useful tools, so you can focus on what you
            do best: running a business and create value.
          </p>
        </div>
        <div className="grid mt-[60px]   sm:mt-[100px] gap-[0px] self-center grid-cols-2 xs:grid-cols-3 relative w-full max-w-[580px] grid-rows-[auto__1fr__1fr] sm:gap-0 gap-y-[40px] xs:gap-y-[60px] sm:grid-rows-[220px__auto__220px]">
          <div
            ref={eco1}
            className="rounded-full hover:shadow-hoverShadow hover:scale-110 transition-all duration-500 group self-center justify-self-center xs:justify-self-start xs:self-end w-[140px] h-[140px]  isolate relative"
          >
            <p className="bg-purple text-pink text-base font-bold uppercase text-center w-full h-full flex justify-center items-center rounded-full">
              Naplozz <br /> Star
            </p>
            <p className="text-white text-base font-semibold lg:block hidden absolute right-full bottom-full">
              Pubs
            </p>
            <p className="text-white text-base font-semibold lg:block hidden min-w-[100px] absolute right-[110%] top-1/2 -translate-y-1/2">
              Retail Units
            </p>
            <p className="text-white text-center text-base font-semibold lg:block hidden min-w-[130px] absolute right-full top-full">
              Food Producer <br /> units
            </p>
            <div className="absolute -inset-[4px] group-hover:bg-hoverSol bg-blueGr -z-10 rounded-full"></div>
            <div className="absolute left-[129%] bg-blueGr h-[110px] -z-20 w-[6px] hidden sm:block top-[54%] -rotate-[62deg]"></div>
          </div>
          <div
            ref={eco2}
            className="rounded-full  self-start justify-self-center  w-[140px] h-[140px]  isolate relative  hover:shadow-hoverShadow hover:scale-110 transition-all duration-500 group"
          >
            <p className="bg-purple text-pink text-base font-bold uppercase text-center w-full h-full flex justify-center items-center rounded-full">
              Naplozz <br /> App
            </p>

            <p className="text-white text-center lg:block hidden min-w-[150px] text-base font-semibold absolute right-full bottom-full">
              Public <br /> Catering units
            </p>
            <p className="text-white text-base font-semibold lg:block hidden min-w-[100px] absolute left-1/2 bottom-[120%] -translate-x-1/2">
              Food bars
            </p>
            <p className="text-white text-center text-base font-semibold lg:block hidden min-w-[130px] absolute left-[90%] bottom-full">
              Bistros
            </p>
            <div className="absolute -inset-[4px] bg-blueGr -z-10 rounded-full group-hover:bg-hoverSol"></div>
            <div className="absolute left-1/2 -translate-x-1/2 bg-blueGr h-full -z-20 w-[6px] hidden sm:block top-full"></div>
          </div>
          <div
            ref={eco3}
            className="rounded-full self-center justify-self-center xs:self-end xs:justify-self-end   w-[140px] h-[140px]  isolate relative  hover:shadow-hoverShadow hover:scale-110 transition-all duration-500 group"
          >
            <p className="bg-purple text-pink text-base font-bold uppercase text-center w-full h-full flex justify-center items-center rounded-full">
              Naplozz <br /> Education AND
            </p>
            <p className="text-white text-center  text-base lg:block hidden font-semibold absolute left-[70%] bottom-[120%]">
              Brasseries
            </p>
            <p className="text-white text-base font-semibold lg:block hidden min-w-[100px] absolute left-[150%] bottom-[85%] -translate-x-1/2">
              Clubs
            </p>
            <p className="text-white text-center text-base font-semibold lg:block hidden min-w-[130px] absolute left-[100%] bottom-[40%] -translate-y-1/2">
              Bakeries
            </p>
            <p className="text-white text-center text-base font-semibold lg:block hidden min-w-[130px] absolute left-[80%] bottom-[10%]">
              Buffets
            </p>
            <div className="absolute -inset-[4px] bg-blueGr -z-10 rounded-full group-hover:bg-hoverSol"></div>
            <div className="absolute right-[129%] bg-blueGr h-[110px] -z-20 w-[6px] hidden sm:block top-[54%] rotate-[62deg]"></div>
          </div>
          {/* //center ecosystem --------------- */}
          <div
            ref={centerEco}
            className="rounded-[30px] z-20 xs:col-start-1 col-start-1 xs:col-end-4 col-end-3 sm:row-start-2 row-start-1 sm:row-end-3 row-end-2 self-center justify-self-center w-[219px] h-[114px]  isolate relative"
          >
            <div className="bg-purple flex-col gap-3 px-5  w-full h-full flex justify-center items-center rounded-[30px]">
              <button className="rounded-full h-[32px] w-full text-pink text-lg font-bold border-2 border-solid border-pink bg-transparent">
                Naplozz Chain
              </button>
              <button className="rounded-full h-[32px] w-full text-pink text-lg font-bold border-2 border-solid border-pink bg-transparent">
                Naplozz Coin
              </button>
            </div>
            <div className="absolute -inset-[4px] bg-blueGr -z-10 rounded-[30px]"></div>
          </div>
          {/* //center ecosystem end --------------- */}
          <div
            ref={eco4}
            className="rounded-full self-center justify-self-center xs:self-start xs:justify-self-start w-[140px] h-[140px]  isolate relative  hover:shadow-hoverShadow hover:scale-110 transition-all duration-500 group"
          >
            <p className="bg-purple text-pink text-base font-bold uppercase text-center w-full h-full flex justify-center items-center rounded-full">
              Naplozz <br /> Wizard
            </p>
            <p className="text-white text-center  text-base lg:block hidden font-semibold absolute right-[130%] -top-[5%]">
              Industrial <br /> units
            </p>
            <p className="text-white text-base font-semibold lg:block hidden min-w-[100px] absolute right-[120%] top-[60%] -translate-y-1/2">
              Offices
            </p>
            <p className="text-white text-center text-base font-semibold lg:block hidden min-w-[100px] absolute right-[120%] top-[100%] ">
              Food Retail Units
            </p>
            <div className="absolute -inset-[4px] bg-blueGr -z-10 rounded-full group-hover:bg-hoverSol"></div>
            <div className="absolute left-[129%] bg-blueGr h-[110px] -z-20 w-[6px] hidden sm:block bottom-[54%] rotate-[62deg]"></div>
          </div>
          <div
            ref={eco5}
            className="rounded-full self-end  justify-self-center w-[140px] h-[140px]  isolate relative  hover:shadow-hoverShadow hover:scale-110 transition-all duration-500 group"
          >
            <p className="bg-purple text-pink text-base font-bold uppercase text-center w-full h-full flex justify-center items-center rounded-full">
              Naplozz <br /> Certification System
            </p>
            <p className="text-white text-center  text-base lg:block hidden font-semibold absolute left-full -bottom-[20%]">
              Restaurants
            </p>
            <p className="text-white text-base font-semibold lg:block hidden min-w-[100px] absolute left-1/2 top-[130%] -translate-x-1/2">
              Warehouses
            </p>
            <p className="text-white text-center text-base font-semibold lg:block hidden min-w-[130px] absolute right-full -bottom-[20%] ">
              Health Care <br /> Units
            </p>
            <div className="absolute -inset-[4px] bg-blueGr -z-10 rounded-full group-hover:bg-hoverSol"></div>{" "}
            <div className="absolute left-1/2 -translate-x-1/2 bg-blueGr h-full -z-20 w-[6px] hidden sm:block bottom-full"></div>
          </div>
          <div
            ref={eco6}
            className="rounded-full self-center justify-self-center xs:self-start xs:justify-self-end w-[140px] h-[140px]  isolate relative  hover:shadow-hoverShadow hover:scale-110 transition-all duration-500 group"
          >
            <p className="bg-purple text-pink text-base font-bold uppercase text-center w-full h-full flex justify-center items-center rounded-full">
              Naplozz <br /> Marketplace
            </p>
            <p className="text-white text-center  text-base lg:block hidden font-semibold absolute left-[120%] bottom-[50%]">
              Accomodation <br /> units
            </p>
            <p className="text-white text-base font-semibold lg:block hidden min-w-[100px] absolute left-[150%] bottom-[0%] -translate-x-1/2">
              Street Foods
            </p>
            <p className="text-white text-center text-base font-semibold lg:block hidden min-w-[130px] absolute right-[0%] top-[120%] -translate-y-1/2">
              Cafes
            </p>
            <div className="absolute -inset-[4px] bg-blueGr -z-10 rounded-full group-hover:bg-hoverSol"></div>
            <div className="absolute right-[129%] bg-blueGr h-[110px] -z-20 w-[6px] hidden sm:block bottom-[54%] -rotate-[62deg]"></div>
          </div>
        </div>
        <div
          ref={container2}
          className="flex justify-center lg:flex-row flex-col mt-[60px] lg:mt-[140px] items-center w-full gap-5"
        >
          <div
            ref={leftBox}
            className="w-full group relative rounded-[20px] isolate border-solid border-[1px] border-[#b3b3b3]    flex justify-start items-center flex-col"
          >
            <div className="absolute bg-btnGr opacity-0 group-hover:opacity-100 transition-all duration-1000 -z-10 rounded-[20px] -inset-[1px]"></div>
            <div className="w-full h-full bg-black rounded-[20px] flex justify-start items-center flex-col p-5">
              <img src="/star.png" alt="" />
              <p className="text-[#b3b3b3] max-w-[400px] font-medium sm:text-left text-center text-lg sm:text-xl">
                Drive down the hassle of managing your quality measures and
                ensuring that every step from obtain to delivery works well.
              </p>
            </div>
          </div>
          <div
            ref={rightBox}
            className="w-full group relative rounded-[20px] isolate border-solid border-[1px] border-[#b3b3b3]    flex justify-start items-center flex-col"
          >
            <div className="absolute bg-btnGr opacity-0 group-hover:opacity-100 transition-all duration-1000 -z-10 rounded-[20px] -inset-[1px]"></div>
            <div className="w-full h-full bg-black rounded-[20px] flex justify-start items-center flex-col p-5">
              <img src="/star.png" alt="" />
              <p className="text-[#b3b3b3] max-w-[400px] font-medium sm:text-left text-center text-lg sm:text-xl">
                Drive down the hassle of managing your quality measures and
                ensuring that every step from obtain to delivery works well.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Ecosystem;
