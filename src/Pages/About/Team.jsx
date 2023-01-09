import { faChevronDown } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const Team = () => {
  const TEAM_DATA = [
    {
      name: "Gabor Kiss",
      role: "The CEO and Founder",
      img: "/about/team1.png",
    },
    {
      name: "Hegyvari Zsolt",
      role: " The Co-founder and Chairman",
      img: "/about/team2.png",
    },
    {
      name: "Balazs Hornyanszky",
      role: "Professional Advisor",
      img: "/about/team3.png",
    },
    {
      name: "Peter Gorog",
      role: "BI Manager",
      img: "/about/team4.png",
    },
    {
      name: "Noor Al Hassan",
      role: "Head of Development",
      img: "/about/team5.png",
    },
    {
      name: "Balint Mendli",
      role: "Product Advisor",
      img: "/about/team6.png",
    },
  ];
  return (
    <div className="wrapper mt-[100px] relative lg:mt-[130px]">
      <div className="absolute left-0 opacity-[0.24] -translate-x-1/2 -z-10 top-[40%] bg-[#a50498] blur-[250px] w-full max-w-[1064px] h-[688px]"></div>
      <div className="absolute left-1/2 opacity-10 -translate-x-1/2 -z-10 top-[30%] bg-btnGr blur-[130px] w-full max-w-[1709px] h-[533px]"></div>
      <div className="absolute team -right-[20%] top-0 bg-greenRadial -z-10 w-full max-w-[804px] h-[804px] blur-[111px] mix-blend-screen"></div>
      <img
        src="/about/side.png"
        className="absolute right-0 top-[60%] -z-10"
        alt=""
      />
      <div className="contain flex-col justify-start items-center lg:items-start">
        <h2 className="gr-text font-bold text-[55px] sm:text-[72px]">
          About Us
        </h2>
        <div className="flex justify-start items-center flex-col gap-6 w-full mt-[10px] lg:mt-[30px]">
          <h3 className="text-white font-bold text-2xl sm:text-[40px] text-center">
            Our Vibrant Team
          </h3>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 w-full place-items-center gap-y-[40px] lg:gap-5">
            {TEAM_DATA.map((elem, idx) => {
              return <TeamBox {...elem} key={"team" + "name" + idx} />;
            })}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Team;

const TeamBox = ({ img, name, role }) => {
  return (
    <div className="flex justify-start items-center flex-col gap-1 ">
      <img
        src={img}
        className="rounded-full w-[148px] h-[148px] object-contain"
        alt=""
      />
      <h4 className="gr-text font-bold text-2xl text-center">{name}</h4>
      <p className="text-[#b3b3b3] text-xl">{role}</p>
      <FontAwesomeIcon icon={faChevronDown} className="text-white text-sm" />
    </div>
  );
};
