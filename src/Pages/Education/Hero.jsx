const Hero = () => {
  return (
    <div className="wrapper mt-[100px] sm:mt-[130px] relative">
      <div className="absolute -left-[600px]  -top-[20%] w-full -z-10 max-w-[804px] h-[804px]  bg-greenRadial mix-blend-screen blur-[111px]"></div>
      <div className="absolute rounded-full -right-[20%]  top-[50%] w-full -z-10 max-w-[1110px] h-[522px]  bg-[#2BD1FF33] mix-blend-normal blur-[130.5px]"></div>
      <div className="absolute rounded-full left-1/2 -translate-x-1/2  top-[40%] w-full -z-10 max-w-[932px] h-[932px]  bg-[#A50498]  blur-[250px] opacity-[0.15]"></div>
      <img
        src="/education/hero-side.png"
        className="absolute right-0 top-0 -z-10"
        alt=""
      />
      <div className="contain flex-col justify-start items-start">
        <div className="flex xl:flex-row gap-[40px] xl:gap-0 flex-col mt-[30px] sm:mt-[60px] justify-between items-center sm:items-start w-full ">
          <div className="flex max-w-full xl:max-w-[750px] justify-start items-center text-center sm:text-left sm:items-start flex-col gap-5">
            <h2 className="font-bold text-center sm:text-left leading-[1.2] xl:leading-[88px] text-[35px] sm:text-[55px] xl:text-[63px] mid:text-[68px]  text-white">
              <span className="gr-text">Naplozz education platform</span> and
              help desk
            </h2>
            <p className="text-[rgba(255,255,255,9.76)] font-medium text-lg sm:text-xl">
              Imagine a world where you can train and educate your employees in
              all the fields of work safety and labor, fire- and food safety.
              Imagine a platform that allows you to hold internal education and
              training sessions for your team or conduct meetings with other
              employees.
            </p>
            <p className="text-[rgba(255,255,255,9.76)] font-medium text-lg sm:text-xl">
              Now imagine that this platform is built on the NAP token, which
              incentivizes all users to buy, use, and hold NAP tokens.
            </p>
          </div>
          <img
            src="/education/rocket.png"
            className="w-full max-w-[550px]"
            alt=""
          />
        </div>
        <div className="flex md:text-left text-center mt-[60px] sm:mt-[100px] flex-col relative justify-start items-start gap-5">
          <h2 className="font-semibold max-w-[1000px]   leading-[27px]  text-[18px] sm:text-[23px]  text-white">
            We think this is the future of education—and it's one that we at
            Naplozz are working hard to make a reality. <br />
            Moreover, there will be a Naplozz Helpdesk, a comprehensive and
            easy-to-use knowledge base.
          </h2>
          <h3 className="font-bold mt-[20px] md:mt-[60px] text-white leading-[1.1] md:leading-[70px] text-[25px] sm:text-[35px] md:text-[50px]">
            We want to ensure everyone has access <br /> to high-quality
            information about <br className="sm:block hidden" /> Naplozz
            products{" "}
            <span className="text-lg sm:text-[25px] md:text-[40px] text-[#B3B3B3]">
              and an opportunity to learn from each other.{" "}
            </span>
          </h3>
          <img
            src="/education/ball-set.png"
            className="absolute top-0 -right-[5%] -z-10 xl:block hidden"
            alt=""
          />
        </div>
        <h2 className="text-[25px] sm:text-[30px] md:text-left text-center md:text-[40px] mid:text-[48px] mt-[60px] sm:mt-[80px] md:mt-[170px] md:mb-[80px] leading-[1]  lg:leading-[0] text-white font-bold">
          We believe in giving back <br className="lg:block hidden" /> by
          sharing our knowledge{" "}
          <span className="gr-text text-[40px] sm:text-[50px] md:text-[70px] mid:text-[90px] font-bold leading-[1.3]">
            through our <br /> fantastic community!
          </span>
        </h2>
      </div>
    </div>
  );
};

export default Hero;
