const Partners = () => {
  return (
    <div className="wrapper mt-[80px] sm:mt-[150px]">
      <div className="contain py-[60px] flex-col justify-start relative items-start gap-[80px]">
        <div className="w-full absolute top-0 left-0 bg-[rgb(179,179,179)]  h-[2px]">
          <div className="absolute left-0 z-20 top-1/2 -translate-y-1/2 xl:-translate-x-1/2 bg-[rgb(179,179,179)]   w-4 h-4 rotate-45"></div>
          <div className="absolute right-0 z-20 top-1/2 -translate-y-1/2 xl:translate-x-1/2 bg-[rgb(179,179,179)]   w-4 h-4 rotate-45"></div>
        </div>
        <div className="w-full absolute bottom-0 left-0 bg-[rgb(179,179,179)]  h-[2px]">
          <div className="absolute left-0 z-20 top-1/2 -translate-y-1/2 xl:-translate-x-1/2 bg-[rgb(179,179,179)]   w-4 h-4 rotate-45"></div>
          <div className="absolute right-0 z-20 top-1/2 -translate-y-1/2 xl:translate-x-1/2 bg-[rgb(179,179,179)]   w-4 h-4 rotate-45"></div>
        </div>
        <div className="flex justify-start items-start flex-col gap-5">
          <h2 className="text-white text-[40px] sm:text-[48px] font-bold leading-[1]">
            Our Partners
          </h2>
          <p className="text-[rgba(255,255,255,0.62)]  max-w-[500px] text-lg sm:text-[20px] font-medium  leading-[1.3]">
            Our Partners are on board with our vision and have shown interest in
            working together as we develop new business solutions.
          </p>
        </div>
        <div className="flex justify-center items-center max-w-[700px] self-center gap-[50px] flex-wrap w-full">
          <img src="/part1.png" alt="" />
          <img src="/part2.png" alt="" />
          <img src="/part3.png" alt="" />
          <img src="/part4.png" alt="" />
          <img src="/part5.png" alt="" />
          <img src="/part6.png" alt="" />
          <img src="/part7.png" alt="" />
          <img src="/part8.png" alt="" />
          <img src="/part9.png" alt="" />
          <img src="/part10.png" alt="" />
        </div>
      </div>
    </div>
  );
};

export default Partners;
