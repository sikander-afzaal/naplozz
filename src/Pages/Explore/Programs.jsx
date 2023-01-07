import { useRef, useEffect } from "react";
import gsap from "gsap";

const Programs = () => {
  const shadow = useRef();
  useEffect(() => {
    gsap.fromTo(
      shadow.current,
      { y: "30%" },
      { y: "-30%", duration: 8, repeat: -1, yoyo: true }
    );
  }, []);

  return (
    <div className="wrapper mt-[100px] relative isolate">
      <div
        ref={shadow}
        className="absolute -z-10 opacity-90 blur-[400px] w-full max-w-[1600px] h-[700px] bg-[#3f3f6e] top-[10%] -left-[40%]"
      ></div>
      <div className="absolute -z-10 opacity-[0.15] blur-[250px] w-full max-w-[1028px] h-[1028px] bg-[#A50498] top-[70%] -translate-x-1/2 left-[50%]"></div>
      <div className="contain flex-col justify-start items-center gap-0 xl:gap-[40px]">
        <div className="w-full gap-5 xl:gap-0 xl:flex-row flex-col flex justify-between items-center">
          <div className="flex justify-start xl:items-start text-center xl:text-left max-w-[550px] items-center flex-col gap-5">
            <h3 className="text-[#FF866d] font-bold text-[40px] sm:text-[48px]">
              NAP Buyback Program
            </h3>
            <p className="text-white text-lg sm:text-xl font-medium">
              In the long term, we want to ensure our Users can use NAP tokens
              easily in our ecosystem. That’s why we’ve introduced The NAP
              Buyback Program.
            </p>
            <p className="text-white text-lg sm:text-xl font-medium">
              This will guarantee that our users will utilize the tokens
              efficiently in our ecosystem in the future. Our regular buyback
              will occur monthly after the subscription fee of each subscriber
              of the previous month.
            </p>
          </div>
          <img
            src="/explore/buy-back.png"
            className="w-full max-w-[615px] object-contain"
            alt=""
          />
        </div>
        <div className="w-full gap-5 xl:gap-0 xl:flex-row flex-col-reverse flex justify-between items-center relative isolate">
          <img
            src="/explore/ball.png"
            className="absolute max-w-[100px] xl:block hidden -left-[10%] top-0 -z-10"
            alt=""
          />
          <img
            src="/explore/sub.png"
            className="w-full max-w-[615px] object-contain"
            alt=""
          />
          <div className="flex justify-start xl:items-start text-center xl:text-left max-w-[550px] items-center flex-col gap-5">
            <img
              src="/explore/ball.png"
              className="w-full max-w-[60px] sm:max-w-[100px] self-end"
              alt=""
            />
            <h3 className="text-[#FF866d] font-bold text-[40px] sm:text-[48px]">
              Naplozz Subscription with NAP Token
            </h3>
            <p className="text-white text-lg sm:text-xl font-medium opacity-[0.62]">
              We have implemented a token purchase structure into our
              subscription model to encourage users to take part in the increase
              in the value of the token. This structure allows subscribers
              to make a specific percentage of their subscriptions by buying
              tokens directly from the market.
            </p>
            <p className="text-white font-semibold sm:text-[23px] text-lg">
              The Naplozz company’s treasury will be the only place for the
              tokens.
            </p>
            <p className="text-white text-lg sm:text-xl font-medium opacity-[0.62]">
              This new model will enable Naplozz to engage with users interested
              in using our goods or services by directly growing the token
              demand.
            </p>
          </div>
        </div>
        <div className="w-full relative gap-5 mt-[70px] xl:mt-[100px] xl:gap-0 xl:flex-row flex-col flex justify-between items-center">
          <div className="flex justify-start xl:items-start text-center xl:text-left max-w-[550px] items-center flex-col gap-5">
            <h3 className="text-[#FF866d] font-bold text-[40px] sm:text-[48px]">
              Burn
            </h3>
            <p className="text-white text-lg sm:text-xl font-medium">
              In order to guarantee the optimal growth of the Naplozz ecosystem
              and to make sure that the token remains valuable, Naplozz includes
              a Burn feature.
            </p>
            <p className="text-white text-lg sm:text-xl font-medium">
              Whenever the user unlocks a certain amount of tokens, a specific
              amount of tokens will be burned out of the Ecosystem pool or from
              the liquidity pool. Thanks to this the total supply will
              be balanced and NAP tokens will be immune to inflation.
            </p>
          </div>
          <img
            className="absolute sm:block hidden right-[0%] top-full w-full max-w-[80px]"
            alt=""
            src="/explore/ball.png"
          />
          <img
            src="/explore/burn.png"
            className="w-full max-w-[615px] object-contain"
            alt=""
          />
        </div>
      </div>
    </div>
  );
};

export default Programs;
