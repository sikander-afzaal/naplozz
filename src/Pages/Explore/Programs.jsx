import { useRef, useEffect } from "react";
import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";

const Programs = () => {
  const container = useRef();
  const container2 = useRef();
  const container3 = useRef();
  const shadow = useRef();
  const heading1 = useRef();
  const heading2 = useRef();
  const heading3 = useRef();
  const img1 = useRef();
  const img2 = useRef();
  const img3 = useRef();
  const para1 = useRef();
  const para2 = useRef();
  const para3 = useRef();
  const para4 = useRef();
  const para5 = useRef();
  const para6 = useRef();
  const para7 = useRef();
  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);
    const timeLine = gsap.timeline({
      defaults: { duration: 0.4 },
      scrollTrigger: {
        trigger: container.current,
        start: "top 20%",
      },
    });
    const timeLine2 = gsap.timeline({
      defaults: { duration: 0.4 },
      scrollTrigger: {
        trigger: container2.current,
        start: "top 20%",
      },
    });
    const timeLine3 = gsap.timeline({
      defaults: { duration: 0.4 },
      scrollTrigger: {
        trigger: container3.current,
        start: "top 20%",
      },
    });
    timeLine
      .fromTo(img1.current, { opacity: 0, x: 50 }, { opacity: 1, x: 0 })
      .fromTo(
        [heading1.current, para1.current, para2.current],
        { opacity: 0, x: -50 },
        { opacity: 1, x: 0, stagger: 0.4 }
      );
    timeLine2
      .fromTo(img2.current, { opacity: 0, x: -50 }, { opacity: 1, x: 0 })
      .fromTo(
        [heading2.current, para3.current, para4.current, para5.current],
        { opacity: 0, x: 50 },
        { opacity: 1, x: 0, stagger: 0.4 }
      );
    timeLine2
      .fromTo(img3.current, { opacity: 0, x: 50 }, { opacity: 1, x: 0 })
      .fromTo(
        [heading3.current, para6.current, para7.current],
        { opacity: 0, x: -50 },
        { opacity: 1, x: 0, stagger: 0.4 }
      );
    gsap.fromTo(
      shadow.current,
      { y: "30%" },
      { y: "-30%", duration: 8, repeat: -1, yoyo: true }
    );
    return () => {
      timeLine.kill();
      timeLine2.kill();
      timeLine3.kill();
    };
  }, []);

  return (
    <div className="wrapper mt-[100px] relative isolate">
      <div
        ref={shadow}
        className="absolute -z-10 opacity-90 blur-[400px] w-full max-w-[1600px] h-[700px] bg-[#3f3f6e] top-[10%] -left-[40%]"
      ></div>
      <div className="absolute -z-10 opacity-[0.15] blur-[250px] w-full max-w-[1028px] h-[1028px] bg-[#A50498] top-[70%] -translate-x-1/2 left-[50%]"></div>
      <div className="absolute -z-10  blur-[162.5px] w-full max-w-[1752px] h-[716px] bg-blackRadial top-[0%] -translate-x-1/2 left-[50%]"></div>
      <div className="absolute -z-10  blur-[162.5px] w-full max-w-[1932px] h-[1006px] bg-blackRadial top-[20%] -translate-x-1/2 left-[50%]"></div>
      <div className="contain flex-col justify-start items-center gap-0 xl:gap-[40px]">
        <div
          ref={container}
          className="w-full gap-5 xl:gap-0 xl:flex-row flex-col flex justify-between items-center xl:items-start"
        >
          <div className="flex relative justify-start xl:mt-[70px] xl:items-start text-center xl:text-left max-w-[550px] items-center flex-col gap-6">
            <img
              className="absolute left-[15%] top-[20%] -z-20 opacity-50"
              src="/explore/ball.png"
              alt=""
            />
            <h3
              ref={heading1}
              className="text-[#FF866d] font-bold text-[40px] mid:text-[48px]"
            >
              NAP Buyback Program
            </h3>
            <p
              ref={para1}
              className="text-white text-lg sm:text-xl font-medium"
            >
              In the long term, we want to ensure our Users can use NAP tokens
              easily in our ecosystem. That’s why we’ve introduced The NAP
              Buyback Program.
            </p>
            <p
              ref={para2}
              className="text-white text-lg sm:text-xl font-medium"
            >
              This will guarantee that our users will utilize the tokens
              efficiently in our ecosystem in the future. Our regular buyback
              will occur monthly after the subscription fee of each subscriber
              of the previous month.
            </p>
          </div>
          <img
            ref={img1}
            src="/explore/buy-back.png"
            className="w-full max-w-[615px] object-contain"
            alt=""
          />
        </div>
        <div
          ref={container2}
          className="w-full gap-5 xl:gap-0 xl:flex-row flex-col-reverse flex justify-between items-center relative isolate"
        >
          <img
            src="/explore/ball.png"
            className="absolute bead max-w-[100px] xl:block hidden -left-[10%] top-0 -z-10"
            alt=""
          />
          <img
            ref={img2}
            src="/explore/sub.png"
            className="w-full max-w-[500px] mid:max-w-[615px] object-contain"
            alt=""
          />
          <div className="flex justify-start xl:items-start text-center xl:text-left max-w-[550px] items-center flex-col gap-5">
            <img
              src="/explore/ball.png"
              className="w-full bead-delayed max-w-[60px] sm:max-w-[100px] self-end"
              alt=""
            />
            <h3
              ref={heading2}
              className="text-[#FF866d] font-bold text-[40px] mid:text-[48px]"
            >
              Naplozz Subscription with NAP Token
            </h3>
            <p
              ref={para3}
              className="text-white text-lg sm:text-xl font-medium opacity-[0.62]"
            >
              We have implemented a token purchase structure into our
              subscription model to encourage users to take part in the increase
              in the value of the token. This structure allows subscribers
              to make a specific percentage of their subscriptions by buying
              tokens directly from the market.
            </p>
            <p
              ref={para4}
              className="text-white font-semibold sm:text-[23px] text-lg"
            >
              The Naplozz company’s treasury will be the only place for the
              tokens.
            </p>
            <p
              ref={para5}
              className="text-white text-lg sm:text-xl font-medium opacity-[0.62]"
            >
              This new model will enable Naplozz to engage with users interested
              in using our goods or services by directly growing the token
              demand.
            </p>
          </div>
        </div>
        <div
          ref={container3}
          className="w-full relative gap-5 mt-[70px] xl:mt-[100px] xl:gap-0 xl:flex-row flex-col flex justify-between items-center"
        >
          <div className="flex justify-start xl:items-start text-center xl:text-left max-w-[550px] items-center flex-col gap-5">
            <h3
              ref={heading3}
              className="text-[#FF866d] font-bold text-[40px] mid:text-[48px]"
            >
              Burn
            </h3>
            <p
              ref={para6}
              className="text-white text-lg sm:text-xl font-medium"
            >
              In order to guarantee the optimal growth of the Naplozz ecosystem
              and to make sure that the token remains valuable, Naplozz includes
              a Burn feature.
            </p>
            <p
              ref={para7}
              className="text-white text-lg sm:text-xl font-medium"
            >
              Whenever the user unlocks a certain amount of tokens, a specific
              amount of tokens will be burned out of the Ecosystem pool or from
              the liquidity pool. Thanks to this the total supply will
              be balanced and NAP tokens will be immune to inflation.
            </p>
          </div>
          <img
            className="absolute bead sm:block hidden right-[0%] top-full w-full max-w-[80px]"
            alt=""
            src="/explore/ball.png"
          />
          <img
            ref={img3}
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
