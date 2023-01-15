import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";
import GradientButton from "../../Components/GradientButton";
import { useEffect, useRef, useState } from "react";

const Tokenomics = ({ once, setOnce }) => {
  const [disclaimer, setDisclaimer] = useState(false);
  const container = useRef();
  const heading1 = useRef();
  const table1 = useRef();
  const table2 = useRef();
  const pie = useRef();
  const heading2 = useRef();
  const chart = useRef();

  const disclaimerFunc = () => {
    if (!once) {
      setDisclaimer(true);
      setOnce(true);
    } else {
      return;
    }
  };
  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);
    const timeLine = gsap.timeline({
      defaults: { duration: 0.4 },
      scrollTrigger: {
        trigger: container.current,
        start: "top 30%",
      },
    });
    gsap.to(container.current, {
      scrollTrigger: {
        trigger: container.current,
        onEnter: () => disclaimerFunc(),
        once: true,
        start: "top 30%",
      },
    });
    timeLine
      .fromTo(
        [heading1.current, table1.current],
        { opacity: 0, y: -50 },
        { y: 0, opacity: 1, stagger: 0.4 }
      )
      .fromTo(
        [table2.current, pie.current],
        { opacity: 0, y: 50 },
        { y: 0, opacity: 1, stagger: 0.4 }
      )
      .fromTo(
        [heading2.current, chart.current],
        { opacity: 0, y: -50 },
        { y: 0, opacity: 1, stagger: 0.4 }
      );

    return () => {
      timeLine.kill();
    };
  }, []);

  return (
    <>
      {disclaimer && <Disclaimer setModal={setDisclaimer} />}
      <div
        id="tokenomics"
        ref={container}
        className="wrapper mt-[100px] relative isolate"
      >
        <img
          src="/explore/token-bg.png"
          alt=""
          className="absolute right-0 top-[20%] sm:top-[10%] -z-10 max-w-[300px] w-full"
        />
        <div className="absolute opacity-50 w-full -left-[30%]  -top-[13%] -z-10 blur-[250px] bg-greenRadial max-w-[804px] h-[804px]"></div>
        <div className="contain flex-col items-center justify-center">
          <div className="flex justify-start items-start flex-col w-full gap-5">
            <h2
              ref={heading1}
              className="text-white text-[40px] sm:text-[48px] font-bold"
            >
              Tokenomics
            </h2>
            <div
              ref={table1}
              className="flex max-w-[1100px] roadmap overflow-x-auto justify-start items-start flex-col  w-full py-5 px-6 bg-[#05050F] border-2 border-solid border-[#b3b3b3] rounded-[30px] "
            >
              <div className="grid min-w-[1100px] grid-cols-[1.5fr__1fr__1fr__1fr__1fr__1fr__1fr__1fr] gap-5 w-full py-4 relative">
                <div className="w-full h-[2px] bg-tableBorder absolute bottom-full left-0 z-10"></div>
                <div className="w-full h-[2px] bg-tableBorder absolute top-full left-0 z-10"></div>
                <p className="text-xl font-semibold text-white">Pool</p>
                <p className="text-xl font-semibold text-white">Percentage</p>
                <p className="text-xl font-semibold text-white">NAP</p>
                <p className="text-xl font-semibold text-white">Price</p>
                <p className="text-xl font-semibold text-white">Discount$</p>
                <p className="text-xl font-semibold text-white">%On TGE</p>
                <p className="text-xl font-semibold text-white">Cliff</p>
                <p className="text-xl font-semibold text-white">Vesting</p>
              </div>
              <TokenomicsRow
                pool="Preseed Round"
                percentage="7.00%"
                tgs="14 000 000"
                price="$0.012"
                discount="80 %"
                tge="6.0 %"
                cliff={4}
                visiting={10}
              />
              <TokenomicsRow
                pool="Seed Round"
                percentage="7.00%"
                tgs="14 000 000"
                price="$0.020"
                discount="66.67 %"
                tge="7.0 %"
                cliff={3}
                visiting={8}
              />
              <TokenomicsRow
                pool="Private Round"
                percentage="12.00%"
                tgs="24 000 000"
                price="$0.035"
                discount="41.67 %"
                tge="10.0 %"
                cliff={1}
                visiting={6}
              />
              <TokenomicsRow
                pool="Public Round"
                percentage="3.00%"
                tgs="6 000 000"
                price="$0.060"
                discount="0.00 %"
                tge="20.0 %"
                cliff={0}
                visiting={3}
              />
              <TokenomicsRow
                pool="EcoSystem Pool"
                percentage="18.00%"
                tgs="36 000 000"
                price=""
                discount=""
                tge="0.0 %"
                cliff={0}
                visiting={36}
              />
              <TokenomicsRow
                pool="Staking & Reserve"
                percentage="10.00%"
                tgs="20 000 000"
                price=""
                discount=""
                tge="1.0 %"
                cliff={0}
                visiting={24}
              />
              <TokenomicsRow
                pool="Team"
                percentage="15.00%"
                tgs="30 000 000"
                price=""
                discount=""
                tge="0.0 %"
                cliff={12}
                visiting={24}
              />
              <TokenomicsRow
                pool="Liquidity"
                percentage="20.00%"
                tgs="40 000 000"
                price=""
                discount=""
                tge="16.0 %"
                cliff={0}
                visiting={24}
              />
              <TokenomicsRow
                pool="General Reserve"
                percentage="8.00%"
                tgs="16 000 000"
                price=""
                discount=""
                tge="0.0 %"
                cliff={12}
                visiting={24}
              />
              <div className="w-full min-w-[1100px]  grid-cols-[1.5fr__1fr__1fr__1fr__1fr__1fr__1fr__1fr] grid relative py-3">
                <div className="w-full h-[2px] bg-tableBorder absolute top-full  left-0 z-10"></div>
                <p className="text-lg font-medium text-white">Total</p>
                <p className="text-lg font-medium text-white">100.00 %</p>
                <p className="text-lg font-medium text-white">200 000 000</p>
              </div>
            </div>
          </div>
          <div className="flex  mt-[80px] xl:mt-[150px] xl:flex-row flex-col justify-between items-center gap-[60px] xl:gap-5 w-full">
            <div className="absolute -z-10 opacity-[0.24] -right-[30%] top-[30%] w-full max-w-[1064px] h-[700px] bg-[#a50498] blur-[250px]"></div>
            <div
              ref={table2}
              className="flex overflow-x-auto justify-start items-start flex-col gap-0  max-w-[550px] w-full py-5 px-6 bg-[#05050F] border-2 border-solid border-[#b3b3b3] rounded-[30px] relative"
            >
              <div className="grid  grid-cols-2 gap-5 w-full py-5 items-center relative">
                <div className="w-full h-[2px] bg-tableBorder absolute bottom-full left-0 z-10"></div>
                <div className="w-full h-[2px] bg-tableBorder absolute top-full left-0 z-10"></div>
                <p className="text-base sm:text-xl text-center sm:text-left font-bold text-white">
                  Inital Market Cap
                </p>
                <p className="text-base sm:text-xl text-center sm:text-left font-bold text-white">
                  Initial Circulating Supply
                </p>
              </div>
              <div className="grid  grid-cols-2 gap-5 w-full py-5">
                <p className="text-base sm:text-left text-center sm:text-lg font-normal text-white">
                  FDV
                </p>
                <p className="text-base sm:text-left text-center sm:text-lg font-normal text-white">
                  $12 000 000
                </p>
              </div>
              <div className="grid  grid-cols-2 gap-5 w-full py-5">
                <p className="text-base sm:text-left text-center sm:text-lg font-normal text-white">
                  IMC
                </p>
                <p className="text-base sm:text-left text-center sm:text-lg font-normal text-white">
                  $714 000
                </p>
              </div>
              <div className="grid  grid-cols-2 gap-5 w-full py-5">
                <p className="text-base sm:text-left text-center sm:text-lg font-normal text-white">
                  Liquidity
                </p>
                <p className="text-base sm:text-left text-center sm:text-lg font-normal text-white">
                  $384 000
                </p>
              </div>
              <div className="grid  grid-cols-2 gap-5 w-full py-5">
                <p className="text-base sm:text-left text-center sm:text-lg font-normal text-white">
                  IMC Without Liq
                </p>
                <p className="text-base sm:text-left text-center sm:text-lg font-normal text-white">
                  $330 000
                </p>
              </div>
              <div className="w-full h-[2px] bg-tableBorder absolute bottom-[3%] left-0 z-10"></div>
            </div>
            <img
              ref={pie}
              src="/explore/pie-chart.png"
              className="object-contain w-full max-w-[570px]"
              alt=""
            />
          </div>
          <div className="flex relative z-10 w-full justify-start items-start flex-col gap-10 mt-[80px] xl:mt-[130px]">
            <h2
              ref={heading2}
              className="text-white md:text-left text-center text-[40px] sm:text-[48px] font-bold"
            >
              Cumulative Vesting diagram
            </h2>
            <img
              ref={chart}
              src="/explore/chart.png"
              className="w-full object-contain"
              alt=""
            />
          </div>
        </div>
      </div>
    </>
  );
};

