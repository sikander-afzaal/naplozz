import { faArrowRight } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import gsap, { Circ } from "gsap";
import { useEffect, useRef } from "react";
import { Link } from "react-router-dom";

const Hero = ({ loader }) => {
  const heading = useRef();
  const para = useRef();
  const link = useRef();
  useEffect(() => {
    const timeLine = gsap.timeline({
      defaults: { duration: 0.4, ease: Circ.easeOut },
      delay: loader ? 6.9 : 0.5,
    });
    timeLine
      .fromTo(heading.current, { y: -40, opacity: 0 }, { y: 0, opacity: 1 })
      .fromTo(para.current, { y: -40, opacity: 0 }, { y: 0, opacity: 1 })
      .fromTo(link.current, { y: -40, opacity: 0 }, { y: 0, opacity: 1 });
    return () => {
      timeLine.kill();
    };
  }, []);

  return (
    <div className="wrapper md:p-0 py-[150px] mt-[100px] md:mt-[50px] relative isolate">
      <div className="absolute left-0 top-0 z-10 md:block hidden -rotate-180 w-full bg-blogGr h-[150px]  pointer-events-none"></div>
      <div className="absolute left-0 bottom-0  w-full bg-[rgba(0,0,0,0.6)] md:bg-transparent  md:bg-blogGr h-full md:h-[300px] z-10 pointer-events-none"></div>

      <img
        src="/blogs/hero-bg.png"
        className="w-full h-full md:h-auto aspect-auto md:static absolute -z-20 left-0 top-0 md:aspect-square lg:aspect-auto lg:max-h-[700px] object-cover"
        alt=""
      />
      <div className="contain  flex-col  z-20 gap-4 items-center md:text-left text-center md:items-start justify-start static md:absolute bottom-[10%] lg:bottom-[5%] left-1/2 md:-translate-x-1/2">
        <h2
          ref={heading}
          className="text-white font-bold text-[35px] md:text-[48px]"
        >
          Crypto tokens and the blockchain: special new use cases
        </h2>
        <p
          ref={para}
          className="text-base md:text-xl font-medium max-w-[700px] text-[#b3b3b3]"
        >
          Financial markets evolve and evolve rapidly. The crypto market is no
          different...
        </p>
        <Link
          ref={link}
          to="/blog/1"
          className="no-underline text-lightPink font-medium text-xl md:text-base flex justify-start items-center gap-2"
        >
          View Post{" "}
          <FontAwesomeIcon icon={faArrowRight} className="text-white" />
        </Link>
      </div>
    </div>
  );
};

export default Hero;
