const Hero = () => {
  return (
    <div className="wrapper mt-[110px] xl:mt-[130px] relative">
      <div className="absolute team -right-[20%] top-0 bg-greenRadial -z-10 w-full max-w-[804px] h-[804px] blur-[111px] mix-blend-screen"></div>
      <div className="absolute left-0 opacity-[0.24] -translate-x-1/2 -z-10 top-[10%] bg-[#a50498] blur-[250px] w-full max-w-[1064px] h-[688px]"></div>
      <div className="contain flex-col justify-start items-start ">
        <div className="flex xl:flex-row flex-col justify-aroind items-center xl:items-start w-full gap-10">
          <div className="flex justify-start items-center text-center sm:text-left sm:items-start flex-col gap-5">
            <h2 className="gr-text text-[50px] sm:text-[72px] font-bold">
              Pricing
            </h2>
            <p className="text-base sm:text-xl font-medium text-white">
              You’re probably familiar with the concept of a token incentive
              program. It’s when you give your employees a portion of their
              salary in tokens, which can then be redeemed for several
              things—from K—Mart discounts to extra vacation days or even just a
              pat on the back.
            </p>
            <p className="text-base sm:text-xl font-medium text-white">
              But what if you could give them something more? Could you
              incentivize them to help promote a healthy work-life balance,
              increase productivity, and boost your bottom line?
            </p>
          </div>
          <img
            src="/pricing/hero-img.png"
            className="w-full max-w-[650px] object-contain"
            alt=""
          />
        </div>
        <div className="flex justify-start max-w-[1000px] text-center sm:text-left  mid:-mt-[20px]  xl:-mt-[50px] items-center sm:items-start flex-col gap-5">
          <h3 className="text-white font-bold text-[35px] sm:text-[50px]">
            That’s where NAP comes in.{" "}
          </h3>
          <p className="text-base sm:text-xl font-normal text-white">
            NAP tokens are digital currency that gives you the ability to
            incentivize your employees by rewarding them for their hard work.
            You can use it to reward them for their hard work, promote a healthy
            work-life balance, or even increase productivity by giving them
            bonuses on top of their salary.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Hero;
