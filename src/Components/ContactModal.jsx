import { useEffect } from "react";

const ContactModal = ({ setModal }) => {
  useEffect(() => {
    setTimeout(() => {
      setModal(false);
    }, 5000);
  }, []);

  return (
    <>
      <div
        onClick={() => setModal(false)}
        className="fixed top-0 left-0 w-full h-full z-[99] bg-black opacity-60"
      ></div>
      <div className="fixed rounded-[20px] z-[100] top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-[#050505] flex justify-between  overflow-hidden items-center py-8 px-6 lg:p-0 lg:h-[300px] w-[90%] max-w-[700px]">
        <img
          src="/close.png"
          className="absolute right-3 top-4 object-contain w-[33px] cursor-pointer z-10"
          alt=""
        />
        <div className="absolute top-[50%] opacity-[0.15] -left-[50%] -z-10 w-[603px] h-[242px] blur-[100px] bg-[#0262f7] rotate-[41.82deg]"></div>
        <div className="absolute bottom-[50%] opacity-[0.15] -left-[10%] -z-10 w-[603px] h-[242px] blur-[100px] bg-btnGr rotate-[-2.41deg]"></div>
        <div className="flex lg:w-auto w-full justify-start items-center lg:text-left text-center lg:items-start flex-col gap-4 lg:gap-3 lg:px-5">
          <img
            src="/tick.png"
            className="object-contain w-[60px] self-center"
            alt=""
          />
          <p className="text-[#B3B3B3] font-medium text-lg sm:text-xl leading-[1]">
            Thank you for submitting the form
          </p>
          <h4 className="gr-text text-[35px] sm:text-[40px] font-extrabold leading-[1.1]">
            We will Contact <br /> you shortly
          </h4>
        </div>
        <img src="/pop-up-bg.png" className="lg:block hidden" alt="" />
      </div>
    </>
  );
};

export default ContactModal;
