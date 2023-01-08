const Tokenomics = () => {
  return (
    <div className="wrapper mt-[100px] relative isolate">
      <img
        src="/explore/token-bg.png"
        alt=""
        className="absolute right-0 top-[20%] sm:top-[10%] -z-10 max-w-[300px] w-full"
      />
      <div className="absolute opacity-50 w-full -left-[30%]  -top-[13%] -z-10 blur-[250px] bg-greenRadial max-w-[804px] h-[804px]"></div>
      <div className="contain flex-col items-center justify-center">
        <div className="flex justify-start items-start flex-col w-full gap-5">
          <h2 className="text-white text-[40px] sm:text-[48px] font-bold">
            Tokenomics
          </h2>
          <div className="flex max-w-[1100px] roadmap overflow-x-auto justify-start items-start flex-col  w-full py-5 px-6 bg-[#05050F] border-2 border-solid border-[#b3b3b3] rounded-[30px] ">
            <div className="grid min-w-[1100px] grid-cols-[1.5fr__1fr__1fr__1fr__1fr__1fr__1fr__1fr] gap-5 w-full py-4 relative">
              <div className="w-full h-[2px] bg-tableBorder absolute bottom-full left-0 z-10"></div>
              <div className="w-full h-[2px] bg-tableBorder absolute top-full left-0 z-10"></div>
              <p className="text-xl font-semibold text-white">Pool</p>
              <p className="text-xl font-semibold text-white">Percentage</p>
              <p className="text-xl font-semibold text-white">%TGS</p>
              <p className="text-xl font-semibold text-white">Price</p>
              <p className="text-xl font-semibold text-white">Discount$</p>
              <p className="text-xl font-semibold text-white">%On TGE</p>
              <p className="text-xl font-semibold text-white">Cliff</p>
              <p className="text-xl font-semibold text-white">Vesting</p>
            </div>
            <TokenomicsRow
              pool="Preseed Round"
              percentage="6.00%"
              tgs="12 000 000"
              price="$0.014"
              discount="76.67 %"
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
              percentage="9.00%"
              tgs="18 000 000"
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
          <div className="flex overflow-x-auto justify-start items-start flex-col gap-0  max-w-[550px] w-full py-5 px-6 bg-[#05050F] border-2 border-solid border-[#b3b3b3] rounded-[30px] relative">
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
            src="/explore/pie-chart.png"
            className="object-contain w-full max-w-[570px]"
            alt=""
          />
        </div>
        <div className="flex relative z-10 w-full justify-start items-start flex-col gap-10 mt-[80px] xl:mt-[130px]">
          <h2 className="text-white md:text-left text-center text-[40px] sm:text-[48px] font-bold">
            Cumulative Vesting diagram
          </h2>
          <img
            src="/explore/chart.png"
            className="w-full object-contain"
            alt=""
          />
        </div>
      </div>
    </div>
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
