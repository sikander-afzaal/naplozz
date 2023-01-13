import {
  faGithub,
  faLinkedin,
  faTwitter,
} from "@fortawesome/free-brands-svg-icons";
import { faChevronDown } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useState } from "react";

const Team = () => {
  const TEAM_DATA = [
    {
      name: "Gabor Kiss",
      role: "The CEO and Founder",
      img: "/about/team1.png",
      desc: " Gabor is an entrepreneur and a certified business manager who has worked with over 800 companies as a responsible for creating their quality management program.​ He founded Sattva Guidance compliance and auditor system that have helped hundreds of clients to achieve 90% plus regulatory compliance. A crypto enthusiast who is involved in this space since 2016.​ ",
      link: {
        linkedin: "https://www.linkedin.com/in/g%C3%A1bor-kiss-b21660165/",
        twitter: "https://twitter.com/KG11008",
      },
    },
    {
      name: "Zsolt Hegyvari",
      role: " The Co-founder and Chairman",
      img: "/about/team2.png",
      desc: "Zsolt graduated in 2004 at the University of Economics in Pécs(Hungary). He established and succeeded several companies in various segments of the economy. He has nearly 30 years of experience as a managing director, of which the last 15 years he has been the leader of a significant Hungarian agricultural company group. ",
      link: {
        linkedin: "https://www.linkedin.com/in/zsolt-hegyvari-793176256/ ",
        twitter: "https://twitter.com/zsolt_hegyvari",
      },
    },
    {
      name: "Balazs Hornyanszky",
      role: "CSO",
      img: "/about/team3.png",
      desc: "He graduated from the Budapest University of Technology and Economics as a biological engineer, specializing in human health. The main focus of his studies was microbiology and biology in food chemistry. He also wrote his thesis in the field of food microbiology at the Budapest Central Food Research Institute. At the beginning of the 2000s, he carried out several years of research, the result of which, together with his co-author, he wrote the book The IQ of Nature, the English edition of which won the 3 most successful book awards in the US. He has a great experience in quality management and community development too. ",
      link: {
        linkedin:
          "https://www.linkedin.com/in/bal%C3%A1zs-horny%C3%A1nszky-26a666247/ ",
        twitter: "https://twitter.com/HornyanszkyB ",
      },
    },
    {
      name: "Peter Gorog",
      role: "BI Manager",
      img: "/about/team4.png",
      desc: "Peter is a customer-focused business-minded leader with 7+ years of experience in providing technical support for different types of applications and clients, as the projects coming with those. Next to it, He has 3+ years in leading L2 and L3 support teams so as vendor and asset management. ",
      link: {
        linkedin: "https://www.linkedin.com/in/peter-gorog-81912146/ ",
      },
    },
    {
      name: "Noor Al Hassan",
      role: "Head of Development",
      img: "/about/team5.png",
      desc: "Noor ul Hassan is a software developer. He completed a BS Degree in Computer Science from a well-reputed university in Pakistan. He worked as a full-stack engineer at Full Stack Engineer DMechs.",
      link: {
        github: "https://github.com/NoorulHassan364",
        linkedin: "https://www.linkedin.com/in/noor-ul-hassan-641413214/",
        twitter: "https://twitter.com/NoorUlH01785547",
      },
    },
    {
      name: "Balint Mendli",
      role: "Product Advisor",
      img: "/about/team6.png",
      desc: "Bálint Mendli graduated from the Budapest University of Technology and Economics.  He is a JavaScript enthusiast, comfortable with both front and back-end, and fanatic about building beautiful web applications and solving challenging problems. His professionalism has been a great help since Naplozz was started.",
      link: {
        github: "https://github.com/zenott",
        linkedin: "https://www.linkedin.com/in/balint-mendli/",
      },
    },
    {
      name: "Virag Mendline Kiss",
      role: "Web designer",
      img: "/about/team7.png",
      desc: "Working in the blockchain Industry since 2017. Managed blockchain events such as Blockchain Summit Dubai and Blockbali. Working with leading cryptocurrency projects. Helping projects grow in audience, investments, developments and partnerships.",
      link: {
        linkedin: "https://www.linkedin.com/in/leonardus-soeterbroek/",
      },
    },
    {
      name: "Adeeb Ahmad ",
      role: "Senior web developer and advisor ",
      img: "/about/team6.png",
      desc: "Adeeb Ahmad graduated from the University of Agriculture, Faisalabad.  He is a professional web developer with 3 years of experience in HTML, CSS, Bootstrap, Materialize, TailwindCSS, JS, Typescript, React(with Javascript & Typescript), Firebase & NodeJS.   He was working on projects like Secondwinery and Docterio and several others. ",
      link: {
        linkedin: "https://www.linkedin.com/in/adeebahmad01/",
      },
    },
    {
      name: "Nilesh Kikani",
      role: "Product and Blockchain advisor",
      img: "/about/team6.png",
      desc: "Nilesh is a passionate senior iOS developer who is highly interested in working on challenging and innovative projects. He is a business OWNER with experience designing and building software solutions. Currently, he is a Director at Logistic Infotech, and he and his team a great help for us in developing our product. ",
      link: {
        linkedin: "https://www.linkedin.com/in/nilesh-kikani-a1099242/ ",
      },
    },

    {
      name: "Leonardus Soeterbroek",
      role: "BI Manager",
      img: "/about/team6.png",
      link: {
        linkedin: "https://www.linkedin.com/in/virag-mendline-kiss-073267247/",
      },
    },
    {
      name: "Tas ",
      role: "Community Manager",
      img: "/about/team6.png",
      link: {
        twitter: "https://twitter.com/balogh_tas",
      },
    },
    {
      name: "Umair Ali",
      role: "Umair Ali",
      img: "/about/team6.png",
      link: {
        linkedin: "https://www.linkedin.com/in/muhammad-umair-ali-4274621b2/ ",
      },
    },
    {
      name: "Suhail",
      role: "Community Manager",
      img: "/about/team6.png",
    },
    {
      name: "Abdul Hanan",
      role: "Web designer",
      img: "/about/team6.png",
      link: {
        linkedin: "https://www.linkedin.com/in/abdul-hanan-webdev/",
      },
    },
    {
      name: "Muhammad Arif ",
      role: "Graphic designer ",
      img: "/about/team6.png",
      link: {
        linkedin: "https://www.linkedin.com/in/muhammad-arif-7664b4221/",
      },
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
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 w-full sm:items-start place-items-center gap-y-[40px] lg:gap-x-5 lg:gap-y-10">
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

const TeamBox = ({ img, name, role, desc, link }) => {
  const [expanded, setExpanded] = useState(false);
  return (
    <div className="flex justify-start items-center flex-col gap-1 ">
      <img
        src={img}
        className="rounded-full w-[148px] h-[148px] object-contain"
        alt=""
      />
      <h4 className="gr-text font-bold text-2xl text-center">{name}</h4>
      <p className="text-[#b3b3b3] text-xl">{role}</p>
      {link || desc ? (
        <>
          <FontAwesomeIcon
            icon={faChevronDown}
            onClick={() => setExpanded((prev) => !prev)}
            className={`text-white text-sm cursor-pointer transition-all duration-500 ${
              expanded ? "rotate-180" : "rotate-0"
            }`}
          />
          <div
            className={`flex justify-start ${
              expanded ? "max-h-[2000px] pt-2" : "max-h-0 pt-0"
            } items-center gap-5 flex-col overflow-hidden transition-all duration-500`}
          >
            <p className="text-white text-center">{desc}</p>
            <div className="flex justify-center items-center gap-5 ">
              {link?.github && (
                <a href={link.github} target={"blank"}>
                  <FontAwesomeIcon
                    icon={faGithub}
                    className="text-white text-2xl cursor-pointer"
                  />
                </a>
              )}
              {link?.twitter && (
                <a href={link.twitter} target={"blank"}>
                  <FontAwesomeIcon
                    icon={faTwitter}
                    className="text-white text-2xl cursor-pointer"
                  />
                </a>
              )}
              {link?.linkedin && (
                <a href={link.linkedin} target={"blank"}>
                  <FontAwesomeIcon
                    icon={faLinkedin}
                    className="text-white text-2xl cursor-pointer"
                  />
                </a>
              )}
            </div>
          </div>
        </>
      ) : (
        ""
      )}
    </div>
  );
};
