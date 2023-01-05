const Tokenomics = () => {
  return (
    <div className="wrapper mt-[100px]">
      <div className="contain flex-col items-center justify-center">
        <div className="flex justify-start items-start flex-col w-full gap-5">
          <h2 className="text-white text-[40px] sm:text-[48px] font-bold">
            Tokenomics
          </h2>
          <div className="flex overflow-x-auto justify-start items-start flex-col gap-5 w-full py-5 px-6 bg-[#05050F] border-2 border-solid border-[#b3b3b3] rounded-[30px] ">
            <div className="grid min-w-[1200px] grid-cols-8 gap-5 w-full py-5 relative">
              <div className="w-full h-[2px] bg-tableBorder absolute bottom-full left-0 z-10"></div>
              <div className="w-full h-[2px] bg-tableBorder absolute top-full left-0 z-10"></div>
              <p className="text-xl font-bold text-white">Pool</p>
              <p className="text-xl font-bold text-white">Percentage</p>
              <p className="text-xl font-bold text-white">%TGS</p>
              <p className="text-xl font-bold text-white">Price</p>
              <p className="text-xl font-bold text-white">Discount$</p>
              <p className="text-xl font-bold text-white">%On TGE</p>
              <p className="text-xl font-bold text-white">Cliff</p>
              <p className="text-xl font-bold text-white">Visiting</p>
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
              pool="Preseed Round"
              percentage="6.00%"
              tgs="12 000 000"
              price="$0.014"
              discount="76.67 %"
              tge="6.0 %"
              cliff={4}
              visiting={10}
            />
            <div className="w-full min-w-[1200px]  grid-cols-8 grid relative py-4">
              <div className="w-full h-[2px] bg-tableBorder absolute top-full  left-0 z-10"></div>
              <p className="text-lg font-semibold text-white">Total</p>
              <p className="text-lg font-semibold text-white">100.00 %</p>
              <p className="text-lg font-semibold text-white">200 000 000</p>
            </div>
          </div>
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
    <div className="grid min-w-[1200px] grid-cols-8 gap-5 w-full py-5">
      <p className="text-lg font-semibold text-white">{pool}</p>
      <p className="text-lg font-semibold text-white">{percentage}</p>
      <p className="text-lg font-semibold text-white">{tgs}</p>
      <p className="text-lg font-semibold text-white">{price}</p>
      <p className="text-lg font-semibold text-white">{discount}</p>
      <p className="text-lg font-semibold text-white">{tge}</p>
      <p className="text-lg font-semibold text-white">{cliff}</p>
      <p className="text-lg font-semibold text-white">{visiting}</p>
    </div>
  );
};
