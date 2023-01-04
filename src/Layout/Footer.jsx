const Footer = () => {
  return (
    <div className="wrapper mt-[60px] lg:mt-[100px]">
      <div className="contain pt-[40px] sm:pt-[60px] pb-5 justify-start items-center flex-col">
        <footer className="w-full flex flex-col lg:flex-row justify-between items-center sm:items-start gap-5">
          <img src="/foot-logo.png" alt="" />
          <div className=" flex justify-start items-center sm:items-start flex-col gap-5">
            <a href="#" className="text-white text-base font-semibold">
              Ecosystem
            </a>
            <a href="#" className="text-white text-base font-semibold">
              Blog
            </a>
            <a href="#" className="text-white text-base font-semibold">
              Pricing
            </a>
            <a href="#" className="text-white text-base font-semibold">
              About Us
            </a>
          </div>
          <div className=" flex justify-start items-center sm:items-start flex-col gap-5">
            <a href="#" className="text-white text-base font-semibold">
              Naplozz App
            </a>
            <a href="#" className="text-white text-base font-semibold">
              Naplozz Wizard
            </a>
            <a href="#" className="text-white text-base font-semibold">
              Task management
            </a>
            <a href="#" className="text-white text-base font-semibold">
              Log management
            </a>
            <a href="#" className="text-white text-base font-semibold">
              Naplozz Audit
            </a>
            <a href="#" className="text-white text-base font-semibold">
              Naplozz Attendance
            </a>
          </div>
          <div className=" flex justify-start items-center sm:items-start flex-col gap-5">
            <a href="#" className="text-white text-base font-semibold">
              How it works
            </a>
            <a href="#" className="text-white text-base font-semibold">
              Token flow
            </a>
            <a href="#" className="text-white text-base font-semibold">
              Tokenomics
            </a>
            <a href="#" className="text-white text-base font-semibold">
              White paper
            </a>
          </div>
          <div className=" flex justify-start items-center sm:items-start flex-col gap-5">
            <a href="#" className="text-white text-base font-semibold">
              Catering
            </a>
            <a href="#" className="text-white text-base font-semibold">
              Public catering
            </a>
            <a href="#" className="text-white text-base font-semibold">
              Accommodation
            </a>
            <a href="#" className="text-white text-base font-semibold">
              Food producer
            </a>
            <a href="#" className="text-white text-base font-semibold">
              Food retail
            </a>
            <a href="#" className="text-white text-base font-semibold">
              Industrial activity
            </a>
            <a href="#" className="text-white text-base font-semibold">
              See All
            </a>
          </div>
        </footer>
        <div className="justify-center flex mt-[40px] items-center w-full gap-5">
          <a href="#" className="text-sm sm:text-base text-pink font-normal">
            © Naplozz 2022
          </a>
          <a href="#" className="text-sm sm:text-base text-pink font-normal">
            Privacy Policy
          </a>
          <a href="#" className="text-sm sm:text-base text-pink font-normal">
            Terms of Use
          </a>
        </div>
      </div>
    </div>
  );
};

export default Footer;
