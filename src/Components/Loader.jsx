import gsap from "gsap";
import { useEffect, useRef } from "react";

const Loader = () => {
  const loadingScreen1 = useRef();
  const loadingScreen2 = useRef();
  const loader = useRef();
  useEffect(() => {
    const timeline = gsap.timeline({ delay: 4.5 });
    timeline
      .to(loader.current, { opacity: 0, duration: 0.2 })
      .to([loadingScreen1.current, loadingScreen2.current], {
        height: 0,
        duration: 1.8,
      });
  }, []);

  return (
    <div className="fixed z-[100] top-0 left-0 w-full h-full flex justify-center items-center">
      <img ref={loader} src="/loader.gif" alt="" className="relative z-[60]" />
      <div
        ref={loadingScreen1}
        className="absolute w-full top-0 h-1/2 bg-black z-50"
      ></div>
      <div
        ref={loadingScreen2}
        className="absolute w-full bottom-0 h-1/2 bg-black z-50"
      ></div>
    </div>
  );
};

export default Loader;
