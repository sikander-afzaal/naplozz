const Mid = () => {
  return (
    <div className="wrapper mt-[80px] md:mt-[150px]  ">
      <div className="contain flex-col text-center justify-center items-center gap-12 relative py-[50px] md:py-[90px]">
        {/* //top and bottom liness ---------------- */}
        <div className="w-[95%] absolute top-0 left-1/2 -translate-x-1/2 bg-[rgb(179,179,179)] opacity-[0.5]  h-[2px]">
          <div className="absolute left-0 z-20 top-1/2 -translate-y-1/2 xl:-translate-x-1/2 bg-[#B3B3B3]   w-4 h-4 rotate-45 rounded-full"></div>
          <div className="absolute right-0 z-20 top-1/2 -translate-y-1/2 xl:translate-x-1/2 bg-[rgb(179,179,179)]   w-4 h-4 rotate-45 rounded-full"></div>
        </div>
        <div className="w-[95%] absolute bottom-0 opacity-[0.5] left-1/2 -translate-x-1/2 bg-[rgb(179,179,179)]  h-[2px]">
          <div className="absolute left-0 z-20 top-1/2 -translate-y-1/2 xl:-translate-x-1/2 bg-[rgb(179,179,179)]   w-4 h-4 rotate-45 rounded-full"></div>
          <div className="absolute right-0 z-20 top-1/2 -translate-y-1/2 xl:translate-x-1/2 bg-[rgb(179,179,179)]   w-4 h-4 rotate-45 rounded-full"></div>
        </div>
        {/* //top and bottom liness ---------------- */}
        <h3 className="text-white max-w-[850px] font-bold text-[24px] sm:text-[30px] md:text-[40px] leading-[1.1]">
          We know how hard it is out there to find qualified help when you need
          it most
        </h3>
        <h3 className="gr-text font-bold max-w-[850px] text-[24px] sm:text-[30px] md:text-[40px] leading-[1.1]">
          that's why we've developed Naplozz Marketplace o help solve this
          problem once and for all!
        </h3>
      </div>
    </div>
  );
};

export default Mid;
