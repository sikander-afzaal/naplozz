const Ecosystem = () => {
  return (
    <div className="wrapper mt-[60px] sm:mt-[100px]">
      <div className="contain flex-col items-start justify-start">
        <div className="flex item-center sm:text-left gap-2 text-center justify-start sm:max-w-[530px] sm:items-start flex-col">
          <h2 className="gr-text text-[40px] leading-[1.1]  sm:text-[48px] font-bold">
            Naplozz Ecosystem
          </h2>
          <p className="text-white font-medium text-xl">
            Naplozz not just offers quality management and data tracking but it
            is a whole ecosystem of useful tools, so you can focus on what you
            do best: running a business and create value.
          </p>
        </div>
        <div className="grid mt-[40px]   sm:mt-[60px] gap-[0px] self-center grid-cols-2 xs:grid-cols-3 relative w-full max-w-[650px] grid-rows-[auto__1fr__1fr] sm:gap-0 gap-y-[40px] xs:gap-y-[60px] sm:grid-rows-[240px__auto__240px]">
          <div className="rounded-full self-center justify-self-center xs:justify-self-start xs:self-end w-[140px] h-[140px]  isolate relative">
            <p className="bg-purple text-pink text-base font-bold uppercase text-center w-full h-full flex justify-center items-center rounded-full">
              Naplozz <br /> Star
            </p>
            <div className="absolute -inset-[4px] bg-blueGr -z-10 rounded-full"></div>
            <div className="absolute left-[129%] bg-blueGr h-[110px] -z-20 w-[6px] hidden sm:block top-[54%] -rotate-[62deg]"></div>
          </div>
          <div className="rounded-full  self-start justify-self-center  w-[140px] h-[140px]  isolate relative">
            <p className="bg-purple text-pink text-base font-bold uppercase text-center w-full h-full flex justify-center items-center rounded-full">
              Naplozz <br /> App
            </p>
            <div className="absolute -inset-[4px] bg-blueGr -z-10 rounded-full"></div>
            <div className="absolute left-1/2 -translate-x-1/2 bg-blueGr h-full -z-20 w-[6px] hidden sm:block top-full"></div>
          </div>
          <div className="rounded-full self-center justify-self-center xs:self-end xs:justify-self-end   w-[140px] h-[140px]  isolate relative">
            <p className="bg-purple text-pink text-base font-bold uppercase text-center w-full h-full flex justify-center items-center rounded-full">
              Naplozz <br /> Education AND
            </p>
            <div className="absolute -inset-[4px] bg-blueGr -z-10 rounded-full"></div>
            <div className="absolute right-[129%] bg-blueGr h-[110px] -z-20 w-[6px] hidden sm:block top-[54%] rotate-[62deg]"></div>
          </div>
          {/* //center ecosystem --------------- */}
          <div className="rounded-[30px] z-20 xs:col-start-1 col-start-1 xs:col-end-4 col-end-3 sm:row-start-2 row-start-1 sm:row-end-3 row-end-2 self-center justify-self-center w-[219px] h-[114px]  isolate relative">
            <div className="bg-purple flex-col gap-3 px-5  w-full h-full flex justify-center items-center rounded-[30px]">
              <button className="rounded-full h-[32px] w-full text-pink text-lg font-bold border-2 border-solid border-pink bg-transparent">
                Naplozz Chain
              </button>
              <button className="rounded-full h-[32px] w-full text-pink text-lg font-bold border-2 border-solid border-pink bg-transparent">
                Naplozz Coin
              </button>
            </div>
            <div className="absolute -inset-[4px] bg-blueGr -z-10 rounded-[30px]"></div>
          </div>
          {/* //center ecosystem end --------------- */}
          <div className="rounded-full self-center justify-self-center xs:self-start xs:justify-self-start w-[140px] h-[140px]  isolate relative">
            <p className="bg-purple text-pink text-base font-bold uppercase text-center w-full h-full flex justify-center items-center rounded-full">
              Naplozz <br /> Wizard
            </p>
            <div className="absolute -inset-[4px] bg-blueGr -z-10 rounded-full"></div>
            <div className="absolute left-[129%] bg-blueGr h-[110px] -z-20 w-[6px] hidden sm:block bottom-[54%] rotate-[62deg]"></div>
          </div>
          <div className="rounded-full self-end  justify-self-center w-[140px] h-[140px]  isolate relative">
            <p className="bg-purple text-pink text-base font-bold uppercase text-center w-full h-full flex justify-center items-center rounded-full">
              Naplozz <br /> Certification System
            </p>
            <div className="absolute -inset-[4px] bg-blueGr -z-10 rounded-full"></div>{" "}
            <div className="absolute left-1/2 -translate-x-1/2 bg-blueGr h-full -z-20 w-[6px] hidden sm:block bottom-full"></div>
          </div>
          <div className="rounded-full self-center justify-self-center xs:self-start xs:justify-self-end w-[140px] h-[140px]  isolate relative">
            <p className="bg-purple text-pink text-base font-bold uppercase text-center w-full h-full flex justify-center items-center rounded-full">
              Naplozz <br /> Marketplace
            </p>
            <div className="absolute -inset-[4px] bg-blueGr -z-10 rounded-full"></div>
            <div className="absolute right-[129%] bg-blueGr h-[110px] -z-20 w-[6px] hidden sm:block bottom-[54%] -rotate-[62deg]"></div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Ecosystem;