export default Tokenomics;

const TokenomicsRow = ({
  pool,
  percentage,
  tgs,
  price,
  discount,
  tge,
  cliff,
  visiting,
}) => {
  return (
    <div className="grid min-w-[1100px] grid-cols-[1.5fr__1fr__1fr__1fr__1fr__1fr__1fr__1fr] gap-5 w-full py-3">
      <p className="text-lg font-medium text-white">{pool}</p>
      <p className="text-lg font-medium text-white">{percentage}</p>
      <p className="text-lg font-medium text-white">{tgs}</p>
      <p className="text-lg font-medium text-white">{price}</p>
      <p className="text-lg font-medium text-white">{discount}</p>
      <p className="text-lg font-medium text-white">{tge}</p>
      <p className="text-lg font-medium text-white">{cliff}</p>
      <p className="text-lg font-medium text-white">{visiting}</p>
    </div>
  );
};

const Disclaimer = ({ setModal }) => {
  return (
    <>
      <div
        onClick={() => setModal(false)}
        className="fixed  top-0 left-0 w-full h-full z-[88] bg-black opacity-60"
      ></div>
      <div className="fixed   top-1/2 left-1/2 -translate-y-1/2 max-w-[800px] rounded-[20px] z-[90] md:overflow-y-visible overflow-y-auto  max-h-[90%] w-[90%]  -translate-x-1/2">
        <div className="absolute md:block hidden -inset-[1px] bg-blueGr -z-20 rounded-[20px] "></div>
        <div className="w-full p-4 sm:p-6 h-full flex justify-start items-center rounded-[20px] roadmap flex-col gap-4 bg-black">
          <h3 className="gr-text text-[50px] -mb-4 font-bold">Disclaimer</h3>
          <p className="text-white sm:text-base text-sm leading-[1.4] text-center ">
            The information on this page, in whole or in part, may not be
            exported or redistributed to a country or location where the
            distribution of crypto-related material is prohibited, restricted,
            or otherwise illegal. This section is for informational purposes
            only. It is not an offer for sale, invitation to purchase, and/or
            subscribe to any crypto asset, security, or any other financial
            instrument or investment product. All the information displayed here
            is not intended to be exhaustive and should not be construed as part
            of any formal agreement. None of the information in this page
            constitutes or should be relied upon as a suggestion or
            recommendation, offer or other solicitation to engage in, or refrain
            from engaging in any purchase, or any other investment-related
            activity with respect to any other transaction. By reading and
            accepting this, the reader represents and warrants that they
            understood, accepted, and acknowledged that the cryptocurrency
            market involves risks that require careful management. Potential
            participants should consider these aspects carefully before deciding
            whether they want to continue to participate in any further activity
            related to the crypto market. The reader will be responsible for
            being aware of any potential risks which may arise in connection
            with the information that can be found here.
          </p>
          <div className="flex w-full justify-center items-center gap-4">
            <div
              className="w-full max-w-[150px]"
              onClick={() => setModal(false)}
            >
              <GradientButton
                text="Accept"
                classes="max-w-[150px] w-full h-[50px] hover:w-[200px]"
              />
            </div>
            <div
              className="w-full max-w-[150px]"
              onClick={() => setModal(false)}
            >
              <GradientButton
                text="Cancel"
                classes="w-full max-w-[150px] h-[50px] hover:w-[200px]"
              />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
