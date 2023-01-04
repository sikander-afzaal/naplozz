const Partners = () => {
  return (
    <div className="wrapper mt-[80px] sm:mt-[150px]">
      <div className="contain flex-col justify-start items-start gap-[80px]">
        <div className="flex justify-start items-start flex-col gap-5">
          <h2 className="text-white text-[40px] sm:text-[48px] font-bold leading-[1]">
            Main features
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
